# Prohibit Rust panic shortcuts

## Goal

Make authored Rust reject `.expect(...)` as firmly as `.unwrap()`, including
test targets. Fallible tests should return a concrete or `anyhow::Result` and
propagate failures with `?`.

## Scope

- Inventory authored Rust `.expect(...)` calls and current workspace lint policy.
- Replace panic-based setup and verification with typed error propagation.
- Deny the relevant Clippy lint across every Rust workspace and target.
- Add repository-level regression coverage for standalone crates and future
  configuration drift.
- Update the canonical Cortex Rust guidance and agent entry point.

## Completion evidence

- Repository inventory contains no authored `.expect(...)` calls.
- Clippy configuration rejects a fixture containing `.expect(...)`.
- Formatting is host-applied and the existing pull request's exact-head GitHub
  Actions checks pass.
