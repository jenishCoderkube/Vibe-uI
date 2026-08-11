import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from '../drawer'

describe('Drawer Component', () => {
  it('renders trigger button and overlay drawer content on click', () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>Info Drawer</DrawerTitle>
          <div>Drawer Content Body</div>
        </DrawerContent>
      </Drawer>,
    )

    const trigger = screen.getByRole('button', { name: /open drawer/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Drawer Content Body')).not.toBeInTheDocument()

    // Trigger click
    fireEvent.click(trigger)
    expect(screen.getByText('Drawer Content Body')).toBeInTheDocument()
  })
})
