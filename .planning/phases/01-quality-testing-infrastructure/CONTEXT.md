# Phase 1 Context: Quality & Testing Infrastructure

**Phase:** 01-quality-testing-infrastructure  
**Status:** Ready to plan / execute  
**Requirements Covered:** `TEST-01`, `TEST-02`, `CLEAN-01`

## Decisions

1. **Test Runner Alignment:** Use Vitest across all monorepo packages (`packages/ui`, `apps/docs`, and now `packages/cli`) for uniform developer experience and `turbo run test` compatibility.
2. **Safe Integration Fixtures:** Use Node's `os.tmpdir()` for CLI filesystem assertions so user directories are never touched during test execution.
3. **Strict Ignore Rules:** Ensure `.gitignore` ignores all future `.tgz` builds and npm lockfiles to maintain repository hygiene.

## Scope Boundaries

- **In Scope:**
  - Setup Vitest in `packages/cli`
  - Write unit tests for CLI argument parsing & commands (`packages/cli/src/__tests__/`)
  - Write integration tests for scaffolding logic
  - Delete `package-lock.json` and `vibe-ui-kit-*.tgz` from `packages/cli`
  - Update `.gitignore`
- **Out of Scope:**
  - Modularizing `packages/cli/src/index.ts` into subcommands (scheduled for Phase 2).
  - Modifying registry AST parser (scheduled for Phase 3).
