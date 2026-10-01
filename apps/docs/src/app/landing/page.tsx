'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { Button } from 'vibe-ui'
import { Announcement } from './components/announcement'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from './components/page-header'
import { CardsDemo } from './components/cards-demo'

const title = 'Vibe UI - The Modern React & Tailwind CSS Component Library'
const description =
  '92+ accessible, copy-paste React & Next.js components, motion animations, WebGL background shaders, and application blocks. Built on Radix UI primitives with Glassmorphism, Neon Glow, Retro, and Cyberpunk presets.'

export default function LandingPage() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-hidden">
      {/* 🔮 Liquid Glass Ambient Refraction Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="liquid-glass-blob absolute top-[3%] left-[-10%] sm:left-[-5%] h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] rounded-full bg-sky-400/25 blur-[70px] sm:blur-[120px] dark:bg-sky-600/15 animate-blob-1" />
        <div className="liquid-glass-blob absolute top-[20%] right-[-12%] sm:right-[-10%] h-[320px] w-[320px] sm:h-[600px] sm:w-[600px] rounded-full bg-blue-500/20 blur-[80px] sm:blur-[130px] dark:bg-blue-600/15 animate-blob-2" />
        <div className="liquid-glass-blob absolute bottom-[25%] left-[2%] sm:left-[10%] h-[300px] w-[300px] sm:h-[550px] sm:w-[550px] rounded-full bg-pink-500/15 blur-[70px] sm:blur-[120px] dark:bg-pink-600/10 animate-blob-3" />
        <div className="liquid-glass-blob absolute bottom-[5%] right-[2%] sm:right-[10%] h-[260px] w-[260px] sm:h-[450px] sm:w-[450px] rounded-full bg-indigo-500/20 blur-[70px] sm:blur-[110px] dark:bg-indigo-600/10 animate-blob-1" />
      </div>

      {/* Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex flex-1 flex-col">
        {/* Section 1: Hero PageHeader & Announcement */}
        <PageHeader>
          <Announcement />
          <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
          <PageHeaderDescription>{description}</PageHeaderDescription>
          <PageActions>
            <Button asChild size="sm" className="h-10 sm:h-9 w-full sm:w-auto rounded-lg px-5 font-semibold text-xs sm:text-sm shadow-sm">
              <Link href="/docs/introduction" className="flex items-center justify-center gap-1.5">
                <span>Get Started</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="h-10 sm:h-9 w-full sm:w-auto rounded-lg px-5 font-semibold text-xs sm:text-sm">
              <Link href="/blocks" className="flex items-center justify-center">
                <span>Browse Blocks</span>
              </Link>
            </Button>
          </PageActions>
        </PageHeader>

        {/* Section 2: Mobile Dashboard Preview & Desktop Cards Showcase */}
        <div className="mx-auto w-full flex-grow p-0">
          <div className="mx-auto w-full overflow-x-clip">
            <CardsDemo />
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  )
}
