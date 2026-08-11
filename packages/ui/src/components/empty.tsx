'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const emptyVariants = tv({
  base: 'flex flex-col items-center justify-center text-center p-8 rounded-xl border border-dashed border-border bg-card/40 transition-all duration-300 w-full max-w-md mx-auto',
  variants: {
    variant: {
      default: 'border-border bg-card/50 shadow-xs',
      glass:
        'bg-white/5 dark:bg-black/20 border-white/20 dark:border-white/10 backdrop-blur-md shadow-md',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-primary/5 border-primary/30 shadow-[0_0_20px_rgba(168,85,247,0.1)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const emptyIconVariants = tv({
  base: 'mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-200 shadow-xs text-muted-foreground',
  variants: {
    variant: {
      default: 'border-border bg-muted/50 text-muted-foreground',
      glass:
        'bg-white/10 dark:bg-white/5 border-white/20 backdrop-blur-md text-foreground',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-primary/10 border-primary/30 text-primary shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface EmptyProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyVariants> {}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="empty"
        className={cn(emptyVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)
Empty.displayName = 'Empty'

export interface EmptyIconProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyIconVariants> {}

const EmptyIcon = React.forwardRef<HTMLDivElement, EmptyIconProps>(
  ({ className, variant = 'default', children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="empty-icon"
      className={cn(emptyIconVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  ),
)
EmptyIcon.displayName = 'EmptyIcon'

// Alias EmptyMedia to EmptyIcon for composed layout naming compatibility
const EmptyMedia = EmptyIcon

const EmptyTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="empty-title"
    className={cn(
      'text-base font-bold text-foreground tracking-tight mb-1',
      className,
    )}
    {...props}
  >
    {children}
  </h3>
))
EmptyTitle.displayName = 'EmptyTitle'

const EmptyDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="empty-description"
    className={cn(
      'text-xs text-muted-foreground leading-relaxed max-w-sm mb-6',
      className,
    )}
    {...props}
  >
    {children}
  </p>
))
EmptyDescription.displayName = 'EmptyDescription'

const EmptyActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-actions"
    className={cn(
      'flex items-center justify-center gap-3 flex-wrap',
      className,
    )}
    {...props}
  >
    {children}
  </div>
))
EmptyActions.displayName = 'EmptyActions'

const EmptyHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-header"
    className={cn(
      'flex max-w-sm flex-col items-center gap-2 text-center',
      className,
    )}
    {...props}
  >
    {children}
  </div>
))
EmptyHeader.displayName = 'EmptyHeader'

const EmptyContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="empty-content"
    className={cn(
      'flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance',
      className,
    )}
    {...props}
  >
    {children}
  </div>
))
EmptyContent.displayName = 'EmptyContent'

export {
  Empty,
  EmptyIcon,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyActions,
  EmptyHeader,
  EmptyContent,
}
