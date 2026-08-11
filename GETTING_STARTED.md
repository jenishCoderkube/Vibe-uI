# Getting Started with Vibe UI 🌟

Welcome to **Vibe UI**! This guide walks you through integrating our premium, themed component library into your React & Tailwind CSS project.

---

## Prerequisites

Before initializing Vibe UI, make sure your project meets the following setup requirements:

- **Framework**: React 18+ (Next.js, Vite, etc.)
- **Styling**: Tailwind CSS (v4 is recommended, but v3 is fully supported)
- **Language**: TypeScript or JavaScript

---

## Installation Steps

### Step 1: Initialize Vibe UI

Open your project terminal and run the initializer command:

```bash
npx vibe-ui-kit init
```

#### What this does:

1. **Detects Language & Structure**: Identifies if your project uses TypeScript/JavaScript and maps your project paths (e.g. detects if you use `/src`).
2. **Creates Utilities**: Generates a helper file (`lib/utils.ts` or `lib/utils.js`) containing the `cn` utility function.
3. **Configures Tailwind Theme**: Appends our premium custom design tokens, CSS variables, and glassmorphic presets inside your global stylesheet (e.g., `globals.css` or `index.css`).
4. **Installs Peer Dependencies**: Automatically detects your package manager (`npm`, `pnpm`, `yarn`, or `bun`) and prompts you to install:
   - `clsx`
   - `tailwind-merge`
   - `tailwind-variants`
   - `@radix-ui/react-slot`
   - `lucide-react`

> [!TIP]
> To skip all interactive prompts and initialize using recommended defaults immediately, run:
>
> ```bash
> npx vibe-ui-kit init --yes
> ```

---

### Step 2: Add Components

Once initialized, you can add components to your project on-demand using the `add` command:

```bash
npx vibe-ui-kit add [component-name]
```

For example, to install the **Button**, **Switch**, and **Badge** components, run:

```bash
npx vibe-ui-kit add button switch badge
```

#### What this does:

- Downloads the latest source code from the Vibe UI registry.
- Places components directly into your local directory (e.g. `src/components/ui/`).
- Automatically resolves and installs any unique subcomponent dependencies or package-level requirements.

---

### Step 3: Usage & Theme Presets

Because Vibe UI components are written directly into your project's component folders, you can import and use them like standard components:

```tsx
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-8 items-center bg-zinc-950 min-h-screen text-white">
      {/* 1. Glassmorphic Style */}
      <Button variant="glass">Glass Button</Button>

      {/* 2. Neon Glow Style */}
      <Switch variant="glow" defaultChecked />

      {/* 3. Retro Brutalist Style */}
      <Badge variant="retro">Retro Badge</Badge>

      {/* 4. Default / Minimalist Style */}
      <Button variant="default">Minimal Button</Button>
    </div>
  )
}
```

---

## Customizing Color Themes

The components are bound to your Tailwind CSS variable `--primary`. You can change the primary color of the components dynamically by modifying your global CSS:

```css
@theme {
  /* Set your primary theme color (HSL format) */
  --primary: 262 83% 58%; /* Purple */
  --color-primary: hsl(var(--primary));
}
```

Enjoy building beautiful interfaces with Vibe UI! 🚀
