# Phase 1 Research: Quality & Testing Infrastructure

**Analysis Date:** 2026-09-24  
**Target:** `packages/cli` testing and repository cleanup (`TEST-01`, `TEST-02`, `CLEAN-01`)

## Technical Approach

### 1. CLI Testing Strategy (`TEST-01`, `TEST-02`)
- **Framework:** Vitest (matches `packages/ui` and `apps/docs`).
- **Environment:** Node (`environment: 'node'`) since `vibe-ui-kit` is a CLI tool doing filesystem and process operations.
- **Unit Testing Commander.js:**
  - Commander programs can be executed in-process without spawning subprocesses by instantiating or invoking Commander commands with custom arguments array `program.parseAsync(args, { from: 'user' })` or testing helper functions directly.
  - To test command output, spy on `console.log`, `console.error`, and intercept `process.exitCode` (or mock `process.exit`).
- **Integration Testing Scaffolding:**
  - Test `init` command: creates `components.json` or target config in a temporary scratch directory created via `fs.mkdtempSync(path.join(os.tmpdir(), 'vibe-cli-test-'))`.
  - Clean up temporary test fixtures in `afterEach` / `afterAll`.

### 2. Artifact Cleanup (`CLEAN-01`)
- **Committed Tarballs:**
  - `packages/cli/vibe-ui-kit-0.1.8.tgz`
  - `packages/cli/vibe-ui-kit-0.1.9.tgz`
  - `packages/cli/vibe-ui-kit-0.1.10.tgz`
  - Must be deleted from disk and git tracking via `git rm`.
- **Rogue Lockfile:**
  - `packages/cli/package-lock.json` must be removed since the root repository uses `pnpm-lock.yaml`.
- **Ignore Rules:**
  - Add `*.tgz` and `package-lock.json` to `.gitignore`.

## Risk Analysis

| Risk | Impact | Mitigation |
| :--- | :--- | :--- |
| Commander `process.exit` kills test runner | High | Mock `process.exit` with `vi.spyOn(process, 'exit').mockImplementation(...)` |
| Monolithic CLI file makes unit isolation tricky | Medium | Test exported command configurations and helper functions; full modularization happens in Phase 2 |
| File pollution during integration tests | Low | Always execute tests inside isolated OS temp directories |

## Recommendation

Split into 2 plans:
- **Plan 01-01**: Add Vitest to `packages/cli`, configure `vitest.config.ts`, and implement unit & integration test suites for `vibe-ui-kit`.
- **Plan 01-02**: Remove rogue `package-lock.json` and `.tgz` archives from `packages/cli`, and update `.gitignore`.
