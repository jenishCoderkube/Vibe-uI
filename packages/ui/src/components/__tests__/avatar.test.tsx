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

  it('supports retro, glass, and glow aesthetic variants', () => {
    const { container: retroContainer } = render(
      <Avatar variant="retro">
        <AvatarFallback>RE</AvatarFallback>
      </Avatar>,
    )
    expect(retroContainer.firstChild).toHaveClass('border-2')
    expect(retroContainer.firstChild).toHaveClass('border-foreground')
    expect(retroContainer.firstChild).toHaveClass('rounded-none')

    const { container: glowContainer } = render(
      <Avatar variant="glow">
        <AvatarFallback>GL</AvatarFallback>
      </Avatar>,
    )
    expect(glowContainer.firstChild).toHaveClass('bg-muted')

    const { container: glassContainer } = render(
      <Avatar variant="glass">
        <AvatarFallback>GS</AvatarFallback>
      </Avatar>,
    )
    expect(glassContainer.firstChild).toHaveClass('border-white/20')
  })

  it('propagates size to AvatarBadge and AvatarFallback appropriately', () => {
    render(
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
        <AvatarBadge data-testid="badge-sm" />
      </Avatar>,
    )
    const fallbackSm = screen.getByText('SM')
    const badgeSm = screen.getByTestId('badge-sm')
    expect(fallbackSm).toHaveClass('text-xs')
    expect(badgeSm).toHaveClass('size-2')

    render(
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
        <AvatarBadge data-testid="badge-lg" />
      </Avatar>,
    )
    const fallbackLg = screen.getByText('LG')
    const badgeLg = screen.getByTestId('badge-lg')
    expect(fallbackLg).toHaveClass('text-base')
    expect(badgeLg).toHaveClass('size-3')
  })

  it('renders a real-life team contributor avatar stack with overflow counter', () => {
    const teamMembers = [
      { id: '1', name: 'Alex Johnson', initials: 'AJ', status: 'online' },
      { id: '2', name: 'Sarah Connor', initials: 'SC', status: 'away' },
      { id: '3', name: 'David Miller', initials: 'DM', status: 'offline' },
    ]

    render(
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">
          Active Collaborators:
        </span>
        <AvatarGroup data-testid="contributors-stack">
          {teamMembers.map((member) => (
            <Avatar
              key={member.id}
              size="sm"
              variant="default"
              title={member.name}
            >
              <AvatarImage
                src={`https://avatar.vercel.sh/${member.id}`}
                alt={member.name}
              />
              <AvatarFallback>{member.initials}</AvatarFallback>
              {member.status === 'online' && (
                <AvatarBadge
                  className="bg-emerald-500 ring-2 ring-background"
                  data-testid="status-online"
                />
              )}
            </Avatar>
          ))}
          <AvatarGroupCount data-testid="overflow-count">+4</AvatarGroupCount>
        </AvatarGroup>
      </div>,
    )

    expect(screen.getByTestId('contributors-stack')).toBeInTheDocument()
    expect(screen.getByText('AJ')).toBeInTheDocument()
    expect(screen.getByText('SC')).toBeInTheDocument()
    expect(screen.getByText('DM')).toBeInTheDocument()
    expect(screen.getByTestId('status-online')).toBeInTheDocument()
    expect(screen.getByTestId('overflow-count')).toHaveTextContent('+4')
  })
})
