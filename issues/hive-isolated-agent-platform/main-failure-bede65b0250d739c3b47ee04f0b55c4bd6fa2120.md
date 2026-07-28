---
title: Restore failed Main verification for bede65b0250d
status: blocked
priority: p1
automation: hive
owner: unassigned
created_at: 2026-07-28T13:30:14Z
updated_at: 2026-07-28T13:35:00Z
source_issues: []
related_prs: [852]
depends_on: []
---

# Restore failed Main verification for bede65b0250d

## Context

The trusted Main workflow failed after a push to the default branch. This
incident belongs to the [Hive isolated agent platform](README.md) because a
ready automated Workbench record is the durable handoff into the agent worker.

## Outcome

Restore the latest Main integration state with a normal, reviewed Nook pull
request while preserving the failing revision and workflow evidence.

## Scope

- Diagnose the failed Main jobs from the linked workflow run and its retained
  artifacts.
- Implement the smallest root-cause fix with behavior-focused regression
  coverage.
- Add the `ci:full-e2e` label because the problem was observed on Main.
- Do not bypass checks, weaken cache isolation, or push directly to Main.

## Acceptance criteria

- [ ] The failure is explained and fixed with targeted regression coverage.
- [ ] The fix PR passes exact-head repository-owned checks, including the
  Main-equivalent browser suites.
- [ ] The fix is squash-merged and the incident records its PR and validation.

## Progress

<!-- main-run:30358643179:attempt:1 -->
- 2026-07-28T13:30:14Z: Main run [30358643179 attempt 1](https://github.com/meta-secret/nook/actions/runs/30358643179)
  failed for `bede65b0250d739c3b47ee04f0b55c4bd6fa2120`. Failed jobs: Extension e2e, Web e2e.
- 2026-07-28T13:35:00Z: Diagnosed an undeclared Chromium executable binding in
  two persistent-extension browser flows and prepared the focused correction.
  Delivery is blocked before commit because the mandatory repository formatter
  invokes an unavailable `cargo` executable in this worker. See worklog:
  `worklogs/hive-isolated-agent-platform/2026-07-28T13-35-00Z-main-failure-bede65b.md`.

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.
- Do not bypass the required formatting gate; resume only in a worker whose
  Hive guest formatter has the Rust toolchain available.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/30358643179)
