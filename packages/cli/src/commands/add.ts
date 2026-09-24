import { Command } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import prompts from 'prompts'
import { REGISTRY_URL } from '../utils/constants.js'
import { transpileToJs } from '../utils/transpile.js'
import { installDependencies } from '../utils/pm.js'
import { validateSafePath, validateRegistryPayload } from '../utils/fs.js'

export function registerAddCommand(program: Command): void {
  program
    .command('add')
    .description('Add components to your project')
    .argument('[components...]', 'The components to add')
    .option('-y, --yes', 'Skip confirmation prompts and use default paths', false)
    .option('-o, --overwrite', 'Overwrite existing component files', false)
    .option('-f, --force', 'Force overwrite of existing files (alias for --overwrite)', false)
    .option('-a, --all', 'Install all available components and blocks', false)
    .action(async (components, options) => {
      try {
        // 1. Fetch index registry
        const indexRes = await fetch(`${REGISTRY_URL}/index.json`)
        if (!indexRes.ok) {
          throw new Error('Failed to fetch the component registry index.')
        }
        const registryIndex = (await indexRes.json()) as any[]

        let componentsToInstall: string[] = []

        if (
          options.all ||
          (components &&
            (components.includes('all') || components.includes('--all')))
        ) {
          // Bulk install all registry components
          componentsToInstall = registryIndex.map((c) => c.name)
        } else if (components && components.length > 0) {
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
        } else if (options.yes) {
          console.log('No components specified. Please specify components to add when running with --yes.')
          return
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
              const componentsAlias =
                config.aliases.components || '@/components'
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
          componentPathInput = hasSrc
            ? './src/components/ui'
            : './components/ui'
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

          // Save the auto-detected configuration to components.json
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

        const componentPath = validateSafePath(baseDir, componentPathInput)
        const utilsPath = validateSafePath(baseDir, utilsPathInput)
        const overwrite = Boolean(options.overwrite || options.force)

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
          const rawComponentData = await compRes.json()
          if (!validateRegistryPayload(rawComponentData)) {
            throw new Error(`Invalid registry payload received for component "${name}".`)
          }
          const componentData = rawComponentData

          // Check and write registry dependencies (e.g. utils)
          if (
            componentData.registryDependencies?.includes('utils') &&
            !hasInstalledUtils
          ) {
            const utilsExists = fs.existsSync(utilsPath)
            let shouldWriteUtils = !utilsExists || overwrite

            if (utilsExists && !overwrite) {
              if (!options.yes) {
                const confirm = await prompts({
                  type: 'confirm',
                  name: 'overwrite',
                  message: `Utilities helper at "${utilsPathInput}" already exists. Overwrite?`,
                  initial: false,
                })
                shouldWriteUtils = confirm.overwrite
              } else {
                shouldWriteUtils = false
              }
            }

            if (shouldWriteUtils) {
              const utilsRes = await fetch(`${REGISTRY_URL}/utils.json`)
              if (utilsRes.ok) {
                const rawUtilsData = await utilsRes.json()
                if (!validateRegistryPayload(rawUtilsData)) {
                  throw new Error('Invalid registry payload received for utilities helper.')
                }
                const utilsData = rawUtilsData
                const utilFile = utilsData.files[0]
                let utilsContent = utilFile.content

                if (language === 'javascript') {
                  utilsContent = transpileToJs(utilsContent, false)
                }

                await fs.writeFile(utilsPath, utilsContent)
                console.log(`✓ Created utilities helper at ${utilsPathInput}`)
              }
            } else {
              console.log(
                `○ Using existing utilities helper at ${utilsPathInput}`,
              )
            }
            hasInstalledUtils = true
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

            const targetFilePath = validateSafePath(componentPath, fileName)

            const fileExists = fs.existsSync(targetFilePath)
            if (fileExists && !overwrite) {
              if (!options.yes) {
                const confirm = await prompts({
                  type: 'confirm',
                  name: 'overwrite',
                  message: `File "${path.join(componentPathInput, fileName)}" already exists. Overwrite?`,
                  initial: false,
                })
                if (!confirm.overwrite) {
                  console.log(
                    `○ Skipped ${path.join(componentPathInput, fileName)}`,
                  )
                  continue
                }
              } else {
                console.log(
                  `○ Skipped ${path.join(componentPathInput, fileName)} (already exists. Use -o/--overwrite or -f/--force to overwrite)`,
                )
                continue
              }
            }

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

            // Replace any @/components/ui/<component> imports with relative paths
            content = content.replace(
              /@\/components\/ui\/([a-zA-Z0-9_-]+)/g,
              (_match: string, compName: string) => {
                const targetCompPath = path.join(componentPath, compName)
                let relPath = path
                  .relative(componentDir, targetCompPath)
                  .replace(/\\/g, '/')
                if (!relPath.startsWith('.')) {
                  relPath = './' + relPath
                }
                return relPath
              },
            )

            // Replace any @/hooks/use-mobile imports with relative paths
            content = content.replace(/@\/hooks\/use-mobile/g, () => {
              const targetHookPath = path.join(componentPath, 'hooks/use-mobile')
              let relPath = path
                .relative(componentDir, targetHookPath)
                .replace(/\\/g, '/')
              if (!relPath.startsWith('.')) {
                relPath = './' + relPath
              }
              return relPath
            })

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
}
