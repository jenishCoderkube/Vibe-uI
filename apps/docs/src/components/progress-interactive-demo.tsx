'use client'

import React, { useState } from 'react'
import { Progress, CircularProgress, Slider } from 'vibe-ui'

export function ProgressInteractiveDemo() {
  const [value, setValue] = useState([45])

  return (
    <div className="flex flex-col gap-6 p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm w-full max-w-2xl mx-auto shadow-sm">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-foreground">
            Interactive Value Controller
          </span>
          <span className="text-sm font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
            {value[0]}%
          </span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
          className="py-4"
        />
      </div>

      <div className="border-t border-border/50 pt-4 flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Horizontal Progress Designs
        </h4>
        <div className="grid gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              Default Style
            </span>
            <Progress value={value[0]} />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              Glassmorphic Glass
            </span>
            <Progress
              value={value[0]}
              variant="glass"
              indicatorVariant="glass"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              Retro Neobrutalist
            </span>
            <Progress value={value[0]} variant="retro" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">
              Gradient Glow
            </span>
            <Progress value={value[0]} indicatorVariant="gradient" />
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 pt-4 flex flex-col gap-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Circular Progress Designs
        </h4>
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex flex-col items-center gap-2 flex-1 min-w-[100px]">
            <span className="text-[11px] font-medium text-muted-foreground">
              Default
            </span>
            <CircularProgress
              value={value[0]}
              showValue
              size={70}
              strokeWidth={6}
            />
          </div>
          <div className="flex flex-col items-center gap-2 flex-1 min-w-[100px]">
            <span className="text-[11px] font-medium text-muted-foreground">
              Glass
            </span>
            <CircularProgress
              value={value[0]}
              variant="glass"
              indicatorVariant="glass"
              showValue
              size={70}
              strokeWidth={6}
            />
          </div>
          <div className="flex flex-col items-center gap-2 flex-1 min-w-[100px]">
            <span className="text-[11px] font-medium text-muted-foreground">
              Retro
            </span>
            <CircularProgress
              value={value[0]}
              variant="retro"
              showValue
              size={70}
              strokeWidth={6}
            />
          </div>
          <div className="flex flex-col items-center gap-2 flex-1 min-w-[100px]">
            <span className="text-[11px] font-medium text-muted-foreground">
              Gradient
            </span>
            <CircularProgress
              value={value[0]}
              indicatorVariant="gradient"
              showValue
              size={70}
              strokeWidth={6}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
