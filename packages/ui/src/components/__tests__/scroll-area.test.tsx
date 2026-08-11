import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ScrollArea } from '../scroll-area'

describe('ScrollArea Component', () => {
  it('renders children correctly', () => {
    render(<ScrollArea>Scroll content here</ScrollArea>)
    expect(screen.getByText('Scroll content here')).toBeInTheDocument()
  })
})
