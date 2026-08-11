import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from '../scroll-based-velocity'

describe('ScrollBasedVelocity Components', () => {
  it('renders scroll velocity container and rows correctly', () => {
    render(
      <ScrollVelocityContainer>
        <ScrollVelocityRow baseVelocity={5}>
          Marquee Text content
        </ScrollVelocityRow>
      </ScrollVelocityContainer>,
    )

    expect(screen.getByText('Marquee Text content')).toBeInTheDocument()
  })
})
