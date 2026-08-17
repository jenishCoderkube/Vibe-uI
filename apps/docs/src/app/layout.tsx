import React from 'react'
import './globals.css'
import { Providers } from './providers'
import { Preloader } from '../components/preloader'
import { Customizer } from '../components/customizer'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const SITE_URL = 'https://vibe-ui-kit.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  title: {
    default:
      'Vibe UI - Premium React Component Library | 75+ Themed Components',
    template: '%s | Vibe UI',
  },
  description:
    'Vibe UI is a premium, production-ready React and Next.js component library with 75+ accessible components. Supports Glassmorphism, Neon Glow, Retro Brutalist, and Minimalist themes. Built on Radix UI primitives and Tailwind CSS v4.',
  keywords: [
    'react component library',
    'nextjs components',
    'tailwind css v4 components',
    'vibe ui',
    'vibe ui library',
    'ui kit',
    'glassmorphism ui',
    'neon glow components',
    'brutalist design system',
    'react ui library',
    'vibe ui component library',
    'premium react components',
    'accessible components',
    'dark mode components',
    'admin dashboard layout',
    'layout shell component',
    'infinite scroll react',
    'vibe ui',
    'vibe-ui-kit',
    'typescript components',
    'responsive ui components',
  ],
  authors: [
    { name: 'Jenish Sabhadiya', url: 'https://github.com/jenishCoderkube' },
  ],
  creator: 'Jenish Sabhadiya',
  publisher: 'Vibe UI',
  category: 'Technology',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Vibe UI - Premium React Component Library',
    description:
      'Build stunning interfaces with 75+ premium themed components. Supports Glassmorphism, Neon Glow, Retro Brutalist, and Minimalist visual presets.',
    url: SITE_URL,
    siteName: 'Vibe UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 512,
        height: 512,
        alt: 'Vibe UI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Vibe UI - Premium React Component Library',
    description:
      '75+ production-ready themed React components built on Radix UI and Tailwind CSS v4.',
    creator: '@vibeui',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

// JSON-LD structured data for search engines
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@id': `${SITE_URL}/#website`,
      '@type': 'WebSite',
      url: SITE_URL,
      name: 'Vibe UI',
      description:
        'A premium, production-ready React component library with 75+ themed components.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/docs/{search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@id': `${SITE_URL}/#organization`,
      '@type': 'Organization',
      name: 'Vibe UI',
      url: SITE_URL,
      sameAs: ['https://github.com/jenishCoderkube/Vibe-uI'],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Vibe UI Kit',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'Premium React component library with 75+ themed, accessible components for modern web applications.',
    },
  ],
}

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-7D6P1RZKG1'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-background font-sans antialiased"
        suppressHydrationWarning
      >
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <Providers>{children}</Providers>
        <Customizer />
      </body>
    </html>
  )
}
