import { describe, it, expect } from 'vitest'
import {
  BLOCKS_METADATA,
  VALID_BLOCK_SLUGS,
} from '../app/blocks/[blockName]/blocks-data'

describe('Blocks Data', () => {
  it('should have VALID_BLOCK_SLUGS matching the keys of BLOCKS_METADATA', () => {
    const metadataKeys = Object.keys(BLOCKS_METADATA)
    expect(VALID_BLOCK_SLUGS).toEqual(expect.arrayContaining(metadataKeys))
    expect(metadataKeys).toEqual(expect.arrayContaining(VALID_BLOCK_SLUGS))
    expect(VALID_BLOCK_SLUGS.length).toBe(metadataKeys.length)
  })

  it('should contain required core block slugs', () => {
    const expectedSlugs = [
      'dashboard-01',
      'ecommerce-01',
      'ecommerce-02',
      'chat-01',
      'auth-01',
      'crypto-glass-01',
    ]

    for (const slug of expectedSlugs) {
      expect(VALID_BLOCK_SLUGS).toContain(slug)
      expect(BLOCKS_METADATA[slug]).toBeDefined()
    }
  })

  it('each block metadata entry should have non-empty title, description, and vibeDeps', () => {
    for (const slug of VALID_BLOCK_SLUGS) {
      const block = BLOCKS_METADATA[slug]
      expect(block).toBeDefined()
      expect(block.title).toBeTruthy()
      expect(typeof block.title).toBe('string')
      expect(block.title.trim().length).toBeGreaterThan(0)

      expect(block.description).toBeTruthy()
      expect(typeof block.description).toBe('string')
      expect(block.description.trim().length).toBeGreaterThan(10)

      expect(block.vibeDeps).toBeTruthy()
      expect(typeof block.vibeDeps).toBe('string')
      expect(block.vibeDeps.trim().length).toBeGreaterThan(0)
    }
  })

  it('should not contain removed or deprecated blocks like dashboard-02', () => {
    expect(VALID_BLOCK_SLUGS).not.toContain('dashboard-02')
    expect(BLOCKS_METADATA['dashboard-02']).toBeUndefined()
  })
})
