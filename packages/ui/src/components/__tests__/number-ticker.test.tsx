import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NumberTicker } from '../number-ticker'

describe('NumberTicker Component', () => {
  it('renders start value correctly', () => {
    render(<NumberTicker value={100} startValue={10} />)
    expect(screen.getByText('10')).toBeInTheDocument()
  })
})
