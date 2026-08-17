'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'
import { Button, type ButtonProps } from './button'

const buttonGroupVariants = tv({
  base: 'relative inline-flex items-center justify-center bg-muted/80 p-1 text-muted-foreground select-none border border-border/80 shadow-xs gap-1 max-w-full overflow-x-auto scrollbar-none w-auto [&_button]:relative [&_button]:z-10 [&_button]:!bg-transparent [&_button]:hover:!bg-transparent [&_button]:text-muted-foreground [&_button]:shadow-none [&_button]:hover:shadow-none [&_button]:border-none [&_button]:![transform:none] [&_button]:![translate:none] [&_button]:hover:![transform:none] [&_button]:hover:![translate:none] [&_button]:hover:!translate-y-0 [&_button]:!transition-none [&_button]:hover:opacity-100 [&_button]:h-8 [&_button]:px-3 sm:[&_button]:px-3.5 [&_button]:text-xs [&_button]:font-semibold [&_button]:gap-1.5 sm:[&_button]:gap-2 [&_button]:flex-initial [&_button]:min-w-0',
  variants: {
    variant: {
      default:
        'bg-muted/80 border-border/80 [&_button[data-state=active]]:!text-foreground',
      glass:
        'bg-slate-200/50 dark:bg-black/40 border-black/10 dark:border-white/10 backdrop-blur-md shadow-xs text-foreground/80 [&_button[data-state=active]]:!text-slate-950 dark:[&_button[data-state=active]]:!text-white',
      retro:
        'border-2 border-foreground bg-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] rounded-none p-1 gap-1 [&_button]:rounded-none [&_button]:text-black dark:[&_button]:text-white [&_button[data-state=active]]:!text-white dark:[&_button[data-state=active]]:!text-black font-bold',
      glow: 'bg-muted/90 border-primary/30 shadow-[0_0_15px_rgba(168,85,247,0.15)] dark:shadow-[0_0_15px_rgba(168,85,247,0.1)] [&_button[data-state=active]]:!text-primary',
    },
    radius: {
      default: 'rounded-lg',
      sm: 'rounded-md',
      lg: 'rounded-xl',
      full: 'rounded-full',
      none: 'rounded-none',
    },
    orientation: {
      horizontal: 'flex-row',
      vertical:
        'flex-col w-full [&_button]:w-full [&_button]:justify-start [&_button]:text-left [&_button]:px-3 [&_button]:py-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    radius: 'default',
    orientation: 'horizontal',
  },
})

const pillVariants = tv({
  base: 'absolute pointer-events-none z-0 top-0 left-0 will-change-transform',
  variants: {
    variant: {
      default: 'bg-background shadow-xs border border-border/60',
      glass:
        'bg-white dark:bg-white/15 border border-slate-300/80 dark:border-white/20 backdrop-blur-md shadow-xs',
      retro:
        'bg-foreground text-background border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-background border border-primary/50 shadow-[0_0_12px_rgba(168,85,247,0.3)]',
    },
    radius: {
      default: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      full: 'rounded-full',
      none: 'rounded-none',
    },
  },
  defaultVariants: {
    variant: 'default',
    radius: 'default',
  },
})

const buttonGroupItemVariants = tv({
  base: 'relative z-10 inline-flex items-center whitespace-nowrap px-2 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold ring-offset-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none gap-1 sm:gap-2 text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:font-bold flex-1 sm:flex-initial min-w-0',
  variants: {
    variant: {
      default: '',
      glass:
        'data-[state=active]:text-foreground dark:data-[state=active]:text-foreground',
      retro:
        'rounded-none data-[state=active]:text-background dark:data-[state=active]:text-background font-bold',
      glow: 'data-[state=active]:text-foreground',
    },
    radius: {
      default: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      full: 'rounded-full',
      none: 'rounded-none',
    },
    orientation: {
      horizontal: 'justify-center text-center',
      vertical: 'w-full justify-start text-left px-3 py-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    radius: 'default',
    orientation: 'horizontal',
  },
})

export interface ButtonGroupContextValue {
  value?: string
  onValueChange?: (value: string) => void
  variant?: 'default' | 'glass' | 'retro' | 'glow'
  radius?: 'default' | 'sm' | 'lg' | 'full' | 'none'
  orientation?: 'horizontal' | 'vertical'
  registerRef?: (val: string, node: HTMLButtonElement | null) => void
}

export const ButtonGroupContext =
  React.createContext<ButtonGroupContextValue | null>(null)

export interface ButtonGroupProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      className,
      variant = 'default',
      radius = 'default',
      orientation = 'horizontal',
      value,
      defaultValue,
      onValueChange,
      children,
      ...props
    },
    ref,
  ) => {
    const [localValue, setLocalValue] = React.useState(defaultValue || '')
    const activeValue = value !== undefined ? value : localValue
    const itemRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map())
    const containerRef = React.useRef<HTMLDivElement | null>(null)
    const isInitialRender = React.useRef(true)

    const [pillStyle, setPillStyle] = React.useState<{
      left: number
      top: number
      width: number
      height: number
      opacity: number
      animate: boolean
    }>({ left: 0, top: 0, width: 0, height: 0, opacity: 0, animate: false })

    const setCombinedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = node
        }
      },
      [ref],
    )

    const registerRef = React.useCallback(
      (val: string, node: HTMLButtonElement | null) => {
        if (node) {
          itemRefs.current.set(val, node)
        } else {
          itemRefs.current.delete(val)
        }
      },
      [],
    )

    const getActiveNode = React.useCallback((): HTMLElement | null => {
      if (!activeValue || !containerRef.current) return null
      const registered = itemRefs.current.get(activeValue)
      if (registered) return registered

      const queried = containerRef.current.querySelector(
        `[data-value="${CSS.escape(activeValue)}"], [value="${CSS.escape(activeValue)}"], [data-state="active"]`,
      ) as HTMLElement | null

      return queried
    }, [activeValue])

    const updatePillPosition = React.useCallback(() => {
      const activeNode = getActiveNode()
      const containerNode = containerRef.current

      if (activeNode && containerNode) {
        const containerRect = containerNode.getBoundingClientRect()
        const activeRect = activeNode.getBoundingClientRect()
        const containerStyle = window.getComputedStyle(containerNode)

        const borderLeft = parseFloat(containerStyle.borderLeftWidth) || 0
        const borderTop = parseFloat(containerStyle.borderTopWidth) || 0

        const left = activeRect.left - containerRect.left - borderLeft
        const top = activeRect.top - containerRect.top - borderTop
        const width = activeRect.width
        const height = activeRect.height

        const shouldAnimate = !isInitialRender.current
        setPillStyle({
          left,
          top,
          width,
          height,
          opacity: 1,
          animate: shouldAnimate,
        })

        if (isInitialRender.current) {
          requestAnimationFrame(() => {
            isInitialRender.current = false
          })
        }
      } else {
        setPillStyle((prev) => ({ ...prev, opacity: 0 }))
      }
    }, [activeValue, getActiveNode])

    React.useLayoutEffect(() => {
      updatePillPosition()
    }, [updatePillPosition, activeValue])

    React.useEffect(() => {
      const activeNode = getActiveNode()
      if (!activeNode || !containerRef.current) return

      const observer = new ResizeObserver(() => {
        updatePillPosition()
      })
      observer.observe(containerRef.current)
      observer.observe(activeNode)
      return () => observer.disconnect()
    }, [activeValue, updatePillPosition, getActiveNode])

    const handleSelect = React.useCallback(
      (val: string) => {
        if (value === undefined) {
          setLocalValue(val)
        }
        onValueChange?.(val)
      },
      [value, onValueChange],
    )

    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const target = (e.target as HTMLElement).closest(
          'button, [data-value], [value]',
        ) as HTMLElement | null
        if (target) {
          const val =
            target.getAttribute('data-value') ||
            target.getAttribute('value') ||
            target.textContent?.trim().toLowerCase()
          if (val) {
            handleSelect(val)
          }
        }
        props.onClick?.(e)
      },
      [handleSelect, props],
    )

    return (
      <ButtonGroupContext.Provider
        value={{
          value: activeValue,
          onValueChange: handleSelect,
          variant,
          radius,
          orientation,
          registerRef,
        }}
      >
        <div
          ref={setCombinedRef}
          data-slot="button-group"
          onClick={handleClick}
          className={cn(
            buttonGroupVariants({ variant, radius, orientation }),
            className,
          )}
          {...props}
        >
          {/* Smooth Sliding Pill Indicator */}
          <div
            className={cn(
              pillVariants({ variant, radius }),
              pillStyle.animate
                ? 'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]'
                : 'transition-none',
            )}
            style={{
              transform: `translate3d(${pillStyle.left}px, ${pillStyle.top}px, 0)`,
              width: `${pillStyle.width}px`,
              height: `${pillStyle.height}px`,
              opacity: pillStyle.opacity,
            }}
          />
          {children}
        </div>
      </ButtonGroupContext.Provider>
    )
  },
)
ButtonGroup.displayName = 'ButtonGroup'

export interface ButtonGroupItemProps extends ButtonProps {
  value: string
}

const ButtonGroupItem = React.forwardRef<
  HTMLButtonElement,
  ButtonGroupItemProps
>((props, ref) => <Button ref={ref} {...props} />)
ButtonGroupItem.displayName = 'ButtonGroupItem'

export { ButtonGroup, ButtonGroupItem }
