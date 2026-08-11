import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Progress, CircularProgress } from '../progress'

describe('Progress Components', () => {
  it('renders progress bar with correct valuenow attribute', () => {
    render(<Progress value={45} />)
    const progress = screen.getByRole('progressbar')
    expect(progress).toBeInTheDocument()
    expect(progress).toHaveAttribute('aria-valuenow', '45')
  })

  it('renders circular progress bar with percentage text', () => {
    render(<CircularProgress value={70} max={100} showValue />)
    expect(screen.getByText('70%')).toBeInTheDocument()
  })
})
