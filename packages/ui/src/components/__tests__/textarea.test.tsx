import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Textarea } from '../textarea'

describe('Textarea Component', () => {
  it('renders textarea with correct placeholder', () => {
    render(<Textarea placeholder="Write comments" />)
    expect(screen.getByPlaceholderText('Write comments')).toBeInTheDocument()
  })

  it('handles value changes', () => {
    const handleChange = vi.fn()
    render(<Textarea placeholder="Write" onChange={handleChange} />)
    const area = screen.getByPlaceholderText('Write')

    fireEvent.change(area, { target: { value: 'A quick brown fox' } })
    expect(handleChange).toHaveBeenCalled()
  })
})
