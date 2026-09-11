import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vibe UI - The Modern React & Tailwind CSS Component Library',
    short_name: 'Vibe UI',
    description:
      '92+ production-ready accessible React components, Motion animations, WebGL background shaders, and application blocks built on Radix UI and Tailwind CSS v4.',
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
