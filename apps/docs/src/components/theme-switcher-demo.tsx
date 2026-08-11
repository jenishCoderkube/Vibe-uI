'use client'

import React, { useState } from 'react'
import { ThemeSwitcher, Card, Button, Badge, Switch } from 'vibe-ui'
import type { VibeTheme } from 'vibe-ui'

// 1. Default Theme Switcher Demo
export function ThemeSwitcherDemo() {
  const [localTheme, setLocalTheme] = useState<VibeTheme>('default')

  return (
    <div className="w-full min-h-[300px] flex flex-col gap-6 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5 relative overflow-hidden">
      <Card
        variant={localTheme === 'default' ? 'default' : (localTheme as any)}
        className="w-full max-w-xs p-6 flex flex-col gap-4 text-left"
      >
        <Badge
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          className="w-fit"
        >
          {localTheme.toUpperCase()}
        </Badge>
        <p className="text-xs text-muted-foreground">
          Standard preset swapper located bottom-right.
        </p>
        <Button
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          size="sm"
          className="w-full"
        >
          Action
        </Button>
      </Card>
      <ThemeSwitcher
        defaultTheme="default"
        onThemeChange={(t) => setLocalTheme(t)}
        className="absolute bottom-4 right-4 !fixed-none !z-10"
      />
    </div>
  )
}

// 2. Glassmorphic Switcher Demo
export function ThemeSwitcherGlassDemo() {
  const [localTheme, setLocalTheme] = useState<VibeTheme>('glass')

  return (
    <div className="w-full min-h-[300px] flex flex-col gap-6 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5 relative overflow-hidden">
      <Card
        variant={localTheme === 'default' ? 'default' : (localTheme as any)}
        className="w-full max-w-xs p-6 flex flex-col gap-4 text-left"
      >
        <Badge
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          className="w-fit"
        >
          {localTheme.toUpperCase()}
        </Badge>
        <p className="text-xs text-muted-foreground">
          Glassmorphic style button and drop-down menu.
        </p>
        <Button
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          size="sm"
          className="w-full"
        >
          Action
        </Button>
      </Card>
      <ThemeSwitcher
        defaultTheme="glass"
        variant="glass"
        onThemeChange={(t) => setLocalTheme(t)}
        className="absolute bottom-4 right-4 !fixed-none !z-10"
      />
    </div>
  )
}

// 3. Neon Glow Switcher Demo
export function ThemeSwitcherGlowDemo() {
  const [localTheme, setLocalTheme] = useState<VibeTheme>('glow')

  return (
    <div className="w-full min-h-[300px] flex flex-col gap-6 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5 relative overflow-hidden">
      <Card
        variant={localTheme === 'default' ? 'default' : (localTheme as any)}
        className="w-full max-w-xs p-6 flex flex-col gap-4 text-left"
      >
        <Badge
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          className="w-fit"
        >
          {localTheme.toUpperCase()}
        </Badge>
        <p className="text-xs text-muted-foreground">
          Neon glow borders and floating aura effects.
        </p>
        <Button
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          size="sm"
          className="w-full"
        >
          Action
        </Button>
      </Card>
      <ThemeSwitcher
        defaultTheme="glow"
        variant="glow"
        onThemeChange={(t) => setLocalTheme(t)}
        className="absolute bottom-4 right-4 !fixed-none !z-10"
      />
    </div>
  )
}

// 4. Retro Brutalist Switcher Demo
export function ThemeSwitcherRetroDemo() {
  const [localTheme, setLocalTheme] = useState<VibeTheme>('retro')

  return (
    <div className="w-full min-h-[300px] flex flex-col gap-6 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5 relative overflow-hidden">
      <Card
        variant={localTheme === 'default' ? 'default' : (localTheme as any)}
        className="w-full max-w-xs p-6 flex flex-col gap-4 text-left"
      >
        <Badge
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          className="w-fit"
        >
          {localTheme.toUpperCase()}
        </Badge>
        <p className="text-xs text-muted-foreground font-mono">
          Retro brutalist switcher with thick outlines.
        </p>
        <Button
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          size="sm"
          className="w-full"
        >
          Action
        </Button>
      </Card>
      <ThemeSwitcher
        defaultTheme="retro"
        variant="retro"
        onThemeChange={(t) => setLocalTheme(t)}
        className="absolute bottom-4 right-4 !fixed-none !z-10"
      />
    </div>
  )
}

// 5. Cyberpunk Matrix Switcher Demo
export function ThemeSwitcherCyberpunkDemo() {
  const [localTheme, setLocalTheme] = useState<VibeTheme>('cyberpunk')

  return (
    <div className="w-full min-h-[300px] flex flex-col gap-6 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5 relative overflow-hidden">
      <Card
        variant={localTheme === 'default' ? 'default' : (localTheme as any)}
        className="w-full max-w-xs p-6 flex flex-col gap-4 text-left"
      >
        <Badge
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          className="w-fit"
        >
          {localTheme.toUpperCase()}
        </Badge>
        <p className="text-xs text-muted-foreground font-mono">
          Cyberpunk interface styling with neon emerald lines.
        </p>
        <Button
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          size="sm"
          className="w-full"
        >
          Action
        </Button>
      </Card>
      <ThemeSwitcher
        defaultTheme="cyberpunk"
        variant="cyberpunk"
        onThemeChange={(t) => setLocalTheme(t)}
        className="absolute bottom-4 right-4 !fixed-none !z-10"
      />
    </div>
  )
}

// 6. Top Right Float Positioning Demo
export function ThemeSwitcherTopRightDemo() {
  const [localTheme, setLocalTheme] = useState<VibeTheme>('default')

  return (
    <div className="w-full min-h-[300px] flex flex-col gap-6 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5 relative overflow-hidden">
      <Card
        variant={localTheme === 'default' ? 'default' : (localTheme as any)}
        className="w-full max-w-xs p-6 flex flex-col gap-4 text-left"
      >
        <Badge
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          className="w-fit"
        >
          {localTheme.toUpperCase()}
        </Badge>
        <p className="text-xs text-muted-foreground">
          Positional offset variant floating in the top-right corner.
        </p>
        <Button
          variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          size="sm"
          className="w-full"
        >
          Action
        </Button>
      </Card>
      <ThemeSwitcher
        defaultTheme="default"
        onThemeChange={(t) => setLocalTheme(t)}
        className="absolute top-4 right-4 bottom-auto !fixed-none !z-10"
      />
    </div>
  )
}

// 7. Full Preset Customizer Demo (Custom Accent Toggle)
export function ThemeSwitcherCustomDemo() {
  const [localTheme, setLocalTheme] = useState<VibeTheme>('default')

  return (
    <div className="w-full min-h-[300px] flex flex-col gap-6 items-center justify-center p-8 bg-zinc-950/20 rounded-xl border border-white/5 relative overflow-hidden">
      <div className="flex flex-col gap-2 items-center text-center">
        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
          Interactive Custom Event Log
        </span>
        <span className="text-xs font-mono font-bold text-emerald-400">
          Triggered callback: onThemeChange("{localTheme}")
        </span>
      </div>
      <Card
        variant={localTheme === 'default' ? 'default' : (localTheme as any)}
        className="w-full max-w-xs p-6 flex flex-col gap-4 text-left"
      >
        <div className="flex justify-between items-center">
          <Badge
            variant={localTheme === 'default' ? 'default' : (localTheme as any)}
          >
            {localTheme.toUpperCase()}
          </Badge>
          <Switch
            variant={localTheme === 'default' ? 'default' : (localTheme as any)}
            defaultChecked
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Demonstrating target callbacks for custom application dashboards.
        </p>
      </Card>
      <ThemeSwitcher
        defaultTheme="default"
        onThemeChange={(t) => setLocalTheme(t)}
        className="absolute bottom-4 right-4 !fixed-none !z-10"
      />
    </div>
  )
}
