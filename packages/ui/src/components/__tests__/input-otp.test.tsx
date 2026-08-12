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
    expect(
      container.querySelector('[data-slot="input-otp-separator"]'),
    ).toBeInTheDocument()

    await user.type(input, '9')
    expect(handleChange).toHaveBeenCalledWith('9')
  })

  it('supports multi-aesthetic variants (retro, glow, glass, cyberpunk)', () => {
    const { container: retroContainer } = render(
      <InputOTP length={4} variant="retro" value="1234" />,
    )
    const slot = retroContainer.querySelector('[data-slot="input-otp-slot"]')
    expect(slot).toHaveClass('border-2')
    expect(slot).toHaveClass('border-foreground')

    const { container: glowContainer } = render(
      <InputOTP length={4} variant="glow" value="1234" />,
    )
    const glowSlot = glowContainer.querySelector('[data-slot="input-otp-slot"]')
    expect(glowSlot).toHaveClass('text-primary')
  })

  it('supports controlled value updates dynamically', () => {
    const { rerender } = render(<InputOTP length={4} value="12" />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()

    rerender(<InputOTP length={4} value="98" />)
    expect(screen.getByText('9')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
  })

  it('renders InputOTPSlot with custom className and structure', () => {
    const { container } = render(
      <InputOTP maxLength={2}>
        <InputOTPGroup>
          <InputOTPSlot index={0} className="custom-slot-class" />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
      </InputOTP>,
    )

    const slot0 = container.querySelector('.custom-slot-class')
    expect(slot0).toBeInTheDocument()
    expect(slot0).toHaveAttribute('data-slot', 'input-otp-slot')
  })

  it('handles a real-life 6-digit Two-Factor Authentication (2FA) verification flow', async () => {
    const user = userEvent.setup()
    const handleComplete = vi.fn()

    function TwoFactorVerificationForm() {
      const [otp, setOtp] = React.useState('')
      return (
        <div className="space-y-4 max-w-sm text-center">
          <h2 className="text-lg font-bold">Two-Step Verification</h2>
          <p className="text-sm text-muted-foreground">
            Enter the 6-digit security code sent to your mobile device.
          </p>
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(val) => {
              setOtp(val)
              if (val.length === 6) {
                handleComplete(val)
              }
            }}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      )
    }

    render(<TwoFactorVerificationForm />)

    expect(screen.getByText('Two-Step Verification')).toBeInTheDocument()
    const input = screen.getByRole('textbox')

    // Type 6 digit code "481920"
    await user.type(input, '481920')
    expect(handleComplete).toHaveBeenCalledWith('481920')
  })
})
