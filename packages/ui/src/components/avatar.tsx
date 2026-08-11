'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const avatarVariants = tv({
  base: 'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full transition-all duration-200 select-none items-center justify-center',
  variants: {
    variant: {
      default: 'bg-muted border border-border',
      glass:
        'bg-white/5 dark:bg-black/20 border border-white/20 dark:border-white/10 backdrop-blur-md',
      retro:
        'border-2 border-foreground bg-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-muted border border-border hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

// Share variant context
const AvatarVariantContext = React.createContext<{
  variant?: 'default' | 'glass' | 'retro' | 'glow'
}>({ variant: 'default' })

export interface AvatarProps
  extends
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, variant = 'default', ...props }, ref) => (
  <AvatarVariantContext.Provider value={{ variant }}>
    <AvatarPrimitive.Root
      ref={ref}
      data-slot="avatar"
      className={cn(avatarVariants({ variant }), className)}
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
  const { variant } = React.useContext(AvatarVariantContext)
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      data-slot="avatar-fallback"
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground text-sm font-semibold uppercase',
        variant === 'retro' && 'rounded-none',
        className,
      )}
      {...props}
    />
  )
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
