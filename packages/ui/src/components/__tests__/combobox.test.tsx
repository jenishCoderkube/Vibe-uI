import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Combobox,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxSeparator,
} from '../combobox'

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

  it('supports composed subcomponents API', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    render(
      <Combobox onValueChange={handleValueChange}>
        <ComboboxTrigger asChild>
          <button data-testid="custom-trigger">Select custom...</button>
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxInput placeholder="Filter list..." />
          <ComboboxList>
            <ComboboxItem value="item-1">Item 1</ComboboxItem>
            <ComboboxItem value="item-2">Item 2</ComboboxItem>
            <ComboboxEmpty>Empty content</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>,
    )

    const trigger = screen.getByTestId('custom-trigger')
    expect(trigger).toBeInTheDocument()

    // Open popover
    await user.click(trigger)
    expect(screen.getByPlaceholderText('Filter list...')).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()

    // Select Item 2
    await user.click(screen.getByText('Item 2'))
    expect(handleValueChange).toHaveBeenCalledWith('item-2')
  })

  it('renders composed layout with ComboboxGroup, ComboboxLabel, and ComboboxSeparator', async () => {
    const user = userEvent.setup()

    render(
      <Combobox>
        <ComboboxTrigger asChild>
          <button data-testid="grouped-trigger">Grouped Menu</button>
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxGroup>
              <ComboboxLabel>Fruits</ComboboxLabel>
              <ComboboxItem value="apple">Apple</ComboboxItem>
            </ComboboxGroup>
            <ComboboxSeparator />
            <ComboboxGroup>
              <ComboboxLabel>Vegetables</ComboboxLabel>
              <ComboboxItem value="carrot">Carrot</ComboboxItem>
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>,
    )

    await user.click(screen.getByTestId('grouped-trigger'))
    expect(screen.getByText('Fruits')).toBeInTheDocument()
    expect(screen.getByText('Vegetables')).toBeInTheDocument()
    expect(screen.getByText('Carrot')).toBeInTheDocument()
  })

  it('handles deselecting item when clicking already selected item in composed layout', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    render(
      <Combobox value="item-1" onValueChange={handleValueChange}>
        <ComboboxTrigger asChild>
          <button data-testid="deselect-trigger">Trigger</button>
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItem value="item-1">Item 1</ComboboxItem>
            <ComboboxItem value="item-2">Item 2</ComboboxItem>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>,
    )

    await user.click(screen.getByTestId('deselect-trigger'))
    const item1 = screen.getByText('Item 1')
    await user.click(item1)
    expect(handleValueChange).toHaveBeenCalledWith('')
  })

  it('supports controlled open state and onOpenChange callback', async () => {
    const user = userEvent.setup()
    const handleOpenChange = vi.fn()

    render(
      <Combobox
        options={options}
        open={true}
        onOpenChange={handleOpenChange}
        placeholder="Pick fruit"
      />,
    )

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()

    // Clicking trigger toggles
    const trigger = screen.getByRole('combobox')
    await user.click(trigger)
    expect(handleOpenChange).toHaveBeenCalledWith(false)
  })

  it('handles real-life country selection in a billing checkout form', async () => {
    const user = userEvent.setup()
    const handleCountrySelect = vi.fn()

    const countries = [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'de', label: 'Germany' },
      { value: 'jp', label: 'Japan' },
    ]

    render(
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <label htmlFor="country-select" className="text-sm font-semibold">
          Country / Region
        </label>
        <Combobox
          options={countries}
          placeholder="Select billing country"
          searchPlaceholder="Search country name..."
          onValueChange={handleCountrySelect}
        />
      </form>,
    )

    const trigger = screen.getByRole('combobox')
    expect(screen.getByText('Select billing country')).toBeInTheDocument()

    // Open combobox
    await user.click(trigger)
    const searchInput = screen.getByPlaceholderText('Search country name...')

    // Search "United"
    await user.type(searchInput, 'United')
    expect(screen.getByText('United States')).toBeInTheDocument()
    expect(screen.getByText('United Kingdom')).toBeInTheDocument()
    expect(screen.queryByText('Canada')).not.toBeInTheDocument()

    // Select United States
    await user.click(screen.getByText('United States'))
    expect(handleCountrySelect).toHaveBeenCalledWith('us')
    expect(trigger).toHaveTextContent('United States')
  })
})
