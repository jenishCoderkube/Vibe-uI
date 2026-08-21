#!/usr/bin/env node

import { Command } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import prompts from 'prompts'
import { fileURLToPath } from 'url'
import ts from 'typescript'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pkg = fs.readJsonSync(path.join(__dirname, '../package.json'))

const program = new Command()

const REGISTRY_URL =
  process.env.VIBE_REGISTRY_URL || 'https://vibe-ui-kit.vercel.app/registry'

function transpileToJs(code: string, isJsx: boolean): string {
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

function getPackageManager(): string {
  const userAgent = process.env.npm_config_user_agent || ''
  if (userAgent.includes('pnpm')) return 'pnpm'
  if (userAgent.includes('yarn')) return 'yarn'
  if (userAgent.includes('bun')) return 'bun'

  const baseDir = process.cwd()
  if (fs.existsSync(path.join(baseDir, 'pnpm-lock.yaml'))) return 'pnpm'
  if (fs.existsSync(path.join(baseDir, 'yarn.lock'))) return 'yarn'
  if (
    fs.existsSync(path.join(baseDir, 'bun.lockb')) ||
    fs.existsSync(path.join(baseDir, 'bun.lock'))
  )
    return 'bun'
  if (fs.existsSync(path.join(baseDir, 'package-lock.json'))) return 'npm'

  return 'npm'
}

function filterMissingDependencies(dependencies: string[]): string[] {
  try {
    const baseDir = process.cwd()
    const pkgPath = path.join(baseDir, 'package.json')
    if (fs.existsSync(pkgPath)) {
      const pkg = fs.readJsonSync(pkgPath)
      const allDeps = {
        ...(pkg.dependencies || {}),
        ...(pkg.devDependencies || {}),
      }
      return dependencies.filter((dep) => !allDeps[dep])
    }
  } catch {
    // If we can't read package.json, return all dependencies
  }
  return dependencies
}

async function installDependencies(
  dependencies: string[],
  _options: { yes: boolean },
) {
  const missingDeps = filterMissingDependencies(dependencies)
  if (missingDeps.length === 0) {
    return
  }

  const pm = getPackageManager()
  const installCmd =
    pm === 'npm'
      ? `npm install ${missingDeps.join(' ')}`
      : pm === 'yarn'
        ? `yarn add ${missingDeps.join(' ')}`
        : pm === 'pnpm'
          ? `pnpm add ${missingDeps.join(' ')}`
          : `bun add ${missingDeps.join(' ')}`

  console.log(
    `\nInstalling required dependencies (${missingDeps.join(', ')})...`,
  )
  try {
    execSync(installCmd, { stdio: 'ignore' })
    console.log('✓ Successfully installed dependencies.\n')
  } catch (err: any) {
    console.error(`\nFailed to install dependencies: ${err.message}`)
    console.log(`Please run manually: ${installCmd}\n`)
  }
}

program
  .name('vibe-ui-kit')
  .description('CLI to add Vibe UI components to your project')
  .version(pkg.version)

program
  .command('add')
  .description('Add components to your project')
  .argument('[components...]', 'The components to add')
  .option('-y, --yes', 'Skip confirmation prompts and use default paths', false)
  .action(async (components, options) => {
    try {
      // 1. Fetch index registry
      const indexRes = await fetch(`${REGISTRY_URL}/index.json`)
      if (!indexRes.ok) {
        throw new Error('Failed to fetch the component registry index.')
      }
      const registryIndex = (await indexRes.json()) as any[]

      let componentsToInstall: string[] = []

      if (components && components.length > 0) {
        // Multiple components mode
        for (const comp of components) {
          const componentInfo = registryIndex.find((c) => c.name === comp)
          if (!componentInfo) {
            console.error(
              `Error: Component "${comp}" not found in the registry.`,
            )
            console.log(
              `Available components: ${registryIndex.map((c) => c.name).join(', ')}`,
            )
            process.exit(1)
          }
        }
        componentsToInstall = components
      } else {
        // Interactive multi-select mode
        const response = await prompts({
          type: 'multiselect',
          name: 'components',
          message: 'Select the components you want to add:',
          choices: registryIndex.map((c) => ({
            title: c.name,
            value: c.name,
            description: c.description || '',
          })),
          instructions: false,
          hint: '- Space to select. Enter to submit',
        })
        componentsToInstall = response.components || []
        if (componentsToInstall.length === 0) {
          console.log('No components selected.')
          return
        }
      }

      // Trace subcomponent dependencies recursively
      const resolvedComponents = new Set<string>()
      const queue = [...componentsToInstall]

      while (queue.length > 0) {
        const comp = queue.shift()!
        if (resolvedComponents.has(comp)) continue
        resolvedComponents.add(comp)

        const componentInfo = registryIndex.find((c) => c.name === comp)
        if (componentInfo && componentInfo.registryDependencies) {
          for (const regDep of componentInfo.registryDependencies) {
            if (regDep !== 'utils' && !resolvedComponents.has(regDep)) {
              queue.push(regDep)
            }
          }
        }
      }
      componentsToInstall = Array.from(resolvedComponents)

      // 2. Determine installation paths
      const baseDir = process.cwd()
      const hasSrc = fs.existsSync(path.join(baseDir, 'src'))

      let language = 'typescript'
      let componentPathInput = ''
      let utilsPathInput = ''
      let cssPathInput = ''
      let isConfigLoaded = false

      // Try to load configuration from components.json
      const configPath = path.join(baseDir, 'components.json')
      if (fs.existsSync(configPath)) {
        try {
          const config = fs.readJsonSync(configPath)
          if (config.aliases) {
            // Standard components.json configuration structure
            language = fs.existsSync(path.join(baseDir, 'tsconfig.json'))
              ? 'typescript'
              : 'javascript'
            const componentsAlias = config.aliases.components || '@/components'
            const hasSrcDir = fs.existsSync(path.join(baseDir, 'src'))
            componentPathInput = componentsAlias.replace(
              /^@\//,
              hasSrcDir ? './src/' : './',
            )
            if (config.aliases.ui) {
              const uiAlias = config.aliases.ui
              componentPathInput = uiAlias.replace(
                /^@\//,
                hasSrcDir ? './src/' : './',
              )
            } else {
              componentPathInput = path.join(componentPathInput, 'ui')
            }

            const utilsAlias = config.aliases.utils || '@/lib/utils'
            const ext = language === 'typescript' ? 'ts' : 'js'
            utilsPathInput =
              utilsAlias.replace(/^@\//, hasSrcDir ? './src/' : './') +
              `.${ext}`

            if (config.tailwind && config.tailwind.css) {
              cssPathInput = config.tailwind.css
            } else {
              cssPathInput = hasSrcDir ? './src/index.css' : './index.css'
            }
            isConfigLoaded = true
          } else if (config.language && config.paths) {
            // Custom vibe-ui-kit configuration structure
            language = config.language
            componentPathInput = config.paths.components
            utilsPathInput = config.paths.utils
            cssPathInput = config.paths.css
            isConfigLoaded = true
          }
        } catch {
          // ignore
        }
      }

      if (!isConfigLoaded) {
        // Run auto-detection
        const hasTsConfig =
          fs.existsSync(path.join(baseDir, 'tsconfig.json')) ||
          fs.existsSync(path.join(baseDir, 'tsconfig.app.json'))
        const hasUtilsTs =
          fs.existsSync(path.join(baseDir, 'src/lib/utils.ts')) ||
          fs.existsSync(path.join(baseDir, 'lib/utils.ts'))
        const hasUtilsJs =
          fs.existsSync(path.join(baseDir, 'src/lib/utils.js')) ||
          fs.existsSync(path.join(baseDir, 'lib/utils.js'))

        if (hasUtilsTs) {
          language = 'typescript'
        } else if (hasUtilsJs) {
          language = 'javascript'
        } else {
          language = hasTsConfig ? 'typescript' : 'javascript'
        }

        const ext = language === 'typescript' ? 'ts' : 'js'
        componentPathInput = hasSrc ? './src/components/ui' : './components/ui'
        utilsPathInput = hasSrc
          ? `./src/lib/utils.${ext}`
          : `./lib/utils.${ext}`

        // Auto-detect stylesheet
        cssPathInput = './src/index.css'
        if (fs.existsSync(path.join(baseDir, 'src/app/globals.css'))) {
          cssPathInput = './src/app/globals.css'
        } else if (fs.existsSync(path.join(baseDir, 'src/globals.css'))) {
          cssPathInput = './src/globals.css'
        } else if (fs.existsSync(path.join(baseDir, 'src/main.css'))) {
          cssPathInput = './src/main.css'
        } else if (
          !hasSrc &&
          fs.existsSync(path.join(baseDir, 'app/globals.css'))
        ) {
          cssPathInput = './app/globals.css'
        }

        // Save the auto-detected configuration to components.json so it doesn't prompt in the future
        const configData = {
          language,
          paths: {
            components: componentPathInput,
            utils: utilsPathInput,
            css: cssPathInput,
          },
        }
        try {
          fs.writeJsonSync(configPath, configData, { spaces: 2 })
          console.log(
            `ℹ Auto-detected configuration (using ${language}, components at ${componentPathInput}). Saved config to components.json.`,
          )
        } catch {
          // ignore
        }
      }

      const componentPath = path.resolve(baseDir, componentPathInput)
      const utilsPath = path.resolve(baseDir, utilsPathInput)

      // Ensure directory structures exist
      await fs.ensureDir(componentPath)
      await fs.ensureDir(path.dirname(utilsPath))

      let hasInstalledUtils = false
      const allDependencies = new Set<string>()

      for (const name of componentsToInstall) {
        console.log(`\nInstalling ${name}...`)

        // Fetch component schema
        const compRes = await fetch(`${REGISTRY_URL}/components/${name}.json`)
        if (!compRes.ok) {
          throw new Error(`Failed to fetch component "${name}" data.`)
        }
        const componentData = (await compRes.json()) as any

        // Check and write registry dependencies (e.g. utils)
        if (
          componentData.registryDependencies?.includes('utils') &&
          !hasInstalledUtils
        ) {
          const utilsRes = await fetch(`${REGISTRY_URL}/utils.json`)
          if (utilsRes.ok) {
            const utilsData = (await utilsRes.json()) as any
            const utilFile = utilsData.files[0]
            let utilsContent = utilFile.content

            if (language === 'javascript') {
              utilsContent = transpileToJs(utilsContent, false)
            }

            await fs.writeFile(utilsPath, utilsContent)
            console.log(`✓ Created utilities helper at ${utilsPathInput}`)
            hasInstalledUtils = true
          }
        }

        // Write component files
        for (const file of componentData.files) {
          let fileName = file.name
          let content = file.content

          if (language === 'javascript') {
            fileName = fileName
              .replace(/\.tsx$/, '.jsx')
              .replace(/\.ts$/, '.js')
            content = transpileToJs(content, fileName.endsWith('.jsx'))
          }

          const targetFilePath = path.join(componentPath, fileName)

          // Calculate relative import path from component file to utility helper
          const componentDir = path.dirname(targetFilePath)
          let relativePathToUtils = path.relative(componentDir, utilsPath)
          relativePathToUtils = relativePathToUtils.replace(/\\/g, '/')
          if (!relativePathToUtils.startsWith('.')) {
            relativePathToUtils = './' + relativePathToUtils
          }
          relativePathToUtils = relativePathToUtils.replace(/\.[jt]sx?$/, '')

          // Replace any existing utility imports with the correctly calculated relative path
          content = content.replace(
            /(\.\.\/lib\/utils|@\/lib\/utils)/g,
            relativePathToUtils,
          )

          await fs.ensureDir(path.dirname(targetFilePath))
          await fs.writeFile(targetFilePath, content)
          console.log(
            `✓ Created component file at ${path.join(componentPathInput, fileName)}`,
          )
        }

        // Accumulate dependencies
        if (componentData.dependencies) {
          componentData.dependencies.forEach((dep: string) =>
            allDependencies.add(dep),
          )
        }
      }

      if (allDependencies.size > 0) {
        const deps = Array.from(allDependencies)
        await installDependencies(deps, options)
      }

      console.log(
        `\n✓ Success! Selected components added to your project successfully.`,
      )
    } catch (err: any) {
      console.error('Error during component installation:', err.message)
      process.exit(1)
    }
  })

program
  .command('init')
  .description('Initialize Vibe UI theme and workspace utilities configuration')
  .option('-y, --yes', 'Skip confirmation prompts and use default paths', false)
  .action(async (options) => {
    try {
      console.log('Initializing Vibe UI workspace configuration...')

      const baseDir = process.cwd()
      const hasSrc = fs.existsSync(path.join(baseDir, 'src'))

      // 1. Determine language
      let language = 'typescript'
      const hasTsConfig = fs.existsSync(path.join(baseDir, 'tsconfig.json'))
      if (!options.yes) {
        const answers = await prompts({
          type: 'select',
          name: 'language',
          message: 'Which language would you like to use?',
          choices: [
            { title: 'TypeScript', value: 'typescript' },
            { title: 'JavaScript', value: 'javascript' },
          ],
          initial: hasTsConfig ? 0 : 1,
        })
        language = answers.language || 'typescript'
      } else {
        language = hasTsConfig ? 'typescript' : 'javascript'
      }

      const ext = language === 'typescript' ? 'ts' : 'js'
      const defaultComponentPath = hasSrc
        ? './src/components/ui'
        : './components/ui'
      const defaultUtilsPath = hasSrc
        ? `./src/lib/utils.${ext}`
        : `./lib/utils.${ext}`

      // Auto-detect stylesheet
      let defaultCssPath = './src/index.css'
      if (fs.existsSync(path.join(baseDir, 'src/app/globals.css'))) {
        defaultCssPath = './src/app/globals.css'
      } else if (fs.existsSync(path.join(baseDir, 'src/globals.css'))) {
        defaultCssPath = './src/globals.css'
      } else if (fs.existsSync(path.join(baseDir, 'src/main.css'))) {
        defaultCssPath = './src/main.css'
      } else if (
        !hasSrc &&
        fs.existsSync(path.join(baseDir, 'app/globals.css'))
      ) {
        defaultCssPath = './app/globals.css'
      }

      let componentPathInput = defaultComponentPath
      let utilsPathInput = defaultUtilsPath
      let cssPathInput = defaultCssPath

      if (!options.yes) {
        const answers = await prompts([
          {
            type: 'text',
            name: 'componentPath',
            message: 'Where would you like to install Vibe UI components?',
            initial: defaultComponentPath,
          },
          {
            type: 'text',
            name: 'utilsPath',
            message: 'Where would you like to install the utilities helper?',
            initial: defaultUtilsPath,
          },
          {
            type: 'text',
            name: 'cssPath',
            message: 'Where is your global CSS stylesheet located?',
            initial: defaultCssPath,
          },
        ])
        componentPathInput = answers.componentPath || defaultComponentPath
        utilsPathInput = answers.utilsPath || defaultUtilsPath
        cssPathInput = answers.cssPath || defaultCssPath
      }

      const componentPath = path.resolve(baseDir, componentPathInput)
      const utilsPath = path.resolve(baseDir, utilsPathInput)
      const cssPath = path.resolve(baseDir, cssPathInput)

      // Ensure directory structures exist
      await fs.ensureDir(componentPath)
      await fs.ensureDir(path.dirname(utilsPath))
      await fs.ensureDir(path.dirname(cssPath))

      // 2. Fetch and write utils.ts
      console.log('Fetching utilities helper schema...')
      const utilsRes = await fetch(`${REGISTRY_URL}/utils.json`)
      if (!utilsRes.ok) {
        throw new Error(
          'Failed to fetch utilities helper schema from registry.',
        )
      }
      const utilsData = (await utilsRes.json()) as any
      const utilFile = utilsData.files[0]
      let utilsContent = utilFile.content

      if (language === 'javascript') {
        utilsContent = transpileToJs(utilsContent, false)
      }

      await fs.writeFile(utilsPath, utilsContent)
      console.log(`✓ Created utilities helper at ${utilsPathInput}`)

      // 3. Configure Tailwind v4 Theme in CSS file
      const themeContent = `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));

  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));

  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));

  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));

  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));

  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));

  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));

  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));

  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));

  --radius: 0.75rem;
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 270 76% 53%;
    --primary-foreground: 0 0% 100%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 270 76% 53%;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 270 76% 53%;
    --primary-foreground: 0 0% 100%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 270 76% 53%;
  }
}

@layer base {
  * {
    border-color: hsl(var(--border));
  }
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    font-family: "Inter", sans-serif;
    min-height: 100vh;
  }
}

/* Glassmorphism utility class */
.glass-panel {
  background: rgba(15, 15, 20, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
`

      let shouldWriteCss = true
      if (fs.existsSync(cssPath)) {
        const existingCss = await fs.readFile(cssPath, 'utf8')
        if (
          existingCss.includes('@theme') ||
          existingCss.includes('--color-background')
        ) {
          console.log(
            `\nNote: Tailwind v4 @theme values detected in ${cssPathInput}.`,
          )
          if (!options.yes) {
            const cssResponse = await prompts({
              type: 'confirm',
              name: 'overwrite',
              message:
                'Do you want to overwrite your stylesheet with the Vibe UI preset theme?',
              initial: false,
            })
            shouldWriteCss = cssResponse.overwrite
          } else {
            shouldWriteCss = false // Skip overwriting on silent default run
          }
        }
      }

      if (shouldWriteCss) {
        await fs.writeFile(cssPath, themeContent)
        console.log(
          `✓ Configured Vibe UI theme inside stylesheet at ${cssPathInput}`,
        )
      } else {
        console.log(`○ Skipped configuring stylesheet themes.`)
      }

      // Save the configuration to components.json
      const configPath = path.join(baseDir, 'components.json')
      const configData = {
        language,
        paths: {
          components: componentPathInput,
          utils: utilsPathInput,
          css: cssPathInput,
        },
      }
      try {
        fs.writeJsonSync(configPath, configData, { spaces: 2 })
        console.log(`✓ Saved workspace configuration to components.json`)
      } catch {
        // ignore
      }

      console.log(
        '\n✓ Success! Vibe UI successfully initialized in this project.\n',
      )
      const baseDeps = [
        'clsx',
        'tailwind-merge',
        'tailwind-variants',
        '@radix-ui/react-slot',
        'lucide-react',
      ]
      await installDependencies(baseDeps, options)
    } catch (err: any) {
      console.error('Error during workspace initialization:', err.message)
      process.exit(1)
    }
  })

program
  .command('diff')
  .description(
    'Compare local component files with the remote registry versions',
  )
  .argument('[component]', 'The component to diff')
  .action(async (componentName) => {
    try {
      // 1. Fetch index registry
      const indexRes = await fetch(`${REGISTRY_URL}/index.json`)
      if (!indexRes.ok) {
        throw new Error('Failed to fetch the component registry index.')
      }
      const registryIndex = (await indexRes.json()) as any[]

      const baseDir = process.cwd()
      const hasSrc = fs.existsSync(path.join(baseDir, 'src'))
      const defaultComponentPath = hasSrc
        ? './src/components/ui'
        : './components/ui'

      const componentPath = path.resolve(baseDir, defaultComponentPath)

      if (!fs.existsSync(componentPath)) {
        console.log(
          `Error: Component directory not found at ${defaultComponentPath}. Run "init" first.`,
        )
        process.exit(1)
      }

      const scanComponent = async (name: string) => {
        const localFilePath = path.join(componentPath, `${name}.tsx`)
        if (!fs.existsSync(localFilePath)) {
          console.log(
            `- \x1b[33m${name}\x1b[0m: Missing locally (Can install using "add ${name}")`,
          )
          return
        }

        const compRes = await fetch(`${REGISTRY_URL}/components/${name}.json`)
        if (!compRes.ok) {
          console.log(
            `- \x1b[31m${name}\x1b[0m: Registry component schema not found online.`,
          )
          return
        }

        const remoteData = (await compRes.json()) as any
        const remoteContent = remoteData.files[0].content
          .replace(/\r\n/g, '\n')
          .trim()
        const localContent = (await fs.readFile(localFilePath, 'utf8'))
          .replace(/\r\n/g, '\n')
          .trim()

        if (localContent === remoteContent) {
          console.log(`- \x1b[32m${name}\x1b[0m: Up to date ✓`)
        } else {
          console.log(`- \x1b[35m${name}\x1b[0m: Modified / Out of date ⚠`)

          if (componentName) {
            // Interactive prompt for single component diff options
            const answer = await prompts({
              type: 'select',
              name: 'action',
              message: `Differences found in ${name}.tsx. What would you like to do?`,
              choices: [
                { title: 'Show basic line-by-line diff', value: 'diff' },
                {
                  title: 'Overwrite local file with official version',
                  value: 'overwrite',
                },
                { title: 'Cancel', value: 'cancel' },
              ],
            })

            if (answer.action === 'diff') {
              console.log(`\n--- Line Diff for ${name}.tsx ---`)
              const localLines = localContent.split('\n')
              const remoteLines = remoteContent.split('\n')
              const max = Math.max(localLines.length, remoteLines.length)
              let diffCount = 0

              for (let i = 0; i < max; i++) {
                if (localLines[i] !== remoteLines[i]) {
                  if (diffCount < 15) {
                    if (localLines[i] !== undefined)
                      console.log(
                        `\x1b[31m- L${i + 1}: ${localLines[i]}\x1b[0m`,
                      )
                    if (remoteLines[i] !== undefined)
                      console.log(
                        `\x1b[32m+ L${i + 1}: ${remoteLines[i]}\x1b[0m`,
                      )
                  }
                  diffCount++
                }
              }
              if (diffCount > 15) {
                console.log(`... and ${diffCount - 15} more differences.`)
              }
            } else if (answer.action === 'overwrite') {
              await fs.writeFile(localFilePath, remoteData.files[0].content)
              console.log(
                `✓ Overwrote local file with remote registry version at ${defaultComponentPath}/${name}.tsx`,
              )
            }
          }
        }
      }

      if (componentName) {
        const componentInfo = registryIndex.find(
          (c) => c.name === componentName,
        )
        if (!componentInfo) {
          console.error(
            `Error: Component "${componentName}" not found in registry.`,
          )
          process.exit(1)
        }
        await scanComponent(componentName)
      } else {
        console.log('Scanning all components in project directory...')
        const localFiles = fs
          .readdirSync(componentPath)
          .filter((f) => f.endsWith('.tsx'))
        if (localFiles.length === 0) {
          console.log('No components installed in project directory.')
          return
        }
        for (const file of localFiles) {
          const name = path.basename(file, '.tsx')
          await scanComponent(name)
        }
      }
    } catch (err: any) {
      console.error('Error executing diff:', err.message)
      process.exit(1)
    }
  })

program.parse(process.argv)
