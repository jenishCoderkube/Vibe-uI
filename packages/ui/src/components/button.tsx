'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'
import { ButtonGroupContext } from './button-group'

export const buttonVariants = tv({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:-translate-y-0.5 hover:shadow-sm hover:opacity-90 active:translate-y-0 active:scale-95 cursor-pointer',
  variants: {
    variant: {
      default:
        'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm',
      outline:
        'border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground shadow-sm',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm',
      ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      glass:
        'bg-white/80 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 text-foreground hover:bg-white dark:hover:bg-white/20 shadow-sm',
      glow: "bg-primary/10 border border-primary/40 text-primary shadow-[0_0_12px_rgba(168,85,247,0.2)] hover:border-primary/60 hover:shadow-[0_0_18px_rgba(168,85,247,0.4)] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:pointer-events-none before:bg-[radial-gradient(150px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(168,85,247,0.2),transparent_80%)] before:z-0",
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] transition-all duration-100',
      gradient:
        'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white hover:opacity-95 shadow-md shadow-indigo-600/20 border-0',
      cyberpunk:
        "border border-emerald-500/80 bg-emerald-950/20 dark:bg-black text-emerald-600 dark:text-emerald-400 font-mono shadow-[0_0_10px_rgba(16,185,129,0.2)] hover:bg-emerald-500/10 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-98 transition-all relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(16,185,129,0.05)_50%,rgba(16,185,129,0)_50%)] before:bg-[length:100%_4px] before:pointer-events-none rounded-none",
      shimmer:
        "relative overflow-hidden !bg-zinc-950 !text-zinc-50 border border-zinc-800 hover:opacity-95 dark:!bg-zinc-50 dark:!text-zinc-950 dark:border-zinc-200 before:content-[''] before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/20 dark:before:via-black/15 before:to-transparent before:pointer-events-none",
      shine:
        "relative overflow-hidden !bg-primary !text-primary-foreground hover:opacity-95 before:content-[''] before:absolute before:top-0 before:-left-[100%] before:w-[50%] before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/35 dark:before:via-black/20 before:to-transparent before:skew-x-[-25deg] hover:before:animate-shine before:pointer-events-none",
      'border-gradient': 'border-gradient-animated text-foreground',
      progress:
        "relative overflow-hidden bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:animate-progress",
      'spin-border': 'border-spin-animated text-foreground',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 rounded-md px-8 text-base',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  value?: string
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, value, onClick, asChild = false, ...props },
    ref,
  ) => {
    const groupContext = React.useContext(ButtonGroupContext)
    const isInGroup = Boolean(groupContext)
    const itemValue = value !== undefined ? String(value) : undefined
    const isActive =
      isInGroup && itemValue !== undefined && groupContext?.value === itemValue

    const setRef = React.useCallback(
      (node: HTMLButtonElement | null) => {
        if (isInGroup && itemValue && groupContext?.registerRef) {
          groupContext.registerRef(itemValue, node)
        }
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLButtonElement | null>).current =
            node
        }
      },
      [isInGroup, itemValue, groupContext, ref],
    )

    const Comp = asChild ? Slot : 'button'

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = e.currentTarget
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      btn.style.setProperty('--mouse-x', `${x}px`)
      btn.style.setProperty('--mouse-y', `${y}px`)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isInGroup && itemValue && groupContext?.onValueChange) {
        groupContext.onValueChange(itemValue)
      }
      onClick?.(e)
    }

    const effectiveVariant = variant || (isInGroup ? undefined : 'default')

    return (
      <Comp
        data-slot="button"
        data-value={itemValue}
        data-state={isInGroup ? (isActive ? 'active' : 'inactive') : undefined}
        className={cn(
          buttonVariants({ variant: effectiveVariant, size }),
          isInGroup && [
            'relative z-10 !bg-transparent hover:!bg-transparent !shadow-none hover:!shadow-none !border-none !text-xs !font-semibold min-w-0 !transition-none cursor-pointer select-none [transform:none!important] [translate:none!important] hover:[transform:none!important] hover:[translate:none!important] active:[transform:none!important] active:[translate:none!important] hover:!translate-y-0 active:!translate-y-0',
            groupContext?.orientation === 'horizontal' &&
              '!h-8 !px-3 sm:!px-3.5 flex-1 sm:flex-initial',
            groupContext?.orientation === 'vertical' &&
              '!w-full !justify-start !text-left flex-initial',
            isActive
              ? groupContext?.variant === 'retro'
                ? '!text-white dark:!text-black font-bold'
                : groupContext?.variant === 'glow'
                  ? '!text-primary font-bold'
                  : groupContext?.variant === 'glass'
                    ? '!text-slate-950 dark:!text-white font-semibold'
                    : '!text-foreground font-semibold'
              : groupContext?.variant === 'retro'
                ? 'text-black dark:text-white font-bold'
                : 'text-muted-foreground',
          ],
          className,
        )}
        ref={setRef}
        onClick={handleClick}
        onMouseMove={variant === 'glow' ? handleMouseMove : undefined}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button }
