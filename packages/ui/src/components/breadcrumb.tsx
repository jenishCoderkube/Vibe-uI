'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const breadcrumbVariants = tv({
  base: 'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground',
  variants: {
    variant: {
      default: '',
      glass:
        'bg-white/5 dark:bg-white/[0.02] backdrop-blur-md border border-white/10 dark:border-white/5 px-3 py-1.5 rounded-full w-fit',
      retro:
        'border-2 border-foreground bg-background text-foreground px-3 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] rounded-none w-fit',
      glow: 'bg-primary/5 border border-primary/20 px-3 py-1.5 rounded-lg w-fit shadow-[0_0_12px_rgba(168,85,247,0.05)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface BreadcrumbProps
  extends
    React.ComponentPropsWithoutRef<'nav'>,
    VariantProps<typeof breadcrumbVariants> {
  separator?: React.ReactNode
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ variant, className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={className}
      {...props}
    />
  ),
)
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'> & VariantProps<typeof breadcrumbVariants>
>(({ variant, className, ...props }, ref) => (
  <ol
    ref={ref}
    data-slot="breadcrumb-list"
    className={cn(breadcrumbVariants({ variant }), className)}
    {...props}
  />
))
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-slot="breadcrumb-item"
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      data-slot="breadcrumb-link"
      className={cn(
        'transition-colors hover:text-foreground cursor-pointer',
        className,
      )}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    data-slot="breadcrumb-page"
    className={cn('font-normal text-foreground', className)}
    {...props}
  />
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    role="presentation"
    aria-hidden="true"
    data-slot="breadcrumb-separator"
    className={cn('[&>svg]:size-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    data-slot="breadcrumb-ellipsis"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
