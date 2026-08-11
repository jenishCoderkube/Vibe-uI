import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Popover, PopoverTrigger, PopoverContent } from '../popover'

describe('Popover Component', () => {
  it('renders trigger and shows content on click', () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Info</PopoverContent>
      </Popover>,
    )

    const trigger = screen.getByRole('button', { name: /open popover/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Popover Info')).not.toBeInTheDocument()

    fireEvent.click(trigger)
    expect(screen.getByText('Popover Info')).toBeInTheDocument()
  })
})
