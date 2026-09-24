import { Command } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import { getPackageManager, filterMissingDependencies } from '../utils/pm.js'

export function registerDoctorCommand(program: Command): void {
  program
    .command('doctor')
    .description(
      'Run automated project diagnostics to detect configuration, Tailwind, and dependency issues',
    )
    .action(async () => {
      console.log(
        '\n\x1b[1m\x1b[36m🩺 Running Vibe UI Project Diagnostics...\x1b[0m\n',
      )
      const baseDir = process.cwd()
      let score = 0
      const totalChecks = 5
      const issues: string[] = []

      // 1. Node.js Check
      const nodeMajor = parseInt(process.versions.node.split('.')[0], 10)
      if (nodeMajor >= 18) {
        console.log(
          `  \x1b[32m✓\x1b[0m Node.js runtime (\x1b[1mv${process.versions.node}\x1b[0m) is compatible (>= 18 required)`,
        )
        score++
      } else {
        console.log(
          `  \x1b[31m✗\x1b[0m Node.js runtime (\x1b[1mv${process.versions.node}\x1b[0m) is outdated. Recommended: Node 18 or higher.`,
        )
        issues.push('Upgrade Node.js to v18 or later.')
      }

      // 2. Package Manager & Lockfile Check
      const pm = getPackageManager()
      console.log(
        `  \x1b[32m✓\x1b[0m Package manager detected: \x1b[1m${pm}\x1b[0m`,
      )
      score++

      // 3. components.json configuration
      const configPath = path.join(baseDir, 'components.json')
      let resolvedComponentPath = ''
      if (fs.existsSync(configPath)) {
        try {
          const config = fs.readJsonSync(configPath)
          const compPath =
            config.paths?.components ||
            (config.aliases?.ui
              ? config.aliases.ui.replace(
                  /^@\//,
                  fs.existsSync(path.join(baseDir, 'src')) ? './src/' : './',
                )
              : '')
          if (compPath && fs.existsSync(path.resolve(baseDir, compPath))) {
            resolvedComponentPath = path.resolve(baseDir, compPath)
            console.log(
              `  \x1b[32m✓\x1b[0m \x1b[1mcomponents.json\x1b[0m found and component path verified (\x1b[90m${compPath}\x1b[0m)`,
            )
            score++
          } else {
            resolvedComponentPath = path.resolve(
              baseDir,
              compPath ||
                (fs.existsSync(path.join(baseDir, 'src'))
                  ? './src/components/ui'
                  : './components/ui'),
            )
            console.log(
              `  \x1b[33m⚠\x1b[0m \x1b[1mcomponents.json\x1b[0m found, but component directory at \x1b[1m${compPath || 'default'}\x1b[0m does not exist yet.`,
            )
            issues.push(
              'Run "npx vibe-ui-kit add <component>" to install your first component.',
            )
          }
        } catch {
          console.log(
            `  \x1b[31m✗\x1b[0m \x1b[1mcomponents.json\x1b[0m exists but contains invalid JSON.`,
          )
          issues.push(
            'Fix syntax errors in components.json or run "npx vibe-ui-kit init --yes".',
          )
        }
      } else {
        const defaultPath = fs.existsSync(path.join(baseDir, 'src'))
          ? './src/components/ui'
          : './components/ui'
        resolvedComponentPath = path.resolve(baseDir, defaultPath)
        console.log(
          `  \x1b[33m○\x1b[0m \x1b[1mcomponents.json\x1b[0m not found (using default path: \x1b[90m${defaultPath}\x1b[0m)`,
        )
        issues.push('Run "npx vibe-ui-kit init" to generate components.json.')
      }

      // 4. Tailwind CSS Configuration & CSS Directives
      let tailwindVersion = 'not-detected'
      const pkgPath = path.join(baseDir, 'package.json')
      if (fs.existsSync(pkgPath)) {
        try {
          const pkgData = fs.readJsonSync(pkgPath)
          const allDeps = {
            ...(pkgData.dependencies || {}),
            ...(pkgData.devDependencies || {}),
          }
          if (
            allDeps['@tailwindcss/postcss'] ||
            allDeps['@tailwindcss/vite'] ||
            (allDeps['tailwindcss'] &&
              (allDeps['tailwindcss'].startsWith('4') ||
                allDeps['tailwindcss'].startsWith('^4')))
          ) {
            tailwindVersion = 'v4'
          } else if (allDeps['tailwindcss']) {
            tailwindVersion = 'v3'
          }
        } catch {
          // ignore
        }
      }

      const cssCandidates = [
        path.join(baseDir, 'src/app/globals.css'),
        path.join(baseDir, 'src/index.css'),
        path.join(baseDir, 'app/globals.css'),
        path.join(baseDir, 'index.css'),
        path.join(baseDir, 'styles/globals.css'),
      ]
      const foundCss = cssCandidates.find((p) => fs.existsSync(p))

      if (tailwindVersion === 'v4') {
        console.log(`  \x1b[32m✓\x1b[0m Tailwind CSS \x1b[1mv4\x1b[0m detected`)
        if (foundCss) {
          const content = fs.readFileSync(foundCss, 'utf8')
          if (
            content.includes('@import "tailwindcss"') ||
            content.includes("@import 'tailwindcss'") ||
            content.includes('@theme')
          ) {
            console.log(
              `  \x1b[32m✓\x1b[0m Tailwind v4 directives correctly configured in \x1b[90m${path.relative(baseDir, foundCss)}\x1b[0m`,
            )
            score++
          } else {
            console.log(
              `  \x1b[33m⚠\x1b[0m ${path.relative(baseDir, foundCss)} missing @import "tailwindcss" directive.`,
            )
            issues.push(
              `Add @import "tailwindcss"; to ${path.relative(baseDir, foundCss)}.`,
            )
          }
        } else {
          score++
        }
      } else if (tailwindVersion === 'v3') {
        console.log(`  \x1b[32m✓\x1b[0m Tailwind CSS \x1b[1mv3\x1b[0m detected`)
        if (foundCss) {
          const content = fs.readFileSync(foundCss, 'utf8')
          if (content.includes('@tailwind base')) {
            console.log(
              `  \x1b[32m✓\x1b[0m Tailwind v3 directives correctly configured in \x1b[90m${path.relative(baseDir, foundCss)}\x1b[0m`,
            )
            score++
          } else {
            console.log(
              `  \x1b[33m⚠\x1b[0m ${path.relative(baseDir, foundCss)} missing @tailwind base; directive.`,
            )
            issues.push(
              `Ensure @tailwind base; @tailwind components; @tailwind utilities; are present in ${path.relative(baseDir, foundCss)}.`,
            )
          }
        } else {
          score++
        }
      } else {
        console.log(
          `  \x1b[33m⚠\x1b[0m Tailwind CSS not detected in package.json.`,
        )
        issues.push('Install Tailwind CSS: npm install -D tailwindcss')
      }

      // 5. Core Peer Dependencies
      const coreDeps = [
        'clsx',
        'tailwind-merge',
        'tailwind-variants',
        'lucide-react',
      ]
      const missingCore = filterMissingDependencies(coreDeps)
      if (missingCore.length === 0) {
        console.log(
          `  \x1b[32m✓\x1b[0m All core utility dependencies present (\x1b[90mclsx, tailwind-merge, tailwind-variants, lucide-react\x1b[0m)`,
        )
        score++
      } else {
        console.log(
          `  \x1b[33m⚠\x1b[0m Missing recommended peer dependencies: \x1b[31m${missingCore.join(', ')}\x1b[0m`,
        )
        issues.push(
          `Install missing dependencies: ${pm === 'pnpm' ? 'pnpm add' : pm === 'yarn' ? 'yarn add' : pm === 'bun' ? 'bun add' : 'npm install'} ${missingCore.join(' ')}`,
        )
      }

      // 6. Installed Components Scan
      if (resolvedComponentPath && fs.existsSync(resolvedComponentPath)) {
        const files = fs
          .readdirSync(resolvedComponentPath)
          .filter((f) => f.endsWith('.tsx') || f.endsWith('.jsx'))
        if (files.length > 0) {
          console.log(
            `  \x1b[32m✓\x1b[0m Found \x1b[1m${files.length}\x1b[0m installed component(s) in \x1b[90m${path.relative(baseDir, resolvedComponentPath)}\x1b[0m`,
          )
        }
      }

      // Diagnostics Score
      console.log(
        `\n\x1b[1mDiagnostics Result: ${score >= 4 ? '\x1b[32mHealthy' : '\x1b[33mAction Recommended'} (${score}/${totalChecks} checks passed)\x1b[0m`,
      )
      if (issues.length > 0) {
        console.log('\n\x1b[1mActionable Next Steps:\x1b[0m')
        issues.forEach((iss, i) => {
          console.log(`  ${i + 1}. ${iss}`)
        })
        console.log('')
      } else {
        console.log(
          '  Your project is perfectly configured for Vibe UI components! 🚀\n',
        )
      }
    })
}
