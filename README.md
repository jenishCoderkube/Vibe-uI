<div align="center">

# ⚡ Vibe UI

### _Beautiful, accessible React components with multi-aesthetic theme variants._

[![npm](https://img.shields.io/npm/v/vibe-ui-kit.svg?style=flat-square&color=black)](https://www.npmjs.com/package/vibe-ui-kit)
[![typescript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![tailwind](https://img.shields.io/badge/Tailwind-3.x%20%7C%204.x-38bdf8.svg?style=flat-square)](https://tailwindcss.com/)
[![license](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

</div>

---

**Vibe UI** is a professional collection of **75+ high-fidelity React components** built on top of **Radix UI** primitives and **Tailwind CSS**. It is designed to give your applications a distinct, premium look with native support for multiple design styles.

## 🚀 Core Features

- **Multi-Aesthetic Presets:** Switch between `glass` (translucent frosted), `glow` (neon drop-shadows), `retro` (flat hard shadows), or `cyberpunk` (monospace matrix) variants instantly.
- **Hybrid API Architecture:** Prototype instantly with a simple, prop-driven API, or compose layout hierarchies using primitive subcomponents for advanced customization.
- **Accessible & Type-Safe:** 100% WAI-ARIA compliant keyboard navigation out of the box, fully written in strict TypeScript.

---

## 📦 Installation & Quick Start

Install the library using your preferred package manager:

```bash
# npm
npm install vibe-ui-kit lucide-react tailwind-variants

# pnpm
pnpm add vibe-ui-kit lucide-react tailwind-variants

# yarn
yarn add vibe-ui-kit lucide-react tailwind-variants
```

---

## 🛠️ Usage Examples

### 1. Style Aesthetics

Import components and customize variants directly:

```tsx
import { Button } from 'vibe-ui-kit'

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
import { InputOTP } from 'vibe-ui-kit'

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
} from 'vibe-ui-kit'

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

## 🧩 Component Library (75+ Presets)

Vibe UI includes a wide range of components divided into category types:

- **Forms & Inputs:** Button, Input, Checkbox, Switch, Textarea, Select, Combobox, Multi-Select, InputOTP, Date-Picker, Uploader
- **Layout & Structure:** Card, Carousel, Tabs, Breadcrumb, Pagination, Table, Scroll-Area, Separator, Accordion, Collapsible
- **Feedback & States:** Alert, Alert-Dialog, Progress, Slider, Toast, Tooltip, Skeleton, Empty, Spinner
- **Motion & Typography:** WordRotate, TextGlitch, HyperText, SparklesText, Marquee, TypingAnimation, NumberTicker, AnimatedShinyText, SpinningText, ScrollBasedVelocity, BlurFade, AnimatedGradientText

---

## 💻 Local Development

Run the monorepo workspace locally:

```bash
# Install dependencies
pnpm install

# Start documentation dev server
pnpm dev

# Run Vitest test suite
pnpm test

# Build files and compile registries
pnpm build
```

---

## 📄 License

MIT © [Vibe UI](LICENSE)
