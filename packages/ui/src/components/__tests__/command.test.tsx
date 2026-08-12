import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
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

  it('supports multi-aesthetic variants (retro, glow, glass)', () => {
    const { container: retroContainer } = render(
      <Command variant="retro">
        <CommandInput placeholder="Retro search..." />
        <CommandList>
          <CommandGroup heading="Retro Actions">
            <CommandItem>Run Retro</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    )

    expect(screen.getByPlaceholderText('Retro search...')).toHaveClass(
      'font-mono',
    )

    const { container: glowContainer } = render(
      <Command variant="glow">
        <CommandInput placeholder="Glow search..." />
      </Command>,
    )
    expect(glowContainer.querySelector('svg')).toHaveClass('text-primary')
  })

  it('renders CommandDialog modal with variant prop', () => {
    render(
      <CommandDialog open variant="glass">
        <CommandInput placeholder="Search in dialog..." />
        <CommandList>
          <CommandItem>Dialog Item</CommandItem>
        </CommandList>
      </CommandDialog>,
    )

    expect(
      screen.getByPlaceholderText('Search in dialog...'),
    ).toBeInTheDocument()
    expect(screen.getByText('Dialog Item')).toBeInTheDocument()
  })

  it('renders CommandSeparator and CommandShortcut', () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>
            Billing
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandSeparator data-testid="cmd-separator" />
          <CommandItem>
            Settings
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandList>
      </Command>,
    )

    expect(screen.getByText('⌘B')).toBeInTheDocument()
    expect(screen.getByText('⌘S')).toBeInTheDocument()
    expect(screen.getByTestId('cmd-separator')).toBeInTheDocument()
  })

  it('simulates a real-life developer quick actions palette (Raycast / VS Code style)', () => {
    const handleAction = vi.fn()

    render(
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No actions found matching query.</CommandEmpty>
          <CommandGroup heading="Quick Actions">
            <CommandItem onSelect={() => handleAction('new_file')}>
              <span>New File</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => handleAction('toggle_terminal')}>
              <span>Toggle Terminal</span>
              <CommandShortcut>⌃`</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings & Account">
            <CommandItem onSelect={() => handleAction('open_settings')}>
              <span>Preferences</span>
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    )

    expect(
      screen.getByPlaceholderText('Type a command or search...'),
    ).toBeInTheDocument()
    expect(screen.getByText('Quick Actions')).toBeInTheDocument()
    expect(screen.getByText('New File')).toBeInTheDocument()
    expect(screen.getByText('⌘N')).toBeInTheDocument()
    expect(screen.getByText('Toggle Terminal')).toBeInTheDocument()
    expect(screen.getByText('Preferences')).toBeInTheDocument()
  })
})
