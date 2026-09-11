import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application Blocks & Dashboard Templates | Vibe UI',
  description:
    'Explore 7 production-ready application blocks including enterprise analytics dashboards, e-commerce storefronts, AI chat workspaces, and Web3 portfolio trackers for React & Next.js.',
  keywords: [
    'vibe ui blocks',
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
      '7 production-ready application blocks including enterprise analytics dashboards, e-commerce storefronts, AI chat workspaces, and Web3 portfolio trackers.',
    url: 'https://vibe-ui-kit.vercel.app/blocks',
    images: [
      {
        url: 'https://vibe-ui-kit.vercel.app/api/og?title=Application%20Blocks&category=Templates&desc=Enterprise%20Dashboards%2C%20Storefronts%2C%20AI%20Chat%20%26%20Web3%20Portals',
        width: 1200,
        height: 630,
        alt: 'Vibe UI Application Blocks',
      },
    ],
  },
}

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
