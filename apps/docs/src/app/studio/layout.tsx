import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vibe Studio - Interactive Theme & CSS Builder | Vibe UI',
  description:
    'Customize, preview, and export Vibe UI theme tokens, radius, and color palettes live in your browser for Tailwind CSS v3 and v4.',
  keywords: [
    'vibe ui studio',
    'theme builder react',
    'tailwind theme generator',
    'css variables exporter',
    'color palette builder',
    'ui customizer',
  ],
  alternates: {
    canonical: 'https://vibe-ui-kit.vercel.app/studio',
  },
  openGraph: {
    title: 'Vibe Studio - Interactive Theme & CSS Builder | Vibe UI',
    description:
      'Customize, preview, and export Vibe UI theme tokens, radius, and color palettes live in your browser.',
    url: 'https://vibe-ui-kit.vercel.app/studio',
    images: [
      {
        url: 'https://vibe-ui-kit.vercel.app/api/og?title=Vibe%20Studio&category=Theme%20Builder&desc=Interactive%20Theme%20Tokens%2C%20Border%20Radius%20%26%20Color%20Palette%20Generator',
        width: 1200,
        height: 630,
        alt: 'Vibe Studio Theme Builder',
      },
    ],
  },
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
