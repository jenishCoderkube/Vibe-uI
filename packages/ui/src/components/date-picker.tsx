'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import type { DateRange } from 'react-day-picker'
import { cn } from '../lib/utils'
import { Button } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export interface DatePickerProps {
  date?: Date
  onDateChange?: (date?: Date) => void
  placeholder?: string
  className?: string
  variant?: 'default' | 'glass' | 'retro' | 'glow'
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = 'Pick a date',
  className,
  variant = 'default',
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date)

  React.useEffect(() => {
    if (date !== undefined) {
      setSelectedDate(date)
    }
  }, [date])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={variant}
          data-slot="date-picker"
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !selectedDate && 'text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
          {selectedDate ? (
            format(selectedDate, 'PPP')
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        variant={variant}
        className="w-auto p-0 shadow-xl overflow-hidden"
        align="start"
      >
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(d) => {
            setSelectedDate(d)
            onDateChange?.(d)
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export interface DateRangePickerProps {
  date?: DateRange
  onDateChange?: (date?: DateRange) => void
  placeholder?: string
  className?: string
  variant?: 'default' | 'glass' | 'retro' | 'glow'
  numberOfMonths?: number
}

export function DateRangePicker({
  date,
  onDateChange,
  placeholder = 'Pick a date range',
  className,
  variant = 'default',
  numberOfMonths = 2,
}: DateRangePickerProps) {
  const [selectedRange, setSelectedRange] = React.useState<
    DateRange | undefined
  >(date)

  React.useEffect(() => {
    if (date !== undefined) {
      setSelectedRange(date)
    }
  }, [date])

  const formatText = () => {
    if (selectedRange?.from) {
      if (selectedRange.to) {
        return `${format(selectedRange.from, 'LLL dd, y')} - ${format(selectedRange.to, 'LLL dd, y')}`
      }
      return format(selectedRange.from, 'LLL dd, y')
    }
    return placeholder
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={variant}
          data-slot="date-range-picker"
          className={cn(
            'w-[300px] justify-start text-left font-normal',
            !selectedRange?.from && 'text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
          <span className="truncate">{formatText()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        variant={variant}
        className="w-auto p-0 shadow-xl overflow-hidden"
        align="start"
      >
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={selectedRange?.from}
          selected={selectedRange}
          onSelect={(range) => {
            setSelectedRange(range)
            onDateChange?.(range)
          }}
          numberOfMonths={numberOfMonths}
        />
      </PopoverContent>
    </Popover>
  )
}

export { DateRangePicker as DatePickerWithRange }
