'use client'

import * as React from 'react'
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
  base: 'w-10 h-12 flex items-center justify-center border text-base font-semibold transition-all duration-200 text-center outline-none focus:z-10 focus:ring-2 focus:ring-ring focus:ring-offset-1 rounded-md',
  variants: {
    variant: {
      default:
        'bg-background border-input text-foreground focus:border-primary focus:ring-primary/40',
      glass:
        'bg-white/5 border-white/10 backdrop-blur-md text-white focus:border-white/30 focus:bg-white/10 focus:ring-white/20',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,1)] focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-[1px_1px_0px_rgba(0,0,0,1)]',
      glow: 'border-primary/20 bg-primary/[0.02] text-primary focus:border-primary focus:shadow-[0_0_12px_rgba(168,85,247,0.3)] focus:ring-primary/30',
      cyberpunk:
        'border-emerald-950 bg-black text-emerald-500 font-mono focus:border-emerald-400 focus:shadow-[0_0_10px_rgba(16,185,129,0.35)] focus:ring-emerald-500/20',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface InputOTPProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof otpVariants> {
  length?: number
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  type?: 'text' | 'password'
}

const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
  (
    {
      className,
      variant,
      length = 6,
      value = '',
      onChange,
      disabled = false,
      type = 'text',
      ...props
    },
    ref,
  ) => {
    const inputRefs = React.useRef<HTMLInputElement[]>([])

    const handleChange = (index: number, val: string) => {
      if (disabled) return
      const cleanVal = val.replace(/[^0-9a-zA-Z]/g, '')
      const prevChar = value[index] || ''

      let lastChar = ''
      if (cleanVal.length > 0) {
        if (cleanVal.length === 1) {
          lastChar = cleanVal
        } else {
          // If length > 1, extract the character that is not the previous one
          if (cleanVal.startsWith(prevChar)) {
            lastChar = cleanVal.slice(prevChar.length)
          } else if (cleanVal.endsWith(prevChar)) {
            lastChar = cleanVal.slice(0, cleanVal.length - prevChar.length)
          } else {
            lastChar = cleanVal.slice(-1)
          }
        }
      }
      lastChar = lastChar.slice(-1)

      const valuesArray = Array.from({ length }, (_, i) => value[i] || '')
      valuesArray[index] = lastChar
      const newValue = valuesArray.join('')
      onChange?.(newValue)

      if (lastChar) {
        if (index < length - 1) {
          inputRefs.current[index + 1]?.focus()
          setTimeout(() => {
            inputRefs.current[index + 1]?.select()
          }, 0)
        } else {
          // If we reached the end of this input group, check if there's a next group in the DOM
          const allInputs = Array.from(
            document.querySelectorAll('input:not([disabled])'),
          ) as HTMLInputElement[]
          const currentInput = inputRefs.current[index]
          const currentIndex = allInputs.indexOf(currentInput)
          if (currentIndex !== -1 && currentIndex < allInputs.length - 1) {
            const nextInput = allInputs[currentIndex + 1]
            if (nextInput && nextInput.getAttribute('type') !== 'range') {
              nextInput.focus()
              setTimeout(() => {
                nextInput.select()
              }, 0)
            }
          }
        }
      }
    }

    const handleKeyDown = (
      index: number,
      e: React.KeyboardEvent<HTMLInputElement>,
    ) => {
      if (disabled) return
      if (e.key === 'Backspace') {
        e.preventDefault()
        const valuesArray = Array.from({ length }, (_, i) => value[i] || '')

        if (valuesArray[index]) {
          // Clear current character and focus previous
          valuesArray[index] = ''
          onChange?.(valuesArray.join(''))
          if (index > 0) {
            inputRefs.current[index - 1]?.focus()
            setTimeout(() => {
              inputRefs.current[index - 1]?.select()
            }, 0)
          } else {
            // Reached index 0 but it had content, clear it and check if we should focus previous group in DOM
            const allInputs = Array.from(
              document.querySelectorAll('input:not([disabled])'),
            ) as HTMLInputElement[]
            const currentInput = inputRefs.current[index]
            const currentIndex = allInputs.indexOf(currentInput)
            if (currentIndex > 0) {
              const prevInput = allInputs[currentIndex - 1]
              if (prevInput && prevInput.getAttribute('type') !== 'range') {
                prevInput.focus()
                setTimeout(() => {
                  prevInput.select()
                }, 0)
              }
            }
          }
        } else if (index > 0) {
          // Current is already empty, clear and focus previous
          valuesArray[index - 1] = ''
          onChange?.(valuesArray.join(''))
          inputRefs.current[index - 1]?.focus()
          setTimeout(() => {
            inputRefs.current[index - 1]?.select()
          }, 0)
        } else {
          // Current is already empty and index is 0, focus previous group in DOM
          const allInputs = Array.from(
            document.querySelectorAll('input:not([disabled])'),
          ) as HTMLInputElement[]
          const currentInput = inputRefs.current[index]
          const currentIndex = allInputs.indexOf(currentInput)
          if (currentIndex > 0) {
            const prevInput = allInputs[currentIndex - 1]
            if (prevInput && prevInput.getAttribute('type') !== 'range') {
              prevInput.focus()
              setTimeout(() => {
                prevInput.select()
              }, 0)
            }
          }
        }
      } else if (e.key === 'ArrowLeft') {
        if (index > 0) {
          e.preventDefault()
          inputRefs.current[index - 1]?.focus()
          setTimeout(() => {
            inputRefs.current[index - 1]?.select()
          }, 0)
        } else {
          // Hop to previous group in DOM
          const allInputs = Array.from(
            document.querySelectorAll('input:not([disabled])'),
          ) as HTMLInputElement[]
          const currentInput = inputRefs.current[index]
          const currentIndex = allInputs.indexOf(currentInput)
          if (currentIndex > 0) {
            const prevInput = allInputs[currentIndex - 1]
            if (prevInput && prevInput.getAttribute('type') !== 'range') {
              e.preventDefault()
              prevInput.focus()
              setTimeout(() => {
                prevInput.select()
              }, 0)
            }
          }
        }
      } else if (e.key === 'ArrowRight') {
        if (index < length - 1) {
          e.preventDefault()
          inputRefs.current[index + 1]?.focus()
          setTimeout(() => {
            inputRefs.current[index + 1]?.select()
          }, 0)
        } else {
          // Hop to next group in DOM
          const allInputs = Array.from(
            document.querySelectorAll('input:not([disabled])'),
          ) as HTMLInputElement[]
          const currentInput = inputRefs.current[index]
          const currentIndex = allInputs.indexOf(currentInput)
          if (currentIndex !== -1 && currentIndex < allInputs.length - 1) {
            const nextInput = allInputs[currentIndex + 1]
            if (nextInput && nextInput.getAttribute('type') !== 'range') {
              e.preventDefault()
              nextInput.focus()
              setTimeout(() => {
                nextInput.select()
              }, 0)
            }
          }
        }
      }
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      if (disabled) return
      const pasteData = e.clipboardData.getData('text').trim().slice(0, length)
      if (pasteData) {
        onChange?.(pasteData)
        const focusIdx = Math.min(pasteData.length, length - 1)
        inputRefs.current[focusIdx]?.focus()
        setTimeout(() => {
          inputRefs.current[focusIdx]?.select()
        }, 0)
      }
    }

    return (
      <div
        ref={ref}
        data-slot="input-otp"
        className={cn(otpVariants({ variant }), className)}
        {...props}
      >
        {Array.from({ length }).map((_, idx) => {
          const char = value[idx] || ''
          return (
            <input
              key={idx}
              ref={(el) => {
                if (el) inputRefs.current[idx] = el
              }}
              type={type}
              value={char}
              data-slot="input-otp-slot"
              onChange={(e) => handleChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              onPaste={handlePaste}
              onFocus={(e) => e.target.select()}
              disabled={disabled}
              className={slotVariants({ variant, disabled })}
            />
          )
        })}
      </div>
    )
  },
)

InputOTP.displayName = 'InputOTP'

export { InputOTP }
