import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SpinningText } from '../spinning-text'

describe('SpinningText Component', () => {
  it('renders characters split in container correctly', () => {
    render(<SpinningText radius={4}>Spins</SpinningText>)
    expect(screen.getByText('S')).toBeInTheDocument()
  })
})
