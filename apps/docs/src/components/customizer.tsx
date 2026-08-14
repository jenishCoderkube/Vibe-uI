'use client'

import React, { useState, useEffect } from 'react'
import { Paintbrush, X, Check, Copy, Sliders, Sparkles, Palette, ShieldAlert, Terminal } from 'lucide-react'
import { cn } from '../lib/utils'

const THEME_STYLES = [
  {
    value: 'default',
    label: 'Default',
    icon: Sliders,
    gradient: 'from-zinc-400 to-zinc-600 dark:from-zinc-500 dark:to-zinc-700',
  },
  {
    value: 'glass',
    label: 'Glass',
    icon: Sparkles,
    gradient: 'from-sky-400 to-blue-500',
  },
  {
    value: 'glow',
    label: 'Glow',
    icon: Palette,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    value: 'retro',
    label: 'Retro',
    icon: ShieldAlert,
    gradient: 'from-amber-400 to-orange-600',
  },
  {
    value: 'cyberpunk',
    label: 'Cyber',
    icon: Terminal,
    gradient: 'from-emerald-400 to-teal-600',
  },
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
  const [activeTheme, setActiveTheme] = useState('default')
  const [radius, setRadius] = useState('0.5')
  const [blurIntensity, setBlurIntensity] = useState('8')

  // Detect current theme on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    const root = document.documentElement
    const found = ['glass', 'retro', 'glow', 'cyberpunk'].find((t) =>
      root.classList.contains(`theme-${t}`)
    )
    if (found) {
      setActiveTheme(found)
    }
  }, [])

  // Apply variables to document.documentElement on change
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--radius', `${radius}rem`)
    root.style.setProperty('--glass-blur', `${blurIntensity}px`)
  }, [radius, blurIntensity])

  const handleThemeChange = (theme: string) => {
    setActiveTheme(theme)
    const root = document.documentElement
    const themes = ['glass', 'retro', 'glow', 'cyberpunk']
    themes.forEach((t) => {
      root.classList.remove(`theme-${t}`)
    })
    if (theme !== 'default') {
      root.classList.add(`theme-${theme}`)
    }
  }

  const copyCssVariables = () => {
    const cssText = `@theme {
  --radius: ${radius}rem;
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
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
        title="Customize Theme"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-violet-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
        <PaintbrushIcon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors duration-200" />
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
            'relative z-10 flex h-full w-full max-w-sm flex-col bg-background/85 backdrop-blur-2xl border-l border-border/80 p-6 text-left text-foreground shadow-2xl transition-transform duration-300',
            isOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <PaintbrushIcon className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Theme Customizer
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <XIcon className="h-4 w-4" />
            </button>
          </div>

          {/* Scrollable Content wrapper */}
          <div className="flex-1 overflow-y-auto space-y-6 pr-1 no-scrollbar">
            {/* Active Theme Presets */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Active Theme Style
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {THEME_STYLES.map((style) => {
                  const Icon = style.icon
                  const isActive = activeTheme === style.value
                  return (
                    <button
                      key={style.value}
                      onClick={() => handleThemeChange(style.value)}
                      className={cn(
                        'group flex flex-col items-center justify-center p-2 rounded-lg border text-center cursor-pointer transition-all duration-300 relative',
                        isActive
                          ? 'border-primary bg-primary/10 shadow-[0_0_10px_rgba(168,85,247,0.1)] ring-1 ring-primary/40'
                          : 'border-border/60 bg-muted/20 hover:border-border hover:bg-muted/50'
                      )}
                    >
                      {/* Active Indicator Dot */}
                      {isActive && (
                        <div className="absolute top-1 right-1 flex h-1 w-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1 w-1 bg-primary"></span>
                        </div>
                      )}

                      <div className={cn(
                        'flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-tr text-white mb-1 shadow-sm shrink-0',
                        style.gradient
                      )}>
                        <Icon className="size-3" />
                      </div>

                      <span className="text-[8px] uppercase tracking-wider font-bold text-foreground truncate max-w-full">
                        {style.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Border Radius Options */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Border Corner Radius
              </label>
              <div className="flex bg-muted/30 p-1 rounded-xl border border-border/40 gap-1">
                {RADIUS_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setRadius(opt.value)}
                    className={cn(
                      'flex-1 py-1.5 text-center text-[10px] font-bold rounded-lg transition-all cursor-pointer',
                      radius === opt.value
                        ? 'bg-background border border-border/50 text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Glassmorphism Blur Slider */}
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  Glass Backdrop Blur
                </label>
                <span className="font-mono text-xs text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full">
                  {blurIntensity}px
                </span>
              </div>
              <div className="relative flex items-center">
                <input
                  type="range"
                  min="0"
                  max="24"
                  value={blurIntensity}
                  onChange={(e) => setBlurIntensity(e.target.value)}
                  style={{
                    background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${blurPercentage}%, var(--slider-track-bg) ${blurPercentage}%, var(--slider-track-bg) 100%)`,
                  }}
                  className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none [--slider-track-bg:#e4e4e7] dark:[--slider-track-bg:#27272a]"
                />
              </div>
            </div>

            {/* CSS Output Block */}
            <div className="space-y-3.5 pt-6 border-t border-border/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Export CSS Config
                  </label>
                </div>
                <button
                  onClick={copyCssVariables}
                  className="flex items-center gap-1 text-[10px] font-bold text-foreground bg-muted hover:bg-muted/80 border border-border/80 px-2.5 py-1.5 rounded-lg cursor-pointer transition-all active:scale-95"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="h-3 w-3 text-emerald-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <CopyIcon className="h-3 w-3 text-muted-foreground" />
                      Copy Variables
                    </>
                  )}
                </button>
              </div>
              <div className="relative">
                <div className="p-4 text-[10px] font-mono whitespace-pre rounded-xl bg-[#09090b] text-[#e4e4e7] border border-[#27272a] overflow-x-auto leading-relaxed shadow-inner">
                  {`@theme {
  --radius: ${radius}rem;
  --glass-blur: ${blurIntensity}px;
}`}
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-muted-foreground text-center pt-4 border-t border-border/60 mt-auto">
            Changes apply instantly to this documentation workspace.
          </div>
        </div>
      </div>
    </>
  )
}
export default Customizer
