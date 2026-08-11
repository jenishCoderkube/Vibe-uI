import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SparklesText } from '../sparkles-text'

describe('SparklesText Component', () => {
  it('renders child element and sparkle texts correctly', () => {
    render(<SparklesText sparklesCount={5}>Sparkling text</SparklesText>)
    expect(screen.getByText('Sparkling text')).toBeInTheDocument()
  })
})
