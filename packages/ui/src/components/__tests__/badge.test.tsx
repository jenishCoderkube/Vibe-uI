import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from '../badge'

describe('Badge Component', () => {
  it('renders children correctly', () => {
    render(<Badge>New Item</Badge>)
    const badge = screen.getByText('New Item')
    expect(badge).toBeInTheDocument()
    expect(badge.tagName).toBe('SPAN')
  })

  it('applies variant data attributes', () => {
    render(<Badge variant="retro">Retro Badge</Badge>)
    const badge = screen.getByText('Retro Badge')
    expect(badge).toHaveAttribute('data-variant', 'retro')
  })

  it('renders as custom element slot when asChild is true', () => {
    render(
      <Badge asChild>
        <a href="/link">Link Badge</a>
      </Badge>,
    )
    const badgeLink = screen.getByRole('link', { name: /link badge/i })
    expect(badgeLink).toBeInTheDocument()
    expect(badgeLink).toHaveAttribute('data-slot', 'badge')
  })
})
