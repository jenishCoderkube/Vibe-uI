import { describe, it, expect } from 'vitest'
import {
  generateStaticParams,
  generateMetadata,
} from '../app/blocks/[blockName]/page'
import {
  BLOCKS_METADATA,
  VALID_BLOCK_SLUGS,
} from '../app/blocks/[blockName]/blocks-data'

describe('Blocks Detail Page Route Handlers', () => {
  describe('generateStaticParams', () => {
    it('generates static params for all valid block slugs', async () => {
      const params = await generateStaticParams()
      expect(params).toHaveLength(VALID_BLOCK_SLUGS.length)
      expect(params).toEqual(
        VALID_BLOCK_SLUGS.map((slug) => ({ blockName: slug })),
      )
    })

    it('each param object has blockName matching a valid block in BLOCKS_METADATA', async () => {
      const params = await generateStaticParams()
      for (const param of params) {
        expect(param.blockName).toBeDefined()
        expect(BLOCKS_METADATA[param.blockName]).toBeDefined()
      }
    })
  })

  describe('generateMetadata', () => {
    it('generates correct SEO metadata and canonical URL for a valid block', async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve({ blockName: 'crypto-glass-01' }),
      })

      const block = BLOCKS_METADATA['crypto-glass-01']
      expect(metadata.title).toBe(
        `${block.title} - Application Block`,
      )
      expect(metadata.description).toBe(block.description)
      expect(metadata.alternates?.canonical).toBe(
        'https://vibe-ui-kit.vercel.app/blocks/crypto-glass-01',
      )
      expect(metadata.openGraph?.url).toBe(
        'https://vibe-ui-kit.vercel.app/blocks/crypto-glass-01',
      )
      expect(metadata.openGraph?.images).toBeDefined()
      expect((metadata.twitter as any)?.card).toBe('summary_large_image')
    })

    it('returns not found metadata with robots noindex for an invalid block slug', async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve({ blockName: 'non-existent-block' }),
      })

      expect(metadata.title).toBe('Block Not Found | Vibe UI')
      expect(metadata.robots).toEqual({
        index: false,
        follow: false,
      })
      expect(metadata.alternates?.canonical).toBeUndefined()
    })
  })
})
