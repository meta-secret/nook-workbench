---
title: Repair module handoff repository policy
feature: unplanned
issue: issues/unplanned/consolidate-repository-policy-checks.md
started_at: 2026-08-26T19:10:28Z
agent: codex
---

# Repair module handoff repository policy

## Interpreted request

Restore current Main repository policy after isolated module handoff code merged
with forbidden implicit absence and a raw closed TypeScript discriminant. Keep
the repair separate from the review-first delivery PR that the regression
blocks.

## Requirements

- Replace authored `undefined` state with explicit, typed state.
- Replace the raw Git option string union with a named enum.
- Preserve module worktree preparation, handoff, and cleanup behavior.
- Land the smallest focused repair before refreshing the blocked delivery PR.

## Constraints and exclusions

- Do not redesign module delivery or change its ownership model.
- Do not add Docker, Podman, DinD, or another runtime to k8s or k0s.
- Do not mix the repair into the review-first stabilization PR.
- Keep Cursor review inactive.

## Change budget and PR sequence

- Estimated authored changed lines: 200
- Owning modules, packages, or layers: `agentic-ai/loom` module-delivery workspace lifecycle.
- Public or cross-module interfaces: Existing module worktree contracts remain unchanged.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 200
- Current PR slice and acceptance evidence: Repair explicit TypeScript state; Acceptance evidence: focused tests and repository policy pass.
- PR slices and acceptance evidence: Repair explicit TypeScript state; Acceptance evidence: focused tests and repository policy pass.

## Initial plan

1. Reproduce the two repository-policy findings against current Main.
2. Introduce explicit test lifecycle state and a named Git-directory option
   enum without changing behavior.
3. Run formatting, focused preflight, exact-head review, and complete PR
   validation.
4. Squash-merge the repair, verify Main, and refresh the blocked PR from the
   repaired base.

## Completion evidence

- The Main-fix PR is merged and its Main repository-policy run succeeds.
- PR #1118 is refreshed onto the repaired Main head and resumes review-first
  validation.

## Safety review

This plan contains no prompt transcript, secrets, private data, raw logs, local
paths, or unnecessary infrastructure detail.
