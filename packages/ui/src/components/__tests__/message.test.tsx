import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Message, MessageGroup, MessageContent } from '../message'

describe('Message Component', () => {
  it('renders message bubble content under group context', () => {
    render(
      <MessageGroup>
        <Message align="start">
          <MessageContent>Hello, welcome!</MessageContent>
        </Message>
      </MessageGroup>,
    )

    expect(screen.getByText('Hello, welcome!')).toBeInTheDocument()
  })
})
