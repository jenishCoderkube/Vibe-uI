import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../alert-dialog'

describe('AlertDialog Component', () => {
  it('toggles open/closed states via triggers and triggers action callback', async () => {
    const user = userEvent.setup()
    const handleActionClick = vi.fn()

    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete account</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmation</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleActionClick}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    )

    const trigger = screen.getByRole('button', { name: /delete account/i })
    expect(trigger).toBeInTheDocument()

    // Dialog contents should not be visible initially
    expect(screen.queryByText('Confirmation')).not.toBeInTheDocument()

    // Click trigger to open
    await user.click(trigger)
    expect(screen.getByText('Confirmation')).toBeInTheDocument()
    expect(
      screen.getByText('This action cannot be undone.'),
    ).toBeInTheDocument()

    // Click Cancel to close
    const cancelBtn = screen.getByRole('button', { name: /cancel/i })
    await user.click(cancelBtn)
    expect(screen.queryByText('Confirmation')).not.toBeInTheDocument()

    // Open again to click confirm
    await user.click(trigger)
    const confirmBtn = screen.getByRole('button', { name: /confirm/i })
    await user.click(confirmBtn)

    expect(handleActionClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByText('Confirmation')).not.toBeInTheDocument()
  })

  it('renders correctly with various design variants', async () => {
    const user = userEvent.setup()

    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Glass Dialog</AlertDialogTrigger>
        <AlertDialogContent variant="glass">
          <AlertDialogTitle>Glass style</AlertDialogTitle>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>,
    )

    await user.click(screen.getByRole('button', { name: /open glass dialog/i }))

    // Content should have glassmorphism styling classes applied
    const content = screen
      .getByText('Glass style')
      .closest('[data-slot="alert-dialog-content"]')
    expect(content).toHaveClass('backdrop-blur-md')
    expect(content).toHaveClass('bg-popover/60')
  })

  it('renders retro variant correctly', async () => {
    const user = userEvent.setup()

    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Retro Dialog</AlertDialogTrigger>
        <AlertDialogContent variant="retro">
          <AlertDialogTitle>Retro style</AlertDialogTitle>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>,
    )

    await user.click(screen.getByRole('button', { name: /open retro dialog/i }))

    const content = screen
      .getByText('Retro style')
      .closest('[data-slot="alert-dialog-content"]')
    expect(content).toHaveClass('border-2')
    expect(content).toHaveClass('border-foreground')
    expect(content).toHaveClass('rounded-none')
  })
})
