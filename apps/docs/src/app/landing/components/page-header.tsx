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
        <div className="mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col items-center gap-2 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
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
        'leading-tighter max-w-3xl text-3xl font-bold tracking-tight text-balance text-foreground lg:leading-[1.1] xl:text-5xl xl:tracking-tighter',
        className
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
        'max-w-2xl text-base text-balance text-muted-foreground sm:text-lg',
        className
      )}
      {...props}
    />
  )
}

function PageActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center gap-2 pt-2',
        className
      )}
      {...props}
    />
  )
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading }
