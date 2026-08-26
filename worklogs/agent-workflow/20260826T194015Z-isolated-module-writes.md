---
title: Isolated module writes delivered
feature: agent-workflow
issue: issues/agent-workflow/isolated-write-module-dag.md
plan: plans/agent-workflow/20260826T171510Z-harness-native-module-delivery.md
nook_pr: 1159
status: completed
started_at: 2026-08-26T17:15:10Z
finished_at: 2026-08-26T19:40:15Z
agent: codex
---

# Isolated module writes delivered

## Outcome

Every writer attempt receives a disposable exact-baseline worktree. Verified
direct-child commits integrate deterministically through a private CAS ref
without mutating the source checkout.

## Progress

- Merged PR #1156 for worktree preparation, handoff validation, and cleanup.
- Merged PR #1159 for deterministic wave integration and downstream frontiers.

## Implementation problems

- Git filters, replacement refs, symlinks, ref drift, configuration drift, and
  stale cleanup capabilities required explicit fail-closed checks.

## Decisions

- Integration uses object plumbing and a temporary index. Materialization,
  scheduling, acceptance commands, and final promotion remain harness-owned.

## Validation

- The final local module-delivery suite passed 43 tests and 115 assertions.
- Independent review reported no remaining P1 or P2 findings.

## Remaining work

- None.
