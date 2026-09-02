---
title: TypeScript nullish SRE migration
feature: unplanned
issue: null
plan: plans/unplanned/20260902T121959Z-typescript-nullish-sre-migration.md
nook_pr: 1297
status: completed
started_at: 2026-09-02T12:19:59Z
finished_at: 2026-09-02T12:32:50Z
agent: codex
---

# TypeScript nullish SRE migration

## Outcome

SRE-owned authored GitHub automation and infrastructure no longer use nullish coalescing or nullish assignment. Explicit structural handling preserves zero, false, and empty-string behavior, and audited runtime digests match the migrated sources.

## Progress

- Migrated GitHub automation, Kubernetes cache simulation, and infrastructure provider sources.
- Refreshed six exact audited-source SHA-256 pins.
- Preserved the Kubernetes cache proof's repository-policy source contract.
- Squash-merged the independently size-compliant SRE slice.

## Implementation problems

- The first hosted head used a checked `firstNode` alias where repository policy intentionally requires the literal `buildkitNodes[0]` source shape. The final head performs an explicit type check and then retains the audited direct access.

## Decisions

- Explicit type and property-presence checks replace nullish operators; no truthiness shortcut, generic optional helper, sentinel, or compatibility path remains.
- Exact source-shape contracts are preserved even when an equivalent local alias would produce the same runtime behavior.

## Validation

- Focused SRE validation passed 133 of 133 tests.
- Loom verification passed 663 tests with zero failures.
- Pre-push passed with 137 authored additions.
- All hosted checks, the exact-head Pages deployment, and repository readiness passed at `68ea688a64be7044bdb64cfa0578b90a3be72b54`.
- Nook PR 1297 squash-merged as `ab04fe43121ad28f601f1b030d997f446e59abd1`.

## Remaining work

- Land the Web migration and final fail-closed Cortex policy/checker slices in order.
