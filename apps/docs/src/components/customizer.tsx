'use client'

import React, { useState, useEffect } from 'react'
import { Paintbrush, X, Check, Copy } from 'lucide-react'
import { cn } from '../lib/utils'

const COLOR_PRESETS = [
  { name: 'System Default', hsl: 'default', hex: '#6b7280' },
  { name: 'Vibe Purple', hsl: '262 83% 58%', hex: '#9333ea' },
  { name: 'Emerald Cyber', hsl: '142 71% 45%', hex: '#10b981' },
  { name: 'Cyber Crimson', hsl: '346 87% 43%', hex: '#db2777' },
  { name: 'Ocean Blue', hsl: '217 91% 60%', hex: '#3b82f6' },
  { name: 'Amber Gold', hsl: '38 92% 50%', hex: '#f59e0b' },
]

const RADIUS_OPTIONS = [
  { label: 'Sharp', value: '0' },
  { label: 'Sleek', value: '0.3' },
  { label: 'Standard', value: '0.5' },
  { label: 'Soft', value: '0.75' },
  { label: 'Round', value: '1' },
]

export function Customizer() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // Customizer state values
  const [primaryHsl, setPrimaryHsl] = useState('default')
  const [radius, setRadius] = useState('0.5')
  const [blurIntensity, setBlurIntensity] = useState('8')

  // Apply variables to document.documentElement on change
  useEffect(() => {
    const root = document.documentElement
    if (primaryHsl === 'default') {
      root.style.removeProperty('--primary')
    } else {
      root.style.setProperty('--primary', primaryHsl)
    }
    root.style.setProperty('--radius', `${radius}rem`)
    root.style.setProperty('--glass-blur', `${blurIntensity}px`)
  }, [primaryHsl, radius, blurIntensity])

  const copyCssVariables = () => {
    const primaryLine =
      primaryHsl === 'default' ? '' : `\n  --primary: ${primaryHsl};`
    const cssText = `@theme {
  --radius: ${radius}rem;${primaryLine}
  --glass-blur: ${blurIntensity}px;
}`
    navigator.clipboard.writeText(cssText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const PaintbrushIcon = Paintbrush as any
  const XIcon = X as any
  const CheckIcon = Check as any
  const CopyIcon = Copy as any
  const blurPercentage = (Number(blurIntensity) / 24) * 100

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
        title="Customize Theme"
      >
        <PaintbrushIcon className="h-5 w-5" />
      </button>

      {/* Slide-out Customizer Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex justify-end transition-all duration-300',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        {/* Backdrop Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={cn(
            'absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0',
          )}
        />

        {/* Panel Container */}
        <div
          className={cn(
            'relative z-10 flex h-full w-full max-w-sm flex-col bg-background/95 backdrop-blur-xl border-l border-border p-6 text-left text-foreground shadow-2xl transition-transform duration-300',
            isOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
            <div className="flex items-center gap-2">
              <PaintbrushIcon className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Theme Customizer
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable Content wrapper */}
          <div className="flex-1 overflow-y-auto space-y-6 pr-1 no-scrollbar">
            {/* Primary Presets */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Primary Theme Accent
              </label>
              <div className="grid grid-cols-5 gap-2">
                {COLOR_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => setPrimaryHsl(preset.hsl)}
                    style={{ backgroundColor: preset.hex }}
                    className="group relative flex h-10 w-full items-center justify-center rounded-lg cursor-pointer transition-all border border-border/60 hover:scale-105"
                    title={preset.name}
                  >
                    {primaryHsl === preset.hsl && (
                      <CheckIcon className="h-4 w-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Border Radius Options */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Border Corner Radius
              </label>
              <div className="grid grid-cols-5 gap-1">
                {RADIUS_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setRadius(opt.value)}
                    className={`px-1 py-2 text-[10px] font-semibold border rounded-lg transition-all cursor-pointer ${
                      radius === opt.value
                        ? 'border-primary/60 bg-primary/10 text-primary font-bold shadow-sm'
                        : 'border-border bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Glassmorphism Blur Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  Glass Backdrop Blur
                </label>
                <span className="font-mono text-xs text-primary font-bold">
                  {blurIntensity}px
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                value={blurIntensity}
                onChange={(e) => setBlurIntensity(e.target.value)}
                style={{
                  background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${blurPercentage}%, var(--slider-track-bg) ${blurPercentage}%, var(--slider-track-bg) 100%)`,
                }}
                className="w-full h-1 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none [--slider-track-bg:#e4e4e7] dark:[--slider-track-bg:#27272a]"
              />
            </div>

            {/* CSS Output Block */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  Export CSS Config
                </label>
                <button
                  onClick={copyCssVariables}
                  className="flex items-center gap-1 text-[10px] font-semibold text-muted-foreground hover:text-foreground bg-muted/40 hover:bg-muted border border-border px-2 py-1 rounded cursor-pointer transition-all"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="h-3 w-3 text-emerald-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <CopyIcon className="h-3 w-3" />
                      Copy Variables
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3 text-[10px] font-mono rounded-lg bg-muted/50 border border-border text-emerald-600 dark:text-emerald-400 overflow-x-auto leading-relaxed">
                {`@theme {
  --radius: ${radius}rem;${primaryHsl === 'default' ? '' : `\n  --primary: ${primaryHsl};`}
  --glass-blur: ${blurIntensity}px;
}`}
              </pre>
            </div>
          </div>

          <div className="text-[10px] text-muted-foreground text-center pt-4 border-t border-border mt-auto">
            Changes apply instantly to this documentation workspace.
          </div>
        </div>
      </div>
    </>
  )
}
