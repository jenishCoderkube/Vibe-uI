import fs from 'fs'

const registry = JSON.parse(fs.readFileSync('F:/magicui/registry.json', 'utf8'))

const textAnimations = [
  'aurora-text',
  'comic-text',
  'flip-text',
  'hyper-text',
  'morphing-text',
  'sparkles-text',
  'spinning-text',
  'text-animate',
  'text-reveal',
  'typing-animation',
  'word-rotate',
]

const report = {}

registry.items.forEach((item) => {
  if (textAnimations.includes(item.name)) {
    report[item.name] = {
      dependencies: item.dependencies || [],
      registryDependencies: item.registryDependencies || [],
      files: item.files || [],
      cssVars: item.cssVars || {},
      css: item.css || {},
    }
  }
})

console.log(JSON.stringify(report, null, 2))
