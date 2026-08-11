import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Combobox } from '../combobox'

describe('Combobox Component', () => {
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ]

  it('renders trigger button and opens options overlay on click', async () => {
    const user = userEvent.setup()

    render(<Combobox options={options} placeholder="Pick a fruit" />)
    const trigger = screen.getByRole('combobox')

    expect(trigger).toBeInTheDocument()
    expect(screen.getByText('Pick a fruit')).toBeInTheDocument()
    expect(screen.queryByPlaceholderText(/search/i)).not.toBeInTheDocument()

    // Click trigger to open popover
    await user.click(trigger)
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.getByText('Cherry')).toBeInTheDocument()
  })

  it('filters options by search input query and displays empty text if no matches', async () => {
    const user = userEvent.setup()

    render(
      <Combobox
        options={options}
        placeholder="Pick a fruit"
        emptyText="No fruits found"
      />,
    )
    await user.click(screen.getByRole('combobox'))

    const searchInput = screen.getByPlaceholderText(/search/i)

    // Filter for "ban"
    await user.type(searchInput, 'ban')
    expect(screen.queryByText('Apple')).not.toBeInTheDocument()
    expect(screen.queryByText('Cherry')).not.toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()

    // Filter for something not present
    await user.clear(searchInput)
    await user.type(searchInput, 'orange')
    expect(screen.queryByText('Banana')).not.toBeInTheDocument()
    expect(screen.getByText('No fruits found')).toBeInTheDocument()
  })

  it('selects option, calls onValueChange, clears query, and closes popup', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    render(
      <Combobox
        options={options}
        placeholder="Pick a fruit"
        onValueChange={handleValueChange}
      />,
    )

    await user.click(screen.getByRole('combobox'))
    const searchInput = screen.getByPlaceholderText(/search/i)
    await user.type(searchInput, 'ban')

    const option = screen.getByText('Banana')
    await user.click(option)

    // Verifications
    expect(handleValueChange).toHaveBeenCalledWith('banana')
    // Trigger should now display 'Banana' label
    expect(screen.getByRole('combobox')).toHaveTextContent('Banana')
    // Popover contents should be closed
    expect(screen.queryByPlaceholderText(/search/i)).not.toBeInTheDocument()
  })

  it('deselects option when clicking already selected option', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    render(
      <Combobox
        options={options}
        defaultValue="banana"
        onValueChange={handleValueChange}
      />,
    )

    // Trigger should display 'Banana'
    expect(screen.getByRole('combobox')).toHaveTextContent('Banana')

    await user.click(screen.getByRole('combobox'))
    // Click 'Banana' option inside the list dialog, avoiding duplicate on the trigger
    const bananaOpt = within(screen.getByRole('dialog')).getByText('Banana')
    await user.click(bananaOpt)

    expect(handleValueChange).toHaveBeenCalledWith('')
    expect(screen.getByRole('combobox')).toHaveTextContent('Select option...')
  })

  it('supports controlled value changes', () => {
    const { rerender } = render(<Combobox options={options} value="apple" />)
    expect(screen.getByRole('combobox')).toHaveTextContent('Apple')

    rerender(<Combobox options={options} value="cherry" />)
    expect(screen.getByRole('combobox')).toHaveTextContent('Cherry')
  })

  it('supports different variants rendering', () => {
    render(<Combobox options={options} variant="retro" />)
    const trigger = screen.getByRole('combobox')
    expect(trigger).toHaveClass('border-2')
    expect(trigger).toHaveClass('border-foreground')
  })
})
