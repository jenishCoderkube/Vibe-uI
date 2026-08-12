import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from '../carousel'

const { mockScrollTo, mockScrollPrev, mockScrollNext } = vi.hoisted(() => ({
  mockScrollTo: vi.fn(),
  mockScrollPrev: vi.fn(),
  mockScrollNext: vi.fn(),
}))

vi.mock('embla-carousel-react', () => {
  return {
    default: vi.fn().mockReturnValue([
      vi.fn(), // ref
      {
        on: vi.fn(),
        off: vi.fn(),
        scrollPrev: mockScrollPrev,
        scrollNext: mockScrollNext,
        scrollTo: mockScrollTo,
        selectedScrollSnap: vi.fn().mockReturnValue(0),
        scrollSnapList: vi.fn().mockReturnValue([0, 1, 2]),
        canScrollPrev: vi.fn().mockReturnValue(true),
        canScrollNext: vi.fn().mockReturnValue(true),
      },
    ]),
  }
})

describe('Carousel Component', () => {
  it('renders carousel list items correctly', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    )

    expect(screen.getByText('Slide 1')).toBeInTheDocument()
    expect(screen.getByText('Slide 2')).toBeInTheDocument()
  })

  it('renders CarouselDots and handles clicking dot navigation', () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
        </CarouselContent>
        <CarouselDots />
      </Carousel>,
    )

    const dot1 = screen.getByRole('button', { name: 'Go to slide 1' })
    const dot2 = screen.getByRole('button', { name: 'Go to slide 2' })
    const dot3 = screen.getByRole('button', { name: 'Go to slide 3' })

    expect(dot1).toBeInTheDocument()
    expect(dot2).toBeInTheDocument()
    expect(dot3).toBeInTheDocument()

    fireEvent.click(dot2)
    expect(mockScrollTo).toHaveBeenCalledWith(1)
  })

  it('supports vertical orientation layout and navigation buttons', () => {
    render(
      <Carousel orientation="vertical">
        <CarouselContent>
          <CarouselItem>Vertical Slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    )

    const prevBtn = screen.getByRole('button', { name: /previous slide/i })
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    expect(prevBtn).toHaveClass('rotate-90')
    expect(nextBtn).toHaveClass('rotate-90')
  })

  it('supports multi-aesthetic variants (retro, glow, glass, cyberpunk)', () => {
    const { container: retroContainer } = render(
      <Carousel variant="retro">
        <CarouselContent>
          <CarouselItem>Retro Slide</CarouselItem>
        </CarouselContent>
        <CarouselDots />
      </Carousel>,
    )
    expect(retroContainer.firstChild).toHaveClass('relative')

    const { container: cyberContainer } = render(
      <Carousel variant="cyberpunk">
        <CarouselContent>
          <CarouselItem>Cyber Slide</CarouselItem>
        </CarouselContent>
        <CarouselDots />
      </Carousel>,
    )
    expect(cyberContainer.firstChild).toHaveClass('relative')
  })

  it('handles keyboard navigation (ArrowLeft and ArrowRight) in a product gallery showcase', () => {
    const products = [
      { id: '1', title: 'Wireless Headphones', price: '$299' },
      { id: '2', title: 'Smart Watch Series 7', price: '$399' },
      { id: '3', title: 'Noise Cancelling Earbuds', price: '$199' },
    ]

    render(
      <Carousel data-testid="product-carousel" className="max-w-md">
        <CarouselContent>
          {products.map((p) => (
            <CarouselItem key={p.id}>
              <div className="p-4 border rounded-lg">
                <h3>{p.title}</h3>
                <p>{p.price}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </Carousel>,
    )

    const carousel = screen.getByTestId('product-carousel')
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument()

    // Simulate keyboard arrow navigation
    fireEvent.keyDown(carousel, { key: 'ArrowRight' })
    expect(mockScrollNext).toHaveBeenCalled()

    fireEvent.keyDown(carousel, { key: 'ArrowLeft' })
    expect(mockScrollPrev).toHaveBeenCalled()
  })
})
