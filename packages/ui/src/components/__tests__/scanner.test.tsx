import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Scanner } from '../scanner'

describe('Scanner Component', () => {
  it('renders container element and handles unmount cleanly', () => {
    const { container, unmount } = render(
      <Scanner className="custom-scanner-class" speed={1.0} />,
    )
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('custom-scanner-class')
    expect(() => unmount()).not.toThrow()
  })

  it('renders with custom line color and scan width props', () => {
    const { container } = render(
      <Scanner
        lineColor="#a855f7"
        scanWidth={0.5}
        gridDensity={1.2}
        glowIntensity={1.5}
      />,
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})
