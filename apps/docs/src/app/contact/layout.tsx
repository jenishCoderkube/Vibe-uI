import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Community Support',
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
  openGraph: {
    title: 'Contact & Community Support | Vibe UI',
    description:
      'Get in touch with the Vibe UI team for technical support, feature requests, bug reports, and enterprise collaborations.',
    url: 'https://vibe-ui-kit.vercel.app/contact',
    siteName: 'Vibe UI',
    type: 'website',
    images: [
      {
        url: 'https://vibe-ui-kit.vercel.app/api/og?title=Contact%20%26%20Support&category=Community&desc=Get%20in%20touch%20for%20technical%20support%2C%20feature%20requests%20and%20collaborations',
        width: 1200,
        height: 630,
        alt: 'Contact Vibe UI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Community Support | Vibe UI',
    description:
      'Get in touch with the Vibe UI team for technical support, feature requests, bug reports, and enterprise collaborations.',
    images: [
      'https://vibe-ui-kit.vercel.app/api/og?title=Contact%20%26%20Support&category=Community&desc=Get%20in%20touch%20for%20technical%20support%2C%20feature%20requests%20and%20collaborations',
    ],
  },
}

const contactBreadcrumbJsonLd = {
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
      name: 'Contact',
      item: 'https://vibe-ui-kit.vercel.app/contact',
    },
  ],
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactBreadcrumbJsonLd),
        }}
      />
      {children}
    </>
  )
}
