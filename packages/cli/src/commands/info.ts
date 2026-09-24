import { Command } from 'commander'
import { REGISTRY_URL } from '../utils/constants.js'
import { getComponentCategory } from '../utils/categories.js'

export function registerInfoCommand(program: Command): void {
  program
    .command('info')
    .description('Display detailed information and dependencies for a component')
    .argument('<component>', 'The component name to inspect')
    .action(async (componentName) => {
      try {
        const compRes = await fetch(
          `${REGISTRY_URL}/components/${componentName}.json`,
        )
        if (!compRes.ok) {
          console.error(
            `\x1b[31mError: Component "${componentName}" not found in the registry.\x1b[0m`,
          )
          console.log(`Run "vibe-ui-kit list" to see all available components.`)
          process.exit(1)
        }

        const data = (await compRes.json()) as {
          name: string
          dependencies?: string[]
          registryDependencies?: string[]
          files?: Array<{ name: string }>
        }

        const cat = getComponentCategory(data.name)
        const regDeps = (data.registryDependencies || []).filter(
          (d) => d !== 'utils',
        )
        const npmDeps = data.dependencies || []
        const fileNames = (data.files || []).map((f) => f.name)

        console.log(`\n\x1b[1m\x1b[36m${data.name}\x1b[0m`)
        console.log(`  \x1b[1mCategory:\x1b[0m             ${cat}`)
        console.log(
          `  \x1b[1mFiles:\x1b[0m                ${fileNames.join(', ') || 'N/A'}`,
        )
        console.log(
          `  \x1b[1mRegistry Dependencies:\x1b[0m ${regDeps.length > 0 ? regDeps.join(', ') : 'none (standalone)'}`,
        )
        console.log(
          `  \x1b[1mNPM Dependencies:\x1b[0m      ${npmDeps.length > 0 ? npmDeps.join(', ') : 'none'}`,
        )
        console.log(
          `\n  \x1b[1mInstallation:\x1b[0m\n    \x1b[32mnpx vibe-ui-kit add ${data.name}\x1b[0m\n`,
        )
      } catch (err: any) {
        console.error('Error retrieving component info:', err.message)
        process.exit(1)
      }
    })
}
