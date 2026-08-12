import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '../drawer'

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

  it('supports custom side positioning (left, bottom, top)', () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Left Drawer</DrawerTrigger>
        <DrawerContent side="left">
          <DrawerTitle>Left Drawer</DrawerTitle>
          <div>Left Content</div>
        </DrawerContent>
      </Drawer>,
    )

    fireEvent.click(screen.getByRole('button', { name: /open left drawer/i }))
    const content = screen
      .getByText('Left Content')
      .closest('[data-slot="drawer-content"]')
    expect(content).toHaveClass('inset-y-0')
    expect(content).toHaveClass('left-0')
  })

  it('supports multi-aesthetic variants (retro, glow, glass)', () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Retro Drawer</DrawerTrigger>
        <DrawerContent variant="retro">
          <DrawerTitle>Retro Drawer</DrawerTitle>
          <div>Retro Body</div>
        </DrawerContent>
      </Drawer>,
    )

    fireEvent.click(screen.getByRole('button', { name: /open retro drawer/i }))
    const content = screen
      .getByText('Retro Body')
      .closest('[data-slot="drawer-content"]')
    expect(content).toHaveClass('border-2')
    expect(content).toHaveClass('border-foreground')
    expect(content).toHaveClass('rounded-none')
  })

  it('renders DrawerHeader, DrawerFooter, and DrawerDescription', () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Composed Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader data-testid="drawer-header">
            <DrawerTitle>Composed Title</DrawerTitle>
            <DrawerDescription>Composed Description</DrawerDescription>
          </DrawerHeader>
          <div>Inner Drawer Body</div>
          <DrawerFooter data-testid="drawer-footer">
            <DrawerClose data-testid="drawer-close">Close Drawer</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>,
    )

    fireEvent.click(
      screen.getByRole('button', { name: /open composed drawer/i }),
    )
    expect(screen.getByTestId('drawer-header')).toBeInTheDocument()
    expect(screen.getByTestId('drawer-footer')).toBeInTheDocument()
    expect(screen.getByText('Composed Title')).toBeInTheDocument()
    expect(screen.getByText('Composed Description')).toBeInTheDocument()
    expect(screen.getByTestId('drawer-close')).toBeInTheDocument()
  })

  it('renders a real-life e-commerce slide-over shopping cart drawer', () => {
    const handleCheckout = vi.fn()

    render(
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <button data-testid="cart-trigger">Cart (2 items)</button>
        </DrawerTrigger>
        <DrawerContent side="right" className="sm:max-w-md">
          <DrawerHeader>
            <DrawerTitle>Your Shopping Cart</DrawerTitle>
            <DrawerDescription>
              Review selected items before checkout.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span>Mechanical Keyboard</span>
              <span className="font-semibold">$129.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Desk Mat (Dark)</span>
              <span className="font-semibold">$29.00</span>
            </div>
          </div>
          <DrawerFooter>
            <button
              onClick={handleCheckout}
              className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium"
            >
              Checkout ($158.00)
            </button>
            <DrawerClose asChild>
              <button className="w-full text-sm text-muted-foreground">
                Continue Shopping
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>,
    )

    // Open shopping cart drawer
    fireEvent.click(screen.getByTestId('cart-trigger'))
    expect(screen.getByText('Your Shopping Cart')).toBeInTheDocument()
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument()
    expect(screen.getByText('Desk Mat (Dark)')).toBeInTheDocument()

    // Trigger checkout
    fireEvent.click(
      screen.getByRole('button', { name: /checkout \(\$158\.00\)/i }),
    )
    expect(handleCheckout).toHaveBeenCalled()
  })
})
