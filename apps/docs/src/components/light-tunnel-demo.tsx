'use client'

import React from 'react'
import { LightTunnel } from 'vibe-ui'

// 1. Basic Demo with Centered Glass Card Overlay (Purple theme)
export function LightTunnelBasicDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Light Tunnel */}
      <div className="absolute inset-0 z-0">
        <LightTunnel
          cableColor="#8b5cf6"
          pulseColor="#c084fc"
          tunnelColor="#1e1b4b"
          tunnelOpacity={0.2}
          speed={0.15}
          flowDirection="outward"
          cableCount={24}
          thickness={0.35}
          rimWidth={0.15}
          glow={1.5}
          sway={0.4}
        />
      </div>

      {/* Foreground Content Card - Vibe UI Glassmorphism */}
      <div className="relative z-10 max-w-sm p-6 mx-4 rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-xl shadow-2xl text-center select-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] font-semibold uppercase tracking-wider mb-4">
          ✨ Vibe UI Premium
        </div>
        <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
          Motion System
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          Experience ultra-smooth, hardware-accelerated WebGL background animations designed to capture user attention without compromising performance.
        </p>
        <div className="flex gap-2 justify-center">
          <button className="px-3.5 py-1.5 bg-white text-zinc-950 text-xs font-bold rounded-lg hover:bg-zinc-200 transition-all cursor-pointer">
            Get Started
          </button>
          <button className="px-3.5 py-1.5 border border-white/20 bg-white/5 text-white text-xs font-medium rounded-lg hover:bg-white/10 transition-all cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

// 2. Cyberpunk Demo (Cyan/Pink inward flow)
export function LightTunnelCyberDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950 font-mono">
      {/* Background Light Tunnel */}
      <div className="absolute inset-0 z-0">
        <LightTunnel
          cableColor="#00f0ff"
          pulseColor="#ff007f"
          tunnelColor="#000d1a"
          tunnelOpacity={0.1}
          speed={0.25}
          flowDirection="inward"
          pulseSpeed={3.0}
          pulseLength={0.4}
          cableCount={16}
          thickness={0.4}
          glow={2.0}
          sway={0.8}
        />
      </div>

      {/* Cyberpunk Center Terminal HUD */}
      <div className="relative z-10 max-w-sm p-5 mx-4 border border-cyan-500/40 bg-zinc-950/80 shadow-[0_0_20px_rgba(6,182,212,0.15)] text-left relative overflow-hidden select-none">
        {/* Decorative corner lines */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />

        <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          SYSTEM_CONNECTED
        </div>
        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1.5">
          VIBE_TERMINAL_NODE
        </h4>
        <div className="w-full h-[1px] bg-cyan-500/20 my-2" />
        <p className="text-[11px] text-zinc-400 leading-normal mb-3">
          Initializing neural sequence loops. Sub-surface glow index computed successfully. Render pipe is fully optimized.
        </p>
        <button className="w-full py-1.5 border border-cyan-400/55 bg-cyan-950/30 text-cyan-300 text-xs font-semibold rounded hover:bg-cyan-500/20 hover:text-white transition-all cursor-pointer text-center">
          RUN_GRID_DIAGNOSTIC
        </button>
      </div>
    </div>
  )
}

// 3. Sunset / Liquid Gold Ambient Demo (Orange/Gold theme)
export function LightTunnelSunsetDemo() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Light Tunnel */}
      <div className="absolute inset-0 z-0">
        <LightTunnel
          cableColor="#f59e0b"
          pulseColor="#f97316"
          tunnelColor="#291600"
          tunnelOpacity={0.3}
          speed={0.08}
          flowDirection="outward"
          pulseSpeed={1.5}
          cableCount={30}
          thickness={0.3}
          rimWidth={0.2}
          glow={1.2}
          sway={1.0}
        />
      </div>

      {/* Warm Ambient Content */}
      <div className="relative z-10 max-w-sm p-6 mx-4 rounded-xl border border-amber-500/10 bg-zinc-950/50 backdrop-blur-md text-center select-none">
        <span className="text-[10px] text-amber-400 uppercase font-bold tracking-widest">
          Ambient Atmosphere
        </span>
        <h4 className="text-lg font-black text-amber-50 tracking-tight mt-1 mb-2">
          Golden Wave Flow
        </h4>
        <p className="text-xs text-zinc-300 leading-relaxed mb-4">
          Slow, organic swaying movements paired with deep gold and amber hues creates a warm, premium visual setting.
        </p>
        <button className="px-4 py-1.5 border border-amber-500/35 bg-amber-500/10 text-amber-300 text-xs font-bold rounded-full hover:bg-amber-500/25 hover:text-white transition-all cursor-pointer">
          Configure Glow
        </button>
      </div>
    </div>
  )
}
