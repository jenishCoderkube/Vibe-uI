import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Text3DFlip } from '../text-3d-flip'

describe('Text3DFlip Component', () => {
  it('renders flip character boxes correctly', () => {
    render(<Text3DFlip>FLIP</Text3DFlip>)
    expect(
      screen.getByText('FLIP', { selector: '.sr-only' }),
    ).toBeInTheDocument()
  })
})
