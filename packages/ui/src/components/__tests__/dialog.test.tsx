import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '../dialog'

describe('Dialog Component', () => {
  it('renders triggers and shows content on click', () => {
    render(
      <Dialog>
        <DialogTrigger>Open Modal</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog Description</DialogDescription>
          <div>Modal Content</div>
        </DialogContent>
      </Dialog>,
    )

    // Initially the trigger is visible, but not the content
    const trigger = screen.getByRole('button', { name: /open modal/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()

    // Click to open dialog
    fireEvent.click(trigger)

    // The content is rendered in a Portal, which screen can see
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
    expect(screen.getByText('Dialog Title')).toBeInTheDocument()
  })

  it('closes when the close button is clicked', () => {
    render(
      <Dialog>
        <DialogTrigger>Open Modal</DialogTrigger>
        <DialogContent>
          <div>Modal Content</div>
        </DialogContent>
      </Dialog>,
    )

    // Open dialog
    fireEvent.click(screen.getByRole('button', { name: /open modal/i }))
    expect(screen.getByText('Modal Content')).toBeInTheDocument()

    // Click close button
    const closeBtn = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeBtn)

    // Assert content is gone
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument()
  })
})
