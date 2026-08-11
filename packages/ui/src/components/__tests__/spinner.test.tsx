import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from '../spinner'

describe('Spinner Component', () => {
  it('renders SVG spinner loader element correctly', () => {
    render(<Spinner data-testid="loader" />)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })
})
