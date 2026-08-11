import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MessageScroller } from '../message-scroller'

describe('MessageScroller Component', () => {
  it('renders scroller wrapper and child elements correctly', () => {
    render(
      <MessageScroller>
        <div>Message text</div>
      </MessageScroller>,
    )

    expect(screen.getByText('Message text')).toBeInTheDocument()
  })
})
