import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Empty, EmptyIcon, EmptyTitle, EmptyDescription } from '../empty'

describe('Empty Component', () => {
  it('renders title, description, and icon details correctly', () => {
    render(
      <Empty>
        <EmptyIcon data-testid="empty-icon-node">Icon</EmptyIcon>
        <EmptyTitle>No items yet</EmptyTitle>
        <EmptyDescription>Add your first item</EmptyDescription>
      </Empty>,
    )

    expect(screen.getByTestId('empty-icon-node')).toBeInTheDocument()
    expect(screen.getByText('No items yet')).toBeInTheDocument()
    expect(screen.getByText('Add your first item')).toBeInTheDocument()
  })
})
