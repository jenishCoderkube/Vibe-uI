const fs = require('fs')
const path = require('path')

const mdxDir = path.resolve(
  __dirname,
  '../apps/docs/src/content/docs/components',
)
const files = fs.readdirSync(mdxDir).filter((f) => f.endsWith('.mdx'))

// Actual UI component tags to check
const uiComponents = new Set([
  'Button',
  'Badge',
  'Input',
  'Alert',
  'Checkbox',
  'Switch',
  'Avatar',
  'Label',
  'RadioGroup',
  'RadioGroupItem',
  'Accordion',
  'AccordionItem',
  'AccordionTrigger',
  'AccordionContent',
  'SelectItem',
  'SelectTrigger',
  'SelectContent',
  'SelectValue',
  'Popover',
  'PopoverTrigger',
  'PopoverContent',
  'Dialog',
  'DialogTrigger',
  'DialogContent',
  'DialogHeader',
  'DialogFooter',
  'DialogTitle',
  'DialogDescription',
  'Tooltip',
  'TooltipTrigger',
  'TooltipContent',
])

let actualMismatches = 0

for (const file of files) {
  const content = fs.readFileSync(path.join(mdxDir, file), 'utf8')

  const regex = /<ComponentPreview[^>]*>([\s\S]*?)<\/ComponentPreview>/g
  let match
  let index = 0

  while ((match = regex.exec(content)) !== null) {
    index++
    const blockContent = match[1]

    const codeBlockMatch = blockContent.match(/```tsx([\s\S]*?)```/)
    if (!codeBlockMatch) continue

    const codeBlock = codeBlockMatch[1].trim()
    const jsxPart = blockContent.replace(/```tsx[\s\S]*?```/, '').trim()

    // Check if the JSX part uses any wrapper components.
    // If the JSX part contains ONLY a single wrapper tag (e.g. <ScrollAreaDemoBasic /> or <TableDemoBasic />),
    // then the JSX has the wrapper, and the code block has the actual implementation.
    // In this case, we expect they don't match literally, because one is a wrapper and the other is the full code.
    // Let's identify if the JSX is just a single wrapper component.
    const trimmedJsx = jsxPart.trim()
    const isSingleWrapper =
      /^<[A-Z][A-Za-z0-9_]*\s*(?:\/>|>\s*<\/[A-Z][A-Za-z0-9_]*>)$/.test(
        trimmedJsx,
      )
    if (isSingleWrapper) continue

    const tagRegex = /<([A-Z][a-zA-Z0-9_]*)\b/g
    let tagMatch
    const jsxTags = {}

    while ((tagMatch = tagRegex.exec(jsxPart)) !== null) {
      const tagName = tagMatch[1]
      if (uiComponents.has(tagName)) {
        jsxTags[tagName] = (jsxTags[tagName] || 0) + 1
      }
    }

    for (const tagName of Object.keys(jsxTags)) {
      const codeRegex = new RegExp(`<${tagName}\\b`, 'g')
      const codeMatches = (codeBlock.match(codeRegex) || []).length
      const jsxMatches = jsxTags[tagName]

      if (jsxMatches !== codeMatches) {
        console.log(
          `[MISMATCH] File: ${file}, Preview #${index}, Tag: <${tagName}> -> JSX has ${jsxMatches}, Code has ${codeMatches}`,
        )
        actualMismatches++
      }
    }
  }
}

console.log(`\nFiltered actual UI component mismatches: ${actualMismatches}`)
