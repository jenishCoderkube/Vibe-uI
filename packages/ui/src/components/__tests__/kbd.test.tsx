import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Kbd } from '../kbd'

describe('Kbd Component', () => {
  it('renders keyboard shortcut key correctly', () => {
    render(<Kbd>Ctrl</Kbd>)
    expect(screen.getByText('Ctrl')).toBeInTheDocument()
  })
})
