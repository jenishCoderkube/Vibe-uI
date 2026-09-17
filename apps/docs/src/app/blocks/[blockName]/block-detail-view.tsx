'use client'

import React from 'react'
import { Header } from '../../../components/header'
import { Footer } from '../../../components/footer'
import { BlockCard } from '../../../components/block-card'
import {
  Dashboard01Block,
  Ecommerce01Block,
  Ecommerce02Block,
  Chat01Block,
  Auth01Block,
  CryptoGlass01Block,
} from '../../../components/vibe-blocks'
import {
  dashboard01Code,
  ecommerce01Code,
  ecommerce02Code,
  chat01Code,
  auth01Code,
  cryptoGlass01Code,
} from '../../../components/vibe-blocks-code'
import { BLOCKS_METADATA, VALID_BLOCK_SLUGS } from './blocks-data'

export { BLOCKS_METADATA, VALID_BLOCK_SLUGS }

const BLOCKS_COMPONENT_MAP: Record<
  string,
  {
    code: any
    previewComponent: React.ReactNode
  }
> = {
  'dashboard-01': {
    code: dashboard01Code,
    previewComponent: <Dashboard01Block />,
  },
  'ecommerce-01': {
    code: ecommerce01Code,
    previewComponent: <Ecommerce01Block />,
  },
  'ecommerce-02': {
    code: ecommerce02Code,
    previewComponent: <Ecommerce02Block />,
  },
  'chat-01': {
    code: chat01Code,
    previewComponent: <Chat01Block />,
  },
  'auth-01': {
    code: auth01Code,
    previewComponent: <Auth01Block />,
  },
  'crypto-glass-01': {
    code: cryptoGlass01Code,
    previewComponent: <CryptoGlass01Block />,
  },
}

export function BlockDetailView({ blockName }: { blockName: string }) {
  const meta = BLOCKS_METADATA[blockName]
  const componentInfo = BLOCKS_COMPONENT_MAP[blockName]

  if (!meta || !componentInfo) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      <main className="flex-1 w-full px-2 sm:px-4 py-6 sm:py-8">
        <div className="w-full">
          <BlockCard
            title={meta.title}
            description={meta.description}
            urlPath={blockName}
            code={componentInfo.code}
            previewComponent={componentInfo.previewComponent}
            vibeDeps={meta.vibeDeps}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
