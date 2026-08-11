const fs = require('fs')
const path = require('path')

function printMismatch(file, targetIndex) {
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
    if (index === targetIndex) {
      console.log(`=== FILE: ${file}, PREVIEW #${targetIndex} ===`)
      console.log(match[0])
      console.log(`=========================================\n`)
    }
  }
}

printMismatch('accordion.mdx', 4)
printMismatch('radio-group.mdx', 2)
