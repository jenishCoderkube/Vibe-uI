'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const separatorVariants = tv({
  base: 'shrink-0 transition-all duration-200',
  variants: {
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
    variant: {
      default: 'bg-border',
      glass: 'bg-black/10 dark:bg-white/10 backdrop-blur-xs',
      retro: 'bg-foreground',
      glow: 'bg-primary/40 shadow-[0_0_8px_rgba(168,85,247,0.4)] [filter:drop-shadow(0_0_2px_rgba(168,85,247,0.4))]',
      cyberpunk:
        'bg-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.4)] [filter:drop-shadow(0_0_2px_rgba(16,185,129,0.4))]',
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      variant: 'retro',
      className: 'h-[2px]',
    },
    {
      orientation: 'vertical',
      variant: 'retro',
      className: 'w-[2px]',
    },
    {
      orientation: 'horizontal',
      variant: 'cyberpunk',
      className: 'h-[1.5px]',
    },
    {
      orientation: 'vertical',
      variant: 'cyberpunk',
      className: 'w-[1.5px]',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'default',
  },
})

export interface SeparatorProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  asChild?: boolean
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      className,
      orientation = 'horizontal',
      variant = 'default',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        role="separator"
        aria-orientation={
          orientation === 'vertical' ? 'vertical' : 'horizontal'
        }
        data-slot="separator"
        className={cn(separatorVariants({ orientation, variant }), className)}
        {...props}
      />
    )
  },
)
Separator.displayName = 'Separator'

export { Separator }
