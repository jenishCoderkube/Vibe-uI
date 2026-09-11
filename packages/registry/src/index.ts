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

function getInternalDependencies(code: string, currentName: string): string[] {
  const matches = [...code.matchAll(/from\s+['"]\.\/([a-zA-Z0-9_-]+)['"]/g)]
  const deps = new Set<string>()
  for (const m of matches) {
    const dep = m[1]
    if (
      dep !== currentName &&
      dep !== 'utils' &&
      fs.existsSync(path.join(COMPONENTS_DIR, `${dep}.tsx`))
    ) {
      deps.add(dep)
    }
  }
  return Array.from(deps)
}

function getNpmDependencies(code: string): string[] {
  const matches = [...code.matchAll(/from\s+['"]([@a-zA-Z0-9_/-]+)['"]/g)]
  const deps = new Set<string>(['tailwind-variants', 'clsx', 'tailwind-merge'])
  for (const m of matches) {
    const pkg = m[1]
    if (pkg.startsWith('.') || pkg === 'react' || pkg === 'react-dom') continue
    let rootPkg = pkg
    if (pkg.startsWith('@')) {
      const parts = pkg.split('/')
      rootPkg = `${parts[0]}/${parts[1]}`
    } else {
      rootPkg = pkg.split('/')[0]
    }
    if (rootPkg !== 'react' && rootPkg !== 'react-dom') {
      deps.add(rootPkg)
    }
  }
  return Array.from(deps)
}

function getBlockDependencies(
  files: RegistryFile[],
  availableComponents: Set<string>,
  availableBlocks: Set<string>,
): { dependencies: string[]; registryDependencies: string[] } {
  const npmDeps = new Set<string>([
    'tailwind-variants',
    'clsx',
    'tailwind-merge',
  ])
  const regDeps = new Set<string>(['utils'])

  for (const file of files) {
    const code = file.content

    // 1. Scan external NPM dependencies
    const npmMatches = [...code.matchAll(/from\s+['"]([@a-zA-Z0-9_/-]+)['"]/g)]
    for (const m of npmMatches) {
      const pkg = m[1]
      if (pkg.startsWith('.') || pkg.startsWith('@/')) continue
      let rootPkg = pkg
      if (pkg.startsWith('@')) {
        const parts = pkg.split('/')
        rootPkg = `${parts[0]}/${parts[1]}`
      } else {
        rootPkg = pkg.split('/')[0]
      }
      if (rootPkg !== 'react' && rootPkg !== 'react-dom') {
        npmDeps.add(rootPkg)
      }
    }

    // 2. Scan internal UI component & block dependencies
    const compMatches = [
      ...code.matchAll(
        /(?:@\/components\/ui\/|\.\/|\.\.\/)([a-zA-Z0-9_-]+)/g,
      ),
    ]
    for (const m of compMatches) {
      const depName = m[1]
      if (availableComponents.has(depName)) {
        regDeps.add(depName)
      } else if (availableBlocks.has(depName)) {
        regDeps.add(depName)
      }
    }
  }

  return {
    dependencies: Array.from(npmDeps).sort(),
    registryDependencies: Array.from(regDeps).sort(),
  }
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

    const deps = getNpmDependencies(content)
    const regDeps = ['utils', ...getInternalDependencies(content, name)]

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
      // Adjust import path in sidebar.tsx
      entry.files[0].content = entry.files[0].content.replace(
        /'\.\.\/hooks\/use-mobile'/g,
        "'./hooks/use-mobile'",
      )
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
    const availableComponentNames = new Set(
      components.map((c) => path.basename(c, '.tsx')),
    )
    const availableBlockNames = new Set(
      blocks.filter((b) =>
        fs.statSync(path.join(BLOCKS_DIR, b)).isDirectory(),
      ),
    )

    for (const name of blocks) {
      const blockPath = path.join(BLOCKS_DIR, name)
      if (fs.statSync(blockPath).isDirectory()) {
        const files = getBlockFiles(blockPath, BLOCKS_DIR)
        const { dependencies: deps, registryDependencies: regDeps } =
          getBlockDependencies(
            files,
            availableComponentNames,
            availableBlockNames,
          )

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

  // 5. Automated validation of all registry items
  validateRegistry(registryEntries)
}

function validateRegistry(registryEntries: any[]) {
  console.log(
    '\nValidating all registry entries for transitive dependency integrity...',
  )
  const COMP_OUTPUT_DIR = path.join(OUTPUT_DIR, 'components')

  let errorsCount = 0

  for (const item of registryEntries) {
    const compName = item.name

    // 1. Simulate recursive resolution
    const resolved = new Set<string>()
    const queue = [compName]

    while (queue.length > 0) {
      const current = queue.shift()!
      if (resolved.has(current)) continue
      resolved.add(current)

      const info = registryEntries.find((c) => c.name === current)
      if (info && info.registryDependencies) {
        for (const dep of info.registryDependencies) {
          if (dep !== 'utils' && !resolved.has(dep)) {
            queue.push(dep)
          }
        }
      }
    }

    // 2. Build virtual file map
    const virtualFs = new Set<string>([
      '/src/lib/utils.ts',
      '/src/lib/utils.js',
      '/src/lib/utils',
    ])

    const filesToCheck: {
      targetPath: string
      rawName: string
      content: string
    }[] = []

    for (const c of resolved) {
      const jsonPath = path.join(COMP_OUTPUT_DIR, `${c}.json`)
      if (fs.existsSync(jsonPath)) {
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
        for (const f of data.files) {
          const targetFilePath = path.posix.join(
            '/src/components/ui',
            f.name.replace(/\\/g, '/'),
          )
          virtualFs.add(targetFilePath)
          virtualFs.add(targetFilePath.replace(/\.[jt]sx?$/, ''))
          filesToCheck.push({
            targetPath: targetFilePath,
            rawName: f.name,
            content: f.content,
          })
        }
      }
    }

    // 3. Check imports
    for (const f of filesToCheck) {
      const fileDir = path.posix.dirname(f.targetPath)
      const code = f.content

      // Relative imports
      const relMatches = [
        ...code.matchAll(/from\s+['"](\.\.?\/[^'"]+)['"]/g),
      ]
      for (const m of relMatches) {
        const importPath = m[1]
        if (importPath === '../lib/utils' || importPath === './utils')
          continue
        const resolvedTarget = path.posix.normalize(
          path.posix.join(fileDir, importPath),
        )
        const exists =
          virtualFs.has(resolvedTarget) ||
          virtualFs.has(`${resolvedTarget}.tsx`) ||
          virtualFs.has(`${resolvedTarget}.ts`) ||
          virtualFs.has(`${resolvedTarget}.jsx`) ||
          virtualFs.has(`${resolvedTarget}.js`)

        if (!exists) {
          console.error(
            `❌ [Registry Error] In component "${compName}" (${f.rawName}): Cannot resolve module "${importPath}"!`,
          )
          errorsCount++
        }
      }

      // Alias imports
      const aliasMatches = [
        ...code.matchAll(
          /from\s+['"]@\/components\/ui\/([^'"]+)['"]/g,
        ),
      ]
      for (const m of aliasMatches) {
        const compImported = m[1]
        const targetPath = path.posix.join(
          '/src/components/ui',
          compImported,
        )
        const exists =
          virtualFs.has(targetPath) ||
          virtualFs.has(`${targetPath}.tsx`) ||
          virtualFs.has(`${targetPath}.ts`)

        if (!exists) {
          console.error(
            `❌ [Registry Error] In component "${compName}" (${f.rawName}): Cannot resolve @/components/ui/${compImported}!`,
          )
          errorsCount++
        }
      }
    }
  }

  if (errorsCount > 0) {
    throw new Error(
      `Registry validation failed with ${errorsCount} unresolved dependency error(s)!`,
    )
  }

  console.log(
    `✓ Registry validation passed! All ${registryEntries.length} items are 100% self-contained and resolve cleanly.`,
  )
}

buildRegistry()

