'use client'

import * as React from 'react'
import { DayPicker } from 'react-day-picker'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '../lib/utils'
import { buttonVariants } from './button'

const calendarVariants = tv({
  base: 'p-3',
  variants: {
    variant: {
      default: 'bg-card border border-border rounded-md',
      glass:
        'bg-white/5 dark:bg-white/[0.02] backdrop-blur-md border border-white/10 dark:border-white/5 rounded-lg shadow-lg',
      retro:
        'border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-none',
      glow: 'bg-primary/5 border border-primary/25 shadow-[0_0_20px_rgba(168,85,247,0.1)] rounded-md',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type CalendarProps = React.ComponentProps<typeof DayPicker> &
  VariantProps<typeof calendarVariants>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  variant,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      data-slot="calendar"
      className={cn(calendarVariants({ variant }), className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-muted',
        ),
        day_range_end: 'day-range-end',
        day_selected: cn(
          buttonVariants({
            variant:
              variant === 'retro'
                ? 'retro'
                : variant === 'glow'
                  ? 'glow'
                  : 'default',
          }),
          'hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        ),
        day_today: 'bg-accent text-accent-foreground',
        day_outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
