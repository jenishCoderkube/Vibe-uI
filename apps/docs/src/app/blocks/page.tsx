'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { BlockCard } from '../../components/block-card'
import { Dashboard01Block, Ecommerce01Block, Ecommerce02Block } from '../../components/vibe-blocks'
import { dashboard01Code, ecommerce01Code, ecommerce02Code } from '../../components/vibe-blocks-code'
import { Sparkles, Layout } from 'lucide-react'

const BLOCKS = [
  {
    id: 'dashboard-01',
    title: 'Vibe Analytics Dashboard',
    description: 'Vibe statistics dashboard featuring Total Revenue metrics, an active CPU workload sparkline graph, sync card status checkers, and an interactive data table.',
    vibeDeps: 'sidebar, card, badge, button, input, avatar, table, checkbox, select, dropdown-menu',
    code: dashboard01Code,
    previewComponent: <Dashboard01Block />,
    category: 'Dashboard',
    mockup: (
      <div className="w-full h-full bg-zinc-950 dark:bg-zinc-950 border border-zinc-800 rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden group-hover:border-primary/45 transition-colors duration-300 select-none">
        {/* Mockup Sidebar + Header + Content */}
        <div className="flex gap-2 h-full">
          {/* Mock Sidebar */}
          <div className="w-8 shrink-0 border-r border-zinc-800/80 flex flex-col gap-2 pt-1">
            <div className="h-1.5 w-full rounded bg-zinc-800" />
            <div className="h-1.5 w-5/6 rounded bg-zinc-800" />
            <div className="h-1.5 w-4/5 rounded bg-zinc-800" />
          </div>
          {/* Mock Main Area */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Mock Header */}
            <div className="h-3 border-b border-zinc-800/80 flex justify-between items-center pb-1">
              <div className="h-1 w-10 rounded bg-zinc-800" />
              <div className="h-2 w-2 rounded-full bg-zinc-800" />
            </div>
            {/* Mock Grid */}
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-7 rounded border border-zinc-850 bg-zinc-900/60 p-1 space-y-1">
                <div className="h-1 w-6 rounded bg-zinc-800" />
                <div className="h-2 w-10 rounded bg-primary/40" />
              </div>
              <div className="h-7 rounded border border-zinc-850 bg-zinc-900/60 p-1 space-y-1">
                <div className="h-1 w-8 rounded bg-zinc-800" />
                <div className="h-2 w-8 rounded bg-zinc-800" />
              </div>
              <div className="h-7 rounded border border-zinc-850 bg-zinc-900/60 p-1 space-y-1">
                <div className="h-1 w-4 rounded bg-zinc-800" />
                <div className="h-2 w-6 rounded bg-zinc-800" />
              </div>
            </div>
            {/* Mock Table */}
            <div className="border border-zinc-850 rounded p-1 space-y-1 flex-1">
              <div className="h-1 w-full rounded bg-zinc-850" />
              <div className="h-1 w-5/6 rounded bg-zinc-850" />
              <div className="h-1 w-4/5 rounded bg-zinc-850" />
            </div>
          </div>
        </div>
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(120px_circle_at_50%_50%,rgba(168,85,247,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    )
  },
  {
    id: 'ecommerce-01',
    title: 'Vibe E-commerce Store',
    description: 'A premium, production-ready e-commerce experience featuring search dialog overlays, wishlist/shopping cart drawers, product sliders, specs listings, and special deals grids.',
    vibeDeps: 'button, badge, card, input, avatar, sheet, dropdown-menu, dialog, tooltip, blur-fade',
    code: ecommerce01Code,
    previewComponent: <Ecommerce01Block />,
    category: 'E-commerce',
    mockup: (
      <div className="w-full h-full bg-zinc-950 dark:bg-zinc-950 border border-zinc-800 rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden group-hover:border-primary/45 transition-colors duration-300 select-none">
        {/* Mockup Store Header */}
        <div className="h-3 border-b border-zinc-800/80 flex justify-between items-center pb-1">
          <div className="h-1 w-8 rounded bg-primary/40" />
          <div className="flex gap-1">
            <div className="h-1 w-3 rounded bg-zinc-800" />
            <div className="h-1 w-3 rounded bg-zinc-800" />
            <div className="h-1 w-3 rounded bg-zinc-800" />
          </div>
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
        </div>
        {/* Mockup Hero Banner */}
        <div className="h-11 bg-gradient-to-r from-primary/5 via-indigo-950/10 to-purple-950/5 border border-zinc-850 rounded flex items-center justify-between p-2">
          <div className="space-y-1">
            <div className="h-1.5 w-12 rounded bg-zinc-800" />
            <div className="h-1 w-16 rounded bg-zinc-850" />
            <div className="h-2 w-8 rounded bg-primary/55" />
          </div>
          <div className="h-6 w-6 rounded bg-zinc-900/80 border border-zinc-800 flex items-center justify-center shrink-0">
            <div className="h-4 w-4 rounded-full bg-zinc-800" />
          </div>
        </div>
        {/* Mockup Products Grid */}
        <div className="grid grid-cols-2 gap-1.5 flex-1">
          <div className="border border-zinc-850 rounded p-1 space-y-1">
            <div className="h-4 w-full rounded bg-zinc-900" />
            <div className="h-1 w-10 rounded bg-zinc-800" />
            <div className="h-0.5 w-6 rounded bg-zinc-850" />
          </div>
          <div className="border border-zinc-850 rounded p-1 space-y-1">
            <div className="h-4 w-full rounded bg-zinc-900" />
            <div className="h-1 w-8 rounded bg-zinc-800" />
            <div className="h-0.5 w-4 rounded bg-zinc-850" />
          </div>
        </div>
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(120px_circle_at_50%_50%,rgba(168,85,247,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    )
  },
  {
    id: 'ecommerce-02',
    title: 'Vibe E-commerce Product Details',
    description: 'A high-fidelity product details layout featuring interactive thumbnail-selector galleries, custom cushions and variant options, specifications accordions, and verified customer review charts.',
    vibeDeps: 'button, badge, card, input, avatar, sheet, dropdown-menu, dialog, tooltip, accordion, blur-fade',
    code: ecommerce02Code,
    previewComponent: <Ecommerce02Block />,
    category: 'E-commerce',
    mockup: (
      <div className="w-full h-full bg-zinc-950 dark:bg-zinc-950 border border-zinc-800 rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden group-hover:border-primary/45 transition-colors duration-300 select-none">
        {/* Mockup Store Header */}
        <div className="h-3 border-b border-zinc-800/80 flex justify-between items-center pb-1">
          <div className="h-1 w-8 rounded bg-primary/40" />
          <div className="h-1.5 w-12 rounded bg-zinc-850" />
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
        </div>
        {/* Mockup Detail View Split */}
        <div className="flex gap-2 flex-1">
          {/* Mock Gallery Column */}
          <div className="w-2/5 flex flex-col gap-1.5">
            <div className="flex-1 rounded border border-zinc-850 bg-zinc-900/60 flex items-center justify-center">
              <div className="h-5 w-5 rounded-full bg-zinc-850" />
            </div>
            <div className="grid grid-cols-4 gap-0.5 h-2 shrink-0">
              <div className="rounded bg-zinc-900 border border-zinc-800" />
              <div className="rounded bg-zinc-900 border border-zinc-800" />
              <div className="rounded bg-zinc-900 border border-zinc-800" />
              <div className="rounded bg-zinc-900 border border-zinc-800" />
            </div>
          </div>
          {/* Mock Product Info Column */}
          <div className="flex-1 flex flex-col gap-2 pt-0.5">
            <div className="space-y-0.5">
              <div className="h-2 w-16 rounded bg-zinc-800" />
              <div className="h-1 w-8 rounded bg-zinc-850" />
            </div>
            <div className="h-2 w-10 rounded bg-primary/50" />
            <div className="space-y-0.5">
              <div className="h-0.5 w-full rounded bg-zinc-850" />
              <div className="h-0.5 w-5/6 rounded bg-zinc-850" />
            </div>
            <div className="flex gap-1 pt-1">
              <div className="h-3 flex-1 rounded bg-primary/60" />
              <div className="h-3 w-3 rounded bg-zinc-900 border border-zinc-800" />
            </div>
          </div>
        </div>
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(120px_circle_at_50%_50%,rgba(168,85,247,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    )
  }
]

export default function BlocksPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />

      {/* Page Header */}
      <main className="flex-1 pb-20">
        <div className="border-b border-border bg-muted/20 py-8 sm:py-12 md:py-16">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 text-center flex flex-col items-center justify-center space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-primary select-none w-fit">
              <Sparkles className="h-3 w-3" />
              <span>Building Blocks for the Web</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
              <Layout className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" />
              <span>Vibe Workspace Blocks</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto px-2 sm:px-0">
              Beautifully aligned mock browser dashboard layouts constructed
              entirely using our own component library primitives.
            </p>
          </div>
        </div>

        {/* Blocks Showcase Grid */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {BLOCKS.map((block) => (
              <div
                key={block.id}
                onClick={() => router.push(`/blocks/${block.id}`)}
                className="group relative flex flex-col rounded-xl border border-border bg-card hover:bg-muted/10 p-5 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-left"
              >
                {/* Visual Mockup Container */}
                <div className="w-full h-40 bg-zinc-900/10 dark:bg-zinc-950/20 border border-border/70 rounded-lg overflow-hidden p-3 flex items-center justify-center select-none mb-4">
                  {block.mockup}
                </div>

                <div className="flex flex-1 flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {block.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-mono">
                        vibe-ui-kit
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {block.title}
                    </h3>

                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      {block.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {/* Dependencies tags */}
                    <div className="flex flex-wrap gap-1">
                      {block.vibeDeps.split(',').slice(0, 4).map((d) => (
                        <span key={d} className="text-[9px] font-mono bg-muted text-muted-foreground px-1.5 py-0.5 rounded border border-border/40">
                          {d.trim()}
                        </span>
                      ))}
                      {block.vibeDeps.split(',').length > 4 && (
                        <span className="text-[9px] font-mono bg-muted text-muted-foreground px-1.5 py-0.5 rounded border border-border/40 font-bold">
                          +{block.vibeDeps.split(',').length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button className="w-full text-xs font-bold py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/95 transition-all text-center flex items-center justify-center gap-1.5 group-hover:shadow-sm">
                      <span>Open Block View</span>
                      <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
