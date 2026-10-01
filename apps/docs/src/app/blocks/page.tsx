'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { Dashboard01Block, Ecommerce01Block, Ecommerce02Block, Chat01Block, Auth01Block, CryptoGlass01Block, Pricing01Block, Kanban01Block } from '../../components/vibe-blocks'
import { dashboard01Code, ecommerce01Code, ecommerce02Code, chat01Code, auth01Code, cryptoGlass01Code, pricing01Code, kanban01Code } from '../../components/vibe-blocks-code'
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
    image: '/images/blocks/dashboard-01.png',
  },
  {
    id: 'ecommerce-01',
    title: 'Vibe E-commerce Store',
    description: 'A premium, production-ready e-commerce experience featuring search dialog overlays, wishlist/shopping cart drawers, product sliders, specs listings, and special deals grids.',
    vibeDeps: 'button, badge, card, input, avatar, sheet, dropdown-menu, dialog, tooltip, blur-fade',
    code: ecommerce01Code,
    previewComponent: <Ecommerce01Block />,
    category: 'E-commerce',
    image: '/images/blocks/ecommerce-01.png',
  },
  {
    id: 'ecommerce-02',
    title: 'Vibe E-commerce Product Details',
    description: 'A high-fidelity product details layout featuring interactive thumbnail-selector galleries, custom cushions and variant options, specifications accordions, and verified customer review charts.',
    vibeDeps: 'button, badge, card, input, avatar, sheet, dropdown-menu, dialog, tooltip, accordion, blur-fade',
    code: ecommerce02Code,
    previewComponent: <Ecommerce02Block />,
    category: 'E-commerce',
    image: '/images/blocks/ecommerce-02.png',
  },
  {
    id: 'chat-01',
    title: 'Vibe Chat Assistant',
    description: 'A premium, responsive AI chat assistant layout featuring collapsible sidebars, streaming response states, prompt suggestion cards, file attachments, and rate inputs.',
    vibeDeps: 'button, input, scroll-area, sheet, dropdown-menu, dialog, avatar, tooltip, theme-switcher, textarea, badge, card',
    code: chat01Code,
    previewComponent: <Chat01Block />,
    category: 'Chat',
    image: '/images/blocks/chat-01.png',
  },
  {
    id: 'auth-01',
    title: 'Vibe Modern Authentication',
    description: 'A complete authentication system block with fluid Framer Motion animations. Handles Login, Register, Forgot Password, and Reset Password views in a fully validated, routes-agnostic single-page design.',
    vibeDeps: 'button, card, input, checkbox, form, motion',
    code: auth01Code,
    previewComponent: <Auth01Block />,
    category: 'Authentication',
    image: '/images/blocks/auth-01.png',
  },
  {
    id: 'crypto-glass-01',
    title: 'Liquid Glass Crypto Portfolio',
    description: 'A premium, glassmorphic portfolio dashboard block featuring asset summaries, interactive transaction tables, asset search, and a vector trend chart.',
    vibeDeps: 'button, card, input, badge, wallet, table, switch, slider, select',
    code: cryptoGlass01Code,
    previewComponent: <CryptoGlass01Block />,
    category: 'Dashboard',
    image: '/images/blocks/crypto-glass-01.png',
  },
  {
    id: 'pricing-01',
    title: 'Vibe Modern SaaS Pricing & Tier Matrix',
    description: 'A high-converting, professional SaaS pricing and plan comparison block featuring monthly/annual billing toggles, currency switching, interactive checkout drawer, feature matrix table, and FAQ accordion.',
    vibeDeps: 'button, card, badge, switch, input, sheet, accordion, tooltip, table',
    code: pricing01Code,
    previewComponent: <Pricing01Block />,
    category: 'Pricing',
    image: '/images/blocks/pricing-01.png',
  },
  {
    id: 'kanban-01',
    title: 'Vibe Interactive Agile Project & Kanban Board',
    description: 'A high-performance agile sprint board featuring 4 workflow swimlanes, subtask checklists, priority badges, member workload allocation, interactive task creation modal, drawer inspector, and real-time sprint analytics.',
    vibeDeps: 'button, card, badge, avatar, progress, input, textarea, dialog, sheet, dropdown-menu, select, tooltip, tabs, checkbox, separator, form',
    code: kanban01Code,
    previewComponent: <Kanban01Block />,
    category: 'Project Management',
    image: '/images/blocks/kanban-01.png',
  },
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
                {/* Visual Image Preview */}
                <div className="w-full h-44 bg-zinc-950 border border-border/70 rounded-lg overflow-hidden relative select-none mb-4 group-hover:border-primary/50 transition-colors">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
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
