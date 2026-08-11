'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { tv } from 'tailwind-variants'
import { cn } from '../lib/utils'

const sliderRootVariants = tv({
  base: 'relative flex touch-none select-none items-center data-[orientation=horizontal]:w-full data-[orientation=horizontal]:min-w-[200px] data-[orientation=horizontal]:h-5 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-[150px] data-[orientation=vertical]:w-5 data-[orientation=vertical]:flex-col',
})

const sliderTrackVariants = tv({
  base: 'relative grow overflow-hidden rounded-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2',
  variants: {
    variant: {
      default: 'bg-secondary/50 dark:bg-foreground/80 border border-border/50',
      retro:
        'border-2 border-foreground bg-background data-[orientation=horizontal]:h-3 data-[orientation=vertical]:w-3 rounded-none',
      glass:
        'bg-white/10 dark:bg-black/40 border border-white/20 dark:border-white/10 backdrop-blur-md shadow-inner',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const sliderRangeVariants = tv({
  base: 'absolute rounded-full data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
  variants: {
    variant: {
      default: 'bg-primary dark:bg-white',
      retro: 'bg-foreground rounded-none',
      glass: 'bg-gradient-to-r from-violet-500 to-indigo-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const sliderThumbVariants = tv({
  base: 'relative block rounded-full bg-background shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing',
  variants: {
    variant: {
      default: 'h-5 w-5 border-2 border-primary dark:border-white',
      retro:
        'h-6 w-6 border-2 border-foreground bg-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glass:
        'h-5 w-5 bg-white/30 dark:bg-black/50 backdrop-blur-md border border-white/50 dark:border-white/30 shadow-md',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface SliderProps extends Omit<
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
  'value' | 'defaultValue'
> {
  variant?: 'default' | 'retro' | 'glass'
  value?: number[] | string | number
  defaultValue?: number[] | string | number
  showTooltip?: boolean
  tooltipFormat?: (value: number) => string
  marks?: boolean | { value: number; label?: string }[]
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      className,
      variant,
      value,
      defaultValue,
      min = 0,
      max = 100,
      step = 1,
      showTooltip = false,
      tooltipFormat,
      marks,
      ...props
    },
    ref,
  ) => {
    const numMin = typeof min === 'string' ? parseFloat(min) : min
    const numMax = typeof max === 'string' ? parseFloat(max) : max
    const numStep = typeof step === 'string' ? parseFloat(step) : step

    const parseVal = (v: any): number[] | undefined => {
      if (v === undefined || v === null) return undefined
      if (Array.isArray(v)) return v.map(Number)
      if (typeof v === 'string') {
        return v.split(',').map(Number)
      }
      if (typeof v === 'number') return [v]
      return [0]
    }

    const parsedValue = parseVal(value)
    const parsedDefaultValue = parseVal(defaultValue)

    // Sync internal state to track values for tooltip rendering reactively
    const [localValue, setLocalValue] = React.useState<number[]>(() => {
      return parsedValue || parsedDefaultValue || [numMin]
    })

    React.useEffect(() => {
      const nextParsed = parseVal(value)
      if (nextParsed !== undefined) {
        setLocalValue(nextParsed)
      }
    }, [value])

    const handleValueChange = (val: number[]) => {
      setLocalValue(val)
      props.onValueChange?.(val)
    }

    // Calculate discrete mark values
    let tickValues: { value: number; label?: string }[] = []
    if (marks === true && numStep) {
      for (let v = numMin; v <= numMax; v += numStep) {
        tickValues.push({ value: v })
      }
    } else if (Array.isArray(marks)) {
      tickValues = marks
    }

    return (
      <div
        className={cn(
          'relative w-full',
          tickValues.some((t) => t.label) && 'mb-8',
        )}
      >
        <SliderPrimitive.Root
          ref={ref}
          data-slot="slider"
          className={cn(sliderRootVariants(), className)}
          value={parsedValue}
          defaultValue={parsedDefaultValue}
          min={numMin}
          max={numMax}
          step={numStep}
          onValueChange={handleValueChange}
          {...props}
        >
          <SliderPrimitive.Track
            data-slot="slider-track"
            className={cn(sliderTrackVariants({ variant }))}
          >
            <SliderPrimitive.Range
              data-slot="slider-range"
              className={cn(sliderRangeVariants({ variant }))}
            />

            {/* Tick Marks */}
            {tickValues.map((tick, idx) => {
              const pct = ((tick.value - numMin) / (numMax - numMin)) * 100
              return (
                <span
                  key={idx}
                  className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-foreground/20 dark:bg-white/30 pointer-events-none"
                  style={{
                    left: `${pct}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              )
            })}
          </SliderPrimitive.Track>

          {/* Thumbs */}
          {localValue.map((val, index) => (
            <SliderPrimitive.Thumb
              key={index}
              data-slot="slider-thumb"
              className={cn(sliderThumbVariants({ variant }))}
            >
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 bg-foreground text-background text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-foreground pointer-events-none select-none z-30">
                  {tooltipFormat ? tooltipFormat(val) : val}
                </div>
              )}
            </SliderPrimitive.Thumb>
          ))}
        </SliderPrimitive.Root>

        {/* Mark Labels below slider track */}
        {tickValues.map((tick, idx) => {
          if (!tick.label) return null
          const pct = ((tick.value - numMin) / (numMax - numMin)) * 100
          return (
            <span
              key={idx}
              className="absolute top-6 text-[10px] font-medium text-muted-foreground -translate-x-1/2 whitespace-nowrap pointer-events-none select-none"
              style={{ left: `${pct}%` }}
            >
              {tick.label}
            </span>
          )
        })}
      </div>
    )
  },
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
