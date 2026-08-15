---
title: Structured references and execution plans
feature: cortex-structured-articles
issue: issues/cortex-structured-articles/supporting-docs.md
plan: plans/cortex-structured-articles/20260815T104500Z-supporting-docs.md
nook_pr: https://github.com/meta-secret/nook/pull/1020
status: completed
started_at: 2026-08-15T10:45:00Z
finished_at: 2026-08-15T10:52:26Z
agent: codex
---

# Structured references and execution plans

## Outcome

PR 1020 completed universal semantic-article enforcement for every Cortex
reference and execution plan.

## Progress

- Structured unused-code and E2E testing ownership.
- Structured application-log evidence and reproduction guidance.
- Structured Loom leaf/static-workflow authority and local journal boundaries.
- Structured Rust/WASM build, test, toolchain, wrapper, and domain-policy
  boundaries.

## Implementation problems

- Removing the exemptions exposed nine dense articles across four references.
- Two references and all five execution plans already complied and graduated
  unchanged.

## Decisions

- Preserve exact commands and completed-plan history.
- Keep explanation where it clarifies tool boundaries; group peer rules and
  procedures visibly.

## Validation

- `task loom:cortex-audit` and `task loom:pre-push` passed.
- Hosted Loom run 31880552992 and Source architecture run 31880552991 passed on
  `1c7d737b2`.
- `task pr:ready PR=1020` reported ready with no unresolved feedback.

## Remaining work

- Migrate the three root Cortex documents and remove the migration ledger.
