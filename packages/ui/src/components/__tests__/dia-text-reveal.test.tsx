import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DiaTextReveal } from '../dia-text-reveal'

describe('DiaTextReveal Component', () => {
  it('renders reveal text content correctly', () => {
    render(<DiaTextReveal text="Reveal Text Content" />)
    expect(screen.getByText('Reveal Text Content')).toBeInTheDocument()
  })
})
