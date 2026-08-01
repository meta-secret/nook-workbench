---
title: Move vault application-kind behavior into Rust
feature: unplanned
issue: none
plan: plans/unplanned/20260801-061527-move-app-kind-to-rust.md
nook_pr: 900
status: completed
started_at: 2026-08-01T06:15:27Z
finished_at: 2026-08-01T07:45:12Z
agent: codex
---

# Move vault application-kind behavior into Rust

## Outcome

Deleted the shared TypeScript `app-kind.ts` module and moved application identity
and capability policy to the existing Rust `VaultApplication` model. Browser URL
defaulting and normalization now live in the Rust WASM browser bridge. PR 900 is
ready but remains open and unmerged pending explicit user direction.

## Progress

- Removed every `app-kind.ts` import and the obsolete `__NOOK_APP_KIND__` Vite
  build global.
- Configured the immutable Rust/WASM application identity directly from the
  Simple, Sentinel, and unified application entry points.
- Added typed WASM capability queries for Simple, Sentinel, and extension
  support, and migrated shared Svelte consumers to those Rust-owned APIs.
- Added Rust tests for every application capability variant and browser URL
  normalization.
- Strengthened preflight contracts so the deleted module, removed build global,
  typed Rust boundary, and password-options ownership cannot regress.
- Addressed all three review findings, replied on the submitted threads, and
  resolved them only after the replies were visible.

## Implementation problems

- The extension password wrapper evaluated Rust-owned defaults before WASM
  initialization. It now initializes WASM first and then requests the defaults.
- The initial TypeScript-domain scanner could miss named aliases and declarations
  split before their braces. It now detects the declaration name and includes
  focused fixtures for those forms.
- Browser deployment URL handling was initially placed in portable `nook-core`.
  It was moved into the Rust WASM browser bridge so core remains transport- and
  deployment-agnostic.
- The preflight crate exposed one formatting mismatch and one stale unused
  binding under its hosted format/clippy gate. Both were corrected and the
  replacement exact-head preflight passed.

## Decisions

- `nook-core` owns only portable `VaultApplication` identity and capability
  policy.
- Rust WASM owns browser-specific Simple Vault URL defaulting and normalization.
- TypeScript remains responsible only for build-environment input and one-time
  browser/WASM initialization.
- Simple and Sentinel isolation behavior remains unchanged; neither application
  derives its identity from an authored TypeScript string or build global.

## Validation

- `task format` passed after every review and CI correction.
- The UI demo contract passed with the existing secret-type picker demo.
- Exact-head hosted preflight succeeded in run 30688985954.
- Exact-head full browser E2E succeeded in run 30688985955.
- Exact-head Rust ecosystem checks succeeded in run 30688998163.
- Exact-head PR verification and preview succeeded in run 30688998258.
- `task pr:ready PR=900` reported `ready: true`, zero unresolved threads, a
  successful exact-head Pages deployment, and no base drift.

## Remaining work

- Merge PR 900 only after explicit user instruction.
