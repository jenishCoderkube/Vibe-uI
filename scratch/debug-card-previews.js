const fs = require('fs')
const path = require('path')

function debugPreviews(file) {
  const mdxPath = path.resolve(
    __dirname,
    '../apps/docs/src/content/docs/components',
    file,
  )
  const content = fs.readFileSync(mdxPath, 'utf8')

  const regex = /<ComponentPreview[^>]*>([\s\S]*?)<\/ComponentPreview>/g
  let match
  let index = 0

  console.log(`\n=== DEBUGGING PREVIEWS FOR ${file} ===`)
  while ((match = regex.exec(content)) !== null) {
    index++
    const blockContent = match[1]

    // Find the heading before the match
    const beforeMatch = content.substring(0, match.index)
    const headings = beforeMatch
      .split('\n')
      .filter((line) => line.startsWith('###'))
    const lastHeading =
      headings.length > 0 ? headings[headings.length - 1] : 'No heading'

    const funcMatch = blockContent.match(/export\s+default\s+function\s+(\w+)/)
    const funcName = funcMatch ? funcMatch[1] : 'No export default'

    // Check if there is a mismatch
    const componentsToCount = ['Button', 'Badge', 'Switch', 'Avatar']
    let mismatch = false
    let details = []
    for (const comp of componentsToCount) {
      const jsxRegex = new RegExp(`<${comp}\\b`, 'g')
      const codeRegex = new RegExp(`<${comp}\\b`, 'g')
      const codeBlockMatch = blockContent.match(/```tsx([\s\S]*?)```/)
      const codeBlock = codeBlockMatch ? codeBlockMatch[1] : ''
      const jsxPart = blockContent.replace(/```tsx[\s\S]*?```/, '')

      const jsxMatches = (jsxPart.match(jsxRegex) || []).length
      const codeMatches = (codeBlock.match(codeRegex) || []).length
      if (jsxMatches !== codeMatches && jsxMatches > 0) {
        mismatch = true
        details.push(`${comp}: JSX=${jsxMatches}, Code=${codeMatches}`)
      }
    }

    console.log(
      `Preview #${index} | Heading: "${lastHeading}" | Func: ${funcName} | Mismatch: ${mismatch ? 'YES (' + details.join(', ') + ')' : 'NO'}`,
    )
  }
}

debugPreviews('card.mdx')
debugPreviews('dialog.mdx')
debugPreviews('tooltip.mdx')
