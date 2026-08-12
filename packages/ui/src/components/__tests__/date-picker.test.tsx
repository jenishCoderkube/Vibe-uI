import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { DatePicker, DateRangePicker } from '../date-picker'

describe('DatePicker Components', () => {
  it('renders single date picker with placeholder text', () => {
    render(<DatePicker placeholder="Select a date" />)
    expect(
      screen.getByRole('button', { name: /select a date/i }),
    ).toBeInTheDocument()
  })

  it('renders date range picker with placeholder text', () => {
    render(<DateRangePicker placeholder="Select range" />)
    expect(
      screen.getByRole('button', { name: /select range/i }),
    ).toBeInTheDocument()
  })

  it('opens single picker on click and selects a date', () => {
    const handleDateChange = vi.fn()
    render(
      <DatePicker
        placeholder="Select a date"
        onDateChange={handleDateChange}
        date={new Date(2026, 1, 15)}
      />,
    )

    const trigger = screen.getByRole('button', { name: /february 15th, 2026/i })
    expect(trigger).toBeInTheDocument()

    // Click to open popover
    fireEvent.click(trigger)

    // Select Feb 20
    const dayBtn = screen.getByText('20')
    fireEvent.click(dayBtn)

    // Verify callback
    expect(handleDateChange).toHaveBeenCalled()
  })

  it('applies multi-aesthetic variants to DatePicker trigger', () => {
    render(<DatePicker variant="retro" placeholder="Retro Date" />)
    const trigger = screen.getByRole('button', { name: /retro date/i })
    expect(trigger).toHaveClass('border-2')
    expect(trigger).toHaveClass('border-foreground')

    render(<DatePicker variant="glow" placeholder="Glow Date" />)
    const glowTrigger = screen.getByRole('button', { name: /glow date/i })
    expect(glowTrigger).toHaveClass('border-primary/40')
    expect(glowTrigger).toHaveClass('text-primary')
  })

  it('renders DateRangePicker with formatted range dates when from and to are provided', () => {
    render(
      <DateRangePicker
        date={{
          from: new Date(2026, 0, 10),
          to: new Date(2026, 0, 20),
        }}
      />,
    )
    expect(
      screen.getByRole('button', {
        name: /jan 10, 2026 - jan 20, 2026/i,
      }),
    ).toBeInTheDocument()
  })

  it('DateRangePicker opens popover and allows selecting date range', () => {
    const handleDateChange = vi.fn()
    render(
      <DateRangePicker
        placeholder="Select range"
        onDateChange={handleDateChange}
        date={{
          from: new Date(2026, 1, 10),
        }}
      />,
    )

    const trigger = screen.getByRole('button', { name: /feb 10, 2026/i })
    fireEvent.click(trigger)

    // Select Feb 18
    const dayBtns = screen.getAllByText('18')
    fireEvent.click(dayBtns[0])
    expect(handleDateChange).toHaveBeenCalled()
  })

  it('handles real-life hotel/flight reservation date range picking', () => {
    const handleBookingChange = vi.fn()

    render(
      <div className="space-y-2">
        <label className="text-sm font-semibold">Stay Duration</label>
        <DateRangePicker
          placeholder="Check-in — Check-out"
          onDateChange={handleBookingChange}
          numberOfMonths={1}
        />
        <p className="text-xs text-muted-foreground">
          Select your travel dates.
        </p>
      </div>,
    )

    const trigger = screen.getByRole('button', {
      name: /check-in — check-out/i,
    })
    expect(trigger).toBeInTheDocument()

    // Open calendar popover
    fireEvent.click(trigger)

    // Select start date (e.g. 15th)
    const day15 = screen.getByText('15')
    fireEvent.click(day15)

    expect(handleBookingChange).toHaveBeenCalled()
  })
})
