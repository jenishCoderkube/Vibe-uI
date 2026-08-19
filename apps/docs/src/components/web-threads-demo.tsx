'use client'

import React from 'react'
import { WebThreads } from 'vibe-ui'

// 1. Basic Demo with Centered Glass Card (Purple / Pink theme)
export function WebThreadsBasicDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Web Threads */}
      <div className="absolute inset-0 z-0">
        <WebThreads
          color1="#8b5cf6"
          color2="#ec4899"
          color3="#ffffff"
          speed={0.25}
          threadCount={8}
          frequency={4.5}
          spread={0.2}
          position={0.5}
          fanMode="center"
          glow={0.03}
          thickness={1.2}
          brightness={0.8}
          shimmer={true}
          mouseInteraction={true}
          mouseStrength={0.4}
        />
      </div>

      {/* Glassmorphic Overlay Card */}
      <div className="relative z-10 max-w-sm p-6 mx-4 rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-xl shadow-2xl text-center select-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-[10px] font-semibold uppercase tracking-wider mb-4">
          ✨ Web Threads Glow
        </div>
        <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
          Fluid Web Wave
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          A customizable multi-thread WebGL strand waving gently in 3D space with high performance and interactive cursor tracking.
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

// 2. Cyberpunk Matrix Green Terminal
export function WebThreadsMatrixDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950 font-mono">
      {/* Background Web Threads */}
      <div className="absolute inset-0 z-0">
        <WebThreads
          color1="#10b981"
          color2="#06b6d4"
          color3="#ffffff"
          speed={0.4}
          threadCount={6}
          frequency={7.0}
          spread={0.15}
          position={0.4}
          fanMode="left"
          glow={0.04}
          thickness={1.5}
          brightness={0.7}
          shimmer={false}
          grain={true}
          grainIntensity={0.08}
          mouseInteraction={true}
          mouseStrength={0.5}
        />
      </div>

      {/* Cyber HUD Terminal */}
      <div className="relative z-10 max-w-sm p-5 mx-4 border border-emerald-500/40 bg-zinc-950/80 shadow-[0_0_20px_rgba(16,185,129,0.15)] text-left relative overflow-hidden select-none">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-emerald-400" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-emerald-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-emerald-400" />

        <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          WAVEFORM_MONITOR
        </div>
        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1.5">
          THREAD_NODE_FLUX
        </h4>
        <div className="w-full h-[1px] bg-emerald-500/20 my-2" />
        <p className="text-[11px] text-zinc-400 leading-normal mb-3">
          Waving strands simulated on GPU. Frequency range set to 7.0Hz. Mouse position inputs are mapped to pinch anchors dynamically.
        </p>
        <button className="w-full py-1.5 border border-emerald-400/55 bg-emerald-950/30 text-emerald-300 text-xs font-semibold rounded hover:bg-emerald-500/20 hover:text-white transition-all cursor-pointer text-center">
          RESET_WAVEFORM
        </button>
      </div>
    </div>
  )
}

// 3. Flame / Golden Sunset Demo
export function WebThreadsFlameDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Web Threads */}
      <div className="absolute inset-0 z-0">
        <WebThreads
          color1="#f97316"
          color2="#ef4444"
          color3="#facc15"
          speed={0.12}
          threadCount={10}
          frequency={3.0}
          spread={0.25}
          position={0.6}
          fanMode="right"
          glow={0.02}
          thickness={0.8}
          brightness={0.9}
          shimmer={true}
          mirror={true}
          mouseInteraction={true}
          mouseStrength={0.3}
        />
      </div>

      {/* Warm Ambient Content */}
      <div className="relative z-10 max-w-sm p-6 mx-4 rounded-xl border border-orange-500/10 bg-zinc-950/50 backdrop-blur-md text-center select-none">
        <span className="text-[10px] text-orange-400 uppercase font-bold tracking-widest">
          Thermal Glow
        </span>
        <h4 className="text-lg font-black text-orange-50 tracking-tight mt-1 mb-2">
          Fire Strand Sway
        </h4>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          Densely grouped, thin strands pulsing with deep orange and fire red hues, creating a cozy and organic glowing ambient backdrop.
        </p>
        <button className="px-4 py-1.5 border border-orange-500/35 bg-orange-500/10 text-orange-300 text-xs font-bold rounded-full hover:bg-orange-500/25 hover:text-white transition-all cursor-pointer">
          Sway Speed
        </button>
      </div>
    </div>
  )
}
