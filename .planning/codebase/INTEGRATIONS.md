---
last_mapped_commit: bc5e1ceca49c9ce3840ea2671b6ca1b1a236849b
last_mapped_at: 2026-09-24
---
# External Integrations

**Analysis Date:** 2026-09-24

## APIs & External Services

**Email Delivery:**

- Resend API - Dispatches contact messages from `/contact` page
  - Endpoint: `apps/docs/src/app/api/contact/route.ts`
  - Auth: `RESEND_API_KEY` (secret)
  - Target: `CONTACT_RECEIVER_EMAIL`

**Dynamic OpenGraph Generation:**

- `@vercel/og` Edge API - Real-time social card generation (`1200x630`)
  - Endpoint: `apps/docs/src/app/api/og/route.tsx`
  - Runtime: `edge`
  - Fonts: Inter SemiBold & Bold loaded via `fetch`

**Analytics & Tracking:**

- Google Analytics 4 (GA4) - Client-side visitor measurement
  - Integration: `next/script` in `apps/docs/src/app/layout.tsx`
  - Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID` (fallback: `G-7D6P1RZKG1`)

**Search Engine Integrations:**

- Google Search Console - Site ownership and sitemap indexation
  - Verification Token: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (`apps/docs/src/app/layout.tsx`)
  - Sitemap URL: `https://vibe-ui-kit.vercel.app/sitemap.xml`
  - Robots policy: `https://vibe-ui-kit.vercel.app/robots.txt`

## Data Storage

**Databases:**

- None (Static SSG and file-based MDX content repository)
- Registry components defined as JSON objects in `packages/registry/`

**File Storage:**

- Local filesystem only (`apps/docs/src/content/docs/*.mdx`)
- Public assets in `apps/docs/public/`

**Caching:**

- Vercel Edge Cache (ISR & static prerendering via `next build`)
- Turborepo local build caching (`.turbo/`)

## Authentication & Identity

**Auth Provider:**

- No server-side auth provider required (public documentation and UI component library)
- Preview auth block demo (`apps/docs/src/components/blocks/auth-01/`) implements client-side Framer Motion authentication UI mockups

## Monitoring & Observability

**Error Tracking:**

- Next.js default error boundary (`apps/docs/src/app/error.tsx` / `not-found.tsx`)

**Logs:**

- Vercel runtime server logs for edge functions (`/api/og`, `/api/contact`)

## CI/CD & Deployment

**Hosting:**

- Vercel Production Deployment: `https://vibe-ui-kit.vercel.app`

**Package Publishing:**

- npm Registry:
  - `vibe-ui` (`https://www.npmjs.com/package/vibe-ui`)
  - `vibe-ui-kit` (`https://www.npmjs.com/package/vibe-ui-kit`)
  - `@vibe-ui/registry` (`https://www.npmjs.com/package/@vibe-ui/registry`)

## Environment Configuration

**Required env vars:**

- `NEXT_PUBLIC_APP_URL` or `VERCEL_URL` (production domain base)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (GSC verification)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional, for analytics)
- `RESEND_API_KEY` (contact form dispatch)
- `CONTACT_RECEIVER_EMAIL` (recipient of contact submissions)

**Secrets location:**

- Vercel Project Environment Variables dashboard
- Local `.env.local` (git-ignored)

## Webhooks & Callbacks

**Incoming:**

- None

**Outgoing:**

- Resend API dispatch on contact form submit

---

*Integration audit: 2026-09-24*
