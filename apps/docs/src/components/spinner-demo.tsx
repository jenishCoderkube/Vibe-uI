'use client'

import React, { useState } from 'react'
import { Spinner, Button, Card } from 'vibe-ui'
import { UploadCloud, CheckCircle2 } from 'lucide-react'

// Standard wrapper card
function SpinnerDemoCard({
  title,
  desc,
  children,
}: {
  title: string
  desc: string
  children: React.ReactNode
}) {
  return (
    <div className="w-full max-w-[350px] overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40 p-4 shadow-xl text-left text-white select-none">
      <div className="mb-3 space-y-0.5">
        <h4 className="text-xs font-bold uppercase tracking-wider">{title}</h4>
        <p className="text-[10px] text-muted-foreground">{desc}</p>
      </div>
      {children}
    </div>
  )
}

// 1. SpinnerDefault
export function SpinnerDefault() {
  return (
    <SpinnerDemoCard
      title="Default Loader"
      desc="Simple muted slate rotation indicator"
    >
      <div className="flex justify-center p-6 bg-zinc-900/40 rounded-lg">
        <Spinner variant="default" size="md" />
      </div>
    </SpinnerDemoCard>
  )
}

// 2. SpinnerGlass
export function SpinnerGlass() {
  return (
    <SpinnerDemoCard
      title="Glassmorphic Loader"
      desc="Frosted white loading ring with soft shadow"
    >
      <div className="flex justify-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
        <Spinner variant="glass" size="md" />
      </div>
    </SpinnerDemoCard>
  )
}

// 3. SpinnerRetro
export function SpinnerRetro() {
  return (
    <SpinnerDemoCard
      title="Retro Brutalist"
      desc="Thick outline flat black loading ring"
    >
      <div className="flex justify-center p-6 bg-zinc-900/40 border-2 border-foreground rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        <Spinner variant="retro" size="md" />
      </div>
    </SpinnerDemoCard>
  )
}

// 4. SpinnerGlow
export function SpinnerGlow() {
  return (
    <SpinnerDemoCard
      title="Neon Glow"
      desc="Ambient purple aura glowing preloader"
    >
      <div className="flex justify-center p-6 bg-zinc-900/40 rounded-lg">
        <Spinner variant="glow" size="md" />
      </div>
    </SpinnerDemoCard>
  )
}

// 5. SpinnerCyber
export function SpinnerCyber() {
  return (
    <SpinnerDemoCard
      title="Cyberpunk Matrix"
      desc="Emerald green glowing scanline loader"
    >
      <div className="flex justify-center p-6 bg-black border border-emerald-950 rounded-lg">
        <Spinner variant="cyberpunk" size="md" />
      </div>
    </SpinnerDemoCard>
  )
}

// 6. SpinnerGlitchText
export function SpinnerGlitchText() {
  return (
    <SpinnerDemoCard
      title="Status Loader"
      desc="Spinner matched with text metadata details"
    >
      <div className="flex items-center gap-3 p-4 bg-zinc-900/40 rounded-lg justify-center">
        <Spinner variant="glow" size="sm" />
        <span className="text-xs font-mono text-primary font-bold animate-pulse">
          CONNECTING PORT 8080...
        </span>
      </div>
    </SpinnerDemoCard>
  )
}

// 7. SpinnerInsideButton
export function SpinnerInsideButton() {
  const [loading, setLoading] = useState(false)

  const triggerLoad = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <SpinnerDemoCard
      title="Button Load States"
      desc="Trigger loading feedback loops inside buttons"
    >
      <div className="flex justify-center p-4 bg-zinc-900/40 rounded-lg">
        <Button
          variant="glow"
          onClick={triggerLoad}
          disabled={loading}
          className="w-full"
        >
          {loading ? (
            <>
              <Spinner variant="glow" size="sm" className="mr-2" />
              <span>Fetching Data...</span>
            </>
          ) : (
            <span>Load Workspace</span>
          )}
        </Button>
      </div>
    </SpinnerDemoCard>
  )
}

// 8. SpinnerInsideUploader
export function SpinnerInsideUploader() {
  const [uploading, setUploading] = useState(false)
  const [done, setDone] = useState(false)
  const Cloud = UploadCloud as any
  const Success = CheckCircle2 as any

  const handleUpload = () => {
    if (uploading || done) return
    setUploading(true)
    setTimeout(() => {
      setUploading(false)
      setDone(true)
      setTimeout(() => setDone(false), 2000)
    }, 2500)
  }

  return (
    <SpinnerDemoCard
      title="Grid Uploader Feed"
      desc="Files attachment loader simulation"
    >
      <div
        onClick={handleUpload}
        className="flex flex-col items-center justify-center p-6 border border-dashed border-white/10 rounded-lg bg-zinc-900/30 cursor-pointer hover:bg-zinc-900/60 transition-all select-none min-h-[110px]"
      >
        {uploading ? (
          <>
            <Spinner variant="cyberpunk" size="md" className="mb-2" />
            <span className="text-[10px] font-mono text-emerald-400">
              UPLOADING DATA PACKET (45%)...
            </span>
          </>
        ) : done ? (
          <>
            <Success className="h-6 w-6 text-emerald-400 mb-1" />
            <span className="text-xs font-semibold text-white">
              Upload Completed!
            </span>
          </>
        ) : (
          <>
            <Cloud className="h-6 w-6 text-zinc-400 mb-1" />
            <span className="text-xs text-zinc-300">
              Click to Upload Large Document
            </span>
          </>
        )}
      </div>
    </SpinnerDemoCard>
  )
}

// 9. SpinnerWaveEqualizer
export function SpinnerWaveEqualizer() {
  return (
    <SpinnerDemoCard
      title="Equalizer Bars"
      desc="Custom wave pulse animation bars"
    >
      <div className="flex gap-1 justify-center items-end p-6 bg-zinc-900/40 rounded-lg h-[68px]">
        {[1, 2, 3, 4, 5].map((idx) => (
          <div
            key={idx}
            style={{
              animationDelay: `${idx * 0.15}s`,
            }}
            className="w-1 bg-primary rounded-t animate-[bounce_0.8s_infinite] h-8"
          />
        ))}
      </div>
    </SpinnerDemoCard>
  )
}

// 10. SpinnerCardOverlay
export function SpinnerCardOverlay() {
  const [loading, setLoading] = useState(false)

  const trigger = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <SpinnerDemoCard
      title="Card Blur Overlay"
      desc="Lock interactive widgets under overlays"
    >
      <div className="relative p-4 border border-white/5 rounded-lg bg-zinc-900/40">
        {loading && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs rounded-lg flex flex-col items-center justify-center gap-2 z-10 animate-in fade-in duration-200">
            <Spinner variant="glow" size="md" />
            <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
              Refreshing Grid...
            </span>
          </div>
        )}
        <div className="space-y-2 text-xs">
          <div className="flex justify-between font-mono text-[10px] text-zinc-500">
            <span>Grid ID</span>
            <span>#0921B</span>
          </div>
          <p className="font-bold text-white">Database Workspace Node</p>
          <Button
            variant="glass"
            size="sm"
            className="w-full h-8"
            onClick={trigger}
          >
            Sync Node
          </Button>
        </div>
      </div>
    </SpinnerDemoCard>
  )
}

export function SpinnerVariantsDemo() {
  return (
    <div className="w-full flex flex-wrap gap-6 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5">
      <div className="flex flex-col items-center gap-1.5 font-mono text-xs">
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
          Default
        </span>
        <Spinner variant="default" size="md" />
      </div>
      <div className="flex flex-col items-center gap-1.5 font-mono text-xs">
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
          Glass
        </span>
        <Spinner variant="glass" size="md" />
      </div>
      <div className="flex flex-col items-center gap-1.5 font-mono text-xs">
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
          Retro
        </span>
        <Spinner variant="retro" size="md" />
      </div>
      <div className="flex flex-col items-center gap-1.5 font-mono text-xs">
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
          Glow
        </span>
        <Spinner variant="glow" size="md" />
      </div>
      <div className="flex flex-col items-center gap-1.5 font-mono text-xs">
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
          Cyberpunk
        </span>
        <Spinner variant="cyberpunk" size="md" />
      </div>
    </div>
  )
}
