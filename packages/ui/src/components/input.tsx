'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  variant?:
    'default' | 'bottom' | 'glass' | 'filled' | 'glow' | 'retro' | 'cyberpunk'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, variant = 'default', ...props }, ref) => {
    const isInvalid = error || props['aria-invalid']
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          'flex h-10 w-full min-w-0 px-3 py-2 text-sm transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          // Variants
          variant === 'default' &&
            'rounded-md border border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-sm',
          variant === 'bottom' &&
            'rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:border-primary shadow-none focus-visible:ring-0',
          variant === 'glass' &&
            'rounded-md border border-white/20 dark:border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-md placeholder:text-muted-foreground/60 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:bg-white/10 dark:focus-visible:bg-black/30 shadow-sm',
          variant === 'filled' &&
            'rounded-t-md rounded-b-none border-0 border-b border-input bg-muted/50 dark:bg-muted/20 hover:bg-muted/70 dark:hover:bg-muted/30 focus-visible:border-primary shadow-none focus-visible:ring-0',
          variant === 'glow' &&
            'rounded-md border border-primary/30 bg-primary/[0.02] placeholder:text-muted-foreground/65 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50 shadow-[0_0_10px_rgba(168,85,247,0.05)]',
          variant === 'retro' &&
            'rounded-none border-2 border-foreground bg-background text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] focus-visible:translate-x-[1px] focus-visible:translate-y-[1px] focus-visible:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:focus-visible:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]',
          variant === 'cyberpunk' &&
            'rounded-none border border-emerald-500/80 bg-emerald-950/20 dark:bg-black text-emerald-600 dark:text-emerald-400 font-mono placeholder:text-emerald-700/80 focus-visible:border-emerald-400 focus-visible:ring-1 focus-visible:ring-emerald-400/40 shadow-[0_0_10px_rgba(16,185,129,0.15)]',
          // File input overrides
          'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
          // Error states
          isInvalid &&
            variant === 'default' &&
            'border-destructive focus-visible:ring-destructive',
          isInvalid &&
            variant === 'bottom' &&
            'border-destructive focus-visible:border-destructive',
          isInvalid &&
            variant === 'glass' &&
            'border-destructive focus-visible:ring-destructive',
          isInvalid &&
            variant === 'filled' &&
            'border-destructive focus-visible:border-destructive',
          isInvalid &&
            variant === 'glow' &&
            'border-destructive focus-visible:ring-destructive',
          isInvalid &&
            variant === 'retro' &&
            'border-destructive shadow-[3px_3px_0px_0px_rgba(239,68,68,1)] dark:shadow-[3px_3px_0px_0px_rgba(239,68,68,1)]',
          isInvalid &&
            variant === 'cyberpunk' &&
            'border-red-500 text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.25)]',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: boolean
  variant?: 'default' | 'bottom' | 'glass' | 'filled'
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  (
    { className, label, type, error, variant = 'default', id, ...props },
    ref,
  ) => {
    const inputId = id || React.useId()
    return (
      <div className="relative mt-2">
        <input
          type={type}
          id={inputId}
          placeholder=" "
          className={cn(
            'peer flex h-10 w-full px-3 text-sm transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            variant === 'filled' ? 'pt-5 pb-1.5' : 'py-2',
            // Variants
            variant === 'default' &&
              'rounded-md border border-input bg-background ring-offset-background focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary shadow-sm',
            variant === 'bottom' &&
              'rounded-none border-0 border-b border-input bg-transparent px-0 focus-visible:border-primary shadow-none focus-visible:ring-0',
            variant === 'glass' &&
              'rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/20 backdrop-blur-md focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-white dark:focus-visible:bg-black/30 shadow-sm',
            variant === 'filled' &&
              'rounded-t-md rounded-b-none border-0 border-b border-input bg-muted/50 dark:bg-muted/20 hover:bg-muted/70 dark:hover:bg-muted/30 focus-visible:border-primary shadow-none focus-visible:ring-0',
            // Error states
            error &&
              'border-destructive focus-visible:ring-destructive focus-visible:border-destructive',
            className,
          )}
          ref={ref}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            'absolute text-sm text-muted-foreground duration-300 transform top-3 z-10 origin-[0] pointer-events-none select-none transition-all',
            // Left offset & background styling
            variant === 'bottom' && 'left-0 bg-transparent',
            variant === 'filled' && 'left-3 bg-transparent',
            variant === 'default' && 'left-3 bg-background px-1',
            variant === 'glass' && 'left-3 bg-background px-1',
            // Peer transitions
            'peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0',

            // Floating styles when focused
            'peer-focus:scale-75 peer-focus:text-primary',
            variant === 'filled'
              ? 'peer-focus:-translate-y-2.5'
              : 'peer-focus:-translate-y-5',

            // Floating styles when contains text (not focused but filled)
            variant === 'filled'
              ? 'peer-[:not(:placeholder-shown)]:-translate-y-2.5 peer-[:not(:placeholder-shown)]:scale-75'
              : 'peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-75',

            // Error state
            error && 'text-destructive peer-focus:text-destructive',
          )}
        >
          {label}
        </label>
      </div>
    )
  },
)
FloatingInput.displayName = 'FloatingInput'

export { Input, FloatingInput }
