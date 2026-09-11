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
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* 🔮 Liquid Glass Ambient Refraction Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="liquid-glass-blob absolute top-[5%] left-[-5%] h-[500px] w-[500px] rounded-full bg-sky-400/25 blur-[120px] dark:bg-sky-600/15 animate-blob-1" />
        <div className="liquid-glass-blob absolute top-[25%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[130px] dark:bg-blue-600/15 animate-blob-2" />
        <div className="liquid-glass-blob absolute bottom-[25%] left-[10%] h-[550px] w-[550px] rounded-full bg-pink-500/15 blur-[120px] dark:bg-pink-600/10 animate-blob-3" />
        <div className="liquid-glass-blob absolute bottom-[5%] right-[10%] h-[450px] w-[450px] rounded-full bg-indigo-500/20 blur-[110px] dark:bg-indigo-600/10 animate-blob-1" />
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
            <Button asChild size="sm" className="h-[34px] rounded-lg px-4">
              <Link href="/docs/introduction">
                Get Started <ArrowRight className="size-3.5 ml-1.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="h-[34px] rounded-lg px-4">
              <Link href="/blocks">
                Browse Blocks
              </Link>
            </Button>
          </PageActions>
        </PageHeader>

        {/* Section 2 & 3: Mobile Dashboard Preview & Desktop Cards Showcase */}
        <div className="mx-auto w-full flex-grow p-0">
          <div className="mx-auto w-full overflow-hidden">
            <CardsDemo />
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  )
}
