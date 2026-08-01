---
title: Move vault domain collections to Rust
feature: unplanned
issue: issues/unplanned/rust-owned-vault-sync-state.md
started_at: 2026-08-01T11:00:09Z
agent: codex
---

# Move vault domain collections to Rust

## Interpreted request

Extend the Rust-owned vault sync-state refactor so portable collection records,
including security and replacement conflicts, are represented by Rust/WASM
types instead of authored TypeScript object bags. Audit the wider shared vault
application for the same pattern and migrate every in-scope domain-owned case.

## Requirements

- Inventory inline object arrays, named object-array aliases, reactive
  collection state, and mappings that copy generated WASM records into
  TypeScript-owned shapes.
- Classify each occurrence by ownership, moving portable vault, sync,
  authentication, recovery, provider, and secret-domain records to Rust/WASM.
- Preserve generated Rust objects at the TypeScript boundary where practical,
  including deterministic lifecycle cleanup for retained WASM wrappers.
- Keep browser protocol records, Svelte presentation models, DOM handles, and
  transient view-only structures in TypeScript.
- Add behavior-focused Rust/WASM coverage and ownership preflight coverage for
  migrated contracts.
- Update PR #900 and keep it open and unmerged until explicit authorization.

## Constraints and exclusions

- No vault storage schema, wire format, or persisted-data migration is intended.
- UI behavior and visual design are unchanged; this is a domain ownership and
  source-organization refactor.
- Existing branch work and unrelated user changes must remain intact.

## Initial plan

1. Build a syntax-aware inventory of object-array shapes and their consumers
   throughout the shared vault application.
2. Classify domain-owned versus browser- or presentation-owned collections and
   document the boundary decisions in code and tests.
3. Add or reuse cohesive Rust core records and typed WASM collection wrappers,
   then replace TypeScript object bags and lossy mapping layers.
4. Add domain and boundary tests plus preflight fixtures that prevent the
   migrated TypeScript mirrors from returning.
5. Run host formatting and the UI demo contract, push the coherent PR update,
   and run focused and complete exact-head GitHub Actions validation.
6. Inspect existing feedback and finish at a green, current, unmerged readiness
   boundary.

## Completion evidence

- Security and replacement conflict collections are Rust/WASM-owned end to end.
- The repository inventory has no remaining portable domain object-array bag in
  the audited vault application scope.
- Rust/WASM behavior tests and ownership preflight checks pass remotely.
- PR #900 passes exact-head repository checks and `task pr:ready` while
  remaining open.

## Safety review

- This plan contains no raw prompt, chat transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
