import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  MultiSelect,
  MultiSelectTrigger,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectGroup,
} from '../multi-select'

describe('MultiSelect Component', () => {
  it('opens options on click, registers items, and selects options in multi mode', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    render(
      <MultiSelect defaultValue={[]} onValueChange={handleValueChange}>
        <MultiSelectTrigger placeholder="Choose items" />
        <MultiSelectContent>
          <MultiSelectItem value="item-1">Item 1</MultiSelectItem>
          <MultiSelectItem value="item-2">Item 2</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>,
    )

    const trigger = screen.getByRole('button', { name: /choose items/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()

    // Open dropdown
    await user.click(trigger)
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()

    // Click Item 1 to select
    await user.click(screen.getByText('Item 1'))
    expect(handleValueChange).toHaveBeenCalledWith(['item-1'])

    // Click Item 2 to select
    await user.click(screen.getByText('Item 2'))
    expect(handleValueChange).toHaveBeenCalledWith(['item-1', 'item-2'])

    // Close dropdown to unmount the options list so text queries find unique tag elements in trigger
    await user.click(trigger)

    // Verify both items show tags in the trigger
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('supports single selection mode', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    render(
      <MultiSelect mode="single" onValueChange={handleValueChange}>
        <MultiSelectTrigger placeholder="Pick one" />
        <MultiSelectContent>
          <MultiSelectItem value="item-1">Item 1</MultiSelectItem>
          <MultiSelectItem value="item-2">Item 2</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>,
    )

    await user.click(screen.getByRole('button', { name: /pick one/i }))
    await user.click(screen.getByText('Item 1'))
    expect(handleValueChange).toHaveBeenCalledWith(['item-1'])

    // Renders as plain text, not a removable tag
    const trigger = screen.getByRole('button')
    expect(trigger).toHaveTextContent('Item 1')
    expect(
      screen.queryByRole('img', { name: /remove/i }),
    ).not.toBeInTheDocument()

    // Select different item
    await user.click(screen.getByText('Item 2'))
    expect(handleValueChange).toHaveBeenCalledWith(['item-2'])
  })

  it('removes tags and clears all options', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    render(
      <MultiSelect
        defaultValue={['item-1', 'item-2']}
        onValueChange={handleValueChange}
      >
        <MultiSelectTrigger placeholder="Choose" />
        <MultiSelectContent>
          <MultiSelectItem value="item-1">Item 1</MultiSelectItem>
          <MultiSelectItem value="item-2">Item 2</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>,
    )

    // Tag list renders with X close buttons.
    // Querying by finding the tag span parent (outer container)
    const tag1 = screen.getByText('item-1').parentElement
    const removeBtn = tag1?.querySelector('svg')
    expect(removeBtn).toBeInTheDocument()

    // Remove Item 1
    await user.click(removeBtn!)
    expect(handleValueChange).toHaveBeenCalledWith(['item-2'])

    // Clear all
    const clearAllBtn = screen.getByTitle('Clear all')
    await user.click(clearAllBtn)
    expect(screen.queryByText('item-2')).not.toBeInTheDocument()
  })

  it('enforces maxVisibleTags and displays +N more indicator', async () => {
    const user = userEvent.setup()

    render(
      <MultiSelect defaultValue={['1', '2', '3', '4']}>
        <MultiSelectTrigger placeholder="Choose" maxVisibleTags={2} />
        <MultiSelectContent>
          <MultiSelectItem value="1">One</MultiSelectItem>
          <MultiSelectItem value="2">Two</MultiSelectItem>
          <MultiSelectItem value="3">Three</MultiSelectItem>
          <MultiSelectItem value="4">Four</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>,
    )

    // Initially closed: option labels are unregistered, tags show raw values
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.queryByText('3')).not.toBeInTheDocument()
    expect(screen.getByText('+2 more')).toBeInTheDocument()

    // Open dropdown to register labels
    await user.click(screen.getByRole('button'))

    // Close dropdown to prevent duplicate text matching on option elements
    await user.click(screen.getByRole('button'))

    // Now trigger displays registered labels One and Two
    expect(screen.getByText('One')).toBeInTheDocument()
    expect(screen.getByText('Two')).toBeInTheDocument()
    expect(screen.queryByText('Three')).not.toBeInTheDocument()
    expect(screen.getByText('+2 more')).toBeInTheDocument()
  })

  it('toggles selection of all options inside a MultiSelectGroup', async () => {
    const user = userEvent.setup()

    render(
      <MultiSelect>
        <MultiSelectTrigger placeholder="Choose" />
        <MultiSelectContent>
          <MultiSelectGroup
            heading="Numbers"
            values={['1', '2']}
            defaultExpanded={true}
          >
            <MultiSelectItem value="1">One</MultiSelectItem>
            <MultiSelectItem value="2">Two</MultiSelectItem>
          </MultiSelectGroup>
          <MultiSelectItem value="3">Three</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>,
    )

    await user.click(screen.getByRole('button', { name: /choose/i }))

    // Group checkbox exists in MultiSelectGroup header if values is provided
    const group = screen
      .getByText('Numbers')
      .closest('[data-slot="multi-select-group"]')
    const groupCheckbox = group?.querySelector('.border')
    expect(groupCheckbox).toBeInTheDocument()

    // Toggle check all (adds '1' and '2' to state)
    await user.click(groupCheckbox!)

    // Close dropdown to prevent duplicate text matching
    await user.click(screen.getByRole('button'))

    // Trigger should now render tags for 'One' and 'Two'
    expect(screen.getByText('One')).toBeInTheDocument()
    expect(screen.getByText('Two')).toBeInTheDocument()

    // Reopen dropdown
    await user.click(screen.getByRole('button'))

    // Toggle uncheck all (removes them from state)
    const newGroup = screen
      .getByText('Numbers')
      .closest('[data-slot="multi-select-group"]')
    const newGroupCheckbox = newGroup?.querySelector('.border')
    await user.click(newGroupCheckbox!)

    // Close dropdown
    await user.click(screen.getByRole('button'))

    expect(screen.queryByText('One')).not.toBeInTheDocument()
    expect(screen.queryByText('Two')).not.toBeInTheDocument()
  })

  it('filters items when search query is entered', async () => {
    const user = userEvent.setup()

    render(
      <MultiSelect>
        <MultiSelectTrigger placeholder="Choose" />
        <MultiSelectContent showSearch>
          <MultiSelectItem value="1">One</MultiSelectItem>
          <MultiSelectItem value="2">Two</MultiSelectItem>
        </MultiSelectContent>
      </MultiSelect>,
    )

    await user.click(screen.getByRole('button', { name: /choose/i }))
    const searchInput = screen.getByPlaceholderText(/search/i)

    await user.type(searchInput, 'Tw')
    expect(screen.queryByText('One')).not.toBeInTheDocument()
    expect(screen.getByText('Two')).toBeInTheDocument()
  })

  it('closes dropdown content on click outside container', async () => {
    const user = userEvent.setup()

    render(
      <div>
        <span data-testid="outside">Outside Click</span>
        <MultiSelect>
          <MultiSelectTrigger placeholder="Choose" />
          <MultiSelectContent>
            <MultiSelectItem value="1">One</MultiSelectItem>
          </MultiSelectContent>
        </MultiSelect>
      </div>,
    )

    await user.click(screen.getByRole('button', { name: /choose/i }))
    expect(screen.getByText('One')).toBeInTheDocument()

    // Click outside
    await user.click(screen.getByTestId('outside'))
    expect(screen.queryByText('One')).not.toBeInTheDocument()
  })
})
