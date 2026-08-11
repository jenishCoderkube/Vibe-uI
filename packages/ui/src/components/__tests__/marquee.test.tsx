import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Marquee } from '../marquee'

describe('Marquee Component', () => {
  it('renders marquee container and duplicates children for infinite loop rendering', () => {
    render(<Marquee repeat={3}>Marquee Content Item</Marquee>)

    // Checks that duplicates exist in document
    const items = screen.getAllByText('Marquee Content Item')
    expect(items.length).toBe(3)
  })
})
