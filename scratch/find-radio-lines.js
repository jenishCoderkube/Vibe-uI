const fs = require('fs')
const path = require('path')

const content = fs.readFileSync(
  path.resolve(
    __dirname,
    '../apps/docs/src/content/docs/components/radio-group.mdx',
  ),
  'utf8',
)
const lines = content.split('\n')

const regex = /<ComponentPreview[^>]*>/g
let match
let index = 0

while ((match = regex.exec(content)) !== null) {
  index++
  const charIdx = match.index
  const lineNum = content.substring(0, charIdx).split('\n').length
  console.log(`Preview #${index} starts at line ${lineNum}`)
}
