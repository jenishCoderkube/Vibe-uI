import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const badgeVariants = tv({
  base: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none shrink-0',
  variants: {
    variant: {
      default:
        'border-transparent bg-primary text-primary-foreground hover:bg-primary/90',
      secondary:
        'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90',
      destructive:
        'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline:
        'border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
      glass:
        'bg-card/70 dark:bg-card/40 border border-border text-foreground backdrop-blur-md hover:bg-card/90 shadow-sm',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] font-bold',
      glow: 'border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/60 shadow-[0_0_10px_rgba(0,0,0,0.05)] dark:shadow-[0_0_12px_rgba(255,255,255,0.12)]',
      cyberpunk:
        'border border-emerald-500/80 bg-emerald-950/20 dark:bg-black text-emerald-600 dark:text-emerald-400 font-mono rounded-none shadow-[0_0_10px_rgba(16,185,129,0.2)] hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', asChild = false, ...props }, ref) => {
    const Comp = (asChild ? Slot : 'span') as any
    return (
      <Comp
        ref={ref}
        data-slot="badge"
        data-variant={variant}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    )
  },
)
Badge.displayName = 'Badge'

export { Badge }
