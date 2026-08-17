'use client'

import * as React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Calendar,
  Button,
} from 'vibe-ui'

export function BookingCard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="w-full text-left">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">Book a Session</CardTitle>
        <CardDescription className="text-[11px]">
          Select a date for your initial consultation.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 py-1">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full"
          classNames={{
            table: 'w-full border-collapse space-y-1 table-fixed',
            head_row: '',
            head_cell:
              'text-muted-foreground rounded-md font-normal text-[0.8rem] pb-2 text-center',
            row: 'mt-2 w-full',
            cell: 'h-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
            day: 'h-9 w-full p-0 font-normal aria-selected:opacity-100 hover:bg-muted rounded-md inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
          }}
        />
        <div className="grid grid-cols-3 gap-1.5 text-center">
          {['9:30 AM', '1:00 PM', '4:30 PM'].map((time) => (
            <button
              key={time}
              type="button"
              className="px-2 py-1 text-[10px] font-semibold border border-border/50 rounded-lg hover:bg-muted hover:border-border/80 active:bg-muted/80 transition-all cursor-pointer"
            >
              {time}
            </button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex gap-2">
        <Button className="w-full h-8 text-xs font-semibold">
          Schedule with Copilot
        </Button>
      </CardFooter>
    </Card>
  )
}
export default BookingCard
