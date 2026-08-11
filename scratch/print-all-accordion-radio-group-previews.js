const fs = require('fs')
const path = require('path')

function printAllMismatches(file) {
  const mdxPath = path.resolve(
    __dirname,
    '../apps/docs/src/content/docs/components',
    file,
  )
  const content = fs.readFileSync(mdxPath, 'utf8')

  const regex = /<ComponentPreview[^>]*>([\s\S]*?)<\/ComponentPreview>/g
  let match
  let index = 0

  while ((match = regex.exec(content)) !== null) {
    index++
    const blockContent = match[1]

    // Check if there is an actual UI component mismatch
    const uiComponents = ['AccordionItem', 'RadioGroupItem']
    let mismatch = false
    for (const comp of uiComponents) {
      const jsxRegex = new RegExp(`<${comp}\\b`, 'g')
      const codeRegex = new RegExp(`<${comp}\\b`, 'g')
      const codeBlockMatch = blockContent.match(/```tsx([\s\S]*?)```/)
      const codeBlock = codeBlockMatch ? codeBlockMatch[1] : ''
      const jsxPart = blockContent.replace(/```tsx[\s\S]*?```/, '')

      const jsxMatches = (jsxPart.match(jsxRegex) || []).length
      const codeMatches = (codeBlock.match(codeRegex) || []).length
      if (jsxMatches !== codeMatches && jsxMatches > 0) {
        mismatch = true
      }
    }

    if (mismatch) {
      console.log(`=== FILE: ${file}, PREVIEW #${index} ===`)
      console.log(match[0])
      console.log(`=========================================\n`)
    }
  }
}

printAllMismatches('accordion.mdx')
printAllMismatches('radio-group.mdx')
