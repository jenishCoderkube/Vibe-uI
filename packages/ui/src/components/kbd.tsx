'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const kbdVariants = tv({
  base: 'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 shadow-sm transition-all duration-200',
  variants: {
    variant: {
      default: 'border-border',
      glass:
        'bg-white/5 border-white/20 dark:border-white/10 text-foreground backdrop-blur-md',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'border-border shadow-[0_0_10px_rgba(0,0,0,0.05)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof kbdVariants> {
  asChild?: boolean
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, variant = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'kbd'
    return (
      <Comp
        ref={ref}
        data-slot="kbd"
        className={cn(kbdVariants({ variant }), className)}
        {...props}
      />
    )
  },
)
Kbd.displayName = 'Kbd'

export { Kbd }
