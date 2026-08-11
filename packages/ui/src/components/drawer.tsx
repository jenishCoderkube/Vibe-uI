'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = 'Drawer'

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const drawerOverlayVariants = tv({
  base: 'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
  variants: {
    variant: {
      default: 'backdrop-blur-sm',
      glass: 'backdrop-blur-md bg-black/40',
      retro: '',
      glow: 'backdrop-blur-sm bg-black/60',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> & {
    variant?: 'default' | 'glass' | 'retro' | 'glow'
  }
>(({ className, variant, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    data-slot="drawer-overlay"
    className={cn(drawerOverlayVariants({ variant }), className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const drawerContentVariants = tv({
  base: 'fixed z-50 flex flex-col bg-background shadow-lg transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]',
  variants: {
    side: {
      top: 'inset-x-0 top-0 border-b max-h-[80vh] rounded-b-2xl',
      bottom: 'inset-x-0 bottom-0 border-t max-h-[80vh] rounded-t-2xl',
      left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm rounded-r-2xl',
      right:
        'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm rounded-l-2xl',
    },
    variant: {
      default: 'border-border',
      glass:
        'bg-card/90 backdrop-blur-md border-border shadow-xl text-card-foreground',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'border-primary/40 shadow-[0_0_25px_rgba(168,85,247,0.15)] bg-card/95 text-card-foreground',
    },
  },
  defaultVariants: {
    side: 'bottom',
    variant: 'default',
  },
})

export interface DrawerContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerContentVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(
  (
    { className, side = 'bottom', variant = 'default', children, ...props },
    ref,
  ) => (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay variant={variant} />
      <DrawerPrimitive.Content
        ref={ref}
        data-slot="drawer-content"
        className={cn(
          drawerContentVariants({ side, variant }),
          side === 'bottom' &&
            'inset-x-0 bottom-0 mt-24 max-h-[80vh] rounded-t-[10px] border-t',
          side === 'top' &&
            'inset-x-0 top-0 mb-24 max-h-[80vh] rounded-b-[10px] border-b',
          side === 'right' &&
            'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
          side === 'left' &&
            'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
          className,
        )}
        {...props}
      >
        {side === 'bottom' && (
          <div className="mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full bg-muted" />
        )}
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  ),
)
DrawerContent.displayName = 'DrawerContent'

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="drawer-header"
    className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
    {...props}
  />
)
DrawerHeader.displayName = 'DrawerHeader'

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="drawer-footer"
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
)
DrawerFooter.displayName = 'DrawerFooter'

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    data-slot="drawer-title"
    className={cn(
      'text-lg font-semibold leading-none tracking-tight text-foreground',
      className,
    )}
    {...props}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    data-slot="drawer-description"
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
