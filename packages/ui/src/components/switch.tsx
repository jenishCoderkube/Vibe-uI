'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const switchVariants = tv({
  base: 'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
  variants: {
    variant: {
      default: 'bg-input data-[state=checked]:bg-primary',
      glass:
        'bg-black/10 dark:bg-black/40 border-black/15 dark:border-white/10 data-[state=checked]:bg-primary/80 dark:data-[state=checked]:bg-white/20 backdrop-blur-sm',
      retro:
        'border-2 border-foreground bg-background data-[state=checked]:bg-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-input data-[state=checked]:bg-primary data-[state=checked]:shadow-[0_0_12px_rgba(168,85,247,0.5)] data-[state=checked]:border-primary/50 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
      cyberpunk:
        'bg-emerald-950/20 dark:bg-black border border-emerald-500/50 data-[state=checked]:bg-emerald-950/60 data-[state=checked]:border-emerald-400 data-[state=checked]:shadow-[0_0_10px_rgba(16,185,129,0.3)] rounded-none h-5 w-10',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const thumbVariants = tv({
  base: 'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-all duration-200 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
  variants: {
    variant: {
      default: 'bg-background',
      glass: 'bg-foreground/80 dark:bg-foreground',
      retro:
        'border border-foreground bg-background data-[state=checked]:bg-background rounded-none',
      glow: 'bg-background',
      cyberpunk:
        'bg-emerald-500 border border-emerald-400 rounded-none h-4 w-4 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface SwitchProps
  extends
    React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, variant, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    data-slot="switch"
    className={cn(switchVariants({ variant }), className)}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      className={cn(thumbVariants({ variant }))}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
