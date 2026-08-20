/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['vibe-ui', 'lucide-react'],
  async rewrites() {
    return [
      {
        source: '/docs/components/:name.md',
        destination: '/api/components/:name',
      },
      {
        source: '/docs/animations/:name.md',
        destination: '/api/components/:name',
      },
      {
        source: '/docs/backgrounds/:name.md',
        destination: '/api/components/:name',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/docs/components',
        destination: '/docs/components/accordion',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
