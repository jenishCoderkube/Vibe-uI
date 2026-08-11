import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationDots,
  PaginationSlider,
  PaginationMini,
} from '../pagination'

describe('Pagination Component', () => {
  it('renders navigation links correctly', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>,
    )

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('triggers onPageChange when clicking a page dot in PaginationDots', () => {
    const handlePageChange = vi.fn()
    render(
      <PaginationDots
        totalPages={5}
        currentPage={2}
        onPageChange={handlePageChange}
      />,
    )

    // Query for dot for page 4
    const page4Btn = screen.getByRole('button', { name: /go to page 4/i })
    expect(page4Btn).toBeInTheDocument()

    // Click it
    fireEvent.click(page4Btn)
    expect(handlePageChange).toHaveBeenCalledWith(4)
  })

  it('triggers onPageChange when adjusting PaginationSlider', () => {
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

    // Adjust value to 6
    fireEvent.change(slider, { target: { value: '6' } })
    expect(handlePageChange).toHaveBeenCalledWith(6)
  })

  it('navigates correctly in PaginationMini', () => {
    const handlePageChange = vi.fn()
    const { rerender } = render(
      <PaginationMini
        totalPages={5}
        currentPage={3}
        onPageChange={handlePageChange}
      />,
    )

    // Next page button click
    const nextBtn = screen.getAllByRole('button')[1]
    fireEvent.click(nextBtn)
    expect(handlePageChange).toHaveBeenCalledWith(4)

    // Prev page button click
    const prevBtn = screen.getAllByRole('button')[0]
    fireEvent.click(prevBtn)
    expect(handlePageChange).toHaveBeenCalledWith(2)
  })
})
