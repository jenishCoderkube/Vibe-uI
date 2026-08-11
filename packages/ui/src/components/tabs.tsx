'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined)

function useTabs() {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error(
      'Tabs compound components must be rendered inside a <Tabs /> container',
    )
  }
  return context
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    { defaultValue, value, onValueChange, className, children, ...props },
    ref,
  ) => {
    const [localValue, setLocalValue] = React.useState(defaultValue || '')
    const activeValue = value !== undefined ? value : localValue

    const handleValueChange = React.useCallback(
      (newValue: string) => {
        if (value === undefined) {
          setLocalValue(newValue)
        }
        onValueChange?.(newValue)
      },
      [value, onValueChange],
    )

    return (
      <TabsContext.Provider
        value={{ value: activeValue, onValueChange: handleValueChange }}
      >
        <div ref={ref} className={cn('w-full', className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  },
)
Tabs.displayName = 'Tabs'

const tabsListVariants = tv({
  base: 'inline-flex max-w-full overflow-x-auto no-scrollbar items-center justify-start sm:justify-center rounded-lg p-1 text-muted-foreground transition-all duration-200 relative',
  variants: {
    variant: {
      default: 'bg-muted',
      glass:
        'bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 backdrop-blur-md',
      retro:
        'border-2 border-foreground bg-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]',
      glow: 'bg-muted shadow-[0_0_15px_rgba(0,0,0,0.02)]',
      cyberpunk:
        'bg-black border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] rounded-none text-emerald-500 font-mono',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface TabsListProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsListVariants> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant, ...props }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const context = useTabs()
    const [indicatorStyle, setIndicatorStyle] =
      React.useState<React.CSSProperties>({
        position: 'absolute',
        transitionProperty: 'all',
        transitionDuration: '220ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: 0,
      })

    const setRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        ;(
          containerRef as React.MutableRefObject<HTMLDivElement | null>
        ).current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = node
        }
      },
      [ref],
    )

    React.useEffect(() => {
      const activeEl = containerRef.current?.querySelector(
        '[data-state="active"]',
      ) as HTMLElement
      if (activeEl) {
        setIndicatorStyle({
          position: 'absolute',
          transitionProperty: 'all',
          transitionDuration: '220ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          left: activeEl.offsetLeft,
          top: activeEl.offsetTop,
          width: activeEl.offsetWidth,
          height: activeEl.offsetHeight,
          opacity: 1,
        })
      } else {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }))
      }
    }, [context.value])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      const activeEl = document.activeElement as HTMLElement
      if (!activeEl || activeEl.getAttribute('role') !== 'tab') return

      const tabTriggers = Array.from(
        containerRef.current?.querySelectorAll('[role="tab"]') || [],
      ) as HTMLElement[]
      const activeIndex = tabTriggers.indexOf(activeEl)
      if (activeIndex === -1) return

      let nextIndex = activeIndex

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextIndex = (activeIndex + 1) % tabTriggers.length
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        nextIndex = (activeIndex - 1 + tabTriggers.length) % tabTriggers.length
      } else if (e.key === 'Home') {
        e.preventDefault()
        nextIndex = 0
      } else if (e.key === 'End') {
        e.preventDefault()
        nextIndex = tabTriggers.length - 1
      }

      if (nextIndex !== activeIndex) {
        const nextTab = tabTriggers[nextIndex]
        nextTab.focus()
        nextTab.click()
      }
    }

    return (
      <div
        ref={setRef}
        onKeyDown={handleKeyDown}
        className={cn(tabsListVariants({ variant }), className)}
        {...props}
      >
        <div
          className={cn(
            'absolute transition-all duration-200 pointer-events-none z-0',
            variant === 'glass' &&
              'bg-white/10 dark:bg-white/5 border border-white/10 dark:border-white/5',
            variant === 'retro' &&
              'border-2 border-foreground bg-background rounded-none',
            variant === 'glow' &&
              'bg-background shadow-[0_0_15px_rgba(168,85,247,0.15)]',
            variant === 'cyberpunk' &&
              'bg-emerald-950/50 border border-emerald-500/50 rounded-none shadow-[0_0_10px_rgba(16,185,129,0.25)]',
            (variant === 'default' || !variant) && 'bg-background shadow-sm',
          )}
          style={indicatorStyle}
        />
        {props.children}
      </div>
    )
  },
)
TabsList.displayName = 'TabsList'

const tabsTriggerVariants = tv({
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer relative z-10',
  variants: {
    variant: {
      default: 'data-[state=active]:text-foreground',
      glass:
        'text-muted-foreground/80 hover:text-foreground data-[state=active]:text-foreground',
      retro:
        'border border-transparent rounded-none data-[state=active]:text-foreground',
      glow: 'data-[state=active]:text-foreground',
      cyberpunk:
        'text-emerald-700/80 hover:text-emerald-400 data-[state=active]:text-emerald-400 font-mono rounded-none',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface TabsTriggerProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tabsTriggerVariants> {
  value: string
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, variant, ...props }, ref) => {
    const context = useTabs()
    const isActive = context.value === value

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        tabIndex={isActive ? 0 : -1}
        aria-selected={isActive}
        data-state={isActive ? 'active' : 'inactive'}
        onClick={() => context.onValueChange(value)}
        className={cn(tabsTriggerVariants({ variant }), className)}
        {...props}
      />
    )
  },
)
TabsTrigger.displayName = 'TabsTrigger'

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, ...props }, ref) => {
    const context = useTabs()
    const isActive = context.value === value

    if (!isActive) return null

    return (
      <div
        ref={ref}
        role="tabpanel"
        data-state={isActive ? 'active' : 'inactive'}
        className={cn(
          'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          className,
        )}
        {...props}
      />
    )
  },
)
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }
