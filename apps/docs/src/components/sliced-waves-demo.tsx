'use client'

import React from 'react'
import { SlicedWaves } from 'vibe-ui'

// 1. Basic Demo with Centered Glass Card (Pink / Purple theme)
export function SlicedWavesBasicDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Sliced Waves */}
      <div className="absolute inset-0 z-0">
        <SlicedWaves
          color1="#FF9FFC"
          color2="#5227FF"
          color3="#B497CF"
          columns={12}
          rows={6}
          barThickness={0.12}
          speed={0.35}
          travel={0.8}
          waveSpread={1.0}
          rowOffset={1.2}
          softness={0.06}
          glow={0.2}
          brightness={1.0}
          contrast={1.1}
          opacity={0.65}
          orientation="horizontal"
          alternate={true}
          mouseInteraction={true}
          mouseStrength={0.8}
          mouseRadius={0.4}
        />
      </div>

      {/* Glassmorphic Overlay Card */}
      <div className="relative z-10 max-w-sm p-6 mx-4 rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-xl shadow-2xl text-center select-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] font-semibold uppercase tracking-wider mb-4">
          ✨ Sliced Waves Flow
        </div>
        <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
          Graphic Slice Wave
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          Beautiful procedural grid divisions swaying as wave patterns on the GPU. Supports custom colors, thickness, and mouse warp fields.
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

// 2. Cyberpunk Neon Orange Vertical Matrix
export function SlicedWavesCyberDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950 font-mono">
      {/* Background Sliced Waves */}
      <div className="absolute inset-0 z-0">
        <SlicedWaves
          color1="#f97316"
          color2="#ec4899"
          color3="#ff007f"
          columns={20}
          rows={1}
          barThickness={0.15}
          speed={0.6}
          travel={0.9}
          waveSpread={1.5}
          rowOffset={0.5}
          softness={0.03}
          glow={0.4}
          brightness={0.9}
          contrast={1.2}
          opacity={0.7}
          orientation="vertical"
          alternate={false}
          mouseInteraction={true}
          mouseStrength={1.2}
          mouseRadius={0.3}
          grain={true}
          grainIntensity={0.08}
        />
      </div>

      {/* Cyber HUD Terminal */}
      <div className="relative z-10 max-w-sm p-5 mx-4 border border-orange-500/40 bg-zinc-950/80 shadow-[0_0_20px_rgba(249,115,22,0.15)] text-left relative overflow-hidden select-none">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-orange-400" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-orange-400" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-orange-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-orange-400" />

        <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
          SLICE_GRID_HUD
        </div>
        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1.5">
          VERTICAL_BAR_FLUX
        </h4>
        <div className="w-full h-[1px] bg-orange-500/20 my-2" />
        <p className="text-[11px] text-zinc-400 leading-normal mb-3">
          Procedural vertical bars modulated dynamically on WebGL shader coordinates. Render cycles synchronized.
        </p>
        <button className="w-full py-1.5 border border-orange-400/55 bg-orange-950/30 text-orange-300 text-xs font-semibold rounded hover:bg-orange-500/20 hover:text-white transition-all cursor-pointer text-center">
          REBOOT_GRID
        </button>
      </div>
    </div>
  )
}

// 3. Ocean Sea-Green Calm Ambient Demo
export function SlicedWavesOceanDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Sliced Waves */}
      <div className="absolute inset-0 z-0">
        <SlicedWaves
          color1="#14b8a6"
          color2="#06b6d4"
          color3="#115e59"
          columns={8}
          rows={12}
          barThickness={0.08}
          speed={0.15}
          travel={0.5}
          waveSpread={0.4}
          rowOffset={2.0}
          softness={0.08}
          glow={0.1}
          brightness={0.8}
          contrast={0.9}
          opacity={0.5}
          orientation="horizontal"
          alternate={true}
          mouseInteraction={true}
          mouseStrength={0.5}
          mouseRadius={0.5}
        />
      </div>

      {/* Warm Ambient Content */}
      <div className="relative z-10 max-w-sm p-6 mx-4 rounded-xl border border-teal-500/10 bg-zinc-950/50 backdrop-blur-md text-center select-none">
        <span className="text-[10px] text-teal-400 uppercase font-bold tracking-widest">
          Oceanic Flow
        </span>
        <h4 className="text-lg font-black text-teal-50 tracking-tight mt-1 mb-2">
          Calm Sea Grid
        </h4>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          Slow, ambient horizontal grids overlapping in sea green and cyan hues, producing an elegant underwater light shimmer backdrop.
        </p>
        <button className="px-4 py-1.5 border border-teal-500/35 bg-teal-500/10 text-teal-300 text-xs font-bold rounded-full hover:bg-teal-500/25 hover:text-white transition-all cursor-pointer">
          Calibrate Fluid
        </button>
      </div>
    </div>
  )
}
