---
title: Restore failed Main verification for ee2a7d6f5bfe
status: done
priority: p1
automation: hive
owner: hive
created_at: 2026-07-31T07:15:57Z
updated_at: 2026-08-02T17:42:00Z
source_issues: []
related_prs: [886, 887]
depends_on: []
---

# Restore failed Main verification for ee2a7d6f5bfe

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

<!-- main-run:30610434179:attempt:1 -->
- 2026-07-31T07:15:57Z: Main run [30610434179 attempt 1](https://github.com/meta-secret/nook/actions/runs/30610434179)
- 2026-08-02T17:42:00Z: Retained UI-demo evidence showed the browser received an HTML fallback instead of the expected WASM binary. Merged Hive PR [#887](https://github.com/meta-secret/nook/pull/887), labeled `hive` and `ci:full-e2e`, carried regression coverage and completed exact-head Main-equivalent browser validation. Its resulting Main run [30653103828](https://github.com/meta-secret/nook/actions/runs/30653103828) passed Extension e2e and UI demos; this incident is resolved.

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.
- Later green Main verification is the authoritative completion evidence when a
  repair branch was merged before this retained incident was resumed.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/30610434179)
