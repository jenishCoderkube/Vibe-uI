<div align="center">
  
  # 📦 vibe-ui
  
  ### *The official React package distribution for Vibe UI components.*
  
  [![npm](https://img.shields.io/npm/v/vibe-ui.svg?style=flat-square&color=black)](https://www.npmjs.com/package/vibe-ui)
  [![typescript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
  [![tailwind](https://img.shields.io/badge/Tailwind-3.x%20%7C%204.x-38bdf8.svg?style=flat-square)](https://tailwindcss.com/)
  [![license](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

</div>

---

`vibe-ui` is the package distribution of Vibe UI. It contains 50+ beautiful, highly accessible React components built with **Radix UI** and **Tailwind CSS**, featuring custom styling variants (`glass`, `glow`, `retro`, `cyberpunk`).

## ⚙️ Installation

```bash
# Install package and peer dependencies
pnpm add vibe-ui lucide-react tailwind-variants
# or
npm install vibe-ui lucide-react tailwind-variants
```

---

## 🛠️ Usage Example

### 1. Standard Imports & Theme Variants
Import components directly from `'vibe-ui'`:

```tsx
import { Button, InputOTP } from 'vibe-ui'

export default function App() {
  const [otp, setOtp] = React.useState('')

  return (
    <div className="flex flex-col gap-4">
      {/* Vibe's retro theme variant */}
      <InputOTP length={4} value={otp} onChange={setOtp} variant="retro" />
      
      {/* Vibe's neon glow button variant */}
      <Button variant="glow" onClick={() => alert(otp)}>
        Submit Code
      </Button>
    </div>
  )
}
```

### 2. Composed API Example
Take maximum control of layout alignment using Vibe's composed primitives:

```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from 'vibe-ui'

export default function Composed() {
  return (
    <InputOTP maxLength={4} value={value} onChange={setValue}>
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

## 📖 Documentation
Check out the complete component list, variant guides, and API details on the [Vibe UI Documentation site](https://vibe-ui-kit.vercel.app/).

---

## 📄 License
MIT © [Vibe UI](https://github.com/jenishCoderkube/Vibe-uI)
