'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const TooltipProvider = TooltipPrimitive.Provider

const TooltipRoot = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const tooltipContentVariants = tv({
  base: 'z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  variants: {
    variant: {
      default: 'bg-card border border-border text-foreground',
      glass:
        'bg-popover/90 backdrop-blur-md border border-border text-popover-foreground shadow-md',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-card border border-border shadow-[0_0_15px_rgba(0,0,0,0.15)] dark:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface TooltipContentProps
  extends
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> {}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, variant, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(tooltipContentVariants({ variant }), className)}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

// Convenience wrapper for backward compatibility with Vibe UI's existing interface
export interface TooltipProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>,
    VariantProps<typeof tooltipContentVariants> {
  content: React.ReactNode
  children: React.ReactNode
  delay?: number
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  variant,
  delay = 200,
  className,
  ...props
}) => {
  return (
    <TooltipProvider delayDuration={delay}>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent variant={variant} className={className} {...props}>
          {content}
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  )
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipRoot as TooltipRootComponent,
}
