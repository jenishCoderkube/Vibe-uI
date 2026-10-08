import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  SpotlightCard,
  SpotlightCardHeader,
  SpotlightCardFooter,
  SpotlightCardTitle,
  SpotlightCardDescription,
  SpotlightCardContent,
} from '../spotlight-card'

describe('SpotlightCard Component', () => {
  it('renders structural elements and children correctly', () => {
    render(
      <SpotlightCard>
        <SpotlightCardHeader>
          <SpotlightCardTitle>Interactive Spotlight</SpotlightCardTitle>
          <SpotlightCardDescription>Mouse hover radial spotlight</SpotlightCardDescription>
        </SpotlightCardHeader>
        <SpotlightCardContent>Card body content</SpotlightCardContent>
        <SpotlightCardFooter>Footer info</SpotlightCardFooter>
      </SpotlightCard>,
    )

    expect(screen.getByText('Interactive Spotlight')).toBeInTheDocument()
    expect(screen.getByText('Mouse hover radial spotlight')).toBeInTheDocument()
    expect(screen.getByText('Card body content')).toBeInTheDocument()
    expect(screen.getByText('Footer info')).toBeInTheDocument()
  })

  it('updates CSS mouse coordinates on mouse move', () => {
    const { container } = render(
      <SpotlightCard variant="glow">
        <p>Interactive Card</p>
      </SpotlightCard>,
    )

    const card = container.querySelector('[data-slot="spotlight-card"]') as HTMLElement
    expect(card).toBeInTheDocument()

    card.getBoundingClientRect = () => ({
      width: 200,
      height: 200,
      top: 0,
      left: 0,
      right: 200,
      bottom: 200,
      x: 0,
      y: 0,
      toJSON: () => {},
    })

    fireEvent.mouseMove(card, { clientX: 50, clientY: 75 })
    expect(card.style.getPropertyValue('--mouse-x')).toBe('50px')
    expect(card.style.getPropertyValue('--mouse-y')).toBe('75px')
  })

  it('renders as child slot when asChild is true', () => {
    render(
      <SpotlightCard asChild>
        <section data-testid="as-child-section">
          <p>Section Content</p>
        </section>
      </SpotlightCard>,
    )

    const section = screen.getByTestId('as-child-section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('data-slot', 'spotlight-card')
    expect(screen.getByText('Section Content')).toBeInTheDocument()
  })
})
