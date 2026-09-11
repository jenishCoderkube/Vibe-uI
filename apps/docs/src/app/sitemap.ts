import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://vibe-ui-kit.vercel.app'
  const now = new Date()

  // 1. Core Top-Level Landing & Hub Routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/docs/introduction`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/docs/installation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/cli`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blocks`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/charts`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/studio`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // 2. Add individual Block Preview routes
  const blockSlugs = [
    'dashboard-01',
    'dashboard-02',
    'ecommerce-01',
    'ecommerce-02',
    'chat-01',
    'auth-01',
    'crypto-glass-01',
  ]

  for (const slug of blockSlugs) {
    routes.push({
      url: `${baseUrl}/blocks/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    })
  }

  // 3. Dynamically discover all MDX documentation pages (Components, Animations, Backgrounds, Blocks)
  const docsDir = path.join(process.cwd(), 'src/content/docs')

  const getMdxFiles = (dir: string, urlPrefix = '/docs'): string[] => {
    let results: string[] = []
    if (!fs.existsSync(dir)) return results
    const list = fs.readdirSync(dir)
    for (const file of list) {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        results = results.concat(getMdxFiles(filePath, `${urlPrefix}/${file}`))
      } else if (file.endsWith('.mdx')) {
        const routeName =
          file === 'introduction.mdx' && urlPrefix === '/docs'
            ? '/docs/introduction'
            : `${urlPrefix}/${file.replace('.mdx', '')}`
        results.push(routeName)
      }
    }
    return results
  }

  try {
    const docPaths = getMdxFiles(docsDir)
    for (const docPath of docPaths) {
      // Avoid duplicate entries if already added in core routes
      if (routes.some((r) => r.url === `${baseUrl}${docPath}`)) continue

      const isHub =
        docPath === '/docs/components' ||
        docPath === '/docs/animations' ||
        docPath === '/docs/backgrounds'
      const isComparison = docPath.startsWith('/docs/comparisons/')
      const isComponent = docPath.startsWith('/docs/components/')
      const isAnimation = docPath.startsWith('/docs/animations/')
      const isBackground = docPath.startsWith('/docs/backgrounds/')
      const isBlock = docPath.startsWith('/docs/blocks/')

      const priority = isHub || isComparison
        ? 0.9
        : isComponent || isAnimation || isBackground || isBlock
          ? 0.85
          : 0.75

      routes.push({
        url: `${baseUrl}${docPath}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority,
      })
    }
  } catch (error) {
    console.error('Failed to read docs folder for dynamic sitemap:', error)
  }

  return routes
}
