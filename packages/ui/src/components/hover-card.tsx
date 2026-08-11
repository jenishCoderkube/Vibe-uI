'use client'

import * as React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const hoverCardContentVariants = tv({
  base: 'z-50 w-64 rounded-md border p-4 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  variants: {
    variant: {
      default: 'bg-popover text-popover-foreground border-border',
      glass:
        'bg-white/10 dark:bg-white/[0.03] backdrop-blur-md border border-white/20 dark:border-white/10 text-foreground',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-primary/5 border border-primary/30 shadow-[0_0_20px_rgba(168,85,247,0.15)] text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

export interface HoverCardContentProps
  extends
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>,
    VariantProps<typeof hoverCardContentVariants> {}

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(
  (
    {
      className,
      align = 'center',
      sideOffset = 4,
      variant = 'default',
      ...props
    },
    ref,
  ) => (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        ref={ref}
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(hoverCardContentVariants({ variant }), className)}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  ),
)
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
