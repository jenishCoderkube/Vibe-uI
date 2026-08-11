import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TypingAnimation } from '../typing-animation'

describe('TypingAnimation Component', () => {
  it('renders cursor indicator styled character correctly', () => {
    render(<TypingAnimation cursorStyle="block">Typing text</TypingAnimation>)
    expect(screen.getByText('▌')).toBeInTheDocument()
  })
})
