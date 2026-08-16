---
title: Restore failed Main verification for d9eb3bc3147b
status: done
priority: p1
automation: hive
owner: unassigned
created_at: 2026-08-12T08:26:32Z
updated_at: 2026-08-16T20:09:54Z
source_issues: []
related_prs: [988]
depends_on: []
---

# Restore failed Main verification for d9eb3bc3147b

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

<!-- main-run:31577227164:attempt:1 -->
- 2026-08-12T08:26:32Z: Main run [31577227164 attempt 1](https://github.com/meta-secret/nook/actions/runs/31577227164)
  failed for `d9eb3bc3147be268bdad044ec7ecf62c24ef8db1`. Failed jobs: UI demos, Web e2e.

<!-- main-run:31834552729:attempt:1 -->
- 2026-08-16T20:09:54Z: Retired as obsolete after descendant Main run
  [31834552729 attempt 1](https://github.com/meta-secret/nook/actions/runs/31834552729)
  succeeded for `3caec258bb69a96f83a18affe7bdccece6ca53ee`, which contains this
  failed revision. No separate Hive repair remains necessary.
<!-- hive-retired:successful-rerun -->

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/31577227164)
