<div align="center">

# ⚡ Vibe UI

### _A modern, high-fidelity React & Next.js component library with multi-aesthetic themes._

[![CI](https://github.com/jenishCoderkube/Vibe-uI/actions/workflows/ci.yml/badge.svg)](https://github.com/jenishCoderkube/Vibe-uI/actions/workflows/ci.yml)
[![CodeQL](https://github.com/jenishCoderkube/Vibe-uI/actions/workflows/codeql.yml/badge.svg)](https://github.com/jenishCoderkube/Vibe-uI/actions/workflows/codeql.yml)
[![Secret Scan](https://github.com/jenishCoderkube/Vibe-uI/actions/workflows/secret-scan.yml/badge.svg)](https://github.com/jenishCoderkube/Vibe-uI/actions/workflows/secret-scan.yml)
[![E2E CLI](https://github.com/jenishCoderkube/Vibe-uI/actions/workflows/e2e-cli.yml/badge.svg)](https://github.com/jenishCoderkube/Vibe-uI/actions/workflows/e2e-cli.yml)
[![npm](https://img.shields.io/npm/v/vibe-ui-kit.svg?style=flat-square&color=black)](https://www.npmjs.com/package/vibe-ui-kit)
[![license](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

[**Documentation & Interactive Previews**](https://vibe-ui-kit.vercel.app/) • [**Component Registry**](https://vibe-ui-kit.vercel.app/registry/index.json) • [**CLI Guide**](https://vibe-ui-kit.vercel.app/docs/cli)

</div>

---

**Vibe UI** is a professional collection of **92 curated React & Next.js items** built on top of **Radix UI** primitives, **Tailwind CSS (v3 & v4)**, and **Motion**. It provides copy-and-paste components, text animations, WebGL background shaders, and full application blocks with native support for multiple design styles.

## 🚀 Core Features

- **Multi-Aesthetic Presets:** Switch between `glass` (translucent frosted), `glow` (neon drop-shadows), `retro` (flat hard shadows), or `cyberpunk` (monospace matrix) variants instantly.
- **Tailwind v3 & v4 Dual-Compatible:** Works out of the box with modern Tailwind CSS v4 `@theme` setups as well as classic Tailwind CSS v3 `@tailwind base` configurations.
- **Copy-Paste CLI Architecture:** Install components directly into your own codebase with automatic dependency tracking, overwrite safety, and zero vendor lock-in.
- **Accessible & Type-Safe:** 100% WAI-ARIA compliant keyboard navigation out of the box, fully written in strict TypeScript.
- **Production-Grade CI/CD:** Monorepo tested with 86 test files (212 unit tests), automated registry graph validation, Gitleaks secret detection, and CodeQL static security analysis.

---

## 📦 Quick Start with the CLI

Initialize Vibe UI in your React or Next.js project:

```bash
# 1. Initialize Vibe UI configuration
npx vibe-ui-kit init

# 2. Add components to your project
npx vibe-ui-kit add button dialog card

# 3. Explore available components directly from your terminal
npx vibe-ui-kit list

# 4. Inspect a component's dependencies before installing
npx vibe-ui-kit info chat-01

# 5. Check if local components diverge from the registry
npx vibe-ui-kit diff button
```

---

## 🧩 The Registry (92 Items Available)

Vibe UI components are categorized into 4 distinct groups:

### 1. 📦 UI Primitives (57 Components)
Essential accessible building blocks built on Radix UI:

| Group | Components |
| :--- | :--- |
| **Forms & Inputs** | `button`, `button-group`, `input`, `input-otp`, `textarea`, `checkbox`, `switch`, `select`, `combobox`, `multi-select`, `radio-group`, `slider`, `date-picker`, `form`, `uploader` |
| **Overlays & Dialogs** | `dialog`, `alert-dialog`, `sheet`, `drawer`, `popover`, `hover-card`, `tooltip`, `dropdown-menu`, `context-menu`, `menubar` |
| **Data & Layout** | `card`, `table`, `tabs`, `accordion`, `collapsible`, `separator`, `scroll-area`, `breadcrumb`, `pagination`, `layout-shell`, `sidebar`, `carousel` |
| **Feedback & Badges** | `alert`, `badge`, `progress`, `spinner`, `skeleton`, `toast`, `empty`, `item`, `kbd`, `marker`, `message`, `message-scroller`, `theme-switcher` |

### 2. ✨ Motion & Text Effects (23 Animations)
High-performance visual and typography animations powered by Motion:

`animated-gradient-text` • `animated-shiny-text` • `aurora-text` • `blur-fade` • `comic-text` • `dia-text-reveal` • `hyper-text` • `kinetic-text` • `line-shadow-text` • `marquee` • `message-scroller` • `morphing-text` • `number-ticker` • `scroll-based-velocity` • `sparkles-text` • `spinning-text` • `text-3d-flip` • `text-animate` • `text-glitch` • `text-reveal` • `typing-animation` • `video-text` • `word-rotate`

### 3. 🎨 Interactive WebGL Backgrounds (5 Shaders)
GPU-accelerated ambient backgrounds with automatic context loss recovery and fallback protection:

`light-tunnel` • `lightfall` • `scanner` • `sliced-waves` • `web-threads`

### 4. 🧩 Full Application Blocks (7 Ready-to-Use Templates)
Complete responsive views ready for drop-in use:

- **`dashboard-01`**: Analytics and directory administration dashboard with lifecycle metrics, data table, and drawer details.
- **`dashboard-02`**: Metrics overview with dynamic date-range filtering, interactive charts, and CSV/PDF export.
- **`ecommerce-01`**: Modern storefront with shopping bag sheet, filter chips, and responsive product catalog.
- **`ecommerce-02`**: Minimalist product grid with sorting, category navigation, and quick review modal.
- **`chat-01`**: Modern AI chat workspace with pinned prompt suggestions, message streaming UI, and composer.
- **`auth-01`**: Split-screen glassmorphism authentication with social logins, validation, and dark mode.
- **`crypto-glass-01`**: Dark-mode DeFi portfolio tracker with live market tickers and yield calculator.

---

## 🛠️ Usage Example

```tsx
import { Button } from "@/components/ui/button"

export default function Demo() {
  return (
    <div className="flex gap-4 p-6">
      <Button variant="default">Standard</Button>
      <Button variant="glass">Glassmorphism</Button>
      <Button variant="glow">Neon Glow</Button>
      <Button variant="retro">Retro Card</Button>
      <Button variant="cyberpunk">Cyberpunk</Button>
    </div>
  )
}
```

---

## 💻 Monorepo Development

```bash
# Install dependencies across all workspaces
pnpm install

# Start documentation dev server
pnpm dev

# Run Vitest test suite (86 test files, 212 tests) + registry validation
pnpm test

# Run ESLint across all workspaces (0 errors, 0 warnings policy)
pnpm lint

# Build all packages and compile Next.js production app
pnpm build
```

---

## 📄 License

MIT © [Vibe UI](LICENSE)
