---
title: Move provider save policy into portable Rust
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
plan: plans/unplanned/2026-08-11T18-25-00Z-provider-save-policy-rust.md
nook_pr: 984
status: completed
started_at: 2026-08-11T18:25:00Z
finished_at: 2026-08-12T00:13:07Z
agent: codex
---

# Move provider save policy into portable Rust

## Outcome

Provider construction, duplicate detection, vault scoping, and OAuth
credential merge policy now live in portable Rust behind typed WASM bindings.
Browser storage and OAuth lifecycle remain in TypeScript.

## Progress

- Added a focused Rust provider-save policy owner with behavior tests.
- Added real WASM adapter coverage for the new typed boundary.
- Reduced the provider TypeScript adapter to 737 physical lines.
- Preserved the existing browser-facing provider behavior and public exports.

## Implementation problems

- A Main rebase changed authored WASM callable naming rules. The new free
  functions were aligned with the current snake-case binding convention.
- Review found token, name, refresh, and multi-vault edge cases. The Rust
  policy and its focused tests were corrected before merge.
- Two complete-validation jobs encountered transient certificate failures.
  Failed-job reruns passed unchanged.

## Decisions

- Portable provider save and merge decisions belong in Rust for reuse by
  future clients.
- Browser storage, OAuth windows, and reactive lifecycle remain TypeScript
  responsibilities.
- Vault scope is represented directly in the domain boundary rather than with
  authored optional-value sentinels.

## Validation

- Focused preflight, Rust, web, and source-architecture validation passed.
- Complete exact-head validation run 31548428192 passed on attempt 2.
- `task pr:ready PR=984` passed at head
  `ed578c64a3706a5fd84b13029bb66a6ed5618b83`.
- PR 984 squash-merged as
  `5b00113a9c999636574f924113f0fda1d55c7ec6`.

## Remaining work

- Continue decomposing remaining authored files above 750 lines.
- Continue auditing TypeScript for portable policy that belongs in Rust.
