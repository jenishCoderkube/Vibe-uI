'use client'

import React, { useState } from 'react'
import { InfiniteScroll } from 'vibe-ui'
import { Loader2, ArrowRight, Star, Heart } from 'lucide-react'
import { cn } from '../lib/utils'

// Static premium Unsplash image placeholders
const PREMIUM_GALLERY = [
  {
    id: 1,
    title: 'Ethereal Whispers',
    category: 'Digital Art',
    author: 'Elena Rostova',
    likes: '2.4k',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Chroma Shift',
    category: '3D Render',
    author: 'Marcus Aurelius',
    likes: '1.8k',
    image:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Organic Synapse',
    category: 'Generative',
    author: 'Sora Takahashi',
    likes: '3.1k',
    image:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Neon Labyrinth',
    category: 'Cyberpunk',
    author: 'Zane Matrix',
    likes: '942',
    image:
      'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Liquid Gold Flow',
    category: 'Abstract',
    author: 'Aria Sterling',
    likes: '4.3k',
    image:
      'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Shattered Prisms',
    category: 'Fine Art',
    author: 'Viktor Vane',
    likes: '1.2k',
    image:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 7,
    title: 'Cobalt Dreamscape',
    category: 'Surrealism',
    author: 'Nadia Petrov',
    likes: '2.7k',
    image:
      'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 8,
    title: 'Primal Spectrum',
    category: 'Experimental',
    author: 'Kai Rivers',
    likes: '870',
    image:
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&auto=format&fit=crop&q=80',
  },
]

export function InfiniteScrollCardDemo() {
  const [layout, setLayout] = useState<
    'vertical-pairs' | 'horizontal-row' | 'premium-gallery'
  >('vertical-pairs')

  // Data sources for each layout state
  const [verticalItems, setVerticalItems] = useState(
    PREMIUM_GALLERY.slice(0, 4),
  )
  const [verticalLoading, setVerticalLoading] = useState(false)
  const [verticalHasMore, setVerticalHasMore] = useState(true)

  const [horizontalItems, setHorizontalItems] = useState(
    PREMIUM_GALLERY.slice(0, 3),
  )
  const [horizontalLoading, setHorizontalLoading] = useState(false)
  const [horizontalHasMore, setHorizontalHasMore] = useState(true)

  const [galleryItems, setGalleryItems] = useState(PREMIUM_GALLERY.slice(0, 3))
  const [galleryLoading, setGalleryLoading] = useState(false)
  const [galleryHasMore, setGalleryHasMore] = useState(true)

  // Handlers for dynamic data loading
  const loadMoreVertical = () => {
    setVerticalLoading(true)
    setTimeout(() => {
      const nextBatch = PREMIUM_GALLERY.slice(
        verticalItems.length,
        verticalItems.length + 2,
      )
      setVerticalItems((prev) => [...prev, ...nextBatch])
      setVerticalLoading(false)
      if (verticalItems.length + nextBatch.length >= PREMIUM_GALLERY.length) {
        setVerticalHasMore(false)
      }
    }, 1200)
  }

  const loadMoreHorizontal = () => {
    setHorizontalLoading(true)
    setTimeout(() => {
      const nextBatch = PREMIUM_GALLERY.slice(
        horizontalItems.length,
        horizontalItems.length + 2,
      )
      setHorizontalItems((prev) => [...prev, ...nextBatch])
      setHorizontalLoading(false)
      if (horizontalItems.length + nextBatch.length >= PREMIUM_GALLERY.length) {
        setHorizontalHasMore(false)
      }
    }, 1200)
  }

  const loadMoreGallery = () => {
    setGalleryLoading(true)
    setTimeout(() => {
      const nextBatch = PREMIUM_GALLERY.slice(
        galleryItems.length,
        galleryItems.length + 3,
      )
      setGalleryItems((prev) => [...prev, ...nextBatch])
      setGalleryLoading(false)
      if (galleryItems.length + nextBatch.length >= PREMIUM_GALLERY.length) {
        setGalleryHasMore(false)
      }
    }, 1200)
  }

  const resetAll = () => {
    setVerticalItems(PREMIUM_GALLERY.slice(0, 4))
    setVerticalHasMore(true)
    setHorizontalItems(PREMIUM_GALLERY.slice(0, 3))
    setHorizontalHasMore(true)
    setGalleryItems(PREMIUM_GALLERY.slice(0, 3))
    setGalleryHasMore(true)
  }

  const HeartIcon = Heart as any
  const StarIcon = Star as any
  const SpinnerIcon = Loader2 as any

  return (
    <div className="w-full space-y-6 max-w-4xl mx-auto p-1 select-none">
      {/* Layout Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex gap-2">
          {(
            ['vertical-pairs', 'horizontal-row', 'premium-gallery'] as const
          ).map((type) => (
            <button
              key={type}
              onClick={() => setLayout(type)}
              className={cn(
                'px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 capitalize',
                layout === type
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white',
              )}
            >
              {type.replace('-', ' ')}
            </button>
          ))}
        </div>
        <button
          onClick={resetAll}
          className="text-xs text-purple-400 hover:text-purple-300 font-mono"
        >
          [ Reset Demos ]
        </button>
      </div>

      {/* 1. Vertical Card Pairs */}
      {layout === 'vertical-pairs' && (
        <div className="space-y-4">
          <div className="text-left space-y-1">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              Vertical Columns{' '}
              <span className="text-xs text-purple-400 font-mono border border-purple-400/20 px-2 py-0.5 rounded-full">
                2-Column Pairs
              </span>
            </h3>
            <p className="text-xs text-muted-foreground">
              Scroll down to fetch and load more card pairs. Features
              glassmorphic neon containers with hover tilt effects.
            </p>
          </div>

          <div className="h-[400px] overflow-y-auto rounded-xl border border-white/10 bg-zinc-950/40 p-4 custom-scrollbar">
            <InfiniteScroll
              hasMore={verticalHasMore}
              isLoading={verticalLoading}
              loadMore={loadMoreVertical}
              rootMargin="50px"
              loadingTrigger={
                <div className="flex items-center gap-2 text-xs text-purple-400 font-mono">
                  <SpinnerIcon className="h-4 w-4 animate-spin" />
                  <span>FETCHING DYNAMIC PAIR...</span>
                </div>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {verticalItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:-translate-y-1"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-md text-[10px] text-purple-300 font-mono font-medium">
                        {item.category}
                      </div>
                      <button className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 p-1.5 rounded-full text-muted-foreground hover:text-red-500 transition-colors">
                        <HeartIcon className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="p-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-yellow-400">
                          <StarIcon className="h-3.5 w-3.5 fill-current" />
                          <span>4.9</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-[11px] text-muted-foreground border-t border-white/5 pt-2">
                        <span>
                          by{' '}
                          <span className="text-foreground/80 font-medium">
                            {item.author}
                          </span>
                        </span>
                        <span className="font-mono text-purple-400">
                          {item.likes} likes
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>

            {!verticalHasMore && (
              <div className="text-center py-6 text-xs text-muted-foreground font-mono">
                ✓ All items loaded successfully
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Horizontal Infinite Row */}
      {layout === 'horizontal-row' && (
        <div className="space-y-4">
          <div className="text-left space-y-1">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              Horizontal Row{' '}
              <span className="text-xs text-emerald-400 font-mono border border-emerald-400/20 px-2 py-0.5 rounded-full">
                Sideways Loader
              </span>
            </h3>
            <p className="text-xs text-muted-foreground">
              Scroll horizontally to the right to fetch and load more items.
              Perfect for dashboard panels or image grids.
            </p>
          </div>

          <div className="h-[280px] overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/40 p-4 flex items-center custom-scrollbar">
            <InfiniteScroll
              hasMore={horizontalHasMore}
              isLoading={horizontalLoading}
              loadMore={loadMoreHorizontal}
              direction="horizontal"
              showScrollButtons={true}
              rootMargin="100px"
              loadingTrigger={
                <div className="flex flex-col items-center justify-center gap-2 text-xs text-emerald-400 font-mono select-none px-4">
                  <SpinnerIcon className="h-4 w-4 animate-spin" />
                  <span>MORE DATA...</span>
                </div>
              }
            >
              {horizontalItems.map((item) => (
                <div
                  key={item.id}
                  className="w-[220px] shrink-0 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md p-3 space-y-3 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                >
                  <div className="h-[120px] overflow-hidden rounded-lg relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-2 left-2 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/20 px-1.5 py-0.5 rounded text-[9px] text-emerald-300 font-mono">
                      {item.category}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-xs text-foreground truncate">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-muted-foreground">
                      Author:{' '}
                      <span className="text-muted-foreground">
                        {item.author}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-white/5 text-muted-foreground">
                    <span className="flex items-center gap-0.5">
                      <HeartIcon className="h-3 w-3 text-red-500 fill-current" />{' '}
                      {item.likes}
                    </span>
                    <button className="text-emerald-400 hover:text-emerald-300 font-mono text-[9px] flex items-center gap-0.5">
                      View <ArrowRight className="h-2.5 w-2.5" />
                    </button>
                  </div>
                </div>
              ))}
            </InfiniteScroll>

            {!horizontalHasMore && (
              <div className="flex items-center justify-center px-8 border-l border-white/10 h-full text-xs text-muted-foreground font-mono whitespace-nowrap">
                End of Stream
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. Premium Gallery Grid */}
      {layout === 'premium-gallery' && (
        <div className="space-y-4">
          <div className="text-left space-y-1">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              Premium Gallery{' '}
              <span className="text-xs text-cyan-400 font-mono border border-cyan-400/20 px-2 py-0.5 rounded-full">
                3-Column Grid
              </span>
            </h3>
            <p className="text-xs text-muted-foreground">
              A high-end 3-column media feed. Items fade and expand smoothly,
              demonstrating a clean portfolio style.
            </p>
          </div>

          <div className="h-[400px] overflow-y-auto rounded-xl border border-white/10 bg-zinc-950/40 p-4 custom-scrollbar">
            <InfiniteScroll
              hasMore={galleryHasMore}
              isLoading={galleryLoading}
              loadMore={loadMoreGallery}
              rootMargin="50px"
              loadingTrigger={
                <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono py-4">
                  <SpinnerIcon className="h-4 w-4 animate-spin" />
                  <span>SYNCING STREAM...</span>
                </div>
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-xl border border-cyan-500/10 bg-zinc-950 p-2.5 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)]"
                  >
                    <div className="aspect-square overflow-hidden rounded-lg relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end">
                        <span className="text-[10px] text-cyan-400 font-mono">
                          {item.category}
                        </span>
                        <h4 className="font-bold text-foreground text-xs mt-0.5">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>

            {!galleryHasMore && (
              <div className="text-center py-6 text-xs text-muted-foreground font-mono">
                ✓ Gallery synchronized. All pieces loaded.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
