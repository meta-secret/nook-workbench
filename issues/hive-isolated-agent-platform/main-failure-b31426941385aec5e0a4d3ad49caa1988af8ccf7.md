---
title: Restore failed Main verification for b31426941385
status: cancelled
priority: p1
automation: manual
owner: unassigned
created_at: 2026-07-28T15:43:51Z
updated_at: 2026-08-18T05:25:00Z
source_issues: []
related_prs: [857]
depends_on: []
---

# Restore failed Main verification for b31426941385

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

<!-- main-run:30371145806:attempt:1 -->
- 2026-08-18T05:25:00Z: Cancelled. Unique remaining repair continues on Nook pull request 1050. Isolated Main-repair workers must not enqueue this incident again.
- 2026-07-28T15:43:51Z: Main run [30371145806 attempt 1](https://github.com/meta-secret/nook/actions/runs/30371145806)
  failed for `b31426941385aec5e0a4d3ad49caa1988af8ccf7`. Failed jobs: Extension e2e, Web e2e.

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/30371145806)
