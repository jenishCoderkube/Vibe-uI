import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TextAnimate } from '../text-animate'

describe('TextAnimate Component', () => {
  it('renders animated text wrapper correctly', () => {
    render(<TextAnimate animation="fadeIn">Animate Me</TextAnimate>)
    expect(screen.getByText('Animate Me')).toBeInTheDocument()
  })
})
