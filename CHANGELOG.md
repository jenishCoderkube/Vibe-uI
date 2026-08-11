# Changelog

All notable changes to the Vibe UI project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- Created `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`.
- Set up unit testing using **Vitest** and **React Testing Library** in `packages/ui`.
- Added smoke tests for `Button`, `Dialog`, and `Accordion` components.
- Added GitHub Actions workflows for continuous integration (`ci.yml`) and package publication (`publish.yml`).

### Changed

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
