import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vibe UI - Premium React Component Library',
    short_name: 'Vibe UI',
    description:
      '38+ production-ready themed React components built on Radix UI primitives and Tailwind CSS v4.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#7c3aed',
    categories: ['developer tools', 'design', 'productivity'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
