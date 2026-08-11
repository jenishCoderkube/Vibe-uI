'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../lib/utils'

const markerVariants = tv({
  base: 'group/marker relative flex min-h-4 w-full items-center gap-2 text-left text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0',
  variants: {
    variant: {
      default: '',
      separator:
        'before:mr-1 before:h-px before:min-w-0 before:flex-1 before:bg-border after:ml-1 after:h-px after:min-w-0 after:flex-1 after:bg-border',
      border: 'border-b border-zinc-800 pb-2',
      glass:
        'bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md text-white/70 w-fit',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,1)] px-3 py-1 w-fit rounded-none font-bold',
      glow: 'text-primary/70 font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]',
      cyberpunk:
        "text-emerald-500 font-mono before:content-['>_'] animate-pulse",
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface MarkerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof markerVariants> {
  asChild?: boolean
}

const Marker = React.forwardRef<HTMLDivElement, MarkerProps>(
  ({ className, variant = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        data-slot="marker"
        className={cn(markerVariants({ variant }), className)}
        {...props}
      />
    )
  },
)
Marker.displayName = 'Marker'

export interface MarkerIconProps extends React.HTMLAttributes<HTMLSpanElement> {}

const MarkerIcon = React.forwardRef<HTMLSpanElement, MarkerIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        data-slot="marker-icon"
        className={cn(
          'size-4 shrink-0 flex items-center justify-center [&_svg]:size-4',
          className,
        )}
        {...props}
      />
    )
  },
)
MarkerIcon.displayName = 'MarkerIcon'

export interface MarkerContentProps extends React.HTMLAttributes<HTMLSpanElement> {}

const MarkerContent = React.forwardRef<HTMLSpanElement, MarkerContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        data-slot="marker-content"
        className={cn(
          'min-w-0 break-words group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center',
          className,
        )}
        {...props}
      />
    )
  },
)
MarkerContent.displayName = 'MarkerContent'

export { Marker, MarkerIcon, MarkerContent }
