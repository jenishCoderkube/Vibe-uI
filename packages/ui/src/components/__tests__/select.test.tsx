import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../select'

describe('Select Component', () => {
  it('renders select trigger correctly', () => {
    render(
      <Select defaultValue="val-1">
        <SelectTrigger>
          <SelectValue placeholder="Choose one" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="val-1">Value 1</SelectItem>
          <SelectItem value="val-2">Value 2</SelectItem>
        </SelectContent>
      </Select>,
    )

    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('opens dropdown and triggers onValueChange on item selection', async () => {
    const handleValueChange = vi.fn()
    render(
      <Select onValueChange={handleValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Choose one" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="val-1">Value 1</SelectItem>
          <SelectItem value="val-2">Value 2</SelectItem>
        </SelectContent>
      </Select>,
    )

    // Trigger is combobox
    const trigger = screen.getByRole('combobox')

    // Open trigger
    fireEvent.click(trigger)

    // Option elements are rendered in JSDOM portal
    const option = screen.getByText('Value 2')
    expect(option).toBeInTheDocument()

    // Select option
    fireEvent.click(option)
    expect(handleValueChange).toHaveBeenCalledWith('val-2')
  })
})
