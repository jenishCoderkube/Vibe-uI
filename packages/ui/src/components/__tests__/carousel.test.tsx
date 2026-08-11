import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../carousel'

vi.mock('embla-carousel-react', () => {
  return {
    default: vi.fn().mockReturnValue([
      vi.fn(), // ref
      {
        on: vi.fn(),
        off: vi.fn(),
        scrollPrev: vi.fn(),
        scrollNext: vi.fn(),
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
})
