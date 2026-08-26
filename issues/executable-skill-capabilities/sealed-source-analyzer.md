---
title: Execute source analysis in sealed containment
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T09:53:06Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1130
depends_on:
  - issues/executable-skill-capabilities/executable-source-policy.md
---

# Execute source analysis in sealed containment

## Context

Pure source policy needs a separately reviewed executor before it can become a
trusted admission boundary.

## Outcome

An exact-image analyzer enforces source, memory, concurrency, cancellation, and
teardown bounds and returns a verifiable receipt.

## Scope

- Add the sealed analyzer request and receipt contract.
- Enforce exact image identity, one-slot scheduling, memory, and source bounds.
- Prove cancellation and teardown without nested daemons or host sockets.
- Exclude registry authority and executable skill invocation.

## Acceptance criteria

- [ ] Analyzer containment and resource bounds are independently proven.
- [ ] Cancellation always yields teardown evidence.
- [ ] No nested daemon or host Docker socket is used.
- [ ] Focused tests, full validation, and exact-head review pass.

## Progress

- Depends on pure source policy.
- Draft PR #1130 is the 2,865-line successor to source-policy PR #1129 in
  official GitHub stack #1131.
- The focused analyzer suite passes with 21 tests and 71 assertions.
- Full Loom verification passes with 398 tests and 2,249 assertions. Semantic
  containment review remains in progress before hosted validation.

## Findings and decisions

- Runtime containment cannot be inferred from Bun heap configuration.

## References

- `agentic-ai/loom/src/skill-provider-source-analyzer.ts`
