'use client'

import * as React from 'react'
import { cn } from '../lib/utils'
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react'

export interface InfiniteScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  hasMore: boolean
  isLoading: boolean
  loadMore: () => void
  threshold?: number // default 0.1
  rootMargin?: string // default "0px"
  loadingTrigger?: React.ReactNode
  direction?: 'vertical' | 'horizontal'
  triggerIndex?: number // index at which next load is triggered (e.g. half-way)
  showScrollButtons?: boolean // show left/right arrow buttons for horizontal scroll
  scrollAmount?: number // amount to scroll on arrow click (default 300)
}

const InfiniteScroll = React.forwardRef<HTMLDivElement, InfiniteScrollProps>(
  (
    {
      className,
      hasMore,
      isLoading,
      loadMore,
      threshold = 0.1,
      rootMargin = '100px', // triggers ahead of scroll reaching bottom/right
      loadingTrigger,
      direction = 'vertical',
      triggerIndex,
      showScrollButtons = false,
      scrollAmount = 300,
      children,
      ...props
    },
    ref,
  ) => {
    const observerRef = React.useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = React.useState(false)
    const [canScrollRight, setCanScrollRight] = React.useState(false)

    React.useEffect(() => {
      const observerNode = observerRef.current
      if (!observerNode) return

      const isHorizontal = direction === 'horizontal'

      // Find the nearest scrollable parent container
      let parentElement: HTMLElement | null = observerNode.parentElement
      while (parentElement && parentElement !== document.body) {
        const style = window.getComputedStyle(parentElement)
        const overflow = isHorizontal ? style.overflowX : style.overflowY
        if (overflow === 'auto' || overflow === 'scroll') {
          break
        }
        parentElement = parentElement.parentElement
      }

      // Intersection Observer logic
      const observer = new IntersectionObserver(
        (entries) => {
          const first = entries[0]
          if (first.isIntersecting && hasMore && !isLoading) {
            loadMore()
          }
        },
        {
          root:
            parentElement && parentElement !== document.body
              ? parentElement
              : null,
          threshold,
          rootMargin,
        },
      )

      observer.observe(observerNode)

      // Scroll indicators listener for horizontal navigation
      let handleScroll: () => void
      if (parentElement && isHorizontal && showScrollButtons) {
        handleScroll = () => {
          if (!parentElement) return
          setCanScrollLeft(parentElement.scrollLeft > 10)
          setCanScrollRight(
            parentElement.scrollLeft + parentElement.clientWidth <
              parentElement.scrollWidth - 15,
          )
        }

        parentElement.addEventListener('scroll', handleScroll)
        handleScroll()
        // Delay to allow dynamic children rendering width recalculation
        const timer = setTimeout(handleScroll, 150)

        return () => {
          parentElement?.removeEventListener('scroll', handleScroll)
          clearTimeout(timer)
          observer.unobserve(observerNode)
        }
      }

      return () => {
        observer.unobserve(observerNode)
      }
    }, [
      hasMore,
      isLoading,
      loadMore,
      threshold,
      rootMargin,
      direction,
      showScrollButtons,
      children,
    ])

    const handleScrollClick = (amount: number) => {
      const observerNode = observerRef.current
      if (!observerNode) return
      let parentElement: HTMLElement | null = observerNode.parentElement
      while (parentElement && parentElement !== document.body) {
        const style = window.getComputedStyle(parentElement)
        const overflow =
          direction === 'horizontal' ? style.overflowX : style.overflowY
        if (overflow === 'auto' || overflow === 'scroll') {
          break
        }
        parentElement = parentElement.parentElement
      }
      if (parentElement) {
        parentElement.scrollBy({ left: amount, behavior: 'smooth' })
      }
    }

    const childrenArray = React.Children.toArray(children)
    const hasTriggerIndex =
      triggerIndex !== undefined &&
      triggerIndex >= 0 &&
      triggerIndex < childrenArray.length

    const triggerNode = (
      <div
        ref={observerRef}
        className={cn(
          direction === 'horizontal' ? 'h-full w-[1px]' : 'w-full h-[1px]',
          'opacity-0 pointer-events-none select-none',
        )}
      />
    )

    const renderedContent = hasTriggerIndex ? (
      <>
        {childrenArray.slice(0, triggerIndex + 1)}
        {triggerNode}
        {childrenArray.slice(triggerIndex + 1)}
      </>
    ) : (
      <>
        {children}
        {triggerNode}
      </>
    )

    return (
      <div
        ref={ref}
        data-slot="infinite-scroll"
        className={cn(
          direction === 'horizontal'
            ? 'flex items-center h-full w-max gap-4 relative'
            : 'w-full space-y-4',
          className,
        )}
        {...props}
      >
        {/* Left Sticky Button */}
        {direction === 'horizontal' && showScrollButtons && canScrollLeft && (
          <button
            type="button"
            onClick={() => handleScrollClick(-scrollAmount)}
            className="sticky left-2 z-30 h-9 w-9 rounded-full border border-border bg-card text-foreground flex items-center justify-center hover:bg-muted transition-all shadow-lg cursor-pointer shrink-0 mr-[-36px]"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        {renderedContent}

        {/* Right Sticky Button */}
        {direction === 'horizontal' && showScrollButtons && canScrollRight && (
          <button
            type="button"
            onClick={() => handleScrollClick(scrollAmount)}
            className="sticky right-2 z-30 h-9 w-9 rounded-full border border-border bg-card text-foreground flex items-center justify-center hover:bg-muted transition-all shadow-lg cursor-pointer shrink-0 ml-[-36px]"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}

        {/* Loading State Display */}
        {isLoading && (
          <div
            className={cn(
              direction === 'horizontal'
                ? 'h-full flex items-center justify-center px-6 min-w-[140px]'
                : 'w-full flex justify-center py-6 min-h-[40px]',
            )}
          >
            {loadingTrigger || (
              <div
                className={cn(
                  'flex items-center gap-2 text-xs text-muted-foreground select-none',
                  direction === 'horizontal'
                    ? 'flex-col justify-center text-center'
                    : '',
                )}
              >
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                <span>Loading next...</span>
              </div>
            )}
          </div>
        )}
      </div>
    )
  },
)
InfiniteScroll.displayName = 'InfiniteScroll'

export { InfiniteScroll }
