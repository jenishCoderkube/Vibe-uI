import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from '../dropdown-menu'

describe('DropdownMenu Component', () => {
  it('renders trigger button and shows menu options on click, and fires click handlers', async () => {
    const user = userEvent.setup()
    const handleItemClick = vi.fn()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleItemClick}>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Item 3 <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )

    const trigger = screen.getByRole('button', { name: /open menu/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()

    // Open dropdown menu
    await user.click(trigger)
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()

    // Click item
    await user.click(screen.getByText('Item 1'))
    expect(handleItemClick).toHaveBeenCalledTimes(1)

    // After clicking, the dropdown content closes
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()
  })

  it('supports submenu trigger and expanding subcontent', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Main Item</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
              <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>,
    )

    // Open main menu
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const subTrigger = screen.getByText('Submenu')
    expect(subTrigger).toBeInTheDocument()
    expect(screen.queryByText('Sub Item 1')).not.toBeInTheDocument()

    // Click sub-trigger to expand sub-menu (or focus and arrow-right, click is standard)
    await user.click(subTrigger)
    expect(screen.getByText('Sub Item 1')).toBeInTheDocument()
    expect(screen.getByText('Sub Item 2')).toBeInTheDocument()
  })

  it('applies custom content variants correctly', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Glass Menu</DropdownMenuTrigger>
        <DropdownMenuContent variant="glass">
          <DropdownMenuItem>Item Glass</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )

    await user.click(screen.getByRole('button', { name: /open glass menu/i }))
    const content = screen
      .getByText('Item Glass')
      .closest('[data-slot="dropdown-menu-content"]')
    expect(content).toHaveClass('backdrop-blur-md')
    expect(content).toHaveClass('bg-popover/90')
  })

  it('applies retro variant content correctly', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Retro Menu</DropdownMenuTrigger>
        <DropdownMenuContent variant="retro">
          <DropdownMenuItem>Item Retro</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )

    await user.click(screen.getByRole('button', { name: /open retro menu/i }))
    const content = screen
      .getByText('Item Retro')
      .closest('[data-slot="dropdown-menu-content"]')
    expect(content).toHaveClass('border-2')
    expect(content).toHaveClass('border-foreground')
    expect(content).toHaveClass('rounded-none')
  })
})
