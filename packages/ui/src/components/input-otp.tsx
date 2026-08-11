'use client'

import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const otpVariants = tv({
  base: 'flex items-center gap-2 select-none',
  variants: {
    variant: {
      default: '',
      glass: '',
      retro: '',
      glow: '',
      cyberpunk: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const slotVariants = tv({
  base: 'relative w-10 h-12 flex items-center justify-center border text-base font-semibold transition-all duration-200 text-center outline-none select-none rounded-md',
  variants: {
    variant: {
      default:
        'bg-background border-input text-foreground data-[active=true]:border-primary data-[active=true]:ring-2 data-[active=true]:ring-primary/40',
      glass:
        'bg-white/5 border-white/10 backdrop-blur-md text-white data-[active=true]:border-white/30 data-[active=true]:bg-white/10 data-[active=true]:ring-2 data-[active=true]:ring-white/20',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,1)] data-[active=true]:translate-x-[1px] data-[active=true]:translate-y-[1px] data-[active=true]:shadow-[1px_1px_0px_rgba(0,0,0,1)]',
      glow: 'border-primary/20 bg-primary/[0.02] text-primary data-[active=true]:border-primary data-[active=true]:shadow-[0_0_12px_rgba(168,85,247,0.3)] data-[active=true]:ring-2 data-[active=true]:ring-primary/30',
      cyberpunk:
        'border-emerald-950 bg-black text-emerald-500 font-mono data-[active=true]:border-emerald-400 data-[active=true]:shadow-[0_0_10px_rgba(16,185,129,0.35)] data-[active=true]:ring-2 data-[active=true]:ring-emerald-500/20',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const InputOTPVariantContext = React.createContext<{
  variant?: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
  disabled?: boolean
}>({ variant: 'default' })

export interface InputOTPProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof OTPInput>, 'onChange' | 'maxLength'>,
    VariantProps<typeof otpVariants> {
  length?: number
  maxLength?: number
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  type?: 'text' | 'password' | 'tel'
}

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  InputOTPProps
>(
  (
    {
      className,
      containerClassName,
      variant = 'default',
      length,
      maxLength: customMaxLength,
      value = '',
      onChange,
      disabled = false,
      type = 'text',
      children,
      render: customRender,
      ...props
    },
    ref,
  ) => {
    const maxLength = customMaxLength || length || 6

    // 1. If custom render function is provided
    if (customRender) {
      return (
        <InputOTPVariantContext.Provider value={{ variant, disabled }}>
          <OTPInput
            ref={ref}
            data-slot="input-otp"
            value={value}
            onChange={onChange}
            type={type}
            disabled={disabled}
            render={customRender}
            maxLength={maxLength}
            containerClassName={cn(
              'flex items-center gap-2 has-disabled:opacity-50',
              containerClassName,
            )}
            className={cn('disabled:cursor-not-allowed', className)}
            {...props}
          />
        </InputOTPVariantContext.Provider>
      )
    }

    // 2. If children are provided (composed layout)
    if (children) {
      return (
        <InputOTPVariantContext.Provider value={{ variant, disabled }}>
          <OTPInput
            ref={ref}
            data-slot="input-otp"
            value={value}
            onChange={onChange}
            type={type}
            disabled={disabled}
            maxLength={maxLength}
            containerClassName={cn(
              'flex items-center gap-2 has-disabled:opacity-50',
              containerClassName,
            )}
            className={cn('disabled:cursor-not-allowed', className)}
            {...props}
          >
            {children}
          </OTPInput>
        </InputOTPVariantContext.Provider>
      )
    }

    // 3. Fallback to simple layout automatically
    return (
      <InputOTPVariantContext.Provider value={{ variant, disabled }}>
        <OTPInput
          ref={ref}
          data-slot="input-otp"
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          type={type}
          disabled={disabled}
          containerClassName={cn(
            'flex items-center gap-2 has-disabled:opacity-50',
            containerClassName,
          )}
          className={cn('disabled:cursor-not-allowed', className)}
          {...props}
        >
          <InputOTPGroup>
            {Array.from({ length: maxLength }).map((_, index) => (
              <InputOTPSlot key={index} index={index} />
            ))}
          </InputOTPGroup>
        </OTPInput>
      </InputOTPVariantContext.Provider>
    )
  },
)
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="input-otp-group"
    className={cn('flex items-center gap-1.5', className)}
    {...props}
  />
))
InputOTPGroup.displayName = 'InputOTPGroup'

export interface InputOTPSlotProps
  extends React.ComponentPropsWithoutRef<'div'> {
  index: number
}

const InputOTPSlot = React.forwardRef<HTMLDivElement, InputOTPSlotProps>(
  ({ className, index, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext)
    const { variant, disabled } = React.useContext(InputOTPVariantContext)
    const { char, hasFakeCaret, isActive } =
      inputOTPContext?.slots[index] ?? {}

    return (
      <div
        ref={ref}
        data-slot="input-otp-slot"
        data-active={isActive}
        className={cn(slotVariants({ variant, disabled }), className)}
        {...props}
      >
        {char}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
          </div>
        )}
      </div>
    )
  },
)
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="input-otp-separator"
    className={cn(
      'flex items-center justify-center w-4 text-muted-foreground',
      className,
    )}
    {...props}
  >
    <div className="h-1 w-2 rounded-full bg-border" />
  </div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
