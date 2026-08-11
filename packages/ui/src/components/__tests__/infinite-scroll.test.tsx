import React from 'react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InfiniteScroll } from '../infinite-scroll'

describe('InfiniteScroll Component', () => {
  let observerCallback: any = null
  const originalIntersectionObserver = global.IntersectionObserver

  beforeEach(() => {
    // Mock global IntersectionObserver to capture callback and simulate intersection events
    global.IntersectionObserver = class IntersectionObserver {
      constructor(callback: any) {
        observerCallback = callback
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    } as any
  })

  afterEach(() => {
    global.IntersectionObserver = originalIntersectionObserver
    observerCallback = null
  })

  it('renders children correctly and triggers loadMore on intersection', () => {
    const handleLoadMore = vi.fn()

    render(
      <InfiniteScroll
        hasMore={true}
        isLoading={false}
        loadMore={handleLoadMore}
      >
        <div>Item 1</div>
        <div>Item 2</div>
      </InfiniteScroll>,
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()

    // Trigger intersection event
    if (observerCallback) {
      observerCallback([{ isIntersecting: true }])
    }

    expect(handleLoadMore).toHaveBeenCalledTimes(1)
  })

  it('does not trigger loadMore on intersection when isLoading is true or hasMore is false', () => {
    const handleLoadMore = vi.fn()

    const { rerender } = render(
      <InfiniteScroll
        hasMore={false}
        isLoading={false}
        loadMore={handleLoadMore}
      >
        <div>Item 1</div>
      </InfiniteScroll>,
    )

    // Trigger intersection
    if (observerCallback) {
      observerCallback([{ isIntersecting: true }])
    }
    expect(handleLoadMore).not.toHaveBeenCalled()

    // Rerender with isLoading: true
    rerender(
      <InfiniteScroll hasMore={true} isLoading={true} loadMore={handleLoadMore}>
        <div>Item 1</div>
      </InfiniteScroll>,
    )

    if (observerCallback) {
      observerCallback([{ isIntersecting: true }])
    }
    expect(handleLoadMore).not.toHaveBeenCalled()
  })

  it('renders custom loading trigger or default spinner when isLoading is true', () => {
    const { rerender } = render(
      <InfiniteScroll hasMore={true} isLoading={true} loadMore={() => {}}>
        <div>Item 1</div>
      </InfiniteScroll>,
    )

    expect(screen.getByText('Loading next...')).toBeInTheDocument()

    rerender(
      <InfiniteScroll
        hasMore={true}
        isLoading={true}
        loadMore={() => {}}
        loadingTrigger={<div data-testid="custom-loader">Processing...</div>}
      >
        <div>Item 1</div>
      </InfiniteScroll>,
    )

    expect(screen.getByTestId('custom-loader')).toBeInTheDocument()
    expect(screen.queryByText('Loading next...')).not.toBeInTheDocument()
  })

  it('inserts observer sentinel at triggerIndex when specified', () => {
    const { container } = render(
      <InfiniteScroll
        hasMore={true}
        isLoading={false}
        loadMore={() => {}}
        triggerIndex={1}
      >
        <div data-testid="child-0">Item 0</div>
        <div data-testid="child-1">Item 1</div>
        <div data-testid="child-2">Item 2</div>
      </InfiniteScroll>,
    )

    // Sentinel node is an empty div with class opacity-0/pointer-events-none
    const wrapper = container.querySelector('[data-slot="infinite-scroll"]')
    expect(wrapper).toBeInTheDocument()

    const children = Array.from(wrapper!.children)
    // The children should be: Child 0, Child 1, Sentinel Node, Child 2
    expect(children[0]).toHaveTextContent('Item 0')
    expect(children[1]).toHaveTextContent('Item 1')
    expect(children[2]).toHaveClass('opacity-0') // Sentinel node
    expect(children[3]).toHaveTextContent('Item 2')
  })

  it('renders horizontal navigation buttons and handles clicks', async () => {
    const user = userEvent.setup()

    // To trigger scroll buttons, we need scrollLeft > 10 / clientWidth calculation mocked
    // and direction = 'horizontal' + showScrollButtons = true
    const descriptorScrollLeft = Object.getOwnPropertyDescriptor(
      Element.prototype,
      'scrollLeft',
    )
    const descriptorScrollWidth = Object.getOwnPropertyDescriptor(
      Element.prototype,
      'scrollWidth',
    )
    const descriptorClientWidth = Object.getOwnPropertyDescriptor(
      Element.prototype,
      'clientWidth',
    )
    const originalScrollBy = HTMLElement.prototype.scrollBy

    const scrollByMock = vi.fn()
    HTMLElement.prototype.scrollBy = scrollByMock

    // Set scroll properties to simulate overflowing scroll container using defineProperty on Element
    Object.defineProperty(Element.prototype, 'scrollLeft', {
      configurable: true,
      get() {
        return 100 // > 10, enables left scroll button
      },
    })
    Object.defineProperty(Element.prototype, 'clientWidth', {
      configurable: true,
      get() {
        return 500
      },
    })
    Object.defineProperty(Element.prototype, 'scrollWidth', {
      configurable: true,
      get() {
        return 1200 // > scrollLeft + clientWidth (600), enables right scroll button
      },
    })

    render(
      <div style={{ overflowX: 'auto', width: '500px' }}>
        <InfiniteScroll
          direction="horizontal"
          showScrollButtons={true}
          scrollAmount={200}
          hasMore={false}
          isLoading={false}
          loadMore={() => {}}
        >
          <div style={{ width: '400px' }}>One</div>
          <div style={{ width: '400px' }}>Two</div>
          <div style={{ width: '400px' }}>Three</div>
        </InfiniteScroll>
      </div>,
    )

    // Trigger IntersectionObserver effect to attach scroll listener and recalculate
    if (observerCallback) {
      observerCallback([{ isIntersecting: false }])
    }

    // Advance vitest timers / wait to allow the 150ms timeout in scroll listener to run
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 200))
    })

    const leftBtn = screen.getByRole('button', { name: /scroll left/i })
    const rightBtn = screen.getByRole('button', { name: /scroll right/i })

    expect(leftBtn).toBeInTheDocument()
    expect(rightBtn).toBeInTheDocument()

    // Click right navigation
    await user.click(rightBtn)
    expect(scrollByMock).toHaveBeenCalledWith({ left: 200, behavior: 'smooth' })

    // Click left navigation
    await user.click(leftBtn)
    expect(scrollByMock).toHaveBeenCalledWith({
      left: -200,
      behavior: 'smooth',
    })

    // Clean up prototype overrides
    if (descriptorScrollLeft)
      Object.defineProperty(
        Element.prototype,
        'scrollLeft',
        descriptorScrollLeft,
      )
    if (descriptorClientWidth)
      Object.defineProperty(
        Element.prototype,
        'clientWidth',
        descriptorClientWidth,
      )
    if (descriptorScrollWidth)
      Object.defineProperty(
        Element.prototype,
        'scrollWidth',
        descriptorScrollWidth,
      )
    HTMLElement.prototype.scrollBy = originalScrollBy
  })
})
