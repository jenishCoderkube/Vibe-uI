'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../lib/utils'

const itemVariants = tv({
  base: 'group/item flex flex-wrap items-center rounded-md border text-sm transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  variants: {
    variant: {
      default:
        'bg-transparent border-transparent text-foreground hover:bg-muted',
      outline:
        'border-border bg-background hover:bg-muted/80 dark:hover:bg-muted/20',
      muted:
        'bg-muted/50 border-transparent hover:bg-muted dark:hover:bg-muted/30',
      glass:
        'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-md text-muted-foreground hover:text-foreground hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[2px_2px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)]',
      glow: 'border-primary/10 bg-primary/[0.01] text-primary/80 hover:text-primary hover:border-primary/30 hover:shadow-[0_0_12px_rgba(168,85,247,0.15)]',
      cyberpunk:
        'border-emerald-950 bg-black text-emerald-600 font-mono hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/5 hover:shadow-[0_0_8px_rgba(16,185,129,0.15)]',
    },
    size: {
      default: 'gap-4 p-4',
      sm: 'gap-2.5 px-4 py-2.5 text-xs',
      lg: 'gap-5 p-5 text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ItemProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemVariants> {
  asChild?: boolean
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div'
    return (
      <Comp
        ref={ref}
        data-slot="item"
        className={cn(itemVariants({ variant, size }), className)}
        {...props}
      />
    )
  },
)
Item.displayName = 'Item'

export interface ItemGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const ItemGroup = React.forwardRef<HTMLDivElement, ItemGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="list"
        data-slot="item-group"
        className={cn('group/item-group flex flex-col gap-2.5', className)}
        {...props}
      />
    )
  },
)
ItemGroup.displayName = 'ItemGroup'

export interface ItemSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const ItemSeparator = React.forwardRef<HTMLDivElement, ItemSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="item-separator"
        className={cn('h-px bg-border my-0.5', className)}
        {...props}
      />
    )
  },
)
ItemSeparator.displayName = 'ItemSeparator'

const itemMediaVariants = tv({
  base: 'flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-md [&_svg]:pointer-events-none [&_svg]:shrink-0',
  variants: {
    variant: {
      default: 'bg-transparent',
      icon: 'size-8 rounded-md bg-muted border border-border [&_svg]:size-4 text-muted-foreground group-hover/item:text-foreground',
      image:
        'size-10 rounded-md border border-border [&_img]:size-full [&_img]:object-cover',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface ItemMediaProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof itemMediaVariants> {}

const ItemMedia = React.forwardRef<HTMLDivElement, ItemMediaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="item-media"
        className={cn(itemMediaVariants({ variant }), className)}
        {...props}
      />
    )
  },
)
ItemMedia.displayName = 'ItemMedia'

export interface ItemContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const ItemContent = React.forwardRef<HTMLDivElement, ItemContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="item-content"
        className={cn(
          'flex flex-1 flex-col gap-0.5 min-w-0 text-left',
          className,
        )}
        {...props}
      />
    )
  },
)
ItemContent.displayName = 'ItemContent'

export interface ItemTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const ItemTitle = React.forwardRef<HTMLDivElement, ItemTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="item-title"
        className={cn(
          'text-sm font-semibold text-foreground tracking-wide truncate flex items-center gap-1.5',
          className,
        )}
        {...props}
      />
    )
  },
)
ItemTitle.displayName = 'ItemTitle'

export interface ItemDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const ItemDescription = React.forwardRef<
  HTMLParagraphElement,
  ItemDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      data-slot="item-description"
      className={cn(
        'text-xs text-muted-foreground line-clamp-2 leading-relaxed truncate text-balance',
        className,
      )}
      {...props}
    />
  )
})
ItemDescription.displayName = 'ItemDescription'

export interface ItemActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const ItemActions = React.forwardRef<HTMLDivElement, ItemActionsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="item-actions"
        className={cn('flex items-center gap-2 shrink-0 ml-auto', className)}
        {...props}
      />
    )
  },
)
ItemActions.displayName = 'ItemActions'

export interface ItemHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const ItemHeader = React.forwardRef<HTMLDivElement, ItemHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="item-header"
        className={cn(
          'flex basis-full items-center justify-between gap-2 border-b border-border pb-2 mb-2',
          className,
        )}
        {...props}
      />
    )
  },
)
ItemHeader.displayName = 'ItemHeader'

export interface ItemFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const ItemFooter = React.forwardRef<HTMLDivElement, ItemFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="item-footer"
        className={cn(
          'flex basis-full items-center justify-between gap-2 border-t border-border pt-2 mt-2 text-xs text-muted-foreground',
          className,
        )}
        {...props}
      />
    )
  },
)
ItemFooter.displayName = 'ItemFooter'

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}
