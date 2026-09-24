# Vibe UI

## What This Is

Vibe UI is a modern, open-source React 19 and Tailwind CSS v4 component library, CLI companion (`vibe-ui-kit`), and interactive documentation platform. It provides 92+ accessible UI primitives, smooth micro-animations, WebGL background shaders, and application blocks with themed styling presets including Glassmorphism, Neon Glow, Retro, and Cyberpunk.

## Core Value

Empower developers to build stunning, production-ready web applications with copy-pasteable, CLI-installable animated UI components that pair Radix-grade accessibility with modern aesthetics.

## Business Context

- **Customer**: Frontend developers, full-stack engineers, and design engineers building Next.js and React applications.
- **Distribution model**: Open-source npm packages (`vibe-ui`, `vibe-ui-kit`) with web documentation and hosted component registry.
- **Success metric**: CLI install adoption, developer satisfaction, component reliability, and documentation performance.

## Requirements

### Validated

- [x] 92+ core UI components with Radix primitives and Tailwind CSS v4 variants (`packages/ui`).
- [x] Documentation portal with live previews, interactive customizer, and MDX documentation (`apps/docs`).
- [x] Automated Vitest testing across UI components and documentation routes (100% green: 228 passing tests).
- [x] Next.js 15 App Router compatibility with clean SEO metadata, dynamic sitemap, and Soft-404 defenses.

### Active

- [ ] **CLI-01**: Modularize `packages/cli/src/index.ts` from a monolith into clean subcommand modules (`init`, `add`, `list`).
- [ ] **CLI-02**: Add automated unit and integration tests for `vibe-ui-kit` commands.
- [ ] **REG-01**: Replace regex-based import parsing in `packages/registry` with robust AST parsing.
- [ ] **PERF-01**: Optimize documentation client bundles by moving large inlined demo code snippets to on-demand imports.
- [ ] **CLEAN-01**: Remove committed `.tgz` archives and rogue `package-lock.json` from `packages/cli`.

### Out of Scope

- Hosting proprietary closed-source component backends (focus is developer-first self-contained registry).
- Supporting legacy Tailwind v3 syntax in core primitives (clean transition to Tailwind v4 CSS-first configuration).

## Context

- **Turborepo monorepo**: Managed via `pnpm` workspaces (`apps/docs`, `packages/ui`, `packages/cli`, `packages/registry`).
- **Modern React & Next.js**: Built on React 19 and Next.js 15 App Router with asynchronous page params.
- **Living Codebase Map**: Documented and verified in `.planning/codebase/`.

## Constraints

- **Framework**: React 19 + Next.js 15 (must conform to async params and forwardRef patterns).
- **Styling**: Tailwind CSS v4 + `tailwind-variants` + `clsx` + `tailwind-merge`.
- **Accessibility**: Built on `@radix-ui/react-*` accessible unstyled primitives.
- **Platform**: Cross-platform CLI compatibility (Windows, macOS, Linux).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Tailwind CSS v4 | CSS-first configuration and dynamic modern CSS variable styling | ✓ Good |
| Radix UI Primitives | Accessible keyboard navigation, focus management, ARIA compliance | ✓ Good |
| Vitest Test Runner | Blazing fast ESM and JSDOM test execution matching Vite/Next stacks | ✓ Good |
| GSD Agent Framework | Structured, evidence-backed roadmap and phase planning | ✓ Good |

---
*Last updated: 2026-09-24 after GSD codebase onboarding*
