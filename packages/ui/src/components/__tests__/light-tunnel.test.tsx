import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { LightTunnel } from '../light-tunnel'

describe('LightTunnel Component', () => {
  it('renders container element and handles unmount cleanly', () => {
    const { container, unmount } = render(
      <LightTunnel className="custom-tunnel-class" speed={1.5} />,
    )
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('custom-tunnel-class')
    expect(() => unmount()).not.toThrow()
  })

  it('renders with custom props', () => {
    const { container } = render(
      <LightTunnel
        cableColor="#ff0000"
        pulseColor="#00ff00"
        tunnelColor="#0000ff"
        flowDirection="outward"
        thickness={2}
      />,
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})
