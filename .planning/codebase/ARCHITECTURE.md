---
last_mapped_commit: bc5e1ceca49c9ce3840ea2671b6ca1b1a236849b
last_mapped_at: 2026-09-24
---
<!-- refreshed: 2026-09-24 -->

# Architecture

**Analysis Date:** 2026-09-24

## System Overview

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                    Apps Layer: Next.js Documentation                     │
│                  `apps/docs/src/app` (Next.js 15 App Router)             │
├───────────────────┬─────────────────────┬───────────────────────────────┤
│  Landing & Hubs   │   Component Docs    │       Application Blocks      │
│  `app/landing`    │  `app/docs/[[..slug]]`│    `app/blocks/[blockName]`   │
│  `app/studio`     │  `src/content/docs` │    `src/components/blocks/`   │
└─────────┬─────────┴──────────┬──────────┴──────────────┬────────────────┘
          │                    │                         │
          ▼                    ▼                         ▼
┌─────────────────────────────────────────────────────────────────────────┐
│              Package Layer: UI Primitives & Registry Definitions         │
├─────────────────────────────────────────┬───────────────────────────────┤
│           `packages/ui` (vibe-ui)       │   `packages/registry`         │
│  92+ Headless Radix Primitives,         │   Component registry schemas, │
│  Tailwind v4 classes, Motion animations,│   dependencies, & metadata    │
│  WebGL Shaders (OGL)                    │                               │
└─────────────────────────┬───────────────┴───────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                       CLI Layer: Developer Tooling                      │
│        `packages/cli` (vibe-ui-kit — `npx vibe-ui-kit add <name>`)      │
│        Scaffolds components directly into consumers' projects           │
└─────────────────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component / Layer | Responsibility | File / Path |
|---|---|---|
| **Core UI Library** | Headless primitives, variant styles, animations, shaders | `packages/ui/src/components/` |
| **Documentation App** | Interactive playground, previews, MDX guides, search | `apps/docs/src/` |
| **Blocks Showcase** | Multi-screen application templates (dashboards, e-com, crypto) | `apps/docs/src/components/blocks/` |
| **CLI Scaffolder** | Downloads and writes component files into consumer apps | `packages/cli/src/` |
| **Registry Store** | Index of available components, types, and dependencies | `packages/registry/` |

## Pattern Overview

**Overall:** Monorepo Component Design System with Next.js App Router Documentation.

**Key Characteristics:**

- **Compound Components**: Built on Radix UI primitives (`Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`).
- **Copy-Paste Architecture**: Similar to shadcn/ui, components can be consumed via npm (`vibe-ui`) or directly installed as source files via `npx vibe-ui-kit add`.
- **Hybrid Rendering (SSG + Client Island Previews)**: Route handlers render static HTML (`generateStaticParams`) with interactive client components (`'use client'`) isolated inside interactive demo containers (`apps/docs/src/components/component-preview.tsx`).

## Layers

**UI Primitives (`packages/ui`):**

- Purpose: Provides reusable, accessible React components with minimal internal state.
- Location: `packages/ui/src/components/`
- Contains: Individual TSX component files, test files in `__tests__/`, and utility `src/lib/utils.ts`.
- Depends on: Radix UI primitives, Motion, OGL.
- Used by: `apps/docs`, consumers of `@vibe-ui/react`.

**Documentation Content (`apps/docs/src/content/docs`):**

- Purpose: Authoritative usage documentation, props tables, and code snippets in Markdown/MDX.
- Location: `apps/docs/src/content/docs/`
- Contains: `.mdx` files categorized by `components/`, `animations/`, `backgrounds/`, `comparisons/`, `installation/`.

**Dynamic Route Handlers (`apps/docs/src/app`):**

- Purpose: Dynamic catch-all routing for documentation (`/docs/[[...slug]]`) and blocks (`/blocks/[blockName]`).
- Location: `apps/docs/src/app/`
- Contains: `page.tsx`, `layout.tsx`, `not-found.tsx`, and API routes (`/api/og`, `/api/contact`).

## Data Flow

### Primary Documentation Request Path

1. User or search engine requests `/docs/components/accordion`
2. Next.js App Router resolves to `apps/docs/src/app/docs/[[...slug]]/page.tsx`
3. `generateMetadata` reads `apps/docs/src/content/docs/components/accordion.mdx`, extracts `# Heading`, and sets canonical URL and OpenGraph metadata.
4. `DocsPage` validates file existence, strips frontmatter, parses TOC headings, and renders via `MDXRemote` with custom preview components (`ComponentPreview`, `ComponentHeader`).

### Application Block Preview Path

1. User requests `/blocks/ecommerce-01`
2. Route resolves to `apps/docs/src/app/blocks/[blockName]/page.tsx`
3. `generateStaticParams` verifies slug from `VALID_BLOCK_SLUGS` (`apps/docs/src/app/blocks/[blockName]/blocks-data.ts`)
4. Page renders `BlockDetailView` wrapping the responsive block preview and code inspector.

## Key Abstractions

**`cn(...)` Class Merging:**

- Purpose: Merges Tailwind CSS classes without conflict using `clsx` and `tailwind-merge`.
- Location: `packages/ui/src/lib/utils.ts`, `apps/docs/src/lib/utils.ts`

**`ComponentHeader`:**

- Purpose: Displays interactive title, copyable CLI install command (`npx vibe-ui-kit add`), and external API documentation links.
- Location: `apps/docs/src/components/component-header.tsx`

**`ComponentPreview` & `ComponentPlayground`:**

- Purpose: Renders live interactive components alongside copyable JSX source tabs.
- Location: `apps/docs/src/components/component-preview.tsx`, `apps/docs/src/components/playground.tsx`

## Entry Points

**`packages/ui`:**

- File: `packages/ui/src/index.ts`
- Exports: All public UI components and utilities.

**`apps/docs`:**

- File: `apps/docs/src/app/page.tsx`
- Renders: Full landing page showcase.

**`packages/cli`:**

- File: `packages/cli/src/index.ts`
- CLI executable: `vibe-ui-kit`

## Architectural Constraints

- **Styling**: Tailwind CSS v4 directives without `tailwind.config.js` (managed by CSS variables in `globals.css`).
- **Next.js Version**: Next.js 15 requires async parameter resolution (`const resolvedParams = await params`).
- **Server/Client Boundary**: Server Components by default; interactive components must declare `'use client'` at the file top.

---

*Architecture analysis: 2026-09-24*
