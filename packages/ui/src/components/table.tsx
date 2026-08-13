'use client'

import * as React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'

const tableVariants = tv({
  base: 'relative w-full overflow-x-auto overflow-y-hidden transition-all duration-300',
  variants: {
    variant: {
      default: '',
      glass:
        'rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-sm',
      retro:
        'rounded-none border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]',
      glow: 'rounded-xl border border-primary/30 bg-card/90 shadow-[0_0_15px_rgba(168,85,247,0.15)] text-card-foreground',
      cyberpunk:
        'rounded-none border border-emerald-500/80 bg-black text-emerald-400 font-mono shadow-[0_0_12px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface TableContextValue {
  variant?: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
}

const TableVariantContext = React.createContext<TableContextValue>({
  variant: 'default',
})

export interface TableProps
  extends
    React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <TableVariantContext.Provider value={{ variant }}>
        <div className={tableVariants({ variant })}>
          <table
            ref={ref}
            data-slot="table"
            className={cn(
              'w-full caption-bottom text-sm border-collapse',
              className,
            )}
            {...props}
          />
        </div>
      </TableVariantContext.Provider>
    )
  },
)
Table.displayName = 'Table'

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(TableVariantContext)
  return (
    <thead
      ref={ref}
      data-slot="table-header"
      className={cn(
        '[&_tr]:border-b bg-muted/40',
        variant === 'retro' &&
          'bg-foreground/5 [&_tr]:border-b-2 border-foreground',
        variant === 'cyberpunk' &&
          'bg-emerald-950/20 [&_tr]:border-emerald-500/30',
        className,
      )}
      {...props}
    />
  )
})
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    data-slot="table-body"
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
))
TableBody.displayName = 'TableBody'

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    data-slot="table-footer"
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className,
    )}
    {...props}
  />
))
TableFooter.displayName = 'TableFooter'

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
  const { variant } = React.useContext(TableVariantContext)
  return (
    <tr
      ref={ref}
      data-slot="table-row"
      className={cn(
        'border-b transition-colors data-[state=selected]:bg-muted',
        variant === 'default' && 'hover:bg-muted/50 border-border',
        variant === 'glass' &&
          'hover:bg-black/5 dark:hover:bg-white/5 border-black/10 dark:border-white/5',
        variant === 'retro' &&
          'hover:bg-foreground/5 border-b-2 border-foreground',
        variant === 'glow' && 'hover:bg-primary/5 border-primary/20',
        variant === 'cyberpunk' &&
          'hover:bg-emerald-500/5 border-emerald-500/20',
        className,
      )}
      {...props}
    />
  )
})
TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    data-slot="table-head"
    className={cn(
      'h-12 px-4 text-left align-middle font-semibold text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
))
TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    data-slot="table-cell"
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
))
TableCell.displayName = 'TableCell'

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    data-slot="table-caption"
    className={cn('mt-4 text-xs text-muted-foreground', className)}
    {...props}
  />
))
TableCaption.displayName = 'TableCaption'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
