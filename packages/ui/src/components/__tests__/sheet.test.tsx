import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '../sheet'

describe('Sheet Component', () => {
  it('renders trigger button and overlay content on click', () => {
    render(
      <Sheet>
        <SheetTrigger>Open Drawer</SheetTrigger>
        <SheetContent>
          <SheetTitle>Drawer Title</SheetTitle>
          <div>Drawer Content</div>
        </SheetContent>
      </Sheet>,
    )

    const trigger = screen.getByRole('button', { name: /open drawer/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Drawer Content')).not.toBeInTheDocument()

    // Trigger click
    fireEvent.click(trigger)
    expect(screen.getByText('Drawer Content')).toBeInTheDocument()
  })
})
