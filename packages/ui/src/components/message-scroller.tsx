'use client'

import * as React from 'react'
import { ArrowDown } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'
import { Button, type ButtonProps } from './button'

const scrollerVariants = tv({
  base: 'relative flex flex-col w-full h-full overflow-hidden border bg-background/50',
  variants: {
    variant: {
      default: 'border-border rounded-xl',
      glass:
        'border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-xl',
      retro:
        'border-2 border-foreground bg-background shadow-[3px_3px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'border-primary/20 bg-primary/[0.02] shadow-[0_0_15px_rgba(168,85,247,0.1)] rounded-xl',
      cyberpunk:
        'border-emerald-500/30 dark:border-emerald-950 bg-emerald-950/10 dark:bg-black rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

// Scroller Context
const ScrollerContext = React.createContext<{
  viewportRef: React.RefObject<HTMLDivElement | null>
  showScrollButton: boolean
  scrollToBottom: () => void
  variant: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
} | null>(null)

export interface MessageScrollerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scrollerVariants> {
  threshold?: number
}

const MessageScroller = React.forwardRef<HTMLDivElement, MessageScrollerProps>(
  (
    { className, variant = 'default', threshold = 150, children, ...props },
    ref,
  ) => {
    const viewportRef = React.useRef<HTMLDivElement>(null)
    const [showScrollButton, setShowScrollButton] = React.useState(false)
    const [autoScroll, setAutoScroll] = React.useState(true)

    const scrollToBottom = React.useCallback(() => {
      const el = viewportRef.current
      if (!el) return
      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'auto',
      })
    }, [])

    // Bind scroll event to update autoScroll state
    React.useEffect(() => {
      const el = viewportRef.current
      if (!el) return
      const handleScroll = () => {
        const isNearBottom =
          el.scrollHeight - el.scrollTop - el.clientHeight < threshold
        setAutoScroll(isNearBottom)
        setShowScrollButton(!isNearBottom)
      }
      el.addEventListener('scroll', handleScroll)
      return () => el.removeEventListener('scroll', handleScroll)
    }, [threshold])

    // Autoscroll when children count change, if user was already at bottom
    React.useLayoutEffect(() => {
      if (autoScroll) {
        const el = viewportRef.current
        if (el) {
          el.scrollTop = el.scrollHeight
        }
      }
    }, [children, autoScroll])

    return (
      <ScrollerContext.Provider
        value={{ viewportRef, showScrollButton, scrollToBottom, variant }}
      >
        <div
          ref={ref}
          data-slot="message-scroller"
          className={cn(scrollerVariants({ variant }), className)}
          {...props}
        >
          {children}
        </div>
      </ScrollerContext.Provider>
    )
  },
)
MessageScroller.displayName = 'MessageScroller'

export interface MessageScrollerViewportProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageScrollerViewport = React.forwardRef<
  HTMLDivElement,
  MessageScrollerViewportProps
>(({ className, children, onScroll, ...props }, ref) => {
  const context = React.useContext(ScrollerContext)
  if (!context) throw new Error('Viewport must be used within MessageScroller')

  const handleScrollCombined = (e: React.UIEvent<HTMLDivElement>) => {
    onScroll?.(e)
  }

  const setRef = React.useCallback(
    (el: HTMLDivElement | null) => {
      ;(
        context.viewportRef as React.MutableRefObject<HTMLDivElement | null>
      ).current = el
      if (typeof ref === 'function') {
        ref(el)
      } else if (ref) {
        ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = el
      }
    },
    [context.viewportRef, ref],
  )

  return (
    <div
      ref={setRef}
      onScroll={handleScrollCombined}
      data-slot="message-scroller-viewport"
      className={cn(
        'w-full h-full overflow-y-auto scrollbar-thin scroll-smooth select-none p-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})
MessageScrollerViewport.displayName = 'MessageScrollerViewport'

export interface MessageScrollerContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageScrollerContent = React.forwardRef<
  HTMLDivElement,
  MessageScrollerContentProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="message-scroller-content"
      className={cn('flex flex-col gap-4 w-full h-fit', className)}
      {...props}
    />
  )
})
MessageScrollerContent.displayName = 'MessageScrollerContent'

export interface MessageScrollerItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageScrollerItem = React.forwardRef<
  HTMLDivElement,
  MessageScrollerItemProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="message-scroller-item"
      className={cn('w-full shrink-0', className)}
      {...props}
    />
  )
})
MessageScrollerItem.displayName = 'MessageScrollerItem'

export interface MessageScrollerButtonProps extends ButtonProps {}

const MessageScrollerButton = React.forwardRef<
  HTMLButtonElement,
  MessageScrollerButtonProps
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(ScrollerContext)
  if (!context) throw new Error('Button must be used within MessageScroller')

  // Attach scroll listener to toggle visibility state locally in render
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const el = context.viewportRef.current
    if (!el) return
    const checkScroll = () => {
      const isScrollable = el.scrollHeight > el.clientHeight
      const isUp = el.scrollHeight - el.scrollTop - el.clientHeight > 120
      setVisible(isScrollable && isUp)
    }
    el.addEventListener('scroll', checkScroll)
    // Check once on mount
    setTimeout(checkScroll, 100)
    return () => el.removeEventListener('scroll', checkScroll)
  }, [context])

  if (!visible) return null

  return (
    <Button
      ref={ref}
      type="button"
      data-slot="message-scroller-button"
      variant={context.variant === 'retro' ? 'retro' : 'glass'}
      className={cn(
        'absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full shadow-lg h-9 w-9 p-0 flex items-center justify-center border animate-bounce z-20 cursor-pointer',
        context.variant === 'glow' &&
          'border-primary/30 text-primary hover:bg-primary/20 hover:text-primary',
        context.variant === 'cyberpunk' &&
          'border-emerald-500 bg-black text-emerald-500 hover:bg-emerald-500/10 font-mono',
        className,
      )}
      onClick={() => {
        context.scrollToBottom()
      }}
      {...props}
    >
      {children ?? <ArrowDown className="h-4 w-4" />}
    </Button>
  )
})
MessageScrollerButton.displayName = 'MessageScrollerButton'

export {
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
}
