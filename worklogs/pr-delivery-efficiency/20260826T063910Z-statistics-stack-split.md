---
title: Split per-head statistics at the authored-line ceiling
feature: pr-delivery-efficiency
issue: issues/pr-delivery-efficiency/per-head-delivery-statistics.md
plan: plans/pr-delivery-efficiency/20260826T042243Z-three-slice-delivery-efficiency.md
nook_pr: https://github.com/meta-secret/nook/pull/1120
status: completed
started_at: 2026-08-26T04:22:43Z
finished_at: 2026-08-26T06:39:10Z
agent: codex
---

# Split per-head statistics at the authored-line ceiling

## Outcome

Split the per-head statistics change into two focused stacked pull requests
after the combined review-fix head crossed the authored-line ceiling.

## Progress

The implementation was split without dropping scope:

1. PR 1116 contains the GitHub evidence collector and focused collector tests.
2. PR 1120 integrates the evidence into schema version 4, assembly, validation,
   documentation, and focused schema tests.
3. PR 1118 is rebased onto PR 1120 and owns review-first stabilization.
4. PR 1119 remains the final stack slice and enforces the 3,000-line policy.

## Implementation problems

- The complete collector and schema repair reached 3,129 authored changed lines
  after one coherent review-finding batch. The hard ceiling is 3,015 lines.
- Rewriting the foundation branch changed downstream ancestry. The review-first
  and line-budget branches were rebuilt on their immediate predecessors.

## Decisions

- Keep GitHub collection and its focused tests in the foundation.
- Keep schema publication, backward compatibility, and reconciliation in the
  integration slice.
- Preserve the ordered stack because every successor consumes its predecessor.

## Validation

- PR 1116 measures 1,393 authored lines against current Main.
- PR 1120 measures 1,736 authored lines against PR 1116.
- Pre-push formatting and the non-UI demo contract passed for both slices.
- Hosted exact-head checks and review were dispatched for both slices.

## Remaining work

The original six review findings were assigned to their owning slice. Source-PR
scoping and nonterminal Actions handling remain in PR 1116. Schema compatibility
and reconciliation fixes moved to PR 1120.
