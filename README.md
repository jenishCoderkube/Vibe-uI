<div align="center">

# ⚡ Vibe UI

### _Beautiful, accessible React components with multi-aesthetic theme variants._

[![npm](https://img.shields.io/npm/v/vibe-ui.svg?style=flat-square&color=black)](https://www.npmjs.com/)
[![typescript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![tailwind](https://img.shields.io/badge/Tailwind-3.x%20%7C%204.x-38bdf8.svg?style=flat-square)](https://tailwindcss.com/)
[![license](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

</div>

---

**Vibe UI** is a collection of 50+ modern React components built on top of **Radix UI** primitives and **Tailwind CSS**. It is designed to give your applications a distinct, premium look with built-in support for multiple design styles.

## 🚀 Key Powers

- **Multi-Aesthetic (`variant`):** Switch between `glass` (translucent frosted), `glow` (neon drop-shadows), `retro` (flat hard shadows), or `cyberpunk` (monospace matrix) variants instantly.
- **Hybrid API:** Prototype instantly with a simple, prop-driven API, or compose layout hierarchies using primitive subcomponents for advanced customization.
- **Accessible & Typed:** 100% WAI-ARIA compliant keyboard navigation out of the box, fully written in strict TypeScript.

---

## 📦 Install & Quick Start

Get components using the interactive CLI to install them directly into your codebase:

```bash
# Add a core component
npx vibe-ui-kit add button

# Add a hybrid component
npx vibe-ui-kit add combobox input-otp
```

---

## 🛠️ Usage Examples

### 1. Style Aesthetics

```tsx
import { Button } from '@/components/ui/button'

export default function Demo() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Standard</Button>
      <Button variant="glass">Glassmorphism</Button>
      <Button variant="glow">Neon Glow</Button>
      <Button variant="retro">Retro Card</Button>
      <Button variant="cyberpunk">Cyberpunk</Button>
    </div>
  )
}
```

### 2. Hybrid API (Simple vs. Composed)

#### Simple Layout (Prototype Fast)

```tsx
import { InputOTP } from '@/components/ui/input-otp'

export default function Simple() {
  return <InputOTP length={6} value={otp} onChange={setOtp} />
}
```

#### Composed Layout (Maximum Control)

```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp'

export default function Composed() {
  return (
    <InputOTP maxLength={4} value={otp} onChange={setOtp}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}
```

---

## 💻 Local Development

```bash
pnpm install
pnpm dev    # Launch docs & preview site
pnpm test   # Run complete Vitest suite
pnpm build  # Compile and generate registries
```

---

## 📄 License

MIT © [Vibe UI](LICENSE)
