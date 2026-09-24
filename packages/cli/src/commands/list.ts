import { Command } from 'commander'
import { REGISTRY_URL } from '../utils/constants.js'
import { getComponentCategory } from '../utils/categories.js'

export function registerListCommand(program: Command): void {
  program
    .command('list')
    .description(
      'List all available components, animations, backgrounds, and blocks',
    )
    .option(
      '-c, --category <category>',
      'Filter by category (components, animations, backgrounds, blocks)',
    )
    .option('-s, --search <term>', 'Search components by name or dependency')
    .action(async (options) => {
      try {
        const indexRes = await fetch(`${REGISTRY_URL}/index.json`)
        if (!indexRes.ok) {
          throw new Error('Failed to fetch the component registry index.')
        }
        let items = (await indexRes.json()) as Array<{
          name: string
          files: string[]
          dependencies?: string[]
          registryDependencies?: string[]
        }>

        if (options.search) {
          const query = options.search.toLowerCase()
          items = items.filter(
            (item) =>
              item.name.toLowerCase().includes(query) ||
              item.dependencies?.some((d) => d.toLowerCase().includes(query)) ||
              item.registryDependencies?.some((d) =>
                d.toLowerCase().includes(query),
              ),
          )
        }

        const groups: Record<
          'components' | 'animations' | 'backgrounds' | 'blocks',
          typeof items
        > = {
          components: [],
          animations: [],
          backgrounds: [],
          blocks: [],
        }

        for (const item of items) {
          const cat = getComponentCategory(item.name)
          groups[cat].push(item)
        }

        const selectedCategory = options.category
          ? options.category.toLowerCase()
          : null

        const categoryLabels: Record<
          'components' | 'animations' | 'backgrounds' | 'blocks',
          { title: string; icon: string }
        > = {
          components: { title: 'Components', icon: '📦' },
          animations: { title: 'Animations', icon: '✨' },
          backgrounds: { title: 'Backgrounds', icon: '🎨' },
          blocks: { title: 'Blocks', icon: '🧩' },
        }

        console.log(
          `\n\x1b[1m\x1b[36mVibe UI Registry\x1b[0m — ${items.length} item(s) available\n`,
        )

        for (const cat of [
          'components',
          'animations',
          'backgrounds',
          'blocks',
        ] as const) {
          if (selectedCategory && selectedCategory !== cat) continue
          const list = groups[cat]
          if (list.length === 0) continue

          const { title, icon } = categoryLabels[cat]
          console.log(`\x1b[1m${icon} ${title} (${list.length})\x1b[0m`)

          for (const item of list) {
            const regDeps = (item.registryDependencies || []).filter(
              (d) => d !== 'utils',
            )
            const depHint =
              regDeps.length > 0
                ? ` \x1b[90m(requires: ${regDeps.join(', ')})\x1b[0m`
                : ''
            console.log(`  • \x1b[32m${item.name}\x1b[0m${depHint}`)
          }
          console.log('')
        }

        console.log(
          `\x1b[90mRun "vibe-ui-kit add <name>" to install or "vibe-ui-kit info <name>" for details.\x1b[0m\n`,
        )
      } catch (err: any) {
        console.error('Error fetching component list:', err.message)
        process.exit(1)
      }
    })
}
