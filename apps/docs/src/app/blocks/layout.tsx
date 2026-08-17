import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blocks - Ready-to-Use Dashboard Templates',
  description:
    'Browse premium, production-ready dashboard blocks and page templates for React and Next.js. Copy and paste full-page layouts built with Vibe UI components.',
  openGraph: {
    title: 'Blocks - Dashboard Templates | Vibe UI',
    description:
      'Browse premium, production-ready dashboard blocks and page templates for React and Next.js.',
    url: 'https://vibe-ui-kit.vercel.app/blocks',
    type: 'website',
    siteName: 'Vibe UI',
    images: [
      {
        url: 'https://vibe-ui-kit.vercel.app/og-image.jpg',
        width: 512,
        height: 512,
        alt: 'Vibe UI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Blocks - Dashboard Templates | Vibe UI',
    description:
      'Browse premium, production-ready dashboard blocks and page templates for React and Next.js.',
    images: ['https://vibe-ui-kit.vercel.app/og-image.jpg'],
  },
}

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
