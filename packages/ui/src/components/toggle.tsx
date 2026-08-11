'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const toggleVariants = tv({
  base: 'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer border',
  variants: {
    variant: {
      default:
        'bg-transparent text-foreground border-transparent hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
      glass:
        'bg-white/5 border-white/10 backdrop-blur-md text-zinc-400 hover:text-white hover:bg-white/10 data-[state=on]:bg-white/20 data-[state=on]:text-white data-[state=on]:border-white/30',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:bg-muted hover:text-foreground data-[state=on]:translate-x-[1px] data-[state=on]:translate-y-[1px] data-[state=on]:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:data-[state=on]:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] data-[state=on]:bg-foreground data-[state=on]:text-background',
      glow: 'border-primary/20 bg-primary/[0.02] text-primary/70 hover:text-primary hover:bg-primary/5 data-[state=on]:bg-primary/20 data-[state=on]:text-primary data-[state=on]:shadow-[0_0_15px_rgba(168,85,247,0.25)]',
      cyberpunk:
        'border-emerald-950 bg-black text-emerald-600 font-mono hover:text-emerald-400 hover:border-emerald-500/50 data-[state=on]:border-emerald-400 data-[state=on]:text-emerald-400 data-[state=on]:bg-emerald-500/10 data-[state=on]:shadow-[0_0_10px_rgba(16,185,129,0.2)]',
    },
    size: {
      default: 'h-9 px-3 min-w-[36px]',
      sm: 'h-8 px-2 text-xs min-w-[32px]',
      lg: 'h-10 px-4 min-w-[40px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ToggleProps
  extends
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    data-slot="toggle"
    className={cn(toggleVariants({ variant, size }), className)}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
