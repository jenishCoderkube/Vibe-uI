import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Marker, MarkerContent } from '../marker'

describe('Marker Component', () => {
  it('renders custom marker annotation children correctly', () => {
    render(
      <Marker>
        <MarkerContent>Important note</MarkerContent>
      </Marker>,
    )

    expect(screen.getByText('Important note')).toBeInTheDocument()
  })
})
