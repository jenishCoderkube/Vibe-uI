import { Command } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import prompts from 'prompts'
import { REGISTRY_URL } from '../utils/constants.js'
import { transpileToJs } from '../utils/transpile.js'
import { installDependencies } from '../utils/pm.js'
import { validateSafePath, validateRegistryPayload } from '../utils/fs.js'

export function registerInitCommand(program: Command): void {
  program
    .command('init')
    .description('Initialize Vibe UI theme and workspace utilities configuration')
    .option('-y, --yes', 'Skip confirmation prompts and use default paths', false)
    .option('-f, --force', 'Force overwrite of existing configuration and styles', false)
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

        const componentPath = validateSafePath(baseDir, componentPathInput)
        const utilsPath = validateSafePath(baseDir, utilsPathInput)
        const cssPath = validateSafePath(baseDir, cssPathInput)

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

        // 3. Configure Tailwind Theme in CSS file
        let isTailwindV3 = false
        if (fs.existsSync(cssPath)) {
          const existingCss = await fs.readFile(cssPath, 'utf8')
          if (existingCss.includes('@tailwind')) {
            isTailwindV3 = true
          }
        }
        try {
          const projectPkgPath = path.join(baseDir, 'package.json')
          if (fs.existsSync(projectPkgPath)) {
            const projectPkg = fs.readJsonSync(projectPkgPath)
            const allDeps = {
              ...(projectPkg.dependencies || {}),
              ...(projectPkg.devDependencies || {}),
            }
            const twVer = allDeps['tailwindcss'] || ''
            if (
              !allDeps['@tailwindcss/postcss'] &&
              (twVer.startsWith('3') ||
                twVer.startsWith('^3') ||
                twVer.startsWith('~3'))
            ) {
              isTailwindV3 = true
            }
          }
        } catch {
          // ignore
        }

        const v4ThemeHeader = `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");
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
`

        const v3ThemeHeader = `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;
`

        const commonThemeBody = `@layer base {
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
    --radius: 0.75rem;
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

        const themeContent = `${isTailwindV3 ? v3ThemeHeader : v4ThemeHeader}\n${commonThemeBody}`

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
            if (options.force) {
              shouldWriteCss = true
            } else if (!options.yes) {
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
}
