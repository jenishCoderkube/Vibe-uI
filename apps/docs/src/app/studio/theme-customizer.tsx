'use client'

import React, { useState, useMemo } from 'react'
import {
  Download,
  Copy,
  Check,
  RotateCcw,
  Code,
  Sun,
  Moon,
  Sparkles,
  Sliders,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'
import { useTheme } from 'next-themes'
import { cn } from '../../lib/utils'

export interface ThemeColors {
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  accent: string
  accentForeground: string
  background: string
  foreground: string
  card: string
  cardForeground: string
  border: string
  ring: string
  radius: number // in rem e.g. 0.5
}

export interface ThemePreset {
  id: string
  name: string
  description: string
  light: ThemeColors
  dark: ThemeColors
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'vibe-purple',
    name: 'Vibe Purple',
    description: 'Electric violet & deep indigo styling',
    light: {
      primary: '#7c3aed',
      primaryForeground: '#ffffff',
      secondary: '#f3e8ff',
      secondaryForeground: '#6b21a8',
      accent: '#a855f7',
      accentForeground: '#ffffff',
      background: '#ffffff',
      foreground: '#0f172a',
      card: '#ffffff',
      cardForeground: '#0f172a',
      border: '#e2e8f0',
      ring: '#7c3aed',
      radius: 0.5,
    },
    dark: {
      primary: '#a855f7',
      primaryForeground: '#09090b',
      secondary: '#2e1065',
      secondaryForeground: '#e9d5ff',
      accent: '#c084fc',
      accentForeground: '#09090b',
      background: '#09090b',
      foreground: '#f8fafc',
      card: '#120f17',
      cardForeground: '#f8fafc',
      border: '#27272a',
      ring: '#a855f7',
      radius: 0.5,
    },
  },
  {
    id: 'emerald-neon',
    name: 'Emerald Neon',
    description: 'Futuristic matrix emerald & cyber teal',
    light: {
      primary: '#059669',
      primaryForeground: '#ffffff',
      secondary: '#ecfdf5',
      secondaryForeground: '#065f46',
      accent: '#10b981',
      accentForeground: '#ffffff',
      background: '#ffffff',
      foreground: '#064e3b',
      card: '#ffffff',
      cardForeground: '#064e3b',
      border: '#d1fae5',
      ring: '#059669',
      radius: 0.625,
    },
    dark: {
      primary: '#10b981',
      primaryForeground: '#022c22',
      secondary: '#064e3b',
      secondaryForeground: '#a7f3d0',
      accent: '#34d399',
      accentForeground: '#022c22',
      background: '#041d14',
      foreground: '#ecfdf5',
      card: '#06291d',
      cardForeground: '#ecfdf5',
      border: '#0d593f',
      ring: '#10b981',
      radius: 0.625,
    },
  },
  {
    id: 'cyberpunk-amber',
    name: 'Cyberpunk Amber',
    description: 'High-contrast solar amber & carbon black',
    light: {
      primary: '#d97706',
      primaryForeground: '#ffffff',
      secondary: '#fef3c7',
      secondaryForeground: '#92400e',
      accent: '#f59e0b',
      accentForeground: '#ffffff',
      background: '#ffffff',
      foreground: '#1c1917',
      card: '#ffffff',
      cardForeground: '#1c1917',
      border: '#fde68a',
      ring: '#d97706',
      radius: 0.375,
    },
    dark: {
      primary: '#f59e0b',
      primaryForeground: '#181102',
      secondary: '#451a03',
      secondaryForeground: '#fde68a',
      accent: '#fbbf24',
      accentForeground: '#181102',
      background: '#0c0a09',
      foreground: '#fafaf9',
      card: '#1c1917',
      cardForeground: '#fafaf9',
      border: '#292524',
      ring: '#f59e0b',
      radius: 0.375,
    },
  },
  {
    id: 'ocean-blue',
    name: 'Oceanic Sapphire',
    description: 'Deep cobalt & crystalline sky blue',
    light: {
      primary: '#0284c7',
      primaryForeground: '#ffffff',
      secondary: '#e0f2fe',
      secondaryForeground: '#075985',
      accent: '#38bdf8',
      accentForeground: '#ffffff',
      background: '#ffffff',
      foreground: '#082f49',
      card: '#ffffff',
      cardForeground: '#082f49',
      border: '#bae6fd',
      ring: '#0284c7',
      radius: 0.75,
    },
    dark: {
      primary: '#38bdf8',
      primaryForeground: '#032030',
      secondary: '#0c4a6e',
      secondaryForeground: '#bae6fd',
      accent: '#7dd3fc',
      accentForeground: '#032030',
      background: '#041527',
      foreground: '#f0f9ff',
      card: '#08233e',
      cardForeground: '#f0f9ff',
      border: '#0e3a64',
      ring: '#38bdf8',
      radius: 0.75,
    },
  },
  {
    id: 'crimson-pulse',
    name: 'Crimson Pulse',
    description: 'Vivid carmine red & velvet dark',
    light: {
      primary: '#e11d48',
      primaryForeground: '#ffffff',
      secondary: '#ffe4e6',
      secondaryForeground: '#9f1239',
      accent: '#f43f5e',
      accentForeground: '#ffffff',
      background: '#ffffff',
      foreground: '#4c0519',
      card: '#ffffff',
      cardForeground: '#4c0519',
      border: '#fecdd3',
      ring: '#e11d48',
      radius: 0.5,
    },
    dark: {
      primary: '#fb7185',
      primaryForeground: '#2a040d',
      secondary: '#881337',
      secondaryForeground: '#fecdd3',
      accent: '#f43f5e',
      accentForeground: '#2a040d',
      background: '#150308',
      foreground: '#fff1f2',
      card: '#240610',
      cardForeground: '#fff1f2',
      border: '#4c0519',
      ring: '#fb7185',
      radius: 0.5,
    },
  },
]

export function ThemeCustomizer() {
  const { resolvedTheme } = useTheme()
  const [activePresetId, setActivePresetId] = useState('vibe-purple')
  const [previewMode, setPreviewMode] = useState<'dark' | 'light'>('dark')
  const [exportFormat, setExportFormat] = useState<'tailwind-v4' | 'css-variables' | 'tailwind-v3'>('tailwind-v4')
  const [showExportModal, setShowExportModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const [appliedLive, setAppliedLive] = useState(false)

  // Current custom color state (synced with preset)
  const [lightColors, setLightColors] = useState<ThemeColors>(THEME_PRESETS[0].light)
  const [darkColors, setDarkColors] = useState<ThemeColors>(THEME_PRESETS[0].dark)

  // Select a preset
  const handleSelectPreset = (preset: ThemePreset) => {
    setActivePresetId(preset.id)
    setLightColors(preset.light)
    setDarkColors(preset.dark)
  }

  // Active working palette based on preview mode
  const currentColors = previewMode === 'dark' ? darkColors : lightColors
  const setCurrentColors = (updater: (prev: ThemeColors) => ThemeColors) => {
    if (previewMode === 'dark') {
      setDarkColors(updater)
    } else {
      setLightColors(updater)
    }
  }

  const updateColor = (key: keyof ThemeColors, value: string | number) => {
    setCurrentColors((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  // Reset to original preset values
  const handleReset = () => {
    const p = THEME_PRESETS.find((item) => item.id === activePresetId) || THEME_PRESETS[0]
    setLightColors(p.light)
    setDarkColors(p.dark)
  }

  // Apply to live document
  const handleApplyToDocument = () => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    if (appliedLive) {
      // Revert styles
      root.removeAttribute('data-custom-theme')
      const styleTag = document.getElementById('vibe-custom-theme-tag')
      if (styleTag) styleTag.remove()
      setAppliedLive(false)
    } else {
      let styleTag = document.getElementById('vibe-custom-theme-tag') as HTMLStyleElement | null
      if (!styleTag) {
        styleTag = document.createElement('style')
        styleTag.id = 'vibe-custom-theme-tag'
        document.head.appendChild(styleTag)
      }
      styleTag.innerHTML = `
        :root {
          --primary: ${lightColors.primary} !important;
          --primary-foreground: ${lightColors.primaryForeground} !important;
          --secondary: ${lightColors.secondary} !important;
          --secondary-foreground: ${lightColors.secondaryForeground} !important;
          --accent: ${lightColors.accent} !important;
          --accent-foreground: ${lightColors.accentForeground} !important;
          --ring: ${lightColors.ring} !important;
          --radius: ${lightColors.radius}rem !important;
        }
        .dark {
          --primary: ${darkColors.primary} !important;
          --primary-foreground: ${darkColors.primaryForeground} !important;
          --secondary: ${darkColors.secondary} !important;
          --secondary-foreground: ${darkColors.secondaryForeground} !important;
          --accent: ${darkColors.accent} !important;
          --accent-foreground: ${darkColors.accentForeground} !important;
          --ring: ${darkColors.ring} !important;
          --radius: ${darkColors.radius}rem !important;
        }
      `
      setAppliedLive(true)
    }
  }

  // Export string generators
  const exportTailwindV4 = useMemo(() => {
    return `/* Vibe UI Custom Theme (Tailwind CSS v4) */
@theme inline {
  --color-primary: ${lightColors.primary};
  --color-primary-foreground: ${lightColors.primaryForeground};
  --color-secondary: ${lightColors.secondary};
  --color-secondary-foreground: ${lightColors.secondaryForeground};
  --color-accent: ${lightColors.accent};
  --color-accent-foreground: ${lightColors.accentForeground};
  --color-border: ${lightColors.border};
  --color-ring: ${lightColors.ring};
  --radius-lg: ${lightColors.radius}rem;
  --radius-md: calc(${lightColors.radius}rem - 2px);
  --radius-sm: calc(${lightColors.radius}rem - 4px);
}

@layer base {
  :root {
    --background: ${lightColors.background};
    --foreground: ${lightColors.foreground};
    --card: ${lightColors.card};
    --card-foreground: ${lightColors.cardForeground};
    --primary: ${lightColors.primary};
    --primary-foreground: ${lightColors.primaryForeground};
    --secondary: ${lightColors.secondary};
    --secondary-foreground: ${lightColors.secondaryForeground};
    --accent: ${lightColors.accent};
    --accent-foreground: ${lightColors.accentForeground};
    --border: ${lightColors.border};
    --ring: ${lightColors.ring};
    --radius: ${lightColors.radius}rem;
  }

  .dark {
    --background: ${darkColors.background};
    --foreground: ${darkColors.foreground};
    --card: ${darkColors.card};
    --card-foreground: ${darkColors.cardForeground};
    --primary: ${darkColors.primary};
    --primary-foreground: ${darkColors.primaryForeground};
    --secondary: ${darkColors.secondary};
    --secondary-foreground: ${darkColors.secondaryForeground};
    --accent: ${darkColors.accent};
    --accent-foreground: ${darkColors.accentForeground};
    --border: ${darkColors.border};
    --ring: ${darkColors.ring};
    --radius: ${darkColors.radius}rem;
  }
}`
  }, [lightColors, darkColors])

  const exportCssVariables = useMemo(() => {
    return `/* Vibe UI CSS Variables (:root and .dark) */
:root {
  --background: ${lightColors.background};
  --foreground: ${lightColors.foreground};
  --card: ${lightColors.card};
  --card-foreground: ${lightColors.cardForeground};
  --primary: ${lightColors.primary};
  --primary-foreground: ${lightColors.primaryForeground};
  --secondary: ${lightColors.secondary};
  --secondary-foreground: ${lightColors.secondaryForeground};
  --accent: ${lightColors.accent};
  --accent-foreground: ${lightColors.accentForeground};
  --border: ${lightColors.border};
  --ring: ${lightColors.ring};
  --radius: ${lightColors.radius}rem;
}

.dark {
  --background: ${darkColors.background};
  --foreground: ${darkColors.foreground};
  --card: ${darkColors.card};
  --card-foreground: ${darkColors.cardForeground};
  --primary: ${darkColors.primary};
  --primary-foreground: ${darkColors.primaryForeground};
  --secondary: ${darkColors.secondary};
  --secondary-foreground: ${darkColors.secondaryForeground};
  --accent: ${darkColors.accent};
  --accent-foreground: ${darkColors.accentForeground};
  --border: ${darkColors.border};
  --ring: ${darkColors.ring};
  --radius: ${darkColors.radius}rem;
}`
  }, [lightColors, darkColors])

  const exportTailwindV3 = useMemo(() => {
    return `// tailwind.config.ts (Tailwind CSS v3)
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        primary: {
          DEFAULT: '${darkColors.primary}',
          foreground: '${darkColors.primaryForeground}',
        },
        secondary: {
          DEFAULT: '${darkColors.secondary}',
          foreground: '${darkColors.secondaryForeground}',
        },
        accent: {
          DEFAULT: '${darkColors.accent}',
          foreground: '${darkColors.accentForeground}',
        },
        border: 'var(--border)',
        ring: '${darkColors.ring}',
      },
      borderRadius: {
        lg: '${darkColors.radius}rem',
        md: 'calc(${darkColors.radius}rem - 2px)',
        sm: 'calc(${darkColors.radius}rem - 4px)',
      },
    },
  },
}

export default config`
  }, [darkColors])

  const activeExportString = useMemo(() => {
    if (exportFormat === 'tailwind-v4') return exportTailwindV4
    if (exportFormat === 'css-variables') return exportCssVariables
    return exportTailwindV3
  }, [exportFormat, exportTailwindV4, exportCssVariables, exportTailwindV3])

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeExportString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadCss = () => {
    const blob = new Blob([exportTailwindV4], { type: 'text/css;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `vibe-theme-${activePresetId}.css`
    link.click()
    URL.revokeObjectURL(url)
  }

  const isDarkApp = resolvedTheme === 'dark'

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* ── LEFT SIDEBAR: THEME CONTROLS ── */}
      <aside className="w-[340px] shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-sm flex flex-col h-full overflow-hidden select-none transition-colors duration-200">
        <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-none">
          {/* Preset Palettes */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">
                Preset Palettes
              </label>
              <span className="text-[10px] font-semibold text-purple-600 dark:text-purple-400">
                {THEME_PRESETS.length} Curated
              </span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {THEME_PRESETS.map((preset) => {
                const isActive = activePresetId === preset.id
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset)}
                    className={cn(
                      'w-full flex items-center justify-between px-3 py-2.5 rounded-xl border text-left transition-all cursor-pointer',
                      isActive
                        ? 'border-purple-500 bg-purple-500/10 shadow-sm'
                        : 'border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950/40 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                    )}
                  >
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                        {preset.name}
                        {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />}
                      </div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate max-w-[200px]">
                        {preset.description}
                      </div>
                    </div>
                    {/* Swatches */}
                    <div className="flex items-center gap-1">
                      <div
                        className="w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/20 shadow-xs"
                        style={{ backgroundColor: preset.dark.primary }}
                      />
                      <div
                        className="w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/20 shadow-xs"
                        style={{ backgroundColor: preset.dark.accent }}
                      />
                      <div
                        className="w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/20 shadow-xs"
                        style={{ backgroundColor: preset.dark.secondary }}
                      />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="h-px bg-zinc-200 dark:bg-zinc-800" />

          {/* Mode Switch for Customizer State */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">
                Edit Palette Mode
              </label>
              <div className="inline-flex rounded-lg border border-zinc-200 dark:border-zinc-800 p-0.5 bg-zinc-100 dark:bg-zinc-950">
                <button
                  onClick={() => setPreviewMode('dark')}
                  className={cn(
                    'flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer',
                    previewMode === 'dark'
                      ? 'bg-zinc-900 text-white dark:bg-zinc-800 shadow-xs'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  )}
                >
                  <Moon className="w-3 h-3" />
                  Dark
                </button>
                <button
                  onClick={() => setPreviewMode('light')}
                  className={cn(
                    'flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer',
                    previewMode === 'light'
                      ? 'bg-white text-zinc-900 shadow-xs'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  )}
                >
                  <Sun className="w-3 h-3" />
                  Light
                </button>
              </div>
            </div>
          </div>

          {/* Individual Color Tokens */}
          <div className="space-y-2">
            <label className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500 block">
              Color Tokens ({previewMode})
            </label>

            <div className="space-y-2">
              {[
                { label: 'Primary', key: 'primary' as const },
                { label: 'Primary Text', key: 'primaryForeground' as const },
                { label: 'Secondary', key: 'secondary' as const },
                { label: 'Accent', key: 'accent' as const },
                { label: 'Background', key: 'background' as const },
                { label: 'Foreground', key: 'foreground' as const },
                { label: 'Card Surface', key: 'card' as const },
                { label: 'Border', key: 'border' as const },
                { label: 'Focus Ring', key: 'ring' as const },
              ].map(({ label, key }) => (
                <div
                  key={key}
                  className="flex items-center justify-between px-3 py-2 rounded-xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950/40 hover:border-zinc-300 dark:hover:border-white/10 transition-all"
                >
                  <span className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-300">
                    {label}
                  </span>
                  <div className="relative flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-md border border-black/10 dark:border-white/20 shadow-xs shrink-0"
                      style={{ backgroundColor: currentColors[key] as string }}
                    />
                    <input
                      type="text"
                      value={currentColors[key] as string}
                      onChange={(e) => updateColor(key, e.target.value)}
                      className="w-20 text-[11px] font-mono font-bold uppercase bg-transparent text-zinc-900 dark:text-white border-b border-dashed border-zinc-300 dark:border-zinc-700 focus:outline-none focus:border-purple-500 text-right"
                    />
                    <input
                      type="color"
                      value={currentColors[key] as string}
                      onChange={(e) => updateColor(key, e.target.value)}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Border Radius Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">
                Corner Radius
              </label>
              <span className="text-[11px] font-mono font-bold text-zinc-900 dark:text-white">
                {currentColors.radius}rem
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { label: 'Sharp', val: 0 },
                { label: 'Subtle', val: 0.375 },
                { label: 'Default', val: 0.5 },
                { label: 'Pill', val: 1.25 },
              ].map(({ label, val }) => (
                <button
                  key={label}
                  onClick={() => updateColor('radius', val)}
                  className={cn(
                    'px-2 py-1.5 rounded-lg border text-[10px] font-bold transition-all cursor-pointer',
                    currentColors.radius === val
                      ? 'border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-400'
                      : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR FOOTER */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-950/80 flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-1.5 h-9 px-3 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-bold rounded-xl flex-1 cursor-pointer transition-all active:scale-95 shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
          <button
            onClick={() => setShowExportModal(true)}
            className="flex items-center justify-center gap-1.5 h-9 px-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl flex-1 cursor-pointer transition-all active:scale-95 shadow-md shadow-purple-900/20"
          >
            <Code className="w-3.5 h-3.5" />
            Export CSS
          </button>
        </div>
      </aside>

      {/* ── RIGHT PREVIEW WORKSPACE: LIVE INTERACTIVE SHOWCASE ── */}
      <main
        className="flex-1 h-full overflow-y-auto p-8 relative transition-colors duration-300"
        style={{
          backgroundColor: currentColors.background,
          color: currentColors.foreground,
        }}
      >
        {/* Top Floating Control Pill */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b" style={{ borderColor: currentColors.border }}>
          <div>
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider"
                style={{
                  backgroundColor: `${currentColors.primary}20`,
                  color: currentColors.primary,
                }}
              >
                Live Preview
              </span>
              <h2 className="text-base font-extrabold tracking-tight" style={{ color: currentColors.foreground }}>
                Theme: {THEME_PRESETS.find((p) => p.id === activePresetId)?.name}
              </h2>
            </div>
            <p className="text-xs text-zinc-500 mt-0.5">
              All components dynamically inherit your customized variables and corner radius.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleApplyToDocument}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer',
                appliedLive
                  ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                  : 'bg-zinc-200/60 dark:bg-zinc-800/60 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'
              )}
            >
              <Zap className="w-3.5 h-3.5" />
              {appliedLive ? 'Applied to Site' : 'Apply to Docs'}
            </button>

            <button
              onClick={handleDownloadCss}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download .css
            </button>
          </div>
        </div>

        {/* Live UI Mockup Grid */}
        <div className="max-w-5xl mx-auto space-y-8 pb-16">
          {/* Section 1: Hero Banner Card */}
          <div
            className="p-8 border shadow-lg relative overflow-hidden transition-all"
            style={{
              backgroundColor: currentColors.card,
              borderColor: currentColors.border,
              borderRadius: `${currentColors.radius * 1.5}rem`,
            }}
          >
            <div
              className="absolute -right-24 -top-24 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ backgroundColor: currentColors.primary }}
            />
            <div className="relative z-10 max-w-xl space-y-4">
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-1 text-xs font-bold rounded-full border shadow-xs"
                  style={{
                    backgroundColor: `${currentColors.accent}20`,
                    borderColor: `${currentColors.accent}40`,
                    color: currentColors.accent,
                    borderRadius: `${currentColors.radius}rem`,
                  }}
                >
                  ✨ Release 2.0 Available
                </span>
                <span className="text-xs font-semibold opacity-70">
                  Ultra-lightweight React UI
                </span>
              </div>
              <h1 className="text-3xl font-black tracking-tight" style={{ color: currentColors.foreground }}>
                Craft Unforgettable Digital Experiences with Vibe UI
              </h1>
              <p className="text-sm opacity-80 leading-relaxed">
                Seamlessly copy, customize, and compose production-ready React components with dynamic theming, smooth micro-animations, and full WCAG accessibility.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <button
                  className="px-5 py-2.5 text-xs font-bold shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                  style={{
                    backgroundColor: currentColors.primary,
                    color: currentColors.primaryForeground,
                    borderRadius: `${currentColors.radius}rem`,
                  }}
                >
                  Explore Registry <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  className="px-4 py-2.5 text-xs font-bold border transition-all active:scale-95 cursor-pointer"
                  style={{
                    backgroundColor: currentColors.secondary,
                    color: currentColors.secondaryForeground,
                    borderColor: currentColors.border,
                    borderRadius: `${currentColors.radius}rem`,
                  }}
                >
                  View GitHub
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Interactive Components Playground */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card A: Interactive Form Controls */}
            <div
              className="p-6 border shadow-sm space-y-5"
              style={{
                backgroundColor: currentColors.card,
                borderColor: currentColors.border,
                borderRadius: `${currentColors.radius}rem`,
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold tracking-wide flex items-center gap-2">
                  <Sliders className="w-4 h-4" style={{ color: currentColors.primary }} />
                  Form & Inputs
                </h3>
                <span
                  className="px-2 py-0.5 text-[10px] font-bold rounded-md"
                  style={{
                    backgroundColor: `${currentColors.secondary}`,
                    color: currentColors.secondaryForeground,
                  }}
                >
                  Interactive
                </span>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold block opacity-90">Project Name</label>
                <input
                  type="text"
                  defaultValue="vibe-design-system"
                  className="w-full px-3.5 py-2 text-xs font-medium border bg-transparent outline-none transition-all"
                  style={{
                    borderColor: currentColors.border,
                    borderRadius: `${currentColors.radius * 0.75}rem`,
                    color: currentColors.foreground,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = currentColors.ring
                    e.currentTarget.style.boxShadow = `0 0 0 2px ${currentColors.ring}30`
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = currentColors.border
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>

              {/* Badges showcase */}
              <div className="space-y-2">
                <label className="text-xs font-bold block opacity-90">Badges & Statuses</label>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-2.5 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: currentColors.primary,
                      color: currentColors.primaryForeground,
                      borderRadius: `${currentColors.radius}rem`,
                    }}
                  >
                    Primary
                  </span>
                  <span
                    className="px-2.5 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: currentColors.secondary,
                      color: currentColors.secondaryForeground,
                      borderRadius: `${currentColors.radius}rem`,
                    }}
                  >
                    Secondary
                  </span>
                  <span
                    className="px-2.5 py-1 text-xs font-bold border"
                    style={{
                      borderColor: currentColors.border,
                      color: currentColors.foreground,
                      borderRadius: `${currentColors.radius}rem`,
                    }}
                  >
                    Outline
                  </span>
                  <span
                    className="px-2.5 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: `${currentColors.accent}25`,
                      color: currentColors.accent,
                      borderRadius: `${currentColors.radius}rem`,
                    }}
                  >
                    Accent
                  </span>
                </div>
              </div>

              {/* Buttons Row */}
              <div className="space-y-2 pt-1">
                <label className="text-xs font-bold block opacity-90">Action Buttons</label>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    className="px-3.5 py-1.5 text-xs font-bold shadow-xs active:scale-95 transition-all cursor-pointer"
                    style={{
                      backgroundColor: currentColors.primary,
                      color: currentColors.primaryForeground,
                      borderRadius: `${currentColors.radius}rem`,
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    className="px-3.5 py-1.5 text-xs font-bold border active:scale-95 transition-all cursor-pointer"
                    style={{
                      backgroundColor: currentColors.secondary,
                      color: currentColors.secondaryForeground,
                      borderColor: currentColors.border,
                      borderRadius: `${currentColors.radius}rem`,
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-3.5 py-1.5 text-xs font-bold border active:scale-95 transition-all cursor-pointer"
                    style={{
                      borderColor: currentColors.border,
                      color: currentColors.foreground,
                      borderRadius: `${currentColors.radius}rem`,
                    }}
                  >
                    Ghost
                  </button>
                </div>
              </div>
            </div>

            {/* Card B: Metrics & Feature Card */}
            <div
              className="p-6 border shadow-sm flex flex-col justify-between"
              style={{
                backgroundColor: currentColors.card,
                borderColor: currentColors.border,
                borderRadius: `${currentColors.radius}rem`,
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-lg"
                    style={{
                      backgroundColor: `${currentColors.primary}20`,
                      color: currentColors.primary,
                    }}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Pro Architecture
                  </span>
                  <span className="text-xs font-bold opacity-60">v0.1.34</span>
                </div>

                <div>
                  <div className="text-2xl font-extrabold tracking-tight">$49.00</div>
                  <div className="text-xs opacity-70">Annual plan, billed once. Unlimited projects.</div>
                </div>

                <div className="space-y-2 text-xs">
                  {[
                    '92+ accessible components & templates',
                    'Zero runtime lock-in with clean Tailwind CSS',
                    'Built-in CLI for automated updates & doctor',
                    'Interactive background shader effects',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: currentColors.primary }}
                      />
                      <span className="opacity-85">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t mt-4" style={{ borderColor: currentColors.border }}>
                <button
                  className="w-full py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                  style={{
                    backgroundColor: currentColors.primary,
                    color: currentColors.primaryForeground,
                    borderRadius: `${currentColors.radius}rem`,
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── EXPORT CSS MODAL ── */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-950 select-none">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xs font-bold tracking-wide uppercase text-zinc-900 dark:text-white">
                  Export Theme Code
                </h3>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="w-7 h-7 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 flex items-center justify-center cursor-pointer transition-all active:scale-95"
              >
                ✕
              </button>
            </div>

            {/* Format Tabs */}
            <div className="flex items-center gap-2 px-6 pt-4 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900">
              {[
                { id: 'tailwind-v4', label: 'Tailwind CSS v4 (@theme)' },
                { id: 'css-variables', label: 'CSS Variables (:root / .dark)' },
                { id: 'tailwind-v3', label: 'Tailwind CSS v3 (config)' },
              ].map((fmt) => (
                <button
                  key={fmt.id}
                  onClick={() => setExportFormat(fmt.id as any)}
                  className={cn(
                    'px-3 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer',
                    exportFormat === fmt.id
                      ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400'
                      : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  )}
                >
                  {fmt.label}
                </button>
              ))}
            </div>

            {/* Code Body */}
            <div className="flex-1 overflow-auto bg-zinc-50 dark:bg-zinc-950 p-6 border-b border-zinc-200 dark:border-zinc-900">
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <Highlight
                  theme={isDarkApp ? themes.vsDark : themes.vsLight}
                  code={activeExportString}
                  language={exportFormat === 'tailwind-v3' ? 'typescript' : 'css'}
                >
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                      className={cn('overflow-x-auto p-5 text-xs font-mono leading-relaxed', className)}
                      style={{ ...style, backgroundColor: 'transparent' }}
                    >
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })} className="table-row">
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

            {/* Footer Actions */}
            <div className="p-4 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-between gap-2 select-none">
              <button
                onClick={handleDownloadCss}
                className="flex items-center gap-1.5 px-3.5 py-2 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs font-bold rounded-xl transition-all cursor-pointer active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                Download vibe-theme.css
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center justify-center gap-1.5 h-10 px-4 bg-purple-600 hover:bg-purple-500 active:scale-95 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
