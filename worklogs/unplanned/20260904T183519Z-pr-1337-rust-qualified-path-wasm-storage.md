---
title: WASM storage concise Rust paths
feature: unplanned
issue: null
plan: plans/unplanned/20260904T175600Z-rust-qualified-path-wasm-storage.md
nook_pr: 1337
status: completed
started_at: 2026-09-04T17:56:00Z
finished_at: 2026-09-04T18:35:19Z
agent: codex
---

# Work summary

## Outcome

PR #1337 migrated the complete `nook-wasm` storage tree to concise contextual
Rust paths and enabled module-root `clippy::absolute_paths` denial. The pull
request squash-merged as `2d96d3b50b42b127d1afd480a1227d72826b9988`.

## Progress

- Replaced every non-`use` path above two segments across 31 storage Rust files.
- Preserved meaningful module qualifiers for storage, manager, and standard-library operations instead of importing ambiguous bare functions.
- Added storage-root denial so future long-path regressions fail Clippy immediately.
- Delivered 1,052 authored additions and 1,011 deletions, within the 1,200-line estimate and 2,000-line hard limit.

## Implementation problems

- The first hosted cycle exposed duplicate and missing module imports plus production-visible test imports. Development core corrected the import scopes without changing behavior.
- The same cycle found `identity_record.rs` at 1,004 lines. Import consolidation reduced it to exactly 1,000 lines without extracting tests or creating an artificial module.
- The second hosted Dylint cycle found two imports used only by browser-WASM tests. Both imports now carry the matching target and feature gate; no lint allowance was added.

## Decisions

- Keep module names such as `indexed_db::`, `manager::`, and `str::` when they communicate ownership or operation context.
- Gate configuration-specific imports at their true use boundary instead of suppressing unused-import diagnostics.
- Continue crate/module-local enforcement until all remaining Rust targets are clean, then consolidate workspace enforcement and the canonical Cortex rule.

## Validation

- Storage-wide use-aware inventory reports zero non-`use` paths above two segments.
- `task loom:pre-push PR=1337` passed on the final head with 1,052 authored additions.
- Hosted run `33905675428` passed Native Rust, WASM build, WASM Node, web verification, Dylint all-targets, dependency policy, Kani, property testing, fuzz smoke, coverage, repository policy, and preview checks.
- Exact-head Codex review completed with no findings after the addressed source-size thread; `task pr:ready PR=1337` reported zero unresolved threads and zero base drift.
- Exact-head Pages deployment succeeded at `https://pr-1337.nokey-sh.pages.dev`.

## Remaining work

- Continue the serial migration through the remaining `nook-wasm` modules, fuzz targets, preflight Rust, and Minds Rust.
- Consolidate workspace Clippy denial and publish the canonical Cortex Rust rule after all authored Rust targets are clean.
