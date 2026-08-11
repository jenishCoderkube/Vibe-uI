'use client'

import React, { useState } from 'react'
import { TextGlitch } from 'vibe-ui'

// 1. Basic Text Glitch
export function TextGlitchBasicDemo() {
  return (
    <div className="w-full flex items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5 font-mono">
      <TextGlitch
        text="SYSTEM GLITCH"
        className="text-3xl text-white uppercase tracking-widest"
      />
    </div>
  )
}

// 2. Speed Variants
export function TextGlitchSpeedDemo() {
  return (
    <div className="w-full flex flex-col gap-6 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5 font-mono">
      <div className="flex flex-col gap-1 items-center">
        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
          Slow
        </span>
        <TextGlitch
          text="SLOW FREQUENCY"
          speed="slow"
          className="text-lg text-rose-500"
        />
      </div>
      <div className="flex flex-col gap-1 items-center">
        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
          Normal
        </span>
        <TextGlitch
          text="NORMAL MODE"
          speed="normal"
          className="text-lg text-cyan-400"
        />
      </div>
      <div className="flex flex-col gap-1 items-center">
        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
          Fast
        </span>
        <TextGlitch
          text="OVERCLOCK FAST"
          speed="fast"
          className="text-lg text-emerald-400"
        />
      </div>
    </div>
  )
}

// 3. Cyberpunk Header Title Demo
export function TextGlitchHeaderDemo() {
  const [active, setActive] = useState(true)

  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center p-8 bg-zinc-950/40 rounded-xl border border-white/10 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_50%,rgba(16,185,129,0)_50%)] bg-[length:100%_6px] pointer-events-none" />
      <TextGlitch
        text="DATABASE CORRUPTED"
        active={active}
        className="text-2xl text-emerald-400 border-b border-emerald-500/20 pb-2 mb-2 w-full text-center"
      />
      <button
        onClick={() => setActive(!active)}
        className="px-3 py-1.5 border border-emerald-500/40 bg-emerald-950/20 text-emerald-400 text-xs rounded hover:bg-emerald-500/20 transition-all cursor-pointer"
      >
        {active ? 'Disable Glitch' : 'Enable Glitch'}
      </button>
    </div>
  )
}
