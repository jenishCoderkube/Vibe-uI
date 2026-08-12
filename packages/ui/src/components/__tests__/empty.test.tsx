import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Empty,
  EmptyIcon,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyActions,
  EmptyHeader,
  EmptyContent,
} from '../empty'

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

  it('renders EmptyHeader, EmptyContent, and EmptyActions subcomponents', () => {
    render(
      <Empty>
        <EmptyHeader data-testid="empty-header">
          <EmptyTitle>Header Title</EmptyTitle>
          <EmptyDescription>Header Desc</EmptyDescription>
        </EmptyHeader>
        <EmptyContent data-testid="empty-content">
          <div>Content text</div>
        </EmptyContent>
        <EmptyActions data-testid="empty-actions">
          <button>Create New</button>
        </EmptyActions>
      </Empty>,
    )

    expect(screen.getByTestId('empty-header')).toBeInTheDocument()
    expect(screen.getByTestId('empty-content')).toBeInTheDocument()
    expect(screen.getByTestId('empty-actions')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Create New' }),
    ).toBeInTheDocument()
  })

  it('supports EmptyMedia as an alias for EmptyIcon', () => {
    render(
      <Empty>
        <EmptyMedia data-testid="empty-media">Media Node</EmptyMedia>
        <EmptyTitle>Title</EmptyTitle>
      </Empty>,
    )

    const mediaEl = screen.getByTestId('empty-media')
    expect(mediaEl).toBeInTheDocument()
    expect(mediaEl).toHaveAttribute('data-slot', 'empty-icon')
  })

  it('supports multi-aesthetic variants (retro, glow, glass)', () => {
    const { container: retroContainer } = render(
      <Empty variant="retro">
        <EmptyTitle>Retro Empty</EmptyTitle>
      </Empty>,
    )
    expect(retroContainer.firstChild).toHaveClass('border-2')
    expect(retroContainer.firstChild).toHaveClass('border-foreground')
    expect(retroContainer.firstChild).toHaveClass('rounded-none')

    const { container: glowContainer } = render(
      <Empty variant="glow">
        <EmptyTitle>Glow Empty</EmptyTitle>
      </Empty>,
    )
    expect(glowContainer.firstChild).toHaveClass('border-primary/30')
  })

  it('renders a real-life zero-state empty search & filter results card', () => {
    const handleResetFilters = vi.fn()

    render(
      <Empty className="max-w-md mx-auto py-12">
        <EmptyHeader>
          <EmptyMedia className="size-12 rounded-full bg-muted flex items-center justify-center mb-2">
            <svg
              data-testid="search-icon"
              className="size-6 text-muted-foreground"
            />
          </EmptyMedia>
          <EmptyTitle>No Transactions Found</EmptyTitle>
          <EmptyDescription>
            We couldn't find any transactions matching your active query and
            date range.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyActions className="mt-4">
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
          >
            Clear Filters
          </button>
        </EmptyActions>
      </Empty>,
    )

    expect(screen.getByTestId('search-icon')).toBeInTheDocument()
    expect(screen.getByText('No Transactions Found')).toBeInTheDocument()
    expect(
      screen.getByText(
        /we couldn't find any transactions matching your active query/i,
      ),
    ).toBeInTheDocument()

    const clearBtn = screen.getByRole('button', { name: 'Clear Filters' })
    expect(clearBtn).toBeInTheDocument()
    clearBtn.click()
    expect(handleResetFilters).toHaveBeenCalledTimes(1)
  })
})
