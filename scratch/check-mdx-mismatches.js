const fs = require('fs')
const path = require('path')

const mdxDir = path.resolve(
  __dirname,
  '../apps/docs/src/content/docs/components',
)
const files = fs.readdirSync(mdxDir).filter((f) => f.endsWith('.mdx'))

for (const file of files) {
  const content = fs.readFileSync(path.join(mdxDir, file), 'utf8')

  // Find all <ComponentPreview> ... </ComponentPreview> blocks
  const regex = /<ComponentPreview[^>]*>([\s\S]*?)<\/ComponentPreview>/g
  let match
  let index = 0

  while ((match = regex.exec(content)) !== null) {
    index++
    const blockContent = match[1]

    // The block content should contain JSX first, then a ```tsx ... ``` code block
    const codeBlockMatch = blockContent.match(/```tsx([\s\S]*?)```/)
    if (!codeBlockMatch) {
      // No code block found in ComponentPreview, check if it's correct
      continue
    }

    const codeBlock = codeBlockMatch[1].trim()
    const jsxPart = blockContent.replace(/```tsx[\s\S]*?```/, '').trim()

    // Let's count specific component occurrences in the JSX part vs code block
    // E.g., <Button, <Badge, <Input, <Alert, <Checkbox, <Switch, etc.
    const componentsToCount = [
      'Button',
      'Badge',
      'Input',
      'Alert',
      'Checkbox',
      'Switch',
      'Avatar',
      'Accordion',
      'Table',
      'Select',
      'Popover',
      'Toast',
      'Carousel',
      'Calendar',
      'Breadcrumb',
      'Pagination',
    ]

    for (const comp of componentsToCount) {
      const jsxRegex = new RegExp(`<${comp}\\b`, 'g')
      const codeRegex = new RegExp(`<${comp}\\b`, 'g')

      const jsxMatches = (jsxPart.match(jsxRegex) || []).length
      const codeMatches = (codeBlock.match(codeRegex) || []).length

      if (jsxMatches !== codeMatches && jsxMatches > 0) {
        console.log(
          `[MISMATCH] File: ${file}, Preview #${index}, Component: ${comp} -> JSX has ${jsxMatches}, Code has ${codeMatches}`,
        )
      }
    }
  }
}

console.log('Finished checking MDX files.')
