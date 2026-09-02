---
title: TypeScript nullish Web migration
feature: unplanned
issue: null
plan: plans/unplanned/20260902T123450Z-typescript-nullish-web-migration.md
nook_pr: 1298
status: completed
started_at: 2026-09-02T12:34:50Z
finished_at: 2026-09-02T12:42:05Z
agent: codex
---

# TypeScript nullish Web migration

## Outcome

Web-owned authored JavaScript, TypeScript, and Svelte no longer use nullish coalescing or nullish assignment. Explicit state, structural checks, and destructuring defaults preserve existing falsy-value behavior across the app, extension, shared runtime, build tools, and tests.

## Progress

- Migrated 132 Web-owned source and test files without introducing a generic optional helper.
- Refreshed the exact audited digest for the extension setup source.
- Preserved the repository change budget at 1,685 authored additions.
- Squash-merged the independently size-compliant Web slice.

## Implementation problems

- Host Web and extension unit runners require generated Rust/WASM packages that are intentionally absent in a fresh worktree. Per repository policy, no local Rust/WASM product build was introduced; the sealed hosted WASM and Web gates supplied and validated the exact artifacts.

## Decisions

- Type guards, property-presence checks, discriminated state, and destructuring defaults replace nullish operators; no truthiness shortcut, sentinel, compatibility path, fallback, or exemption remains.
- Hosted validation owns generated WASM product evidence while focused host formatting, ESLint, source scans, and Loom gates remain local.

## Validation

- Authored Web JavaScript, TypeScript, and Svelte have zero raw `??` or `??=` occurrences.
- Web and extension formatting and ESLint passed.
- Loom verification passed 663 tests with zero failures.
- Pre-push passed with 1,685 authored additions.
- All 13 hosted checks, sealed Web verification, exact-head preview deployment, and repository readiness passed at `5d33976bacc49f61a3bd624d820b3040314637a9`.
- Nook PR 1298 squash-merged as `002abc4df2fd87da2f903215b45d9360d7c42dbc`.

## Remaining work

- Land the final fail-closed Cortex policy and tree-sitter checker slice.
