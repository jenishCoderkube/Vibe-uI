'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const spinnerVariants = tv({
  base: 'shrink-0 select-none',
  variants: {
    variant: {
      default: 'text-muted-foreground',
      glass:
        'text-zinc-400 dark:text-zinc-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]',
      retro: 'text-foreground stroke-[3px]',
      glow: 'text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]',
      cyberpunk: 'text-emerald-500 drop-shadow-[0_0_6px_rgba(16,185,129,0.4)]',
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export interface SpinnerProps
  extends React.SVGProps<SVGSVGElement>, VariantProps<typeof spinnerVariants> {
  design?: 'circle' | 'dots' | 'bars' | 'grid' | 'pinwheel' | 'pulse'
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, variant, size, design = 'circle', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        data-slot="spinner"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className={cn(
          spinnerVariants({ variant, size }),
          design === 'circle' && 'animate-spin',
          className,
        )}
        {...props}
      >
        {design === 'circle' && (
          <>
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              data-slot="spinner-track"
            />
            <path
              className="opacity-80"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              data-slot="spinner-head"
            />
          </>
        )}
        {design === 'dots' && (
          <>
            <circle
              cx="4"
              cy="12"
              r="2.5"
              fill="currentColor"
              className="animate-bounce [animation-delay:-0.3s]"
            />
            <circle
              cx="12"
              cy="12"
              r="2.5"
              fill="currentColor"
              className="animate-bounce [animation-delay:-0.15s]"
            />
            <circle
              cx="20"
              cy="12"
              r="2.5"
              fill="currentColor"
              className="animate-bounce"
            />
          </>
        )}
        {design === 'bars' && (
          <>
            <rect
              x="3"
              y="4"
              width="3.5"
              height="16"
              rx="1"
              fill="currentColor"
              className="animate-pulse [animation-delay:-0.3s]"
            />
            <rect
              x="10.25"
              y="4"
              width="3.5"
              height="16"
              rx="1"
              fill="currentColor"
              className="animate-pulse [animation-delay:-0.15s]"
            />
            <rect
              x="17.5"
              y="4"
              width="3.5"
              height="16"
              rx="1"
              fill="currentColor"
              className="animate-pulse"
            />
          </>
        )}
        {design === 'grid' && (
          <>
            <rect
              x="3"
              y="3"
              width="7"
              height="7"
              fill="currentColor"
              className="animate-pulse [animation-delay:0s]"
            />
            <rect
              x="14"
              y="3"
              width="7"
              height="7"
              fill="currentColor"
              className="animate-pulse [animation-delay:0.15s]"
            />
            <rect
              x="3"
              y="14"
              width="7"
              height="7"
              fill="currentColor"
              className="animate-pulse [animation-delay:0.3s]"
            />
            <rect
              x="14"
              y="14"
              width="7"
              height="7"
              fill="currentColor"
              className="animate-pulse [animation-delay:0.45s]"
            />
          </>
        )}
        {design === 'pinwheel' && (
          <>
            <circle
              cx="12"
              cy="4"
              r="2"
              fill="currentColor"
              className="animate-pulse [animation-delay:0s]"
            />
            <circle
              cx="17.66"
              cy="6.34"
              r="2"
              fill="currentColor"
              className="animate-pulse [animation-delay:0.1s]"
            />
            <circle
              cx="20"
              cy="12"
              r="2"
              fill="currentColor"
              className="animate-pulse [animation-delay:0.2s]"
            />
            <circle
              cx="17.66"
              cy="17.66"
              r="2"
              fill="currentColor"
              className="animate-pulse [animation-delay:0.3s]"
            />
            <circle
              cx="12"
              cy="20"
              r="2"
              fill="currentColor"
              className="animate-pulse [animation-delay:0.4s]"
            />
            <circle
              cx="6.34"
              cy="17.66"
              r="2"
              fill="currentColor"
              className="animate-pulse [animation-delay:0.5s]"
            />
            <circle
              cx="4"
              cy="12"
              r="2"
              fill="currentColor"
              className="animate-pulse [animation-delay:0.6s]"
            />
            <circle
              cx="6.34"
              cy="6.34"
              r="2"
              fill="currentColor"
              className="animate-pulse [animation-delay:0.7s]"
            />
          </>
        )}
        {design === 'pulse' && (
          <>
            <circle
              cx="12"
              cy="12"
              r="8"
              fill="currentColor"
              className="animate-ping opacity-75"
              style={{ transformOrigin: 'center' }}
            />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </>
        )}
      </svg>
    )
  },
)

Spinner.displayName = 'Spinner'

export { Spinner, spinnerVariants }
