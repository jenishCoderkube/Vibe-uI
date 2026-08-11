<p align="center">
  <img src="https://img.shields.io/npm/v/vibe-ui-kit.svg?style=for-the-badge&color=a855f7&labelColor=09090b&label=NPM" alt="npm version" />
  <img src="https://img.shields.io/npm/dm/vibe-ui-kit.svg?style=for-the-badge&color=6366f1&labelColor=09090b&label=Downloads" alt="downloads" />
  <img src="https://img.shields.io/website?up_message=live&url=https%3A%2F%2Fvibe-ui-kit.vercel.app&style=for-the-badge&color=10b981&labelColor=09090b&label=Docs" alt="docs" />
  <img src="https://img.shields.io/github/license/jenishCoderkube/Vibe-uI?style=for-the-badge&color=3b82f6&labelColor=09090b" alt="license" />
</p>

<br/>

<h1 align="center">✦ Vibe UI Kit ✦</h1>

<p align="center">
  <strong>A premium React component library with 50+ beautifully crafted, multi-preset UI components.</strong><br/>
  Built with <b>React 19</b> · <b>TypeScript</b> · <b>Tailwind CSS v4</b> · <b>Radix UI</b>
</p>

<p align="center">
  <a href="https://vibe-ui-kit.vercel.app/"><b>📖 Documentation</b></a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="https://vibe-ui-kit.vercel.app/docs/components/button"><b>🧩 Components</b></a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="https://github.com/jenishCoderkube/Vibe-uI"><b>⭐ GitHub</b></a>
</p>

<br/>

---

## 💡 Why Vibe UI?

Most component libraries install into `node_modules` — you get **zero design control** and heavy bundle overhead.

**Vibe UI is different.** Components are installed **directly into your source code** via the CLI. You own every line, customize freely, and ship only what you use.

| Feature              | Vibe UI                                               | Traditional Libraries                    |
| :------------------- | :---------------------------------------------------- | :--------------------------------------- |
| **Components Count** | **50+ premium, production-ready**                     | Typically 15-20                          |
| **Install Location** | Your local `src/components/ui/` folder                | Bundled inside `node_modules/`           |
| **Customization**    | Full control — modify and customize the code directly | Override styles with wrapper css hacks   |
| **Bundle Size**      | Minimal — only components you add are compiled        | Heavy — loads the entire package library |
| **Theme Presets**    | **4 built-in** (Default, Glassmorphism, Retro, Glow)  | Usually 1 theme                          |
| **Accessibility**    | Built on top of Radix UI primitives                   | Varies / Often lacking                   |

<br/>

---

## ⚡ Quick Start

Get up and running in **under 2 minutes**:

1. **Initialize project layout & theme:**
   ```bash
   npx vibe-ui-kit init
   ```
2. **Add a component:**
   ```bash
   npx vibe-ui-kit add button
   ```

> 💡 **Tip:** Run `npx vibe-ui-kit add` without any arguments to open the **interactive multi-select picker** to choose multiple components.

<br/>

---

## 🚀 Full Setup Guide (A to Z)

### Step 1 — Create a React + TypeScript Project

```bash
npx create-vite@latest my-vibe-app --template react-ts
cd my-vibe-app
npm install
```

### Step 2 — Install Tailwind CSS v4

```bash
npm add -D tailwindcss @tailwindcss/vite
```

Then add the Tailwind plugin to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### Step 3 — Add Vibe UI Components

Pick individual components:

```bash
# Add a single component
npx vibe-ui-kit add button

# Add another
npx vibe-ui-kit add switch
```

Or use the **interactive picker** to select multiple:

```bash
npx vibe-ui-kit add
```

_The CLI auto-creates `src/components/ui/` and the shared utility helper at `src/lib/utils.ts`._

### Step 4 — Install Peer Dependencies

The CLI will instruct you exactly what to install. Common dependencies:

```bash
# Core utilities (always needed)
npm add clsx tailwind-merge tailwind-variants @radix-ui/react-slot lucide-react

# Radix primitives (install what your selected components need)
npm add @radix-ui/react-accordion @radix-ui/react-alert-dialog \
  @radix-ui/react-dialog @radix-ui/react-dropdown-menu \
  @radix-ui/react-progress @radix-ui/react-radio-group \
  @radix-ui/react-slider @radix-ui/react-toast \
  @radix-ui/react-hover-card @radix-ui/react-popover \
  @radix-ui/react-scroll-area @radix-ui/react-menubar
```

### Step 5 — Apply the Theme

Replace the contents of `src/index.css` with the Vibe UI theme variables:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import 'tailwindcss';

@theme {
  --color-background: #09090b;
  --color-foreground: #fafafa;
  --color-card: #09090b;
  --color-card-foreground: #fafafa;
  --color-popover: #09090b;
  --color-popover-foreground: #fafafa;
  --color-primary: #a855f7;
  --color-primary-foreground: #ffffff;
  --color-secondary: #27272a;
  --color-secondary-foreground: #fafafa;
  --color-muted: #18181b;
  --color-muted-foreground: #a1a1aa;
  --color-accent: #27272a;
  --color-accent-foreground: #fafafa;
  --color-destructive: #ef4444;
  --color-destructive-foreground: #fafafa;
  --color-border: #27272a;
  --color-input: #27272a;
  --color-ring: #a855f7;
  --radius: 0.75rem;
}

body {
  background-color: #09090b;
  color: #fafafa;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
}
```

<br/>

---

## 📂 Project Structure

After adding components, your project layout will look like this:

```
my-vibe-app/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx          ← Vibe UI components
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── table.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── pagination.tsx
│   │       ├── toast.tsx
│   │       ├── calendar.tsx
│   │       ├── carousel.tsx
│   │       ├── switch.tsx
│   │       └── ...  (51 total)
│   ├── lib/
│   │   └── utils.ts                ← Class-merging utility (auto-created)
│   ├── App.tsx
│   └── index.css                   ← Theme config styles
├── vite.config.ts
└── package.json
```

<br/>

---

## 🧩 All 51 Components

### 🎛️ Inputs & Controls (13)

| Component        | Description                                              |                                 Docs                                  |
| :--------------- | :------------------------------------------------------- | :-------------------------------------------------------------------: |
| **Button**       | 10+ style presets — Glow, Retro, Glass, Outline, etc.    |    [View →](https://vibe-ui-kit.vercel.app/docs/components/button)    |
| **Input**        | Text fields with validation states and icon support      |    [View →](https://vibe-ui-kit.vercel.app/docs/components/input)     |
| **Textarea**     | Multi-line text areas with validation states             |   [View →](https://vibe-ui-kit.vercel.app/docs/components/textarea)   |
| **Checkbox**     | Responsive toggle list items                             |   [View →](https://vibe-ui-kit.vercel.app/docs/components/checkbox)   |
| **Switch**       | Animated toggle switches with 4 visual presets           |    [View →](https://vibe-ui-kit.vercel.app/docs/components/switch)    |
| **Slider**       | Smooth range inputs with tooltip preview                 |    [View →](https://vibe-ui-kit.vercel.app/docs/components/slider)    |
| **Radio Group**  | Single-choice selection with styled indicators           | [View →](https://vibe-ui-kit.vercel.app/docs/components/radio-group)  |
| **Select**       | Custom styled select dropdowns                           |    [View →](https://vibe-ui-kit.vercel.app/docs/components/select)    |
| **Multi-Select** | Multi-value select with tags and search                  | [View →](https://vibe-ui-kit.vercel.app/docs/components/multi-select) |
| **Input OTP**    | Access code inputs with focus loops and cursor lines     |  [View →](https://vibe-ui-kit.vercel.app/docs/components/input-otp)   |
| **Toggle**       | Two-state toggle buttons with icon configurations        |    [View →](https://vibe-ui-kit.vercel.app/docs/components/toggle)    |
| **Uploader**     | Drag-and-drop dropzone uploader with file state previews |   [View →](https://vibe-ui-kit.vercel.app/docs/components/uploader)   |
| **Command**      | Command palette / search interface                       |   [View →](https://vibe-ui-kit.vercel.app/docs/components/command)    |

### 📐 Layout & Structure (10)

| Component        | Description                                                      |                                 Docs                                  |
| :--------------- | :--------------------------------------------------------------- | :-------------------------------------------------------------------: |
| **Card**         | Glass containers with backdrop filters and border effects        |     [View →](https://vibe-ui-kit.vercel.app/docs/components/card)     |
| **Accordion**    | Collapsible content sections with smooth animations              |  [View →](https://vibe-ui-kit.vercel.app/docs/components/accordion)   |
| **Tabs**         | Seamless sliding tab views with animated indicator               |     [View →](https://vibe-ui-kit.vercel.app/docs/components/tabs)     |
| **Table**        | Data tables with glass variants, sortable headers & striped rows |    [View →](https://vibe-ui-kit.vercel.app/docs/components/table)     |
| **Separator**    | Visual content dividers (horizontal & vertical)                  |  [View →](https://vibe-ui-kit.vercel.app/docs/components/separator)   |
| **Label**        | Accessible form-control labels                                   |    [View →](https://vibe-ui-kit.vercel.app/docs/components/label)     |
| **Scroll Area**  | Custom scrollbars with smooth overflow scrolling                 | [View →](https://vibe-ui-kit.vercel.app/docs/components/scroll-area)  |
| **Aspect Ratio** | Fixed size ratios for pictures and visual blocks                 | [View →](https://vibe-ui-kit.vercel.app/docs/components/aspect-ratio) |
| **Collapsible**  | Accordion style expanders for hidden details                     | [View →](https://vibe-ui-kit.vercel.app/docs/components/collapsible)  |
| **Layout Shell** | Grid layouts with interactive sidebars and headers               | [View →](https://vibe-ui-kit.vercel.app/docs/components/layout-shell) |

### 🪟 Overlays & Dialogs (7)

| Component         | Description                                |                                  Docs                                  |
| :---------------- | :----------------------------------------- | :--------------------------------------------------------------------: |
| **Dialog**        | Modal overlay boxes with backdrop blur     |    [View →](https://vibe-ui-kit.vercel.app/docs/components/dialog)     |
| **Alert Dialog**  | Confirmation dialogs for critical actions  | [View →](https://vibe-ui-kit.vercel.app/docs/components/alert-dialog)  |
| **Drawer**        | Slide-in panel overlays from any edge      |    [View →](https://vibe-ui-kit.vercel.app/docs/components/drawer)     |
| **Dropdown Menu** | Contextual menus with keyboard navigation  | [View →](https://vibe-ui-kit.vercel.app/docs/components/dropdown-menu) |
| **Popover**       | Floating panels anchored to triggers       |    [View →](https://vibe-ui-kit.vercel.app/docs/components/popover)    |
| **Hover Card**    | Rich hover previews with metadata          |  [View →](https://vibe-ui-kit.vercel.app/docs/components/hover-card)   |
| **Menubar**       | Top horizontal menus for layout navigation |    [View →](https://vibe-ui-kit.vercel.app/docs/components/menubar)    |

### 🔔 Feedback & Status (11)

| Component    | Description                                        |                               Docs                                |
| :----------- | :------------------------------------------------- | :---------------------------------------------------------------: |
| **Progress** | Animated progress bars with gradient indicators    | [View →](https://vibe-ui-kit.vercel.app/docs/components/progress) |
| **Skeleton** | Content loading placeholders with shimmer effects  | [View →](https://vibe-ui-kit.vercel.app/docs/components/skeleton) |
| **Badge**    | Status indicators with glow and preset variations  |  [View →](https://vibe-ui-kit.vercel.app/docs/components/badge)   |
| **Alert**    | Callout messages with severity states              |  [View →](https://vibe-ui-kit.vercel.app/docs/components/alert)   |
| **Tooltip**  | Hover informational overlays                       | [View →](https://vibe-ui-kit.vercel.app/docs/components/tooltip)  |
| **Toast**    | Notification toasts with actions and swipe dismiss |  [View →](https://vibe-ui-kit.vercel.app/docs/components/toast)   |
| **Calendar** | Date picker calendar with range and day states     | [View →](https://vibe-ui-kit.vercel.app/docs/components/calendar) |
| **Kbd**      | Inline keyboard shortcut indicators                |   [View →](https://vibe-ui-kit.vercel.app/docs/components/kbd)    |
| **Marker**   | Highlighting triggers for alerts and search scopes |  [View →](https://vibe-ui-kit.vercel.app/docs/components/marker)  |
| **Message**  | Chat notification bubbles and messages             | [View →](https://vibe-ui-kit.vercel.app/docs/components/message)  |
| **Spinner**  | Shimmer loaders and spinner indicator icons        | [View →](https://vibe-ui-kit.vercel.app/docs/components/spinner)  |

### 📊 Data Display & Navigation (10)

| Component            | Description                                                |                                   Docs                                    |
| :------------------- | :--------------------------------------------------------- | :-----------------------------------------------------------------------: |
| **Avatar**           | User avatars with glow rings and initial fallbacks         |      [View →](https://vibe-ui-kit.vercel.app/docs/components/avatar)      |
| **Breadcrumb**       | Responsive navigation breadcrumbs with separators          |    [View →](https://vibe-ui-kit.vercel.app/docs/components/breadcrumb)    |
| **Pagination**       | Page navigation with active states and ellipsis            |    [View →](https://vibe-ui-kit.vercel.app/docs/components/pagination)    |
| **Carousel**         | Slide carousels with autoplay and navigation               |     [View →](https://vibe-ui-kit.vercel.app/docs/components/carousel)     |
| **Infinite Scroll**  | Scroll loaders with pagination and dynamic checks          | [View →](https://vibe-ui-kit.vercel.app/docs/components/infinite-scroll)  |
| **Item**             | Configurable catalog or items lists layouts                |       [View →](https://vibe-ui-kit.vercel.app/docs/components/item)       |
| **Marquee**          | Sliding logo walls and loop marquees                       |     [View →](https://vibe-ui-kit.vercel.app/docs/components/marquee)      |
| **Message Scroller** | Container streams with message history listings            | [View →](https://vibe-ui-kit.vercel.app/docs/components/message-scroller) |
| **Text Glitch**      | Animated title headers with cyber glitch effects           |   [View →](https://vibe-ui-kit.vercel.app/docs/components/text-glitch)    |
| **Theme Switcher**   | Toggles resolving dark/light settings across layout frames |  [View →](https://vibe-ui-kit.vercel.app/docs/components/theme-switcher)  |

<br/>

---

## 🎨 4 Visual Presets

Every component supports **4 built-in visual themes** you can toggle with a single `variant` prop:

- `default` — Clean, minimal typography layout
- `glass` — Frosted glassmorphism saturation with high backdrop blur
- `retro` — Warm neobrutalism aesthetics with hard shadows and borders
- `glow` — Neon-lit with color shadow glow aura animations

```tsx
import { Button } from './components/ui/button'
import { Switch } from './components/ui/switch'
import { Card } from './components/ui/card'

export default function Example() {
  return (
    <>
      <Button variant="glow">Neon Button</Button>
      <Switch variant="glass" />
      <Card variant="retro">Retro Card</Card>
    </>
  )
}
```

<br/>

---

## 🔧 CLI Reference

### 1. `init` — Project setup

Initialize the workspace theme configuration and utils helper.

```bash
npx vibe-ui-kit init [options]
```

**Options:**

- `-y, --yes` — Skip interactive prompts and write default config paths (`./src/components/ui`, `./src/lib/utils.ts`, and auto-detected CSS file).

---

### 2. `add` — Install components

Add one or more Vibe UI components to your project.

```bash
npx vibe-ui-kit add [components...] [options]
```

**Arguments:**

- `components` — Component name(s) to add (e.g. `button`, `switch`). Omit to open the interactive picker.

**Options:**

- `-y, --yes` — Skip interactive installation prompts.

<br/>

---

## ❓ Troubleshooting

<details>
<summary><b>TypeScript: Unused variable warnings in component files</b></summary>
<br/>
Some components may generate unused-parameter warnings (e.g., `context` in `avatar.tsx`). Make sure you're using the latest CLI version which resolves these:

```bash
npx vibe-ui-kit@latest add avatar
```

</details>

<details>
<summary><b>TypeScript: Cannot find namespace 'NodeJS'</b></summary>
<br/>
If you see `Cannot find namespace 'NodeJS'` errors related to timer types (e.g., in `tooltip.tsx`), change the type annotation to:

```typescript
// Before
let timer: NodeJS.Timeout

// After
let timer: ReturnType<typeof setTimeout>
```

</details>

<details>
<summary><b>Components not styled correctly</b></summary>
<br/>
Make sure you've:
1. Applied the theme CSS in `src/index.css` (see [Step 5](#step-5--apply-the-theme))
2. Installed `tailwindcss` v4 and the `@tailwindcss/vite` plugin
3. Added the Tailwind plugin to your `vite.config.ts`
</details>

<details>
<summary><b>Import path errors after install</b></summary>
<br/>
The CLI automatically calculates relative import paths. If you changed the install directories, verify that the import in your component files points to the correct `utils.ts` location:

```typescript
// Should match your actual file structure
import { cn } from '../../lib/utils'
```

</details>

<br/>

---

## 🤝 Contributing

Contributions are welcome! Check the [GitHub Repository](https://github.com/jenishCoderkube/Vibe-uI) for issues and pull requests.

---

## 📄 License

MIT © [Vibe UI](https://github.com/jenishCoderkube/Vibe-uI)

<br/>

<p align="center">
  <b>Built with ♥ for developers who care about design.</b><br/>
  <a href="https://vibe-ui-kit.vercel.app/">Documentation</a> · <a href="https://github.com/jenishCoderkube/Vibe-uI">GitHub</a> · <a href="https://www.npmjs.com/package/vibe-ui-kit">npm</a>
</p>
