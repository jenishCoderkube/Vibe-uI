import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../collapsible'

describe('Collapsible Component', () => {
  it('renders collapsible and toggles content state on trigger click', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle Panel</CollapsibleTrigger>
        <CollapsibleContent>Secret info here</CollapsibleContent>
      </Collapsible>,
    )

    const trigger = screen.getByRole('button', { name: /toggle panel/i })
    expect(trigger).toBeInTheDocument()
    expect(screen.queryByText('Secret info here')).not.toBeInTheDocument()

    // Toggle open
    fireEvent.click(trigger)
    expect(screen.getByText('Secret info here')).toBeInTheDocument()
  })
})
