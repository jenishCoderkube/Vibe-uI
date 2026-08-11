'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const labelVariants = tv({
  base: 'text-sm font-semibold leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors duration-150 select-none cursor-pointer',
})

export interface LabelProps
  extends
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    data-slot="label"
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
