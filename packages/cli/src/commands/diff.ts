import { Command } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import prompts from 'prompts'
import { REGISTRY_URL } from '../utils/constants.js'

export function registerDiffCommand(program: Command): void {
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
        let defaultComponentPath = hasSrc
          ? './src/components/ui'
          : './components/ui'

        const configPath = path.join(baseDir, 'components.json')
        if (fs.existsSync(configPath)) {
          try {
            const config = fs.readJsonSync(configPath)
            if (config.paths?.components) {
              defaultComponentPath = config.paths.components
            } else if (config.aliases?.ui) {
              defaultComponentPath = config.aliases.ui.replace(
                /^@\//,
                hasSrc ? './src/' : './',
              )
            }
          } catch {
            // ignore
          }
        }

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
}
