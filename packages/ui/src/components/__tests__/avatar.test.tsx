import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar, AvatarFallback } from '../avatar'

describe('Avatar Component', () => {
  it('renders fallback content correctly', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    )

    expect(screen.getByText('JD')).toBeInTheDocument()
  })
})
