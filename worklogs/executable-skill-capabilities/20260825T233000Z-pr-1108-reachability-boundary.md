---
title: Split runtime reachability from executable source policy
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/runtime-and-article-structure.md
plan: plans/executable-skill-capabilities/20260824T142836Z-seven-slice-executable-skill-stack.md
nook_pr: 1108
status: completed
started_at: 2026-08-25T16:00:00Z
finished_at: 2026-08-25T23:30:00Z
agent: codex
---

# Split runtime reachability from executable source policy

## Outcome

The oversized executable-skill change now uses an eight-PR stack. PR #1108
owns runtime reachability containment independently from pure source policy.

## Progress

- Kept PR #1088 at 2,645 changed lines for shared TypeScript tooling.
- Kept PR #1089 at 4,773 changed lines for the dormant article provider.
- Published PR #1108 at 2,484 changed lines for reachability containment.
- Rebased each slice on the current accepted parent and current main baseline.

## Implementation problems

- Exact review found that evaluator detection could be bypassed through type
  assertions, named aliases, destructuring, and destructuring defaults.
- Runtime-origin analysis now follows each of those value paths with cycle
  protection while preserving safe array and record cases.
- Node VM evaluators, CommonJS loader forms, tracked symlinks, extensionless
  sources, and local-action entrypoints required separate reachability proofs.

## Decisions

- Runtime reachability is a standalone security boundary before source policy.
- Every immediate-base PR stays below 5,000 changed lines.
- The original plan path remains stable so existing PR links do not break.

## Validation

- PR #1089 exact local review accepted its current head with no P1 or P2.
- PR #1108 exact local review accepted its current head with no P1 or P2.
- Focused reachability tests passed 15 tests with 267 assertions.
- TypeScript-state, source architecture, sccache, Cortex audit, and pre-push
  gates passed.
- Hosted validation was explicitly requested for PR #1089.

## Remaining work

- Validate PR #1108 on GitHub and close the four linked PR #1089 threads.
- Rebase the pure source-policy PR on PR #1108.
- Continue the analyzer, registry, executor, and activation slices in order.
