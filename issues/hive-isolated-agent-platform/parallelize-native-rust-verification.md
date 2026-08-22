---
title: Parallelize native Rust verification on ARC
status: proposed
priority: high
automation: manual
owner: unassigned
created_at: 2026-08-22T21:33:00Z
updated_at: 2026-08-22T21:33:00Z
source_issues: []
related_prs:
  - 1077
depends_on:
  - issues/hive-isolated-agent-platform/route-trusted-main-workloads-through-arc.md
---

# Parallelize native Rust verification on ARC

## Context

The exact-head PR 1077 gate dispatched immediately on ARC and completed most
lanes in one to nineteen minutes, but the combined native Rust format, clippy,
tests, and coverage bake required 40 minutes 37 seconds.

## Outcome

Native Rust verification uses ARC parallelism and shared immutable artifacts so
the required format, clippy, test, and coverage evidence no longer forms one
forty-minute critical path.

## Scope

- Profile the native bake by target and separate compilation from cache export.
- Split independently verifiable work into bounded jobs where artifacts can be
  authenticated and reused safely.
- Preserve required coverage and current Rust domain-test guarantees.
- Do not weaken checks or replace domain tests with browser E2E.

## Acceptance criteria

- [ ] CI telemetry reports timing for format, clippy, tests, coverage, and cache
      publication independently.
- [ ] No required native validation is removed or converted to best effort.
- [ ] Exact-head and post-merge measurements improve the native critical path.
- [ ] Fresh-runner correctness remains independent of another runner's writable
      filesystem.

## Progress

- 2026-08-22: PR run 32597044504 completed native Rust verification in 40m37s
  after immediate ARC dispatch; other exact-head lanes completed substantially
  earlier.

## Findings and decisions

- ARC solves queueing and provides concurrency, but a single combined bake
  cannot consume that concurrency by itself.
- Build correctness and coverage remain the authority; optimization must reuse
  authenticated artifacts rather than skip work.

## References

- Nook PR 1077
- PR run 32597044504
