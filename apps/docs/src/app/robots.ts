import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/_next/',
    },
    sitemap: 'https://vibe-ui-kit.vercel.app/sitemap.xml',
  }
}
