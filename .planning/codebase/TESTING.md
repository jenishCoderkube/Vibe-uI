---
last_mapped_commit: bc5e1ceca49c9ce3840ea2671b6ca1b1a236849b
last_mapped_at: 2026-09-24
---
# Testing Patterns

**Analysis Date:** 2026-09-24

## Test Framework

**Runner:**

- Vitest v2.1.8
- Config files:
  - Core UI Package: `packages/ui/vitest.config.ts` (JSDOM environment for React components)
  - Documentation Site: `apps/docs/vitest.config.ts` (Node environment for route handlers & static params)

**Assertion Library:**

- Vitest `expect` assertions
- `@testing-library/jest-dom` extensions (`toBeInTheDocument`, `toHaveClass`, `toBeDisabled`)

**Run Commands:**

```bash
pnpm test                         # Run all test suites across packages via Turborepo
pnpm --filter vibe-ui test        # Run unit tests in packages/ui
pnpm --filter @vibe-ui/docs test  # Run route & metadata tests in apps/docs
pnpm --filter vibe-ui test:watch  # Run UI tests in watch mode
pnpm --filter vibe-ui test:coverage # Generate V8 test coverage report
```

## Test File Organization

**Location:**

- UI Components: Isolated test folder under `packages/ui/src/components/__tests__/`.
- Docs Site: Root source test folder under `apps/docs/src/__tests__/`.

**Naming:**

- Component tests: `[component-name].test.tsx` (e.g. `packages/ui/src/components/__tests__/button.test.tsx`).
- Route & handler tests: `[feature].test.ts` (e.g. `apps/docs/src/__tests__/docs-page.test.ts`).

**Structure:**

```text
packages/ui/
└── src/
    ├── components/
    │   ├── button.tsx
    │   └── __tests__/
    │       ├── button.test.tsx
    │       ├── dialog.test.tsx
    │       └── ... (86 test suites)
    └── test/
        └── setup.ts            # Global JSDOM mocks & environment setup

apps/docs/
└── src/
    ├── app/
    └── __tests__/
        ├── docs-page.test.ts   # Route handlers, dynamic params, and SEO
        ├── blocks-page.test.ts # Block catalog generation
        ├── blocks-data.test.ts # Block metadata integrity
        └── robots.test.ts      # Robots configuration & sitemap links
```

## Test Structure

**Suite Organization:**

```typescript
import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../button'

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(
      screen.getByRole('button', { name: /click me/i }),
    ).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole('button', { name: /click me/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies default classes', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('bg-primary')
  })

  it('renders as child slot when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>,
    )
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /link button/i }),
    ).toBeInTheDocument()
  })
})
```

**Patterns:**

- **Setup Pattern:** Handled globally in `packages/ui/src/test/setup.ts` via Vitest `setupFiles`. Sets `globalThis.IS_REACT_ACT_ENVIRONMENT = true`.
- **Assertion Pattern:** Use accessible queries (`getByRole`, `getByText`) with regex pattern matchers (`/click me/i`).
- **Interaction Pattern:** Standard user events via `fireEvent` or `@testing-library/user-event`.

## Mocking

**Framework:**

- Vitest `vi.fn()` and `vi.mock()`.

**Global Browser Polyfills (`packages/ui/src/test/setup.ts`):**

```typescript
// ResizeObserver for Radix UI primitives
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Pointer capture methods for JSDOM
if (typeof window !== 'undefined') {
  window.Element.prototype.hasPointerCapture = () => false
  window.Element.prototype.setPointerCapture = () => {}
  window.Element.prototype.releasePointerCapture = () => {}
}

// matchMedia for responsive hooks & drawer
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Recharts ResponsiveContainer container size mock
vi.mock('recharts', async () => {
  const original = (await vi.importActual('recharts')) as any
  return {
    ...original,
    ResponsiveContainer: ({ children }: any) =>
      React.createElement(
        'div',
        { style: { width: '800px', height: '400px' } },
        children,
      ),
  }
})
```

**What to Mock:**

- Browser APIs not implemented in JSDOM (`ResizeObserver`, `IntersectionObserver`, `matchMedia`, `hasPointerCapture`).
- Heavy charting/SVG layout engines (e.g. `recharts` dimensions).
- Network requests in CLI or telemetry calls.

**What NOT to Mock:**

- Radix UI state machines and compound component coordination.
- `cn()` class merging utility.
- Next.js dynamic routing parameter resolution.

## Fixtures and Factories

**Async Next.js 15 Route Parameters:**

```typescript
// Conforms to Next.js 15 asynchronous params contract
const validParams = Promise.resolve({ slug: ['components', 'accordion'] })
const metadata = await generateMetadata({ params: validParams })
```

**Location:**

- Component-specific mock data is defined locally within each test file.
- Global mocks reside in `packages/ui/src/test/setup.ts`.

## Coverage

**Requirements:**

- No strict minimum enforcement in CI yet, but `packages/ui` maintains test suites for all 86 core components.

**View Coverage:**

```bash
pnpm --filter vibe-ui test:coverage
```

- Configuration (`packages/ui/vitest.config.ts`) exports coverage via `v8` to `text`, `json`, and `html` in `packages/ui/coverage/`.

## Test Types

**Unit Tests (`packages/ui`):**

- Verify accessibility attributes (ARIA roles, states).
- Verify slot rendering (`asChild` delegation).
- Validate disabled states prevent click event dispatching.
- Validate Tailwind CSS variant class applications.

**Integration & Route Tests (`apps/docs`):**

- Verify Next.js 15 `generateStaticParams` builds valid slug trees for all MDX pages.
- Verify path traversal sanitization prevents unauthorized file access.
- Validate `generateMetadata` produces canonical URLs, OpenGraph metadata, and clean title tags without duplicate suffixes.
- Validate robots indexing directives (`noindex, nofollow` on 404 routes).

## Common Patterns

**Async Testing:**

```typescript
it('resolves dynamic route params asynchronously', async () => {
  const params = await generateStaticParams()
  expect(params).toBeDefined()
  expect(Array.isArray(params)).toBe(true)
})
```

**Error Testing:**

```typescript
it('throws or handles missing routes cleanly', async () => {
  const metadata = await generateMetadata({
    params: Promise.resolve({ slug: ['invalid-route'] }),
  })
  expect(metadata.title).toBe('Page Not Found')
  expect(metadata.robots).toEqual({ index: false, follow: false })
})
```

---

*Testing analysis: 2026-09-24*
