'use client'

import React, { useState } from 'react'
import { InfiniteScroll } from 'vibe-ui'
import { Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'

interface InfiniteScrollDemoProps {
  variant?: 'default' | 'glass' | 'glow' | 'retro' | 'cyberpunk'
}

export function InfiniteScrollDemo({
  variant = 'default',
}: InfiniteScrollDemoProps) {
  const [items, setItems] = useState<string[]>([
    'Console Log #1024: Database sync cache hit',
    'Console Log #1025: Telemetry collection queued',
    'Console Log #1026: API proxy reload succeeded',
    'Console Log #1027: Port listener binding open on 8080',
    'Console Log #1028: Session keys garbage collection task done',
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const loadMoreItems = () => {
    setIsLoading(true)
    setTimeout(() => {
      setItems((prev) => [
        ...prev,
        `Console Log #10${prev.length + 24}: Client telemetry packet delivered`,
        `Console Log #10${prev.length + 25}: Handshake request completed`,
        `Console Log #10${prev.length + 26}: Cache invalidated for workspace index`,
      ])
      setIsLoading(false)
      if (items.length >= 17) {
        setHasMore(false)
      }
    }, 1000)
  }

  const LoaderIcon = Loader2 as any

  // 1. Resolve variant styling wrapper
  const containerClasses = cn(
    'border rounded-xl p-6 max-w-md w-full mx-auto select-none transition-all duration-300',
    variant === 'default' && 'border-white/10 bg-zinc-950/20',
    variant === 'glass' &&
      'border-white/10 bg-white/5 backdrop-blur-md shadow-2xl',
    variant === 'glow' &&
      'border-purple-500/20 bg-zinc-950/40 shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    variant === 'retro' &&
      'border-2 border-white bg-zinc-950 rounded-none shadow-[6px_6px_0px_#ffffff]',
    variant === 'cyberpunk' &&
      'border-emerald-500/30 bg-black shadow-[0_0_20px_rgba(16,185,129,0.1)] rounded-none',
  )

  const listClasses = cn(
    'h-[220px] overflow-y-auto pr-1 space-y-2.5 no-scrollbar p-2 bg-black/40 border border-white/5 rounded-lg',
    variant === 'retro' && 'border-2 border-white rounded-none bg-zinc-950',
    variant === 'cyberpunk' && 'border-emerald-500/20 rounded-none bg-black',
  )

  const itemClasses = cn(
    'p-3 text-xs text-left transition-all duration-200',
    variant === 'default' &&
      'bg-white/5 border border-white/10 rounded-lg hover:bg-white/[0.08]',
    variant === 'glass' &&
      'bg-white/10 border border-white/20 rounded-xl backdrop-blur-lg hover:bg-white/15',
    variant === 'glow' &&
      'bg-zinc-900 border border-purple-500/20 rounded-lg hover:border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.05)]',
    variant === 'retro' &&
      'bg-zinc-900 border-2 border-white rounded-none shadow-[3px_3px_0px_#ffffff] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#ffffff]',
    variant === 'cyberpunk' &&
      "bg-zinc-950 border border-emerald-500/30 rounded-none font-mono text-emerald-400 hover:border-emerald-500/60 shadow-[0_0_8px_rgba(16,185,129,0.05)] relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(rgba(16,185,129,0.04)_50%,rgba(16,185,129,0)_50%)] after:bg-[length:100%_4px]",
  )

  // 2. Resolve loader structure
  const getLoader = () => {
    if (variant === 'retro') {
      return (
        <div className="flex items-center justify-center py-4 text-[10px] text-white font-mono uppercase tracking-widest animate-pulse">
          &gt;&gt;&gt; [ LOADING DATA... ]
        </div>
      )
    }
    if (variant === 'cyberpunk') {
      return (
        <div className="flex items-center justify-center gap-1.5 py-4 text-[10px] text-emerald-400 font-mono">
          <span className="h-2.5 w-1.5 bg-emerald-400 animate-pulse inline-block" />
          SYS_LOADER: fetching_stream...
        </div>
      )
    }
    return (
      <div className="flex items-center justify-center gap-2 py-4 text-[10px] text-muted-foreground font-mono w-full">
        <LoaderIcon
          className={cn(
            'h-3.5 w-3.5 animate-spin',
            variant === 'glow' ? 'text-purple-400' : 'text-emerald-400',
          )}
        />
        Simulating observer fetch...
      </div>
    )
  }

  // 3. Resolve finished loaded line
  const getFinishedText = () => {
    if (variant === 'retro') {
      return '[ SYSTEM IDLE - ALL LOGS LOADED ]'
    }
    if (variant === 'cyberpunk') {
      return 'SUCCESS: end_of_file_reached'
    }
    return '✓ All console logs loaded'
  }

  return (
    <div className={containerClasses}>
      <div className={listClasses}>
        <InfiniteScroll
          hasMore={hasMore}
          isLoading={isLoading}
          loadMore={loadMoreItems}
          threshold={0.1}
          rootMargin="20px"
          loadingTrigger={getLoader()}
        >
          {items.map((item, index) => {
            const [title, desc] = item.split(': ')
            return (
              <div key={index} className={itemClasses}>
                <h4
                  className={cn(
                    'font-semibold',
                    variant === 'retro' ? 'text-yellow-400' : 'text-white',
                  )}
                >
                  {title}
                </h4>
                <p
                  className={cn(
                    'text-[10px] mt-0.5',
                    variant === 'cyberpunk'
                      ? 'text-emerald-500/80'
                      : 'text-muted-foreground',
                  )}
                >
                  {desc}
                </p>
              </div>
            )
          })}
        </InfiniteScroll>

        {!hasMore && (
          <div
            className={cn(
              'text-[10px] text-center py-4 font-mono select-none uppercase tracking-wide',
              variant === 'cyberpunk'
                ? 'text-emerald-500'
                : 'text-muted-foreground',
            )}
          >
            {getFinishedText()}
          </div>
        )}
      </div>
    </div>
  )
}
