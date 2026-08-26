# Repair module integration policy

## Goal

Restore a green `main` repository-policy run after PR #1159 introduced two authored `undefined` occurrences in the module-integration test fixture.

## Scope

- Replace the optional global fixture with explicit tracked fixture state.
- Preserve cleanup behavior and all module-integration runtime behavior.
- Validate formatting, Loom policy, and the focused module-delivery tests.

## Exclusions

- No module integration behavior changes.
- No executable-skill registry work.
- No Docker, Podman, DinD, nested runtime, or container socket work.

## Acceptance evidence

- `task format`
- `BASE_REF=origin/main task loom:pre-push`
- clean advisory local Codex review
- exact-head remote `preflight`
- successful repository-policy run on the repair PR and merged `main`
