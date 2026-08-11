import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HyperText } from '../hyper-text'

describe('HyperText Component', () => {
  it('renders hyper animation letters correctly', () => {
    render(<HyperText>CODE</HyperText>)
    expect(screen.getByText('C')).toBeInTheDocument()
    expect(screen.getByText('O')).toBeInTheDocument()
    expect(screen.getByText('D')).toBeInTheDocument()
    expect(screen.getByText('E')).toBeInTheDocument()
  })
})
