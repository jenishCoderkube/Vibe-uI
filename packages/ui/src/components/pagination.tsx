'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'
import { buttonVariants } from './button'

const paginationVariants = tv({
  base: 'mx-auto flex w-full justify-center',
  variants: {
    variant: {
      default: '',
      glass: '',
      retro: '',
      glow: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface PaginationProps
  extends
    React.ComponentPropsWithoutRef<'nav'>,
    VariantProps<typeof paginationVariants> {}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  ),
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-slot="pagination-content"
    className={cn('flex flex-row items-center gap-1.5', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-slot="pagination-item"
    className={cn('animate-page-item', className)}
    {...props}
  />
))
PaginationItem.displayName = 'PaginationItem'

export interface PaginationLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  isActive?: boolean
  variant?:
    | 'default'
    | 'glass'
    | 'retro'
    | 'glow'
    | 'link'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'destructive'
    | 'cyberpunk'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asButton?: boolean
  disabled?: boolean
}

const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  (
    {
      className,
      isActive,
      disabled,
      asButton,
      href,
      size = 'icon',
      variant,
      ...props
    },
    ref,
  ) => {
    const Tag = (asButton || !href ? 'button' : 'a') as React.ElementType
    const extraProps =
      Tag === 'button' ? { type: 'button', disabled } : { href }

    return (
      <Tag
        ref={ref}
        {...extraProps}
        data-slot="pagination-link"
        data-active={isActive}
        aria-current={isActive ? 'page' : undefined}
        className={cn(
          buttonVariants({
            variant: isActive
              ? variant === 'retro'
                ? 'retro'
                : variant === 'glow'
                  ? 'glow'
                  : 'default'
              : 'outline',
            size,
          }),
          className,
        )}
        {...props}
      />
    )
  },
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof PaginationLink>
>(({ className, variant, ...props }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to previous page"
    size="default"
    className={cn('gap-1 pl-2.5 cursor-pointer', className)}
    variant={variant}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
))
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof PaginationLink>
>(({ className, variant, ...props }, ref) => (
  <PaginationLink
    ref={ref}
    aria-label="Go to next page"
    size="default"
    className={cn('gap-1 pr-2.5 cursor-pointer', className)}
    variant={variant}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
))
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    data-slot="pagination-ellipsis"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

// 1. Pagination Dots component
export interface PaginationDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  variant?: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
}

const PaginationDots = React.forwardRef<HTMLDivElement, PaginationDotsProps>(
  (
    {
      totalPages,
      currentPage,
      onPageChange,
      variant = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center gap-2 p-2 w-fit mx-auto rounded-full border',
          variant === 'default' && 'bg-background border-border',
          variant === 'glass' &&
            'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-md',
          variant === 'retro' &&
            'border-2 border-foreground bg-background rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)]',
          variant === 'glow' &&
            'border-primary/20 bg-primary/[0.02] shadow-[0_0_12px_rgba(168,85,247,0.1)]',
          variant === 'cyberpunk' &&
            'border-emerald-950 bg-black rounded-none font-mono',
          className,
        )}
        {...props}
      >
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1
          const isActive = page === currentPage
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              type="button"
              className={cn(
                'cursor-pointer transition-all duration-300 focus:outline-none',
                variant === 'retro'
                  ? isActive
                    ? 'h-3.5 w-3.5 bg-foreground border border-background rounded-none'
                    : 'h-3.5 w-3.5 bg-background border border-foreground hover:bg-muted rounded-none'
                  : variant === 'cyberpunk'
                    ? isActive
                      ? 'h-2.5 w-5 bg-emerald-500 rounded-none shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                      : 'h-2.5 w-2 bg-emerald-950 hover:bg-emerald-800 rounded-none'
                    : isActive
                      ? variant === 'glow'
                        ? 'h-2.5 w-6 bg-primary rounded-full shadow-[0_0_10px_rgba(168,85,247,0.6)]'
                        : variant === 'glass'
                          ? 'h-2.5 w-6 bg-foreground rounded-full backdrop-blur-sm shadow-sm'
                          : 'h-2.5 w-6 bg-primary rounded-full'
                      : 'h-2.5 w-2.5 bg-muted hover:bg-muted-foreground/50 rounded-full',
              )}
              aria-label={`Go to page ${page}`}
            />
          )
        })}
      </div>
    )
  },
)
PaginationDots.displayName = 'PaginationDots'

// 2. Pagination Slider component
export interface PaginationSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  variant?: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
}

const PaginationSlider = React.forwardRef<
  HTMLDivElement,
  PaginationSliderProps
>(
  (
    {
      totalPages,
      currentPage,
      onPageChange,
      variant = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-4 p-3 border rounded-xl w-full max-w-sm mx-auto',
          variant === 'default' && 'bg-background border-border',
          variant === 'glass' &&
            'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-md',
          variant === 'retro' &&
            'border-2 border-foreground bg-background rounded-none shadow-[3px_3px_0px_rgba(0,0,0,1)]',
          variant === 'glow' && 'border-primary/20 bg-primary/[0.02]',
          variant === 'cyberpunk' &&
            'border-emerald-950 bg-black rounded-none text-emerald-500 font-mono',
          className,
        )}
        {...props}
      >
        <span className="text-xs font-semibold select-none min-w-[32px]">
          Page {currentPage}
        </span>
        <input
          type="range"
          min={1}
          max={totalPages}
          value={currentPage}
          onChange={(e) => onPageChange(Number(e.target.value))}
          className={cn(
            'flex-1 h-2 rounded-full cursor-pointer appearance-none outline-none transition-all',
            variant === 'retro' &&
              'rounded-none border border-foreground h-3 accent-foreground bg-background',
            variant === 'cyberpunk' &&
              'rounded-none border border-emerald-950 bg-black accent-emerald-500',
            variant === 'glow' && 'accent-primary bg-primary/10',
            variant === 'glass' &&
              'accent-foreground bg-black/10 dark:bg-white/10',
            variant === 'default' && 'accent-primary bg-secondary',
          )}
        />
        <span className="text-xs font-semibold select-none min-w-[32px] text-right">
          of {totalPages}
        </span>
      </div>
    )
  },
)
PaginationSlider.displayName = 'PaginationSlider'

// 3. Pagination Mini component
export interface PaginationMiniProps extends React.HTMLAttributes<HTMLDivElement> {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  variant?: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
}

const PaginationMini = React.forwardRef<HTMLDivElement, PaginationMiniProps>(
  (
    {
      totalPages,
      currentPage,
      onPageChange,
      variant = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-3 p-1.5 border rounded-lg w-fit mx-auto',
          variant === 'default' && 'bg-background border-border',
          variant === 'glass' &&
            'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-md',
          variant === 'retro' &&
            'border-2 border-foreground bg-background text-foreground rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)]',
          variant === 'glow' &&
            'border-primary/20 bg-primary/[0.02] text-primary',
          variant === 'cyberpunk' &&
            'border-emerald-950 bg-black text-emerald-500 rounded-none font-mono',
          className,
        )}
        {...props}
      >
        <PaginationLink
          variant={variant}
          size="icon"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={cn(
            currentPage === 1 &&
              'opacity-40 cursor-not-allowed pointer-events-none',
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </PaginationLink>
        <span className="text-xs font-bold px-2 select-none">
          {currentPage} / {totalPages}
        </span>
        <PaginationLink
          variant={variant}
          size="icon"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={cn(
            currentPage === totalPages &&
              'opacity-40 cursor-not-allowed pointer-events-none',
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </PaginationLink>
      </div>
    )
  },
)
PaginationMini.displayName = 'PaginationMini'

// 4. Pagination Load More component
export interface PaginationLoadMoreProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean
  onClick: () => void
  hasNextPage: boolean
  loadedCount?: number
  totalCount?: number
  variant?: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
}

const PaginationLoadMore = React.forwardRef<
  HTMLDivElement,
  PaginationLoadMoreProps
>(
  (
    {
      isLoading,
      onClick,
      hasNextPage,
      loadedCount,
      totalCount,
      variant = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    const percentage =
      loadedCount && totalCount
        ? Math.min(100, (loadedCount / totalCount) * 100)
        : 0
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center gap-3 w-full max-w-xs mx-auto',
          className,
        )}
        {...props}
      >
        {loadedCount && totalCount && (
          <div className="w-full space-y-1">
            <div className="flex justify-between text-[11px] font-medium text-muted-foreground select-none">
              <span>
                Showing {loadedCount} of {totalCount} items
              </span>
              <span>{Math.round(percentage)}%</span>
            </div>
            <div
              className={cn(
                'h-1.5 w-full rounded-full overflow-hidden bg-muted',
                variant === 'retro' &&
                  'rounded-none border border-foreground h-2 bg-background',
                variant === 'cyberpunk' &&
                  'rounded-none border border-emerald-950/60 bg-black h-2',
              )}
            >
              <div
                className={cn(
                  'h-full transition-all duration-300',
                  variant === 'retro' && 'bg-foreground',
                  variant === 'cyberpunk' &&
                    'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]',
                  variant === 'glow' &&
                    'bg-primary shadow-[0_0_8px_rgba(168,85,247,0.5)]',
                  variant === 'glass' && 'bg-foreground',
                  variant === 'default' && 'bg-primary',
                )}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )}
        {hasNextPage && (
          <button
            onClick={onClick}
            disabled={isLoading}
            className={cn(
              buttonVariants({
                variant: variant === 'default' ? 'default' : variant,
                size: 'default',
              }),
              'w-full cursor-pointer flex items-center justify-center gap-2 font-semibold',
              isLoading && 'opacity-80 cursor-wait',
            )}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-4 w-4 text-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Loading...</span>
              </>
            ) : (
              <span>Load More</span>
            )}
          </button>
        )}
      </div>
    )
  },
)
PaginationLoadMore.displayName = 'PaginationLoadMore'

// 5. Pagination Dropdown component
export interface PaginationDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  variant?: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
}

const PaginationDropdown = React.forwardRef<
  HTMLDivElement,
  PaginationDropdownProps
>(
  (
    {
      totalPages,
      currentPage,
      onPageChange,
      variant = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-2 p-1.5 border rounded-xl w-fit mx-auto',
          variant === 'default' && 'bg-background border-border',
          variant === 'glass' &&
            'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-md',
          variant === 'retro' &&
            'border-2 border-foreground bg-background text-foreground rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)]',
          variant === 'glow' &&
            'border-primary/20 bg-primary/[0.02] text-primary',
          variant === 'cyberpunk' &&
            'border-emerald-950 bg-black text-emerald-500 rounded-none font-mono',
          className,
        )}
        {...props}
      >
        <PaginationLink
          variant={variant}
          size="icon"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={cn(
            currentPage === 1 &&
              'opacity-40 cursor-not-allowed pointer-events-none',
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </PaginationLink>

        <select
          value={currentPage}
          onChange={(e) => onPageChange(Number(e.target.value))}
          className={cn(
            'text-xs font-semibold px-2 py-1 bg-transparent border-0 outline-none cursor-pointer focus:ring-0',
            variant === 'retro' && 'font-bold uppercase tracking-tight',
            variant === 'cyberpunk' &&
              'font-mono text-emerald-500 bg-black border border-emerald-950',
          )}
        >
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1
            return (
              <option
                key={page}
                value={page}
                className="bg-popover text-foreground"
              >
                Page {page} of {totalPages}
              </option>
            )
          })}
        </select>

        <PaginationLink
          variant={variant}
          size="icon"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={cn(
            currentPage === totalPages &&
              'opacity-40 cursor-not-allowed pointer-events-none',
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </PaginationLink>
      </div>
    )
  },
)
PaginationDropdown.displayName = 'PaginationDropdown'

// 6. Pagination Progress Line component
export interface PaginationProgressLineProps extends React.HTMLAttributes<HTMLDivElement> {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  variant?: 'default' | 'glass' | 'retro' | 'glow' | 'cyberpunk'
}

const PaginationProgressLine = React.forwardRef<
  HTMLDivElement,
  PaginationProgressLineProps
>(
  (
    {
      totalPages,
      currentPage,
      onPageChange,
      variant = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    const percentage =
      totalPages > 1 ? ((currentPage - 1) / (totalPages - 1)) * 100 : 100
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-2 p-3 border rounded-xl w-full max-w-xs mx-auto',
          variant === 'default' && 'bg-background border-border',
          variant === 'glass' &&
            'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 backdrop-blur-md',
          variant === 'retro' &&
            'border-2 border-foreground bg-background rounded-none shadow-[2px_2px_0px_rgba(0,0,0,1)]',
          variant === 'glow' && 'border-primary/20 bg-primary/[0.02]',
          variant === 'cyberpunk' &&
            'border-emerald-950 bg-black rounded-none text-emerald-500 font-mono',
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between w-full">
          <PaginationLink
            variant={variant}
            size="icon"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={cn(
              currentPage === 1 &&
                'opacity-40 cursor-not-allowed pointer-events-none',
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </PaginationLink>
          <span className="text-xs font-semibold select-none">
            Page {currentPage} of {totalPages}
          </span>
          <PaginationLink
            variant={variant}
            size="icon"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={cn(
              currentPage === totalPages &&
                'opacity-40 cursor-not-allowed pointer-events-none',
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </PaginationLink>
        </div>
        <div
          className={cn(
            'h-1 w-full rounded-full overflow-hidden bg-muted',
            variant === 'retro' &&
              'rounded-none border border-foreground h-1.5 bg-background',
            variant === 'cyberpunk' &&
              'rounded-none border border-emerald-950/60 bg-black h-1.5',
          )}
        >
          <div
            className={cn(
              'h-full transition-all duration-300',
              variant === 'retro' && 'bg-foreground',
              variant === 'cyberpunk' &&
                'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]',
              variant === 'glow' &&
                'bg-primary shadow-[0_0_8px_rgba(168,85,247,0.5)]',
              variant === 'glass' && 'bg-foreground',
              variant === 'default' && 'bg-primary',
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  },
)
PaginationProgressLine.displayName = 'PaginationProgressLine'

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationDots,
  PaginationSlider,
  PaginationMini,
  PaginationLoadMore,
  PaginationDropdown,
  PaginationProgressLine,
}
