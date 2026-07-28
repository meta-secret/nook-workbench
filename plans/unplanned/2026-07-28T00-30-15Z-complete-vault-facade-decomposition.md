---
title: Complete the vault facade behavioral decomposition
feature: unplanned
issue: none
started_at: 2026-07-28T00:30:15Z
agent: codex
supersedes: plans/unplanned/2026-07-28T00-18-29Z-vault-action-contexts.md
---

# Complete the vault facade behavioral decomposition

## Interpreted request

Finish the vault-state refactor so the root Svelte vault class is a compact
composition facade rather than a large behavioral god object.

## Requirements

- Move remaining lifecycle, session, architecture, synchronization,
  browser-data, and secret orchestration into responsibility-focused modules.
- Give every extracted action module a narrow capability context instead of
  the complete `VaultState`.
- Preserve the existing flat component-facing facade during this pull request.
- Preserve Svelte reactivity, storage serialization, browser lifecycle
  behavior, translations, and Rust/WASM domain ownership.
- Reduce the root vault file substantially and leave no large workflow
  implementation there merely to preserve compatibility.

## Constraints and exclusions

- No visual, storage-schema, wire-format, cryptographic, or domain-policy
  behavior change is intended.
- Compatibility delegates may remain in the facade where existing components
  call methods directly.
- Avoid inheritance or generic Svelte mixins that lose generated TypeScript
  members.
- Update PR 821 without merging it or waiting for asynchronous checks.

## Initial plan

1. Inventory the remaining root methods and group them by responsibility and
   dependency requirements.
2. Define or extend narrow action contexts for lifecycle, session,
   architecture, synchronization, browser-data, and secrets.
3. Move workflow bodies to focused action modules and leave thin facade
   delegates.
4. Remove obsolete imports and direct cross-action whole-state handoffs.
5. Apply repository formatting, pass the UI demo contract, run a focused type
   check if needed for debugging, and push the coherent result to PR 821.

## Completion evidence

- `vault.svelte.ts` is a compact composition facade rather than a
  responsibility-mixed implementation file.
- Extracted action modules do not import the complete `VaultState`.
- Existing public facade methods and reactive behavior remain type-compatible.
- Formatting, the UI demo contract, and applicable repository-owned checks
  accept the refactor.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
