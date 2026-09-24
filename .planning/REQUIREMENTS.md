# Requirements: Vibe UI

**Defined:** 2026-09-24  
**Core Value:** Empower developers to build stunning, production-ready web applications with copy-pasteable, CLI-installable animated UI components that pair Radix-grade accessibility with modern aesthetics.

## v1 Requirements

Requirements for active milestone. Each maps to roadmap phases.

### CLI & Testing Infrastructure

- [ ] **TEST-01**: CLI package (`packages/cli`) has automated Vitest unit tests verifying command option parsing.
- [ ] **TEST-02**: CLI package has automated integration tests simulating component scaffolding (`init`, `add`).
- [ ] **CLEAN-01**: Remove committed `vibe-ui-kit-*.tgz` files and rogue `package-lock.json` from `packages/cli`.

### CLI Architecture & Developer Experience

- [ ] **CLI-01**: Decompose `packages/cli/src/index.ts` into discrete command modules (`src/commands/init.ts`, `src/commands/add.ts`, `src/commands/list.ts`).
- [ ] **CLI-02**: Add download checksum verification and safe path validation to prevent code injection or path traversal during component addition.
- [ ] **CLI-03**: Support `--yes` / `--force` flags for non-interactive component installation in CI/CD environments.

### Registry & Tooling Pipeline

- [ ] **REG-01**: Modernize dependency parsing in `packages/registry/src/index.ts` to utilize TypeScript AST parsing instead of fragile regular expressions.
- [ ] **REG-02**: Add CI validation script verifying that `apps/docs/public/registry` accurately reflects the latest `packages/ui` component exports.

### Documentation Performance & Bundle Optimization

- [ ] **PERF-01**: Refactor monolithic demo code snippet files (`vibe-blocks-code.ts`, `new-components-demos.tsx`) using lazy loading or static raw text imports.
- [ ] **PERF-02**: Audit documentation lighthouse metrics and ensure JavaScript payload on documentation pages remains optimal.

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Interactive Sandboxes

- **SAND-01**: Implement interactive browser-based code editing using Sandpack or WebContainers for live component tinkering.

### Extended Component Sets

- **COMP-01**: Expand WebGL visual backgrounds and add shader controls in component studio.
- **COMP-02**: Add multi-step wizard and form builder application blocks.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Custom backend/database storage | Vibe UI is a client-side component design system and distribution CLI |
| Tailwind CSS v3 backward compatibility | Architecture is designed specifically for Tailwind v4 CSS-first engine |
| Closed-source paid component locks | Components are freely installable open-source building blocks |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| TEST-01 | Phase 1: Quality & Testing Infrastructure | Pending |
| TEST-02 | Phase 1: Quality & Testing Infrastructure | Pending |
| CLEAN-01 | Phase 1: Quality & Testing Infrastructure | Pending |
| CLI-01 | Phase 2: CLI Modularization & DX | Pending |
| CLI-02 | Phase 2: CLI Modularization & DX | Pending |
| CLI-03 | Phase 2: CLI Modularization & DX | Pending |
| REG-01 | Phase 3: Registry Pipeline Reliability | Pending |
| REG-02 | Phase 3: Registry Pipeline Reliability | Pending |
| PERF-01 | Phase 4: Docs Bundle & Performance Optimization | Pending |
| PERF-02 | Phase 4: Docs Bundle & Performance Optimization | Pending |

**Coverage:**
- v1 requirements: 10 total
- Mapped to phases: 10
- Unmapped: 0

---
*Requirements defined: 2026-09-24*  
*Last updated: 2026-09-24 after GSD codebase onboarding*
