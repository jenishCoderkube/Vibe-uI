'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const popoverContentVariants = tv({
  base: 'z-50 w-72 rounded-md border p-4 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  variants: {
    variant: {
      default: 'bg-popover text-popover-foreground border-border',
      glass:
        'bg-popover/90 backdrop-blur-xl border border-border text-popover-foreground shadow-xl',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-popover border border-primary/40 shadow-[0_0_20px_rgba(168,85,247,0.2)] text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

export interface PopoverContentProps
  extends
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
    VariantProps<typeof popoverContentVariants> {}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
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
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(popoverContentVariants({ variant }), className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  ),
)
PopoverContent.displayName = PopoverPrimitive.Content.displayName

const PopoverHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="popover-header"
    className={cn('flex flex-col gap-1 text-sm', className)}
    {...props}
  />
)
PopoverHeader.displayName = 'PopoverHeader'

const PopoverTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="popover-title"
    className={cn(
      'font-medium leading-none tracking-tight text-foreground',
      className,
    )}
    {...props}
  />
)
PopoverTitle.displayName = 'PopoverTitle'

const PopoverDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="popover-description"
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
PopoverDescription.displayName = 'PopoverDescription'

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
}
