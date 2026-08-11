import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AuroraText } from '../aurora-text'

describe('AuroraText Component', () => {
  it('renders text with custom gradient colors style properties', () => {
    render(<AuroraText colors={['#fff', '#000']}>Aurora Label</AuroraText>)
    expect(
      screen.getByText('Aurora Label', { selector: '.sr-only' }),
    ).toBeInTheDocument()
  })
})
