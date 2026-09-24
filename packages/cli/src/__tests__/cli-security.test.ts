import { describe, it, expect } from 'vitest'
import path from 'path'
import os from 'os'
import { validateSafePath, validateRegistryPayload } from '../utils/fs.js'
import { program } from '../index.js'

describe('CLI Security & Validation: validateSafePath', () => {
  const baseDir = path.resolve(os.tmpdir(), 'vibe-test-security')

  it('allows safe relative paths inside base directory', () => {
    const safe1 = validateSafePath(baseDir, 'button.tsx')
    expect(safe1).toBe(path.resolve(baseDir, 'button.tsx'))

    const safe2 = validateSafePath(baseDir, 'components/ui/card.tsx')
    expect(safe2).toBe(path.resolve(baseDir, 'components/ui/card.tsx'))

    const safe3 = validateSafePath(baseDir, './lib/utils.ts')
    expect(safe3).toBe(path.resolve(baseDir, 'lib/utils.ts'))
  })

  it('throws on directory traversal using parent directory dots (../)', () => {
    expect(() => validateSafePath(baseDir, '../evil.txt')).toThrow(
      /Directory traversal detected/,
    )
    expect(() => validateSafePath(baseDir, '../../etc/passwd')).toThrow(
      /Directory traversal detected/,
    )
    expect(() => validateSafePath(baseDir, 'components/../../evil.js')).toThrow(
      /Directory traversal detected/,
    )
  })

  it('throws on Windows directory traversal using backslashes (..\\)', () => {
    expect(() => validateSafePath(baseDir, '..\\windows\\system32')).toThrow(
      /Directory traversal detected/,
    )
    expect(() =>
      validateSafePath(baseDir, 'components\\..\\..\\windows'),
    ).toThrow(/Directory traversal detected/)
  })

  it('throws on null bytes in path', () => {
    expect(() => validateSafePath(baseDir, 'button.tsx\0.js')).toThrow(
      /null bytes are not allowed/,
    )
  })

  it('throws on empty or non-string paths', () => {
    expect(() => validateSafePath(baseDir, '')).toThrow(/Invalid path/)
    // @ts-expect-error test non-string runtime input
    expect(() => validateSafePath(baseDir, null)).toThrow(/Invalid path/)
  })

  it('throws on absolute paths targeting outside base directory', () => {
    const outsideTarget =
      process.platform === 'win32'
        ? 'C:\\Windows\\System32\\drivers\\etc\\hosts'
        : '/etc/passwd'
    expect(() => validateSafePath(baseDir, outsideTarget)).toThrow(
      /Directory traversal detected/,
    )
  })
})

describe('CLI Security & Validation: validateRegistryPayload', () => {
  it('accepts valid registry component payloads', () => {
    const validPayload = {
      name: 'button',
      files: [
        {
          name: 'button.tsx',
          content: 'export const Button = () => null',
        },
      ],
      dependencies: ['lucide-react'],
      registryDependencies: ['utils'],
    }
    expect(validateRegistryPayload(validPayload)).toBe(true)
  })

  it('accepts valid payload without optional dependencies', () => {
    const minimalPayload = {
      name: 'badge',
      files: [
        {
          name: 'badge.tsx',
          content: 'export const Badge = () => null',
        },
      ],
    }
    expect(validateRegistryPayload(minimalPayload)).toBe(true)
  })

  it('rejects null, undefined, or primitive payloads', () => {
    expect(validateRegistryPayload(null)).toBe(false)
    expect(validateRegistryPayload(undefined)).toBe(false)
    expect(validateRegistryPayload('string')).toBe(false)
    expect(validateRegistryPayload(123)).toBe(false)
    expect(validateRegistryPayload([])).toBe(false)
  })

  it('rejects payloads missing name or with empty name', () => {
    expect(
      validateRegistryPayload({
        files: [{ name: 'a.tsx', content: 'content' }],
      }),
    ).toBe(false)
    expect(
      validateRegistryPayload({
        name: '',
        files: [{ name: 'a.tsx', content: 'content' }],
      }),
    ).toBe(false)
    expect(
      validateRegistryPayload({
        name: '   ',
        files: [{ name: 'a.tsx', content: 'content' }],
      }),
    ).toBe(false)
  })

  it('rejects payloads with missing or empty files array', () => {
    expect(validateRegistryPayload({ name: 'button' })).toBe(false)
    expect(validateRegistryPayload({ name: 'button', files: [] })).toBe(false)
    expect(validateRegistryPayload({ name: 'button', files: 'not-array' })).toBe(
      false,
    )
  })

  it('rejects payloads with malformed file objects', () => {
    expect(
      validateRegistryPayload({
        name: 'button',
        files: [{ name: 'button.tsx' }], // missing content
      }),
    ).toBe(false)
    expect(
      validateRegistryPayload({
        name: 'button',
        files: [{ content: 'content' }], // missing name
      }),
    ).toBe(false)
    expect(
      validateRegistryPayload({
        name: 'button',
        files: [{ name: '', content: 'content' }], // empty name
      }),
    ).toBe(false)
  })

  it('rejects payloads with invalid dependencies types', () => {
    expect(
      validateRegistryPayload({
        name: 'button',
        files: [{ name: 'button.tsx', content: 'content' }],
        dependencies: 'not-an-array',
      }),
    ).toBe(false)
    expect(
      validateRegistryPayload({
        name: 'button',
        files: [{ name: 'button.tsx', content: 'content' }],
        dependencies: [123],
      }),
    ).toBe(false)
    expect(
      validateRegistryPayload({
        name: 'button',
        files: [{ name: 'button.tsx', content: 'content' }],
        registryDependencies: [null],
      }),
    ).toBe(false)
  })
})

describe('CLI Non-Interactive & Automation Flags', () => {
  it('supports --yes and --force flags on "add" command', () => {
    const addCmd = program.commands.find((c) => c.name() === 'add')
    expect(addCmd).toBeDefined()

    const flagStrings = addCmd?.options.map((o) => o.flags) || []
    const hasYes = flagStrings.some((f) => f.includes('--yes') || f.includes('-y'))
    const hasForce = flagStrings.some((f) => f.includes('--force') || f.includes('-f'))
    const hasOverwrite = flagStrings.some((f) => f.includes('--overwrite') || f.includes('-o'))

    expect(hasYes).toBe(true)
    expect(hasForce).toBe(true)
    expect(hasOverwrite).toBe(true)
  })

  it('supports --yes and --force flags on "init" command', () => {
    const initCmd = program.commands.find((c) => c.name() === 'init')
    expect(initCmd).toBeDefined()

    const flagStrings = initCmd?.options.map((o) => o.flags) || []
    const hasYes = flagStrings.some((f) => f.includes('--yes') || f.includes('-y'))
    const hasForce = flagStrings.some((f) => f.includes('--force') || f.includes('-f'))

    expect(hasYes).toBe(true)
    expect(hasForce).toBe(true)
  })

  it('supports --yes, --all, and --force flags on "update" command', () => {
    const updateCmd = program.commands.find((c) => c.name() === 'update')
    expect(updateCmd).toBeDefined()

    const flagStrings = updateCmd?.options.map((o) => o.flags) || []
    const hasYes = flagStrings.some((f) => f.includes('--yes') || f.includes('-y'))
    const hasAll = flagStrings.some((f) => f.includes('--all') || f.includes('-a'))
    const hasForce = flagStrings.some((f) => f.includes('--force') || f.includes('-f'))

    expect(hasYes).toBe(true)
    expect(hasAll).toBe(true)
    expect(hasForce).toBe(true)
  })
})
