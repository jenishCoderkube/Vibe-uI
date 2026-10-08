import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  BentoGrid,
  BentoCard,
  BentoCardHeader,
  BentoCardTitle,
  BentoCardDescription,
  BentoCardContent,
} from '../bento-grid'

describe('BentoGrid Component', () => {
  it('renders grid container and bento cards with props', () => {
    render(
      <BentoGrid>
        <BentoCard
          name="Real-time Analytics"
          description="Instant live telemetry streams"
          colSpan={2}
          cta="Explore telemetry"
        />
        <BentoCard
          name="Cloud Sync"
          description="Instant multi-cloud failover"
          colSpan={1}
        />
      </BentoGrid>,
    )

    expect(screen.getByText('Real-time Analytics')).toBeInTheDocument()
    expect(screen.getByText('Instant live telemetry streams')).toBeInTheDocument()
    expect(screen.getByText('Explore telemetry')).toBeInTheDocument()
    expect(screen.getByText('Cloud Sync')).toBeInTheDocument()
  })

  it('renders custom children and compound subcomponents correctly', () => {
    render(
      <BentoGrid>
        <BentoCard>
          <BentoCardHeader>
            <span>Header Badge</span>
          </BentoCardHeader>
          <BentoCardContent>
            <BentoCardTitle>Custom Bento Title</BentoCardTitle>
            <BentoCardDescription>Custom Bento Description</BentoCardDescription>
          </BentoCardContent>
        </BentoCard>
      </BentoGrid>,
    )

    expect(screen.getByText('Header Badge')).toBeInTheDocument()
    expect(screen.getByText('Custom Bento Title')).toBeInTheDocument()
    expect(screen.getByText('Custom Bento Description')).toBeInTheDocument()
  })

  it('supports asChild slot on BentoGrid', () => {
    render(
      <BentoGrid asChild>
        <main data-testid="bento-main">
          <div>Item 1</div>
        </main>
      </BentoGrid>,
    )

    const main = screen.getByTestId('bento-main')
    expect(main).toBeInTheDocument()
    expect(main).toHaveAttribute('data-slot', 'bento-grid')
  })
})
