import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> },
) {
  try {
    const { name } = await params
    // Remove any trailing extensions if present
    const cleanName = name.replace(/\.md$/, '')

    const filePath = path.join(
      process.cwd(),
      'src/content/docs/components',
      `${cleanName}.mdx`,
    )

    if (!fs.existsSync(filePath)) {
      return new NextResponse('Component not found', { status: 404 })
    }

    const mdxContent = fs.readFileSync(filePath, 'utf8')

    // Parse frontmatter
    let title = cleanName.charAt(0).toUpperCase() + cleanName.slice(1)
    let description = ''

    const titleMatch = mdxContent.match(/title:\s*(.*)/)
    if (titleMatch) title = titleMatch[1].trim().replace(/['"]/g, '')

    const descMatch = mdxContent.match(/description:\s*(.*)/)
    if (descMatch) description = descMatch[1].trim().replace(/['"]/g, '')

    // Fallback if no frontmatter is found
    if (!description || !titleMatch) {
      const h1Match = mdxContent.match(/^#\s+(.*)/m)
      if (h1Match) {
        if (!titleMatch) {
          title = h1Match[1].trim()
        }
        if (!description) {
          const remaining = mdxContent.slice(h1Match.index! + h1Match[0].length)
          const firstParaMatch = remaining.match(/^\s*([A-Za-z].*)/m)
          if (firstParaMatch) {
            description = firstParaMatch[1].trim()
          }
        }
      }
    }

    // Clean up custom React/MDX components using regex
    // Strips out tags like <ComponentPreview ...> and </ComponentPreview>
    let cleanedMarkdown = mdxContent
      .replace(/<[A-Z][a-zA-Z0-9]*[^>]*>/g, '')
      .replace(/<\/[A-Z][a-zA-Z0-9]*>/g, '')
      .trim()

    // Find the first H1 heading and paragraph to insert the CLI Installation section dynamically
    const h1Match = cleanedMarkdown.match(/^#\s+(.*)/m)
    if (h1Match) {
      const headingEndIndex = h1Match.index! + h1Match[0].length
      const remaining = cleanedMarkdown.slice(headingEndIndex)
      const firstParaMatch = remaining.match(/^\s*([A-Za-z].*)/m)
      if (firstParaMatch) {
        const insertIndex =
          headingEndIndex + firstParaMatch.index! + firstParaMatch[0].length
        const installationBlock = `\n\n## Installation\n\nYou can install this component using the Vibe UI CLI:\n\n\`\`\`bash\nnpx vibe-ui-kit add ${cleanName}\n\`\`\``
        cleanedMarkdown =
          cleanedMarkdown.slice(0, insertIndex) +
          installationBlock +
          cleanedMarkdown.slice(insertIndex)
      }
    }

    // Compose final unified markdown document
    const markdown = `---
title: ${title}
description: ${description}
component: true
---

${cleanedMarkdown}
`

    return new NextResponse(markdown, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, must-revalidate',
      },
    })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
