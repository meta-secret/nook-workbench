---
title: WASM manager concise Rust paths
feature: unplanned
issue: null
plan: plans/unplanned/20260904T183820Z-rust-qualified-path-wasm-manager.md
nook_pr: 1338
status: completed
started_at: 2026-09-04T18:38:20Z
finished_at: 2026-09-04T19:35:34Z
agent: codex
---

# Work summary

## Outcome

PR #1338 migrated the complete `nook-wasm` manager tree to concise contextual
Rust paths and enabled module-root `clippy::absolute_paths` denial. The pull
request squash-merged as `7a46fd3883520a4d58eef0b7dac0b6ba7c7f69ec`.

## Progress

- Replaced every non-`use` path above two segments across the manager Rust tree.
- Preserved meaningful module qualifiers such as `str::`, `manager::`, and domain-module prefixes instead of importing ambiguous bare functions.
- Added manager-root denial so future long-path regressions fail Clippy immediately.
- Delivered 972 authored additions and 988 deletions across 30 files, within the 1,200-line estimate and 2,000-line hard limit.

## Implementation problems

- The first hosted cycle exposed nine production type imports lost during the mechanical migration and eleven imports whose use was configuration-specific. Development core restored the production imports and moved gated imports to their true use sites.
- The second hosted Node-test cycle exposed one unit-test-only passkey error import and browser-only password metadata imports. Development core scoped those imports to their corresponding test modules without adding lint allowances.
- Main advanced after the corrected head was fully green. The branch rebased cleanly, preserved the same product diff, and repeated the complete hosted validation matrix on the new exact base.

## Decisions

- Keep module names when they communicate ownership or operation context; `str::from_utf8` is preferred to both `std::str::from_utf8` and a bare `from_utf8` import.
- Gate configuration-specific imports at their true use boundary instead of suppressing unused-import diagnostics.
- Continue crate/module-local enforcement until all remaining Rust targets are clean, then consolidate workspace enforcement and the canonical Cortex rule.

## Validation

- Manager-wide use-aware inventory reports zero non-`use` paths above two segments across all 31 audited files; one file required no edit.
- `task loom:pre-push PR=1338` passed on the rebased final head with 972 authored additions.
- Hosted run `33910964862` passed Native Rust, WASM build, WASM Node, web verification, Dylint all-targets, dependency policy, Kani, property testing, fuzz smoke, coverage, repository policy, and preview checks.
- Exact-head Codex review completed with no findings and zero review threads.
- `task pr:ready PR=1338` passed on exact head `741a679b2766f07e281fafef6c0be755935ee5a9` against exact base `f0d22ba2ffd1abc3249fcb82a8c754e3d5b7f863`.
- Exact-head Pages deployment succeeded at `https://pr-1338.nokey-sh.pages.dev`.

## Remaining work

- Continue the serial migration through the remaining `nook-wasm` modules, fuzz targets, preflight Rust, and Minds Rust.
- Consolidate workspace Clippy denial and publish the canonical Cortex Rust rule after all authored Rust targets are clean.
