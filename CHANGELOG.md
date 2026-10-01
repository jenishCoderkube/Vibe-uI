# Changelog

All notable changes to the Vibe UI project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- **`pricing-01` Application Block**: High-converting SaaS pricing and tier matrix featuring monthly/annual savings toggle, strikethrough original price indicators, real-time annual savings calculator, live multi-currency switcher (USD, EUR, GBP), feature matrix comparison table, FAQ accordion, and interactive slide-over checkout drawer. Built with 100% pure Vibe UI primitives.
- **`kanban-01` Application Block**: Full-width, multi-viewport responsive agile sprint board featuring 4 workflow swimlanes, subtask checklists, priority badges, member workload allocation, interactive task creation modal with React Hook Form, drawer inspector, and real-time sprint analytics.
- **Authentic Block Previews**: Captured pixel-perfect 1200×800 live browser screenshots of all blocks in Vibe UI's default theme without placeholder mockups or foreign branding.

### Fixed

- **Dialog & Sheet Pointer-Events Freeze**: Fixed an issue where closing or canceling a modal/drawer left `pointer-events: none` stuck on `document.body`. Enforced canonical `<DialogClose asChild>` / `<SheetClose asChild>`, added primitive unmount cleanup in `DialogContent` and `SheetContent`, and introduced a global CSS `:not(:has(...))` fail-safe.
- **Blocks Page Light Mode Contrast**: Corrected block thumbnail gradient overlays from `from-background/30` to `from-zinc-950/40` to prevent blurry white haze in light theme.

### Changed

- Rebuilt and validated the `@vibe-ui/registry` with 94 self-contained components and blocks with 100% dependency integrity.
- Created `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`.
- Set up unit testing using **Vitest** and **React Testing Library** in `packages/ui`.
- Added smoke tests for `Button`, `Dialog`, and `Accordion` components.
- Added GitHub Actions workflows for continuous integration (`ci.yml`) and package publication (`publish.yml`).
- Renamed React package from `@custom-ui/ui` to `vibe-ui` and removed its `private` status.
- Renamed Registry package from `@custom-ui/registry` to `@vibe-ui/registry`.
- Updated all monorepo dependencies and imports to reference `vibe-ui`.
- Updated the registry build script to run compile outputs automatically on build.

---

## [0.1.20] - 2026-08-10

### Added

- Added CLI command updates and auto-detection configurations for Tailwind theme setups.

---

## [0.1.3] - 2026-06-15

### Added

- Initial collection of core themed components (Button, Switch, Card, Dialog, Accordion, etc.) featuring `glass`, `retro`, `glow`, and `cyberpunk` variants.
- Integrated Tailwind CSS v4 custom theme mappings and utility configurations.
