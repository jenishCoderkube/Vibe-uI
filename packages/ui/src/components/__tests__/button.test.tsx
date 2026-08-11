import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../button'

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(
      screen.getByRole('button', { name: /click me/i }),
    ).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole('button', { name: /click me/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies default classes', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('bg-primary')
  })

  it('renders as child slot when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>,
    )
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /link button/i }),
    ).toBeInTheDocument()
  })

  it('prevents click events when disabled', () => {
    const handleClick = vi.fn()
    render(
      <Button disabled onClick={handleClick}>
        Disabled Button
      </Button>,
    )

    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })
})
