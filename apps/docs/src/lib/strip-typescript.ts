/**
 * Utility function to cleanly transform TypeScript/TSX code snippets into pure JavaScript/JSX.
 * Removes type annotations, interfaces, type aliases, generics, type assertions, and type-only imports
 * while preserving all UI logic, behavior, styling, component structure, and comments.
 */
export function stripTypeScript(code: string): string {
  if (!code) return ''

  let js = code

  // 1. Remove "import type ..." lines completely
  js = js.replace(/^import\s+type\s+[\s\S]*?from\s+['"][^'"]+['"];?\n?/gm, '')
  js = js.replace(/,\s*type\s+[A-Za-z0-9_]+/g, '')
  js = js.replace(/type\s+[A-Za-z0-9_]+\s*,\s*/g, '')
  js = js.replace(/{\s*type\s+[A-Za-z0-9_]+\s*}/g, '{}')
  js = js.replace(/^import\s*{\s*}\s*from\s+['"][^'"]+['"];?\n?/gm, '')

  // 2. Remove "interface" declarations with nested brace tracking
  while (true) {
    const match = js.match(/(?:export\s+)?interface\s+\w+[\s\S]*?{/)
    if (!match) break
    const startIdx = match.index!
    const braceStart = startIdx + match[0].length - 1
    let braceCount = 1
    let endIdx = braceStart + 1
    while (braceCount > 0 && endIdx < js.length) {
      if (js[endIdx] === '{') braceCount++
      else if (js[endIdx] === '}') braceCount--
      endIdx++
    }
    let cutEnd = endIdx
    if (js[cutEnd] === ';') cutEnd++
    js = js.substring(0, startIdx) + js.substring(cutEnd)
  }

  // 3. Remove "type" alias declarations (type Foo = ...)
  while (true) {
    const match = js.match(/(?:export\s+)?type\s+\w+\s*(?:<[\s\S]*?>)?\s*=/)
    if (!match) break
    const startIdx = match.index!
    let endIdx = startIdx + match[0].length
    while (endIdx < js.length && /\s/.test(js[endIdx])) endIdx++

    let braceCount = 0
    let angleCount = 0
    let parenCount = 0
    while (endIdx < js.length) {
      const ch = js[endIdx]
      if (ch === '{') braceCount++
      else if (ch === '}') braceCount--
      else if (ch === '<') {
        angleCount++
      } else if (ch === '>') {
        if (endIdx === 0 || js[endIdx - 1] !== '=') {
          angleCount--
        }
      } else if (ch === '(') parenCount++
      else if (ch === ')') parenCount--
      else if (ch === ';' && braceCount <= 0 && angleCount <= 0 && parenCount <= 0) {
        endIdx++
        break
      } else if (ch === '\n' && braceCount <= 0 && angleCount <= 0 && parenCount <= 0) {
        const prevText = js.substring(startIdx, endIdx).trim()
        const nextLine = js.substring(endIdx + 1).trim()
        if (
          prevText.endsWith('&') ||
          prevText.endsWith('|') ||
          prevText.endsWith(',') ||
          nextLine.startsWith('|') ||
          nextLine.startsWith('&') ||
          nextLine.startsWith('?') ||
          nextLine.startsWith(':')
        ) {
          endIdx++
          continue
        } else {
          endIdx++
          break
        }
      }
      endIdx++
    }
    js = js.substring(0, startIdx) + js.substring(endIdx)
  }

  // 4. Remove const / let / var inline object type annotations: const FOO: { ... }[] = or let FOO: { ... } =
  while (true) {
    const match = js.match(/(const|let|var)\s+([A-Za-z0-9_]+)\s*:\s*\{/)
    if (!match) break
    const colonIdx = match.index! + match[0].length - 1 // points to '{'
    let bCount = 1
    let endIdx = colonIdx + 1
    while (bCount > 0 && endIdx < js.length) {
      if (js[endIdx] === '{') bCount++
      else if (js[endIdx] === '}') bCount--
      endIdx++
    }
    while (endIdx < js.length && /\s/.test(js[endIdx])) endIdx++
    if (js.startsWith('[]', endIdx)) endIdx += 2
    const nameStart = match.index!
    const nameEnd = colonIdx - 1
    const decl = js.substring(nameStart, nameEnd).replace(/\s*:\s*$/, '')
    js = js.substring(0, nameStart) + decl + js.substring(endIdx)
  }

  // 5. Balanced removal of generics from functions / hooks / components
  const genericFns = [
    'forwardRef',
    'createContext',
    'useRef',
    'useState',
    'useCallback',
    'useMemo',
    'useForm',
    'cloneElement',
    'isValidElement',
    'FC',
    'ComponentType',
  ]
  for (const fn of genericFns) {
    while (true) {
      const regex = new RegExp('(?:React\\.)?' + fn + '\\s*<')
      const match = js.match(regex)
      if (!match) break
      const startIdx = match.index! + match[0].length - 1 // points to '<'
      let angleCount = 1
      let endIdx = startIdx + 1
      while (angleCount > 0 && endIdx < js.length) {
        if (js[endIdx] === '<') {
          angleCount++
        } else if (js[endIdx] === '>') {
          if (endIdx === 0 || js[endIdx - 1] !== '=') {
            angleCount--
          }
        }
        endIdx++
      }
      js = js.substring(0, startIdx) + js.substring(endIdx)
    }
  }

  // 6. Remove destructured parameter types: }: ... until closing )
  while (true) {
    const match = js.match(/\}\s*:\s*(?:React\.|[A-Za-z])/)
    if (!match) break
    const colonIdx = match.index! + match[0].indexOf(':')
    let endIdx = colonIdx + 1
    let bCount = 0
    let pCount = 0
    let aCount = 0
    while (endIdx < js.length) {
      const ch = js[endIdx]
      if (ch === '{') bCount++
      else if (ch === '}') bCount--
      else if (ch === '(') pCount++
      else if (ch === ')') {
        if (bCount <= 0 && pCount <= 0 && aCount <= 0) break
        pCount--
      } else if (ch === '<') aCount++
      else if (ch === '>') {
        if (endIdx === 0 || js[endIdx - 1] !== '=') aCount--
      }
      endIdx++
    }
    js = js.substring(0, match.index! + 1) + js.substring(endIdx)
  }

  // 7. Remove simple function generics: fn<T>() -> fn()
  js = js.replace(/([a-zA-Z0-9_]+)<[A-Za-z0-9_,\s]+>(?=\()/g, '$1')

  // 8. Remove return type annotations (including tuples, objects, unions, promises)
  js = js.replace(
    /\):\s*(?:\[[^\]]*\]|\{[^}]*\}|[A-Za-z0-9_.]+(?:<[^()=>{}]+>)?|void|string|number|boolean|any|unknown)(?:\[\])*(?:\s*[|&]\s*(?:[A-Za-z0-9_.]+|undefined|null)(?:\[\])*)*\s*(?=\s*(?:=>|{))/g,
    ')',
  )

  // 9. Normalize optional params e.g. text?: string -> text: string
  js = js.replace(/(\w+)\?\s*:/g, '$1:')

  // 10. Remove inline object parameter / variable type assertions: as { value: number }
  while (true) {
    const match = js.match(/\bas\s+\{/)
    if (!match) break
    const startIdx = match.index!
    const braceStart = startIdx + match[0].length - 1
    let bCount = 1
    let endIdx = braceStart + 1
    while (bCount > 0 && endIdx < js.length) {
      if (js[endIdx] === '{') bCount++
      else if (js[endIdx] === '}') bCount--
      endIdx++
    }
    js = js.substring(0, startIdx) + js.substring(endIdx)
  }

  // 11. Remove parameter & variable type annotations (preserving ternaries & object properties)
  js = js.replace(
    /:\s*(?:boolean\s*\|\s*\(\([^)]*\)\s*=>\s*boolean\)|[A-Z][A-Za-z0-9_.]*|string|number|boolean|any|unknown|object|void|symbol|never|undefined|null|Omit|Pick|Record|Partial|Required|Readonly)(?:<[^()=>{}]+>)?(?:\[\])*(?:\s*[&|]\s*(?:[A-Za-z0-9_.]+|\([^)]*\)|null|undefined)(?:<[^()=>{}]+>)?(?:\[\])*)*\s*(?=[,);\]\n]|$|=[^>])/g,
    '',
  )

  // 12. Remove single type assertions (as const, as any, as Type) but NEVER touch import statements or "* as"
  const lines = js.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.trim().startsWith('import ') || line.includes(' from ')) {
      continue // Never touch imports!
    }
    lines[i] = line.replace(
      /(?<!\*\s*)\bas\s+(?:any|const|Node|HTML[A-Za-z0-9_]*Element|React\.[A-Za-z0-9_]+|[A-Z][A-Za-z0-9_]*)(?:<[^>]+>)?/g,
      '',
    )
  }
  js = lines.join('\n')

  return js.replace(/\n{3,}/g, '\n\n').trim()
}
