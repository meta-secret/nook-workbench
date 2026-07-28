---
title: Narrow vault provider and sync action dependencies
feature: unplanned
issue: none
started_at: 2026-07-28T00:18:29Z
agent: codex
supersedes: plans/unplanned/2026-07-28T00-03-01Z-vault-state-slices.md
---

# Narrow vault provider and sync action dependencies

## Interpreted request

Extend the vault state-slice refactor by replacing broad action-module
dependencies on the complete vault facade with explicit capability interfaces,
starting with provider and synchronization actions.

## Requirements

- Introduce `ProviderActionsContext` and `SyncActionsContext` contracts that
  expose only the reactive state and orchestration ports each module uses.
- Ensure the action modules no longer import or name the complete `VaultState`.
- Compose state portions from the concrete state-slice types and describe
  orchestration methods explicitly.
- Preserve runtime behavior, Svelte reactivity, Rust/WASM ownership, and the
  existing component-facing facade.
- Update the existing pull request without merging it or waiting for
  asynchronous checks.

## Constraints and exclusions

- This increment covers provider and sync actions; other action modules retain
  their current types until their capability boundaries are defined safely.
- Capability contracts must not become a second complete vault-state interface.
- No visual behavior, storage schema, wire format, or domain-policy change is
  intended.
- Product validation remains on GitHub Actions; local work is limited to
  formatting and focused type checking.

## Initial plan

1. Inventory provider and sync state reads, writes, and orchestration calls.
2. Define narrow state picks and explicit action ports without importing the
   root vault facade.
3. Migrate provider and sync function parameters to their capability contracts.
4. Run focused Svelte and TypeScript checking, apply repository formatting, and
   pass the UI demo contract.
5. Commit and push the extension to PR 821, then stop without merge or check
   polling.

## Completion evidence

- Provider and sync action modules contain no `VaultState` import or parameter.
- The root `VaultState` structurally satisfies both capability interfaces.
- Focused web checks pass with no TypeScript or Svelte diagnostics.
- PR 821 contains the pushed formatted commit and remains open.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
