'use client'

import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  Dashboard01Block,
  Sidebar07Block,
  Sidebar03Block,
  Login03Block,
  Login04Block,
} from '../../../components/vibe-blocks'
import { DashboardBlock02 } from 'vibe-ui'

export default function PreviewPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const blockName = params.blockName as string
  const themeParam = searchParams.get('theme')

  const { setTheme } = useTheme()

  useEffect(() => {
    if (themeParam) {
      setTheme(themeParam)
    }
  }, [themeParam, setTheme])

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'vibe-theme-change' && e.data?.theme) {
        setTheme(e.data.theme)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [setTheme])

  switch (blockName) {
    case 'dashboard-01':
      return (
        <div className="w-full h-screen bg-background overflow-y-auto select-none">
          <Dashboard01Block />
        </div>
      )
    case 'dashboard-02':
      return (
        <div className="w-full min-h-screen bg-background overflow-y-auto select-none">
          <DashboardBlock02 />
        </div>
      )
    case 'sidebar-07':
      return (
        <div className="w-full h-screen bg-background overflow-hidden select-none">
          <Sidebar07Block />
        </div>
      )
    case 'sidebar-03':
      return (
        <div className="w-full h-screen bg-background overflow-hidden select-none">
          <Sidebar03Block />
        </div>
      )
    case 'login-03':
      return (
        <div className="w-full h-screen bg-background overflow-y-auto select-none">
          <Login03Block />
        </div>
      )
    case 'login-04':
      return (
        <div className="w-full h-screen bg-background overflow-y-auto select-none">
          <Login04Block />
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
