import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlockDetailView } from './block-detail-view'
import { BLOCKS_METADATA, VALID_BLOCK_SLUGS } from './blocks-data'

interface PageProps {
  params: Promise<{
    blockName: string
  }>
}

export async function generateStaticParams() {
  return VALID_BLOCK_SLUGS.map((slug) => ({
    blockName: slug,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const { blockName } = resolvedParams
  const block = BLOCKS_METADATA[blockName]

  if (!block) {
    return {
      title: 'Block Not Found | Vibe UI',
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const canonicalUrl = `https://vibe-ui-kit.vercel.app/blocks/${blockName}`
  const ogImage = `https://vibe-ui-kit.vercel.app/api/og?title=${encodeURIComponent(
    block.title,
  )}&category=Blocks&desc=${encodeURIComponent(block.description.slice(0, 120))}`

  return {
    title: `${block.title} - Application Block | Vibe UI`,
    description: block.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${block.title} - Application Block | Vibe UI`,
      description: block.description,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${block.title} - Vibe UI`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${block.title} - Application Block | Vibe UI`,
      description: block.description,
      images: [ogImage],
    },
  }
}

export default async function BlockDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const { blockName } = resolvedParams

  if (!VALID_BLOCK_SLUGS.includes(blockName)) {
    notFound()
  }

  return <BlockDetailView blockName={blockName} />
}
