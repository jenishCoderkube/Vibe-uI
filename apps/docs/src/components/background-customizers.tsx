'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '../lib/utils'
import { Check, Copy, ExternalLink } from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'
import { useTheme } from 'next-themes'
import * as SliderPrimitive from '@radix-ui/react-slider'
import {
  LightTunnel,
  WebThreads,
  SlicedWaves,
  Scanner,
  Switch,
  Button,
  ButtonGroup,
  ButtonGroupItem,
} from 'vibe-ui'

// Reusable card element for parameter rows (used for non-slider elements like switches and color pickers)
export const PlaygroundParameterCard = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => (
  <div className="flex items-center justify-between gap-3 px-3.5 py-1.5 rounded-xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-white/10 shadow-sm dark:shadow-none transition-all select-none w-full min-h-[46px]">
    <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-300 tracking-wide truncate max-w-[120px]">
      {label}
    </span>
    <div className="flex items-center justify-end flex-1 min-w-0 font-semibold text-xs">
      {children}
    </div>
  </div>
)

// Reusable Color picker widget
export const PlaygroundColorPicker = ({
  value,
  onChange,
}: {
  value: string
  onChange: (val: string) => void
}) => (
  <div className="relative flex items-center gap-1.5 border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-zinc-950/60 hover:border-zinc-300 dark:hover:border-white/20 text-zinc-800 dark:text-zinc-300 rounded-lg px-2 py-1 transition-all shrink-0 cursor-pointer">
    <div
      className="w-3.5 h-3.5 rounded border border-white/10 shrink-0"
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

// Premium Dial Slider Widget using the entire card box as the track (Theme-aware)
// Premium Dial Slider Widget using the entire card box as the track (Theme-aware, matching React Bits)
export const DialSlider = ({
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
        className="group relative flex items-center justify-between px-3.5 py-1.5 rounded-xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30 hover:bg-zinc-50 hover:border-zinc-300 dark:hover:bg-zinc-900/50 dark:hover:border-white/10 shadow-sm dark:shadow-none transition-all select-none w-full min-h-[46px] cursor-pointer overflow-hidden outline-none"
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

interface CustomizerWrapperProps {
  code: string | ((showDemoContent: boolean) => string)
  preview: React.ReactNode
  canvasBg: string
  bgId?: string
  children: React.ReactNode
}

export function CustomizerWrapper({
  code,
  preview,
  canvasBg,
  bgId,
  children,
}: CustomizerWrapperProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [tab, setTab] = useState<'preview' | 'code'>('preview')
  const [copied, setCopied] = useState(false)
  const [showDemoContent, setShowDemoContent] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === 'dark' : true

  const activeCode = typeof code === 'function' ? code(showDemoContent) : code

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activeCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const CopyIcon = Copy as any
  const CheckIcon = Check as any

  return (
    <div className="group relative my-6 flex flex-col space-y-2">
      {/* Tabs Switcher and Copy Button */}
      <div className="flex items-center justify-between border-b border-border pb-2">
        <div className="flex items-center gap-4 text-sm font-medium">
          <button
            onClick={() => setTab('preview')}
            className={cn(
              'border-b-2 px-1 pb-1 transition-all cursor-pointer font-semibold text-sm',
              tab === 'preview'
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setTab('code')}
            className={cn(
              'border-b-2 px-1 pb-1 transition-all cursor-pointer font-semibold text-sm',
              tab === 'code'
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            )}
          >
            Code
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-8 px-3 text-[10.5px] font-bold rounded-lg cursor-pointer no-underline hover:no-underline text-foreground"
          >
            <a
              href={bgId ? `/studio?bg=${bgId}` : '/studio'}
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:no-underline flex items-center text-foreground"
            >
              Open Studio
              <ExternalLink className="w-3.5 h-3.5 ml-1.5 shrink-0 text-purple-600 dark:text-purple-400" />
            </a>
          </Button>

          {tab === 'code' && (
            <Button
              onClick={copyToClipboard}
              variant="outline"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground cursor-pointer rounded-md"
              title="Copy code"
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-emerald-500" />
              ) : (
                <CopyIcon className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="relative rounded-lg border shadow-sm overflow-hidden border-zinc-200 dark:border-border bg-white dark:bg-zinc-950 transition-colors duration-200">
        {tab === 'preview' && (
          <div className="flex flex-col">
            {/* Visual Canvas Block (Uses dynamic canvasBg style) */}
            <div
              className="relative h-[400px] w-full items-center justify-center overflow-hidden flex select-none transition-colors duration-300"
              style={{ backgroundColor: canvasBg }}
            >
              <div className="absolute inset-0 z-0">{preview}</div>
              {showDemoContent && (
                <div className="relative z-10 text-zinc-900 dark:text-white font-extrabold text-2xl tracking-tight select-none opacity-90 drop-shadow-md">
                  Vibe UI
                </div>
              )}
            </div>

            {/* Sandbox Panel Grid Header with Demo Content Toggle Switch */}
            <div className="p-6 pb-2 flex items-center justify-between border-t border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-950/40 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-bold tracking-wide uppercase text-zinc-900 dark:text-white leading-none m-0 pt-1">
                  Sandbox
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 select-none">
                  Demo Content
                </span>
                <Switch
                  checked={showDemoContent}
                  onCheckedChange={setShowDemoContent}
                />
              </div>
            </div>

            {/* Customizer Panel Options Grid */}
            <div className="p-6 pt-2 bg-zinc-50 dark:bg-zinc-950/40 transition-colors duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {children}
              </div>
            </div>
          </div>
        )}

        {tab === 'code' && (
          <div className="relative overflow-hidden bg-zinc-950">
            <Highlight
              theme={isDark ? themes.vsDark : themes.vsLight}
              code={activeCode}
              language="tsx"
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={cn(
                    'overflow-x-auto p-5 text-sm font-mono leading-relaxed',
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
                      <span
                        className={cn(
                          'table-cell select-none text-right pr-4 text-xs w-6 align-top pt-0.5',
                          isDark ? 'text-zinc-600' : 'text-zinc-400'
                        )}
                      >
                        {i + 1}
                      </span>
                      <span className="table-cell align-top whitespace-pre">
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
        )}
      </div>
    </div>
  )
}

// ── 1. LIGHT TUNNEL CUSTOMIZER ──
export function LightTunnelCustomizer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const [canvasBg, setCanvasBg] = useState('#120f17')
  const [cableColor, setCableColor] = useState('#8b5cf6')
  const [pulseColor, setPulseColor] = useState('#c084fc')
  const [speed, setSpeed] = useState(0.15)
  const [flowDirection, setFlowDirection] = useState<'outward' | 'inward'>(
    'outward'
  )

  // Auto transition defaults between light and dark themes
  useEffect(() => {
    if (!mounted) return
    if (resolvedTheme === 'light') {
      if (canvasBg === '#120f17') setCanvasBg('#ffffff')
      if (cableColor === '#8b5cf6') setCableColor('#4f46e5')
      if (pulseColor === '#c084fc') setPulseColor('#06b6d4')
    } else {
      if (canvasBg === '#ffffff') setCanvasBg('#120f17')
      if (cableColor === '#4f46e5') setCableColor('#8b5cf6')
      if (pulseColor === '#06b6d4') setPulseColor('#c084fc')
    }
  }, [resolvedTheme, mounted])

  const code = (showDemo: boolean) => `import { LightTunnel } from '@/components/ui/light-tunnel'

export default function LightTunnelDemo() {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center rounded-xl overflow-hidden border border-white/10"
      style={{ backgroundColor: '${canvasBg}' }}
    >
      <div className="absolute inset-0 z-0">
        <LightTunnel
          cableColor="${cableColor}"
          pulseColor="${pulseColor}"
          speed={${speed}}
          flowDirection="${flowDirection}"
        />
      </div>
      ${
        showDemo
          ? `<div className="relative z-10 text-white font-extrabold text-xl">
        Vibe UI
      </div>`
          : ''
      }
    </div>
  )
}`

  return (
    <CustomizerWrapper
      canvasBg={canvasBg}
      bgId="light-tunnel"
      code={code}
      preview={
        <LightTunnel
          key={`${cableColor}-${pulseColor}-${speed}-${flowDirection}`}
          cableColor={cableColor}
          pulseColor={pulseColor}
          speed={speed}
          flowDirection={flowDirection}
        />
      }
    >
      <PlaygroundParameterCard label="Canvas BG">
        <PlaygroundColorPicker value={canvasBg} onChange={setCanvasBg} />
      </PlaygroundParameterCard>
      <PlaygroundParameterCard label="Cable">
        <PlaygroundColorPicker value={cableColor} onChange={setCableColor} />
      </PlaygroundParameterCard>
      <PlaygroundParameterCard label="Pulse">
        <PlaygroundColorPicker value={pulseColor} onChange={setPulseColor} />
      </PlaygroundParameterCard>
      <DialSlider
        label="Speed"
        min={0.01}
        max={0.5}
        step={0.01}
        value={speed}
        onChange={setSpeed}
      />
      <PlaygroundParameterCard label="Dir">
        <ButtonGroup
          value={flowDirection}
          onValueChange={(val) => setFlowDirection(val as any)}
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
      </PlaygroundParameterCard>
    </CustomizerWrapper>
  )
}

// ── 2. WEB THREADS CUSTOMIZER ──
export function WebThreadsCustomizer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const [canvasBg, setCanvasBg] = useState('#120f17')
  const [color1, setColor1] = useState('#5227FF')
  const [color2, setColor2] = useState('#FF9FFC')
  const [speed, setSpeed] = useState(0.2)
  const [threadCount, setThreadCount] = useState(6)
  const [fanMode, setFanMode] = useState<'center' | 'left' | 'right'>('center')

  // Auto transition defaults between light and dark themes
  useEffect(() => {
    if (!mounted) return
    if (resolvedTheme === 'light') {
      if (canvasBg === '#120f17') setCanvasBg('#ffffff')
      if (color1 === '#5227FF') setColor1('#3b82f6')
      if (color2 === '#FF9FFC') setColor2('#8b5cf6')
    } else {
      if (canvasBg === '#ffffff') setCanvasBg('#120f17')
      if (color1 === '#3b82f6') setColor1('#5227FF')
      if (color2 === '#8b5cf6') setColor2('#FF9FFC')
    }
  }, [resolvedTheme, mounted])

  const code = (showDemo: boolean) => `import { WebThreads } from '@/components/ui/web-threads'

export default function WebThreadsDemo() {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center rounded-xl overflow-hidden border border-white/10"
      style={{ backgroundColor: '${canvasBg}' }}
    >
      <div className="absolute inset-0 z-0">
        <WebThreads
          color1="${color1}"
          color2="${color2}"
          speed={${speed}}
          threadCount={${threadCount}}
          fanMode="${fanMode}"
        />
      </div>
      ${
        showDemo
          ? `<div className="relative z-10 text-white font-extrabold text-xl">
        Vibe UI
      </div>`
          : ''
      }
    </div>
  )
}`

  return (
    <CustomizerWrapper
      canvasBg={canvasBg}
      bgId="web-threads"
      code={code}
      preview={
        <WebThreads
          key={`${color1}-${color2}-${speed}-${threadCount}-${fanMode}`}
          color1={color1}
          color2={color2}
          speed={speed}
          threadCount={threadCount}
          fanMode={fanMode}
        />
      }
    >
      <PlaygroundParameterCard label="Canvas BG">
        <PlaygroundColorPicker value={canvasBg} onChange={setCanvasBg} />
      </PlaygroundParameterCard>
      <PlaygroundParameterCard label="Color 1">
        <PlaygroundColorPicker value={color1} onChange={setColor1} />
      </PlaygroundParameterCard>
      <PlaygroundParameterCard label="Color 2">
        <PlaygroundColorPicker value={color2} onChange={setColor2} />
      </PlaygroundParameterCard>
      <DialSlider
        label="Speed"
        min={0.01}
        max={1.0}
        step={0.01}
        value={speed}
        onChange={setSpeed}
      />
      <DialSlider
        label="Count"
        min={1}
        max={10}
        step={1}
        value={threadCount}
        onChange={setThreadCount}
      />
      <PlaygroundParameterCard label="Fan">
        <ButtonGroup
          value={fanMode}
          onValueChange={(val) => setFanMode(val as any)}
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
      </PlaygroundParameterCard>
    </CustomizerWrapper>
  )
}

// ── 3. SLICED WAVES CUSTOMIZER ──
export function SlicedWavesCustomizer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const [canvasBg, setCanvasBg] = useState('#120f17')
  const [color1, setColor1] = useState('#FF9FFC')
  const [color2, setColor2] = useState('#5227FF')
  const [color3, setColor3] = useState('#B497CF')
  const [columns, setColumns] = useState(14)
  const [rows, setRows] = useState(8)
  const [barThickness, setBarThickness] = useState(0.1)
  const [speed, setSpeed] = useState(0.35)
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal'
  )

  // Auto transition defaults between light and dark themes
  useEffect(() => {
    if (!mounted) return
    if (resolvedTheme === 'light') {
      if (canvasBg === '#120f17') setCanvasBg('#ffffff')
      if (color1 === '#FF9FFC') setColor1('#4f46e5')
      if (color2 === '#5227FF') setColor2('#06b6d4')
      if (color3 === '#B497CF') setColor3('#10b981')
    } else {
      if (canvasBg === '#ffffff') setCanvasBg('#120f17')
      if (color1 === '#4f46e5') setColor1('#FF9FFC')
      if (color2 === '#06b6d4') setColor2('#5227FF')
      if (color3 === '#10b981') setColor3('#B497CF')
    }
  }, [resolvedTheme, mounted])

  const code = (showDemo: boolean) => `import { SlicedWaves } from '@/components/ui/sliced-waves'

export default function SlicedWavesDemo() {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center rounded-xl overflow-hidden border border-white/10"
      style={{ backgroundColor: '${canvasBg}' }}
    >
      <div className="absolute inset-0 z-0">
        <SlicedWaves
          color1="${color1}"
          color2="${color2}"
          color3="${color3}"
          columns={${columns}}
          rows={${rows}}
          barThickness={${barThickness}}
          speed={${speed}}
          orientation="${orientation}"
        />
      </div>
      ${
        showDemo
          ? `<div className="relative z-10 text-white font-extrabold text-xl">
        Vibe UI
      </div>`
          : ''
      }
    </div>
  )
}`

  return (
    <CustomizerWrapper
      canvasBg={canvasBg}
      bgId="sliced-waves"
      code={code}
      preview={
        <SlicedWaves
          key={`${color1}-${color2}-${color3}-${columns}-${rows}-${barThickness}-${speed}-${orientation}`}
          color1={color1}
          color2={color2}
          color3={color3}
          columns={columns}
          rows={rows}
          barThickness={barThickness}
          speed={speed}
          orientation={orientation}
        />
      }
    >
      <PlaygroundParameterCard label="Canvas BG">
        <PlaygroundColorPicker value={canvasBg} onChange={setCanvasBg} />
      </PlaygroundParameterCard>
      <PlaygroundParameterCard label="Color 1">
        <PlaygroundColorPicker value={color1} onChange={setColor1} />
      </PlaygroundParameterCard>
      <PlaygroundParameterCard label="Color 2">
        <PlaygroundColorPicker value={color2} onChange={setColor2} />
      </PlaygroundParameterCard>
      <PlaygroundParameterCard label="Color 3">
        <PlaygroundColorPicker value={color3} onChange={setColor3} />
      </PlaygroundParameterCard>
      <DialSlider
        label="Columns"
        min={1}
        max={30}
        step={1}
        value={columns}
        onChange={setColumns}
      />
      <DialSlider
        label="Rows"
        min={1}
        max={30}
        step={1}
        value={rows}
        onChange={setRows}
      />
      <DialSlider
        label="Thickness"
        min={0.01}
        max={0.5}
        step={0.01}
        value={barThickness}
        onChange={setBarThickness}
      />
      <DialSlider
        label="Speed"
        min={0.01}
        max={1.5}
        step={0.01}
        value={speed}
        onChange={setSpeed}
      />
      <PlaygroundParameterCard label="Dir">
        <ButtonGroup
          value={orientation}
          onValueChange={(val) => setOrientation(val as any)}
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
      </PlaygroundParameterCard>
    </CustomizerWrapper>
  )
}

// ── 4. SCANNER CUSTOMIZER ──
export function ScannerCustomizer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const [canvasBg, setCanvasBg] = useState('#120f17')
  const [color1, setColor1] = useState('#5227FF')
  const [color2, setColor2] = useState('#FF9FFC')
  const [color3, setColor3] = useState('#FFFFFF')
  const [speed, setSpeed] = useState(0.5)
  const [sweepSpeed, setSweepSpeed] = useState(0.25)
  const [sweepWidth, setSweepWidth] = useState(1.6)
  const [sweepFalloff, setSweepFalloff] = useState(6)
  const [bandDensity, setBandDensity] = useState(11)
  const [lineSharpness, setLineSharpness] = useState(5.5)
  const [scanDirection, setScanDirection] = useState<
    'vertical' | 'horizontal' | 'diagonal'
  >('vertical')

  // Auto transition defaults between light and dark themes
  useEffect(() => {
    if (!mounted) return
    if (resolvedTheme === 'light') {
      if (canvasBg === '#120f17') setCanvasBg('#ffffff')
      if (color1 === '#5227FF') setColor1('#4f46e5')
      if (color2 === '#FF9FFC') setColor2('#ef4444')
      if (color3 === '#FFFFFF') setColor3('#000000')
    } else {
      if (canvasBg === '#ffffff') setCanvasBg('#120f17')
      if (color1 === '#4f46e5') setColor1('#5227FF')
      if (color2 === '#ef4444') setColor2('#FF9FFC')
      if (color3 === '#000000') setColor3('#FFFFFF')
    }
  }, [resolvedTheme, mounted])

  const code = (showDemo: boolean) => `import { Scanner } from '@/components/ui/scanner'

export default function ScannerDemo() {
  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center rounded-xl overflow-hidden border border-white/10"
      style={{ backgroundColor: '${canvasBg}' }}
    >
      <div className="absolute inset-0 z-0">
        <Scanner
          color1="${color1}"
          color2="${color2}"
          color3="${color3}"
          speed={${speed}}
          sweepSpeed={${sweepSpeed}}
          sweepWidth={${sweepWidth}}
          sweepFalloff={${sweepFalloff}}
          bandDensity={${bandDensity}}
          lineSharpness={${lineSharpness}}
          scanDirection="${scanDirection}"
        />
      </div>
      ${
        showDemo
          ? `<div className="relative z-10 text-white font-extrabold text-xl">
        Vibe UI
      </div>`
          : ''
      }
    </div>
  )
}`

  return (
    <CustomizerWrapper
      canvasBg={canvasBg}
      bgId="scanner"
      code={code}
      preview={
        <Scanner
          key={`${color1}-${color2}-${color3}-${speed}-${sweepSpeed}-${sweepWidth}-${sweepFalloff}-${bandDensity}-${lineSharpness}-${scanDirection}`}
          color1={color1}
          color2={color2}
          color3={color3}
          speed={speed}
          sweepSpeed={sweepSpeed}
          sweepWidth={sweepWidth}
          sweepFalloff={sweepFalloff}
          bandDensity={bandDensity}
          lineSharpness={lineSharpness}
          scanDirection={scanDirection}
        />
      }
    >
      <PlaygroundParameterCard label="Canvas BG">
        <PlaygroundColorPicker value={canvasBg} onChange={setCanvasBg} />
      </PlaygroundParameterCard>
      <PlaygroundParameterCard label="Color 1">
        <PlaygroundColorPicker value={color1} onChange={setColor1} />
      </PlaygroundParameterCard>
      <PlaygroundParameterCard label="Color 2">
        <PlaygroundColorPicker value={color2} onChange={setColor2} />
      </PlaygroundParameterCard>
      <PlaygroundParameterCard label="Color 3">
        <PlaygroundColorPicker value={color3} onChange={setColor3} />
      </PlaygroundParameterCard>
      <DialSlider
        label="Noise"
        min={0.01}
        max={2.0}
        step={0.01}
        value={speed}
        onChange={setSpeed}
      />
      <DialSlider
        label="Sweep"
        min={0.01}
        max={1.0}
        step={0.01}
        value={sweepSpeed}
        onChange={setSweepSpeed}
      />
      <DialSlider
        label="Width"
        min={0.1}
        max={3.0}
        step={0.1}
        value={sweepWidth}
        onChange={setSweepWidth}
      />
      <DialSlider
        label="Falloff"
        min={1}
        max={12}
        step={1}
        value={sweepFalloff}
        onChange={setSweepFalloff}
      />
      <DialSlider
        label="Density"
        min={1}
        max={30}
        step={1}
        value={bandDensity}
        onChange={setBandDensity}
      />
      <DialSlider
        label="Sharpness"
        min={0.5}
        max={15}
        step={0.5}
        value={lineSharpness}
        onChange={setLineSharpness}
      />
      <PlaygroundParameterCard label="Dir">
        <ButtonGroup
          value={scanDirection}
          onValueChange={(val) => setScanDirection(val as any)}
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
      </PlaygroundParameterCard>
    </CustomizerWrapper>
  )
}
