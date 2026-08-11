'use client'

import React, { useEffect, useState } from 'react'
import { Progress, CircularProgress } from 'vibe-ui'

export function ScrollProgressDemo() {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollPercent(percent)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // initial calculation
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col items-center gap-6 p-4 w-full">
      <div className="flex gap-8 items-center justify-center flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-semibold">
            Circular Scroll
          </span>
          <CircularProgress
            value={scrollPercent}
            size={80}
            strokeWidth={8}
            showValue
            indicatorVariant="gradient"
            className="shadow-sm"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-semibold">
            Glass Scroll
          </span>
          <CircularProgress
            value={scrollPercent}
            size={80}
            strokeWidth={8}
            showValue
            variant="glass"
            indicatorVariant="glass"
            className="shadow-sm"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-semibold">
            Retro Scroll
          </span>
          <CircularProgress
            value={scrollPercent}
            size={80}
            strokeWidth={8}
            showValue
            variant="retro"
            indicatorVariant="retro"
            className="shadow-sm"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between text-xs font-semibold text-muted-foreground">
          <span>Horizontal Scroll Indicator</span>
          <span>{Math.round(scrollPercent)}%</span>
        </div>
        <Progress value={scrollPercent} indicatorVariant="success" />
      </div>
    </div>
  )
}
