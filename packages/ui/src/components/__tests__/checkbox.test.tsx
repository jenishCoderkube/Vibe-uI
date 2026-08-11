import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Checkbox } from '../checkbox'

describe('Checkbox Component', () => {
  it('renders correctly and toggles state when clicked', () => {
    const handleCheckedChange = vi.fn()
    render(<Checkbox onCheckedChange={handleCheckedChange} />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(handleCheckedChange).toHaveBeenCalledWith(true)
  })

  it('can be disabled', () => {
    render(<Checkbox disabled />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
  })
})
