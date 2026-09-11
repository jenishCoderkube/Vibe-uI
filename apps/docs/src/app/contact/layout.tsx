import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Community Support | Vibe UI',
  description:
    'Get in touch with the Vibe UI team for technical support, feature requests, bug reports, and enterprise collaborations.',
  keywords: [
    'vibe ui contact',
    'vibe ui support',
    'vibe ui github',
    'react component library help',
  ],
  alternates: {
    canonical: 'https://vibe-ui-kit.vercel.app/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
