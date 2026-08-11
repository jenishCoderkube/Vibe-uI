import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Slider } from '../slider'

describe('Slider Component', () => {
  it('renders slider and thumbs correctly', () => {
    render(<Slider defaultValue={[50]} min={0} max={100} />)
    const slider = screen.getByRole('slider')
    expect(slider).toBeInTheDocument()
    expect(slider).toHaveAttribute('aria-valuenow', '50')
  })

  it('handles multiple thumbs for range selection', () => {
    render(<Slider defaultValue={[20, 80]} min={0} max={100} />)
    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(2)
    expect(sliders[0]).toHaveAttribute('aria-valuenow', '20')
    expect(sliders[1]).toHaveAttribute('aria-valuenow', '80')
  })

  it('calls onValueChange callback when value changes', () => {
    const handleValueChange = vi.fn()
    render(<Slider defaultValue={[40]} onValueChange={handleValueChange} />)

    const slider = screen.getByRole('slider')
    fireEvent.keyDown(slider, { key: 'ArrowRight' })

    expect(handleValueChange).toHaveBeenCalled()
  })
})
