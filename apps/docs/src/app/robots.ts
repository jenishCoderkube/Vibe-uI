import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://vibe-ui-kit.vercel.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/og'],
        disallow: ['/_next/', '/api/components/', '/api/contact/', '/preview/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
