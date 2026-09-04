---
title: Complete nook-wasm concise Rust paths
feature: unplanned
issue: null
plan: plans/unplanned/20260904T194025Z-rust-qualified-path-wasm-remaining.md
nook_pr: 1340
status: completed
started_at: 2026-09-04T19:40:25Z
finished_at: 2026-09-04T20:38:49Z
agent: codex
---

# Work summary

## Outcome

PR #1340 migrated every remaining `nook-wasm` library source module to concise contextual Rust paths and enabled crate-root `clippy::absolute_paths` denial. The pull request squash-merged as `666e1b9b3cb39d7f56b5b2b55496220a26a9903a`.

## Progress

- Audited all 36 remaining Rust files and changed 33, reducing 791 non-`use` paths above two segments to zero.
- Preserved meaningful module qualification, including standard-library forms such as `str::from_utf8`, rather than importing ambiguous bare functions.
- Added crate-root denial so the complete `nook-wasm` library source now rejects future long-path regressions.
- Delivered 976 authored additions within the 1,200-line estimate and 2,000-line hard limit; the largest affected file is 952 lines.

## Implementation problems

- Hosted all-target compilation exposed production and configuration-specific imports that static path inventory could not prove. Three small follow-up commits restored one production binding, moved test-only types to their gated modules, and removed unused imports without lint allowances.
- The first repository-policy attempt failed because the hosted formatter image reported a missing `prettier-web.json` hash. The unchanged contract passed locally and the exact-head retry passed, confirming a transient hosted-image failure unrelated to the Rust diff.
- Main advanced after the corrected head was fully green. The branch rebased cleanly onto PR #1339 without product conflicts and repeated the complete hosted matrix on the new exact base.

## Decisions

- Keep module names when they communicate ownership or operation context; `str::from_utf8` is preferred to both `std::str::from_utf8` and a bare `from_utf8` import.
- Put configuration-specific imports at their true use boundary and fix compile diagnostics directly instead of adding suppression.
- Retain the existing manager and storage inner denies while making crate-root denial authoritative for the whole library.
- Continue serially through remaining Rust workspaces before consolidating workspace enforcement and the canonical Cortex rule.

## Validation

- Use-aware inventory reports zero non-`use` paths above two segments across all 36 audited files.
- `task loom:pre-push PR=1340` passed on the rebased final head with 976 authored additions.
- Hosted run `33916581008` passed Native Rust, WASM build, WASM Node, web verification, Dylint all-targets, dependency policy/RustSec, Kani, property testing, fuzz smoke, coverage, repository policy, and preview checks.
- Exact-head Codex review completed with no findings and zero review threads.
- `task pr:ready PR=1340` passed on exact head `ddc7d777d3cc01e64e16ce2bba4b60de39071480` against exact base `b2bc663c0ed6d963f3ce13461731a5887dfafa3b`.
- Exact-head Pages deployment succeeded at `https://pr-1340.nokey-sh.pages.dev`.

## Remaining work

- Continue the serial migration through fuzz targets, preflight Rust, and Minds Rust.
- Consolidate workspace Clippy denial and publish the canonical Cortex Rust rule after all authored Rust targets are clean.
