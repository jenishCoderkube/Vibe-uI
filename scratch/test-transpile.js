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
  // A type declaration starts with 'type' or 'export type' and can have brackets or blocks.
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
      // If the line ends with &, |, or union/extends, it continues.
      // Let's just consume until a newline that doesn't end with a continuing character,
      // or until we hit a semicolon.
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
  // We match "as" only if it is NOT preceded by "*" and not followed by "React" inside imports,
  // or more specifically, match as followed by types like any, const, Node, HTML*Element, etc.
  js = js.replace(
    /(?<!\*)\s+as\s+(?:any|const|Node|HTML[A-Za-z0-9_]*Element|React\.[A-Za-z0-9_]+(?:<[^>]+>)?|[A-Z][A-Za-z0-9_]*(?:<[^>]+>)?)/g,
    '',
  )

  return js.trim().replace(/\n{3,}/g, '\n\n')
}

const selectCode = fs.readFileSync(
  path.resolve(__dirname, '../packages/ui/src/components/select.tsx'),
  'utf8',
)
const output = stripTypeScript(selectCode)

console.log('--- OUTPUT ---')
console.log(output)
console.log('--- END OUTPUT ---')
