import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComicText } from '../comic-text'

describe('ComicText Component', () => {
  it('renders string child text correctly', () => {
    render(<ComicText fontSize={4}>Kaboom!</ComicText>)
    expect(screen.getByText('Kaboom!')).toBeInTheDocument()
  })
})
