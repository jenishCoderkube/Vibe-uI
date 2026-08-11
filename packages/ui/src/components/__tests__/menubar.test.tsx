import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from '../menubar'

describe('Menubar Component', () => {
  it('renders menubar triggers correctly', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    )

    expect(screen.getByRole('menubar')).toBeInTheDocument()
    expect(screen.getByText('File')).toBeInTheDocument()
  })
})
