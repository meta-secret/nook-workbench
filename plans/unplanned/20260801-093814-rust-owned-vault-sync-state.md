---
title: Move vault sync state contracts to Rust
feature: unplanned
issue: issues/unplanned/rust-owned-vault-sync-state.md
started_at: 2026-08-01T09:38:14Z
agent: codex
---

# Move vault sync state contracts to Rust

## Interpreted request

Replace the authored TypeScript sync-state unions in the shared vault Svelte
state slice with Rust-owned domain contracts exposed through the typed WASM
boundary, while retaining only reactive storage and host orchestration in the
web layer.

## Requirements

- Inventory every sync-state union, constructor, consumer, fixture, and
  delegated state surface before editing.
- Move last-sync, manual-provider-sync, conflict-review, and local-folder-health
  variants and their variant-owned data to Rust/WASM without TypeScript mirrors.
- Preserve Svelte reactivity, existing synchronization behavior, and stable
  presentation semantics.
- Add behavior-focused Rust/WASM coverage and repository preflight coverage so
  the TypeScript domain mirrors cannot return.
- Update PR #900 and keep it open and unmerged until explicit authorization.

## Constraints and exclusions

- Browser timers, DOM behavior, and Svelte reactive mutation remain web-layer
  responsibilities.
- No storage schema or serialized vault format migration is intended.
- Existing unrelated PR scope and user changes must be preserved.

## Initial plan

1. Map all four unions and their payload dependencies across core, WASM, Svelte,
   components, tests, and preflight.
2. Implement cohesive Rust domain enums and typed WASM state objects with
   explicit transitions and payload access.
3. Replace authored TypeScript union declarations and construction with the
   generated Rust/WASM contracts.
4. Add Rust/WASM behavior tests and syntax-aware ownership enforcement.
5. Run host formatting and the UI demo contract, push the coherent update, then
   run focused and complete exact-head GitHub Actions validation.
6. Inspect existing PR feedback and finish at a green, current, unmerged
   readiness boundary.

## Completion evidence

- No authored sync-state union mirrors remain in the Svelte state slice.
- Rust/WASM tests cover each state variant, payload, and invalid payload access.
- Preflight prevents reintroduction of the TypeScript-owned sync contracts.
- PR #900 passes exact-head repository checks and `task pr:ready` while
  remaining open.

## Safety review

- This plan contains no raw prompt, chat transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
