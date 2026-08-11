import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from '../avatar'

describe('Avatar Component', () => {
  it('renders fallback content correctly', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    )

    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('supports size variants', () => {
    const { container: containerSm } = render(
      <Avatar size="sm">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    )
    expect(containerSm.firstChild).toHaveClass('h-8')
    expect(containerSm.firstChild).toHaveClass('w-8')

    const { container: containerLg } = render(
      <Avatar size="lg">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    )
    expect(containerLg.firstChild).toHaveClass('h-12')
    expect(containerLg.firstChild).toHaveClass('w-12')
  })

  it('renders AvatarBadge correctly', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
        <AvatarBadge data-testid="badge" />
      </Avatar>,
    )
    expect(screen.getByTestId('badge')).toBeInTheDocument()
  })

  it('renders AvatarGroup and AvatarGroupCount correctly', () => {
    render(
      <AvatarGroup data-testid="group">
        <Avatar>
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>U2</AvatarFallback>
        </Avatar>
        <AvatarGroupCount data-testid="count">+2</AvatarGroupCount>
      </AvatarGroup>,
    )
    expect(screen.getByTestId('group')).toBeInTheDocument()
    expect(screen.getByTestId('count')).toHaveTextContent('+2')
  })
})
