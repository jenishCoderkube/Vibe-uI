# Phase 2 Research: CLI Modularization & DX

**Analysis Date:** 2026-09-24  
**Target:** CLI decomposition and security/DX hardening (`CLI-01`, `CLI-02`, `CLI-03`)

## Architecture & Modularization Strategy (`CLI-01`)

Currently `packages/cli/src/index.ts` is 1,551 lines containing:
- Shared utilities: package manager detection, missing dependency detection, AST transpilation, registry fetching.
- 7 distinct commands: `init`, `add`, `list`, `diff`, `info`, `doctor`, `update`.

### Proposed Modular Structure:
```text
packages/cli/src/
├── commands/
│   ├── add.ts          # 'add' command handler
│   ├── diff.ts         # 'diff' command handler
│   ├── doctor.ts       # 'doctor' diagnostics command
│   ├── info.ts         # 'info' component details command
│   ├── init.ts         # 'init' project initialization command
│   ├── list.ts         # 'list' available components command
│   └── update.ts       # 'update' component refresh command
├── utils/
│   ├── constants.ts    # REGISTRY_URL, default paths
│   ├── fs.ts           # Path validation, traversal defense, file writing
│   ├── pm.ts           # getPackageManager, installDependencies, filterMissingDependencies
│   ├── registry.ts     # fetchComponent, fetchRegistryIndex, checksum/integrity
│   └── transpile.ts    # TypeScript to JavaScript transpileModule
└── index.ts            # Program bootstrap, Commander command binding
```

## Security & Path Traversal Mitigation (`CLI-02`)

### 1. Path Traversal Defense
When installing a component or block, the target directory must not escape the designated project boundary:
- Disallow `..` or leading path separators in component filenames.
- Resolve target path against `process.cwd()` and verify `targetPath.startsWith(process.cwd())`.
- Reject invalid characters or absolute paths.

### 2. Payload Integrity Validation
- Validate that returned JSON payloads match the expected `RegistryEntry` schema (`name: string`, `files: Array<{ name, content }>`, `dependencies: string[]`).
- Verify each file content is a non-empty string and does not contain null bytes or malformed characters.

## Non-Interactive CI/CD Mode (`CLI-03`)

- Ensure `--yes` (or `-y`) skips all `prompts()` invocations across all commands:
  - In `init`: uses defaults without prompting for styling/paths.
  - In `add`: automatically accepts default components directory and installs dependencies without prompting.
  - In `update`: automatically updates all specified components without prompt.
- Add `--force` alias for `--overwrite` to align with standard CLI tooling conventions (e.g. `shadcn/ui`).

## Testing Strategy
- Update `packages/cli/src/__tests__/cli.test.ts` to test imported command modules directly.
- Add tests specifically asserting directory traversal attempts are blocked with clear errors.
- Add test verifying `--yes` flag executes non-interactively with defaults.
