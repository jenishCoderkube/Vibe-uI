'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  direction?: 'left' | 'right' | 'up' | 'down'
  speed?: number // animation speed in seconds
  fade?: boolean
  gap?: string // margin/padding spacing between items
  repeat?: number // number of children repetitions to loop seamlessly
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      reverse = false,
      pauseOnHover = false,
      direction = 'left',
      speed = 12,
      fade = true,
      gap = '1rem',
      repeat = 4,
      children,
      ...props
    },
    ref,
  ) => {
    const isVertical = direction === 'up' || direction === 'down'

    // Construct inline styles for standard custom variables
    const marqueeStyles = {
      '--gap': gap,
      '--duration': `${speed}s`,
    } as React.CSSProperties

    return (
      <div
        ref={ref}
        style={marqueeStyles}
        data-slot="marquee"
        className={cn(
          'group/marquee relative flex overflow-hidden p-2 select-none',
          isVertical ? 'flex-col' : 'flex-row',
          className,
        )}
        {...props}
      >
        {/* Render repeated sets for infinite visual looping */}
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            data-slot="marquee-content"
            style={{
              animationDuration: `${speed}s`,
              willChange: 'transform',
            }}
            className={cn(
              'flex shrink-0 justify-around [gap:var(--gap)] transform-gpu',
              isVertical
                ? 'flex-col pb-[var(--gap)] animate-marquee-vertical'
                : 'flex-row pr-[var(--gap)] animate-marquee',
              // Direction control modifiers
              direction === 'right' && 'animate-marquee-reverse',
              direction === 'down' && 'animate-marquee-vertical-reverse',
              reverse && '[animation-direction:reverse]',
              pauseOnHover &&
                'group-hover/marquee:[animation-play-state:paused]',
            )}
          >
            {children}
          </div>
        ))}

        {/* Faded edge overlay gradients */}
        {fade && (
          <>
            <div
              className={cn(
                'pointer-events-none absolute z-10',
                isVertical
                  ? 'inset-x-0 top-0 h-12 bg-gradient-to-b from-background to-transparent'
                  : 'inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent',
              )}
            />
            <div
              className={cn(
                'pointer-events-none absolute z-10',
                isVertical
                  ? 'inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent'
                  : 'inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent',
              )}
            />
          </>
        )}
      </div>
    )
  },
)

Marquee.displayName = 'Marquee'

export { Marquee }
