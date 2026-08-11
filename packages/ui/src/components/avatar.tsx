'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const avatarVariants = tv({
  base: 'relative flex shrink-0 overflow-hidden rounded-full transition-all duration-200 select-none items-center justify-center',
  variants: {
    variant: {
      default: 'bg-muted border border-border',
      glass:
        'bg-white/5 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-md',
      retro:
        'border-2 border-foreground bg-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-muted border border-border hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
    },
    size: {
      default: 'h-10 w-10 text-sm',
      sm: 'h-8 w-8 text-xs',
      lg: 'h-12 w-12 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

// Share variant and size context
const AvatarVariantContext = React.createContext<{
  variant?: 'default' | 'glass' | 'retro' | 'glow'
  size?: 'default' | 'sm' | 'lg'
}>({ variant: 'default', size: 'default' })

export interface AvatarProps
  extends
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, variant = 'default', size = 'default', ...props }, ref) => (
  <AvatarVariantContext.Provider value={{ variant, size }}>
    <AvatarPrimitive.Root
      ref={ref}
      data-slot="avatar"
      data-size={size}
      className={cn(avatarVariants({ variant, size }), className)}
      {...props}
    />
  </AvatarVariantContext.Provider>
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    data-slot="avatar-image"
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => {
  const { variant, size } = React.useContext(AvatarVariantContext)
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      data-slot="avatar-fallback"
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground font-semibold uppercase',
        size === 'sm' && 'text-xs',
        size === 'default' && 'text-sm',
        size === 'lg' && 'text-base',
        variant === 'retro' && 'rounded-none',
        className,
      )}
      {...props}
    />
  )
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

const AvatarBadge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const { size } = React.useContext(AvatarVariantContext)
  return (
    <span
      ref={ref}
      data-slot="avatar-badge"
      className={cn(
        'absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none',
        size === 'sm' && 'size-2 [&>svg]:hidden',
        size === 'default' && 'size-2.5 [&>svg]:size-2',
        size === 'lg' && 'size-3 [&>svg]:size-2',
        className,
      )}
      {...props}
    />
  )
})
AvatarBadge.displayName = 'AvatarBadge'

const AvatarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="avatar-group"
    className={cn(
      'flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background',
      className,
    )}
    {...props}
  />
))
AvatarGroup.displayName = 'AvatarGroup'

const AvatarGroupCount = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="avatar-group-count"
    className={cn(
      'relative flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background',
      className,
    )}
    {...props}
  />
))
AvatarGroupCount.displayName = 'AvatarGroupCount'

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
}
