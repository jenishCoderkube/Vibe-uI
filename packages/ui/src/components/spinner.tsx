'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const spinnerVariants = tv({
  base: 'animate-spin shrink-0 select-none',
  variants: {
    variant: {
      default: 'text-muted-foreground',
      glass: 'text-zinc-300 drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]',
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
  extends React.SVGProps<SVGSVGElement>, VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        data-slot="spinner"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className={cn(spinnerVariants({ variant, size }), className)}
        {...props}
      >
        <circle
          className="opacity-20"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="opacity-80"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    )
  },
)

Spinner.displayName = 'Spinner'

export { Spinner, spinnerVariants }
