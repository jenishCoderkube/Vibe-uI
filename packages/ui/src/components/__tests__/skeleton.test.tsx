import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skeleton } from '../skeleton'

describe('Skeleton Component', () => {
  it('renders placeholder container with pulsing variants', () => {
    render(<Skeleton data-testid="skeleton-block" />)
    const block = screen.getByTestId('skeleton-block')
    expect(block).toBeInTheDocument()
  })
})
