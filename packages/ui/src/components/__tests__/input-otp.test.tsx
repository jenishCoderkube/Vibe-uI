import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { InputOTP } from '../input-otp'

describe('InputOTP Component', () => {
  it('renders correct number of slots', () => {
    render(<InputOTP length={4} />)
    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(4)
  })

  it('calls onChange when typing in slots', () => {
    const handleChange = vi.fn()
    render(<InputOTP length={3} value="" onChange={handleChange} />)
    const inputs = screen.getAllByRole('textbox')

    inputs[0].focus()
    fireEvent.change(inputs[0], { target: { value: '1' } })

    expect(handleChange).toHaveBeenCalledWith('1')
  })

  it('handles backspace correctly when input has value', () => {
    const handleChange = vi.fn()
    render(<InputOTP length={3} value="12" onChange={handleChange} />)
    const inputs = screen.getAllByRole('textbox')

    inputs[1].focus()
    fireEvent.keyDown(inputs[1], { key: 'Backspace' })

    expect(handleChange).toHaveBeenCalledWith('1')
  })

  it('handles arrow keys navigation', () => {
    render(<InputOTP length={3} />)
    const inputs = screen.getAllByRole('textbox')

    inputs[1].focus()
    expect(document.activeElement).toBe(inputs[1])

    fireEvent.keyDown(inputs[1], { key: 'ArrowLeft' })
    expect(document.activeElement).toBe(inputs[0])

    fireEvent.keyDown(inputs[0], { key: 'ArrowRight' })
    expect(document.activeElement).toBe(inputs[1])
  })

  it('handles paste events correctly', () => {
    const handleChange = vi.fn()
    render(<InputOTP length={4} onChange={handleChange} />)
    const inputs = screen.getAllByRole('textbox')

    const pasteData = {
      getData: () => '9876',
    }

    fireEvent.paste(inputs[0], {
      clipboardData: pasteData,
    })
    expect(handleChange).toHaveBeenCalledWith('9876')
  })

  it('cleans formatted and non-alphanumeric characters on paste', () => {
    const handleChange = vi.fn()
    render(<InputOTP length={6} onChange={handleChange} />)
    const inputs = screen.getAllByRole('textbox')

    const pasteData = {
      getData: () => '12-34 56',
    }

    fireEvent.paste(inputs[0], {
      clipboardData: pasteData,
    })
    expect(handleChange).toHaveBeenCalledWith('123456')
  })

  it('supports disabled state', () => {
    render(<InputOTP length={3} disabled />)
    const inputs = screen.getAllByRole('textbox')
    inputs.forEach((input) => {
      expect(input).toBeDisabled()
    })
  })
})
