import type { Metadata } from 'next'
import LandingPage from './landing/page'

export const metadata: Metadata = {
  title:
    'Vibe UI - The Modern React & Tailwind CSS Component Library (94+ Components)',
  description:
    'Build stunning interfaces with 94+ accessible React and Next.js components, copy-paste CLI, Motion animations, WebGL background shaders, and full application blocks.',
  alternates: {
    canonical: 'https://vibe-ui-kit.vercel.app',
  },
  openGraph: {
    title:
      'Vibe UI - The Modern React & Tailwind CSS Component Library (94+ Components)',
    description:
      'Build stunning interfaces with 94+ accessible React and Next.js components, copy-paste CLI, Motion animations, WebGL background shaders, and full application blocks.',
    url: 'https://vibe-ui-kit.vercel.app',
    siteName: 'Vibe UI',
    type: 'website',
    images: [
      {
        url: 'https://vibe-ui-kit.vercel.app/api/og?title=Vibe%20UI&category=Component%20Library&desc=94%2B%20Accessible%20React%20Components%2C%20Motion%20Animations%20%26%20WebGL%20Shaders',
        width: 1200,
        height: 630,
        alt: 'Vibe UI - The Modern React & Tailwind CSS Component Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Vibe UI - The Modern React & Tailwind CSS Component Library (94+ Components)',
    description:
      'Build stunning interfaces with 94+ accessible React and Next.js components, copy-paste CLI, Motion animations, WebGL background shaders, and full application blocks.',
    images: [
      'https://vibe-ui-kit.vercel.app/api/og?title=Vibe%20UI&category=Component%20Library&desc=94%2B%20Accessible%20React%20Components%2C%20Motion%20Animations%20%26%20WebGL%20Shaders',
    ],
  },
}

export default function Page() {
  return <LandingPage />
}
