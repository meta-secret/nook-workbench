---
title: Complete product workspace concise Rust paths
feature: unplanned
issue: null
plan: plans/unplanned/20260904T205656Z-rust-qualified-path-product-residual.md
nook_pr: 1344
status: completed
started_at: 2026-09-04T20:56:56Z
finished_at: 2026-09-04T22:11:02Z
agent: codex
---

# Work summary

## Outcome

PR #1344 completed concise-path migration and enforcement for the product Rust workspace and standalone Dylint package, then squash-merged as `a6b9aed0e99025a3a9c8f85406e569d68f0ab244`.

## Progress

- Reviewed 16 residual inventory matches, shortened all 15 authored qualified paths, and retained one multiline `use` false positive.
- Added workspace-level `clippy::absolute_paths` denial with a two-segment maximum and added the same enforcement boundary to the standalone Dylint package.
- Preserved meaningful ownership qualifiers such as `str::from_utf8` and removed 22 now-redundant file or module lint attributes.
- Finished with 79 additions and 107 deletions across 33 files, reducing the product workspace by 28 net lines.

## Implementation problems

- The first hosted Dylint run exposed only an expected UI snapshot drift after `std::marker::PhantomData` became `marker::PhantomData`; the 45 diagnostic locations and messages remained aligned, and the snapshot was updated mechanically.
- Main advanced three times during delivery. Two rebases were conflict-free; one conflict in `sentinel_genesis.rs` preserved Main's `share_count` conversion behavior while applying the concise `multi_device::count_sentinel_share_records` path.

## Decisions

- Enforce two inline path segments at each independent Cargo workspace boundary instead of relying on scattered file attributes.
- Import the owning module for free functions so code keeps semantic context; do not replace qualified standard-library calls with ambiguous bare function imports.
- Treat generated diagnostic snapshots as behavior evidence: update only locations and rendered path spellings when the diagnostics themselves are unchanged.

## Validation

- Static path inventory, manifest, formatting, diff, size, and scope assertions passed after every edit and rebase.
- `task loom:pre-push` passed on each delivery head without running local Rust, Cargo, Clippy, WASM, or product builds.
- Final hosted run `33923053701` passed all 14 required checks; four non-required checks were skipped. Dependency policy completed in 17m41s and Dylint completed in 9m48s.
- Exact-head Codex review completed with no findings and zero review threads.
- `task pr:ready PR=1344` passed on exact head `7007908d1ef2c9e52ea028a21a99341278db8cb9` against exact base `743239eb76133904d6e98fe7b7f016d7cbaf4d81`.
- Exact-head Pages deployment succeeded at `https://pr-1344.nokey-sh.pages.dev`.

## Remaining work

- Continue serially with the standalone preflight Rust workspace and then Minds Rust.
- Publish the canonical Cortex Rust rule after all authored Rust package roots are clean.
