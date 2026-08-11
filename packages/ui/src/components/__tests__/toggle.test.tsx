import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Toggle } from '../toggle'

describe('Toggle Component', () => {
  it('toggles selection state and handles click callback', () => {
    const handlePressedChange = vi.fn()
    render(
      <Toggle onPressedChange={handlePressedChange} aria-label="Toggle Bold">
        Bold
      </Toggle>,
    )

    const toggle = screen.getByRole('button', { name: /toggle bold/i })
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(toggle)
    expect(handlePressedChange).toHaveBeenCalledWith(true)
  })
})
