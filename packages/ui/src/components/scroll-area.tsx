'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const scrollBarVariants = tv({
  base: 'flex touch-none select-none transition-colors duration-200',
  variants: {
    orientation: {
      vertical: 'h-full w-2.5 border-l border-l-transparent p-[1px]',
      horizontal: 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
    },
    variant: {
      default: 'hover:bg-muted/50',
      glass: 'hover:bg-white/5 backdrop-blur-xs',
      retro: 'border-foreground bg-background',
      glow: 'hover:bg-primary/5',
      cyberpunk: 'border-emerald-500/20 bg-black/40 hover:bg-black/60',
    },
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      variant: 'retro',
      className: 'border-l-2 w-3.5',
    },
    {
      orientation: 'horizontal',
      variant: 'retro',
      className: 'border-t-2 h-3.5',
    },
    {
      orientation: 'vertical',
      variant: 'cyberpunk',
      className: 'border-l w-3',
    },
    {
      orientation: 'horizontal',
      variant: 'cyberpunk',
      className: 'border-t h-3',
    },
  ],
  defaultVariants: {
    orientation: 'vertical',
    variant: 'default',
  },
})

const scrollThumbVariants = tv({
  base: 'relative flex-1 rounded-full transition-colors duration-200',
  variants: {
    variant: {
      default: 'bg-muted-foreground/30 hover:bg-muted-foreground/50',
      glass: 'bg-white/20 hover:bg-white/40',
      retro: 'bg-foreground rounded-none border border-foreground',
      glow: 'bg-primary/30 hover:bg-primary/60 shadow-[0_0_6px_rgba(168,85,247,0.4)]',
      cyberpunk:
        'bg-emerald-500/50 hover:bg-emerald-500 rounded-none shadow-[0_0_4px_rgba(16,185,129,0.5)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface ScrollAreaProps
  extends
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>,
    VariantProps<typeof scrollBarVariants> {}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, variant = 'default', ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    data-slot="scroll-area"
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      data-slot="scroll-area-viewport"
      className="h-full w-full rounded-[inherit] [&>div]:!block"
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar variant={variant} />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<
    typeof ScrollAreaPrimitive.ScrollAreaScrollbar
  > &
    VariantProps<typeof scrollBarVariants>
>(
  (
    { className, orientation = 'vertical', variant = 'default', ...props },
    ref,
  ) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(scrollBarVariants({ orientation, variant }), className)}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className={cn(scrollThumbVariants({ variant }))}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  ),
)
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
