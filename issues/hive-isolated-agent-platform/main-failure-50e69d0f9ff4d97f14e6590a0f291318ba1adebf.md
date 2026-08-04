---
title: Restore failed Main verification for 50e69d0f9ff4
status: done
priority: p1
automation: hive
owner: unassigned
created_at: 2026-08-04T18:12:13Z
updated_at: 2026-08-04T20:18:19Z
source_issues: []
related_prs: [914, 915, 916]
depends_on: []
---

# Restore failed Main verification for 50e69d0f9ff4

## Context

The trusted Main workflow failed after a push to the default branch. This
incident belongs to the [Hive isolated agent platform](README.md) because a
ready automated Workbench record is the durable handoff into the agent worker.

## Outcome

The compact Identity Bridge failure was repaired by PR 915. Its resulting
Main run completed successfully, superseding Hive PR 916 and retiring this
repair generation.

## Scope

- Diagnose the failed Main jobs from the linked workflow run and its retained
  artifacts.
- Implement the smallest root-cause fix with behavior-focused regression
  coverage.
- Add the `ci:full-e2e` label because the problem was observed on Main.
- Do not bypass checks, weaken cache isolation, or push directly to Main.

## Acceptance criteria

- [x] The failure is explained and fixed with targeted regression coverage.
- [x] The fix PR passes exact-head repository-owned checks, including the
  Main-equivalent browser suites.
- [x] The fix is squash-merged and the incident records its PR and validation.

## Progress

<!-- main-run:30935881833:attempt:1 -->
- 2026-08-04T18:12:13Z: Main run [30935881833 attempt 1](https://github.com/meta-secret/nook/actions/runs/30935881833)
  failed for `50e69d0f9ff4d97f14e6590a0f291318ba1adebf`. Failed jobs: Web e2e.
- 2026-08-04T18:16:38Z: Hive opened [PR 916](https://github.com/meta-secret/nook/pull/916),
  diagnosed compact Identity Bridge containment, and iterated on regression
  coverage.
- 2026-08-04T19:55:55Z: [PR 915](https://github.com/meta-secret/nook/pull/915)
  independently landed the production repair at
  `c3145c0465f985e2e574721a4eb7846743e95ac1`, superseding PR 916.
- 2026-08-04T20:18:04Z: Main run [30945523266](https://github.com/meta-secret/nook/actions/runs/30945523266)
  succeeded with native Rust, WASM, web build, browser E2E, extension E2E, UI
  demos, and development deployment green.
<!-- hive-retired:successful-rerun -->

## Findings and decisions

- Main failed because compact Identity Bridge graph cards escaped their Flow
  node bounds.
- Hive correctly consumed the incident, produced a repair PR, and continued
  iterating; PR 915 reached the same repair boundary first.
- The successful newer Main revision is authoritative proof that the failed
  behavior is repaired, so the older Hive delivery and its exclusive blockers
  are obsolete.
- Main failure records include job names and workflow links, never raw logs or
  credentials.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/30935881833)
- [Successful replacement Main run](https://github.com/meta-secret/nook/actions/runs/30945523266)
- [Merged repair PR 915](https://github.com/meta-secret/nook/pull/915)
- [Superseded Hive PR 916](https://github.com/meta-secret/nook/pull/916)
