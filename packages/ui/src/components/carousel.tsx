'use client'

import * as React from 'react'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'
import { Button } from './button'

const carouselVariants = tv({
  base: 'relative w-full',
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

type CarouselApi = UseEmblaCarouselType[1]
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0]

interface CarouselProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
  opts?: CarouselOptions
  plugins?: any
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
  loop?: boolean
  dragFree?: boolean
  align?: 'start' | 'center' | 'end'
  startIndex?: number
  autoplay?: boolean
  autoplayInterval?: number
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  variant?: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
  selectedIndex: number
  scrollSnaps: number[]
  scrollTo: (index: number) => void
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      variant,
      loop,
      dragFree,
      align,
      startIndex,
      autoplay = false,
      autoplayInterval = 4000,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
        ...(loop !== undefined && { loop }),
        ...(dragFree !== undefined && { dragFree }),
        ...(align !== undefined && { align }),
        ...(startIndex !== undefined && { startIndex }),
      },
      plugins,
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
    const [isHovered, setIsHovered] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setSelectedIndex(api.selectedScrollSnap())
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const scrollTo = React.useCallback(
      (index: number) => {
        api?.scrollTo(index)
      },
      [api],
    )

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === 'ArrowRight') {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext],
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      setScrollSnaps(api.scrollSnapList())

      const handleSelect = () => onSelect(api)
      const handleReInit = () => {
        onSelect(api)
        setScrollSnaps(api.scrollSnapList())
      }

      api.on('reInit', handleReInit)
      api.on('select', handleSelect)

      return () => {
        api.off('reInit', handleReInit)
        api.off('select', handleSelect)
      }
    }, [api, onSelect])

    React.useEffect(() => {
      if (!autoplay || !api || isHovered) {
        return
      }

      const intervalId = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext()
        } else {
          api.scrollTo(0)
        }
      }, autoplayInterval)

      return () => clearInterval(intervalId)
    }, [api, autoplay, autoplayInterval, isHovered])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          variant,
          selectedIndex,
          scrollSnaps,
          scrollTo,
        }}
      >
        <div
          ref={ref}
          onKeyDown={handleKeyDown}
          onMouseEnter={autoplay ? () => setIsHovered(true) : undefined}
          onMouseLeave={autoplay ? () => setIsHovered(false) : undefined}
          data-slot="carousel"
          className={cn(carouselVariants({ variant }), className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        data-slot="carousel-content"
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full z-10 transition-none',
        orientation === 'horizontal'
          ? 'top-1/2 left-2 sm:-left-12 -translate-y-1/2 hover:-translate-y-1/2 active:-translate-y-1/2 active:scale-100'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90 hover:-translate-x-1/2 hover:rotate-90 active:-translate-x-1/2 active:rotate-90 active:scale-100',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full z-10 transition-none',
        orientation === 'horizontal'
          ? 'top-1/2 right-2 sm:-right-12 -translate-y-1/2 hover:-translate-y-1/2 active:-translate-y-1/2 active:scale-100'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90 hover:-translate-x-1/2 hover:rotate-90 active:-translate-x-1/2 active:rotate-90 active:scale-100',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = 'CarouselNext'

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const {
    scrollSnaps,
    selectedIndex,
    scrollTo,
    variant: carouselVar,
  } = useCarousel()

  if (scrollSnaps.length <= 1) {
    return null
  }

  return (
    <div
      ref={ref}
      data-slot="carousel-dots"
      className={cn('flex items-center justify-center gap-2 mt-4', className)}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => scrollTo(index)}
          className={cn(
            'h-2 w-2 rounded-full transition-all duration-200 cursor-pointer border-0 p-0',
            carouselVar === 'retro'
              ? 'border border-foreground rounded-none bg-transparent hover:bg-foreground/10'
              : carouselVar === 'cyberpunk'
                ? 'border border-emerald-500 rounded-none bg-transparent hover:bg-emerald-500/10'
                : '',
            index === selectedIndex
              ? carouselVar === 'retro'
                ? '!bg-foreground w-4'
                : carouselVar === 'glass'
                  ? 'bg-foreground w-4'
                  : carouselVar === 'glow'
                    ? 'bg-primary w-4 shadow-[0_0_8px_rgba(168,85,247,0.6)]'
                    : carouselVar === 'cyberpunk'
                      ? 'bg-emerald-500 w-4 shadow-[0_0_8px_rgba(16,185,129,0.6)]'
                      : 'bg-primary w-4'
              : carouselVar === 'retro'
                ? 'border-foreground'
                : carouselVar === 'cyberpunk'
                  ? 'border-emerald-500'
                  : 'bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600',
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
})
CarouselDots.displayName = 'CarouselDots'

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
}
