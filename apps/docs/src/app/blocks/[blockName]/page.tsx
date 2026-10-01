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
    title: `${block.title} - Application Block`,
    description: block.description,
    keywords: [
      'vibe ui',
      'vibe ui blocks',
      block.title.toLowerCase(),
      `${blockName} react`,
      `${blockName} nextjs`,
      `${blockName} tailwind`,
      'application block',
      'react template',
      'nextjs template',
      'copy paste ui block',
      ...block.vibeDeps.split(',').map((d) => `${d.trim()} react component`),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${block.title} - Application Block | Vibe UI`,
      description: block.description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'Vibe UI',
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

  const block = BLOCKS_METADATA[blockName]
  const canonicalUrl = `https://vibe-ui-kit.vercel.app/blocks/${blockName}`
  const imageUrl = `https://vibe-ui-kit.vercel.app/images/blocks/${blockName}.png`

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://vibe-ui-kit.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Application Blocks',
        item: 'https://vibe-ui-kit.vercel.app/blocks',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: block?.title || blockName,
        item: canonicalUrl,
      },
    ],
  }

  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: block?.title || blockName,
    description: block?.description || '',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    url: canonicalUrl,
    image: imageUrl,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'Jenish Sabhadiya',
      url: 'https://github.com/jenishCoderkube',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <BlockDetailView blockName={blockName} />
    </>
  )
}
