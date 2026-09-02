---
title: TypeScript nullish AI migration
feature: unplanned
issue: null
plan: plans/unplanned/20260902T120822Z-typescript-nullish-ai-migration.md
nook_pr: 1296
status: completed
started_at: 2026-09-02T12:08:22Z
finished_at: 2026-09-02T12:16:41Z
agent: codex
---

# TypeScript nullish AI migration

## Outcome

AI-owned authored JavaScript, TypeScript, and Svelte no longer use nullish coalescing or nullish assignment. Explicit structural reads, parameter defaults, and branches preserve existing falsy-value behavior without a generic optional helper.

## Progress

- Migrated AI automation, Loom, Hive Console, Hive controller, and AI-owned executable Cortex skills.
- Removed all temporary generic optional-value helper modules.
- Repaired the assignment-prefix command scanner exposed by the migration.
- Squash-merged the independently size-compliant AI slice.

## Implementation problems

- An index-dependent word read was accidentally moved before a loop. Environment-prefixed commands then rechecked the first word forever at full CPU. The read now occurs inside each iteration with explicit exhaustion and non-assignment exits.
- The required Pages deployment does not apply to AI-only paths. After exact-head checks, review, and readiness passed, the administrator squash path completed the merge without bypassing an applicable failed check.

## Decisions

- Native control flow and destructuring defaults replace nullish operators; no generic optional helper or compatibility path remains.
- Ownership slices land sequentially because the repository authored-budget gate measures against main.

## Validation

- Command-security regression suite passed 19 of 19 tests in 8.28 seconds.
- Loom verification passed 663 tests with zero failures.
- Cortex audit, hosted Loom contracts, TypeScript-state checks, and pre-push passed.
- Ten hosted checks and exact-head Codex review passed.
- Nook PR 1296 squash-merged as `cc206369f72a4665a03995e0f377a3c612753005`.

## Remaining work

- Land the SRE, Web, and final policy/checker ownership slices in order.
