---
title: Restore failed Main verification for effd9ce00a9d
status: done
priority: p1
automation: hive
owner: cypherkitty
created_at: 2026-08-27T10:18:41Z
updated_at: 2026-08-27T18:34:00Z
source_issues: []
related_prs: [1167, 1168, 1171]
depends_on: []
---

# Restore failed Main verification for effd9ce00a9d

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

<!-- main-run:33061821960:attempt:1 -->
- 2026-08-27T10:18:41Z: Main run [33061821960 attempt 1](https://github.com/meta-secret/nook/actions/runs/33061821960)
  failed for `effd9ce00a9d9ac00d21c9e44adbb3eb97b0d8bc`. Failed jobs: WASM verification and artifact.
- 2026-08-27T16:04:11Z: Interactive delivery ownership was explicitly
  authorized. The repair will preserve Kubernetes-native ARC execution and use
  a reviewed Main-fix pull request.
- 2026-08-27T16:38:06Z: Opened [Nook PR #1168](https://github.com/meta-secret/nook/pull/1168)
  with `ci:full-e2e`; exact-head validation passed after bounded BuildKit cache
  cleanup reclaimed 47.61 GiB of rebuildable local records.
- 2026-08-27T18:34:00Z: PR #1168 and follow-up [PR #1171](https://github.com/meta-secret/nook/pull/1171)
  are squash-merged. Replacement Main [run 33102386826](https://github.com/meta-secret/nook/actions/runs/33102386826)
  passed at `ef3dfb3154ac16b7a61bbe72dfb93c467d90fad9`, including native/WASM/web
  cache publication, portable WASM cache proof, Playwright web and extension
  e2e, UI demos, and development deployment.

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.
- ARC and k8s runtime isolation uses ordinary Pods. Playwright is preinstalled
  in the prepared Pod image and executes directly there; nested runtimes remain
  prohibited.
- Live evidence tied the original export EOFs to an OOM-killed BuildKit shard.
  All shared Rust/WASM writers now force zstd and use rotated cache generations.
- WASM artifact verification is independent from cache publication. Cache
  publication remains a visible deployment gate but cannot suppress prepared-Pod
  Playwright evidence.
- The exact BuildKit Pod remained Ready with unchanged UID and restart count
  through the successful replacement run; no new OOM, EOF, or reset occurred.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/33061821960)
- [Repair PR #1168](https://github.com/meta-secret/nook/pull/1168)
- [Origin alignment PR #1171](https://github.com/meta-secret/nook/pull/1171)
- [Green replacement Main](https://github.com/meta-secret/nook/actions/runs/33102386826)
- [Delivery plan](../../plans/hive-isolated-agent-platform/20260827T160411Z-restore-main-kubernetes-native-arc.md)
