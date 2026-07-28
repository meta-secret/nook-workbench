---
title: Restore failed Main verification for 0bf855e41dc8
status: blocked
priority: p1
automation: hive
owner: unassigned
created_at: 2026-07-28T08:19:16Z
updated_at: 2026-07-28T09:26:48Z
source_issues: []
related_prs: [836, 837]
depends_on: []
---

# Restore failed Main verification for 0bf855e41dc8

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

<!-- main-run:30339546499:attempt:1 -->
- 2026-07-28T08:19:16Z: Main run [30339546499 attempt 1](https://github.com/meta-secret/nook/actions/runs/30339546499)
  failed for `0bf855e41dc8ecc1a616a8dc6889c6ef084f0674`. Failed jobs: Extension e2e, UI demos, Web e2e.
- 2026-07-28T09:26:48Z: Diagnosis found the shared initial-session crypto failure in retained browser evidence. The overlapping active repair is [PR #837](https://github.com/meta-secret/nook/pull/837), which changes that boundary and carries the required full-e2e label, but its exact-head full browser and extension suites are currently failing. This incident is blocked on that active repair being completed or superseded; no competing PR was opened.

## Findings and decisions

- Main failure records include job names and workflow links, never raw logs or
  credentials.
- The affected browser paths attempted vault work before a session key was available, producing downstream browser failures. PR #837 owns the same root-cause boundary and its regression coverage.
- Avoided a duplicate repair while PR #837 remains active and red; its full-browser failures must be resolved before a replacement Main run can verify this incident.

## References

- [Failed Main run](https://github.com/meta-secret/nook/actions/runs/30339546499)
- [Overlapping active repair PR #837](https://github.com/meta-secret/nook/pull/837)
