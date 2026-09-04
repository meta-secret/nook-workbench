---
title: Core concise Rust paths
feature: unplanned
issue: null
plan: plans/unplanned/20260904T165500Z-rust-qualified-path-core.md
nook_pr: 1336
status: completed
started_at: 2026-09-04T16:55:00Z
finished_at: 2026-09-04T17:52:39Z
agent: codex
---

# Work summary

## Outcome

PR #1336 migrated `nook-core` and `nook-companion-wasm` to concise contextual Rust paths and enabled `clippy::absolute_paths` denial for both libraries plus every independent `nook-core` integration-test and example target. The pull request merged as `f097b985eb72770fb381c5faa7324bc2824ce3c2`.

## Progress

- Replaced long crate, standard-library, and dependency references with imported types or meaningful module aliases.
- Preserved contextual calls such as module-qualified helper functions instead of importing ambiguous bare function names.
- Added crate-root denial to both libraries and direct target-root denial to ten integration targets and one example.
- Delivered 1,033 authored additions and 895 deletions, within the 1,100-line plan estimate.

## Implementation problems

- The initial static heuristic excluded three-segment associated-item paths incorrectly. An integration audit found 452 remaining non-`use` candidates; Development core corrected the scanner boundary and reduced them to zero.
- The first hosted generation found six unresolved `import_support` module references in three importers. Existing grouped imports were changed to import `self`, preserving the module qualifier.
- Exact-head review identified that library lint attributes do not propagate to independent Cargo test and example crates. The deny attribute was added to every direct target root and the thread was resolved.
- The final Dylint job was slow but completed successfully without a rerun.

## Decisions

- Treat every path above two segments as prohibited outside complete `use` declarations.
- Prefer type-qualified variants and associated functions, or a meaningful owning-module alias, over bare function imports.
- Keep enforcement crate-local until all remaining Rust workspaces and targets are migrated; workspace-wide denial is deferred to the final consolidation pull request.

## Validation

- `task loom:pre-push PR=1336` passed on the final head with a measured 1,033 authored additions.
- Hosted PR run `33901773064` completed successfully with Native Rust, WASM build, WASM Node, web verification, Dylint, dependency policy, Kani, property testing, fuzz smoke, coverage, policy, and preview checks green.
- Exact-head Codex review settled clean after one addressed enforcement finding; readiness reported zero unresolved threads and zero base drift.
- Exact-head Pages deployment succeeded at `https://pr-1336.nokey-sh.pages.dev`.
- Nook pull request: https://github.com/meta-secret/nook/pull/1336

## Remaining work

- Continue the authorized serial migration with bounded pull requests for `nook-wasm`, fuzz targets, preflight Rust, Minds Rust, workspace-wide lint consolidation, and the canonical Cortex rule.
