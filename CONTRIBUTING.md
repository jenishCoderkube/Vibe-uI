# Contributing to Vibe UI 🚀

First off, thank you for taking the time to contribute to Vibe UI! It is contributions from developers like you that make open-source software a great ecosystem.

This document outlines the guidelines and workflows for contributing code, components, documentation, and bug fixes to Vibe UI.

---

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

---

## Monorepo Architecture

Vibe UI is structured as a monorepo powered by **pnpm workspaces** and **Turborepo**:

- **`packages/ui`**: The core React component library containing the component source files.
- **`packages/cli`**: The Command Line Interface (`vibe-ui-kit`) used to initialize configurations and add component source code directly to projects.
- **`packages/registry`**: The component metadata parser and builder that compiles local files into the CLI-accessible registry schema.
- **`apps/docs`**: The Next.js based documentation and playground site.

---

## Getting Started (Local Setup)

To set up a local development environment, make sure you have **Node.js v18+** and **pnpm v9+** installed.

1.  **Clone the Repository**:

    ```bash
    git clone https://github.com/jenishCoderkube/Vibe-uI.git
    cd Vibe-uI
    ```

2.  **Install Dependencies**:

    ```bash
    pnpm install
    ```

3.  **Start Development Servers**:
    This command starts the compilers for packages and the Next.js docs site concurrently:
    ```bash
    pnpm dev
    ```

---

## Workspace Workflows & Scripts

Use these workspace-wide commands managed by Turborepo:

- **`pnpm build`**: Builds all packages (registry compilations, documentation site static exports, types).
- **`pnpm test`**: Runs the unit test suites across all packages using **Vitest**.
- **`pnpm lint`**: Audits the codebase for syntax or formatting style errors using **ESLint**.
- **`pnpm format`**: Formats all files in the monorepo using **Prettier**.

---

## Developing Components

When designing or modifying components inside `packages/ui/src/components`:

1.  **Accessibility First**: Leverage **Radix UI** primitives where possible to guarantee WAI-ARIA compliance, semantic markup, and robust keyboard navigation.
2.  **Styling**: Use **Tailwind CSS** utilities combined with **Tailwind Variants (`tv`)** for theme variants (`default`, `glass`, `retro`, `cyberpunk`, `glow`).
3.  **Writing Tests**: Add unit tests for your new component inside the same component folder using the `.test.tsx` suffix.
4.  **Registering Components**: If you add a new component, update the dependency list in `packages/registry/src/index.ts` so the CLI compiler maps it correctly, then run `pnpm build` to compile the updated JSON files.

---

## Submitting Pull Requests

1.  Create a feature branch from the `main` branch: `git checkout -b feature/your-feature-name`.
2.  Make your changes, ensuring code is formatted with `pnpm format` and passes type checks.
3.  Verify that `pnpm test` and `pnpm lint` pass cleanly.
4.  Commit your work clearly following semantic versioning concepts.
5.  Push your branch and open a Pull Request against `main`. Provide a description of the changes and screenshots/recordings of any UI modifications.
