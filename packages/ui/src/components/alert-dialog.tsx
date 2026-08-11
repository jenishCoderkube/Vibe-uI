'use client'

import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'
import { buttonVariants } from './button'

const AlertDialog = AlertDialogPrimitive.Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger
const AlertDialogPortal = AlertDialogPrimitive.Portal

const alertOverlayVariants = tv({
  base: 'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
  variants: {
    variant: {
      default: 'backdrop-blur-sm',
      glass: 'backdrop-blur-md !bg-black/40',
      retro: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> & {
    variant?: 'default' | 'glass' | 'retro'
  }
>(({ className, variant, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(alertOverlayVariants({ variant }), className)}
    data-slot="alert-dialog-overlay"
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const alertContentVariants = tv({
  base: 'fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] sm:w-full sm:max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out sm:rounded-lg max-h-[90vh] overflow-y-auto',
  variants: {
    variant: {
      default: 'border-border text-foreground',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glass:
        'bg-popover/60 backdrop-blur-md border border-border text-popover-foreground shadow-xl rounded-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & {
    variant?: 'default' | 'glass' | 'retro'
  }
>(({ className, variant, ...props }, ref) => (
  <AlertDialogPortal data-slot="alert-dialog-portal">
    <AlertDialogOverlay variant={variant} />
    <AlertDialogPrimitive.Content
      ref={ref}
      data-slot="alert-dialog-content"
      className={cn(alertContentVariants({ variant }), className)}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="alert-dialog-header"
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className,
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = 'AlertDialogHeader'

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="alert-dialog-footer"
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 sm:gap-0',
      className,
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = 'AlertDialogFooter'

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    data-slot="alert-dialog-title"
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description asChild>
    <div
      ref={ref}
      data-slot="alert-dialog-description"
      className={cn('text-sm text-muted-foreground leading-relaxed', className)}
      {...props}
    />
  </AlertDialogPrimitive.Description>
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> & {
    buttonVariant?: VariantProps<typeof buttonVariants>['variant']
  }
>(({ className, buttonVariant = 'default', ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    data-slot="alert-dialog-action"
    className={cn(buttonVariants({ variant: buttonVariant }), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> & {
    buttonVariant?: VariantProps<typeof buttonVariants>['variant']
  }
>(({ className, buttonVariant = 'outline', ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    data-slot="alert-dialog-cancel"
    className={cn(buttonVariants({ variant: buttonVariant }), className)}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
