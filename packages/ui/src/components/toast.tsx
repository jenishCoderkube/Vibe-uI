'use client'

import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { X } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const ToastProvider = ToastPrimitives.Provider

const toastViewportVariants = tv({
  base: 'flex max-h-screen w-full flex-col p-4 md:max-w-[420px] outline-none',
  variants: {
    position: {
      'top-left': 'fixed z-[9999] top-14 md:top-16 left-0 flex-col',
      'top-right': 'fixed z-[9999] top-14 md:top-16 right-0 flex-col',
      'top-center':
        'fixed z-[9999] top-14 md:top-16 left-1/2 -translate-x-1/2 flex-col items-center',
      'bottom-left': 'fixed z-[9999] bottom-0 left-0 flex-col-reverse',
      'bottom-right': 'fixed z-[9999] bottom-0 right-0 flex-col-reverse',
      'bottom-center':
        'fixed z-[9999] bottom-0 left-1/2 -translate-x-1/2 flex-col-reverse items-center',
      inline: 'relative z-0 flex-col',
    },
  },
  defaultVariants: {
    position: 'bottom-right',
  },
})

export interface ToastViewportProps
  extends
    React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>,
    VariantProps<typeof toastViewportVariants> {}

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  ToastViewportProps
>(({ className, position = 'bottom-right', ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    data-slot="toast-viewport"
    className={cn(toastViewportVariants({ position }), className)}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = tv({
  base: 'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80',
  variants: {
    variant: {
      default: 'border bg-background text-foreground border-border',
      destructive:
        'destructive group border-destructive bg-destructive text-destructive-foreground',
      glass:
        'bg-card/90 backdrop-blur-md border border-border text-card-foreground shadow-lg',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-card border border-primary/40 shadow-[0_0_20px_rgba(168,85,247,0.2)] text-card-foreground',
      cyberpunk:
        'rounded-none border border-emerald-500 bg-black text-emerald-400 font-mono shadow-[0_0_15px_rgba(16,185,129,0.15)]',
    },
    position: {
      'top-left':
        'data-[state=open]:animate-slide-in-from-top data-[state=closed]:animate-slide-out-to-left',
      'top-right':
        'data-[state=open]:animate-slide-in-from-top data-[state=closed]:animate-slide-out-to-right',
      'top-center':
        'data-[state=open]:animate-slide-in-from-top data-[state=closed]:animate-slide-out-to-top',
      'bottom-left':
        'data-[state=open]:animate-slide-in-from-bottom data-[state=closed]:animate-slide-out-to-left',
      'bottom-right':
        'data-[state=open]:animate-slide-in-from-bottom data-[state=closed]:animate-slide-out-to-right',
      'bottom-center':
        'data-[state=open]:animate-slide-in-from-bottom data-[state=closed]:animate-slide-out-to-bottom',
    },
  },
  defaultVariants: {
    variant: 'default',
    position: 'bottom-right',
  },
})

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, position, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      data-slot="toast"
      className={cn(toastVariants({ variant, position }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    data-slot="toast-action"
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-border bg-transparent px-3 text-xs font-semibold ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive cursor-pointer',
      className,
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    data-slot="toast-close"
    className={cn(
      'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 cursor-pointer',
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    data-slot="toast-title"
    className={cn('text-sm font-semibold [&+div]:text-xs', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    data-slot="toast-description"
    className={cn('text-xs opacity-90', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
