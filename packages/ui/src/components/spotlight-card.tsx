'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const spotlightCardVariants = tv({
  base: 'relative rounded-xl border text-card-foreground shadow-sm transition-all duration-300 overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:z-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(var(--spotlight-size,350px)_circle_at_var(--mouse-x,-999px)_var(--mouse-y,-999px),var(--spotlight-color,rgba(168,85,247,0.18)),transparent_80%)]',
  variants: {
    variant: {
      default:
        'bg-card border-border hover:border-foreground/20 hover:shadow-md [--spotlight-color:rgba(168,85,247,0.15)]',
      glass:
        'bg-card/70 dark:bg-zinc-900/60 backdrop-blur-md border-border/80 shadow-lg hover:border-primary/40 [--spotlight-color:rgba(255,255,255,0.15)] dark:[--spotlight-color:rgba(255,255,255,0.08)]',
      glow:
        'bg-card/85 border-primary/30 shadow-[0_0_20px_rgba(168,85,247,0.12)] hover:border-primary/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.28)] [--spotlight-color:rgba(168,85,247,0.28)]',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rounded-none [--spotlight-color:rgba(0,0,0,0.06)] dark:[--spotlight-color:rgba(255,255,255,0.08)]',
      cyberpunk:
        'bg-card border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] rounded-none font-mono [--spotlight-color:rgba(16,185,129,0.25)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface SpotlightCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spotlightCardVariants> {
  asChild?: boolean
  spotlightColor?: string
  spotlightSize?: number
}

const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  (
    {
      className,
      variant,
      asChild = false,
      spotlightColor,
      spotlightSize,
      style,
      onMouseMove,
      ...props
    },
    ref,
  ) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
      onMouseMove?.(e)
    }

    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        ref={ref}
        data-slot="spotlight-card"
        onMouseMove={handleMouseMove}
        style={{
          ...(spotlightColor && {
            ['--spotlight-color' as string]: spotlightColor,
          }),
          ...(spotlightSize && {
            ['--spotlight-size' as string]: `${spotlightSize}px`,
          }),
          ...style,
        }}
        className={cn(spotlightCardVariants({ variant }), className)}
        {...props}
      />
    )
  },
)
SpotlightCard.displayName = 'SpotlightCard'

const SpotlightCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="spotlight-card-header"
    className={cn('relative z-10 flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
SpotlightCardHeader.displayName = 'SpotlightCardHeader'

const SpotlightCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="spotlight-card-title"
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight text-foreground',
      className,
    )}
    {...props}
  />
))
SpotlightCardTitle.displayName = 'SpotlightCardTitle'

const SpotlightCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="spotlight-card-description"
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
SpotlightCardDescription.displayName = 'SpotlightCardDescription'

const SpotlightCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="spotlight-card-content"
    className={cn('relative z-10 p-6 pt-0', className)}
    {...props}
  />
))
SpotlightCardContent.displayName = 'SpotlightCardContent'

const SpotlightCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="spotlight-card-footer"
    className={cn('relative z-10 flex items-center p-6 pt-0', className)}
    {...props}
  />
))
SpotlightCardFooter.displayName = 'SpotlightCardFooter'

export {
  SpotlightCard,
  SpotlightCardHeader,
  SpotlightCardFooter,
  SpotlightCardTitle,
  SpotlightCardDescription,
  SpotlightCardContent,
  spotlightCardVariants,
}
