---
title: Restore failed Main verification for 2fee487609e2
status: done
priority: p1
automation: hive
owner: unassigned
created_at: 2026-08-11T02:11:36Z
updated_at: 2026-08-16T19:54:29Z
source_issues: []
related_prs: [963, 980]
depends_on: []
---

# Restore failed Main verification for 2fee487609e2

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

<!-- main-run:31449880633:attempt:1 -->
- 2026-08-11T02:11:36Z: Main run [31449880633 attempt 1](https://github.com/meta-secret/nook/actions/runs/31449880633)
  failed for `2fee487609e2ecfd7c66d7a4889b00fb36338bf6`. Failed jobs: Extension e2e.
- 2026-08-16T19:54:29Z: Verified that [PR #980](https://github.com/meta-secret/nook/pull/980)
  repaired the recovery-code path, carried `ci:full-e2e`, and was squash-merged
  as `1356b17a3c821f6dff54888d5536dc394539bae4`. Its exact-head extension
  browser gate passed. The resulting [Main run 31505426552](https://github.com/meta-secret/nook/actions/runs/31505426552)
  also passed. See the [completion worklog](../../worklogs/hive-isolated-agent-platform/2026-08-16T19-54-29Z-main-failure-2fee487609e2-run-31449880633-attempt-1.md).

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.
- The failure was a race in the recovery-code confirmation flow: restoring the
  normal enrollment actions removed the saved confirmation before the browser
  could observe it. PR #980 covered the completed path with the Main-equivalent
  extension suite.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/31449880633)
