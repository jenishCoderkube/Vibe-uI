'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface TextGlitchProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  speed?: 'slow' | 'normal' | 'fast'
  active?: boolean
}

const TextGlitch = React.forwardRef<HTMLSpanElement, TextGlitchProps>(
  ({ className, text, speed = 'normal', active = true, ...props }, ref) => {
    const duration =
      speed === 'slow' ? '2.5s' : speed === 'fast' ? '0.8s' : '1.5s'

    return (
      <span
        ref={ref}
        data-slot="text-glitch"
        data-text={text}
        style={
          {
            '--glitch-duration': duration,
          } as React.CSSProperties
        }
        className={cn(
          'relative inline-block font-extrabold tracking-wider select-none',
          active && [
            'animate-text-glitch',
            // Chromatic red glitch offset
            'before:content-[attr(data-text)] before:absolute before:left-[2px] before:top-0 before:w-full before:h-full before:text-rose-500 before:opacity-85 before:mix-blend-screen before:animate-text-glitch before:[animation-duration:calc(var(--glitch-duration)*0.75)] before:[animation-delay:-0.15s] before:[text-shadow:-1.5px_0_#ef4444]',
            // Chromatic cyan glitch offset
            'after:content-[attr(data-text)] after:absolute after:left-[-2px] after:top-0 after:w-full after:h-full after:text-cyan-400 after:opacity-85 after:mix-blend-screen after:animate-text-glitch after:[animation-duration:calc(var(--glitch-duration)*1.25)] after:[animation-delay:-0.35s] after:[text-shadow:1.5px_0_#22d3ee]',
          ],
          className,
        )}
        {...props}
      >
        {text}
      </span>
    )
  },
)

TextGlitch.displayName = 'TextGlitch'

export { TextGlitch }
