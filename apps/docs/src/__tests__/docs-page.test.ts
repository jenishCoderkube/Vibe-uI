import { describe, it, expect } from 'vitest'
import {
  generateStaticParams,
  generateMetadata,
} from '../app/docs/[[...slug]]/page'

describe('Docs Dynamic Page Route Handlers', () => {
  describe('generateStaticParams', () => {
    it('generates an entry for the root /docs page ({ slug: [] })', async () => {
      const params = await generateStaticParams()
      expect(params).toBeDefined()
      expect(Array.isArray(params)).toBe(true)

      const rootDoc = params.find(
        (p) => Array.isArray(p.slug) && p.slug.length === 0,
      )
      expect(rootDoc).toBeDefined()
      expect(rootDoc?.slug).toEqual([])
    })

    it('generates static params for introduction page', async () => {
      const params = await generateStaticParams()
      const introDoc = params.find(
        (p) =>
          Array.isArray(p.slug) &&
          p.slug.length === 1 &&
          p.slug[0] === 'introduction',
      )
      expect(introDoc).toBeDefined()
    })

    it('generates static params for component and animation pages', async () => {
      const params = await generateStaticParams()

      // Should find accordion component doc
      const accordionDoc = params.find(
        (p) =>
          Array.isArray(p.slug) &&
          p.slug.length === 2 &&
          p.slug[0] === 'components' &&
          p.slug[1] === 'accordion',
      )
      expect(accordionDoc).toBeDefined()

      // Should find animations overview doc
      const animationsDoc = params.find(
        (p) =>
          Array.isArray(p.slug) &&
          p.slug.length === 1 &&
          p.slug[0] === 'animations',
      )
      expect(animationsDoc).toBeDefined()
    })

    it('ensures all generated slugs have valid structure without .mdx extension', async () => {
      const params = await generateStaticParams()
      for (const item of params) {
        if (item.slug && item.slug.length > 0) {
          for (const segment of item.slug) {
            expect(segment).not.toContain('.mdx')
            expect(segment).not.toContain('/')
            expect(segment).not.toContain('\\')
          }
        }
      }
    })
  })

  describe('generateMetadata', () => {
    it('returns clean title without duplicate brand suffix for valid doc page', async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: ['components', 'accordion'] }),
      })

      expect(metadata.title).toBe(
        'Accordion - React & Tailwind CSS Component',
      )
      expect(metadata.alternates?.canonical).toBe(
        'https://vibe-ui-kit.vercel.app/docs/components/accordion',
      )
      expect(metadata.openGraph?.url).toBe(
        'https://vibe-ui-kit.vercel.app/docs/components/accordion',
      )
    })

    it('returns 404 metadata with robots noindex for non-existent doc page', async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: ['components', 'does-not-exist'] }),
      })

      expect(metadata.title).toBe('Page Not Found')
      expect(metadata.robots).toEqual({
        index: false,
        follow: false,
      })
      expect(metadata.alternates?.canonical).toBeUndefined()
    })

    it('blocks directory traversal attempts and returns 404 metadata', async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: ['..', '..', 'package'] }),
      })

      expect(metadata.title).toBe('Page Not Found')
      expect(metadata.robots).toEqual({
        index: false,
        follow: false,
      })
    })
  })
})

