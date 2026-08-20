'use client'

import React from 'react'
import { Lightfall } from 'vibe-ui'

// 1. Basic Demo with Centered Glass Card (Classic Aurora theme)
export function LightfallBasicDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950 rounded-xl">
      {/* Background Lightfall */}
      <div className="absolute inset-0 z-0">
        <Lightfall
          colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
          backgroundColor="#080515"
          speed={0.4}
          streakCount={3}
          streakWidth={1.5}
          streakLength={1.2}
          glow={1.2}
          density={0.5}
          twinkle={1.0}
          zoom={3.5}
          backgroundGlow={0.6}
          opacity={0.8}
          mouseInteraction={true}
          mouseStrength={0.6}
          mouseRadius={1.2}
        />
      </div>

      {/* Glassmorphic Overlay Card */}
      <div className="relative z-10 max-w-sm p-6 mx-4 rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-xl shadow-2xl text-center select-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] font-semibold uppercase tracking-wider mb-4">
          ✨ Aurora Fall
        </div>
        <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
          Cosmic Aurora
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          Procedural particles flowing down the screen in high performance WebGL. Interacts dynamically with mouse movements.
        </p>
        <div className="flex gap-2 justify-center">
          <button className="px-3.5 py-1.5 bg-white text-zinc-950 text-xs font-bold rounded-lg hover:bg-zinc-200 transition-all cursor-pointer">
            Explore Demo
          </button>
          <button className="px-3.5 py-1.5 border border-white/20 bg-white/5 text-white text-xs font-medium rounded-lg hover:bg-white/10 transition-all cursor-pointer">
            Read Docs
          </button>
        </div>
      </div>
    </div>
  )
}

// 2. Cyberpunk Neon Flow
export function LightfallNeonDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950 rounded-xl">
      <div className="absolute inset-0 z-0">
        <Lightfall
          colors={['#FF2E93', '#FF8A00', '#00F0FF', '#00FF66']}
          backgroundColor="#02000a"
          speed={0.8}
          streakCount={6}
          streakWidth={2.0}
          streakLength={1.5}
          glow={1.8}
          density={0.7}
          twinkle={0.8}
          zoom={2.5}
          backgroundGlow={1.0}
          opacity={0.9}
          mouseInteraction={true}
          mouseStrength={1.0}
          mouseRadius={1.5}
        />
      </div>

      <div className="relative z-10 max-w-sm p-6 mx-4 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl shadow-2xl text-center select-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-[10px] font-semibold uppercase tracking-wider mb-4">
          ⚡ Cyber Fall
        </div>
        <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
          Neon Cyberpunk
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          Energetic falling lights mimicking code rain inside a virtual matrix environment. Fast speeds and highly reactive.
        </p>
      </div>
    </div>
  )
}

// 3. Sunset Ember Flow
export function LightfallSunsetDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950 rounded-xl">
      <div className="absolute inset-0 z-0">
        <Lightfall
          colors={['#FF4B2B', '#FF416C', '#8A2387']}
          backgroundColor="#120108"
          speed={0.3}
          streakCount={4}
          streakWidth={1.2}
          streakLength={0.9}
          glow={1.4}
          density={0.4}
          twinkle={1.2}
          zoom={4.5}
          backgroundGlow={0.5}
          opacity={0.75}
          mouseInteraction={true}
          mouseStrength={0.5}
          mouseRadius={1.0}
        />
      </div>

      <div className="relative z-10 max-w-sm p-6 mx-4 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl shadow-2xl text-center select-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-[10px] font-semibold uppercase tracking-wider mb-4">
          🌅 Warm Sunset
        </div>
        <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
          Golden Embers
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          Warm embers cascading down slowly to create a relaxed, cozy fireplace glow. Ideal for tranquil light mode combinations.
        </p>
      </div>
    </div>
  )
}
