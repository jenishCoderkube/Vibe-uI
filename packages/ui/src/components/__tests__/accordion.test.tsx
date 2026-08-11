import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../accordion'

describe('Accordion Component', () => {
  it('toggles collapsible content on trigger click', async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    )

    // Trigger is visible
    const trigger = screen.getByRole('button', { name: /is it accessible/i })
    expect(trigger).toBeInTheDocument()

    // Click to open
    fireEvent.click(trigger)

    // The text in AccordionContent should be visible/present
    const content = screen.getByText(/yes. it adheres to the/i)
    expect(content).toBeInTheDocument()
  })
})
