import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AspectRatio } from '../aspect-ratio'

describe('AspectRatio Component', () => {
  it('renders wrapper with correct ratio styling', () => {
    render(
      <AspectRatio ratio={16 / 9}>
        <div>Preview Panel</div>
      </AspectRatio>,
    )

    const ratioContainer = screen.getByText('Preview Panel').parentElement
    expect(ratioContainer).toHaveStyle({ aspectRatio: '1.7777777777777777' })
  })
})
