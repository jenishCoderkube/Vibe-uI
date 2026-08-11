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

  // 2. Remove "type" specifiers inside named imports:
  // e.g., import { tv, type VariantProps } from 'tailwind-variants' -> import { tv } from 'tailwind-variants'
  js = js.replace(/,\s*type\s+[A-Za-z0-9_]+/g, '')
  js = js.replace(/type\s+[A-Za-z0-9_]+\s*,\s*/g, '')
  js = js.replace(/{\s*type\s+[A-Za-z0-9_]+\s*}/g, '{}')
  js = js.replace(/^import\s*{\s*}\s*from\s+['"][^'"]+['"];?\n?/gm, '')

  // 3. Remove "interface" declarations with nested brace tracking
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

  // 4. Remove "type" alias declarations (e.g. type Foo = ...)
  while (true) {
    const match = js.match(/(?:export\s+)?type\s+\w+\s*(?:<[^>]+>)?\s*=/)
    if (!match) break
    const startIdx = match.index!
    let endIdx = startIdx + match[0].length

    while (endIdx < js.length && /\s/.test(js[endIdx])) {
      endIdx++
    }

    if (js[endIdx] === '{') {
      let braceCount = 1
      endIdx++
      while (braceCount > 0 && endIdx < js.length) {
        if (js[endIdx] === '{') braceCount++
        else if (js[endIdx] === '}') braceCount--
        endIdx++
      }
      if (endIdx < js.length && js[endIdx] === ';') {
        endIdx++
      }
    } else {
      while (endIdx < js.length) {
        if (js[endIdx] === ';') {
          endIdx++
          break
        }
        if (js[endIdx] === '\n') {
          const beforeNewline = js.substring(startIdx, endIdx).trim()
          if (
            beforeNewline.endsWith('&') ||
            beforeNewline.endsWith('|') ||
            beforeNewline.endsWith(',')
          ) {
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

  // 5. Remove `React.forwardRef<...>` generics with nested angle bracket matching
  // e.g. React.forwardRef<HTMLDivElement, ButtonProps>(...)
  while (true) {
    const match = js.match(/(React\.)?forwardRef\s*</)
    if (!match) break
    const startIdx = match.index! + match[0].length - 1
    let angleCount = 1
    let endIdx = startIdx + 1
    while (angleCount > 0 && endIdx < js.length) {
      if (js[endIdx] === '<') angleCount++
      else if (js[endIdx] === '>') angleCount--
      endIdx++
    }
    js = js.substring(0, startIdx) + js.substring(endIdx)
  }

  // 6. Remove generics from hooks / functions e.g. useState<string[]>(...), useRef<HTMLDivElement>(null), createContext<ContextValue>(...)
  while (true) {
    const match = js.match(
      /(React\.)?(createContext|useRef|useState|useCallback|useMemo)\s*</,
    )
    if (!match) break
    const startIdx = match.index! + match[0].length - 1
    let angleCount = 1
    let endIdx = startIdx + 1
    while (angleCount > 0 && endIdx < js.length) {
      if (js[endIdx] === '<') angleCount++
      else if (js[endIdx] === '>') angleCount--
      endIdx++
    }
    js = js.substring(0, startIdx) + js.substring(endIdx)
  }

  // 7. Remove inline object type annotations e.g. ({ text }: { text: string }) -> ({ text })
  while (true) {
    const match = js.match(/(\w+|\}|\]|\))\s*:\s*\{/)
    if (!match) break
    const colonIdx = match.index! + match[1].length
    const braceStart = js.indexOf('{', colonIdx)
    if (braceStart === -1) break
    let braceCount = 1
    let endIdx = braceStart + 1
    while (braceCount > 0 && endIdx < js.length) {
      if (js[endIdx] === '{') braceCount++
      else if (js[endIdx] === '}') braceCount--
      endIdx++
    }
    js = js.substring(0, colonIdx) + js.substring(endIdx)
  }

  // 8. Normalize optional parameter markers e.g. (text?: string) -> (text: string)
  js = js.replace(/(\w+)\?\s*:/g, '$1:')

  // 9. Remove function return type annotations e.g. ): React.ReactNode => or ): string { or ): boolean
  js = js.replace(
    /\):\s*(?:[A-Za-z0-9_.]+(?:<[^()=>{}]+>)?|void|string|number|boolean|any|unknown)(?:\[\])?\s*(?=\s*(?:=>|{))/g,
    ')',
  )

  // 10. Remove parameter & variable type annotations e.g. (e: React.MouseEvent), (text: string), (count: number)
  js = js.replace(
    /:\s*(?:[A-Z][A-Za-z0-9_.]*|string|number|boolean|any|unknown|object|void|symbol|never|undefined|null|Omit|Pick|Record|Partial|Required|Readonly)(?:<[^()=>{}]+>)?(\s*&\s*[A-Za-z0-9_.]+(?:<[^()=>{}]+>)?)*\s*(?=[,)]|=[^>])/g,
    '',
  )

  // 11. Remove type assertions (e.g., `as any`, `as const`, `as HTMLInputElement`, `as Node`)
  js = js.replace(
    /(?<!\*)\s+as\s+(?:any|const|Node|HTML[A-Za-z0-9_]*Element|React\.[A-Za-z0-9_]+(?:<[^>]+>)?|[A-Z][A-Za-z0-9_]*(?:<[^>]+>)?)/g,
    '',
  )

  // 12. Clean up empty lines resulting from interface/type removals
  return js.replace(/\n{3,}/g, '\n\n').trim()
}
