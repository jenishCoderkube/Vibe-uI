'use client'

import * as React from 'react'
import { Marker, MarkerContent, MarkerIcon } from 'vibe-ui'
import { Bell, Info, Sparkles, CheckCircle2 } from 'lucide-react'

export function MarkerBasicDemo() {
  return (
    <Marker>
      <MarkerIcon>
        <Info className="h-4 w-4" />
      </MarkerIcon>
      <MarkerContent>
        Important system notification regarding scheduled downtime.
      </MarkerContent>
    </Marker>
  )
}

export function MarkerSeparatorDemo() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <div className="text-center text-xs text-muted-foreground">
        Messages received earlier today will appear here.
      </div>
      <Marker variant="separator">
        <MarkerContent>Yesterday</MarkerContent>
      </Marker>
    </div>
  )
}

export function MarkerBorderDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Marker variant="border">
        <MarkerIcon>
          <Bell className="h-4 w-4 text-primary" />
        </MarkerIcon>
        <MarkerContent className="font-semibold text-foreground">
          Updates & Activity
        </MarkerContent>
      </Marker>
      <p className="text-xs text-muted-foreground pl-6">
        Configure how notifications, alerts, and mentions are handled in your
        workspaces.
      </p>
    </div>
  )
}

export function MarkerThemesDemo() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-1">
        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
          Default
        </span>
        <Marker
          variant="default"
          className="border border-border p-3 rounded-lg bg-card/50"
        >
          <MarkerIcon>
            <Info className="h-4 w-4" />
          </MarkerIcon>
          <MarkerContent>
            Standard system notification with clean border styling.
          </MarkerContent>
        </Marker>
      </div>

      <div className="space-y-1">
        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
          Glassmorphism
        </span>
        <Marker variant="glass">
          <MarkerIcon>
            <Sparkles className="h-4 w-4 text-cyan-400" />
          </MarkerIcon>
          <MarkerContent>
            Glassmorphic backdrop styling for immersive hero UI segments.
          </MarkerContent>
        </Marker>
      </div>

      <div className="space-y-1">
        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
          Retro Brutalist
        </span>
        <Marker variant="retro">
          <MarkerIcon>
            <CheckCircle2 className="h-4 w-4" />
          </MarkerIcon>
          <MarkerContent>
            Retro high-contrast flat layout styling with dark shadows.
          </MarkerContent>
        </Marker>
      </div>

      <div className="space-y-1">
        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
          Neon Glow
        </span>
        <Marker variant="glow">
          <MarkerIcon>
            <Sparkles className="h-4 w-4" />
          </MarkerIcon>
          <MarkerContent>
            Vibrant ambient glowing shadow effect tailored for dark modes.
          </MarkerContent>
        </Marker>
      </div>

      <div className="space-y-1">
        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
          Cyberpunk Terminal
        </span>
        <Marker variant="cyberpunk">
          <MarkerContent>
            Initializing quantum secure connection protocols...
          </MarkerContent>
        </Marker>
      </div>
    </div>
  )
}
