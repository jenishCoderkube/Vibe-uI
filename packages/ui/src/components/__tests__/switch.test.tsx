import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Switch } from '../switch'

describe('Switch Component', () => {
  it('renders correctly and toggles check state when clicked', () => {
    const handleCheckedChange = vi.fn()
    render(<Switch onCheckedChange={handleCheckedChange} />)

    const toggle = screen.getByRole('switch')
    expect(toggle).toBeInTheDocument()
    expect(toggle).not.toBeChecked()

    fireEvent.click(toggle)
    expect(handleCheckedChange).toHaveBeenCalledWith(true)
  })

  it('handles defaultChecked prop', () => {
    render(<Switch defaultChecked />)
    const toggle = screen.getByRole('switch')
    expect(toggle).toBeChecked()
  })

  it('supports disabled state', () => {
    render(<Switch disabled />)
    const toggle = screen.getByRole('switch')
    expect(toggle).toBeDisabled()
  })
})
