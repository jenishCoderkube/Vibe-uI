import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AnimatedShinyText } from '../animated-shiny-text'

describe('AnimatedShinyText Component', () => {
  it('renders children with shiny width properties', () => {
    render(
      <AnimatedShinyText shimmerWidth={150}>Shiny Label</AnimatedShinyText>,
    )
    const element = screen.getByText('Shiny Label')
    expect(element).toBeInTheDocument()
    expect(element).toHaveStyle({
      '--shiny-width': '150px',
    })
  })
})
