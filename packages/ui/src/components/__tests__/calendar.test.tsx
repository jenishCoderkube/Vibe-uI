import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Calendar } from '../calendar'

describe('Calendar Component', () => {
  it('renders DayPicker correctly', () => {
    render(<Calendar />)
    const calendar = screen.getByRole('grid')
    expect(calendar).toBeInTheDocument()
  })

  it('triggers onSelect when clicking a day button', () => {
    const handleSelect = vi.fn()
    render(
      <Calendar
        mode="single"
        month={new Date(2026, 1)}
        onSelect={handleSelect}
      />,
    )

    // Find button for day 20 of February 2026
    const dayButton = screen.getByText('20')
    expect(dayButton).toBeInTheDocument()

    // Click it
    fireEvent.click(dayButton)
    expect(handleSelect).toHaveBeenCalled()
  })
})
