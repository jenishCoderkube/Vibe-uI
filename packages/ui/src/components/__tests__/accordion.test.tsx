import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../accordion'

describe('Accordion Component', () => {
  it('renders triggers and toggles content on click', async () => {
    const user = userEvent.setup()
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

    // Initially the content is collapsed (hidden/not visible by WAI-ARIA design)
    expect(screen.queryByText(/yes. it adheres to/i)).not.toBeInTheDocument()

    // Click to open
    await user.click(trigger)
    expect(screen.getByText(/yes. it adheres to/i)).toBeVisible()

    // Click again to close
    await user.click(trigger)
    expect(screen.queryByText(/yes. it adheres to/i)).not.toBeInTheDocument()
  })

  it('supports multiple mode and parses comma-separated string default values', () => {
    render(
      <Accordion type="multiple" defaultValue="item-1, item-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Trigger 3</AccordionTrigger>
          <AccordionContent>Content 3</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )

    // Both item-1 and item-2 content should be visible initially due to comma parsing
    expect(screen.getByText('Content 1')).toBeVisible()
    expect(screen.getByText('Content 2')).toBeVisible()
    expect(screen.queryByText('Content 3')).not.toBeInTheDocument()
  })

  it('parses bracket-enclosed string array default values', () => {
    render(
      <Accordion type="multiple" defaultValue="['item-1', 'item-3']">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Trigger 3</AccordionTrigger>
          <AccordionContent>Content 3</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )

    expect(screen.getByText('Content 1')).toBeVisible()
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument()
    expect(screen.getByText('Content 3')).toBeVisible()
  })

  it('supports styling variants correctly', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" variant="retro" data-testid="item-retro">
          <AccordionTrigger>Trigger Retro</AccordionTrigger>
          <AccordionContent>Content Retro</AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          variant="cyberpunk"
          data-testid="item-cyber"
        >
          <AccordionTrigger>Trigger Cyber</AccordionTrigger>
          <AccordionContent>Content Cyber</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )

    const retroItem = screen.getByTestId('item-retro')
    const cyberItem = screen.getByTestId('item-cyber')

    // Verify correct variant classes are parsed from tailwind variants config
    expect(retroItem).toHaveClass('border-2')
    expect(retroItem).toHaveClass('border-foreground')
    expect(cyberItem).toHaveClass('font-mono')
  })

  it('handles keyboard interaction accessibility', async () => {
    const user = userEvent.setup()
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Keyboard Trigger</AccordionTrigger>
          <AccordionContent>Accessible content here</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )

    const trigger = screen.getByRole('button', { name: /keyboard trigger/i })

    // Focus the trigger
    trigger.focus()
    expect(trigger).toHaveFocus()

    // Press Space key to open
    await user.keyboard(' ')
    expect(screen.getByText('Accessible content here')).toBeVisible()

    // Press Enter key to close
    await user.keyboard('{Enter}')
    expect(
      screen.queryByText('Accessible content here'),
    ).not.toBeInTheDocument()
  })
})
