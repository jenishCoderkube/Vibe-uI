import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
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

  it('applies glow variant styling with purple border', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open Glow</DialogTrigger>
        <DialogContent variant="glow">
          <div>Glow Content</div>
        </DialogContent>
      </Dialog>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Glow' }))
    const content = screen
      .getByText('Glow Content')
      .closest('[data-slot="dialog-content"]')
    expect(content).toHaveClass('border-purple-500/30')
  })

  it('renders DialogHeader, DialogFooter, and DialogClose', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger>Open Header Footer</DialogTrigger>
        <DialogContent>
          <DialogHeader data-testid="dlg-header">
            <DialogTitle>Header Title</DialogTitle>
            <DialogDescription>Header Description</DialogDescription>
          </DialogHeader>
          <div>Body Area</div>
          <DialogFooter data-testid="dlg-footer">
            <DialogClose data-testid="custom-close">Dismiss</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    )

    await user.click(screen.getByRole('button', { name: 'Open Header Footer' }))
    expect(screen.getByTestId('dlg-header')).toBeInTheDocument()
    expect(screen.getByTestId('dlg-footer')).toBeInTheDocument()
    expect(screen.getByText('Header Title')).toBeInTheDocument()
    expect(screen.getByText('Header Description')).toBeInTheDocument()

    const dismissBtn = screen.getByTestId('custom-close')
    await user.click(dismissBtn)
    expect(screen.queryByText('Body Area')).not.toBeInTheDocument()
  })

  it('supports controlled open state', () => {
    const { rerender } = render(
      <Dialog open={true}>
        <DialogContent>
          <div>Controlled Active</div>
        </DialogContent>
      </Dialog>,
    )
    expect(screen.getByText('Controlled Active')).toBeInTheDocument()

    rerender(
      <Dialog open={false}>
        <DialogContent>
          <div>Controlled Active</div>
        </DialogContent>
      </Dialog>,
    )
    expect(screen.queryByText('Controlled Active')).not.toBeInTheDocument()
  })

  it('handles a real-life destructive project deletion confirmation modal', async () => {
    const user = userEvent.setup()
    const handleDeleteProject = vi.fn()
    const handleOpenChange = vi.fn()

    render(
      <Dialog onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <button className="bg-red-500 text-white">Delete Project</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Project</DialogTitle>
            <DialogDescription>
              Are you sure? This action cannot be undone and will permanently
              erase all data.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-2">
            <DialogClose asChild>
              <button data-testid="cancel-btn">Cancel</button>
            </DialogClose>
            <DialogClose asChild>
              <button
                data-testid="confirm-delete-btn"
                onClick={handleDeleteProject}
                className="bg-destructive text-destructive-foreground"
              >
                Permanently Delete
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    )

    // Open dialog
    await user.click(screen.getByRole('button', { name: 'Delete Project' }))
    expect(
      screen.getByRole('heading', { name: 'Delete Project' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/are you sure\? this action cannot be undone/i),
    ).toBeInTheDocument()

    // Confirm deletion
    await user.click(screen.getByTestId('confirm-delete-btn'))
    expect(handleDeleteProject).toHaveBeenCalledTimes(1)
    expect(handleOpenChange).toHaveBeenLastCalledWith(false)
  })
})
