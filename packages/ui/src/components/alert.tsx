'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const alertVariants = tv({
  base: 'relative w-full rounded-lg border p-4 [&>svg~div]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg+div]:translate-y-[-1px] select-none flex gap-3 items-start transition-all duration-200',
  variants: {
    variant: {
      default: 'bg-background text-foreground border-border',
      destructive:
        'border-destructive/30 text-destructive [&>svg]:text-destructive bg-destructive/5',
      success:
        'border-emerald-500/20 text-emerald-600 dark:text-emerald-400 dark:border-emerald-500/20 [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-400 bg-emerald-500/5',
      warning:
        'border-amber-500/20 text-amber-600 dark:text-amber-400 dark:border-amber-500/20 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400 bg-amber-500/5',
      glass:
        'bg-card/70 border border-border text-card-foreground backdrop-blur-md shadow-sm',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'border-primary bg-primary/5 text-primary shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]',
      cyberpunk:
        'border border-emerald-500/80 bg-card text-emerald-600 dark:text-emerald-400 font-mono rounded-none shadow-[0_0_15px_rgba(16,185,129,0.15)] [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-400',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    data-slot="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    data-slot="alert-title"
    className={cn(
      'font-semibold leading-none tracking-tight mb-1 text-sm',
      className,
    )}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="alert-description"
    className={cn(
      'text-xs opacity-90 leading-relaxed [&_p]:leading-relaxed',
      className,
    )}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
