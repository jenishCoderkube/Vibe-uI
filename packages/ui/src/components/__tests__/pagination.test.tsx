import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationDots,
  PaginationSlider,
  PaginationMini,
  PaginationLoadMore,
  PaginationDropdown,
  PaginationProgressLine,
} from '../pagination'

describe('Pagination Component Suite', () => {
  describe('PaginationBasic & Links', () => {
    it('renders navigation links and handles active states', () => {
      render(
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>,
      )

      const activeLink = screen.getByRole('link', { name: '1' })
      expect(activeLink).toBeInTheDocument()
      expect(activeLink).toHaveAttribute('aria-current', 'page')

      const inactiveLink = screen.getByRole('link', { name: '2' })
      expect(inactiveLink).toBeInTheDocument()
      expect(inactiveLink).not.toHaveAttribute('aria-current')
    })
  })

  describe('PaginationDots', () => {
    it('triggers onPageChange when clicking a page dot', async () => {
      const user = userEvent.setup()
      const handlePageChange = vi.fn()

      render(
        <PaginationDots
          totalPages={5}
          currentPage={2}
          onPageChange={handlePageChange}
        />,
      )

      const page4Btn = screen.getByRole('button', { name: /go to page 4/i })
      expect(page4Btn).toBeInTheDocument()

      await user.click(page4Btn)
      expect(handlePageChange).toHaveBeenCalledWith(4)
    })
  })

  describe('PaginationSlider', () => {
    it('triggers onPageChange when range slider changes', () => {
      const handlePageChange = vi.fn()
      render(
        <PaginationSlider
          totalPages={10}
          currentPage={3}
          onPageChange={handlePageChange}
        />,
      )

      const slider = screen.getByRole('slider')
      expect(slider).toBeInTheDocument()
      expect(slider).toHaveValue('3')

      fireEvent.change(slider, { target: { value: '6' } })
      expect(handlePageChange).toHaveBeenCalledWith(6)
    })
  })

  describe('PaginationMini', () => {
    it('navigates correctly and disables boundaries', async () => {
      const user = userEvent.setup()
      const handlePageChange = vi.fn()
      const { rerender } = render(
        <PaginationMini
          totalPages={3}
          currentPage={1}
          onPageChange={handlePageChange}
        />,
      )

      const buttons = screen.getAllByRole('button')
      const prevBtn = buttons[0]
      const nextBtn = buttons[1]

      // At page 1, prev button is disabled
      expect(prevBtn).toHaveAttribute('disabled')
      expect(prevBtn).toHaveClass('pointer-events-none')

      // Go to page 2
      await user.click(nextBtn)
      expect(handlePageChange).toHaveBeenCalledWith(2)

      // Rerender at page 3 (last page)
      rerender(
        <PaginationMini
          totalPages={3}
          currentPage={3}
          onPageChange={handlePageChange}
        />,
      )

      const newButtons = screen.getAllByRole('button')
      const newNextBtn = newButtons[1]
      expect(newNextBtn).toHaveAttribute('disabled')
    })
  })

  describe('PaginationDropdown', () => {
    it('selects values, renders options and responds to page change and arrows', async () => {
      const user = userEvent.setup()
      const handlePageChange = vi.fn()

      render(
        <PaginationDropdown
          totalPages={4}
          currentPage={2}
          onPageChange={handlePageChange}
        />,
      )

      // Verify page options exist inside select
      const select = screen.getByRole('combobox')
      expect(select).toBeInTheDocument()
      expect(select).toHaveValue('2')

      const options = screen.getAllByRole('option')
      expect(options).toHaveLength(4)

      // Change page via select dropdown
      await user.selectOptions(select, '3')
      expect(handlePageChange).toHaveBeenCalledWith(3)

      // Click previous arrow button (index 0)
      const buttons = screen.getAllByRole('button')
      const prevBtn = buttons[0]
      await user.click(prevBtn)
      expect(handlePageChange).toHaveBeenCalledWith(1) // Math.max(1, 2 - 1)
    })
  })

  describe('PaginationProgressLine', () => {
    it('calculates progress line percentage correctly', () => {
      const { container } = render(
        <PaginationProgressLine
          totalPages={5}
          currentPage={3}
          onPageChange={() => {}}
        />,
      )

      // Width calculation percentage is ((3 - 1) / (5 - 1)) * 100 = 50%
      const progressBar = container.querySelector('.h-full')
      expect(progressBar).toHaveStyle('width: 50%')
    })
  })

  describe('PaginationLoadMore', () => {
    it('renders progress bar percentage and triggers onClick callback', async () => {
      const user = userEvent.setup()
      const handleLoadMore = vi.fn()

      const { rerender } = render(
        <PaginationLoadMore
          isLoading={false}
          onClick={handleLoadMore}
          hasNextPage={true}
          loadedCount={40}
          totalCount={100}
        />,
      )

      // Renders progress details (40%)
      expect(screen.getByText('Showing 40 of 100 items')).toBeInTheDocument()
      expect(screen.getByText('40%')).toBeInTheDocument()

      const button = screen.getByRole('button', { name: /load more/i })
      await user.click(button)
      expect(handleLoadMore).toHaveBeenCalledTimes(1)

      // Rerender in loading state
      rerender(
        <PaginationLoadMore
          isLoading={true}
          onClick={handleLoadMore}
          hasNextPage={true}
          loadedCount={40}
          totalCount={100}
        />,
      )

      expect(screen.getByText('Loading...')).toBeInTheDocument()
      expect(screen.getByRole('button')).toBeDisabled()

      // Rerender when hasNextPage is false - Load More button should disappear
      rerender(
        <PaginationLoadMore
          isLoading={false}
          onClick={handleLoadMore}
          hasNextPage={false}
          loadedCount={100}
          totalCount={100}
        />,
      )
      expect(
        screen.queryByRole('button', { name: /load more/i }),
      ).not.toBeInTheDocument()
    })
  })
})
