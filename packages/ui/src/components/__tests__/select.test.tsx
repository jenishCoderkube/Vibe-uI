import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
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

  it('supports trigger size variants', () => {
    const { rerender } = render(
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Small select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="item1">Item 1</SelectItem>
        </SelectContent>
      </Select>,
    )
    const triggerSm = screen.getByRole('combobox')
    expect(triggerSm).toHaveClass('h-8')
    expect(triggerSm).toHaveClass('text-xs')

    rerender(
      <Select>
        <SelectTrigger size="default">
          <SelectValue placeholder="Default select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="item1">Item 1</SelectItem>
        </SelectContent>
      </Select>,
    )
    const triggerDefault = screen.getByRole('combobox')
    expect(triggerDefault).toHaveClass('h-10')
    expect(triggerDefault).toHaveClass('text-sm')
  })

  it('supports glow and glass variants on select trigger', () => {
    const { rerender } = render(
      <Select variant="glow">
        <SelectTrigger>
          <SelectValue placeholder="Glow select" />
        </SelectTrigger>
      </Select>,
    )
    const glowTrigger = screen.getByRole('combobox')
    expect(glowTrigger).toHaveClass('bg-primary/5')
    expect(glowTrigger).toHaveClass('text-foreground')

    rerender(
      <Select variant="glass">
        <SelectTrigger>
          <SelectValue placeholder="Glass select" />
        </SelectTrigger>
      </Select>,
    )
    const glassTrigger = screen.getByRole('combobox')
    expect(glassTrigger).toHaveClass('backdrop-blur-md')
  })

  it('renders SelectGroup, SelectLabel, and SelectSeparator within content', async () => {
    const user = userEvent.setup()

    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Grouped select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
          </SelectGroup>
          <SelectSeparator data-testid="select-sep" />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    )

    await user.click(screen.getByRole('combobox'))
    expect(screen.getByText('Fruits')).toBeInTheDocument()
    expect(screen.getByText('Vegetables')).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Carrot')).toBeInTheDocument()
    expect(screen.getByTestId('select-sep')).toBeInTheDocument()
  })

  it('supports disabled state on Select and SelectItem', () => {
    render(
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Disabled select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="opt1">Option 1</SelectItem>
        </SelectContent>
      </Select>,
    )

    const trigger = screen.getByRole('combobox')
    expect(trigger).toBeDisabled()
  })

  it('handles a real-life SaaS subscription plan selector dropdown', async () => {
    const user = userEvent.setup()
    const handlePlanChange = vi.fn()

    render(
      <div className="space-y-2">
        <label className="text-sm font-semibold">Subscription Tier</label>
        <Select onValueChange={handlePlanChange} defaultValue="starter">
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select plan tier" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Individual</SelectLabel>
              <SelectItem value="free">Hobby (Free)</SelectItem>
              <SelectItem value="starter">Starter ($10 / mo)</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Business</SelectLabel>
              <SelectItem value="pro">Pro Team ($29 / mo)</SelectItem>
              <SelectItem value="enterprise">Enterprise Custom</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>,
    )

    const trigger = screen.getByRole('combobox')
    expect(trigger).toHaveTextContent('Starter ($10 / mo)')

    // Open dropdown
    await user.click(trigger)
    expect(screen.getByText('Pro Team ($29 / mo)')).toBeInTheDocument()

    // Select Pro Team
    await user.click(screen.getByText('Pro Team ($29 / mo)'))
    expect(handlePlanChange).toHaveBeenCalledWith('pro')
  })
})
