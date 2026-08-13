'use client'

import * as React from 'react'
import { cn } from '../lib/utils'
import {
  Palette,
  Sparkles,
  Sliders,
  Check,
  Terminal,
  ShieldAlert,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from './dropdown-menu'

export type VibeTheme = 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'

export interface ThemeSwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  onThemeChange?: (theme: VibeTheme) => void
  defaultTheme?: VibeTheme
  variant?: VibeTheme
}

const THEME_OPTIONS: {
  value: VibeTheme
  label: string
  desc: string
  icon: any
  color: string
}[] = [
  {
    value: 'default',
    label: 'Default Minimal',
    desc: 'Clean & neutral corporate aesthetics',
    icon: Sliders,
    color: 'bg-zinc-500',
  },
  {
    value: 'glass',
    label: 'Glassmorphism',
    desc: 'Frosted panels & elegant transparency',
    icon: Sparkles,
    color: 'bg-sky-400',
  },
  {
    value: 'glow',
    label: 'Neon Glow',
    desc: 'Intense color accents & aura shadows',
    icon: Palette,
    color: 'bg-purple-500',
  },
  {
    value: 'retro',
    label: 'Retro Brutalist',
    desc: 'Thick outlines & hard offset shadows',
    icon: ShieldAlert,
    color: 'bg-amber-500',
  },
  {
    value: 'cyberpunk',
    label: 'Cyberpunk Matrix',
    desc: 'Glitch scanlines & terminal emeralds',
    icon: Terminal,
    color: 'bg-emerald-500',
  },
]

const ThemeSwitcher = React.forwardRef<HTMLDivElement, ThemeSwitcherProps>(
  (
    {
      className,
      onThemeChange,
      defaultTheme = 'default',
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    const [activeTheme, setActiveTheme] =
      React.useState<VibeTheme>(defaultTheme)

    const handleThemeSelect = (theme: VibeTheme) => {
      setActiveTheme(theme)

      // Apply classes on the document element so the page styles adapt automatically
      const root = document.documentElement
      THEME_OPTIONS.forEach((t) => {
        root.classList.remove(`theme-${t.value}`)
      })
      if (theme !== 'default') {
        root.classList.add(`theme-${theme}`)
      }

      if (onThemeChange) {
        onThemeChange(theme)
      }
    }

    return (
      <div
        ref={ref}
        data-slot="theme-switcher"
        className={cn('fixed bottom-6 right-6 z-50', className)}
        {...props}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              data-slot="theme-switcher-button"
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer border relative overflow-hidden',
                variant === 'default' &&
                  'bg-primary text-primary-foreground border-border shadow-[0_0_20px_rgba(168,85,247,0.3)]',
                variant === 'glass' &&
                  'bg-popover/90 text-popover-foreground border-border backdrop-blur-md hover:bg-popover shadow-lg',
                variant === 'glow' &&
                  'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_22px_rgba(168,85,247,0.5)]',
                variant === 'retro' &&
                  'border-2 border-foreground bg-background text-foreground shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,1)] rounded-none',
                variant === 'cyberpunk' &&
                  'border border-emerald-500 bg-card text-emerald-600 dark:text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.25)] hover:shadow-[0_0_20px_rgba(16,185,129,0.45)] rounded-none',
              )}
              title="Toggle Visual Theme"
            >
              <Palette className="h-5 w-5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            side="top"
            sideOffset={12}
            className={cn(
              'w-[280px] p-2 shadow-2xl z-50',
              variant === 'default' &&
                'rounded-xl border border-border bg-popover/90 backdrop-blur-xl text-popover-foreground',
              variant === 'glass' &&
                'rounded-xl border border-border bg-popover/80 backdrop-blur-xl text-popover-foreground',
              variant === 'glow' &&
                'rounded-xl border border-primary/30 bg-popover/95 text-popover-foreground shadow-[0_0_20px_rgba(168,85,247,0.15)]',
              variant === 'retro' &&
                'rounded-none border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_rgba(255,255,255,1)]',
              variant === 'cyberpunk' &&
                'rounded-none border border-emerald-500 bg-card text-emerald-600 dark:text-emerald-400 font-mono shadow-[0_0_15px_rgba(16,185,129,0.25)]',
            )}
          >
            <DropdownMenuLabel
              className={cn(
                'text-xs font-bold uppercase tracking-widest px-2 py-1.5 select-none',
                variant === 'retro'
                  ? 'text-foreground'
                  : variant === 'cyberpunk'
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-muted-foreground',
              )}
            >
              Visual Preset
            </DropdownMenuLabel>
            <DropdownMenuSeparator
              className={
                variant === 'retro'
                  ? 'bg-foreground h-0.5'
                  : variant === 'cyberpunk'
                    ? 'bg-emerald-500/25'
                    : 'bg-muted'
              }
            />
            <div className="flex flex-col gap-1 mt-1">
              {THEME_OPTIONS.map((theme) => {
                const ThemeIcon = theme.icon
                return (
                  <DropdownMenuItem
                    key={theme.value}
                    onClick={() => handleThemeSelect(theme.value)}
                    className={cn(
                      'flex items-center gap-3 w-full text-left p-2 rounded-lg border transition-all duration-200 cursor-pointer group',
                      // Selected state styling
                      activeTheme === theme.value
                        ? variant === 'cyberpunk'
                          ? 'border-emerald-400 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : variant === 'retro'
                            ? 'border-foreground bg-foreground text-background'
                            : 'border-primary bg-primary/10 text-foreground font-semibold'
                        : variant === 'cyberpunk'
                          ? 'border-emerald-950/40 bg-card text-emerald-700 dark:text-emerald-500 hover:text-emerald-400 hover:bg-muted'
                          : variant === 'retro'
                            ? 'border-transparent bg-background text-muted-foreground hover:text-foreground hover:bg-muted'
                            : 'border-transparent bg-card text-muted-foreground hover:text-foreground hover:bg-muted',
                      // Preset corners
                      (variant === 'retro' || variant === 'cyberpunk') &&
                        'rounded-none',
                    )}
                  >
                    <div
                      className={cn(
                        'h-7 w-7 rounded-md flex items-center justify-center text-white font-bold shrink-0',
                        theme.color,
                        (variant === 'retro' || variant === 'cyberpunk') &&
                          'rounded-none',
                      )}
                    >
                      <ThemeIcon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold">{theme.label}</div>
                      <div className="text-[10px] opacity-75 truncate">
                        {theme.desc}
                      </div>
                    </div>
                    {activeTheme === theme.value && (
                      <Check
                        className={cn(
                          'h-4 w-4 shrink-0',
                          variant === 'cyberpunk'
                            ? 'text-emerald-400'
                            : variant === 'retro'
                              ? 'text-background'
                              : 'text-primary',
                        )}
                      />
                    )}
                  </DropdownMenuItem>
                )
              })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
)

ThemeSwitcher.displayName = 'ThemeSwitcher'

export { ThemeSwitcher }
