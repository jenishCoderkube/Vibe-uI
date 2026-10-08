'use client'

import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const bentoGridVariants = tv({
  base: 'grid w-full grid-cols-1 gap-4 md:grid-cols-3',
})

export interface BentoGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        data-slot="bento-grid"
        className={cn(bentoGridVariants(), className)}
        {...props}
      />
    )
  },
)
BentoGrid.displayName = 'BentoGrid'

const bentoCardVariants = tv({
  base: 'group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl border p-6 transition-all duration-300',
  variants: {
    variant: {
      default:
        'bg-card border-border text-card-foreground shadow-sm hover:shadow-md hover:border-foreground/20',
      glass:
        'bg-card/75 dark:bg-zinc-900/60 backdrop-blur-md border-border/80 text-card-foreground shadow-lg hover:border-primary/40',
      glow:
        'bg-card/85 border-primary/30 text-card-foreground shadow-[0_0_20px_rgba(168,85,247,0.12)] hover:border-primary/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.28)]',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rounded-none',
      cyberpunk:
        'bg-card border border-emerald-500/50 text-card-foreground shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] rounded-none font-mono',
    },
    colSpan: {
      1: 'col-span-1',
      2: 'col-span-1 md:col-span-2',
      3: 'col-span-1 md:col-span-3',
    },
    rowSpan: {
      1: 'row-span-1',
      2: 'row-span-1 md:row-span-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    colSpan: 1,
    rowSpan: 1,
  },
})

export interface BentoCardProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bentoCardVariants> {
  asChild?: boolean
  name?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ComponentType<{ className?: string }>
  background?: React.ReactNode
  href?: string
  cta?: string
}

const BentoCard = React.forwardRef<HTMLDivElement, BentoCardProps>(
  (
    {
      className,
      variant,
      colSpan,
      rowSpan,
      name,
      description,
      icon: Icon,
      background,
      href,
      cta,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="bento-card"
        className={cn(bentoCardVariants({ variant, colSpan, rowSpan }), className)}
        {...props}
      >
        {/* Background Visual Graphic */}
        {background && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105"
          >
            {background}
          </div>
        )}

        {/* Custom Children or Standard Bento Layout */}
        {children ? (
          <div className="relative z-10 flex flex-col justify-between h-full">
            {children}
          </div>
        ) : (
          <>
            {/* Header Content */}
            <div className="relative z-10 flex items-center justify-between">
              {Icon && (
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-muted/60 text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                  <Icon className="h-5 w-5" />
                </div>
              )}
            </div>

            {/* Bottom Meta & Action */}
            <div className="relative z-10 mt-auto pt-6">
              {name && (
                <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {name}
                </h3>
              )}
              {description && (
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              )}

              {cta && (
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary transition-all duration-200">
                  {href ? (
                    <a
                      href={href}
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      <span>{cta}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <span>{cta}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    )
  },
)
BentoCard.displayName = 'BentoCard'

const BentoCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="bento-card-header"
    className={cn('relative z-10 flex items-center justify-between', className)}
    {...props}
  />
))
BentoCardHeader.displayName = 'BentoCardHeader'

const BentoCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="bento-card-title"
    className={cn(
      'text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary',
      className,
    )}
    {...props}
  />
))
BentoCardTitle.displayName = 'BentoCardTitle'

const BentoCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="bento-card-description"
    className={cn('text-sm text-muted-foreground leading-relaxed', className)}
    {...props}
  />
))
BentoCardDescription.displayName = 'BentoCardDescription'

const BentoCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="bento-card-content"
    className={cn('relative z-10 flex-1', className)}
    {...props}
  />
))
BentoCardContent.displayName = 'BentoCardContent'

export {
  BentoGrid,
  BentoCard,
  BentoCardHeader,
  BentoCardTitle,
  BentoCardDescription,
  BentoCardContent,
  bentoGridVariants,
  bentoCardVariants,
}
