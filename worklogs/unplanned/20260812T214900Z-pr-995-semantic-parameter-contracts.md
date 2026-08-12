---
title: Complete semantic parameter contracts across Nook web
feature: unplanned
issue: issues/unplanned/nook-web-typescript-api-discipline.md
plan: plans/unplanned/20260812T081300Z-complete-semantic-parameter-contracts.md
nook_pr: meta-secret/nook#995
status: completed
started_at: 2026-08-12T08:13:00Z
finished_at: 2026-08-12T21:49:00Z
agent: codex
---

# Complete semantic parameter contracts across Nook web

## Outcome

Completed the final main-vault and shared-vault migration to named semantic
parameter contracts. Global static enforcement now rejects anonymous object
parameter types and raw object call arguments across production Nook web.

## Progress

- Migrated vault components, helpers, state, and orchestration boundaries.
- Preserved Rust-generated domain values instead of TypeScript schema mirrors.
- Kept extension persistence and vault sync decisions in Rust/WASM.
- Made the numeric WASM representation of `ExtensionPersistenceArea` explicit
  while retaining the Rust enum as the domain value.
- Updated Cortex, the executable skill, ESLint configuration, checker tests,
  and repository invariants for the all-production-web scope.
- Addressed and resolved every actionable review thread before merge.

## Implementation problems

- A broad mechanical migration introduced duplicate contract names, one stale
  Sentinel compatibility export, and a mismatched field name. Exact type and
  review feedback identified them; each contract was renamed or aligned.
- The sealed formatter identified eleven TypeScript files missed locally.
  Formatting was applied to those exact files and revalidated.
- Preflight still expected the former partial-enforcement setting. The stale
  invariant was updated to require global enforcement.
- Hosted validation encountered transient BuildKit EOF and Task download socket
  failures. The unchanged exact head passed after retriggering.

## Decisions

- Parameter contracts use domain-specific names. Generic `Args`, `object`,
  `unknown`, and value-bag substitutes are not accepted.
- Shared cleanup code depends on the narrow `free()` allocation capability,
  not a TypeScript union that mirrors Rust-generated secret classes.
- `ExtensionPersistenceArea` remains a Rust enum. Its custom Serde conversion
  is confined to the numeric WASM transport adapter.

## Validation

- PR 995 exact head `669538e056800ac804367836cad19dd6a02c3811`.
- Full validation run 31625799287 passed Native Rust, WASM build, WASM Node,
  web verification, UI demo, Rust ecosystem checks, aggregate Verify/preview,
  coverage, Loom, and source architecture.
- `task pr:ready PR=995` reported ready with zero unresolved conversations.
- Squash merge: `e31928ae95b486b3b02a1c7895fef6b5c25f9f99`.

## Remaining work

None.
