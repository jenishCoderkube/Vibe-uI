import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interactive Charts & Visualizations | Vibe UI',
  description:
    '34 interactive charts for React and Next.js built with Recharts and Tailwind CSS v4. Area, Bar, Line, Pie, Radar, Radial, and Composed charts.',
  keywords: [
    'vibe ui charts',
    'react charts',
    'recharts tailwind',
    'tailwind css charts',
    'area chart react',
    'bar chart react',
    'pie chart react',
    'radar chart react',
    'interactive chart components',
  ],
  alternates: {
    canonical: 'https://vibe-ui-kit.vercel.app/charts',
  },
  openGraph: {
    title: 'Interactive Charts & Visualizations | Vibe UI',
    description:
      '34 interactive charts for React and Next.js built with Recharts and Tailwind CSS v4.',
    url: 'https://vibe-ui-kit.vercel.app/charts',
    images: [
      {
        url: 'https://vibe-ui-kit.vercel.app/api/og?title=Charts%20%26%20Graphs&category=Visualizations&desc=34%20Interactive%20Charts%20built%20with%20Recharts%20and%20Tailwind%20CSS',
        width: 1200,
        height: 630,
        alt: 'Vibe UI Charts',
      },
    ],
  },
}

export default function ChartsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
