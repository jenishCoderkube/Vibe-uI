import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Charts - Interactive Data Visualization Components',
  description:
    'Explore 50+ interactive chart components for React including Area, Bar, Line, Pie, Radar, Radial, Scatter, and Composed charts. Built on Recharts with Vibe UI theming.',
  openGraph: {
    title: 'Charts - Data Visualization | Vibe UI',
    description:
      'Explore 50+ interactive chart components for React including Area, Bar, Line, Pie, Radar, Radial, Scatter, and Composed charts.',
    url: 'https://vibe-ui-kit.vercel.app/charts',
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
    title: 'Charts - Data Visualization | Vibe UI',
    description:
      'Explore 50+ interactive chart components for React including Area, Bar, Line, Pie, Radar, Radial, Scatter, and Composed charts.',
    images: ['https://vibe-ui-kit.vercel.app/og-image.jpg'],
  },
}

export default function ChartsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
