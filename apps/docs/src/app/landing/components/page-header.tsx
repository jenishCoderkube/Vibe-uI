'use client'

import * as React from 'react'
import { cn } from '../../../lib/utils'

function PageHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section
      className={cn('border-b border-border/50 dark:border-border', className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mx-auto w-full px-4 sm:px-6 md:px-8 flex flex-col items-center gap-3 sm:gap-4 md:gap-5 py-10 sm:py-14 md:py-20 text-center">
          {children}
        </div>
      </div>
    </section>
  )
}

function PageHeaderHeading({
  className,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'max-w-4xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance text-foreground leading-[1.15] sm:leading-[1.1]',
        className,
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'max-w-2xl text-sm sm:text-base md:text-lg text-balance text-muted-foreground leading-relaxed px-2 sm:px-0',
        className,
      )}
      {...props}
    />
  )
}

function PageActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2 sm:pt-4 px-4 sm:px-0',
        className,
      )}
      {...props}
    />
  )
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading }
