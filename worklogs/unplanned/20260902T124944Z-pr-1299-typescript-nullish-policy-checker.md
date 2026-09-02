---
title: TypeScript nullish policy checker
feature: unplanned
issue: null
plan: plans/unplanned/20260902T124300Z-typescript-nullish-policy-checker.md
nook_pr: 1299
status: completed
started_at: 2026-09-02T12:43:00Z
finished_at: 2026-09-02T12:49:44Z
agent: codex
---

# TypeScript nullish policy checker

## Outcome

Cortex now prohibits authored nullish coalescing and nullish assignment, and the repository TypeScript-state preflight rejects those operators structurally across JavaScript, TypeScript, Svelte scripts, and Svelte template expressions.

## Progress

- Added explicit-state replacement requirements and prohibited fallback patterns to the Web development policy.
- Extended the existing tree-sitter checker for `binary_expression` and `augmented_assignment_expression` operator nodes.
- Added focused TypeScript and Svelte positive and inert-text tests.
- Squash-merged the final enforcement slice after every ownership migration.

## Implementation problems

- None. Landing enforcement last meant the repository was clean before the checker became mandatory.

## Decisions

- Tree-sitter node kinds and operator fields are authoritative; raw text scanning is not used for enforcement.
- Comments, prose, and strings remain inert while executable Svelte template expressions are checked.
- No baseline, exemption, compatibility path, fallback, sentinel, or generic optional helper exists.

## Validation

- Dedicated TypeScript and Svelte operator tests passed.
- Repository TypeScript-state validation passed 8 of 8 tests before and after merge.
- Loom contracts passed 3 of 3 tests; Cortex audit passed.
- Loom verification passed 663 tests with zero failures; pre-push passed at 81 authored additions.
- All 13 hosted checks, exact-head preview deployment, and repository readiness passed at `7341c5e77973c09c3b7a88d8274f9c6d9cebc910`.
- Nook PR 1299 squash-merged as `ccc5cdf8bc02f223ba5fb0f6a4ebaf83d5aa8721`.

## Remaining work

- None. AI, SRE, Web, and repository enforcement are merged and lifecycle-closed.
