import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://vibe-ui-kit.vercel.app'

  // Core pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blocks`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/charts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Read docs content directory dynamically to populate MDX paths
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
      const isComponent = docPath.startsWith('/docs/components/')
      const isAnimation = docPath.startsWith('/docs/animations/')
      routes.push({
        url: `${baseUrl}${docPath}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: isComponent ? 0.8 : isAnimation ? 0.8 : 0.7,
      })
    }
  } catch (error) {
    console.error('Failed to read docs folder for dynamic sitemap:', error)
  }

  return routes
}
