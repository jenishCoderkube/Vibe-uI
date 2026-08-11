import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Combobox } from '../combobox'

describe('Combobox Component', () => {
  const options = [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
  ]

  it('renders combobox trigger with placeholder', () => {
    render(<Combobox options={options} placeholder="Choose options" />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Choose options')).toBeInTheDocument()
  })

  it('opens options overlay when clicked', () => {
    render(<Combobox options={options} placeholder="Choose options" />)
    const trigger = screen.getByRole('combobox')

    fireEvent.click(trigger)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
