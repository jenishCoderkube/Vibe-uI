const fs = require('fs')
const path = require('path')

function stripTypeScript(code) {
  let js = code

  // 1. Remove "import type ..." lines
  js = js.replace(/import\s+type\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '')
  // Clean up "type" imports within braces, e.g. import { tv, type VariantProps }
  js = js.replace(/,\s*type\s+[A-Za-z0-9_]+/g, '')
  js = js.replace(/type\s+[A-Za-z0-9_]+\s*,/g, '')

  // 2. Remove all interface declarations
  let pos = 0
  while (true) {
    const match = js.match(/(?:export\s+)?interface\s+\w+[\s\S]*?{/)
    if (!match) break
    const startIdx = match.index
    const braceStart = startIdx + match[0].length - 1
    let braceCount = 1
    let endIdx = braceStart + 1
    while (braceCount > 0 && endIdx < js.length) {
      if (js[endIdx] === '{') braceCount++
      else if (js[endIdx] === '}') braceCount--
      endIdx++
    }
    js = js.substring(0, startIdx) + js.substring(endIdx)
  }

  // 3. Remove all type declarations, e.g. type Foo = ... or export type Foo = ...
  while (true) {
    const match = js.match(/(?:export\s+)?type\s+\w+\s*(?:<[^>]+>)?\s*=/)
    if (!match) break
    const startIdx = match.index
    let endIdx = startIdx + match[0].length

    // Skip spaces
    while (endIdx < js.length && /\s/.test(js[endIdx])) {
      endIdx++
    }

    if (js[endIdx] === '{') {
      // It's a block type, find matching '}'
      let braceCount = 1
      endIdx++
      while (braceCount > 0 && endIdx < js.length) {
        if (js[endIdx] === '{') braceCount++
        else if (js[endIdx] === '}') braceCount--
        endIdx++
      }
      // Check if followed by semicolon
      if (endIdx < js.length && js[endIdx] === ';') {
        endIdx++
      }
    } else {
      // Find semicolon or end of statement/line
      let hasSemicolon = false
      while (endIdx < js.length) {
        if (js[endIdx] === ';') {
          endIdx++
          hasSemicolon = true
          break
        }
        if (js[endIdx] === '\n') {
          // Check if previous non-space line content ends with |, &, or a comma
          const beforeNewline = js.substring(startIdx, endIdx).trim()
          if (
            beforeNewline.endsWith('&') ||
            beforeNewline.endsWith('|') ||
            beforeNewline.endsWith(',')
          ) {
            // Continues on next line
            endIdx++
            continue
          } else {
            break
          }
        }
        endIdx++
      }
    }
    js = js.substring(0, startIdx) + js.substring(endIdx)
  }

  // 4. Remove generics from function calls / definitions / hook calls / createContext
  js = js.replace(
    /(React\.)?(forwardRef|createContext|useRef|useState|useCallback|useMemo)<[^>]+>/g,
    '$1$2',
  )
  js = js.replace(/([a-zA-Z0-9_]+)<[^>]+>(?=\()/g, '$1')

  // 5. Remove return type annotations from functions
  js = js.replace(
    /\):\s*[A-Za-z0-9_.]+(?:<[^>]+>)?([\[\]]+)?(?=\s*(?:=>|{))/g,
    ')',
  )

  // 6. Remove parameter type annotations (only matches uppercase type names, primitives, or utility types, ensuring ES6 destructuring aliases like value: itemValue are preserved)
  js = js.replace(
    /:\s*(?:[A-Z][A-Za-z0-9_.]*|string|number|boolean|any|unknown|object|void|symbol|never|undefined|null|Omit|Pick|Record|Partial|Required|Readonly)(?:<[^>]+>)?(\s*&\s*[A-Za-z0-9_.]+(?:<[^>]+>)?)*\s*(?=[,)]|=[^>])/g,
    '',
  )

  // 7. Remove type assertions (ensure we don't match import * as ... or import { Slot as ... })
  js = js.replace(
    /(?<!\*)\s+as\s+(?:any|const|Node|HTML[A-Za-z0-9_]*Element|React\.[A-Za-z0-9_]+(?:<[^>]+>)?|[A-Z][A-Za-z0-9_]*(?:<[^>]+>)?)/g,
    '',
  )

  return js.trim().replace(/\n{3,}/g, '\n\n')
}

const componentsDir = path.resolve(__dirname, '../packages/ui/src/components')
const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.tsx'))

let failedCount = 0
for (const file of files) {
  const filePath = path.join(componentsDir, file)
  const code = fs.readFileSync(filePath, 'utf8')
  try {
    const stripped = stripTypeScript(code)
    // Simple check: make sure there are no interface or type definitions
    const lines = stripped.split('\n')
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (line.match(/\binterface\s+\w+/)) {
        console.log(
          `[WARN] File ${file} line ${i + 1} has interface definition: ${line}`,
        )
      }
      if (line.match(/\btype\s+\w+\s*=/)) {
        console.log(
          `[WARN] File ${file} line ${i + 1} has type definition: ${line}`,
        )
      }
    }
    // Also check for any common TypeScript leftovers like React.forwardRef< or useRef<
    if (
      stripped.match(/React\.forwardRef</) ||
      stripped.match(/useRef</) ||
      stripped.match(/useState</)
    ) {
      console.log(`[WARN] File ${file} contains unstripped React generics.`)
    }
  } catch (err) {
    console.error(`Failed to process ${file}:`, err)
    failedCount++
  }
}

if (failedCount === 0) {
  console.log('All files processed successfully without exceptions.')
} else {
  console.log(`${failedCount} files failed.`)
}
