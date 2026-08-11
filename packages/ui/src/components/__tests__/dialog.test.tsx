import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '../dialog'

describe('Dialog Component', () => {
  it('renders triggers and shows content on click, and triggers callbacks', async () => {
    const user = userEvent.setup()
    const handleOpenChange = vi.fn()

    render(
      <Dialog onOpenChange={handleOpenChange}>
        <DialogTrigger>Open Modal</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog Description</DialogDescription>
          <div>Modal Content</div>
        </DialogContent>
      </Dialog>,
    )

    // Initially the content is not visible
    const trigger = screen.getByRole('button', { name: /open modal/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()

    // Click to open dialog
    await user.click(trigger)

    // Verify open change callback was invoked
    expect(handleOpenChange).toHaveBeenCalledWith(true)

    // Content is rendered
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
    expect(screen.getByText('Dialog Title')).toBeInTheDocument()

    // Click close button
    const closeBtn = screen.getByRole('button', { name: /close/i })
    await user.click(closeBtn)

    expect(handleOpenChange).toHaveBeenLastCalledWith(false)
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()
  })

  it('closes when the Escape key is pressed', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open Modal</DialogTrigger>
        <DialogContent>
          <div>Modal Content</div>
        </DialogContent>
      </Dialog>,
    )

    // Open dialog
    await user.click(screen.getByRole('button', { name: /open modal/i }))
    expect(screen.getByText('Modal Content')).toBeInTheDocument()

    // Press Escape key
    await user.keyboard('{Escape}')
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()
  })

  it('does not render close button when showCloseButton is false', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open Modal</DialogTrigger>
        <DialogContent showCloseButton={false}>
          <div>Modal Content</div>
        </DialogContent>
      </Dialog>,
    )

    await user.click(screen.getByRole('button', { name: /open modal/i }))
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /close/i }),
    ).not.toBeInTheDocument()
  })

  it('applies custom variant classes correctly', async () => {
    const user = userEvent.setup()

    const { rerender } = render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent variant="glass">
          <div>Glass Content</div>
        </DialogContent>
      </Dialog>,
    )

    await user.click(screen.getByRole('button', { name: 'Open' }))
    let content = screen
      .getByText('Glass Content')
      .closest('[data-slot="dialog-content"]')
    expect(content).toHaveClass('backdrop-blur-md')
    expect(content).toHaveClass('bg-background/80')

    // Close
    await user.keyboard('{Escape}')

    // Rerender with retro variant
    rerender(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent variant="retro">
          <div>Retro Content</div>
        </DialogContent>
      </Dialog>,
    )

    await user.click(screen.getByRole('button', { name: 'Open' }))
    content = screen
      .getByText('Retro Content')
      .closest('[data-slot="dialog-content"]')
    expect(content).toHaveClass('border-2')
    expect(content).toHaveClass('border-foreground')
    expect(content).toHaveClass('rounded-none')
  })
})
