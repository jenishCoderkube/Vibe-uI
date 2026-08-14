<div align="center">

# 📦 vibe-ui-kit

### _The official React package distribution for Vibe UI components._

[![npm](https://img.shields.io/npm/v/vibe-ui-kit.svg?style=flat-square&color=black)](https://www.npmjs.com/package/vibe-ui-kit)
[![typescript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![tailwind](https://img.shields.io/badge/Tailwind-3.x%20%7C%204.x-38bdf8.svg?style=flat-square)](https://tailwindcss.com/)
[![license](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

</div>

---

`vibe-ui-kit` is the official package distribution of Vibe UI. It contains **75+ beautiful, highly accessible React components** built with **Radix UI** and **Tailwind CSS**, featuring custom styling variants (`glass`, `glow`, `retro`, `cyberpunk`).

## ⚙️ Installation

Install the package and its peer dependencies using your preferred package manager:

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

### 1. Standard Imports & Theme Variants

Import components directly from `'vibe-ui-kit'`:

```tsx
import { Button } from 'vibe-ui-kit'

export default function App() {
  return (
    <div className="flex gap-4">
      {/* Vibe's neon glow button variant */}
      <Button variant="glow">Neon Glow</Button>

      {/* Vibe's retro theme variant */}
      <Button variant="retro">Retro shadows</Button>
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

- **Forms & Inputs:** Button, Input, Checkbox, Switch, Textarea, Select, Combobox, Multi-Select, InputOTP, Date-Picker, Uploader
- **Layout & Structure:** Card, Carousel, Tabs, Breadcrumb, Pagination, Table, Scroll-Area, Separator, Accordion, Collapsible
- **Feedback & States:** Alert, Alert-Dialog, Progress, Slider, Toast, Tooltip, Skeleton, Empty, Spinner
- **Motion & Typography:** WordRotate, TextGlitch, HyperText, SparklesText, Marquee, TypingAnimation, NumberTicker, AnimatedShinyText, SpinningText, ScrollBasedVelocity, BlurFade, AnimatedGradientText

---

## 📖 Documentation

Check out the complete component list, variant guides, and API details on the [Vibe UI Documentation site](https://vibe-ui-kit.vercel.app/).

---

## 📄 License

MIT © [Vibe UI](https://github.com/jenishCoderkube/Vibe-uI)
