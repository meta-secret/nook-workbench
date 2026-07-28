---
title: Restore failed Main verification for c5a226db6403
status: ready
priority: p1
automation: hive
owner: unassigned
created_at: 2026-07-28T10:20:11Z
updated_at: 2026-07-28T10:20:11Z
source_issues: []
related_prs: [844]
depends_on: []
---

# Restore failed Main verification for c5a226db6403

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

<!-- main-run:30346393294:attempt:1 -->
- 2026-07-28T10:20:11Z: Main run [30346393294 attempt 1](https://github.com/meta-secret/nook/actions/runs/30346393294)
  failed for `c5a226db6403ed52b96a0cac36fadcb4177318c3`. Failed jobs: Extension e2e, Web e2e.

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/30346393294)
