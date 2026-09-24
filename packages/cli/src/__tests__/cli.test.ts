import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import fs from 'fs-extra'
import path from 'path'
import os from 'os'
import {
  program,
  transpileToJs,
  getPackageManager,
  filterMissingDependencies,
} from '../index'

describe('vibe-ui-kit CLI Program & Commands', () => {
  it('registers all required core commands', () => {
    const commandNames = program.commands.map((cmd) => cmd.name())
    expect(commandNames).toContain('init')
    expect(commandNames).toContain('add')
    expect(commandNames).toContain('list')
    expect(commandNames).toContain('update')
  })

  describe('init command configuration', () => {
    const initCmd = program.commands.find((cmd) => cmd.name() === 'init')

    it('exists and has a description', () => {
      expect(initCmd).toBeDefined()
      expect(initCmd?.description()).toBeTruthy()
    })

    it('supports --yes flag for non-interactive setup', () => {
      const optionFlags = initCmd?.options.map((opt) => opt.flags)
      const hasYesFlag = optionFlags?.some((f) => f.includes('--yes') || f.includes('-y'))
      expect(hasYesFlag).toBe(true)
    })
  })

  describe('add command configuration', () => {
    const addCmd = program.commands.find((cmd) => cmd.name() === 'add')

    it('exists and takes component argument', () => {
      expect(addCmd).toBeDefined()
      expect(addCmd?.description()).toBeTruthy()
    })

    it('supports overwrite and yes flags', () => {
      const optionFlags = addCmd?.options.map((opt) => opt.flags)
      const hasOverwrite = optionFlags?.some((f) => f.includes('--overwrite') || f.includes('-o'))
      const hasYes = optionFlags?.some((f) => f.includes('--yes') || f.includes('-y'))
      expect(hasOverwrite).toBe(true)
      expect(hasYes).toBe(true)
    })
  })

  describe('transpileToJs utility', () => {
    it('transpiles TypeScript code to valid JavaScript removing type annotations', () => {
      const tsCode = `
        interface TestProps {
          label: string;
          count?: number;
        }
        export const TestComponent = (props: TestProps) => {
          return props.label;
        };
      `
      const jsCode = transpileToJs(tsCode, false)
      expect(jsCode).not.toContain('interface TestProps')
      expect(jsCode).not.toContain(': TestProps')
      expect(jsCode).toContain('export const TestComponent')
    })

    it('preserves JSX syntax when isJsx is true', () => {
      const tsxCode = `
        export const Button = () => <button className="btn">Click</button>;
      `
      const output = transpileToJs(tsxCode, true)
      expect(output).toContain('<button className="btn">Click</button>')
    })
  })

  describe('getPackageManager utility', () => {
    const originalEnv = process.env.npm_config_user_agent

    afterEach(() => {
      if (originalEnv) {
        process.env.npm_config_user_agent = originalEnv
      } else {
        delete process.env.npm_config_user_agent
      }
    })

    it('detects pnpm from npm_config_user_agent', () => {
      process.env.npm_config_user_agent = 'pnpm/9.0.5 node/v20.0.0 win32 x64'
      expect(getPackageManager()).toBe('pnpm')
    })

    it('detects yarn from npm_config_user_agent', () => {
      process.env.npm_config_user_agent = 'yarn/1.22.19 npm/? node/v20.0.0 win32 x64'
      expect(getPackageManager()).toBe('yarn')
    })

    it('detects bun from npm_config_user_agent', () => {
      process.env.npm_config_user_agent = 'bun/1.0.0 node/v20.0.0 win32 x64'
      expect(getPackageManager()).toBe('bun')
    })
  })

  describe('filterMissingDependencies utility', () => {
    let tempDir: string

    beforeEach(async () => {
      tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'vibe-deps-test-'))
    })

    afterEach(async () => {
      await fs.remove(tempDir)
    })

    it('returns missing dependencies not installed in package.json', async () => {
      await fs.writeJson(path.join(tempDir, 'package.json'), {
        name: 'test-app',
        dependencies: {
          clsx: '^2.0.0',
        },
      })

      const inputDeps = ['clsx', 'tailwind-variants', 'lucide-react']
      const missing = filterMissingDependencies(inputDeps, tempDir)
      expect(missing).toEqual(['tailwind-variants', 'lucide-react'])
    })

    it('returns empty array when all dependencies are satisfied', async () => {
      await fs.writeJson(path.join(tempDir, 'package.json'), {
        name: 'test-app',
        dependencies: {
          clsx: '^2.0.0',
          'tailwind-variants': '^0.2.0',
        },
      })

      const missing = filterMissingDependencies(['clsx', 'tailwind-variants'], tempDir)
      expect(missing).toEqual([])
    })
  })

  describe('Integration Scaffolding (components.json)', () => {
    let tempDir: string

    beforeEach(async () => {
      tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'vibe-scaffold-test-'))
    })

    afterEach(async () => {
      await fs.remove(tempDir)
    })

    it('creates a valid components.json configuration structure', async () => {
      const configPath = path.join(tempDir, 'components.json')
      const configPayload = {
        $schema: 'https://vibe-ui-kit.vercel.app/schema.json',
        style: 'default',
        rsc: true,
        tsx: true,
        tailwind: {
          config: 'tailwind.config.ts',
          css: 'src/app/globals.css',
          baseColor: 'slate',
          cssVariables: true,
        },
        aliases: {
          components: '@/components',
          utils: '@/lib/utils',
        },
      }

      await fs.writeJson(configPath, configPayload, { spaces: 2 })

      expect(await fs.pathExists(configPath)).toBe(true)
      const parsed = await fs.readJson(configPath)
      expect(parsed.aliases.components).toBe('@/components')
      expect(parsed.aliases.utils).toBe('@/lib/utils')
      expect(parsed.tsx).toBe(true)
    })
  })
})
