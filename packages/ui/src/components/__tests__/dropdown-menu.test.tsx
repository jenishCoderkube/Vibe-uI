import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../dropdown-menu'

describe('DropdownMenu Component', () => {
  it('renders trigger button and shows menu options on click', async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )

    const trigger = screen.getByRole('button', { name: /open menu/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()

    // Open dropdown menu via keyboard event
    fireEvent.keyDown(trigger, { key: 'Enter', code: 'Enter' })
    expect(await screen.findByText('Item 1')).toBeInTheDocument()
  })
})
