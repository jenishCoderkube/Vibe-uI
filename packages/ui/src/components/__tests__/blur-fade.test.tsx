import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlurFade } from '../blur-fade'

describe('BlurFade Component', () => {
  it('renders children content correctly', () => {
    render(<BlurFade>Fading Panel Content</BlurFade>)
    expect(screen.getByText('Fading Panel Content')).toBeInTheDocument()
  })
})
