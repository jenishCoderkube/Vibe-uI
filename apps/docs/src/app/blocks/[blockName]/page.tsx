'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { Header } from '../../../components/header'
import { Footer } from '../../../components/footer'
import { BlockCard } from '../../../components/block-card'
import { Dashboard01Block, Ecommerce01Block, Ecommerce02Block } from '../../../components/vibe-blocks'
import { dashboard01Code, ecommerce01Code, ecommerce02Code } from '../../../components/vibe-blocks-code'

const BLOCKS_MAP = {
  'dashboard-01': {
    title: 'Vibe Analytics Dashboard',
    description: 'Vibe statistics dashboard featuring Total Revenue metrics, an active CPU workload sparkline graph, sync card status checkers, and an interactive data table.',
    vibeDeps: 'sidebar, card, badge, button, input, avatar, table, checkbox, select, dropdown-menu',
    code: dashboard01Code,
    previewComponent: <Dashboard01Block />,
  },
  'ecommerce-01': {
    title: 'Vibe E-commerce Store',
    description: 'A premium, production-ready e-commerce experience featuring search dialog overlays, wishlist/shopping cart drawers, product sliders, specs listings, and special deals grids.',
    vibeDeps: 'button, badge, card, input, avatar, sheet, dropdown-menu, dialog, tooltip, blur-fade',
    code: ecommerce01Code,
    previewComponent: <Ecommerce01Block />,
  },
  'ecommerce-02': {
    title: 'Vibe E-commerce Product Details',
    description: 'A high-fidelity product details layout featuring interactive thumbnail-selector galleries, custom cushions and variant options, specifications accordions, and verified customer review charts.',
    vibeDeps: 'button, badge, card, input, avatar, sheet, dropdown-menu, dialog, tooltip, accordion, blur-fade',
    code: ecommerce02Code,
    previewComponent: <Ecommerce02Block />,
  },
}

export default function BlockDetailPage() {
  const params = useParams()
  const blockName = params.blockName as string
  const block = BLOCKS_MAP[blockName as keyof typeof BLOCKS_MAP]

  if (!block) {
    return (
      <div className="flex min-h-screen flex-col bg-background font-sans">
        <Header />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold">Block Not Found</h2>
            <p className="text-xs text-muted-foreground">The requested block does not exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      <main className="flex-1 w-full px-2 sm:px-4 py-6 sm:py-8">
        <div className="w-full">
          <BlockCard
            title={block.title}
            description={block.description}
            urlPath={blockName}
            code={block.code}
            previewComponent={block.previewComponent}
            vibeDeps={block.vibeDeps}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
