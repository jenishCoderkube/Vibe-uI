'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const cardVariants = tv({
  base: 'rounded-xl border text-card-foreground shadow-sm transition-all duration-200',
  variants: {
    variant: {
      default: 'bg-card border-border text-card-foreground',
      glass:
        'bg-card/75 backdrop-blur-md border border-border text-card-foreground shadow-md',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]',
      glow: 'bg-card/80 border border-primary/35 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:border-primary/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] relative overflow-hidden before:absolute before:inset-0 before:rounded-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none before:bg-[radial-gradient(350px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(168,85,247,0.15),transparent_80%)] before:z-0 text-card-foreground',
      cyberpunk:
        'bg-card border border-emerald-500/60 dark:border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] rounded-none font-mono text-card-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface CardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    }

    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        ref={ref}
        data-slot="card"
        onMouseMove={variant === 'glow' ? handleMouseMove : undefined}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      />
    )
  },
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn('relative z-10 flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="card-title"
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight text-foreground',
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="card-description"
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={cn('relative z-10 p-6 pt-0', className)}
    {...props}
  />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn('relative z-10 flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
