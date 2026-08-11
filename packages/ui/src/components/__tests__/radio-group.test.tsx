import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { RadioGroup, RadioGroupItem } from '../radio-group'

describe('RadioGroup Component', () => {
  it('renders options correctly and handles checked changes', () => {
    const handleValueChange = vi.fn()
    render(
      <RadioGroup onValueChange={handleValueChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="r1" />
          <label htmlFor="r1">Option 1</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="r2" />
          <label htmlFor="r2">Option 2</label>
        </div>
      </RadioGroup>,
    )

    const radio1 = screen.getByLabelText('Option 1')
    expect(radio1).toBeInTheDocument()
    expect(radio1).not.toBeChecked()

    fireEvent.click(radio1)
    expect(handleValueChange).toHaveBeenCalledWith('option-1')
  })
})
