import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../select'

describe('Select Component', () => {
  it('renders select trigger and triggers value changes on selection', async () => {
    const user = userEvent.setup()
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

    // Trigger is a combobox role in Radix Select
    const trigger = screen.getByRole('combobox')
    expect(trigger).toBeInTheDocument()

    // Click trigger to open dropdown content
    await user.click(trigger)

    const option = screen.getByText('Value 2')
    expect(option).toBeInTheDocument()

    // Select the option
    await user.click(option)
    expect(handleValueChange).toHaveBeenCalledWith('val-2')
  })

  it('supports custom search filtering when showSearch is enabled', async () => {
    const user = userEvent.setup()

    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose fruit" />
        </SelectTrigger>
        <SelectContent showSearch>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>,
    )

    // Open dropdown
    await user.click(screen.getByRole('combobox'))

    // Search input should be rendered
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toBeInTheDocument()

    // Type query to filter
    await user.type(searchInput, 'ban')

    // Apple and Cherry should be filtered out, Banana should remain
    expect(screen.queryByText('Apple')).not.toBeInTheDocument()
    expect(screen.queryByText('Cherry')).not.toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()

    // Clear and type query with no matches
    await user.clear(searchInput)
    await user.type(searchInput, 'xyz')

    expect(screen.queryByText('Banana')).not.toBeInTheDocument()
    expect(screen.getByText(/no results found/i)).toBeInTheDocument()
  })

  it('prevents Space and Enter key keydown propagation within the search input', async () => {
    const user = userEvent.setup()

    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose option" />
        </SelectTrigger>
        <SelectContent showSearch>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    )

    await user.click(screen.getByRole('combobox'))
    const searchInput = screen.getByPlaceholderText(/search/i)

    // Focus search input naturally using userEvent click
    await user.click(searchInput)

    // Typing spaces and press enter inside search input
    // This should NOT trigger trigger toggles/item selections (which closes the menu)
    await user.keyboard(' ')
    await user.keyboard('{Enter}')

    // Verify select content is still open/visible
    expect(searchInput).toBeInTheDocument()

    // Click the option to close the menu cleanly before the test ends
    await user.click(screen.getByText('Option 1'))

    // Wait for the dropdown content/search input to be completely removed from the DOM
    await waitFor(() => {
      expect(screen.queryByPlaceholderText(/search/i)).not.toBeInTheDocument()
    })
  })

  it('applies styling variants to the trigger and content', async () => {
    const user = userEvent.setup()

    const { rerender } = render(
      <Select variant="retro">
        <SelectTrigger>
          <SelectValue placeholder="Retro select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="item1">Item 1</SelectItem>
        </SelectContent>
      </Select>,
    )

    const trigger = screen.getByRole('combobox')
    expect(trigger).toHaveClass('border-2')
    expect(trigger).toHaveClass('border-foreground')

    await user.click(trigger)
    const content = screen.getByText('Item 1').closest('.border-foreground')
    expect(content).toHaveClass('border-2')
    expect(content).toHaveClass('border-foreground')
    expect(content).toHaveClass('rounded-none')
  })
})
