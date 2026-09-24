---
last_mapped_commit: bc5e1ceca49c9ce3840ea2671b6ca1b1a236849b
last_mapped_at: 2026-09-24
---
# Technology Stack

**Analysis Date:** 2026-09-24

## Languages

**Primary:**

- TypeScript 5.7+ - Core language used across all packages (`packages/ui`, `apps/docs`, `packages/cli`, `packages/registry`)
- TSX - React components and MDX documentation blocks

**Secondary:**

- JavaScript (Node.js CommonJS/ESM) - Build scripts and tooling shims (`.agents/gsd-core/bin/gsd-tools.cjs`)
- GLSL / Shaders - WebGL fragment and vertex shaders in OGL components (`packages/ui/src/components/web-threads.tsx`, `lightfall.tsx`)
- CSS - Tailwind CSS v4 directives (`apps/docs/src/app/globals.css`)

## Runtime

**Environment:**

- Node.js >= 20.x
- Target: ES2022

**Package Manager:**

- pnpm 9.15.2 (configured via `pnpm-lock.yaml` and Turborepo workspace)
- Monorepo orchestration: Turborepo 2.10.8 (`turbo.json`)
- Lockfile: `pnpm-lock.yaml` (present and active)

## Frameworks

**Core:**

- Next.js 15.0.0 (`apps/docs/package.json`) - Documentation website, application block showcase, static generation, API routes (`/api/og`, `/api/contact`)
- React 19.0.0 / React-DOM 19.0.0 (`packages/ui/package.json`, `apps/docs/package.json`) - Core UI view library
- Radix UI (`@radix-ui/react-*`) - Headless accessible UI primitives for accordion, dialog, popover, dropdown, tooltip, tabs
- Motion (`motion` 12.43.0 / Framer Motion) - Fluid animations, layout transitions, gesture physics
- OGL 1.0.11 - Minimal WebGL library for GPU shader canvases (`packages/ui/src/components/web-threads.tsx`, `sliced-waves.tsx`)
- Tailwind CSS v4.3.2 (`@tailwindcss/postcss`) - Zero-config utility-first styling engine

**CLI & Registry:**

- Commander - CLI argument parsing for `vibe-ui-kit` (`packages/cli/package.json`)
- Zod 3.23.8 - Schema validation for CLI configurations and form validation
- React Hook Form 7.53.0 - Form management

**Testing:**

- Vitest 1.6.1 (`packages/ui/vitest.config.ts`, `apps/docs/vitest.config.ts`) - Unit and component test runner
- Testing Library (`@testing-library/react` 16.0.0, `@testing-library/jest-dom`) - React component testing
- JSDOM 24.1.3 - DOM environment emulation

**Build/Dev:**

- Turborepo 2.10.8 (`turbo.json`) - Workspace task orchestrator (`dev`, `build`, `lint`, `test`)
- Vite (`@vitejs/plugin-react` 4.2.1) - Vitest compilation plugin
- ESLint 9.17.0 (`eslint.config.mjs`) - Code quality and linting
- Prettier - Code formatting

## Key Dependencies

**Critical:**

- `vibe-ui` (`workspace:^`) - The core UI component package imported by the docs app and published to npm
- `vibe-ui-kit` - The npm CLI package (`npx vibe-ui-kit add <component>`)
- `next-mdx-remote` 6.0.0 (`apps/docs/package.json`) - Dynamic runtime MDX rendering for component documentation
- `remark-gfm` 4.0.1 - GitHub-flavored Markdown plugin for MDX tables and task lists

**Infrastructure:**

- `@vercel/og` (built into `next/og`) - Dynamic OpenGraph image generation on edge runtime (`apps/docs/src/app/api/og/route.tsx`)
- `next-themes` 0.4.6 - Dark mode and theme customizer provider (`apps/docs/src/app/providers.tsx`)
- `recharts` 2.15.0 - Data visualization and charts in crypto/analytics blocks
- `tailwind-merge` 3.6.0 & `clsx` 2.1.1 - Class name conflict resolution helper (`packages/ui/src/lib/utils.ts`)

## Configuration

**Environment:**

- Environment variables configured via `.env.local`
- Required variables:
  - `NEXT_PUBLIC_APP_URL` or `VERCEL_URL` (canonical URL generation)
  - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (Search Console verification)
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (Google Analytics tracking)
  - `RESEND_API_KEY` & `CONTACT_RECEIVER_EMAIL` (contact form dispatch)

**Build:**

- `turbo.json` - Pipeline definitions with cache keys and task dependencies
- `pnpm-workspace.yaml` - Workspace packages definition (`packages/*`, `apps/*`)
- `tsconfig.json` - Root TypeScript base configuration extended by child packages
- `apps/docs/postcss.config.mjs` - PostCSS setup with `@tailwindcss/postcss`

## Platform Requirements

**Development:**

- Node.js 20.x or higher, pnpm 9.x
- Windows, macOS, or Linux

**Production:**

- Vercel (Edge & Serverless Next.js Hosting) at `https://vibe-ui-kit.vercel.app`
- npm Registry for package releases (`vibe-ui` and `vibe-ui-kit`)

---

*Stack analysis: 2026-09-24*
