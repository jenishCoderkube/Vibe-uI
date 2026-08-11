'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const progressVariants = tv({
  base: 'relative overflow-hidden rounded-full transition-all w-full min-w-[200px]',
  variants: {
    variant: {
      default:
        'h-3 border border-border/50 bg-secondary/50 dark:bg-zinc-800/80',
      retro:
        'h-5 border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glass:
        'h-3 bg-white/10 dark:bg-black/45 border border-white/25 dark:border-white/15 backdrop-blur-md shadow-inner',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const progressIndicatorVariants = tv({
  base: 'h-full w-full flex-1 transition-all duration-500 ease-out',
  variants: {
    variant: {
      default: 'bg-primary dark:bg-white',
      success:
        'bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300',
      retro: 'bg-foreground border-r-2 border-foreground',
      glass: 'bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500',
      gradient: 'bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface ProgressProps extends React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> {
  variant?: 'default' | 'retro' | 'glass'
  indicatorVariant?: 'default' | 'success' | 'retro' | 'glass' | 'gradient'
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant, indicatorVariant, ...props }, ref) => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value
  return (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot="progress"
      className={cn(progressVariants({ variant }), className)}
      value={numValue}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          progressIndicatorVariants({
            variant:
              indicatorVariant ||
              (variant as VariantProps<
                typeof progressIndicatorVariants
              >['variant']),
          }),
        )}
        style={{ transform: `translateX(-${100 - (numValue || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number | string
  max?: number | string
  size?: number | string
  strokeWidth?: number | string
  variant?: 'default' | 'retro' | 'glass'
  indicatorVariant?: 'default' | 'success' | 'retro' | 'glass' | 'gradient'
  showValue?: boolean
}

const CircularProgress = React.forwardRef<
  HTMLDivElement,
  CircularProgressProps
>(
  (
    {
      className,
      value = 0,
      max = 100,
      size = 60,
      strokeWidth = 6,
      variant = 'default',
      indicatorVariant = 'default',
      showValue = false,
      children,
      ...props
    },
    ref,
  ) => {
    const numValue = typeof value === 'string' ? parseFloat(value) : value
    const numMax = typeof max === 'string' ? parseFloat(max) : max
    const numSize = typeof size === 'string' ? parseFloat(size) : size
    const numStrokeWidth =
      typeof strokeWidth === 'string' ? parseFloat(strokeWidth) : strokeWidth

    const radius = (numSize - numStrokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset =
      circumference - (Math.min(numValue, numMax) / numMax) * circumference

    const trackColor =
      {
        default: 'stroke-secondary/50 dark:stroke-zinc-800/80',
        retro: 'stroke-background border-2 stroke-foreground',
        glass: 'stroke-white/10 dark:stroke-black/40',
      }[variant] || 'stroke-secondary/50 dark:stroke-zinc-800/80'

    const indicatorColor =
      {
        default: 'stroke-primary dark:stroke-white',
        success: 'stroke-emerald-500 dark:stroke-emerald-400',
        retro: 'stroke-foreground',
        glass: 'stroke-violet-500',
        gradient: 'stroke-violet-600',
      }[indicatorVariant] || 'stroke-primary dark:stroke-white'

    return (
      <div
        ref={ref}
        data-slot="circular-progress"
        className={cn('relative flex items-center justify-center', className)}
        style={{ width: numSize, height: numSize }}
        {...props}
      >
        <svg className="w-full h-full -rotate-90">
          <circle
            className={cn('fill-none', trackColor)}
            cx={numSize / 2}
            cy={numSize / 2}
            r={radius}
            strokeWidth={numStrokeWidth}
          />
          <circle
            className={cn(
              'fill-none transition-all duration-500 ease-out',
              indicatorColor,
            )}
            cx={numSize / 2}
            cy={numSize / 2}
            r={radius}
            strokeWidth={numStrokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        {showValue && (
          <span className="absolute text-xs font-semibold text-foreground">
            {children || `${Math.round((numValue / numMax) * 100)}%`}
          </span>
        )}
      </div>
    )
  },
)
CircularProgress.displayName = 'CircularProgress'

export { Progress, CircularProgress }
export type { ProgressProps, CircularProgressProps }
