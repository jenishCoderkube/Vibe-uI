'use client'

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { cn } from '../../lib/utils'
import {
  Download,
  RotateCcw,
  Code,
  ArrowLeft,
} from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { useTheme } from 'next-themes'
import {
  LightTunnel,
  WebThreads,
  SlicedWaves,
  Scanner,
  Switch,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Button,
  ButtonGroup,
  ButtonGroupItem,
} from 'vibe-ui'

// Reusable card element for parameters inside the Studio sidebar (Theme-aware)
const ParameterCard = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => (
  <div className="flex items-center justify-between gap-3 px-3.5 py-1.5 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-zinc-900/30 hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-white/10 transition-all select-none w-full min-h-[46px]">
    <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-300 tracking-wide truncate max-w-[120px]">
      {label}
    </span>
    <div className="flex items-center justify-end flex-1 min-w-0 font-semibold text-xs">
      {children}
    </div>
  </div>
)

// Reusable Color picker widget (Theme-aware)
const ColorPicker = ({
  value,
  onChange,
}: {
  value: string
  onChange: (val: string) => void
}) => (
  <div className="relative flex items-center gap-1.5 border border-zinc-200 dark:border-white/5 bg-zinc-200/50 dark:bg-zinc-950/60 hover:border-zinc-300 dark:hover:border-white/20 text-zinc-800 dark:text-zinc-300 rounded-lg px-2 py-1 transition-all shrink-0 cursor-pointer">
    <div
      className="w-3.5 h-3.5 rounded border border-black/10 dark:border-white/10 shrink-0"
      style={{ backgroundColor: value }}
    />
    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
      {value}
    </span>
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
    />
  </div>
)

// Premium Dial Slider Widget using the entire card box as the track (Theme-aware, matching React Bits)
const StudioSlider = ({
  min,
  max,
  step,
  value,
  onChange,
  label,
}: {
  min: number
  max: number
  step: number
  value: number
  onChange: (val: number) => void
  label: string
}) => {
  const formatVal = (v: number) => {
    if (step >= 1) return v.toFixed(0)
    if (step >= 0.1) return v.toFixed(1)
    return v.toFixed(2)
  }

  const range = max - min
  const percentage = range > 0 ? ((value - min) / range) * 100 : 0
  const ticks = 9

  return (
    <div className="relative w-full select-none">
      <SliderPrimitive.Root
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={(vals) => onChange(vals[0])}
        className="group relative flex items-center justify-between px-3.5 py-1.5 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-zinc-900/30 hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-white/10 shadow-sm dark:shadow-none transition-all select-none w-full min-h-[46px] cursor-pointer overflow-hidden outline-none"
      >
        {/* Ticks inside the track */}
        <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-4 opacity-[0.05]">
          {[...Array(ticks)].map((_, i) => (
            <div key={i} className="w-[1px] h-2 rounded-full bg-black dark:bg-white" />
          ))}
        </div>

        {/* Track wrapper for Radix slider */}
        <SliderPrimitive.Track className="relative grow h-full bg-transparent" />

        {/* Capsule Thumb */}
        <SliderPrimitive.Thumb 
          className="block w-[5px] h-[26px] bg-black/95 dark:bg-white/95 rounded-full transition-all focus:outline-none cursor-grab active:cursor-grabbing shadow-[0_0_8px_rgba(0,0,0,0.15)] dark:shadow-[0_0_10px_rgba(255,255,255,0.4)] opacity-30 group-hover:opacity-90 group-focus-within:opacity-90"
          style={{ transform: 'translateX(-2.5px)' }}
        />

        {/* Text overlays inside the track */}
        <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none z-10 select-none">
          <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-300 tracking-wide uppercase">
            {label}
          </span>
        </div>

        <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none z-10 select-none">
          <span className="text-[11px] font-bold font-mono text-zinc-900 dark:text-white tracking-wider">
            {formatVal(value)}
          </span>
        </div>
      </SliderPrimitive.Root>
    </div>
  )
}

const BG_IDS = [
  { id: 'light-tunnel', name: 'Light Tunnel' },
  { id: 'web-threads', name: 'Web Threads' },
  { id: 'sliced-waves', name: 'Sliced Waves' },
  { id: 'scanner', name: 'Scanner' },
]

export default function BackgroundStudio() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeBg, setActiveBg] = useState<'light-tunnel' | 'web-threads' | 'sliced-waves' | 'scanner'>('light-tunnel')
  const [showDemoContent, setShowDemoContent] = useState(true)
  const [copied, setCopied] = useState(false)
  const [showCodeModal, setShowCodeModal] = useState(false)
  const previewRef = useRef<HTMLDivElement | null>(null)

  // Parse URL search parameters on load to auto-select background
  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const bgParam = params.get('bg')
      if (bgParam && BG_IDS.some((b) => b.id === bgParam)) {
        setActiveBg(bgParam as any)
      }
    }
  }, [])

  // ── 1. LIGHT TUNNEL PARAMETERS ──
  const [ltCanvasBg, setLtCanvasBg] = useState('#120f17')
  const [ltCableColor, setLtCableColor] = useState('#8b5cf6')
  const [ltPulseColor, setLtPulseColor] = useState('#c084fc')
  const [ltSpeed, setLtSpeed] = useState(0.15)
  const [ltFlowDirection, setLtFlowDirection] = useState<'outward' | 'inward'>('outward')
  const [ltCableCount, setLtCableCount] = useState(20)
  const [ltThickness, setLtThickness] = useState(0.35)
  const [ltWaviness, setLtWaviness] = useState(0.3)
  const [ltPulseSpeed, setLtPulseSpeed] = useState(2.0)
  const [ltPulseLength, setLtPulseLength] = useState(0.28)
  const [ltGlow, setLtGlow] = useState(1.0)

  // ── 2. WEB THREADS PARAMETERS ──
  const [wtCanvasBg, setWtCanvasBg] = useState('#120f17')
  const [wtColor1, setWtColor1] = useState('#5227FF')
  const [wtColor2, setWtColor2] = useState('#FF9FFC')
  const [wtColor3, setWtColor3] = useState('#5227FF')
  const [wtSpeed, setWtSpeed] = useState(0.2)
  const [wtThreadCount, setWtThreadCount] = useState(6)
  const [wtFanMode, setWtFanMode] = useState<'center' | 'left' | 'right'>('center')
  const [wtFrequency, setWtFrequency] = useState(5.0)
  const [wtSpread, setWtSpread] = useState(0.18)
  const [wtThickness, setWtThickness] = useState(1.1)
  const [wtGlow, setWtGlow] = useState(0.02)

  // ── 3. SLICED WAVES PARAMETERS ──
  const [swCanvasBg, setSwCanvasBg] = useState('#120f17')
  const [swColor1, setSwColor1] = useState('#FF9FFC')
  const [swColor2, setSwColor2] = useState('#5227FF')
  const [swColor3, setSwColor3] = useState('#B497CF')
  const [swColumns, setSwColumns] = useState(14)
  const [swRows, setSwRows] = useState(8)
  const [swBarThickness, setSwBarThickness] = useState(0.1)
  const [swSpeed, setSwSpeed] = useState(0.35)
  const [swOrientation, setSwOrientation] = useState<'horizontal' | 'vertical'>('horizontal')
  const [swTravel, setSwTravel] = useState(0.7)
  const [swWaveSpread, setSwWaveSpread] = useState(0.9)
  const [swGlow, setSwGlow] = useState(0.0)
  const [swSoftness, setSwSoftness] = useState(0.05)

  // ── 4. SCANNER PARAMETERS ──
  const [scCanvasBg, setScCanvasBg] = useState('#120f17')
  const [scColor1, setScColor1] = useState('#5227FF')
  const [scColor2, setScColor2] = useState('#FF9FFC')
  const [scColor3, setScColor3] = useState('#FFFFFF')
  const [scSpeed, setScSpeed] = useState(0.5)
  const [scSweepSpeed, setScSweepSpeed] = useState(0.25)
  const [scSweepWidth, setScSweepWidth] = useState(1.6)
  const [scSweepFalloff, setScSweepFalloff] = useState(6)
  const [scBandDensity, setScBandDensity] = useState(11)
  const [scLineSharpness, setScLineSharpness] = useState(5.5)
  const [scScanDirection, setScScanDirection] = useState<'vertical' | 'horizontal' | 'diagonal'>('vertical')
  const [scScale, setScScale] = useState(1.5)
  const [scRipple, setScRipple] = useState(0.22)
  const [scGlow, setScGlow] = useState(0.22)

  // Auto-transition presets for all effects when theme changes
  useEffect(() => {
    if (!mounted) return
    if (resolvedTheme === 'light') {
      // Light Tunnel
      if (ltCanvasBg === '#120f17') setLtCanvasBg('#ffffff')
      if (ltCableColor === '#8b5cf6') setLtCableColor('#4f46e5')
      if (ltPulseColor === '#c084fc') setLtPulseColor('#06b6d4')

      // Web Threads
      if (wtCanvasBg === '#120f17') setWtCanvasBg('#ffffff')
      if (wtColor1 === '#5227FF') setWtColor1('#3b82f6')
      if (wtColor2 === '#FF9FFC') setWtColor2('#8b5cf6')
      if (wtColor3 === '#5227FF') setWtColor3('#3b82f6')

      // Sliced Waves
      if (swCanvasBg === '#120f17') setSwCanvasBg('#ffffff')
      if (swColor1 === '#FF9FFC') setSwColor1('#4f46e5')
      if (swColor2 === '#5227FF') setSwColor2('#06b6d4')
      if (swColor3 === '#B497CF') setSwColor3('#10b981')

      // Scanner
      if (scCanvasBg === '#120f17') setScCanvasBg('#ffffff')
      if (scColor1 === '#5227FF') setScColor1('#4f46e5')
      if (scColor2 === '#FF9FFC') setScColor2('#ef4444')
      if (scColor3 === '#FFFFFF') setScColor3('#000000')
    } else {
      // Light Tunnel
      if (ltCanvasBg === '#ffffff') setLtCanvasBg('#120f17')
      if (ltCableColor === '#4f46e5') setLtCableColor('#8b5cf6')
      if (ltPulseColor === '#06b6d4') setLtPulseColor('#c084fc')

      // Web Threads
      if (wtCanvasBg === '#ffffff') setWtCanvasBg('#120f17')
      if (wtColor1 === '#3b82f6') setWtColor1('#5227FF')
      if (wtColor2 === '#8b5cf6') setWtColor2('#FF9FFC')
      if (wtColor3 === '#3b82f6') setWtColor3('#5227FF')

      // Sliced Waves
      if (swCanvasBg === '#ffffff') setSwCanvasBg('#120f17')
      if (swColor1 === '#4f46e5') setSwColor1('#FF9FFC')
      if (swColor2 === '#06b6d4') setSwColor2('#5227FF')
      if (swColor3 === '#10b981') setSwColor3('#B497CF')

      // Scanner
      if (scCanvasBg === '#ffffff') setScCanvasBg('#120f17')
      if (scColor1 === '#4f46e5') setScColor1('#5227FF')
      if (scColor2 === '#ef4444') setScColor2('#FF9FFC')
      if (scColor3 === '#000000') setScColor3('#FFFFFF')
    }
  }, [resolvedTheme, mounted])

  // Dynamic reset handlers
  const handleReset = () => {
    const isLight = resolvedTheme === 'light'
    if (activeBg === 'light-tunnel') {
      setLtCanvasBg(isLight ? '#ffffff' : '#120f17')
      setLtCableColor(isLight ? '#4f46e5' : '#8b5cf6')
      setLtPulseColor(isLight ? '#06b6d4' : '#c084fc')
      setLtSpeed(0.15)
      setLtFlowDirection('outward')
      setLtCableCount(20)
      setLtThickness(0.35)
      setLtWaviness(0.3)
      setLtPulseSpeed(2.0)
      setLtPulseLength(0.28)
      setLtGlow(1.0)
    } else if (activeBg === 'web-threads') {
      setWtCanvasBg(isLight ? '#ffffff' : '#120f17')
      setWtColor1(isLight ? '#3b82f6' : '#5227FF')
      setWtColor2(isLight ? '#8b5cf6' : '#FF9FFC')
      setWtColor3(isLight ? '#3b82f6' : '#5227FF')
      setWtSpeed(0.2)
      setWtThreadCount(6)
      setWtFanMode('center')
      setWtFrequency(5.0)
      setWtSpread(0.18)
      setWtThickness(1.1)
      setWtGlow(0.02)
    } else if (activeBg === 'sliced-waves') {
      setSwCanvasBg(isLight ? '#ffffff' : '#120f17')
      setSwColor1(isLight ? '#4f46e5' : '#FF9FFC')
      setSwColor2(isLight ? '#06b6d4' : '#5227FF')
      setSwColor3(isLight ? '#10b981' : '#B497CF')
      setSwColumns(14)
      setSwRows(8)
      setSwBarThickness(0.1)
      setSwSpeed(0.35)
      setSwOrientation('horizontal')
      setSwTravel(0.7)
      setSwWaveSpread(0.9)
      setSwGlow(0.0)
      setSwSoftness(0.05)
    } else if (activeBg === 'scanner') {
      setScCanvasBg(isLight ? '#ffffff' : '#120f17')
      setScColor1(isLight ? '#4f46e5' : '#5227FF')
      setScColor2(isLight ? '#ef4444' : '#FF9FFC')
      setScColor3(isLight ? '#000000' : '#FFFFFF')
      setScSpeed(0.5)
      setScSweepSpeed(0.25)
      setScSweepWidth(1.6)
      setScSweepFalloff(6)
      setScBandDensity(11)
      setScLineSharpness(5.5)
      setScScanDirection('vertical')
      setScScale(1.5)
      setScRipple(0.22)
      setScGlow(0.22)
    }
  }

  // Active BG helper states
  const activeCanvasBg = useMemo(() => {
    if (activeBg === 'light-tunnel') return ltCanvasBg
    if (activeBg === 'web-threads') return wtCanvasBg
    if (activeBg === 'sliced-waves') return swCanvasBg
    return scCanvasBg
  }, [activeBg, ltCanvasBg, wtCanvasBg, swCanvasBg, scCanvasBg])

  // Screenshot handler
  const downloadImage = () => {
    const sourceCanvas = previewRef.current?.querySelector('canvas')
    if (!sourceCanvas) {
      alert('Error: WebGL Canvas element not found.')
      return
    }

    try {
      // Create a temporary 2D canvas to composite the background color and the WebGL canvas
      const compositeCanvas = document.createElement('canvas')
      compositeCanvas.width = sourceCanvas.width
      compositeCanvas.height = sourceCanvas.height
      const ctx = compositeCanvas.getContext('2d')
      if (ctx) {
        // Draw the background color (activeCanvasBg)
        ctx.fillStyle = activeCanvasBg
        ctx.fillRect(0, 0, compositeCanvas.width, compositeCanvas.height)
        
        // Draw the WebGL canvas on top
        ctx.drawImage(sourceCanvas, 0, 0)
        
        const dataUrl = compositeCanvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.download = `${activeBg}-${Date.now()}.png`
        link.href = dataUrl
        link.click()
      } else {
        // Fallback if 2D context fails
        const dataUrl = sourceCanvas.toDataURL('image/png')
        const link = document.createElement('a')
        link.download = `${activeBg}-${Date.now()}.png`
        link.href = dataUrl
        link.click()
      }
    } catch (err) {
      console.error('Failed to capture canvas image:', err)
      alert('Failed to capture canvas image. Make sure the WebGL context is initialized.')
    }
  }

  // Active code generator
  const activeCodeString = useMemo(() => {
    if (activeBg === 'light-tunnel') {
      return `import { LightTunnel } from '@/components/ui/light-tunnel'

export default function LightTunnelDemo() {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center rounded-xl overflow-hidden border border-white/10"
      style={{ backgroundColor: '${ltCanvasBg}' }}
    >
      <div className="absolute inset-0 z-0">
        <LightTunnel
          cableColor="${ltCableColor}"
          pulseColor="${ltPulseColor}"
          speed={${ltSpeed}}
          flowDirection="${ltFlowDirection}"
          cableCount={${ltCableCount}}
          thickness={${ltThickness}}
          waviness={${ltWaviness}}
          pulseSpeed={${ltPulseSpeed}}
          pulseLength={${ltPulseLength}}
          glow={${ltGlow}}
        />
      </div>
      ${
        showDemoContent
          ? `<div className="relative z-10 text-white font-extrabold text-xl">
        Vibe UI
      </div>`
          : ''
      }
    </div>
  )
}`
    }

    if (activeBg === 'web-threads') {
      return `import { WebThreads } from '@/components/ui/web-threads'

export default function WebThreadsDemo() {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center rounded-xl overflow-hidden border border-white/10"
      style={{ backgroundColor: '${wtCanvasBg}' }}
    >
      <div className="absolute inset-0 z-0">
        <WebThreads
          color1="${wtColor1}"
          color2="${wtColor2}"
          color3="${wtColor3}"
          speed={${wtSpeed}}
          threadCount={${wtThreadCount}}
          fanMode="${wtFanMode}"
          frequency={${wtFrequency}}
          spread={${wtSpread}}
          thickness={${wtThickness}}
          glow={${wtGlow}}
        />
      </div>
      ${
        showDemoContent
          ? `<div className="relative z-10 text-white font-extrabold text-xl">
        Vibe UI
      </div>`
          : ''
      }
    </div>
  )
}`
    }

    if (activeBg === 'sliced-waves') {
      return `import { SlicedWaves } from '@/components/ui/sliced-waves'

export default function SlicedWavesDemo() {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center rounded-xl overflow-hidden border border-white/10"
      style={{ backgroundColor: '${swCanvasBg}' }}
    >
      <div className="absolute inset-0 z-0">
        <SlicedWaves
          color1="${swColor1}"
          color2="${swColor2}"
          color3="${swColor3}"
          columns={${swColumns}}
          rows={${swRows}}
          barThickness={${swBarThickness}}
          speed={${swSpeed}}
          orientation="${swOrientation}"
          travel={${swTravel}}
          waveSpread={${swWaveSpread}}
          glow={${swGlow}}
          softness={${swSoftness}}
        />
      </div>
      ${
        showDemoContent
          ? `<div className="relative z-10 text-white font-extrabold text-xl">
        Vibe UI
      </div>`
          : ''
      }
    </div>
  )
}`
    }

    // Scanner
    return `import { Scanner } from '@/components/ui/scanner'

export default function ScannerDemo() {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center rounded-xl overflow-hidden border border-white/10"
      style={{ backgroundColor: '${scCanvasBg}' }}
    >
      <div className="absolute inset-0 z-0">
        <Scanner
          color1="${scColor1}"
          color2="${scColor2}"
          color3="${scColor3}"
          speed={${scSpeed}}
          sweepSpeed={${scSweepSpeed}}
          sweepWidth={${scSweepWidth}}
          sweepFalloff={${scSweepFalloff}}
          bandDensity={${scBandDensity}}
          lineSharpness={${scLineSharpness}}
          scanDirection="${scScanDirection}"
          scale={${scScale}}
          ripple={${scRipple}}
          glow={${scGlow}}
        />
      </div>
      ${
        showDemoContent
          ? `<div className="relative z-10 text-white font-extrabold text-xl">
        Vibe UI
      </div>`
          : ''
      }
    </div>
  )
}`
  }, [
    activeBg,
    showDemoContent,
    ltCanvasBg,
    ltCableColor,
    ltPulseColor,
    ltSpeed,
    ltFlowDirection,
    ltCableCount,
    ltThickness,
    ltWaviness,
    ltPulseSpeed,
    ltPulseLength,
    ltGlow,
    wtCanvasBg,
    wtColor1,
    wtColor2,
    wtColor3,
    wtSpeed,
    wtThreadCount,
    wtFanMode,
    wtFrequency,
    wtSpread,
    wtThickness,
    wtGlow,
    swCanvasBg,
    swColor1,
    swColor2,
    swColor3,
    swColumns,
    swRows,
    swBarThickness,
    swSpeed,
    swOrientation,
    swTravel,
    swWaveSpread,
    swGlow,
    swSoftness,
    scCanvasBg,
    scColor1,
    scColor2,
    scColor3,
    scSpeed,
    scSweepSpeed,
    scSweepWidth,
    scSweepFalloff,
    scBandDensity,
    scLineSharpness,
    scScanDirection,
    scScale,
    scRipple,
    scGlow,
  ])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activeCodeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white font-sans overflow-hidden transition-colors duration-200">
      {/* ── TOP HEADER BAR ── */}
      <header className="flex h-14 items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md shrink-0 transition-colors duration-200">
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-8 px-3 text-xs font-semibold rounded-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer active:scale-95 shadow-sm select-none"
          >
            <Link href={`/docs/backgrounds/${activeBg}`}>
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              Back to Docs
            </Link>
          </Button>
          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
          <h1 className="text-xs font-extrabold tracking-widest uppercase bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-600 dark:from-purple-400 dark:via-indigo-300 dark:to-pink-400 bg-clip-text text-transparent select-none">
            Background Studio
          </h1>
        </div>

        {/* Demo Content Toggle in Header */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-500 select-none">
            Demo Content
          </span>
          <Switch
            checked={showDemoContent}
            onCheckedChange={setShowDemoContent}
          />
        </div>
      </header>

      {/* ── MAIN STUDIO CONTENT ── */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDEBAR: CONTROLS PANEL */}
        <aside className="w-[320px] shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-sm flex flex-col h-full overflow-hidden select-none transition-colors duration-200">
          {/* Scrollable controls area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-none">
            {/* Background component selector card */}
            <div className="space-y-1.5">
              <label className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-500">
                Active Effect
              </label>
              <div className="relative">
                <Select
                  value={activeBg}
                  onValueChange={(val) => setActiveBg(val as any)}
                  variant="glass"
                >
                  <SelectTrigger className="w-full bg-white dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/5 text-zinc-800 dark:text-zinc-200 text-xs font-bold py-2.5 h-10 rounded-xl focus:ring-0">
                    <SelectValue placeholder="Select Effect" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 text-zinc-800 dark:text-zinc-300">
                    {BG_IDS.map((bg) => (
                      <SelectItem
                        key={bg.id}
                        value={bg.id}
                        className="hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:bg-zinc-100 dark:focus:bg-zinc-900 cursor-pointer text-xs font-semibold py-2"
                      >
                        {bg.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800/60 my-2" />

            <div className="space-y-2">
              <label className="text-[9px] font-extrabold uppercase tracking-widest text-zinc-500 block">
                Parameters
              </label>

              {/* DYNAMIC PARAMETERS GRID BASED ON ACTIVE BG */}
              {activeBg === 'light-tunnel' && (
                <div className="space-y-2 pb-6">
                  <ParameterCard label="Canvas BG">
                    <ColorPicker value={ltCanvasBg} onChange={setLtCanvasBg} />
                  </ParameterCard>
                  <ParameterCard label="Cable">
                    <ColorPicker value={ltCableColor} onChange={setLtCableColor} />
                  </ParameterCard>
                  <ParameterCard label="Pulse">
                    <ColorPicker value={ltPulseColor} onChange={setLtPulseColor} />
                  </ParameterCard>
                  <StudioSlider
                    label="Speed"
                    min={0.01}
                    max={0.5}
                    step={0.01}
                    value={ltSpeed}
                    onChange={setLtSpeed}
                  />
                  <StudioSlider
                    label="Cables"
                    min={5}
                    max={40}
                    step={1}
                    value={ltCableCount}
                    onChange={setLtCableCount}
                  />
                  <StudioSlider
                    label="Thick"
                    min={0.05}
                    max={1.0}
                    step={0.01}
                    value={ltThickness}
                    onChange={setLtThickness}
                  />
                  <StudioSlider
                    label="Wave"
                    min={0.0}
                    max={1.0}
                    step={0.05}
                    value={ltWaviness}
                    onChange={setLtWaviness}
                  />
                  <StudioSlider
                    label="P-Speed"
                    min={0.5}
                    max={5.0}
                    step={0.1}
                    value={ltPulseSpeed}
                    onChange={setLtPulseSpeed}
                  />
                  <StudioSlider
                    label="P-Len"
                    min={0.05}
                    max={0.8}
                    step={0.01}
                    value={ltPulseLength}
                    onChange={setLtPulseLength}
                  />
                  <StudioSlider
                    label="Glow"
                    min={0.0}
                    max={3.0}
                    step={0.1}
                    value={ltGlow}
                    onChange={setLtGlow}
                  />
                  <ParameterCard label="Dir">
                    <ButtonGroup
                      value={ltFlowDirection}
                      onValueChange={(val) => setLtFlowDirection(val as any)}
                      variant="glass"
                      radius="lg"
                      className="h-7 p-0.5 bg-zinc-100 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/5 rounded-lg [&_button]:!h-6 [&_button]:!text-[10px] [&_button]:!px-2.5 cursor-pointer"
                    >
                      <ButtonGroupItem value="outward" className="capitalize">
                        outward
                      </ButtonGroupItem>
                      <ButtonGroupItem value="inward" className="capitalize">
                        inward
                      </ButtonGroupItem>
                    </ButtonGroup>
                  </ParameterCard>
                </div>
              )}

              {activeBg === 'web-threads' && (
                <div className="space-y-2 pb-6">
                  <ParameterCard label="Canvas BG">
                    <ColorPicker value={wtCanvasBg} onChange={setWtCanvasBg} />
                  </ParameterCard>
                  <ParameterCard label="Color 1">
                    <ColorPicker value={wtColor1} onChange={setWtColor1} />
                  </ParameterCard>
                  <ParameterCard label="Color 2">
                    <ColorPicker value={wtColor2} onChange={setWtColor2} />
                  </ParameterCard>
                  <ParameterCard label="Color 3">
                    <ColorPicker value={wtColor3} onChange={setWtColor3} />
                  </ParameterCard>
                  <StudioSlider
                    label="Speed"
                    min={0.01}
                    max={1.0}
                    step={0.01}
                    value={wtSpeed}
                    onChange={setWtSpeed}
                  />
                  <StudioSlider
                    label="Count"
                    min={1}
                    max={10}
                    step={1}
                    value={wtThreadCount}
                    onChange={setWtThreadCount}
                  />
                  <StudioSlider
                    label="Freq"
                    min={1.0}
                    max={10.0}
                    step={0.5}
                    value={wtFrequency}
                    onChange={setWtFrequency}
                  />
                  <StudioSlider
                    label="Spread"
                    min={0.05}
                    max={0.5}
                    step={0.01}
                    value={wtSpread}
                    onChange={setWtSpread}
                  />
                  <StudioSlider
                    label="Thick"
                    min={0.1}
                    max={3.0}
                    step={0.1}
                    value={wtThickness}
                    onChange={setWtThickness}
                  />
                  <StudioSlider
                    label="Glow"
                    min={0.001}
                    max={0.1}
                    step={0.005}
                    value={wtGlow}
                    onChange={setWtGlow}
                  />
                  <ParameterCard label="Fan">
                    <ButtonGroup
                      value={wtFanMode}
                      onValueChange={(val) => setWtFanMode(val as any)}
                      variant="glass"
                      radius="lg"
                      className="h-7 p-0.5 bg-zinc-100 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/5 rounded-lg [&_button]:!h-6 [&_button]:!text-[10px] [&_button]:!px-2.5 cursor-pointer"
                    >
                      <ButtonGroupItem value="center" className="capitalize">
                        center
                      </ButtonGroupItem>
                      <ButtonGroupItem value="left" className="capitalize">
                        left
                      </ButtonGroupItem>
                      <ButtonGroupItem value="right" className="capitalize">
                        right
                      </ButtonGroupItem>
                    </ButtonGroup>
                  </ParameterCard>
                </div>
              )}

              {activeBg === 'sliced-waves' && (
                <div className="space-y-2 pb-6">
                  <ParameterCard label="Canvas BG">
                    <ColorPicker value={swCanvasBg} onChange={setSwCanvasBg} />
                  </ParameterCard>
                  <ParameterCard label="Color 1">
                    <ColorPicker value={swColor1} onChange={setSwColor1} />
                  </ParameterCard>
                  <ParameterCard label="Color 2">
                    <ColorPicker value={swColor2} onChange={setSwColor2} />
                  </ParameterCard>
                  <ParameterCard label="Color 3">
                    <ColorPicker value={swColor3} onChange={setSwColor3} />
                  </ParameterCard>
                  <StudioSlider
                    label="Columns"
                    min={1}
                    max={30}
                    step={1}
                    value={swColumns}
                    onChange={setSwColumns}
                  />
                  <StudioSlider
                    label="Rows"
                    min={1}
                    max={30}
                    step={1}
                    value={swRows}
                    onChange={setSwRows}
                  />
                  <StudioSlider
                    label="Thickness"
                    min={0.01}
                    max={0.5}
                    step={0.01}
                    value={swBarThickness}
                    onChange={setSwBarThickness}
                  />
                  <StudioSlider
                    label="Speed"
                    min={0.01}
                    max={1.5}
                    step={0.01}
                    value={swSpeed}
                    onChange={setSwSpeed}
                  />
                  <StudioSlider
                    label="Travel"
                    min={0.1}
                    max={2.0}
                    step={0.1}
                    value={swTravel}
                    onChange={setSwTravel}
                  />
                  <StudioSlider
                    label="W-Spread"
                    min={0.1}
                    max={3.0}
                    step={0.1}
                    value={swWaveSpread}
                    onChange={setSwWaveSpread}
                  />
                  <StudioSlider
                    label="Glow"
                    min={0.0}
                    max={2.0}
                    step={0.1}
                    value={swGlow}
                    onChange={setSwGlow}
                  />
                  <StudioSlider
                    label="Soft"
                    min={0.01}
                    max={0.5}
                    step={0.01}
                    value={swSoftness}
                    onChange={setSwSoftness}
                  />
                  <ParameterCard label="Dir">
                    <ButtonGroup
                      value={swOrientation}
                      onValueChange={(val) => setSwOrientation(val as any)}
                      variant="glass"
                      radius="lg"
                      className="h-7 p-0.5 bg-zinc-100 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/5 rounded-lg [&_button]:!h-6 [&_button]:!text-[10px] [&_button]:!px-2.5 cursor-pointer"
                    >
                      <ButtonGroupItem value="horizontal" className="capitalize">
                        horizontal
                      </ButtonGroupItem>
                      <ButtonGroupItem value="vertical" className="capitalize">
                        vertical
                      </ButtonGroupItem>
                    </ButtonGroup>
                  </ParameterCard>
                </div>
              )}

              {activeBg === 'scanner' && (
                <div className="space-y-2 pb-6">
                  <ParameterCard label="Canvas BG">
                    <ColorPicker value={scCanvasBg} onChange={setScCanvasBg} />
                  </ParameterCard>
                  <ParameterCard label="Color 1">
                    <ColorPicker value={scColor1} onChange={setScColor1} />
                  </ParameterCard>
                  <ParameterCard label="Color 2">
                    <ColorPicker value={scColor2} onChange={setScColor2} />
                  </ParameterCard>
                  <ParameterCard label="Color 3">
                    <ColorPicker value={scColor3} onChange={setScColor3} />
                  </ParameterCard>
                  <StudioSlider
                    label="Noise"
                    min={0.01}
                    max={2.0}
                    step={0.01}
                    value={scSpeed}
                    onChange={setScSpeed}
                  />
                  <StudioSlider
                    label="Sweep"
                    min={0.01}
                    max={1.0}
                    step={0.01}
                    value={scSweepSpeed}
                    onChange={setScSweepSpeed}
                  />
                  <StudioSlider
                    label="Width"
                    min={0.1}
                    max={3.0}
                    step={0.1}
                    value={scSweepWidth}
                    onChange={setScSweepWidth}
                  />
                  <StudioSlider
                    label="Falloff"
                    min={1}
                    max={12}
                    step={1}
                    value={scSweepFalloff}
                    onChange={setScSweepFalloff}
                  />
                  <StudioSlider
                    label="Density"
                    min={1}
                    max={30}
                    step={1}
                    value={scBandDensity}
                    onChange={setScBandDensity}
                  />
                  <StudioSlider
                    label="Sharpness"
                    min={0.5}
                    max={15}
                    step={0.5}
                    value={scLineSharpness}
                    onChange={setScLineSharpness}
                  />
                  <StudioSlider
                    label="Scale"
                    min={0.5}
                    max={3.0}
                    step={0.1}
                    value={scScale}
                    onChange={setScScale}
                  />
                  <StudioSlider
                    label="Ripple"
                    min={0.0}
                    max={1.0}
                    step={0.05}
                    value={scRipple}
                    onChange={setScRipple}
                  />
                  <StudioSlider
                    label="Glow"
                    min={0.0}
                    max={1.0}
                    step={0.05}
                    value={scGlow}
                    onChange={setScGlow}
                  />
                  <ParameterCard label="Dir">
                    <ButtonGroup
                      value={scScanDirection}
                      onValueChange={(val) => setScScanDirection(val as any)}
                      variant="glass"
                      radius="lg"
                      className="h-7 p-0.5 bg-zinc-100 dark:bg-zinc-950/60 border border-zinc-200 dark:border-white/5 rounded-lg [&_button]:!h-6 [&_button]:!text-[10px] [&_button]:!px-2.5 cursor-pointer"
                    >
                      <ButtonGroupItem value="vertical" className="capitalize">
                        vertical
                      </ButtonGroupItem>
                      <ButtonGroupItem value="horizontal" className="capitalize">
                        horizontal
                      </ButtonGroupItem>
                      <ButtonGroupItem value="diagonal" className="capitalize">
                        diagonal
                      </ButtonGroupItem>
                    </ButtonGroup>
                  </ParameterCard>
                </div>
              )}
            </div>
          </div>

          {/* SIDEBAR FOOTER: Reset and Code Export */}
          <div className="p-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-950/80 flex items-center gap-2 transition-colors duration-200">
            <Button
              onClick={handleReset}
              variant="outline"
              size="sm"
              className="flex items-center justify-center gap-1.5 h-10 px-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 hover:bg-zinc-200/80 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 text-xs font-bold rounded-xl flex-1 cursor-pointer transition-all active:scale-95 shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </Button>
            <Button
              onClick={() => setShowCodeModal(true)}
              variant="default"
              size="sm"
              className="flex items-center justify-center gap-1.5 h-10 px-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl flex-1 cursor-pointer transition-all active:scale-95 shadow-md shadow-purple-900/10"
            >
              <Code className="w-3.5 h-3.5" />
              Export
            </Button>
          </div>
        </aside>

        {/* RIGHT AREA: CANVAS PREVIEW WORKSPACE */}
        <main className="flex-1 h-full bg-zinc-100 dark:bg-zinc-950 relative flex items-center justify-center overflow-hidden transition-colors duration-200">
          {/* Main Visual Preview Area */}
          <div
            ref={previewRef}
            className="relative flex-1 h-full items-center justify-center flex overflow-hidden select-none transition-colors duration-300"
            style={{ backgroundColor: activeCanvasBg }}
          >
            {activeBg === 'light-tunnel' && (
              <LightTunnel
                key={`${ltCableColor}-${ltPulseColor}-${ltSpeed}-${ltFlowDirection}-${ltCableCount}-${ltThickness}-${ltWaviness}-${ltPulseSpeed}-${ltPulseLength}-${ltGlow}`}
                cableColor={ltCableColor}
                pulseColor={ltPulseColor}
                speed={ltSpeed}
                flowDirection={ltFlowDirection}
                cableCount={ltCableCount}
                thickness={ltThickness}
                waviness={ltWaviness}
                pulseSpeed={ltPulseSpeed}
                pulseLength={ltPulseLength}
                glow={ltGlow}
              />
            )}
            {activeBg === 'web-threads' && (
              <WebThreads
                key={`${wtColor1}-${wtColor2}-${wtColor3}-${wtSpeed}-${wtThreadCount}-${wtFanMode}-${wtFrequency}-${wtSpread}-${wtThickness}-${wtGlow}`}
                color1={wtColor1}
                color2={wtColor2}
                color3={wtColor3}
                speed={wtSpeed}
                threadCount={wtThreadCount}
                fanMode={wtFanMode}
                frequency={wtFrequency}
                spread={wtSpread}
                thickness={wtThickness}
                glow={wtGlow}
              />
            )}
            {activeBg === 'sliced-waves' && (
              <SlicedWaves
                key={`${swColor1}-${swColor2}-${swColor3}-${swColumns}-${swRows}-${swBarThickness}-${swSpeed}-${swOrientation}-${swTravel}-${swWaveSpread}-${swGlow}-${swSoftness}`}
                color1={swColor1}
                color2={swColor2}
                color3={swColor3}
                columns={swColumns}
                rows={swRows}
                barThickness={swBarThickness}
                speed={swSpeed}
                orientation={swOrientation}
                travel={swTravel}
                waveSpread={swWaveSpread}
                glow={swGlow}
                softness={swSoftness}
              />
            )}
            {activeBg === 'scanner' && (
              <Scanner
                key={`${scColor1}-${scColor2}-${scColor3}-${scSpeed}-${scSweepSpeed}-${scSweepWidth}-${scSweepFalloff}-${scBandDensity}-${scLineSharpness}-${scScanDirection}-${scScale}-${scRipple}-${scGlow}`}
                color1={scColor1}
                color2={scColor2}
                color3={scColor3}
                speed={scSpeed}
                sweepSpeed={scSweepSpeed}
                sweepWidth={scSweepWidth}
                sweepFalloff={scSweepFalloff}
                bandDensity={scBandDensity}
                lineSharpness={scLineSharpness}
                scanDirection={scScanDirection}
                scale={scScale}
                ripple={scRipple}
                glow={scGlow}
              />
            )}
          </div>

          {/* Floating watermarked label in the top-left */}
          <div className="absolute top-6 left-6 z-10 bg-white/90 dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-zinc-800/80 px-3 py-1.5 rounded-lg select-none shadow-sm transition-colors duration-200">
            <span className="text-[10px] font-extrabold tracking-wider text-zinc-700 dark:text-zinc-400 capitalize">
              {BG_IDS.find((b) => b.id === activeBg)?.name}
            </span>
          </div>

          {/* Floating watermarked label in the bottom-left (Download screenshot controls) */}
          <div className="absolute bottom-6 left-6 z-10 flex gap-2 select-none">
            <Button
              onClick={downloadImage}
              variant="outline"
              size="sm"
              className="flex items-center gap-1.5 h-10 px-3.5 bg-white/90 dark:bg-zinc-950/90 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-350 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-850 dark:text-zinc-300 text-xs font-bold rounded-xl transition-all cursor-pointer active:scale-95 shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              Image
            </Button>
          </div>

          {/* Centered branding demo logo */}
          {showDemoContent && (
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none">
              <span className="text-zinc-900 dark:text-white font-extrabold text-6xl tracking-tight opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                Vibe UI
              </span>
            </div>
          )}
        </main>
      </div>

      {/* ── CODE EXPORT MODAL DIALOG ── */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 select-none text-zinc-900 dark:text-white">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xs font-bold tracking-wide uppercase">
                  Export React Code
                </h3>
              </div>
              <Button
                onClick={() => setShowCodeModal(false)}
                variant="ghost"
                size="icon"
                className="w-7 h-7 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white text-zinc-500 dark:text-zinc-400 flex items-center justify-center cursor-pointer transition-all active:scale-95"
              >
                ✕
              </Button>
            </div>

            {/* Modal Body: Highlighted code display */}
            <div className="flex-1 overflow-auto bg-zinc-50 dark:bg-zinc-950 p-6 border-b border-zinc-200 dark:border-zinc-900">
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <Highlight
                  theme={isDark ? themes.vsDark : themes.vsLight}
                  code={activeCodeString}
                  language="tsx"
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                      className={cn(
                        'overflow-x-auto p-6 text-xs font-mono leading-relaxed',
                        className
                      )}
                      style={{ ...style, backgroundColor: 'transparent' }}
                    >
                      {tokens.map((line, i) => (
                        <div
                          key={i}
                          {...getLineProps({ line })}
                          className="table-row"
                        >
                          <span className="table-cell select-none text-right pr-4 text-zinc-400 dark:text-zinc-700 w-6 align-top pt-0.5">
                            {i + 1}
                          </span>
                          <span className="table-cell align-top whitespace-pre text-zinc-800 dark:text-zinc-300">
                            {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token })} />
                            ))}
                          </span>
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-end gap-2 select-none">
              <Button
                onClick={copyToClipboard}
                variant="default"
                size="sm"
                className="flex items-center justify-center gap-1.5 h-10 px-4 bg-purple-600 hover:bg-purple-500 active:scale-95 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
              >
                {copied ? 'Copied!' : 'Copy Code'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
