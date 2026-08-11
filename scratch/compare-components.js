import fs from 'fs'
import path from 'path'

const shadcnRegistryPath = 'F:/ui/apps/v4/registry.json'
const vibeUiComponentsPath = 'e:/Custom-Liebary/packages/ui/src/components'

if (!fs.existsSync(shadcnRegistryPath)) {
  console.error(`Shadcn registry not found at: ${shadcnRegistryPath}`)
  process.exit(1)
}

if (!fs.existsSync(vibeUiComponentsPath)) {
  console.error(`Vibe UI components not found at: ${vibeUiComponentsPath}`)
  process.exit(1)
}

const registry = JSON.parse(fs.readFileSync(shadcnRegistryPath, 'utf8'))

// Filter items that are components. Usually, in shadcn, type is 'registry:ui' or 'registry:block'
const shadcnComponents = registry.items
  .filter((item) => item.type === 'registry:ui')
  .map((item) => item.name)

// Vibe UI components are the basenames without extension from the directory
const vibeUiComponents = fs
  .readdirSync(vibeUiComponentsPath)
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => path.basename(file, '.tsx'))

// Compare
const common = vibeUiComponents
  .filter((c) => shadcnComponents.includes(c))
  .sort()
const onlyShadcn = shadcnComponents
  .filter((c) => !vibeUiComponents.includes(c))
  .sort()
const onlyVibeUi = vibeUiComponents
  .filter((c) => !shadcnComponents.includes(c))
  .sort()

const result = {
  totalShadcn: shadcnComponents.length,
  totalVibeUi: vibeUiComponents.length,
  commonCount: common.length,
  onlyShadcnCount: onlyShadcn.length,
  onlyVibeUiCount: onlyVibeUi.length,
  common,
  onlyShadcn,
  onlyVibeUi,
}

console.log(JSON.stringify(result, null, 2))
