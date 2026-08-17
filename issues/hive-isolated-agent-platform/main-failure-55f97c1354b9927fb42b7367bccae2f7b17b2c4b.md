---
title: Restore failed Main verification for 55f97c1354b9
status: done
priority: p1
automation: hive
owner: unassigned
created_at: 2026-08-07T15:22:58Z
updated_at: 2026-08-17T03:30:00Z
source_issues: []
related_prs: [939, 946]
depends_on: []
---

# Restore failed Main verification for 55f97c1354b9

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

- [x] The failure is explained and fixed with targeted regression coverage.
- [x] The fix PR passes exact-head repository-owned checks, including the
  Main-equivalent browser suites.
- [x] The fix is squash-merged and the incident records its PR and validation.

## Progress

<!-- main-run:31191117680:attempt:1 -->
- 2026-08-07T15:22:58Z: Main run [31191117680 attempt 1](https://github.com/meta-secret/nook/actions/runs/31191117680)
  failed for `55f97c1354b9927fb42b7367bccae2f7b17b2c4b`. Failed jobs: WASM verification and artifact.
- 2026-08-17T03:30:00Z: Reconciled the incident after [PR 946](https://github.com/meta-secret/nook/pull/946)
  squash-merged its cache-lineage repair. The post-merge [Main run 31231174011](https://github.com/meta-secret/nook/actions/runs/31231174011)
  passed WASM verification, web e2e, and extension e2e. See the [completion worklog](../../worklogs/hive-isolated-agent-platform/2026-08-17T03-30-00Z-main-failure-55f97c1354b.md).

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.
- The failed Node-test solve followed a WASM cache lineage change. PR 946
  restored the source fallback and stable dependency fingerprinting. Its
  exact-head validation included the WASM Node test. The merged Main run
  verified the browser suites.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/31191117680)
- [Repair PR 946](https://github.com/meta-secret/nook/pull/946)
- [Repaired Main run](https://github.com/meta-secret/nook/actions/runs/31231174011)
- [PR 946 statistics](../../stats/ai-agent/946.yaml)
