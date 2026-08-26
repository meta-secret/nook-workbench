---
title: Execute source analysis in sealed containment
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T10:36:15Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1130
  - https://github.com/meta-secret/nook/pull/1132
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
- Official GitHub stack #1135 separates PR #1130's 2,145-line containment
  layer from PR #1132's 800-line runtime integration and documentation layer.
- Review-driven fixes bind Docker commands to the verified Unix endpoint, pin
  the Dockerfile frontend digest, close inherited-pipe deadline races, bound
  pending requests before serialization, and repair live acceptance paths.
- Focused tests pass with 17 containment tests and six runtime tests. Full Loom
  verification passes with 396 tests on #1130. PR #1132 retains its six focused
  runtime tests after the exact-head rebase.
- PR #1130 review fixes recover stale image caches, preserve removal attempts
  after a teardown authority-probe failure, and accept stopped Linux zombies in
  process-group tests. All five review threads are answered and resolved.
- PR #1130 is rebased on current main. Its exact-head review and final readiness
  audit remain pending before the bottom stack layer merges.

## Findings and decisions

- Runtime containment cannot be inferred from Bun heap configuration.

## References

- `agentic-ai/loom/src/skill-provider-source-analyzer.ts`
