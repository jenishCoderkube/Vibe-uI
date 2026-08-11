const fs = require('fs')
const path = require('path')

const componentsDir = path.resolve(
  __dirname,
  '../apps/docs/src/content/docs/components',
)
const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.mdx'))

console.log(
  `Checking ${files.length} MDX files for empty code blocks inside ComponentPreviews...\n`,
)

let totalEmpty = 0

for (const file of files) {
  const filePath = path.join(componentsDir, file)
  const content = fs.readFileSync(filePath, 'utf8')

  const regex = /<ComponentPreview[^>]*>([\s\S]*?)<\/ComponentPreview>/g
  let match
  let index = 0

  while ((match = regex.exec(content)) !== null) {
    index++
    const blockContent = match[1]

    // Check if there is a code block inside
    const hasCodeBlock =
      blockContent.includes('```tsx') ||
      blockContent.includes('```jsx') ||
      blockContent.includes('```html') ||
      blockContent.includes('```css')

    if (!hasCodeBlock) {
      totalEmpty++
      console.log(`[EMPTY CODE] File: ${file}, Preview #${index}`)
    }
  }
}

console.log(`\nTotal empty code blocks found: ${totalEmpty}`)
