---
last_mapped_commit: bc5e1ceca49c9ce3840ea2671b6ca1b1a236849b
last_mapped_at: 2026-09-24
---
# Codebase Structure

**Analysis Date:** 2026-09-24

## Directory Layout

```text
vibe-ui/
├── apps/
│   └── docs/                       # Next.js 15 documentation web app & registry host
│       ├── public/                 # Static assets, fonts, icons, generated registry JSON
│       │   └── registry/           # Compiled component & block definitions for CLI
│       └── src/
│           ├── app/                # App Router pages, layouts, metadata & dynamic docs routes
│           ├── components/         # Showcase demos, code previews, navigation, and customizers
│           ├── config/             # Navigation hierarchy, site metadata, and block index
│           ├── content/            # MDX documentation source files
│           ├── lib/                # Documentation helpers, highlighters, registry loaders
│           └── __tests__/          # Vitest suite covering route handlers, SEO, and static generation
├── packages/
│   ├── cli/                        # vibe-ui-kit CLI companion package (Commander.js)
│   │   ├── bin/                    # Executable wrappers
│   │   ├── dist/                   # Compiled CLI JavaScript output
│   │   └── src/                    # CLI commands (init, add, diff, list)
│   ├── registry/                   # Registry generation pipeline
│   │   └── src/                    # Scripts parsing UI components into distribution JSON
│   └── ui/                         # Core component library (vibe-ui)
│       ├── coverage/               # V8 test coverage artifacts
│       └── src/
│           ├── components/         # 92+ reusable UI components & primitives
│           │   └── __tests__/      # Vitest component test suites (86 test specs)
│           ├── hooks/              # Custom React hooks (use-media-query, use-toast, etc.)
│           ├── lib/                # Shared utilities (`cn` class merger via clsx + twMerge)
│           ├── styles/             # Component design tokens & animations
│           ├── test/               # Vitest environment setup and DOM mocks
│           └── types/              # TypeScript definitions & variant types
├── .agents/                        # GSD framework agents, skills, workflows, and core tooling
├── .github/                        # GitHub Actions CI/CD workflows and issue templates
├── .planning/                      # Project intelligence, codebase maps, and phase roadmaps
│   └── codebase/                   # Evidence-backed architectural & technical reference docs
├── package.json                    # Monorepo root manifest (Turborepo + pnpm workspaces)
├── pnpm-workspace.yaml             # Workspace package inclusions
├── turbo.json                      # Turborepo task pipeline (build, dev, lint, test)
├── tsconfig.json                   # Base TypeScript workspace compiler options
└── eslint.config.mjs               # Flat ESLint configuration shared across projects
```

## Directory Purposes

**`packages/ui`:**

- Purpose: The core reusable design system component library published to npm or consumed by docs.
- Contains: React 19 UI components built on Radix primitives, Tailwind CSS v4 variants, Framer Motion, and WebGL/OGL.
- Key files:
  - `packages/ui/src/index.ts`: Public barrel export exporting all components, hooks, and types.
  - `packages/ui/src/lib/utils.ts`: Core `cn()` class merge utility (`clsx` + `tailwind-merge`).
  - `packages/ui/src/test/setup.ts`: JSDOM testing polyfills (ResizeObserver, IntersectionObserver, pointer capture).
  - `packages/ui/vitest.config.ts`: Vitest test configuration for unit tests.

**`apps/docs`:**

- Purpose: Next.js 15 production documentation site, interactive component studio, block previewer, and public registry API host.
- Contains: App router routes, dynamic MDX rendering, interactive playgrounds, demo controls, and SEO metadata.
- Key files:
  - `apps/docs/src/app/layout.tsx`: Root HTML layout with Google Font injection, theme provider, and analytics.
  - `apps/docs/src/app/docs/[[...slug]]/page.tsx`: Universal catch-all documentation route with static generation.
  - `apps/docs/src/config/docs.ts`: Definitive sidebar hierarchy and navigation routing tree.
  - `apps/docs/src/app/sitemap.ts`: Dynamic XML sitemap generator with canonical routing.
  - `apps/docs/src/app/globals.css`: Primary design tokens, theme variables, and Tailwind v4 directives.

**`packages/cli`:**

- Purpose: The `vibe-ui-kit` command line interface for scaffolding and installing components into user applications.
- Contains: Commander-driven CLI entry point, prompts, template extractors, and dependency resolvers.
- Key files:
  - `packages/cli/src/index.ts`: Unified CLI command engine implementing `init`, `add`, and `list`.
  - `packages/cli/package.json`: NPM executable metadata and binary configuration.

**`packages/registry`:**

- Purpose: Build tooling that parses `packages/ui` source files and outputs structured JSON metadata.
- Contains: AST and regex parsers resolving internal dependencies, NPM requirements, and component registry JSONs.
- Key files:
  - `packages/registry/src/index.ts`: Generator script compiling registry metadata into `apps/docs/public/registry`.

## Key File Locations

**Entry Points:**

- UI Package: `packages/ui/src/index.ts`
- Documentation Web App: `apps/docs/src/app/page.tsx`
- CLI Tool: `packages/cli/src/index.ts`
- Registry Compiler: `packages/registry/src/index.ts`

**Configuration:**

- Monorepo Tasks: `turbo.json`
- Workspace Definition: `pnpm-workspace.yaml`
- Root Dependencies: `package.json`
- Root Linting: `eslint.config.mjs`
- Root Formatting: `.prettierrc`
- Documentation Site Config: `apps/docs/src/config/docs.ts`
- Documentation Next.js Config: `apps/docs/next.config.mjs`

**Core Logic:**

- Class Merging Utility: `packages/ui/src/lib/utils.ts`
- Component Primitives: `packages/ui/src/components/*.tsx`
- Documentation Dynamic Loader: `apps/docs/src/app/docs/[[...slug]]/page.tsx`
- Registry Generation Engine: `packages/registry/src/index.ts`

**Testing:**

- UI Package Test Config: `packages/ui/vitest.config.ts`
- UI Test Harness & Setup: `packages/ui/src/test/setup.ts`
- UI Component Tests: `packages/ui/src/components/__tests__/*.test.tsx`
- Docs App Test Config: `apps/docs/vitest.config.ts`
- Docs Route & SEO Tests: `apps/docs/src/__tests__/*.test.ts`

## Naming Conventions

**Files:**

- React Components: kebab-case with `.tsx` extension (`packages/ui/src/components/button.tsx`, `dialog.tsx`).
- Demo Components: kebab-case with `-demo.tsx` suffix (`apps/docs/src/components/button-demo.tsx`).
- MDX Content: kebab-case with `.mdx` extension (`apps/docs/src/content/docs/introduction.mdx`).
- Test Files: Component name with `.test.tsx` or `.test.ts` suffix located in `__tests__/` (`packages/ui/src/components/__tests__/button.test.tsx`).
- Configurations: kebab-case or standard tool naming (`turbo.json`, `eslint.config.mjs`, `next.config.mjs`).

**Directories:**

- Feature directories: kebab-case (`packages/ui/src/components/`, `apps/docs/src/content/docs/`).
- App Router segments: kebab-case or Next.js route parameters (`apps/docs/src/app/docs/[[...slug]]/`).

## Where to Add New Code

**New UI Component:**

1. Implementation: Add `packages/ui/src/components/[component-name].tsx` using Radix + Tailwind Variants.
2. Export: Export component and its variant types in `packages/ui/src/index.ts`.
3. Test Suite: Add unit test in `packages/ui/src/components/__tests__/[component-name].test.tsx`.
4. Documentation Content: Create MDX file in `apps/docs/src/content/docs/components/[component-name].mdx`.
5. Showcase Demo: Add demo implementation in `apps/docs/src/components/[component-name]-demo.tsx`.
6. Navigation: Register link in `apps/docs/src/config/docs.ts` under the Components group.
7. Registry: Recompile registry via `packages/registry` to distribute component via CLI.

**New Block / Template:**

1. Implementation: Place block code in `apps/docs/src/components/blocks/[block-id].tsx`.
2. Preview Registration: Register route under `apps/docs/src/app/blocks/[block-id]/page.tsx`.
3. Code Snippet: Add code sample string into `apps/docs/src/components/vibe-blocks-code.ts`.
4. Documentation Page: Add MDX guide in `apps/docs/src/content/docs/blocks/[block-id].mdx`.

**Shared Utility Function:**

1. Package Utility: Add to `packages/ui/src/lib/utils.ts` and re-export if needed.
2. Docs Utility: Add to `apps/docs/src/lib/utils.ts` for documentation-specific transformations.

## Special Directories

**`.planning/`:**

- Purpose: Contains GSD framework state, project requirements, milestone tracking, and codebase architecture maps.
- Generated: Maintained by GSD tools and agent runs.
- Committed: Yes (tracked in version control).

**`.agents/`:**

- Purpose: Local agent configurations, skills, and GSD core runtime tools.
- Generated: Installed / updated via GSD package management.
- Committed: Yes.

**`apps/docs/public/registry/`:**

- Purpose: Built JSON files consumed remotely by `vibe-ui-kit` CLI during component installation.
- Generated: Yes (generated by `packages/registry`).
- Committed: Yes (deployed with Vercel to serve live registry endpoints).

**`packages/cli/dist/`:**

- Purpose: Transpiled JavaScript distribution for the CLI binary.
- Generated: Yes (via `pnpm --filter vibe-ui-kit build`).
- Committed: Tracked or packaged during npm publish.

---

*Structure analysis: 2026-09-24*
