import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '../command'

describe('Command Component', () => {
  it('renders command search menu correctly', () => {
    render(
      <Command>
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    )

    expect(screen.getByPlaceholderText('Type a command...')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })
})
