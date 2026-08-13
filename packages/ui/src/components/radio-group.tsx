'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const radioGroupRootVariants = tv({
  base: 'grid gap-2.5',
})

const radioItemVariants = tv({
  base: 'aspect-square h-4 w-4 shrink-0 rounded-full border text-foreground shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer inline-flex items-center justify-center transition-all duration-200 select-none my-auto',
  variants: {
    variant: {
      default:
        'border-input bg-background hover:border-primary data-[state=checked]:border-primary data-[state=checked]:bg-primary/5',
      retro:
        'border-2 border-foreground bg-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none h-4 w-4',
      glass:
        'bg-white/10 dark:bg-black/30 border-black/20 dark:border-white/20 backdrop-blur-md hover:border-primary',
      glow: 'border-primary/30 bg-primary/5 hover:border-primary/50 shadow-[0_0_8px_rgba(168,85,247,0.1)] data-[state=checked]:border-primary data-[state=checked]:bg-primary/10 data-[state=checked]:shadow-[0_0_12px_rgba(168,85,247,0.35)]',
      cyberpunk:
        'border-emerald-500/30 bg-emerald-950/10 dark:bg-black rounded-none text-emerald-500 hover:border-emerald-500/50 data-[state=checked]:border-emerald-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const radioIndicatorVariants = tv({
  base: 'transition-transform duration-200',
  variants: {
    variant: {
      default: 'h-2 w-2 rounded-full bg-primary',
      retro: 'h-1.5 w-1.5 bg-foreground rounded-none',
      glass: 'h-2 w-2 rounded-full bg-primary',
      glow: 'h-2 w-2 rounded-full bg-primary [filter:drop-shadow(0_0_3px_rgba(168,85,247,0.85))]',
      cyberpunk:
        'h-1.5 w-1.5 bg-emerald-500 rounded-none [filter:drop-shadow(0_0_2px_rgba(16,185,129,0.85))]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn(radioGroupRootVariants(), className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export interface RadioGroupItemProps
  extends
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioItemVariants> {}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, variant = 'default', ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      data-slot="radio-group-item"
      className={cn(
        radioItemVariants({ variant }),
        'aria-invalid:border-destructive aria-invalid:text-destructive dark:aria-invalid:border-destructive',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center h-full w-full"
      >
        <span className={cn(radioIndicatorVariants({ variant }))} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
