import fs from 'fs'
import path from 'path'

const magicUiRegistryPath = 'F:/magicui/registry.json'
const vibeUiComponentsPath = 'e:/Custom-Liebary/packages/ui/src/components'

if (!fs.existsSync(magicUiRegistryPath)) {
  console.error(`Magic UI registry not found at: ${magicUiRegistryPath}`)
  process.exit(1)
}

if (!fs.existsSync(vibeUiComponentsPath)) {
  console.error(`Vibe UI components not found at: ${vibeUiComponentsPath}`)
  process.exit(1)
}

const registry = JSON.parse(fs.readFileSync(magicUiRegistryPath, 'utf8'))

// Inspect types
const types = {}
registry.items.forEach((item) => {
  types[item.type] = (types[item.type] || 0) + 1
})

// Filter items of type registry:ui
const magicUiComponents = registry.items
  .filter((item) => item.type === 'registry:ui')
  .map((item) => item.name)

// Vibe UI components
const vibeUiComponents = fs
  .readdirSync(vibeUiComponentsPath)
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => path.basename(file, '.tsx'))

// Compare
const common = vibeUiComponents
  .filter((c) => magicUiComponents.includes(c))
  .sort()
const onlyMagicUi = magicUiComponents
  .filter((c) => !vibeUiComponents.includes(c))
  .sort()
const onlyVibeUi = vibeUiComponents
  .filter((c) => !magicUiComponents.includes(c))
  .sort()

const result = {
  typesDistribution: types,
  totalMagicUi: magicUiComponents.length,
  totalVibeUi: vibeUiComponents.length,
  commonCount: common.length,
  onlyMagicUiCount: onlyMagicUi.length,
  onlyVibeUiCount: onlyVibeUi.length,
  common,
  onlyMagicUi,
  onlyVibeUi,
}

console.log(JSON.stringify(result, null, 2))
