'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const skeletonVariants = tv({
  base: 'relative overflow-hidden rounded-md bg-muted/80 transition-all duration-300',
  variants: {
    variant: {
      pulse: 'animate-pulse',
      shimmer: 'bg-muted/50',
      glow: 'shadow-[0_0_15px_rgba(168,85,247,0.25)] border border-primary/30 bg-primary/10 animate-pulse',
      glass: 'bg-card/40 border border-border backdrop-blur-md animate-pulse',
      retro:
        'border-2 border-foreground bg-muted rounded-none vibe-retro-flash-effect',
    },
  },
  defaultVariants: {
    variant: 'pulse',
  },
})
let stylesInjected = false

const injectSkeletonStyles = () => {
  if (typeof window === 'undefined' || stylesInjected) return
  const styleId = 'vibe-skeleton-styles'
  if (document.getElementById(styleId)) {
    stylesInjected = true
    return
  }
  const styleEl = document.createElement('style')
  styleEl.id = styleId
  styleEl.innerHTML = `
    @keyframes vibe-shimmer {
      100% { transform: translateX(100%); }
    }
    @keyframes vibe-retro-flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.35; }
    }
    .vibe-shimmer-effect::after {
      content: '';
      position: absolute;
      inset: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.4) 20%,
        rgba(255, 255, 255, 0.6) 60%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: vibe-shimmer 1.6s infinite;
    }
    .dark .vibe-shimmer-effect::after {
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.05) 20%,
        rgba(255, 255, 255, 0.12) 60%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    .vibe-retro-flash-effect {
      animation: vibe-retro-flash 1.2s steps(2, end) infinite;
    }
  `
  document.head.appendChild(styleEl)
  stylesInjected = true
}

export interface SkeletonProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, ...props }, ref) => {
    React.useEffect(() => {
      injectSkeletonStyles()
    }, [])

    return (
      <div
        ref={ref}
        className={cn(
          skeletonVariants({ variant }),
          variant === 'shimmer' && 'vibe-shimmer-effect',
          className,
        )}
        {...props}
      />
    )
  },
)
Skeleton.displayName = 'Skeleton'

// Helper Layout Elements
export const SkeletonCircle = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & { size?: number | string }
>(({ size = 48, className, ...props }, ref) => (
  <Skeleton
    ref={ref}
    className={cn('rounded-full shrink-0', className)}
    style={{ width: size, height: size, ...props.style }}
    {...props}
  />
))
SkeletonCircle.displayName = 'SkeletonCircle'

export const SkeletonLine = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & { height?: number | string }
>(({ height = '1rem', className, ...props }, ref) => (
  <Skeleton
    ref={ref}
    className={cn('w-full', className)}
    style={{ height, ...props.style }}
    {...props}
  />
))
SkeletonLine.displayName = 'SkeletonLine'

// Layout Preset 1: Standard Card
export const SkeletonCard = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'border border-border rounded-xl p-4 bg-card space-y-4 shadow-sm w-full transition-all duration-300',
        props.variant === 'retro' &&
          'border-2 border-foreground rounded-none bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]',
        props.variant === 'glass' &&
          'bg-white/[0.03] border-white/10 backdrop-blur-md',
        props.variant === 'glow' &&
          'border-primary/20 shadow-[0_0_20px_rgba(168,85,247,0.08)]',
        className,
      )}
    >
      <Skeleton className="aspect-video w-full rounded-lg" {...props} />
      <div className="space-y-2">
        <SkeletonLine height="1.25rem" className="w-2/3" {...props} />
        <SkeletonLine height="0.875rem" className="w-5/6" {...props} />
        <SkeletonLine height="0.875rem" className="w-1/2" {...props} />
      </div>
      <div className="flex justify-between items-center pt-2">
        <Skeleton className="h-8 w-20 rounded-md" {...props} />
        <SkeletonCircle size={28} {...props} />
      </div>
    </div>
  ),
)
SkeletonCard.displayName = 'SkeletonCard'

// Layout Preset 2: Profile Block
export const SkeletonProfile = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center space-x-4 w-full p-2', className)}
    >
      <SkeletonCircle size={48} {...props} />
      <div className="space-y-2 flex-1">
        <SkeletonLine height="1rem" className="w-1/3" {...props} />
        <SkeletonLine height="0.75rem" className="w-1/2" {...props} />
      </div>
    </div>
  ),
)
SkeletonProfile.displayName = 'SkeletonProfile'

// Layout Preset 3: Horizontal Bullet List
export const SkeletonList = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & { items?: number }
>(({ items = 3, className, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-4 w-full', className)}>
    {Array.from({ length: items }).map((_, i) => (
      <div key={i} className="flex items-center space-x-3">
        <SkeletonCircle size={24} {...props} />
        <SkeletonLine height="0.875rem" className="flex-1" {...props} />
      </div>
    ))}
  </div>
))
SkeletonList.displayName = 'SkeletonList'

// Layout Preset 4: Mock Data Table
export const SkeletonTable = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & { rows?: number; cols?: number }
>(({ rows = 3, cols = 4, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-full border border-border rounded-lg overflow-hidden bg-card shadow-sm',
      props.variant === 'retro' &&
        'border-2 border-foreground rounded-none bg-background',
      props.variant === 'glass' &&
        'bg-white/[0.03] border-white/10 backdrop-blur-md',
      props.variant === 'glow' &&
        'border-primary/20 shadow-[0_0_20px_rgba(168,85,247,0.08)]',
      className,
    )}
  >
    <div className="flex border-b border-border bg-muted/40 p-3 space-x-4">
      {Array.from({ length: cols }).map((_, i) => (
        <SkeletonLine key={i} height="0.875rem" className="flex-1" {...props} />
      ))}
    </div>
    <div className="divide-y divide-border">
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="flex p-4 space-x-4">
          {Array.from({ length: cols }).map((_, c) => (
            <SkeletonLine
              key={c}
              height="0.75rem"
              className="flex-1"
              {...props}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
))
SkeletonTable.displayName = 'SkeletonTable'

// Layout Preset 5: Large Blog Post Card
export const SkeletonPost = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-4 w-full p-2', className)}>
      <div className="flex items-center space-x-3">
        <SkeletonCircle size={40} {...props} />
        <div className="space-y-1.5 flex-1">
          <SkeletonLine height="0.875rem" className="w-1/4" {...props} />
          <SkeletonLine height="0.75rem" className="w-1/6" {...props} />
        </div>
      </div>
      <Skeleton className="h-48 w-full rounded-lg" {...props} />
      <div className="space-y-2">
        <SkeletonLine height="1.25rem" className="w-3/4" {...props} />
        <SkeletonLine height="0.875rem" className="w-full" {...props} />
        <SkeletonLine height="0.875rem" className="w-5/6" {...props} />
      </div>
    </div>
  ),
)
SkeletonPost.displayName = 'SkeletonPost'

// Layout Preset 6: Bar Chart mock
export const SkeletonChart = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & { bars?: number }
>(({ bars = 6, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'border border-border rounded-xl p-4 bg-card h-48 flex items-end justify-around space-x-2 w-full',
      props.variant === 'retro' &&
        'border-2 border-foreground rounded-none bg-background',
      props.variant === 'glass' &&
        'bg-white/[0.03] border-white/10 backdrop-blur-md',
      props.variant === 'glow' &&
        'border-primary/20 shadow-[0_0_20px_rgba(168,85,247,0.08)]',
      className,
    )}
  >
    {Array.from({ length: bars }).map((_, i) => {
      const heights = [
        'h-[30%]',
        'h-[65%]',
        'h-[45%]',
        'h-[85%]',
        'h-[25%]',
        'h-[70%]',
      ]
      const h = heights[i % heights.length]
      return (
        <Skeleton
          key={i}
          className={cn('w-full rounded-t-md max-w-[40px]', h)}
          {...props}
        />
      )
    })}
  </div>
))
SkeletonChart.displayName = 'SkeletonChart'

// Layout Preset 7: Structured Form layout
export const SkeletonForm = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & { fields?: number }
>(({ fields = 3, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'space-y-4 w-full p-4 border border-border rounded-xl bg-card shadow-sm',
      props.variant === 'retro' &&
        'border-2 border-foreground rounded-none bg-background',
      props.variant === 'glass' &&
        'bg-white/[0.03] border-white/10 backdrop-blur-md',
      props.variant === 'glow' &&
        'border-primary/20 shadow-[0_0_20px_rgba(168,85,247,0.08)]',
      className,
    )}
  >
    {Array.from({ length: fields }).map((_, i) => (
      <div key={i} className="space-y-2">
        <SkeletonLine height="0.75rem" className="w-1/6" {...props} />
        <Skeleton className="h-10 w-full rounded-md" {...props} />
      </div>
    ))}
    <div className="flex justify-end pt-2">
      <Skeleton className="h-10 w-24 rounded-md" {...props} />
    </div>
  </div>
))
SkeletonForm.displayName = 'SkeletonForm'

// Layout Preset 8: Multi-Post Feed list
export const SkeletonFeed = React.forwardRef<
  HTMLDivElement,
  SkeletonProps & { posts?: number }
>(({ posts = 2, className, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-6 w-full', className)}>
    {Array.from({ length: posts }).map((_, i) => (
      <SkeletonPost
        key={i}
        className="border-b border-border pb-6 last:border-b-0 last:pb-0"
        {...props}
      />
    ))}
  </div>
))
SkeletonFeed.displayName = 'SkeletonFeed'

// ==========================================
// 10 NEW ADVANCED INTERACTIVE SKELETON LAYOUTS
// ==========================================

// 1. Music Player Layout
export const SkeletonMusicPlayer = React.forwardRef<
  HTMLDivElement,
  SkeletonProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-full max-w-sm border border-border rounded-2xl p-6 bg-card space-y-5 shadow-lg select-none transition-all duration-300',
      props.variant === 'retro' &&
        'border-2 border-foreground rounded-none bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]',
      props.variant === 'glass' &&
        'bg-white/[0.03] border-white/10 backdrop-blur-md',
      props.variant === 'glow' &&
        'border-primary/20 shadow-[0_0_25px_rgba(168,85,247,0.1)]',
      className,
    )}
  >
    {/* Vinyl/Album Art Cover */}
    <div className="flex justify-center py-4">
      <SkeletonCircle
        size={160}
        className="shadow-md flex items-center justify-center bg-zinc-300 dark:bg-zinc-700"
        {...props}
      >
        <div className="w-16 h-16 rounded-full bg-card border-4 border-zinc-200/20 dark:border-zinc-800/40" />
      </SkeletonCircle>
    </div>

    {/* Song details */}
    <div className="text-center space-y-2">
      <SkeletonLine height="1.25rem" className="w-1/2 mx-auto" {...props} />
      <SkeletonLine height="0.875rem" className="w-1/3 mx-auto" {...props} />
    </div>

    {/* Timeline track */}
    <div className="space-y-1.5 pt-2">
      <SkeletonLine
        height="0.375rem"
        className="w-full rounded-full"
        {...props}
      />
      <div className="flex justify-between">
        <SkeletonLine height="0.625rem" className="w-8" {...props} />
        <SkeletonLine height="0.625rem" className="w-8" {...props} />
      </div>
    </div>

    {/* Control row */}
    <div className="flex items-center justify-around px-4 pt-1">
      <SkeletonCircle size={32} {...props} />
      <SkeletonCircle size={48} className="bg-primary/20" {...props} />
      <SkeletonCircle size={32} {...props} />
    </div>

    {/* Volume slider mock */}
    <div className="flex items-center space-x-3 pt-2">
      <SkeletonCircle size={16} {...props} />
      <SkeletonLine
        height="0.25rem"
        className="flex-1 rounded-full"
        {...props}
      />
      <SkeletonCircle size={16} {...props} />
    </div>
  </div>
))
SkeletonMusicPlayer.displayName = 'SkeletonMusicPlayer'

// 2. Full Dashboard Screen Layout
export const SkeletonDashboard = React.forwardRef<
  HTMLDivElement,
  SkeletonProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-full border border-border rounded-xl bg-card overflow-hidden flex h-[400px] shadow-lg transition-all duration-300',
      props.variant === 'retro' &&
        'border-2 border-foreground rounded-none bg-background',
      props.variant === 'glass' &&
        'bg-white/[0.03] border-white/10 backdrop-blur-md',
      props.variant === 'glow' &&
        'border-primary/10 shadow-[0_0_30px_rgba(168,85,247,0.05)]',
      className,
    )}
  >
    {/* Sidebar */}
    <div className="w-48 border-r border-border bg-muted/20 p-4 space-y-6 hidden sm:block shrink-0">
      <div className="flex items-center space-x-2">
        <SkeletonCircle size={28} {...props} />
        <SkeletonLine height="1rem" className="w-16" {...props} />
      </div>
      <div className="space-y-4">
        <SkeletonLine height="0.875rem" className="w-full" {...props} />
        <SkeletonLine height="0.875rem" className="w-5/6" {...props} />
        <SkeletonLine height="0.875rem" className="w-4/5" {...props} />
        <SkeletonLine height="0.875rem" className="w-full" {...props} />
      </div>
    </div>

    {/* Main Workspace */}
    <div className="flex-1 flex flex-col min-w-0">
      {/* Header */}
      <div className="h-14 border-b border-border flex items-center justify-between px-6 shrink-0">
        <SkeletonLine height="1.25rem" className="w-32" {...props} />
        <div className="flex items-center space-x-3">
          <Skeleton className="h-8 w-24 rounded-md" {...props} />
          <SkeletonCircle size={28} {...props} />
        </div>
      </div>

      {/* Content body */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Card stats list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="border border-border/80 rounded-xl p-4 bg-muted/10 space-y-3"
            >
              <div className="flex justify-between items-center">
                <SkeletonLine height="0.75rem" className="w-16" {...props} />
                <SkeletonCircle size={16} {...props} />
              </div>
              <SkeletonLine height="1.5rem" className="w-24" {...props} />
              <SkeletonLine height="0.625rem" className="w-20" {...props} />
            </div>
          ))}
        </div>

        {/* Chart & Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="border border-border/80 rounded-xl p-4 bg-muted/10 space-y-3">
            <SkeletonLine height="1rem" className="w-28" {...props} />
            <div className="h-28 flex items-end justify-around space-x-1 pt-4">
              <Skeleton className="w-8 h-12 rounded-t-sm" {...props} />
              <Skeleton className="w-8 h-20 rounded-t-sm" {...props} />
              <Skeleton className="w-8 h-16 rounded-t-sm" {...props} />
              <Skeleton className="w-8 h-24 rounded-t-sm" {...props} />
            </div>
          </div>
          <div className="border border-border/80 rounded-xl p-4 bg-muted/10 space-y-3">
            <SkeletonLine height="1rem" className="w-28" {...props} />
            <div className="space-y-3 pt-2">
              <SkeletonLine height="0.75rem" className="w-full" {...props} />
              <SkeletonLine height="0.75rem" className="w-5/6" {...props} />
              <SkeletonLine height="0.75rem" className="w-full" {...props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))
SkeletonDashboard.displayName = 'SkeletonDashboard'

// 3. E-Commerce Product Card Layout
export const SkeletonECommerce = React.forwardRef<
  HTMLDivElement,
  SkeletonProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-full max-w-sm border border-border rounded-2xl overflow-hidden bg-card shadow-md flex flex-col transition-all duration-300',
      props.variant === 'retro' &&
        'border-2 border-foreground bg-background rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      props.variant === 'glass' &&
        'bg-white/[0.03] border-white/10 backdrop-blur-md',
      props.variant === 'glow' &&
        'border-primary/20 shadow-[0_0_20px_rgba(168,85,247,0.08)]',
      className,
    )}
  >
    {/* Product Image Gallery Wrapper */}
    <div className="relative aspect-square w-full bg-muted/20">
      <Skeleton className="w-full h-full rounded-none" {...props} />
      {/* Left/Right controls */}
      <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
        <SkeletonCircle size={28} className="opacity-75" {...props} />
        <SkeletonCircle size={28} className="opacity-75" {...props} />
      </div>
      {/* Wishlist badge */}
      <div className="absolute right-3 top-3">
        <SkeletonCircle size={32} className="bg-background/80" {...props} />
      </div>
    </div>

    {/* Info details */}
    <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
      <div className="space-y-2">
        {/* Tags */}
        <div className="flex space-x-2">
          <Skeleton className="h-5 w-14 rounded-full" {...props} />
          <Skeleton className="h-5 w-10 rounded-full" {...props} />
        </div>
        {/* Title & Brand */}
        <SkeletonLine height="1.25rem" className="w-3/4" {...props} />
        <SkeletonLine height="0.875rem" className="w-1/3" {...props} />
      </div>

      {/* Rating stars */}
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonCircle
            key={i}
            size={14}
            className="bg-yellow-500/10 dark:bg-yellow-500/5"
            {...props}
          />
        ))}
        <SkeletonLine height="0.75rem" className="w-8 ml-2" {...props} />
      </div>

      {/* Sizes Selection Row */}
      <div className="space-y-1.5">
        <SkeletonLine height="0.75rem" className="w-16" {...props} />
        <div className="flex space-x-2">
          {['S', 'M', 'L'].map((_, i) => (
            <Skeleton
              key={i}
              className="h-8 w-8 rounded-md flex items-center justify-center text-xs"
              {...props}
            />
          ))}
        </div>
      </div>

      {/* Action controls */}
      <div className="flex justify-between items-center pt-2 gap-4">
        <div className="space-y-1">
          <SkeletonLine height="1.25rem" className="w-16" {...props} />
          <SkeletonLine height="0.625rem" className="w-10" {...props} />
        </div>
        <Skeleton className="h-10 flex-1 rounded-xl" {...props} />
      </div>
    </div>
  </div>
))
SkeletonECommerce.displayName = 'SkeletonECommerce'

// 4. Interactive Mobile Chat Conversation
export const SkeletonChat = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'w-full max-w-xl border border-border rounded-3xl bg-card overflow-hidden flex flex-col h-[400px] shadow-lg transition-all duration-300',
        props.variant === 'retro' &&
          'border-2 border-foreground bg-background rounded-none',
        props.variant === 'glass' &&
          'bg-white/[0.03] border-white/10 backdrop-blur-md',
        props.variant === 'glow' &&
          'border-primary/20 shadow-[0_0_25px_rgba(168,85,247,0.1)]',
        className,
      )}
    >
      {/* Chat Header */}
      <div className="h-14 border-b border-border flex items-center justify-between px-4 bg-muted/10 shrink-0">
        <div className="flex items-center space-x-3">
          <SkeletonCircle size={32} {...props} />
          <div className="space-y-1">
            <SkeletonLine height="0.875rem" className="w-20" {...props} />
            <SkeletonLine height="0.625rem" className="w-12" {...props} />
          </div>
        </div>
        <div className="flex space-x-2">
          <SkeletonCircle size={28} {...props} />
          <SkeletonCircle size={28} {...props} />
        </div>
      </div>

      {/* Messaging thread area */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-muted/5 flex flex-col justify-end">
        {/* Message Left */}
        <div className="flex items-end space-x-2 max-w-[80%]">
          <SkeletonCircle size={24} className="shrink-0" {...props} />
          <div className="space-y-1.5 p-3 rounded-2xl rounded-bl-none bg-muted/40">
            <SkeletonLine height="0.75rem" className="w-32" {...props} />
            <SkeletonLine height="0.75rem" className="w-24" {...props} />
          </div>
        </div>

        {/* Message Right (user) */}
        <div className="flex items-end space-x-2 max-w-[80%] self-end">
          <div className="space-y-1.5 p-3 rounded-2xl rounded-br-none bg-primary/10 text-right">
            <SkeletonLine height="0.75rem" className="w-40" {...props} />
            <SkeletonLine height="0.75rem" className="w-28" {...props} />
          </div>
        </div>

        {/* Message Left (typing) */}
        <div className="flex items-end space-x-2 max-w-[80%]">
          <SkeletonCircle size={24} className="shrink-0" {...props} />
          <div className="flex items-center space-x-1.5 p-3 rounded-2xl rounded-bl-none bg-muted/40 h-8 w-16">
            <SkeletonCircle
              size={6}
              className="bg-zinc-400 dark:bg-zinc-600"
              {...props}
            />
            <SkeletonCircle
              size={6}
              className="bg-zinc-400 dark:bg-zinc-600"
              {...props}
            />
            <SkeletonCircle
              size={6}
              className="bg-zinc-400 dark:bg-zinc-600"
              {...props}
            />
          </div>
        </div>
      </div>

      {/* Input box */}
      <div className="h-16 border-t border-border flex items-center p-3 gap-3 bg-muted/10 shrink-0">
        <SkeletonCircle size={32} {...props} />
        <Skeleton className="h-10 flex-1 rounded-full" {...props} />
        <SkeletonCircle size={32} className="bg-primary/20" {...props} />
      </div>
    </div>
  ),
)
SkeletonChat.displayName = 'SkeletonChat'

// 5. Video Player Deck Layout
export const SkeletonVideoPlayer = React.forwardRef<
  HTMLDivElement,
  SkeletonProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-full border border-border rounded-2xl overflow-hidden bg-black relative aspect-video flex flex-col justify-end shadow-xl transition-all duration-300',
      props.variant === 'retro' &&
        'border-2 border-foreground rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      props.variant === 'glass' && 'border-white/10 backdrop-blur-md',
      props.variant === 'glow' &&
        'border-primary/20 shadow-[0_0_30px_rgba(168,85,247,0.15)]',
      className,
    )}
  >
    {/* Center loading spinner overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
      <SkeletonCircle
        size={48}
        className="bg-white/15 dark:bg-white/10 border-4 border-t-transparent border-white/20 animate-spin"
        {...props}
      />
      <SkeletonLine height="0.875rem" className="w-24 bg-white/20" {...props} />
    </div>

    {/* Bottom Subtitle overlay */}
    <div className="absolute bottom-16 inset-x-0 flex justify-center pointer-events-none px-12">
      <SkeletonLine
        height="1rem"
        className="w-2/3 bg-zinc-100/10 dark:bg-zinc-800/30 rounded-md"
        {...props}
      />
    </div>

    {/* Player Control HUD Tray */}
    <div className="relative z-10 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent space-y-3 shrink-0">
      {/* Video progress timeline */}
      <div className="flex items-center space-x-3">
        <SkeletonLine
          height="0.25rem"
          className="flex-1 bg-white/20"
          {...props}
        />
        <SkeletonLine
          height="0.625rem"
          className="w-8 bg-white/20"
          {...props}
        />
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <SkeletonCircle size={24} className="bg-white/20" {...props} />
          <SkeletonCircle size={20} className="bg-white/20" {...props} />
          <SkeletonLine
            height="0.75rem"
            className="w-16 bg-white/20"
            {...props}
          />
        </div>
        <div className="flex items-center space-x-4">
          <SkeletonCircle size={20} className="bg-white/20" {...props} />
          <SkeletonCircle size={20} className="bg-white/20" {...props} />
          <SkeletonCircle size={20} className="bg-white/20" {...props} />
        </div>
      </div>
    </div>
  </div>
))
SkeletonVideoPlayer.displayName = 'SkeletonVideoPlayer'

// 6. File Explorer Panel
export const SkeletonFileExplorer = React.forwardRef<
  HTMLDivElement,
  SkeletonProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-full border border-border rounded-xl bg-card overflow-hidden flex h-[350px] shadow-lg transition-all duration-300',
      props.variant === 'retro' &&
        'border-2 border-foreground rounded-none bg-background',
      props.variant === 'glass' &&
        'bg-white/[0.03] border-white/10 backdrop-blur-md',
      props.variant === 'glow' &&
        'border-primary/10 shadow-[0_0_25px_rgba(168,85,247,0.05)]',
      className,
    )}
  >
    {/* Folders navigation tree sidebar */}
    <div className="w-44 border-r border-border p-3 space-y-4 bg-muted/10 hidden sm:block shrink-0">
      <SkeletonLine height="0.75rem" className="w-16 mb-2" {...props} />
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-2">
          <Skeleton className="h-4 w-4 rounded-sm" {...props} />
          <SkeletonLine height="0.75rem" className="flex-1" {...props} />
        </div>
      ))}
    </div>

    {/* Files grids */}
    <div className="flex-1 p-5 space-y-5 flex flex-col justify-between min-w-0">
      <div className="space-y-4">
        {/* Header search bar */}
        <div className="flex justify-between items-center gap-3">
          <Skeleton className="h-8 flex-1 rounded-md" {...props} />
          <SkeletonCircle size={28} {...props} />
        </div>

        {/* Folder grids */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="border border-border/80 rounded-lg p-3 bg-muted/5 flex items-center space-x-2.5"
            >
              <Skeleton
                className="h-6 w-6 rounded-md bg-yellow-500/20"
                {...props}
              />
              <SkeletonLine height="0.75rem" className="flex-1" {...props} />
            </div>
          ))}
        </div>

        {/* Detailed list rows */}
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center py-1.5 border-b border-border/50 last:border-0"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <Skeleton className="h-5 w-5 rounded-md" {...props} />
                <SkeletonLine height="0.75rem" className="w-1/2" {...props} />
              </div>
              <SkeletonLine
                height="0.625rem"
                className="w-12 text-right"
                {...props}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer info stats */}
      <div className="flex items-center justify-between border-t border-border pt-3 shrink-0">
        <SkeletonLine height="0.75rem" className="w-24" {...props} />
        <SkeletonLine height="0.75rem" className="w-16" {...props} />
      </div>
    </div>
  </div>
))
SkeletonFileExplorer.displayName = 'SkeletonFileExplorer'

// 7. Monthly Schedule/Calendar Layout
export const SkeletonCalendar = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'w-full border border-border rounded-2xl bg-card p-5 space-y-4 shadow-md transition-all duration-300',
        props.variant === 'retro' &&
          'border-2 border-foreground bg-background rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        props.variant === 'glass' &&
          'bg-white/[0.03] border-white/10 backdrop-blur-md',
        props.variant === 'glow' &&
          'border-primary/20 shadow-[0_0_20px_rgba(168,85,247,0.08)]',
        className,
      )}
    >
      {/* Calendar Header */}
      <div className="flex justify-between items-center">
        <SkeletonLine height="1.25rem" className="w-24" {...props} />
        <div className="flex space-x-2">
          <Skeleton className="h-7 w-12 rounded-md" {...props} />
          <Skeleton className="h-7 w-12 rounded-md" {...props} />
        </div>
      </div>

      {/* Week headings */}
      <div className="grid grid-cols-7 gap-2 text-center border-b border-border pb-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <SkeletonLine
            key={i}
            height="0.625rem"
            className="w-6 mx-auto"
            {...props}
          />
        ))}
      </div>

      {/* Calendar day cells */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 28 }).map((_, i) => {
          // Add some colored circles representing active events
          const hasEvent = i === 4 || i === 11 || i === 18
          return (
            <div
              key={i}
              className="aspect-square border border-border/50 rounded-lg p-1 bg-muted/5 flex flex-col justify-between items-center relative"
            >
              <SkeletonLine
                height="0.625rem"
                className="w-4 text-center mt-1"
                {...props}
              />
              {hasEvent && (
                <SkeletonCircle
                  size={6}
                  className="bg-primary absolute bottom-1.5"
                  {...props}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Event Details line */}
      <div className="border-t border-border pt-3 space-y-2">
        <SkeletonLine height="0.75rem" className="w-16" {...props} />
        <div className="flex items-center space-x-3 p-2 border border-border rounded-lg bg-muted/5">
          <div className="w-1 h-8 rounded-full bg-primary" />
          <div className="space-y-1 flex-1">
            <SkeletonLine height="0.875rem" className="w-1/2" {...props} />
            <SkeletonLine height="0.75rem" className="w-1/3" {...props} />
          </div>
        </div>
      </div>
    </div>
  ),
)
SkeletonCalendar.displayName = 'SkeletonCalendar'

// 8. Billing Invoice Receipt
export const SkeletonInvoice = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'w-full max-w-2xl border border-border rounded-xl bg-card p-6 space-y-6 shadow-md transition-all duration-300',
        props.variant === 'retro' &&
          'border-2 border-foreground bg-background rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        props.variant === 'glass' &&
          'bg-white/[0.03] border-white/10 backdrop-blur-md',
        props.variant === 'glow' &&
          'border-primary/20 shadow-[0_0_20px_rgba(168,85,247,0.08)]',
        className,
      )}
    >
      {/* Header and invoice ID */}
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <SkeletonCircle size={36} {...props} />
          <SkeletonLine height="1.125rem" className="w-32" {...props} />
        </div>
        <div className="space-y-1.5 text-right">
          <SkeletonLine height="0.75rem" className="w-20" {...props} />
          <SkeletonLine height="0.75rem" className="w-16" {...props} />
        </div>
      </div>

      {/* Bill To detail fields */}
      <div className="grid grid-cols-2 gap-4 border-t border-b border-border/80 py-4">
        <div className="space-y-1.5">
          <SkeletonLine height="0.625rem" className="w-12" {...props} />
          <SkeletonLine height="0.875rem" className="w-24" {...props} />
          <SkeletonLine height="0.75rem" className="w-32" {...props} />
        </div>
        <div className="space-y-1.5 text-right">
          <SkeletonLine
            height="0.625rem"
            className="w-12 text-right"
            {...props}
          />
          <SkeletonLine
            height="0.875rem"
            className="w-20 text-right"
            {...props}
          />
        </div>
      </div>

      {/* Invoice line items breakdown */}
      <div className="space-y-3">
        <div className="flex justify-between border-b border-border pb-1">
          <SkeletonLine height="0.625rem" className="w-24" {...props} />
          <SkeletonLine
            height="0.625rem"
            className="w-12 text-right"
            {...props}
          />
        </div>
        <div className="space-y-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex justify-between items-center">
              <SkeletonLine height="0.75rem" className="w-1/2" {...props} />
              <SkeletonLine
                height="0.75rem"
                className="w-12 text-right"
                {...props}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Subtotal summaries */}
      <div className="border-t border-border pt-4 space-y-2 w-1/2 ml-auto">
        <div className="flex justify-between">
          <SkeletonLine height="0.75rem" className="w-12" {...props} />
          <SkeletonLine
            height="0.75rem"
            className="w-12 text-right"
            {...props}
          />
        </div>
        <div className="flex justify-between border-t border-border/80 pt-2 font-bold">
          <SkeletonLine height="1rem" className="w-12" {...props} />
          <SkeletonLine height="1rem" className="w-16 text-right" {...props} />
        </div>
      </div>

      {/* Download action button */}
      <Skeleton className="h-10 w-full rounded-lg mt-2" {...props} />
    </div>
  ),
)
SkeletonInvoice.displayName = 'SkeletonInvoice'

// 9. Profile Settings Screen
export const SkeletonSettings = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'w-full border border-border rounded-xl bg-card overflow-hidden shadow-lg transition-all duration-300',
        props.variant === 'retro' &&
          'border-2 border-foreground bg-background rounded-none',
        props.variant === 'glass' &&
          'bg-white/[0.03] border-white/10 backdrop-blur-md',
        props.variant === 'glow' &&
          'border-primary/10 shadow-[0_0_25px_rgba(168,85,247,0.05)]',
        className,
      )}
    >
      {/* Banner */}
      <div className="h-28 bg-muted/40 relative">
        <div className="absolute -bottom-8 left-6">
          <SkeletonCircle
            size={72}
            className="border-4 border-card"
            {...props}
          />
        </div>
      </div>

      {/* Profile info fields */}
      <div className="pt-12 px-6 pb-6 space-y-6">
        <div className="space-y-2">
          <SkeletonLine height="1.25rem" className="w-1/3" {...props} />
          <SkeletonLine height="0.875rem" className="w-1/2" {...props} />
        </div>

        {/* Input fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <SkeletonLine height="0.75rem" className="w-16" {...props} />
            <Skeleton className="h-9 w-full rounded-md" {...props} />
          </div>
          <div className="space-y-1.5">
            <SkeletonLine height="0.75rem" className="w-16" {...props} />
            <Skeleton className="h-9 w-full rounded-md" {...props} />
          </div>
        </div>

        {/* Toggle rows */}
        <div className="space-y-4 border-t border-border pt-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1 flex-1">
              <SkeletonLine height="0.875rem" className="w-1/3" {...props} />
              <SkeletonLine height="0.75rem" className="w-1/2" {...props} />
            </div>
            <Skeleton className="h-6 w-11 rounded-full" {...props} />
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-1 flex-1">
              <SkeletonLine height="0.875rem" className="w-1/4" {...props} />
              <SkeletonLine height="0.75rem" className="w-2/3" {...props} />
            </div>
            <Skeleton className="h-6 w-11 rounded-full" {...props} />
          </div>
        </div>

        {/* Actions footer */}
        <div className="flex justify-end gap-3 border-t border-border pt-4">
          <Skeleton className="h-9 w-20 rounded-md" {...props} />
          <Skeleton className="h-9 w-24 rounded-md" {...props} />
        </div>
      </div>
    </div>
  ),
)
SkeletonSettings.displayName = 'SkeletonSettings'

// 10. Sliding Notifications Drawer Center
export const SkeletonNotifications = React.forwardRef<
  HTMLDivElement,
  SkeletonProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-full max-w-sm border border-border rounded-2xl bg-card overflow-hidden shadow-xl flex flex-col h-[400px] transition-all duration-300',
      props.variant === 'retro' &&
        'border-2 border-foreground bg-background rounded-none',
      props.variant === 'glass' &&
        'bg-white/[0.03] border-white/10 backdrop-blur-md',
      props.variant === 'glow' &&
        'border-primary/20 shadow-[0_0_25px_rgba(168,85,247,0.1)]',
      className,
    )}
  >
    {/* Title Header */}
    <div className="p-4 border-b border-border flex items-center justify-between bg-muted/10 shrink-0">
      <div className="flex items-center space-x-2">
        <SkeletonLine height="1.125rem" className="w-24" {...props} />
        <SkeletonCircle size={18} className="bg-primary/20" {...props} />
      </div>
      <SkeletonLine height="0.75rem" className="w-14" {...props} />
    </div>

    {/* Alert list items */}
    <div className="flex-1 p-4 space-y-4 overflow-y-auto">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex space-x-3 items-start pb-4 border-b border-border/50 last:border-0 last:pb-0"
        >
          <SkeletonCircle size={32} className="mt-0.5" {...props} />
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex justify-between items-center gap-2">
              <SkeletonLine height="0.875rem" className="w-2/3" {...props} />
              <SkeletonLine
                height="0.625rem"
                className="w-8 text-right"
                {...props}
              />
            </div>
            <SkeletonLine height="0.75rem" className="w-full" {...props} />
            <SkeletonLine height="0.75rem" className="w-4/5" {...props} />
          </div>
        </div>
      ))}
    </div>

    {/* Actions tray footer */}
    <div className="p-3 border-t border-border bg-muted/10 flex justify-center shrink-0">
      <SkeletonLine height="0.875rem" className="w-28 text-center" {...props} />
    </div>
  </div>
))
SkeletonNotifications.displayName = 'SkeletonNotifications'

export { Skeleton }
