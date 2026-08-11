import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { KineticText } from '../kinetic-text'

describe('KineticText Component', () => {
  it('renders kinetic animation letters correctly', () => {
    render(<KineticText text="ABC" />)
    expect(
      screen.getByText('ABC', { selector: '.sr-only' }),
    ).toBeInTheDocument()
  })
})
