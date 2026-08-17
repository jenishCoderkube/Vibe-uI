import fs from 'fs-extra'
import path from 'path'
import ts from 'typescript'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const REGISTRY_DIR = path.resolve(__dirname, '../apps/docs/public/registry')
const INSTALL_DIR = path.resolve(__dirname, 'demo-install')

function transpileToJs(code, isJsx) {
  const result = ts.transpileModule(code, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      jsx: isJsx ? ts.JsxEmit.Preserve : ts.JsxEmit.None,
      removeComments: false,
    },
  })
  return result.outputText
}

async function simulate() {
  console.log('Simulating npx vibe-ui-kit@latest add dashboard-01...')
  await fs.emptyDir(INSTALL_DIR)

  const language = 'javascript' // user is on JS/JSX
  const componentPath = path.join(INSTALL_DIR, 'components/ui')
  const utilsPath = path.join(INSTALL_DIR, 'lib/utils.js')

  const componentsToInstall = ['dashboard-01']
  const installedRegistryDeps = new Set()
  const allDependencies = new Set()
  const allFilesWritten = []

  // Resolve dependencies recursively
  const queue = [...componentsToInstall]
  while (queue.length > 0) {
    const current = queue.shift()
    if (installedRegistryDeps.has(current)) continue
    installedRegistryDeps.add(current)

    const schemaPath = path.join(REGISTRY_DIR, `components/${current}.json`)
    if (!fs.existsSync(schemaPath)) {
      console.error(`Error: Schema not found for ${current}`)
      continue
    }

    const componentData = await fs.readJson(schemaPath)
    console.log(`Processing registry component: ${current}`)

    // Accumulate dependencies
    if (componentData.dependencies) {
      componentData.dependencies.forEach((d) => allDependencies.add(d))
    }

    // Add registry dependencies to queue
    if (componentData.registryDependencies) {
      componentData.registryDependencies.forEach((dep) => {
        if (dep !== 'utils') {
          queue.push(dep)
        }
      })
    }

    // Write component files
    for (const file of componentData.files) {
      let fileName = file.name
      let content = file.content

      if (language === 'javascript') {
        fileName = fileName.replace(/\.tsx$/, '.jsx').replace(/\.ts$/, '.js')
        content = transpileToJs(content, fileName.endsWith('.jsx'))
      }

      // If it is block-specific files, they go to components/blocks/dashboard-01
      const isBlock = current === 'dashboard-01'
      const targetDir = isBlock
        ? path.join(INSTALL_DIR, 'components/blocks/dashboard-01')
        : componentPath

      const targetFilePath = path.join(targetDir, fileName)

      // Calculate relative path to utils
      const fileDir = path.dirname(targetFilePath)
      let relativePathToUtils = path.relative(fileDir, utilsPath)
      relativePathToUtils = relativePathToUtils.replace(/\\/g, '/')
      if (!relativePathToUtils.startsWith('.')) {
        relativePathToUtils = './' + relativePathToUtils
      }
      relativePathToUtils = relativePathToUtils.replace(/\.[jt]sx?$/, '')

      content = content.replace(
        /(\.\.\/lib\/utils|@\/lib\/utils)/g,
        relativePathToUtils,
      )

      await fs.ensureDir(path.dirname(targetFilePath))
      await fs.writeFile(targetFilePath, content)
      allFilesWritten.push(targetFilePath)
    }
  }

  // Also write utils
  const utilsSchemaPath = path.join(REGISTRY_DIR, 'utils.json')
  const utilsSchema = await fs.readJson(utilsSchemaPath)
  let utilsContent = utilsSchema.files[0].content
  if (language === 'javascript') {
    utilsContent = transpileToJs(utilsContent, false)
  }
  await fs.ensureDir(path.dirname(utilsPath))
  await fs.writeFile(utilsPath, utilsContent)
  allFilesWritten.push(utilsPath)

  console.log('\n--- Simulation Summary ---')
  console.log('Dependencies to install in package.json:')
  console.log(JSON.stringify(Array.from(allDependencies), null, 2))

  console.log('\nFiles generated:')
  for (const f of allFilesWritten) {
    console.log(`- ${path.relative(INSTALL_DIR, f)}`)
  }

  // Let's do validation checks on generated files
  console.log('\n--- Code Quality Checks ---')
  let errors = 0
  for (const f of allFilesWritten) {
    const relPath = path.relative(INSTALL_DIR, f)
    const content = await fs.readFile(f, 'utf8')

    // Check 1: Check for relative imports to missing files
    const importRegex = /(?:import|from)\s+['"]([^'"]+)['"]/g
    let match
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1]
      if (importPath.startsWith('.')) {
        const fileDir = path.dirname(f)
        let resolvedPath = path.resolve(fileDir, importPath)

        // Check with multiple extensions
        const possibleExtensions = [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '/index.js',
          '/index.jsx',
          '',
        ]
        let exists = false
        for (const ext of possibleExtensions) {
          const checkPath = resolvedPath + ext
          if (fs.existsSync(checkPath) && fs.statSync(checkPath).isFile()) {
            exists = true
            break
          }
        }

        if (!exists) {
          console.warn(
            `[FAIL] ${relPath}: Cannot resolve import of "${importPath}" (resolved to: ${resolvedPath})`,
          )
          errors++
        }
      }
    }
  }

  if (errors === 0) {
    console.log(
      '[PASS] No missing file imports detected in the generated codebase!',
    )
  } else {
    console.error(`[FAIL] Detected ${errors} import issues.`)
  }
}

simulate()
