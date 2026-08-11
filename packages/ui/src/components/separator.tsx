'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const separatorVariants = tv({
  base: 'shrink-0 bg-border transition-all duration-200',
  variants: {
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
    variant: {
      default: 'bg-border',
      glass: 'bg-white/20 dark:bg-white/10',
      retro: 'bg-foreground h-[2px]',
      glow: 'bg-primary/40',
    },
  },
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
      variant,
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
