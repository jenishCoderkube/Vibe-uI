import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TextReveal } from '../text-reveal'

describe('TextReveal Component', () => {
  it('renders words in a reveal container layout correctly', () => {
    render(<TextReveal>Reveal test</TextReveal>)
    expect(screen.getAllByText('Reveal').length).toBeGreaterThan(0)
  })
})
