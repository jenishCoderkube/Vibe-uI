import { Command } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import prompts from 'prompts'
import { REGISTRY_URL } from '../utils/constants.js'
import { installDependencies } from '../utils/pm.js'

export function registerUpdateCommand(program: Command): void {
  program
    .command('update [components...]')
    .description(
      'Update installed Vibe UI components to the latest registry version',
    )
    .option('-a, --all', 'Update all installed components without prompting')
    .option('-y, --yes', 'Skip confirmation prompts')
    .action(async (components, options) => {
      try {
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
            `\x1b[31mComponent directory not found at ${defaultComponentPath}. Run "init" first.\x1b[0m`,
          )
          process.exit(1)
        }

        const indexRes = await fetch(`${REGISTRY_URL}/index.json`)
        if (!indexRes.ok) {
          throw new Error('Failed to fetch the remote component registry index.')
        }
        const registryIndex = (await indexRes.json()) as any[]

        let targetComponents: string[] = []

        if (components && components.length > 0) {
          targetComponents = components
        } else {
          const localFiles = fs
            .readdirSync(componentPath)
            .filter((f) => f.endsWith('.tsx') || f.endsWith('.jsx'))

          if (localFiles.length === 0) {
            console.log('No components installed in project.')
            return
          }

          console.log('Scanning installed components for upstream updates...')
          const outdated: string[] = []

          for (const file of localFiles) {
            const name = file.replace(/\.[jt]sx?$/, '')
            const item = registryIndex.find((c) => c.name === name)
            if (!item) continue

            try {
              const compRes = await fetch(
                `${REGISTRY_URL}/components/${name}.json`,
              )
              if (!compRes.ok) continue
              const remoteData = (await compRes.json()) as any
              const remoteFile = remoteData.files?.[0]
              if (!remoteFile) continue

              const localContent = fs.readFileSync(
                path.join(componentPath, file),
                'utf8',
              )
              if (localContent.trim() !== remoteFile.content.trim()) {
                outdated.push(name)
              }
            } catch {
              // ignore
            }
          }

          if (outdated.length === 0) {
            console.log(
              '\x1b[32m✓ All installed components are already up to date with the registry!\x1b[0m\n',
            )
            return
          }

          if (options.all || options.yes) {
            targetComponents = outdated
          } else {
            const response = await prompts({
              type: 'multiselect',
              name: 'selected',
              message: `Found ${outdated.length} component(s) with updates available. Select which to update:`,
              choices: outdated.map((name) => ({
                title: name,
                value: name,
                selected: true,
              })),
              hint: '- Space to select. Return to submit',
            })

            targetComponents = response.selected || []
          }
        }

        if (targetComponents.length === 0) {
          console.log('No components selected for update.')
          return
        }

        console.log(`\nUpdating ${targetComponents.length} component(s)...`)

        for (const name of targetComponents) {
          const compRes = await fetch(`${REGISTRY_URL}/components/${name}.json`)
          if (!compRes.ok) {
            console.log(`\x1b[33m⚠ Skipped ${name}: not found in registry\x1b[0m`)
            continue
          }

          const data = (await compRes.json()) as any
          for (const file of data.files || []) {
            const filePath = path.join(componentPath, file.name)
            await fs.outputFile(filePath, file.content)
          }

          if (data.dependencies && data.dependencies.length > 0) {
            await installDependencies(data.dependencies, { yes: true })
          }

          console.log(
            `  \x1b[32m✓\x1b[0m Updated \x1b[1m${name}\x1b[0m to latest registry version`,
          )
        }

        console.log(
          `\n\x1b[32m🎉 Successfully updated ${targetComponents.length} component(s)!\x1b[0m\n`,
        )
      } catch (err: any) {
        console.error('Error updating components:', err.message)
        process.exit(1)
      }
    })
}
