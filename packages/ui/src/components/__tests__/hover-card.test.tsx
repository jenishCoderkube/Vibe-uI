import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../hover-card'

describe('HoverCard Component', () => {
  it('renders trigger element correctly', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover Trigger</HoverCardTrigger>
        <HoverCardContent>Card contents</HoverCardContent>
      </HoverCard>,
    )

    expect(screen.getByText('Hover Trigger')).toBeInTheDocument()
  })
})
