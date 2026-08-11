import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ButtonGroup, ButtonGroupItem } from '../button-group'

describe('ButtonGroup Component', () => {
  it('renders button group wrapper and button items', () => {
    render(
      <ButtonGroup defaultValue="opt-1">
        <ButtonGroupItem value="opt-1">Option 1</ButtonGroupItem>
        <ButtonGroupItem value="opt-2">Option 2</ButtonGroupItem>
      </ButtonGroup>,
    )

    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })
})
