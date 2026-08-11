import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../input-otp'

describe('InputOTP Component', () => {
  it('renders simple API layout correctly', () => {
    render(<InputOTP length={4} value="123" />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('123')

    // Slots show characters
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('calls onChange when typing', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()
    render(<InputOTP length={4} onChange={handleChange} />)
    const input = screen.getByRole('textbox')

    await user.type(input, '1')
    expect(handleChange).toHaveBeenCalledWith('1')
  })

  it('supports disabled state', () => {
    render(<InputOTP length={4} disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('supports composed subcomponents API', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()

    const { container } = render(
      <InputOTP maxLength={4} onChange={handleChange}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>,
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()

    // Verify separator is present
    expect(container.querySelector('[data-slot="input-otp-separator"]')).toBeInTheDocument()

    await user.type(input, '9')
    expect(handleChange).toHaveBeenCalledWith('9')
  })
})
