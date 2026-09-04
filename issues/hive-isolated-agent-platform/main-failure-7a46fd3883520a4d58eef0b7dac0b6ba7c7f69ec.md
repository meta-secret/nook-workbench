---
title: Restore failed Main verification for 7a46fd388352
status: blocked
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-09-04T20:31:01Z
updated_at: 2026-09-04T23:42:00Z
source_issues: []
related_prs: [1338, 1343]
depends_on: []
---

# Restore failed Main verification for 7a46fd388352

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

- 2026-09-04T23:42:00Z: PR #1343 remains unmerged at `700292aa43c811ea46b841fcef010a01750fd3ff`. Required Development Core execution hit the account usage limit before implementing the accepted Rust/WASM ownership correction. Existing test and browser-lifecycle repairs are pushed, but exact target-grant classification must move into Core with domain and ABI tests before readiness. [Blocked worklog](../../worklogs/unplanned/2026-09-04T2342-authentication-e2e-blocked.md) and [superseding plan](../../plans/unplanned/2026-09-04T2339-authentication-grant-authority.md) preserve evidence and next steps. No acceptance criterion is marked complete.

- 2026-09-04T20:48:00Z: User-authorized interactive takeover after confirming Hive worker and dispatcher deployments are stopped and no fix PR exists. PR [1343](https://github.com/meta-secret/nook/pull/1343) corrects shared Playwright collection; full browser and extension validation is running. Plan: [restore E2E collection](../../plans/unplanned/2026-09-04T2043-restore-e2e-collection.md).

<!-- main-run:33911953749:attempt:1 -->
- 2026-09-04T20:31:01Z: Main run [33911953749 attempt 1](https://github.com/meta-secret/nook/actions/runs/33911953749)
  failed for `7a46fd3883520a4d58eef0b7dac0b6ba7c7f69ec`. Failed jobs: Extension e2e, Web e2e.

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/33911953749)
