import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  MultiSelect,
  MultiSelectTrigger,
  MultiSelectContent,
  MultiSelectItem,
} from '../multi-select'

describe('MultiSelect Component', () => {
  it('renders closed trigger by default and opens content on click', () => {
    render(
      <MultiSelect defaultValue={[]}>
        <MultiSelectTrigger placeholder="Pick items" />
        <MultiSelectContent>
          <MultiSelectItem value="item-1">Item 1</MultiSelectItem>
          <MultiSelectItem value="item-2">Item 2</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>,
    )

    const trigger = screen.getByRole('button', { name: /pick items/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()

    fireEvent.click(trigger)
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('selects values and displays tags', () => {
    const handleValueChange = vi.fn()
    render(
      <MultiSelect onValueChange={handleValueChange}>
        <MultiSelectTrigger placeholder="Pick items" />
        <MultiSelectContent>
          <MultiSelectItem value="item-1">Item 1</MultiSelectItem>
          <MultiSelectItem value="item-2">Item 2</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>,
    )

    // Open dropdown
    fireEvent.click(screen.getByRole('button', { name: /pick items/i }))

    // Click item-1
    fireEvent.click(screen.getByText('Item 1'))
    expect(handleValueChange).toHaveBeenCalledWith(['item-1'])
  })

  it('supports single selection mode', () => {
    const handleValueChange = vi.fn()
    render(
      <MultiSelect mode="single" onValueChange={handleValueChange}>
        <MultiSelectTrigger placeholder="Pick items" />
        <MultiSelectContent>
          <MultiSelectItem value="item-1">Item 1</MultiSelectItem>
          <MultiSelectItem value="item-2">Item 2</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>,
    )

    // Open dropdown
    fireEvent.click(screen.getByRole('button', { name: /pick items/i }))

    // Click item-1
    fireEvent.click(screen.getByText('Item 1'))
    expect(handleValueChange).toHaveBeenCalledWith(['item-1'])
  })
})
