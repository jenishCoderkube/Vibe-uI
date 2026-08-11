import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AnimatedGradientText } from '../animated-gradient-text'

describe('AnimatedGradientText Component', () => {
  it('renders children styled with custom color properties', () => {
    render(
      <AnimatedGradientText colorFrom="#111" colorTo="#222">
        Gradient Label
      </AnimatedGradientText>,
    )

    const element = screen.getByText('Gradient Label')
    expect(element).toBeInTheDocument()
    expect(element).toHaveStyle({
      '--color-from': '#111',
      '--color-to': '#222',
    })
  })
})
