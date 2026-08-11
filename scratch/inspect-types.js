import fs from 'fs'

const registry = JSON.parse(
  fs.readFileSync('F:/ui/apps/v4/registry.json', 'utf8'),
)
const types = {}
registry.items.forEach((item) => {
  types[item.type] = (types[item.type] || 0) + 1
})
console.log(types)
