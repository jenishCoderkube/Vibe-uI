'use client'

import React from 'react'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { BlockCard } from '../../components/block-card'
import { Dashboard01Block, Ecommerce01Block, Ecommerce02Block } from '../../components/vibe-blocks'
import { dashboard01Code, ecommerce01Code, ecommerce02Code } from '../../components/vibe-blocks-code'
import { Sparkles, Layout } from 'lucide-react'

export default function BlocksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />

      {/* Page Header */}
      <main className="flex-1">
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
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 space-y-12">
          <BlockCard
            title="Vibe Analytics Dashboard"
            description="Vibe statistics dashboard featuring Total Revenue metrics, an active CPU workload sparkline graph, sync card status checkers, and an interactive data table."
            urlPath="dashboard-01"
            code={dashboard01Code}
            previewComponent={<Dashboard01Block />}
            vibeDeps="sidebar, card, badge, button, input, avatar, table, checkbox, select, dropdown-menu"
          />

          <BlockCard
            title="Vibe E-commerce Store"
            description="A premium, production-ready e-commerce experience featuring search dialog overlays, wishlist/shopping cart drawers, product sliders, specs listings, and special deals grids."
            urlPath="ecommerce-01"
            code={ecommerce01Code}
            previewComponent={<Ecommerce01Block />}
            vibeDeps="button, badge, card, input, avatar, sheet, dropdown-menu, dialog, tooltip, blur-fade"
          />

          <BlockCard
            title="Vibe E-commerce Product Details"
            description="A high-fidelity product details layout featuring interactive thumbnail-selector galleries, custom cushions and variant options, specifications accordions, and verified customer review charts."
            urlPath="ecommerce-02"
            code={ecommerce02Code}
            previewComponent={<Ecommerce02Block />}
            vibeDeps="button, badge, card, input, avatar, sheet, dropdown-menu, dialog, tooltip, accordion, blur-fade"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
