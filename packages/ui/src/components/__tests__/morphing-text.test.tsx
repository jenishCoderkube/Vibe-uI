import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MorphingText } from '../morphing-text'

describe('MorphingText Component', () => {
  it('renders morph text spans correctly', () => {
    render(<MorphingText texts={['Hello', 'World']} />)
    const elements = screen.getAllByText('Hello')
    expect(elements.length).toBeGreaterThan(0)
  })
})
