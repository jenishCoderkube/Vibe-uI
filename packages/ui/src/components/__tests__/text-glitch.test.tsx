import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TextGlitch } from '../text-glitch'

describe('TextGlitch Component', () => {
  it('renders glitch text correctly', () => {
    render(<TextGlitch text="GLITCH" speed="fast" />)
    expect(screen.getAllByText('GLITCH').length).toBeGreaterThan(0)
  })
})
