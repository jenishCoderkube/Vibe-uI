import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input, FloatingInput } from '../input'

describe('Input Components', () => {
  it('renders text input correctly', () => {
    render(<Input placeholder="Enter username" />)
    const input = screen.getByPlaceholderText('Enter username')
    expect(input).toBeInTheDocument()
  })

  it('triggers onChange handlers', () => {
    const handleChange = vi.fn()
    render(<Input placeholder="Enter text" onChange={handleChange} />)
    const input = screen.getByPlaceholderText('Enter text')

    fireEvent.change(input, { target: { value: 'John' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('renders floating input label', () => {
    render(<FloatingInput label="Your Email" placeholder=" " />)
    expect(screen.getByText('Your Email')).toBeInTheDocument()
  })

  it('updates controlled value dynamically on prop changes', () => {
    const { rerender } = render(<Input value="initial" onChange={() => {}} />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('initial')

    rerender(<Input value="updated" onChange={() => {}} />)
    expect(input.value).toBe('updated')
  })

  it('applies border-destructive styles when error prop is active', () => {
    render(<Input placeholder="Error Input" error />)
    const input = screen.getByPlaceholderText('Error Input')
    expect(input).toHaveClass('border-destructive')
  })
})
