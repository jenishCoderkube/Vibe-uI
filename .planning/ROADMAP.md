# Roadmap: Vibe UI

## Overview

A structured execution roadmap addressing technical debt, hardening developer experience across the CLI companion, ensuring registry metadata integrity, and optimizing documentation bundle performance.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3, 4): Planned milestone work
- Decimal phases (1.1, 2.1): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Quality & Testing Infrastructure** - Add automated test suites for CLI and eliminate repository artifact debt
- [ ] **Phase 2: CLI Modularization & DX** - Refactor monolithic CLI codebase into discrete command handlers with input sanitization
- [ ] **Phase 3: Registry Pipeline Reliability** - Upgrade registry parser from regex to AST with automated drift verification
- [ ] **Phase 4: Docs Bundle & Performance Optimization** - Code-split monolithic documentation demo strings and optimize client bundle footprints

---

## Phase Details

### Phase 1: Quality & Testing Infrastructure
**Goal**: Establish automated testing for `packages/cli` and clean up repository artifacts to prevent packaging issues.  
**Depends on**: Nothing (first phase)  
**Requirements**: TEST-01, TEST-02, CLEAN-01  
**Success Criteria** (what must be TRUE):
  1. `packages/cli` runs a Vitest test runner verifying CLI argument parsing and flags.
  2. Integration tests verify that `init` and `add` commands create expected configuration and component files.
  3. Rogue `package-lock.json` and committed `.tgz` archives in `packages/cli` are removed and ignored in `.gitignore`.  
**Plans**: 2 plans

Plans:
- [ ] 01-01: Setup Vitest in `packages/cli` and add unit/integration tests for command handlers.
- [ ] 01-02: Clean up committed tarballs and rogue lockfile, updating `.gitignore` rules.

### Phase 2: CLI Modularization & DX
**Goal**: Refactor `packages/cli/src/index.ts` from a single 1200+ line monolith into structured modules.  
**Depends on**: Phase 1  
**Requirements**: CLI-01, CLI-02, CLI-03  
**Success Criteria** (what must be TRUE):
  1. CLI commands (`init`, `add`, `list`) live in separate modules under `packages/cli/src/commands/`.
  2. Input paths and registry payloads are validated with checksum checks and directory traversal defenses.
  3. `--yes` flag supports non-interactive execution for CI/CD environments.  
**Plans**: 2 plans

Plans:
- [ ] 02-01: Modularize CLI command routing and split subcommands into dedicated modules.
- [ ] 02-02: Add non-interactive flag support and security verification on downloaded components.

### Phase 3: Registry Pipeline Reliability
**Goal**: Upgrade `packages/registry` parsing logic to use true TypeScript AST parsing and ensure synchronization with `packages/ui`.  
**Depends on**: Phase 2  
**Requirements**: REG-01, REG-02  
**Success Criteria** (what must be TRUE):
  1. Registry compiler extracts component and NPM dependencies via AST parsing instead of regular expressions.
  2. An automated verification command validates that `apps/docs/public/registry` accurately reflects all components in `packages/ui`.  
**Plans**: 2 plans

Plans:
- [ ] 03-01: Implement AST-based dependency analyzer for components and blocks.
- [ ] 03-02: Create automated registry sync verification test.

### Phase 4: Docs Bundle & Performance Optimization
**Goal**: Eliminate massive inlined demo code strings from documentation bundles to improve load times and memory footprint.  
**Depends on**: Phase 3  
**Requirements**: PERF-01, PERF-02  
**Success Criteria** (what must be TRUE):
  1. Very large demo code strings (`vibe-blocks-code.ts`, `new-components-demos.tsx`) are code-split or imported via raw asset loaders.
  2. Documentation page transitions remain fast without large client JavaScript payload overhead.  
**Plans**: 2 plans

Plans:
- [ ] 04-01: Refactor large demo code constants into dynamic on-demand imports.
- [ ] 04-02: Validate bundle sizes and verify documentation performance metrics.

---

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Quality & Testing Infrastructure | 0/2 | Not started | - |
| 2. CLI Modularization & DX | 0/2 | Not started | - |
| 3. Registry Pipeline Reliability | 0/2 | Not started | - |
| 4. Docs Bundle & Performance Optimization | 0/2 | Not started | - |

---
*Roadmap defined: 2026-09-24*  
*Last updated: 2026-09-24 after GSD codebase onboarding*
