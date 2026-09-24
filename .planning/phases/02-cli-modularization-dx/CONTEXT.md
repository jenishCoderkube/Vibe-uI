# Phase 2 Context: CLI Modularization & DX

**Phase:** 02-cli-modularization-dx  
**Status:** Ready to plan / execute  
**Requirements Covered:** `CLI-01`, `CLI-02`, `CLI-03`

## Decisions

1. **Clean Command Separation:** Each CLI subcommand (`init`, `add`, `list`, `diff`, `info`, `doctor`, `update`) is encapsulated in its own module under `src/commands/` that exports a registration function: `registerCommand(program: Command)`.
2. **Defensive Path Resolution:** All filesystem operations in `add` and `update` must pass through a strict `validateSafePath(targetDir, fileName)` check to block traversal attempts.
3. **CI/CD Friendliness:** The `--yes` (`-y`) flag must completely bypass interactive prompts, allowing headless automation in GitHub Actions and setup scripts.

## Scope Boundaries

- **In Scope:**
  - Decompose `packages/cli/src/index.ts` into `src/commands/*.ts` and `src/utils/*.ts`.
  - Implement security checks for path traversal.
  - Implement non-interactive flag support and `--force` alias.
  - Expand test suite to test modular commands and security validation.
- **Out of Scope:**
  - Upgrading `packages/registry` parsing logic (scheduled for Phase 3).
  - Documentation demo bundle optimizations (scheduled for Phase 4).
