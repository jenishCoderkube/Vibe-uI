import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '../sheet'

describe('Sheet Component', () => {
  it('renders trigger and shows drawer content when clicked', async () => {
    const user = userEvent.setup()
    const handleOpenChange = vi.fn()

    render(
      <Sheet onOpenChange={handleOpenChange}>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
          <div>Sheet Body Content</div>
          <SheetFooter>
            <SheetClose>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    )

    const trigger = screen.getByRole('button', { name: /open sheet/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Sheet Body Content')).not.toBeInTheDocument()

    await user.click(trigger)

    expect(handleOpenChange).toHaveBeenCalledWith(true)
    expect(screen.getByText('Sheet Body Content')).toBeInTheDocument()
    expect(screen.getByText('Sheet Title')).toBeInTheDocument()
  })

  it('renders with different variants (glass, retro, glow)', async () => {
    const user = userEvent.setup()

    render(
      <Sheet>
        <SheetTrigger>Open Variant Sheet</SheetTrigger>
        <SheetContent variant="glass" side="left">
          <SheetTitle>Glass Variant</SheetTitle>
        </SheetContent>
      </Sheet>,
    )

    await user.click(screen.getByRole('button', { name: /open variant sheet/i }))
    expect(screen.getByText('Glass Variant')).toBeInTheDocument()
  })

  it('closes when close button is clicked', async () => {
    const user = userEvent.setup()

    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetTitle>Title</SheetTitle>
          <SheetClose>Dismiss</SheetClose>
        </SheetContent>
      </Sheet>,
    )

    await user.click(screen.getByRole('button', { name: /^open$/i }))
    expect(screen.getByText('Title')).toBeInTheDocument()

    const closeBtn = screen.getByRole('button', { name: /dismiss/i })
    await user.click(closeBtn)
    expect(screen.queryByText('Title')).not.toBeInTheDocument()
  })
})
