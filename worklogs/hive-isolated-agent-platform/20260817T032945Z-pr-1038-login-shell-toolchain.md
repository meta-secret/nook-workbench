---
title: Restore Hive login-shell Rust tooling
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
plan: plans/hive-isolated-agent-platform/20260817T031233Z-restore-hive-login-shell-toolchain.md
nook_pr: 1038
status: completed
started_at: 2026-08-17T03:12:33Z
finished_at: 2026-08-17T03:29:45Z
agent: codex
---

# Restore Hive login-shell Rust tooling

## Outcome

Merged and deployed PR #1038. Hive worker login shells now retain the Rust
toolchain path required by the mandatory pre-push workflow.

## Progress

- Diagnosed the production-only difference between plain and login-shell PATH.
- Added the Cargo binary directory through `/etc/profile.d` in the worker
  runtime image.
- Added a non-root build-stage proof that a fresh login shell resolves and runs
  both `cargo` and `rustfmt`.
- Deployed the exact merged image and rearmed eligible failed Main-repair roots.

## Implementation problems

- The first regression check only inspected Dockerfile text. Advisory review
  caught that Hive CI did not build the final worker runtime stage. The final
  implementation makes the runtime image inherit a verified toolchain stage
  and exports a marker that CI requires.
- Historical Main-repair roots retained pre-deploy blocked state. Release-scoped
  retries rearmed eligible roots without duplicating active descendants.

## Decisions

- Preserve the login shell used by embedded Codex and explicitly configure its
  Rust PATH instead of changing worker command semantics.
- Prove executables as the non-root Hive user during the image build so a future
  runtime-stage regression fails before deployment.
- Leave existing Hive product PR branches with their durable worker owners.

## Validation

- `task loom:pre-push` passed after the final review fix.
- Hive workflow run 31990748056 passed on exact head
  `610c82cba983dfb75faf863b5bae8d654c2572bd` and printed successful `cargo`
  and `rustfmt` login-shell probes.
- `task loom:pr-land ... ready` returned ready with a current base, green checks,
  and zero unresolved review threads.
- The merged production image is pinned to
  `sha256:2529c818d9887b3ff6572368f19202960e4225d5fe7f43a5bd7ebd3e5c836fb3`.
- Live login-shell and Kata/Bubblewrap sandbox diagnostics passed after rollout.

## Remaining work

- Hive-owned product repair PRs and retained historical Main-repair roots remain
  under active queue reconciliation.
