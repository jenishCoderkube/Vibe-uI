import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LineShadowText } from '../line-shadow-text'

describe('LineShadowText Component', () => {
  it('renders text with shadow styles correctly', () => {
    render(<LineShadowText shadowColor="#fff">Shadowed Title</LineShadowText>)
    const element = screen.getByText('Shadowed Title')
    expect(element).toBeInTheDocument()
    expect(element).toHaveStyle({ '--shadow-color': '#fff' })
  })
})
