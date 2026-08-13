'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const textareaVariants = tv({
  base: 'flex min-h-[80px] w-full min-w-0 px-3 py-2 text-sm transition-all duration-200 focus-visible:outline-none ring-offset-0 focus:ring-offset-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 rounded-md',
  variants: {
    variant: {
      default:
        'border border-input bg-background placeholder:text-muted-foreground focus-visible:border-black focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:border-white dark:focus-visible:ring-1 dark:focus-visible:ring-white shadow-sm',
      bottom:
        'rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:border-primary shadow-none focus-visible:ring-0',
      glass:
        'border border-white/20 dark:border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md placeholder:text-muted-foreground/60 focus-visible:border-white/40 focus-visible:ring-[3px] focus-visible:ring-white/20 dark:focus-visible:border-white/20 dark:focus-visible:ring-white/10 shadow-sm',
      retro:
        'rounded-none border-2 border-foreground bg-background text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] focus-visible:translate-x-[1px] focus-visible:translate-y-[1px] focus-visible:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:focus-visible:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]',
      glow: 'border border-primary/30 bg-primary/[0.02] placeholder:text-muted-foreground/65 focus-visible:ring-[3px] focus-visible:ring-primary/20 focus-visible:border-primary/50 shadow-[0_0_10px_rgba(168,85,247,0.05)]',
      cyberpunk:
        'rounded-none border border-emerald-500/80 bg-emerald-950/20 dark:bg-black text-emerald-600 dark:text-emerald-400 font-mono placeholder:text-emerald-700/80 focus-visible:border-emerald-400 focus-visible:ring-1 focus-visible:ring-emerald-400/40 shadow-[0_0_10px_rgba(16,185,129,0.15)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface TextareaProps
  extends
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean
  autoResize?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', error, autoResize, ...props }, ref) => {
    const isInvalid = error || props['aria-invalid']
    const localRef = React.useRef<HTMLTextAreaElement | null>(null)

    const setRef = React.useCallback(
      (node: HTMLTextAreaElement | null) => {
        localRef.current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLTextAreaElement | null>).current =
            node
        }
      },
      [ref],
    )

    const adjustHeight = React.useCallback(() => {
      if (autoResize && localRef.current) {
        localRef.current.style.height = 'auto'
        localRef.current.style.height = `${localRef.current.scrollHeight}px`
      }
    }, [autoResize])

    React.useEffect(() => {
      adjustHeight()
    }, [props.value, adjustHeight])

    const handleInput = (e: any) => {
      adjustHeight()
      props.onInput?.(e)
    }

    return (
      <textarea
        data-slot="textarea"
        className={cn(
          textareaVariants({ variant }),
          // Error states
          isInvalid &&
            variant === 'default' &&
            'border-destructive focus-visible:ring-[3px] focus-visible:ring-destructive/50',
          isInvalid &&
            variant === 'bottom' &&
            'border-destructive focus-visible:border-destructive',
          isInvalid &&
            variant === 'glass' &&
            'border-destructive focus-visible:ring-[3px] focus-visible:ring-destructive/50',
          isInvalid &&
            variant === 'glow' &&
            'border-destructive focus-visible:ring-[3px] focus-visible:ring-destructive/50',
          isInvalid &&
            variant === 'retro' &&
            'border-destructive shadow-[3px_3px_0px_0px_rgba(239,68,68,1)] dark:shadow-[3px_3px_0px_0px_rgba(239,68,68,1)]',
          isInvalid &&
            variant === 'cyberpunk' &&
            'border-red-500 text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.25)]',
          autoResize && 'resize-none overflow-y-hidden',
          className,
        )}
        ref={setRef}
        onInput={handleInput}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
