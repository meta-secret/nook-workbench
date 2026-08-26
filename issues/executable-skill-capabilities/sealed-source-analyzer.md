---
title: Execute source analysis in sealed containment
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
created_at: 2026-08-26T08:05:41Z
updated_at: 2026-08-26T11:16:06Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1130
  - https://github.com/meta-secret/nook/pull/1137
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
- PR #1130 merged the 2,258-line containment layer. PR #1137 then merged a
  690-addition fix-forward layer for host authority and bounded snapshots.
- Official GitHub stack #1139 now starts with PR #1132's 892-addition runtime
  integration and documentation layer.
- Review-driven fixes bind Docker commands to the verified Unix endpoint, pin
  the Dockerfile frontend digest, close inherited-pipe deadline races, bound
  pending requests before serialization, and repair live acceptance paths.
- Focused hardening tests pass with 19 tests and 75 assertions. Full Loom
  verification passes with 430 tests on #1137. PR #1132 passes seven focused
  runtime tests and 436 full Loom tests after the exact-head rebase.
- PR #1130 review fixes recover stale image caches, preserve removal attempts
  after a teardown authority-probe failure, and accept stopped Linux zombies in
  process-group tests. All five review threads are answered and resolved.
- Post-merge semantic review found ambient Docker executable lookup and
  unbounded snapshot reads. PR #1137 closed both with an absolute trusted
  Docker binary, scrubbed process configuration, bounded child snapshotting,
  descriptor identity checks, and opaque production output authority.
- PR #1132 now reserves the analyzer's minimum execution budget while queued.
  Exact-head semantic review is clean; hosted validation is running.

## Findings and decisions

- Runtime containment cannot be inferred from Bun heap configuration.

## References

- `agentic-ai/loom/src/skill-provider-source-analyzer.ts`
