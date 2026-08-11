import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Separator } from '../separator'

describe('Separator Component', () => {
  it('renders correctly with separator role', () => {
    render(<Separator />)
    const separator = screen.getByRole('separator')
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveAttribute('aria-orientation', 'horizontal')
  })
})
