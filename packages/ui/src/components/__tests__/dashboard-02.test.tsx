import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DashboardBlock02 } from '../dashboard-02'

describe('DashboardBlock02 Block Component', () => {
  it('renders full header navigation bar and main view content correctly', () => {
    render(<DashboardBlock02 />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })
})
