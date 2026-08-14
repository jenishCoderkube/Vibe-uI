'use client'

import * as React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from 'vibe-ui'

export function VerificationCodeCard() {
  const [otpValue, setOtpValue] = React.useState('')
  const [isVerifying, setIsVerifying] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleVerify = () => {
    if (otpValue.length !== 6) return
    setIsVerifying(true)
    setTimeout(() => {
      setIsVerifying(false)
      setIsSuccess(true)
    }, 1200)
  }

  const handleResend = () => {
    setOtpValue('')
    setIsSuccess(false)
  }

  return (
    <Card className="w-full text-left">
      <CardHeader className="pb-3.5">
        <CardTitle className="text-sm font-semibold">Security Verification</CardTitle>
        <CardDescription className="text-[11px] leading-relaxed">
          We sent a 6-digit confirmation code to your registered device.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4 py-2">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-4 text-center space-y-1.5 min-h-[72px]">
            <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <svg className="size-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-semibold text-foreground">Verification Successful</p>
              <p className="text-[10px] text-muted-foreground">Your session is now secure.</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <InputOTP
              maxLength={6}
              value={otpValue}
              onChange={setOtpValue}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="size-9 text-xs" />
                <InputOTPSlot index={1} className="size-9 text-xs" />
                <InputOTPSlot index={2} className="size-9 text-xs" />
              </InputOTPGroup>
              <InputOTPSeparator className="text-muted-foreground/30 px-1" />
              <InputOTPGroup>
                <InputOTPSlot index={3} className="size-9 text-xs" />
                <InputOTPSlot index={4} className="size-9 text-xs" />
                <InputOTPSlot index={5} className="size-9 text-xs" />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-[10px] text-muted-foreground">
              Didn't receive it?{' '}
              <button
                type="button"
                onClick={handleResend}
                className="text-primary hover:underline font-semibold cursor-pointer"
              >
                Resend Code
              </button>
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2 flex gap-2">
        {isSuccess ? (
          <Button
            type="button"
            variant="outline"
            className="w-full h-8 text-xs font-semibold"
            onClick={handleResend}
          >
            Reset Verification
          </Button>
        ) : (
          <Button
            type="button"
            className="w-full h-8 text-xs font-semibold"
            disabled={otpValue.length !== 6 || isVerifying}
            onClick={handleVerify}
          >
            {isVerifying ? 'Verifying...' : 'Confirm'}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
export default VerificationCodeCard
