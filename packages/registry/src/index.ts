import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Resolve dirname for ESM compatibility
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const COMPONENTS_DIR = path.resolve(__dirname, '../../ui/src/components')
const UTILS_FILE = path.resolve(__dirname, '../../ui/src/lib/utils.ts')
const OUTPUT_DIR = path.resolve(__dirname, '../../../apps/docs/public/registry')

interface RegistryFile {
  name: string
  content: string
}

interface RegistryEntry {
  name: string
  dependencies: string[]
  registryDependencies: string[]
  files: RegistryFile[]
}

const componentDeps: Record<string, string[]> = {
  button: [
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
    '@radix-ui/react-slot',
  ],
  input: ['tailwind-variants', 'clsx', 'tailwind-merge'],
  card: ['tailwind-variants', 'clsx', 'tailwind-merge'],
  label: ['tailwind-variants', 'clsx', 'tailwind-merge'],
  checkbox: ['lucide-react', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  accordion: [
    '@radix-ui/react-accordion',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  alert: ['lucide-react', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'alert-dialog': [
    '@radix-ui/react-alert-dialog',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  progress: [
    '@radix-ui/react-progress',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  slider: [
    '@radix-ui/react-slider',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  'radio-group': [
    '@radix-ui/react-radio-group',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  'dropdown-menu': [
    '@radix-ui/react-dropdown-menu',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  dialog: [
    '@radix-ui/react-slot',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  skeleton: ['tailwind-variants', 'clsx', 'tailwind-merge'],
  select: ['lucide-react', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  command: ['lucide-react', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'multi-select': [
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  drawer: [
    '@radix-ui/react-dialog',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  table: ['tailwind-variants', 'clsx', 'tailwind-merge'],
  breadcrumb: [
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
    '@radix-ui/react-slot',
  ],
  pagination: ['lucide-react', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'scroll-area': [
    '@radix-ui/react-scroll-area',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  'hover-card': [
    '@radix-ui/react-hover-card',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  popover: [
    '@radix-ui/react-popover',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  toast: [
    '@radix-ui/react-toast',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  calendar: [
    'react-day-picker',
    'date-fns',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  'date-picker': [
    'date-fns',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  'context-menu': [
    '@radix-ui/react-context-menu',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  carousel: [
    'embla-carousel-react',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  uploader: ['lucide-react', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'layout-shell': [
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  'infinite-scroll': [
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  collapsible: [
    '@radix-ui/react-slot',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  menubar: [
    '@radix-ui/react-menubar',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  chart: ['recharts', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'button-group': ['tailwind-variants', 'clsx', 'tailwind-merge'],
  empty: ['lucide-react', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  combobox: ['lucide-react', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'animated-shiny-text': ['tailwind-variants', 'clsx', 'tailwind-merge'],
  'spinning-text': ['motion', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'scroll-based-velocity': [
    'motion',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
  'blur-fade': ['motion', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'number-ticker': ['motion', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'animated-gradient-text': ['tailwind-variants', 'clsx', 'tailwind-merge'],
  'comic-text': ['motion', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'dia-text-reveal': ['motion', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'kinetic-text': ['tailwind-variants', 'clsx', 'tailwind-merge'],
  'line-shadow-text': ['motion', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'morphing-text': ['tailwind-variants', 'clsx', 'tailwind-merge'],
  'text-3d-flip': ['motion', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'text-animate': ['motion', 'tailwind-variants', 'clsx', 'tailwind-merge'],
  'video-text': ['tailwind-variants', 'clsx', 'tailwind-merge'],
  sidebar: [
    '@radix-ui/react-slot',
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
}

const componentRegistryDeps: Record<string, string[]> = {
  'alert-dialog': ['button'],
  calendar: ['button'],
  carousel: ['button'],
  pagination: ['button'],
  uploader: ['button', 'progress', 'badge'],
  combobox: ['popover', 'command', 'button'],
  'date-picker': ['popover', 'calendar', 'button'],
  empty: ['button'],
  sidebar: ['button', 'input', 'separator', 'drawer', 'skeleton', 'tooltip'],
}

const blockDeps: Record<string, string[]> = {
  'dashboard-01': [
    'lucide-react',
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ],
}

const blockRegistryDeps: Record<string, string[]> = {
  'dashboard-01': [
    'sidebar',
    'card',
    'badge',
    'button',
    'input',
    'avatar',
    'table',
    'checkbox',
    'select',
    'dropdown-menu',
    'drawer',
    'uploader',
    'progress',
  ],
}

function getBlockFiles(dir: string, baseDir: string): RegistryFile[] {
  const results: RegistryFile[] = []

  function traverse(currentDir: string) {
    const list = fs.readdirSync(currentDir)
    for (const item of list) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        traverse(fullPath)
      } else {
        const relativePath = path
          .relative(baseDir, fullPath)
          .replace(/\\/g, '/')
        const content = fs.readFileSync(fullPath, 'utf8')
        results.push({
          name: relativePath,
          content,
        })
      }
    }
  }

  traverse(dir)
  return results
}

function buildRegistry() {
  console.log('Building component registry...')

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const COMP_OUTPUT_DIR = path.join(OUTPUT_DIR, 'components')
  if (!fs.existsSync(COMP_OUTPUT_DIR)) {
    fs.mkdirSync(COMP_OUTPUT_DIR, { recursive: true })
  }

  const components = fs
    .readdirSync(COMPONENTS_DIR)
    .filter((file) => file.endsWith('.tsx'))
  const registryEntries: any[] = []

  // 1. Build utils registry file
  if (fs.existsSync(UTILS_FILE)) {
    const utilsContent = fs.readFileSync(UTILS_FILE, 'utf8')
    const utilsEntry: RegistryEntry = {
      name: 'utils',
      dependencies: ['clsx', 'tailwind-merge'],
      registryDependencies: [],
      files: [
        {
          name: 'utils.ts',
          content: utilsContent,
        },
      ],
    }
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'utils.json'),
      JSON.stringify(utilsEntry, null, 2),
    )
    console.log('Built registry/utils.json')
  }

  // 2. Build component registry files
  for (const file of components) {
    const name = path.basename(file, '.tsx')
    const filePath = path.join(COMPONENTS_DIR, file)
    const content = fs.readFileSync(filePath, 'utf8')

    const deps = componentDeps[name] || [
      'tailwind-variants',
      'clsx',
      'tailwind-merge',
    ]
    const regDeps = ['utils', ...(componentRegistryDeps[name] || [])]

    const entry: RegistryEntry = {
      name,
      dependencies: deps,
      registryDependencies: regDeps,
      files: [
        {
          name: `${name}.tsx`,
          content,
        },
      ],
    }

    if (name === 'sidebar') {
      const hookContent = fs.readFileSync(
        path.resolve(__dirname, '../../ui/src/hooks/use-mobile.ts'),
        'utf8',
      )
      entry.files.push({
        name: 'hooks/use-mobile.ts',
        content: hookContent,
      })
    }

    fs.writeFileSync(
      path.join(COMP_OUTPUT_DIR, `${name}.json`),
      JSON.stringify(entry, null, 2),
    )
    console.log(`Built registry/components/${name}.json`)

    registryEntries.push({
      name,
      files:
        name === 'sidebar'
          ? [`${name}.tsx`, 'hooks/use-mobile.ts']
          : [`${name}.tsx`],
      dependencies: deps,
      registryDependencies: regDeps,
    })
  }

  // 3. Build block registry files
  const BLOCKS_DIR = path.resolve(
    __dirname,
    '../../../apps/docs/src/components/blocks',
  )
  if (fs.existsSync(BLOCKS_DIR)) {
    const blocks = fs.readdirSync(BLOCKS_DIR)
    for (const name of blocks) {
      const blockPath = path.join(BLOCKS_DIR, name)
      if (fs.statSync(blockPath).isDirectory()) {
        const files = getBlockFiles(blockPath, BLOCKS_DIR)
        const deps = blockDeps[name] || [
          'tailwind-variants',
          'clsx',
          'tailwind-merge',
        ]
        const regDeps = ['utils', ...(blockRegistryDeps[name] || [])]

        const entry: RegistryEntry = {
          name,
          dependencies: deps,
          registryDependencies: regDeps,
          files,
        }

        fs.writeFileSync(
          path.join(COMP_OUTPUT_DIR, `${name}.json`),
          JSON.stringify(entry, null, 2),
        )
        console.log(`Built registry/components/${name}.json (Block)`)

        registryEntries.push({
          name,
          files: files.map((f) => f.name),
          dependencies: deps,
          registryDependencies: regDeps,
        })
      }
    }
  }

  // 4. Write index.json
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'index.json'),
    JSON.stringify(registryEntries, null, 2),
  )
  console.log('Built registry/index.json successfully!')
}

buildRegistry()
