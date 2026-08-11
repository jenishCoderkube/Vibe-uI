import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Slider } from '../slider'

describe('Slider Component', () => {
  it('renders slider and thumbs correctly with default attributes', () => {
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

  it('parses comma-separated range string values correctly', () => {
    render(<Slider defaultValue="30,70" min={0} max={100} />)
    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(2)
    expect(sliders[0]).toHaveAttribute('aria-valuenow', '30')
    expect(sliders[1]).toHaveAttribute('aria-valuenow', '70')
  })

  it('renders tooltips above thumbs and applies custom tooltipFormat', () => {
    render(
      <Slider
        defaultValue={[45]}
        showTooltip={true}
        tooltipFormat={(val) => `$${val}`}
      />,
    )

    // Tooltip should be visible inside thumb container
    const thumb = screen.getByRole('slider')
    expect(thumb).toHaveTextContent('$45')
  })

  it('renders custom marks ticks and label items below track', () => {
    const customMarks = [
      { value: 0, label: 'Min' },
      { value: 50, label: 'Mid' },
      { value: 100, label: 'Max' },
    ]

    render(<Slider defaultValue={[50]} min={0} max={100} marks={customMarks} />)

    // Verify mark labels render
    expect(screen.getByText('Min')).toBeInTheDocument()
    expect(screen.getByText('Mid')).toBeInTheDocument()
    expect(screen.getByText('Max')).toBeInTheDocument()
  })

  it('calls onValueChange callback when keyboard events change value', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()

    render(<Slider defaultValue={[40]} onValueChange={handleValueChange} />)

    const slider = screen.getByRole('slider')
    slider.focus()

    // Press right arrow to increment
    await user.keyboard('{ArrowRight}')

    expect(handleValueChange).toHaveBeenCalled()
  })
})
