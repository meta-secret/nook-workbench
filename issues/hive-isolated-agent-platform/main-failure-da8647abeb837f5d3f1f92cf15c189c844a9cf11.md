---
title: Restore failed Main verification for da8647abeb83
status: ready
priority: p1
automation: hive
owner: unassigned
created_at: 2026-08-31T17:26:39Z
updated_at: 2026-08-31T17:26:39Z
source_issues: []
related_prs: [1246]
depends_on: []
---

# Restore failed Main verification for da8647abeb83

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

<!-- main-run:33415205636:attempt:1 -->
- 2026-08-31T17:26:39Z: Main run [33415205636 attempt 1](https://github.com/meta-secret/nook/actions/runs/33415205636)
  failed for `da8647abeb837f5d3f1f92cf15c189c844a9cf11`. Failed jobs: Extension e2e, UI demos.

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/33415205636)
