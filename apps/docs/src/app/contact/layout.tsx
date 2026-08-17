import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Get in Touch',
  description:
    'Have questions about Vibe UI? Reach out to us for support, partnerships, or feature requests. We would love to hear from you.',
  openGraph: {
    title: 'Contact | Vibe UI',
    description:
      'Have questions about Vibe UI? Reach out to us for support, partnerships, or feature requests.',
    url: 'https://vibe-ui-kit.vercel.app/contact',
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
    title: 'Contact | Vibe UI',
    description:
      'Have questions about Vibe UI? Reach out to us for support, partnerships, or feature requests.',
    images: ['https://vibe-ui-kit.vercel.app/og-image.jpg'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
