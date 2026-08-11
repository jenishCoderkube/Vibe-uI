'use client'

import React from 'react'
import { AspectRatio, Button } from 'vibe-ui'
import { Star, Play, Clock, ArrowRight, Eye, Heart } from 'lucide-react'

// Helper card wrapper to standardise demo frames
function DemoCard({
  title,
  desc,
  children,
}: {
  title: string
  desc: string
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-[360px] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-md text-left select-none">
      <div className="mb-3 space-y-1">
        <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider">
          {title}
        </h4>
        <p className="text-[10px] text-muted-foreground">{desc}</p>
      </div>
      {children}
    </div>
  )
}

// 0. Cinematic 16:9 for top preview
export function AspectRatioCinematic() {
  return (
    <DemoCard
      title="16:9 Cinematic Video"
      desc="Standard horizontal widescreen presentation"
    >
      <AspectRatio
        ratio={16 / 9}
        className="rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 font-mono text-[10px] font-bold"
      >
        CINEMATIC (16:9)
      </AspectRatio>
    </DemoCard>
  )
}

// 1. Premium Product Listing Card (Aspect Ratio 4:3)
export function AspectRatioProductCard() {
  return (
    <div className="w-full max-w-[360px] group/card overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left select-none">
      <div className="relative overflow-hidden">
        <AspectRatio
          ratio={4 / 3}
          className="bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center border-b border-zinc-100 dark:border-zinc-900"
        >
          <div className="absolute inset-0 bg-black/[0.02] dark:bg-black/[0.1] transition-opacity duration-300 group-hover/card:bg-black/[0.05] dark:group-hover/card:bg-black/[0.15]" />

          {/* Abstract floating design element to look like a premium item */}
          <div className="relative h-20 w-20 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-md transform group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-300">
            <span className="!text-zinc-900 dark:!text-zinc-50 font-bold tracking-tight text-xs uppercase font-mono">
              VibeBuds
            </span>
          </div>

          {/* Badges and overlays */}
          <div className="absolute top-3 left-3 bg-zinc-900/90 dark:bg-zinc-50/90 !text-white dark:!text-zinc-900 font-semibold text-[9px] tracking-wider uppercase px-2 py-0.75 rounded-full shadow-sm border border-black/5 dark:border-white/10">
            New Edition
          </div>
          <button className="absolute top-3 right-3 h-7 w-7 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md flex items-center justify-center text-zinc-400 dark:text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors border border-zinc-200 dark:border-zinc-800 group/heart">
            <Heart className="h-3.5 w-3.5 fill-none group-hover/heart:fill-red-500 group-hover/heart:text-red-500 dark:group-hover/heart:text-red-400 transition-colors" />
          </button>
        </AspectRatio>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold !text-indigo-600 dark:!text-indigo-400 uppercase tracking-wider">
            Audio Pro
          </span>
          <div className="flex items-center gap-1 text-[10px] text-amber-500 font-semibold bg-amber-500/10 px-1.5 py-0.5 rounded-md">
            <Star className="h-3 w-3 fill-current" />
            <span>4.9</span>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            VibeBuds Solo ANC
          </h4>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-normal">
            Active Noise Cancellation with premium dual custom drivers.
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-900 mt-2">
          <span className="text-sm font-black !text-zinc-900 dark:!text-zinc-50">
            $149.00
          </span>
          <Button size="sm" className="h-7 text-[10px] px-3 font-bold">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

// 2. SaaS Blog & Feature Card Preview (Aspect Ratio 16:9)
export function AspectRatioBlogCard() {
  return (
    <div className="w-full max-w-[360px] group/card overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md hover:shadow-xl transition-all duration-300 text-left select-none">
      <div className="relative overflow-hidden">
        <AspectRatio
          ratio={16 / 9}
          className="bg-zinc-100 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800/80 flex items-center justify-center"
        >
          {/* Subtle mesh background grid details */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
          <div className="absolute inset-0 bg-black/[0.01] dark:bg-black/[0.05] transition-opacity duration-300 group-hover/card:bg-black/[0.03] dark:group-hover/card:bg-black/[0.1]" />

          {/* Centered play mockup or abstract overlay */}
          <div className="h-10 w-10 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center !text-zinc-900 dark:!text-zinc-50 shadow-md transform group-hover/card:scale-110 transition-transform duration-300">
            <Play className="h-4.5 w-4.5 fill-current !text-zinc-900 dark:!text-zinc-50 translate-x-0.5" />
          </div>

          <div className="absolute bottom-3 right-3 bg-zinc-900/90 dark:bg-zinc-50/90 !text-white dark:!text-zinc-900 font-mono text-[9px] px-2 py-0.5 rounded-md font-semibold tracking-wider border border-black/5 dark:border-white/10">
            12:45
          </div>
        </AspectRatio>
      </div>
      <div className="p-4 space-y-2.5">
        <div className="flex items-center gap-2 text-[10px] text-zinc-500 dark:text-zinc-400">
          <span className="font-semibold !text-emerald-600 dark:!text-emerald-400 uppercase tracking-wider">
            Design Systems
          </span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>5 min read</span>
          </div>
        </div>
        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-snug group-hover/card:!text-emerald-600 dark:group-hover/card:!text-emerald-400 transition-colors">
          Building High-Fidelity UI Components with React & Tailwind CSS
        </h4>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal line-clamp-2">
          Discover advanced methods for handling theme text colors,
          glassmorphism overlays, and component lifecycle events cleanly.
        </p>
        <div className="flex items-center justify-between pt-1 mt-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-zinc-100 dark:bg-zinc-900 !text-zinc-700 dark:!text-zinc-300 flex items-center justify-center font-bold text-[10px] border border-zinc-200 dark:border-zinc-800">
              AR
            </div>
            <span className="text-[10px] font-semibold text-zinc-800 dark:text-zinc-200">
              Alex Rivera
            </span>
          </div>
          <div className="flex items-center gap-0.5 text-[10px] font-bold text-zinc-900 dark:text-zinc-50 group-hover/card:translate-x-0.5 transition-transform">
            <span>Read Post</span>
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

// 3. User Dashboard Profile Cover Header (Aspect Ratio 21:9)
export function AspectRatioProfileCover() {
  return (
    <div className="w-full max-w-[500px] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md text-left select-none">
      <div className="relative">
        <AspectRatio
          ratio={21 / 9}
          className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800"
        >
          {/* Absolute banner design */}
          <div className="absolute inset-0 bg-black/[0.01] dark:bg-black/[0.05]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.02),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02),transparent_60%)]" />
          <div className="absolute top-3 right-3 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 !text-zinc-900 dark:!text-zinc-50 font-mono text-[9px] px-2 py-0.75 rounded-full font-bold flex items-center gap-1 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Workspace Active</span>
          </div>
        </AspectRatio>

        {/* Protruding Avatar */}
        <div className="absolute -bottom-6 left-6">
          <div className="h-14 w-14 rounded-full border-4 border-white dark:border-zinc-950 bg-zinc-100 dark:bg-zinc-900 !text-zinc-900 dark:!text-zinc-50 font-black text-base flex items-center justify-center shadow-md border-zinc-200 dark:border-zinc-800">
            JD
          </div>
        </div>
      </div>
      <div className="pt-8 p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-0.5">
            <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Jane Developer
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Principal UI Engineer at Vibe UI
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-[10px] px-3 font-semibold"
          >
            Configure Profile
          </Button>
        </div>
      </div>
    </div>
  )
}
