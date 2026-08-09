---
title: Parallel UI demos and browser-image cache reuse
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-08-09T06:28:18Z
updated_at: 2026-08-09T09:41:26Z
source_issues: []
related_prs: [958]
depends_on: []
---

# Parallel UI demos and browser-image cache reuse

## Context

The PR UI demo lane rebuilt the browser-capable image inside web verification.
That repeated Chromium package installation when no exact or trusted Main browser
cache existed, and kept demo work on the web critical path.

## Outcome

PR UI demos run as a sibling job after the WASM handoff. Trusted Main and
successful exact-head browser validation publish a dedicated browser-image
BuildKit graph for later runs.

## Scope

- Add a dedicated cache-only browser publisher with restore/publish separation.
- Move the PR UI demo out of web verification without weakening required checks.
- Keep browser-only jobs free of compiler-cache credentials.
- Evaluate broader PR job consolidation using critical-path timings.
- Exclude product behavior and browser-coverage changes.

## Acceptance criteria

- [x] Trusted Main owns the stable browser-image cache publisher.
- [x] Exact-head browser publication occurs only after successful validation.
- [x] The UI demo job runs independently from ordinary web verification.
- [x] Required preview aggregation fails explicitly after any required dependency failure.
- [x] Preflight covers cache ownership, exact-ref fallback, credentials, and job topology.
- [x] Complete exact-head GitHub Actions validation passes.

## Progress

- 2026-08-09: Measured the reported cold solve and identified the missing browser cache scope.
- 2026-08-09: Implemented the dedicated publisher, sibling UI job, exact-ref probe, and trust-boundary contracts.
- 2026-08-09: Resolved all review findings and squash-merged Nook PR #958.

## Findings and decisions

- The reported browser package layer took about 29 seconds; the enclosing demo step took about 2 minutes 36 seconds.
- Broadly combining long jobs would save only short repeated setup while serializing multi-minute gates.
- Keep independent long gates parallel. Combine only short compatible tasks that share setup and do not extend the critical path.
- Validation solves are read-only. Dedicated cache-only targets publish only after successful validation.

## References

- [Task plan](../../plans/unplanned/20260809T062818Z-parallel-ui-demo-e2e-cache.md)
- [Nook PR #958](https://github.com/meta-secret/nook/pull/958)
- [Exact-head validation](https://github.com/meta-secret/nook/actions/runs/31306217422)
