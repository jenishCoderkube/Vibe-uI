import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { WebThreads } from '../web-threads'

describe('WebThreads Component', () => {
  it('renders container element and handles unmount cleanly', () => {
    const { container, unmount } = render(
      <WebThreads className="custom-threads-class" speed={1.0} />,
    )
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('custom-threads-class')
    expect(() => unmount()).not.toThrow()
  })

  it('renders with custom thread colors and count', () => {
    const { container } = render(
      <WebThreads
        color="#3b82f6"
        threadCount={30}
        thickness={1.5}
        curl={0.7}
      />,
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})
