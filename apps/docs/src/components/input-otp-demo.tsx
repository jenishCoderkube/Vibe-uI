'use client'

import React, { useState } from 'react'
import { InputOTP } from 'vibe-ui'

// 1. 4-Digit
export function OTP4Digit() {
  const [val, setVal] = useState('')
  return <InputOTP length={4} value={val} onChange={setVal} variant="default" />
}

// 2. 6-Digit
export function OTP6Digit() {
  const [val, setVal] = useState('')
  return <InputOTP length={6} value={val} onChange={setVal} variant="default" />
}

// 3. Double 3-Digit
export function OTPDouble3Digit() {
  const [val, setVal] = useState('')
  return (
    <div className="flex items-center gap-2">
      <InputOTP
        length={3}
        value={val.slice(0, 3)}
        onChange={(v) => setVal(v + val.slice(3))}
        variant="default"
      />
      <span className="text-zinc-500 font-bold">-</span>
      <InputOTP
        length={3}
        value={val.slice(3)}
        onChange={(v) => setVal(val.slice(0, 3) + v)}
        variant="default"
      />
    </div>
  )
}

// 4. Default theme
export function OTPDefaultTheme() {
  const [val, setVal] = useState('1234')
  return <InputOTP length={4} value={val} onChange={setVal} variant="default" />
}

// 5. Glass theme
export function OTPGlassTheme() {
  const [val, setVal] = useState('5678')
  return <InputOTP length={4} value={val} onChange={setVal} variant="glass" />
}

// 6. Retro theme
export function OTPRetroTheme() {
  const [val, setVal] = useState('9012')
  return <InputOTP length={4} value={val} onChange={setVal} variant="retro" />
}

// 7. Glow theme
export function OTPGlowTheme() {
  const [val, setVal] = useState('3456')
  return <InputOTP length={4} value={val} onChange={setVal} variant="glow" />
}

// 8. Cyber theme
export function OTPCyberTheme() {
  const [val, setVal] = useState('7890')
  return (
    <InputOTP length={4} value={val} onChange={setVal} variant="cyberpunk" />
  )
}

// 9. Controlled
export function OTPControlled() {
  const [val, setVal] = useState('1111')
  return (
    <div className="flex flex-col items-center gap-3">
      <InputOTP length={4} value={val} onChange={setVal} variant="default" />
      <span className="text-xs text-primary font-mono font-bold">
        CURRENT STATE: {val || 'EMPTY'}
      </span>
    </div>
  )
}

// 10. Password Mode
export function OTPPasswordMode() {
  const [val, setVal] = useState('')
  return (
    <InputOTP
      length={4}
      value={val}
      onChange={setVal}
      type="password"
      variant="default"
    />
  )
}

// 11. Disabled State
export function OTPDisabled() {
  return <InputOTP length={4} value="9999" disabled variant="default" />
}

// 12. Custom Slot Widths
export function OTPCustomSlotWidths() {
  const [val, setVal] = useState('')
  return (
    <InputOTP
      length={4}
      value={val}
      onChange={setVal}
      variant="glow"
      className="gap-3 *:w-12 *:h-14 *:text-xl"
    />
  )
}
