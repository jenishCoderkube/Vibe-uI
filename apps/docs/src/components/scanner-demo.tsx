'use client'

import React from 'react'
import { Scanner } from 'vibe-ui'

// 1. Basic Cyber Blue Scan
export function ScannerBasicDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Scanner */}
      <div className="absolute inset-0 z-0">
        <Scanner
          color1="#00f3ff"
          color2="#5227FF"
          color3="#FFFFFF"
          speed={0.5}
          sweepSpeed={0.25}
          sweepWidth={1.6}
          sweepFalloff={6}
          scale={1.5}
          frequency={2}
          ripple={0.22}
          bandDensity={11}
          lineSharpness={5.5}
          glow={0.22}
          scanDirection="vertical"
          colorSpread={0.7}
          brightness={1.0}
          contrast={1.15}
          softness={1.4}
          vignette={0.45}
          scanline={true}
          mouseInteraction={true}
        />
      </div>

      {/* Futuristic Dashboard Card */}
      <div className="relative z-10 max-w-sm p-6 mx-4 rounded-2xl border border-cyan-500/20 bg-zinc-950/50 backdrop-blur-xl shadow-2xl text-center select-none font-mono">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[10px] font-semibold uppercase tracking-wider mb-4">
          📡 SYSTEM SCAN ACTIVE
        </div>
        <h3 className="text-lg font-bold text-white tracking-widest uppercase mb-2">
          Grid Sector #02
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          Hardware-accelerated coordinate radar scanning. Generates procedural sweep bands with dynamic color shifts.
        </p>
        <div className="flex gap-2 justify-center">
          <button className="px-3.5 py-1.5 bg-cyan-400 text-zinc-950 text-xs font-bold rounded hover:bg-cyan-300 transition-all cursor-pointer">
            INITIALIZE
          </button>
          <button className="px-3.5 py-1.5 border border-cyan-500/20 bg-white/5 text-white text-xs font-medium rounded hover:bg-white/10 transition-all cursor-pointer">
            BYPASS
          </button>
        </div>
      </div>
    </div>
  )
}

// 2. Green Tactical Radar HUD
export function ScannerGreenRadarDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-black font-mono">
      {/* Background Scanner */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Scanner
          color1="#22c55e"
          color2="#15803d"
          color3="#4ade80"
          speed={0.7}
          sweepSpeed={0.35}
          sweepWidth={2.0}
          sweepFalloff={8}
          scale={1.2}
          frequency={3}
          ripple={0.3}
          bandDensity={15}
          lineSharpness={8.0}
          glow={0.3}
          scanDirection="diagonal"
          colorSpread={0.3}
          brightness={1.2}
          contrast={1.3}
          softness={1.0}
          vignette={0.6}
          scanline={true}
          mouseInteraction={true}
          mouseStrength={0.8}
          mouseRadius={0.4}
        />
      </div>

      {/* Radar Sweep Console Overlay */}
      <div className="relative z-10 max-w-xs p-5 mx-4 border border-green-500 bg-black/80 text-left relative overflow-hidden shadow-[0_0_25px_rgba(34,197,94,0.15)]">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-green-400" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-green-400" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-green-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-green-400" />

        <div className="text-[10px] text-green-400 font-bold tracking-wider mb-2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          RADAR_SCOPE_CONNECTED
        </div>
        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1.5">
          SECTOR_MONITOR_09
        </h4>
        <div className="w-full h-[1px] bg-green-500/20 my-2" />
        <div className="text-[11px] text-green-300/80 space-y-1">
          <div>COORD_X: 47.92</div>
          <div>COORD_Y: 104.18</div>
          <div>SWEEP_RATE: 0.35/SEC</div>
        </div>
      </div>
    </div>
  )
}

// 3. Purple Diagonal Sweep
export function ScannerSunsetDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Scanner */}
      <div className="absolute inset-0 z-0">
        <Scanner
          color1="#a855f7"
          color2="#ec4899"
          color3="#3b82f6"
          speed={0.3}
          sweepSpeed={0.15}
          sweepWidth={1.5}
          sweepFalloff={4}
          scale={1.8}
          frequency={1}
          ripple={0.15}
          bandDensity={8}
          lineSharpness={4.0}
          glow={0.15}
          scanDirection="horizontal"
          colorSpread={0.9}
          brightness={0.8}
          contrast={1.0}
          softness={1.8}
          vignette={0.3}
          scanline={false}
          mouseInteraction={true}
        />
      </div>

      {/* Ambient Content Card */}
      <div className="relative z-10 max-w-sm p-6 mx-4 rounded-xl border border-white/5 bg-zinc-950/40 backdrop-blur-md text-center select-none">
        <span className="text-[10px] text-purple-300 uppercase font-bold tracking-widest">
          Aesthetic Sweep
        </span>
        <h4 className="text-lg font-black text-white mt-1 mb-2">
          Synthwave Radar
        </h4>
        <p className="text-xs text-zinc-300 leading-relaxed">
          Broad, glowing horizontal bands in sunset purple, pink, and deep cyan drifting slowly to form a gorgeous retrowave ambient environment.
        </p>
      </div>
    </div>
  )
}
