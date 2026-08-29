---
title: Tighten pull-request size and stacked delivery policy
feature: pr-delivery-efficiency
issue: issues/pr-delivery-efficiency/two-thousand-line-stacks.md
started_at: 2026-08-29T05:59:30Z
agent: codex
---

# Tighten pull-request size and stacked delivery policy

## Interpreted request

Reduce Nook's active pull-request size ceiling and make dependent stacked pull
requests the required preservation path when a complete feature cannot fit in
one bounded, coherent review slice.

## Requirements

- Enforce 2,000 authored changed lines across planning and automated implementation.
- Preserve additions-plus-deletions accounting for source, tests,
  documentation, configuration, and automation.
- Warn early enough to design semantic slices before the ceiling is crossed.
- Require linked predecessor-based stacks for oversized dependent delivery.
- Retarget, update, re-measure, and exact-head validate each successor after
  its predecessor merges.
- Keep each slice independently useful, tested, reviewable, and safe to merge.

## Constraints and exclusions

- Do not split mechanically by line count or remove tests and documentation.
- Do not require stacks for unrelated small pull requests; independent slices
  continue to branch from current `main`.
- Do not add a third-party stacking dependency.
- The expected Nook change is one focused pull request well below the new ceiling.

## Initial plan

1. Update the deterministic line-budget gates and matching validation tests.
2. Align Cortex and agent-planning policy with the 2,000-line ceiling and
   mandatory dependent-stack lifecycle.
3. Run focused tooling tests, the Cortex audit, and repository pre-push gates.
4. Open and validate a focused Nook pull request linked to this issue.

## Completion evidence

- Focused Workbench-validator and CI-agent tests pass.
- The Cortex audit and Nook pre-push gate pass on the exact commit.
- The Nook pull request documents the metric correction and mandatory stack lifecycle.

## Safety review

This record contains only public development intent and policy. It contains no
raw prompt, chat transcript, secrets, private data, raw logs, local paths, or
unnecessary infrastructure details.
