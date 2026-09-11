import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Lightfall } from '../lightfall'

describe('Lightfall Component', () => {
  it('renders container element and handles unmount cleanly', () => {
    const { container, unmount } = render(
      <Lightfall className="custom-lightfall-class" speed={1.2} />,
    )
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('custom-lightfall-class')
    expect(() => unmount()).not.toThrow()
  })

  it('renders with custom color and density props', () => {
    const { container } = render(
      <Lightfall
        colors={['#ff00ff', '#00ffff']}
        density={0.8}
        glow={1.5}
        twinkle={0.5}
      />,
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})
