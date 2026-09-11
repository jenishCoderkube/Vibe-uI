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
      'Vibe UI - The Modern React & Tailwind CSS Component Library (92+ Components)',
    template: '%s | Vibe UI - The Modern React & Tailwind CSS Component Library',
  },
  description:
    'Vibe UI is a premium, production-ready React & Next.js component library featuring 92+ accessible UI primitives, text animations, WebGL background shaders, and application blocks with Glassmorphism, Neon Glow, Retro, and Cyberpunk themes.',
  keywords: [
    'vibe ui',
    'vibe ui kit',
    'vibe-ui',
    'vibe ui react',
    'vibe ui tailwind',
    'vibe ui components',
    'vibe ui nextjs',
    'vibe components',
    'vibe-ui-kit',
    'react component library',
    'nextjs components',
    'tailwind css v4 components',
    'radix ui primitives',
    'glassmorphism react components',
    'neon glow components',
    'brutalist design system',
    'motion react animations',
    'webgl background shaders',
    'application blocks',
    'admin dashboard templates',
    'copy paste ui',
    'accessible react components',
    'free react component library',
    'typescript components',
    'dark mode ui components',
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
    title: 'Vibe UI - The Modern React & Tailwind CSS Component Library',
    description:
      'Build stunning web applications with 92+ accessible React and Next.js components, copy-paste CLI, Motion animations, WebGL background shaders, and full application blocks.',
    url: SITE_URL,
    siteName: 'Vibe UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/api/og?title=Vibe%20UI&category=Component%20Library&desc=92%2B%20Accessible%20React%20Components%2C%20Motion%20Animations%20%26%20WebGL%20Shaders`,
        width: 1200,
        height: 630,
        alt: 'Vibe UI - The Modern React & Tailwind CSS Component Library',
      },
      {
        url: '/og-image.jpg',
        width: 512,
        height: 512,
        alt: 'Vibe UI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe UI - The Modern React & Tailwind CSS Component Library',
    description:
      '92+ production-ready themed React components, Motion animations, and WebGL backgrounds built on Radix UI and Tailwind CSS v4.',
    creator: '@vibeui',
    images: [
      `${SITE_URL}/api/og?title=Vibe%20UI&category=Component%20Library&desc=92%2B%20Accessible%20React%20Components%2C%20Motion%20Animations%20%26%20WebGL%20Shaders`,
    ],
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
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      'fp6o82sGO1t1dyt13kAfQVNrfZr05iMoJ-6yABHI_B8',
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
      alternateName: ['Vibe UI Kit', 'vibe-ui-kit', 'Vibe UI React', 'Vibe-UI', 'vibeui'],
      description:
        'A premium, production-ready React component library with 92+ themed components, animations, WebGL shaders, and full application blocks.',
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
      logo: `${SITE_URL}/icon.svg`,
      sameAs: [
        'https://github.com/jenishCoderkube/Vibe-uI',
        'https://www.npmjs.com/package/vibe-ui-kit',
        'https://www.npmjs.com/package/vibe-ui',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Vibe UI',
      alternateName: 'Vibe UI Kit',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      softwareVersion: '0.1.33',
      license: 'https://opensource.org/licenses/MIT',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      description:
        'Premium React & Next.js component library with 92+ themed, accessible components, Motion animations, and WebGL shaders for modern web applications.',
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
