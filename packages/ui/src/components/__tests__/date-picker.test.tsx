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
})
