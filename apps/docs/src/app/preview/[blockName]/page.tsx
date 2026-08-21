'use client'

import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Dashboard01Block, Ecommerce01Block, Ecommerce02Block, Chat01Block } from '../../../components/vibe-blocks'

export default function PreviewPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const blockName = params.blockName as string
  const themeParam = searchParams.get('theme')

  const { setTheme } = useTheme()

  useEffect(() => {
    if (themeParam) {
      // Manually toggle theme classes to avoid writing to shared localStorage
      // which would conflict with other open tabs like /blocks/dashboard-01
      const isDark = themeParam === 'dark'
      if (isDark) {
        document.documentElement.classList.add('dark')
        document.documentElement.style.colorScheme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.style.colorScheme = 'light'
      }
    }
  }, [themeParam])

  useEffect(() => {
    if (themeParam) return // Ignore postMessage if URL theme is forced

    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'vibe-theme-change' && e.data?.theme) {
        setTheme(e.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [themeParam, setTheme])

  switch (blockName) {
    case 'dashboard-01':
      return (
        <div className="w-full h-screen bg-background overflow-y-auto select-none">
          <Dashboard01Block />
        </div>
      )
    case 'ecommerce-01':
      return (
        <div className="w-full h-screen bg-background overflow-y-auto">
          <Ecommerce01Block />
        </div>
      )
    case 'ecommerce-02':
      return (
        <div className="w-full h-screen bg-background overflow-y-auto">
          <Ecommerce02Block />
        </div>
      )
    case 'chat-01':
      return (
        <div className="w-full h-screen bg-background overflow-y-auto">
          <Chat01Block />
        </div>
      )
    default:
      return (
        <div className="flex min-h-screen items-center justify-center bg-background text-foreground p-8">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold">Block Preview</h2>
            <p className="text-xs text-muted-foreground">
              Preview for block{' '}
              <code className="font-mono text-primary">{blockName}</code>
            </p>
          </div>
        </div>
      )
  }
}
