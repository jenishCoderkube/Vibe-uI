'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const sheetOverlayVariants = tv({
  base: 'fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
})

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn(sheetOverlayVariants(), className)}
    {...props}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = tv({
  base: 'fixed z-50 gap-4 p-6 shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300 overflow-y-auto flex flex-col',
  variants: {
    side: {
      top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
      bottom:
        'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
      left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
      right:
        'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
    },
    variant: {
      default: 'bg-background text-foreground border-border',
      glass:
        'bg-background/90 text-foreground border-border backdrop-blur-xl shadow-2xl',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-background text-foreground border-primary/40 shadow-[0_0_30px_rgba(168,85,247,0.25)]',
    },
  },
  defaultVariants: {
    side: 'right',
    variant: 'default',
  },
})

export interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  showCloseButton?: boolean
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      side = 'right',
      variant = 'default',
      showCloseButton = true,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <SheetPortal data-slot="sheet-portal">
      <SheetOverlay data-slot="sheet-overlay" />
      <SheetPrimitive.Content
        ref={ref}
        data-slot="sheet-content"
        className={cn(sheetVariants({ side, variant }), className)}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none cursor-pointer"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
)
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="sheet-header"
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className,
    )}
    {...props}
  />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="sheet-footer"
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-auto pt-4',
      className,
    )}
    {...props}
  />
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    data-slot="sheet-title"
    className={cn(
      'text-lg font-bold text-foreground tracking-tight',
      className,
    )}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    data-slot="sheet-description"
    className={cn('text-xs text-muted-foreground leading-relaxed', className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
