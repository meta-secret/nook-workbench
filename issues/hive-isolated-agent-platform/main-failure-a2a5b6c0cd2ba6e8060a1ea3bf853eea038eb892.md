---
title: Restore failed Main verification for a2a5b6c0cd2b
status: blocked
priority: p1
automation: hive
owner: unassigned
created_at: 2026-07-28T14:10:49Z
updated_at: 2026-07-28T16:20:04Z
source_issues: []
related_prs: [855]
depends_on: []
---

# Restore failed Main verification for a2a5b6c0cd2b

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

<!-- main-run:30362865457:attempt:1 -->
- 2026-07-28T14:10:49Z: Main run [30362865457 attempt 1](https://github.com/meta-secret/nook/actions/runs/30362865457)
  failed for `a2a5b6c0cd2ba6e8060a1ea3bf853eea038eb892`. Failed jobs: Extension e2e, Web e2e.
- 2026-07-28T14:25:00Z: Repair investigation is blocked before implementation:
  the required Hive guest formatter cannot run because the guest lacks the Rust
  toolchain. No repair branch, PR, or Main update was published.
- 2026-07-28T15:17:48Z: Resume attempt confirmed the guest still cannot run the
  required formatter because Cargo is unavailable. No source changes, repair PR,
  or Main update were published.
- 2026-07-28T16:20:04Z: A third resume re-read the retained browser-job evidence
  and confirmed the shared IndexedDB version-change callback failure that leaves
  vault crypto unavailable after reload. The sealed guest still has no Cargo, so
  the mandatory formatter cannot complete and no unformatted repair was
  published.

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.
- The retained browser evidence points to vault-crypto restoration after reload;
  resume only in a guest that can complete the mandatory host formatting step.
- The browser evidence also identifies repeated IndexedDB version-change callback
  failures as the mechanism that leaves vault crypto unavailable; a provisioned
  guest must validate the storage dependency repair before publishing it.

## Delivery

- [Task-start plan](https://github.com/meta-secret/nook-workbench/blob/main/plans/hive-isolated-agent-platform/2026-07-28T14-20-00Z-main-failure-a2a5b6c0cd2ba6e8060a1ea3bf853eea038eb892-run-30362865457-attempt-1.md)
- [Blocked worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/hive-isolated-agent-platform/2026-07-28T14-25-00Z-main-failure-a2a5b6c0cd2ba6e8060a1ea3bf853eea038eb892-run-30362865457-attempt-1.md)
- [Resume worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/hive-isolated-agent-platform/2026-07-28T15-17-48Z-main-failure-a2a5b6c0cd2ba6e8060a1ea3bf853eea038eb892-run-30362865457-attempt-2.md)
- [Latest blocked worklog](https://github.com/meta-secret/nook-workbench/blob/main/worklogs/hive-isolated-agent-platform/2026-07-28T16-20-04Z-main-failure-a2a5b6c0cd2ba6e8060a1ea3bf853eea038eb892-run-30362865457-attempt-3.md)

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/30362865457)
