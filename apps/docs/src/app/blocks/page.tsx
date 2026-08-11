'use client'

import React from 'react'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { BlockCard } from '../../components/block-card'
import {
  Dashboard01Block,
  Sidebar07Block,
  Sidebar03Block,
  Login03Block,
  Login04Block,
} from '../../components/shadcn-blocks'
import {
  dashboard01Code,
  sidebar07Code,
  sidebar03Code,
  login03Code,
  login04Code,
} from '../../components/shadcn-blocks-code'
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
              Beautifully aligned mock browser dashboard layouts and centralized
              login frames constructed entirely using our own component library
              primitives.
            </p>
          </div>
        </div>

        {/* Blocks Showcase Grid */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16">
          <BlockCard
            title="Vibe Analytics Dashboard"
            description="Vibe statistics dashboard featuring Total Revenue metrics, an active CPU workload sparkline graph, sync card status checkers, and an interactive data table."
            urlPath="dashboard-01"
            code={dashboard01Code}
            previewComponent={<Dashboard01Block />}
            vibeDeps="layout-shell, card, badge, button, input, avatar, table, checkbox, select, dropdown-menu"
          />

          <BlockCard
            title="Collaborative Teams Console"
            description="Vibe workspace sidebar featuring active team selectors, sub-navigation groups, breadcrumb indicators, responsive top nodes grid, and central workspace layout."
            urlPath="sidebar-07"
            code={sidebar07Code}
            previewComponent={<Sidebar07Block />}
            vibeDeps="layout-shell, avatar, card, dropdown-menu"
          />

          <BlockCard
            title="Multi-level Documentation Center"
            description="Documentation index page layout with multi-level category navigation side list, header search, sub-node grids, and responsive content area."
            urlPath="sidebar-03"
            code={sidebar03Code}
            previewComponent={<Sidebar03Block />}
            vibeDeps="layout-shell, avatar, dropdown-menu"
          />

          <BlockCard
            title="Centered Authentication Portal"
            description="Sleek center-aligned login card panel featuring Apple/Google single sign-on buttons, credentials input fields, forgot-password triggers, and terms description."
            urlPath="login-03"
            code={login03Code}
            previewComponent={<Login03Block />}
            vibeDeps="card, button, input"
          />

          <BlockCard
            title="Split-screen Login Layout"
            description="Vibe login layout split-view layout featuring credentials form panel on the left, and a dark geometric grid visual details cover on the right side."
            urlPath="login-04"
            code={login04Code}
            previewComponent={<Login04Block />}
            vibeDeps="card, button, input"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
