import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfiniteScroll } from '../infinite-scroll'

describe('InfiniteScroll Component', () => {
  it('renders elements and triggers loadMore when observed', () => {
    const handleLoadMore = vi.fn()
    render(
      <InfiniteScroll hasMore isLoading={false} loadMore={handleLoadMore}>
        <div>Item 1</div>
        <div>Item 2</div>
      </InfiniteScroll>,
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('renders custom loading trigger when isLoading is true', () => {
    render(
      <InfiniteScroll
        hasMore
        isLoading
        loadMore={() => {}}
        loadingTrigger={<div>Loading more items...</div>}
      >
        <div>Item 1</div>
      </InfiniteScroll>,
    )

    expect(screen.getByText('Loading more items...')).toBeInTheDocument()
  })
})
