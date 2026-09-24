---
last_mapped_commit: bc5e1ceca49c9ce3840ea2671b6ca1b1a236849b
last_mapped_at: 2026-09-24
---
# Coding Conventions

**Analysis Date:** 2026-09-24

## Naming Patterns

**Files:**

- React components: kebab-case with `.tsx` extension (`packages/ui/src/components/button.tsx`, `packages/ui/src/components/alert-dialog.tsx`).
- Demo components: kebab-case with `-demo.tsx` suffix (`apps/docs/src/components/button-demo.tsx`).
- Documentation pages: kebab-case with `.mdx` extension (`apps/docs/src/content/docs/introduction.mdx`).
- Test files: Target file name with `.test.tsx` or `.test.ts` suffix in `__tests__/` directories (`packages/ui/src/components/__tests__/button.test.tsx`, `apps/docs/src/__tests__/docs-page.test.ts`).
- Utility modules: kebab-case with `.ts` extension (`packages/ui/src/lib/utils.ts`, `apps/docs/src/lib/registry.ts`).

**Functions:**

- Utility & helper functions: camelCase (`cn()`, `getInternalDependencies()`, `extractToc()`).
- React components: PascalCase (`Button`, `AlertDialogContent`, `BlockPreview`).
- React hooks: camelCase prefixed with `use` (`useMediaQuery`, `useToast`, `useMobile`).
- Route handlers & static generators: camelCase (`generateStaticParams`, `generateMetadata`).

**Variables:**

- Local variables and parameters: camelCase (`groupContext`, `itemValue`, `isActive`).
- Constants and global directories: UPPER_SNAKE_CASE (`COMPONENTS_DIR`, `OUTPUT_DIR`, `IS_REACT_ACT_ENVIRONMENT`).
- Tailwind variant configurations: camelCase ending in `Variants` (`buttonVariants`, `badgeVariants`).

**Types & Interfaces:**

- Component props: PascalCase ending in `Props` (`ButtonProps`, `AccordionItemProps`).
- Context interfaces: PascalCase ending in `ContextValue` (`ButtonGroupContextValue`).
- Data contracts: PascalCase (`SidebarNavItem`, `RegistryEntry`, `RegistryFile`).

## Code Style

**Formatting:**

- Controlled by Prettier (`.prettierrc`):
  - Semicolons: `false` (no semicolons)
  - Quotes: `singleQuote: true`
  - Indentation: `tabWidth: 2` (2 spaces)
  - Trailing commas: `trailingComma: "all"`
  - Print width: `printWidth: 80`
- Format command: `pnpm format` runs `prettier --write "**/*.{ts,tsx,js,jsx,json,md}"`.

**Linting:**

- Controlled by ESLint v9 Flat Config (`eslint.config.mjs`):
  - Uses `@eslint/js` and `typescript-eslint`.
  - `@typescript-eslint/no-unused-vars`: `warn` with `{ argsIgnorePattern: '^_' }`.
  - `@typescript-eslint/no-explicit-any`: `'off'` (permissive for complex polymorphic component props and dynamic registry parsing).
  - `@typescript-eslint/no-require-imports`: `'off'`.
  - `prefer-const`: `'warn'`.

## Import Organization

**Order:**

1. Directives: `'use client'` or `'use server'` at line 1 when applicable.
2. React & Node core modules: `import * as React from 'react'`, `import path from 'path'`.
3. External dependencies:
   - Radix UI primitives (`@radix-ui/react-slot`, `@radix-ui/react-dialog`)
   - Styling libraries (`tailwind-variants`, `clsx`, `tailwind-merge`)
   - Icons & animation (`lucide-react`, `motion/react`)
4. Internal aliases & relative imports:
   - Monorepo aliases (`@/components/...`, `@/lib/...`)
   - Relative imports (`../lib/utils`, `./button`)

**Path Aliases:**

- `packages/ui`: `@/*` maps to `./src/*` (configured in `packages/ui/tsconfig.json` and `packages/ui/vitest.config.ts`).
- `apps/docs`: `@/*` maps to `./src/*` (configured in `apps/docs/tsconfig.json`).

## Error Handling

**Patterns:**

- **Next.js 15 Routing:** In server components and dynamic catch-all pages (`apps/docs/src/app/docs/[[...slug]]/page.tsx`), invalid slugs trigger `notFound()`. Any error boundary or try-catch wrapping this logic must rethrow errors matching `digest === 'NEXT_NOT_FOUND'` to preserve proper HTTP 404 responses.
- **Directory Traversal Defense:** Slugs and user-controlled paths are sanitized against path traversal (`..` or backslashes) before filesystem resolution.
- **CLI Commands:** CLI command handlers in `packages/cli/src/index.ts` catch runtime exceptions, log human-readable diagnostic messages with actionable remediation instructions, and exit with code `1`.
- **Component Edge Cases:** Fallback components (e.g. `Empty`, `Skeleton`, or error boundaries) are rendered when required props or data fetching is incomplete.

## Logging

**Framework:**

- Built-in `console` methods (`console.log`, `console.warn`, `console.error`).
- CLI tooling uses colored terminal outputs via ANSI escape codes or chalk formatting.

**Patterns:**

- Production client components do not log info or debug messages to avoid polluting end-user browser consoles.
- Testing setup suppresses noisy third-party warnings (e.g. Recharts JSDOM dimension warnings via `packages/ui/src/test/setup.ts`).

## Comments

**When to Comment:**

- Explain non-obvious browser polyfills or JSDOM limitations (e.g., in `packages/ui/src/test/setup.ts` detailing why pointer capture and ResizeObserver need mocking).
- Explain regex logic for AST/code parsing in `packages/registry/src/index.ts`.
- Document workarounds for React 19 / Next.js 15 migration subtleties (e.g., asynchronous `params` in Page props).

**JSDoc/TSDoc:**

- Used on public exported UI primitives and custom hooks to document prop variations, default behaviors, and usage examples.

## Function Design

**Size:**

- Single-purpose functions under 50 lines are standard.
- Complex stateful UI components decompose internal logic into focused subcomponents or custom hooks.

**Parameters:**

- Destructuring with defaults is standard:
  ```typescript
  const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => { ... }
  )
  ```
- Component props extend standard HTML attributes plus `VariantProps<typeof ...Variants>` for full type safety.

**Return Values:**

- Server functions and async handlers return explicit types or promises with predictable failure states.
- Components return `JSX.Element` or `React.ReactNode`.

## Module Design

**Exports:**

- Named exports are preferred across components and utilities (`export const Button`, `export function cn`).
- Next.js route segments require default exports for pages and layouts (`export default function DocsPage`).

**Barrel Files:**

- `packages/ui/src/index.ts` is the central barrel file for the component library, re-exporting all 92+ components, types, and hooks for clean consumer imports (`import { Button, Dialog } from 'vibe-ui'`).

---

*Convention analysis: 2026-09-24*
