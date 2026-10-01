import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application Blocks & Dashboard Templates',
  description:
    'Explore 8+ production-ready application blocks including agile Kanban sprint boards, modern SaaS pricing tables, analytics dashboards, e-commerce storefronts, and AI chat workspaces for React & Next.js.',
  keywords: [
    'vibe ui blocks',
    'kanban board react',
    'agile sprint board nextjs',
    'saas pricing table block',
    'react dashboard template',
    'nextjs admin dashboard',
    'ecommerce react block',
    'chat workspace react',
    'web3 crypto dashboard',
    'tailwind dashboard blocks',
    'copy paste dashboard',
  ],
  alternates: {
    canonical: 'https://vibe-ui-kit.vercel.app/blocks',
  },
  openGraph: {
    title: 'Application Blocks & Dashboard Templates | Vibe UI',
    description:
      '8+ production-ready application blocks including agile Kanban sprint boards, modern SaaS pricing tables, enterprise analytics dashboards, and AI chat workspaces.',
    url: 'https://vibe-ui-kit.vercel.app/blocks',
    images: [
      {
        url: 'https://vibe-ui-kit.vercel.app/api/og?title=Application%20Blocks&category=Templates&desc=Agile%20Kanban%20Boards%2C%20SaaS%20Pricing%20Tables%2C%20Dashboards%20%26%20Workspaces',
        width: 1200,
        height: 630,
        alt: 'Vibe UI Application Blocks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Application Blocks & Dashboard Templates | Vibe UI',
    description:
      '8+ production-ready application blocks including agile Kanban sprint boards, modern SaaS pricing tables, enterprise analytics dashboards, and AI chat workspaces.',
    images: [
      'https://vibe-ui-kit.vercel.app/api/og?title=Application%20Blocks&category=Templates&desc=Agile%20Kanban%20Boards%2C%20SaaS%20Pricing%20Tables%2C%20Dashboards%20%26%20Workspaces',
    ],
  },
}

const blocksBreadcrumbJsonLd = {
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
  ],
}

const blocksCollectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Application Blocks & Dashboard Templates | Vibe UI',
  description:
    'Explore 8+ production-ready application blocks including agile Kanban sprint boards, modern SaaS pricing tables, analytics dashboards, e-commerce storefronts, and AI chat workspaces for React & Next.js.',
  url: 'https://vibe-ui-kit.vercel.app/blocks',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 8,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Vibe Analytics Dashboard',
        url: 'https://vibe-ui-kit.vercel.app/blocks/dashboard-01',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Vibe E-commerce Store',
        url: 'https://vibe-ui-kit.vercel.app/blocks/ecommerce-01',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Vibe E-commerce Product Details',
        url: 'https://vibe-ui-kit.vercel.app/blocks/ecommerce-02',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Vibe Chat Assistant',
        url: 'https://vibe-ui-kit.vercel.app/blocks/chat-01',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Vibe Modern Authentication',
        url: 'https://vibe-ui-kit.vercel.app/blocks/auth-01',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Liquid Glass Crypto Portfolio',
        url: 'https://vibe-ui-kit.vercel.app/blocks/crypto-glass-01',
      },
      {
        '@type': 'ListItem',
        position: 7,
        name: 'Vibe Modern SaaS Pricing & Tier Matrix',
        url: 'https://vibe-ui-kit.vercel.app/blocks/pricing-01',
      },
      {
        '@type': 'ListItem',
        position: 8,
        name: 'Vibe Interactive Agile Project & Kanban Board',
        url: 'https://vibe-ui-kit.vercel.app/blocks/kanban-01',
      },
    ],
  },
}

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blocksBreadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blocksCollectionJsonLd),
        }}
      />
      {children}
    </>
  )
}
