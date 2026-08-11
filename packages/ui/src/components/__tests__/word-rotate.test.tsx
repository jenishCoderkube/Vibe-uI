import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WordRotate } from '../word-rotate'

describe('WordRotate Component', () => {
  it('renders initial index word correctly', () => {
    render(<WordRotate words={['Web', 'Mobile']} />)
    expect(screen.getByText('Web')).toBeInTheDocument()
  })
})
