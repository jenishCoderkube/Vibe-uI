import type { Metadata } from 'next'
import LandingPage from './landing/page'

export const metadata: Metadata = {
  title:
    'Vibe UI - The Modern React & Tailwind CSS Component Library (92+ Components)',
  description:
    'Build stunning interfaces with 92+ accessible React and Next.js components, copy-paste CLI, Motion animations, WebGL background shaders, and full application blocks.',
  alternates: {
    canonical: 'https://vibe-ui-kit.vercel.app',
  },
}

export default function Page() {
  return <LandingPage />
}
