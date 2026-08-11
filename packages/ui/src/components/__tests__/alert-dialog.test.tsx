import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../alert-dialog'

describe('AlertDialog Component', () => {
  it('renders trigger button and shows overlay content on click', async () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Confirmation</AlertDialogTitle>
          <AlertDialogDescription>Are you sure?</AlertDialogDescription>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>,
    )

    const trigger = screen.getByRole('button', { name: /open dialog/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Confirmation')).not.toBeInTheDocument()

    // Trigger click
    fireEvent.click(trigger)
    expect(await screen.findByText('Confirmation')).toBeInTheDocument()
  })
})
