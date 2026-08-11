import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  ToastProvider,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastAction,
  ToastClose,
} from '../toast'

describe('Toast Component', () => {
  it('renders title, description and handles action click correctly', async () => {
    const user = userEvent.setup()
    const handleActionClick = vi.fn()

    render(
      <ToastProvider>
        <Toast open>
          <ToastTitle>Notification</ToastTitle>
          <ToastDescription>Updates loaded</ToastDescription>
          <ToastAction altText="Try again" onClick={handleActionClick}>
            Action Button
          </ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>,
    )

    expect(screen.getByText('Notification')).toBeInTheDocument()
    expect(screen.getByText('Updates loaded')).toBeInTheDocument()

    const actionBtn = screen.getByRole('button', { name: /action button/i })
    expect(actionBtn).toBeInTheDocument()

    await user.click(actionBtn)
    expect(handleActionClick).toHaveBeenCalledTimes(1)
  })

  it('triggers dismiss and close callback when clicking close button', async () => {
    const user = userEvent.setup()
    const handleOpenChange = vi.fn()

    render(
      <ToastProvider>
        <Toast open onOpenChange={handleOpenChange}>
          <ToastTitle>Closing Toast</ToastTitle>
          <ToastClose data-testid="toast-close" />
        </Toast>
        <ToastViewport />
      </ToastProvider>,
    )

    const closeBtn = screen.getByTestId('toast-close')
    await user.click(closeBtn)

    expect(handleOpenChange).toHaveBeenCalledWith(false)
  })

  it('renders with correct position and design variants classes', () => {
    const { container } = render(
      <ToastProvider>
        <Toast open variant="retro" position="top-left">
          <ToastTitle>Retro Top Left</ToastTitle>
        </Toast>
        <ToastViewport position="top-left" data-testid="viewport" />
      </ToastProvider>,
    )

    const viewport = screen.getByTestId('viewport')
    expect(viewport).toHaveClass('top-14')
    expect(viewport).toHaveClass('left-0')

    const toast = screen
      .getByText('Retro Top Left')
      .closest('[data-slot="toast"]')
    expect(toast).toHaveClass('border-2')
    expect(toast).toHaveClass('border-foreground')
    expect(toast).toHaveClass('rounded-none')
  })
})
