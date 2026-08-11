import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tooltip } from '../tooltip'

describe('Tooltip Component', () => {
  it('renders trigger element correctly', () => {
    render(
      <Tooltip content="Tooltip details" delay={0}>
        <button>Hover me</button>
      </Tooltip>,
    )

    const trigger = screen.getByRole('button', { name: /hover me/i })
    expect(trigger).toBeInTheDocument()
  })
})
