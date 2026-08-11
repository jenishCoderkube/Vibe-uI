const fs = require('fs')
const path = require('path')

const mdxDir = path.resolve(
  __dirname,
  '../apps/docs/src/content/docs/components',
)
const files = fs.readdirSync(mdxDir).filter((f) => f.endsWith('.mdx'))

let totalMismatches = 0

for (const file of files) {
  const content = fs.readFileSync(path.join(mdxDir, file), 'utf8')

  // Find all <ComponentPreview> ... </ComponentPreview> blocks
  const regex = /<ComponentPreview[^>]*>([\s\S]*?)<\/ComponentPreview>/g
  let match
  let index = 0

  while ((match = regex.exec(content)) !== null) {
    index++
    const blockContent = match[1]

    // Find the code block
    const codeBlockMatch = blockContent.match(/```tsx([\s\S]*?)```/)
    if (!codeBlockMatch) {
      continue
    }

    const codeBlock = codeBlockMatch[1].trim()
    const jsxPart = blockContent.replace(/```tsx[\s\S]*?```/, '').trim()

    // Find all PascalCase component tags in the JSX part
    const tagRegex = /<([A-Z][A-Za-z0-9_]*)\b/g
    let tagMatch
    const jsxTags = {}

    while ((tagMatch = tagRegex.exec(jsxPart)) !== null) {
      const tagName = tagMatch[1]
      // Exclude generic SVG/icon wrappers or standard React components that might be imported differently
      if (tagName === 'Fragment' || tagName === 'React') continue
      jsxTags[tagName] = (jsxTags[tagName] || 0) + 1
    }

    // Check their counts in the code block
    for (const tagName of Object.keys(jsxTags)) {
      const codeRegex = new RegExp(`<${tagName}\\b`, 'g')
      const codeMatches = (codeBlock.match(codeRegex) || []).length
      const jsxMatches = jsxTags[tagName]

      if (jsxMatches !== codeMatches) {
        // Double check: if it is an icon (ends with Icon) or is Lucide icon, let's report it as a warning
        // but prioritize main UI library components.
        console.log(
          `[MISMATCH] File: ${file}, Preview #${index}, Tag: <${tagName}> -> JSX has ${jsxMatches}, Code has ${codeMatches}`,
        )
        totalMismatches++
      }
    }
  }
}

console.log(
  `\nGeneric MDX check finished. Total potential mismatches found: ${totalMismatches}`,
)
