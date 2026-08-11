'use client'

import React, { useState } from 'react'
import { TypingAnimation } from 'vibe-ui'

// 1. Basic Typing Animation
export function TypingAnimationBasicDemo() {
  return (
    <div className="w-full flex items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5 font-sans">
      <TypingAnimation className="text-3xl text-white font-bold tracking-tight">
        Vibe UI text animation.
      </TypingAnimation>
    </div>
  )
}

// 2. Loop Multiple Words
export function TypingAnimationWordsDemo() {
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5 font-sans">
      <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-2">
        Dynamic Loop
      </span>
      <div className="text-xl text-primary font-semibold">
        We build{' '}
        <TypingAnimation
          words={[
            'accessible components',
            'modern animations',
            'beautiful layouts',
          ]}
          loop={true}
          delay={200}
          pauseDelay={1500}
          className="text-white underline decoration-primary decoration-2 underline-offset-4"
        />
      </div>
    </div>
  )
}

// 3. Custom Speed & Cursor Style
export function TypingAnimationCustomDemo() {
  const [key, setKey] = useState(0)

  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center p-8 bg-zinc-950/40 rounded-xl border border-white/10 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_50%,rgba(168,85,247,0)_50%)] bg-[length:100%_6px] pointer-events-none" />
      <TypingAnimation
        key={key}
        duration={50}
        cursorStyle="block"
        className="text-lg text-purple-400 border-b border-purple-500/20 pb-2 mb-2 w-full text-center"
      >
        Initializing secure node connection...
      </TypingAnimation>
      <button
        onClick={() => setKey((prev) => prev + 1)}
        className="px-3 py-1.5 border border-purple-500/40 bg-purple-950/20 text-purple-400 text-xs rounded hover:bg-purple-500/20 transition-all cursor-pointer"
      >
        Restart Terminal Line
      </button>
    </div>
  )
}
