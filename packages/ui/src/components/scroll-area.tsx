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
      default:
        'hover:bg-muted/50 [&>div]:bg-muted-foreground/30 hover:[&>div]:bg-muted-foreground/50',
      glass:
        'hover:bg-white/5 [&>div]:bg-white/20 hover:[&>div]:bg-white/40 backdrop-blur-sm',
      retro:
        'border-2 border-foreground bg-background [&>div]:bg-foreground [&>div]:rounded-none w-3.5',
      glow: 'hover:bg-primary/5 [&>div]:bg-primary/30 hover:[&>div]:bg-primary/60 hover:shadow-[0_0_8px_rgba(168,85,247,0.4)]',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
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
>(({ className, children, variant, ...props }, ref) => (
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
>(({ className, orientation = 'vertical', variant, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    data-slot="scroll-area-scrollbar"
    orientation={orientation}
    className={cn(scrollBarVariants({ orientation, variant }), className)}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      data-slot="scroll-area-thumb"
      className="relative flex-1 rounded-full bg-border transition-colors"
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
