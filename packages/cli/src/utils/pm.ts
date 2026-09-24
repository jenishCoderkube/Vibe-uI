import fs from 'fs-extra'
import path from 'path'
import { execSync } from 'child_process'

export function getPackageManager(): string {
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

export function filterMissingDependencies(
  dependencies: string[],
  baseDir: string = process.cwd(),
): string[] {
  try {
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

export async function installDependencies(
  dependencies: string[],
  _options?: { yes?: boolean },
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
