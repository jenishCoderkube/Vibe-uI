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
      glow: 'h-3 border border-purple-500/20 bg-purple-500/5 dark:bg-purple-950/10 shadow-[0_0_12px_rgba(168,85,247,0.15)]',
      cyberpunk:
        'h-4 border border-emerald-500/30 bg-emerald-950/10 dark:bg-black rounded-none shadow-[0_0_10px_rgba(16,185,129,0.05)]',
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
      default: 'bg-primary',
      success:
        'bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300',
      retro: 'bg-foreground border-r-2 border-foreground',
      glass: 'bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500',
      gradient: 'bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600',
      glow: 'bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_10px_rgba(168,85,247,0.4)]',
      cyberpunk: 'bg-emerald-500 border-r-2 border-emerald-300 rounded-none',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface ProgressProps extends React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> {
  variant?: 'default' | 'retro' | 'glass' | 'glow' | 'cyberpunk'
  indicatorVariant?:
    | 'default'
    | 'success'
    | 'retro'
    | 'glass'
    | 'gradient'
    | 'glow'
    | 'cyberpunk'
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    { className, value, variant = 'default', indicatorVariant, ...props },
    ref,
  ) => {
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
              variant: indicatorVariant || variant || 'default',
            }),
          )}
          style={{ width: `${numValue || 0}%` }}
        />
      </ProgressPrimitive.Root>
    )
  },
)
Progress.displayName = ProgressPrimitive.Root.displayName

interface CircularProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number | string
  max?: number | string
  size?: number | string
  strokeWidth?: number | string
  variant?: 'default' | 'retro' | 'glass' | 'glow' | 'cyberpunk'
  indicatorVariant?:
    | 'default'
    | 'success'
    | 'retro'
    | 'glass'
    | 'gradient'
    | 'glow'
    | 'cyberpunk'
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
        retro: 'stroke-foreground/15 dark:stroke-white/10',
        glass: 'stroke-white/10 dark:stroke-black/40',
        glow: 'stroke-purple-500/10 dark:stroke-purple-500/5',
        cyberpunk: 'stroke-emerald-500/10 dark:stroke-emerald-950/20',
      }[variant] || 'stroke-secondary/50 dark:stroke-zinc-800/80'

    const indicatorColor =
      {
        default: 'stroke-primary',
        success: 'stroke-emerald-500 dark:stroke-emerald-400',
        retro: 'stroke-foreground',
        glass: 'stroke-violet-500',
        gradient: 'stroke-violet-600',
        glow: 'stroke-purple-500 [filter:drop-shadow(0_0_4px_rgba(168,85,247,0.5))]',
        cyberpunk: 'stroke-emerald-500',
      }[
        indicatorVariant === 'default' && variant !== 'default'
          ? variant
          : indicatorVariant
      ] || 'stroke-primary'

    const textStyle =
      {
        default: 'text-foreground',
        retro: 'font-mono font-bold text-foreground',
        glass: 'font-semibold text-violet-500 dark:text-violet-400',
        glow: 'font-medium text-purple-500 dark:text-purple-400 [filter:drop-shadow(0_0_3px_rgba(168,85,247,0.4))]',
        cyberpunk: 'font-mono text-emerald-500 dark:text-emerald-400',
      }[variant] || 'text-foreground'

    return (
      <div
        ref={ref}
        data-slot="circular-progress"
        className={cn(
          'relative flex items-center justify-center',
          variant === 'retro' &&
            'bg-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-full',
          className,
        )}
        style={{ width: numSize, height: numSize }}
        {...props}
      >
        <svg className="w-full h-full -rotate-90">
          {variant === 'retro' && (
            <circle
              className="fill-none stroke-foreground"
              cx={numSize / 2}
              cy={numSize / 2}
              r={numSize / 2 - 1}
              strokeWidth="2"
            />
          )}
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
            strokeLinecap={variant === 'retro' ? 'square' : 'round'}
          />
        </svg>
        {showValue && (
          <span className={cn('absolute text-xs font-semibold', textStyle)}>
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
