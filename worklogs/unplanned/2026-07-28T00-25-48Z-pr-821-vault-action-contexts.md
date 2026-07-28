---
title: Narrow vault provider and sync action dependencies
feature: unplanned
issue: none
plan: plans/unplanned/2026-07-28T00-18-29Z-vault-action-contexts.md
nook_pr: 821
status: completed
started_at: 2026-07-28T00:18:29Z
finished_at: 2026-07-28T00:25:48Z
agent: codex
---

# Narrow vault provider and sync action dependencies

## Outcome

Extended Nook PR 821 with capability-based dependency boundaries for provider
and synchronization actions. Those modules no longer depend on the complete
vault facade, while the facade remains the composition root and preserves its
existing component-facing API.

## Progress

- Added `ProviderActionsContext` and `SyncActionsContext`.
- Composed context state from the provider, runtime, and session slice types.
- Declared cross-slice orchestration as explicit action ports.
- Replaced every provider and sync action parameter typed as `VaultState`.
- Replaced sync's direct whole-context handoff to local-login actions with the
  narrow `refreshLocalVaultCatalog` facade capability.

## Implementation problems

- The host workspace did not contain installed web dependencies, so the first
  direct package check could not find `svelte-check`. The repository Docker
  task was used for the focused check instead.

## Decisions

- Start with provider and sync contexts rather than creating one replacement
  interface covering every action module.
- Reuse individual state-slice types for reactive fields, but define
  orchestration methods explicitly so unrelated facade capabilities cannot be
  reached accidentally.
- Keep browser lifecycle coordination in the Svelte facade and preserve all
  Rust/WASM domain-policy boundaries.

## Validation

- Host-applied repository formatting completed successfully.
- The UI demo contract recognized the shared UI change and the existing
  large-vault search demo in PR 821.
- Svelte and TypeScript checks completed with zero errors and warnings for the
  unified, Simple, and Sentinel applications.
- The pushed commit passed whitespace validation.

## Remaining work

- Other action modules can move to their own capability contexts in later,
  focused increments.
- Repository-owned pull-request checks and merge remain intentionally outside
  this task's delivery boundary.
