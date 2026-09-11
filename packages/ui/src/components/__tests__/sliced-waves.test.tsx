import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { SlicedWaves } from '../sliced-waves'

describe('SlicedWaves Component', () => {
  it('renders container element and handles unmount cleanly', () => {
    const { container, unmount } = render(
      <SlicedWaves className="custom-waves-class" speed={1.0} />,
    )
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('custom-waves-class')
    expect(() => unmount()).not.toThrow()
  })

  it('renders with custom wave colors and slice count', () => {
    const { container } = render(
      <SlicedWaves
        waveColors={['#6366f1', '#ec4899']}
        sliceCount={12}
        amplitude={0.8}
      />,
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})
