import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarSeparator,
  MenubarShortcut,
} from '../menubar'

describe('Menubar Component', () => {
  it('renders menubar triggers correctly and opens menu options on click', async () => {
    const user = userEvent.setup()
    const handleItemClick = vi.fn()

    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={handleItemClick}>New File</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    )

    expect(screen.getByRole('menubar')).toBeInTheDocument()
    const trigger = screen.getByText('File')
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('New File')).not.toBeInTheDocument()

    // Click trigger to open menu
    await user.click(trigger)
    expect(screen.getByText('New File')).toBeInTheDocument()
    expect(screen.getByText('Save')).toBeInTheDocument()
    expect(screen.getByText('⌘S')).toBeInTheDocument()

    // Click menu item
    await user.click(screen.getByText('New File'))
    expect(handleItemClick).toHaveBeenCalledTimes(1)
  })

  it('supports CheckboxItem and RadioGroup selection', async () => {
    const user = userEvent.setup()

    function MenubarDemo() {
      const [checked, setChecked] = React.useState(true)
      const [radioVal, setRadioVal] = React.useState('grid')

      return (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
              >
                Show Grid
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarRadioGroup value={radioVal} onValueChange={setRadioVal}>
                <MenubarRadioItem value="grid">Grid View</MenubarRadioItem>
                <MenubarRadioItem value="list">List View</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )
    }

    render(<MenubarDemo />)

    await user.click(screen.getByText('View'))
    expect(screen.getByText('Show Grid')).toBeInTheDocument()
    expect(screen.getByText('Grid View')).toBeInTheDocument()
    expect(screen.getByText('List View')).toBeInTheDocument()
  })

  it('supports submenu triggers and expanding nested subcontent', async () => {
    const user = userEvent.setup()

    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email Link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    )

    await user.click(screen.getByText('Edit'))
    const subTrigger = screen.getByText('Share')
    expect(subTrigger).toBeInTheDocument()

    await user.click(subTrigger)
    expect(screen.getByText('Email Link')).toBeInTheDocument()
  })

  it('applies custom variant classes to Menubar and MenubarContent', async () => {
    const user = userEvent.setup()

    render(
      <Menubar variant="glass">
        <MenubarMenu>
          <MenubarTrigger>Glass Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Glass Item</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    )

    const menubarRoot = screen.getByRole('menubar')
    expect(menubarRoot).toHaveClass('backdrop-blur-md')

    await user.click(screen.getByText('Glass Menu'))
    const content = screen
      .getByText('Glass Item')
      .closest('[data-slot="menubar-content"]')
    expect(content).toHaveClass('backdrop-blur-md')
  })

  it('renders multiple menubar menus and opens items on click', async () => {
    const user = userEvent.setup()

    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New File</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo Action</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    )

    expect(screen.getByText('File Menu')).toBeInTheDocument()
    expect(screen.getByText('Edit Menu')).toBeInTheDocument()

    await user.click(screen.getByText('Edit Menu'))
    expect(screen.getByText('Undo Action')).toBeInTheDocument()
  })
})
