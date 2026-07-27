---
title: Queue every failed Main revision for Hive repair
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/README.md
started_at: 2026-07-27T19:20:00Z
agent: codex
---

# Queue every failed Main revision for Hive repair

## Interpreted request

Make the Main-to-Hive boundary dependable: every unsuccessful trusted Main run
must create or refresh a durable Hive repair incident, including failures
confined to browser end-to-end and UI-demo jobs.

## Requirements

- Remove the policy that suppresses Hive incidents for E2E-only Main failures.
- Preserve trusted-run validation, deduplication by failed revision, safe
  metadata-only publication, and retry handling.
- Add behavior-focused regression coverage proving E2E-only failures enter the
  same repair queue as native, build, deployment, mixed, and unknown failures.
- Align workflow and architecture documentation with the corrected behavior.
- Deliver through a normal pull request with the full Main-equivalent browser
  validation label, exact-head readiness audit, squash merge, and Workbench
  completion records.

## Constraints and exclusions

- Do not copy workflow logs, credentials, or private runtime data into
  Workbench.
- Do not weaken Hive isolation, task deduplication, delivery-generation
  ownership, or repository checks.
- Repairing the product regressions from a particular failed Main revision is
  owned by the Hive incident created after this queueing correction is active;
  this change repairs the broken dispatch policy itself.

## Initial plan

1. Inspect the current handoff implementation, tests, and documentation from
   the latest default branch.
2. Remove deferred-E2E classification and retirement paths, simplifying every
   qualifying failed Main run into incident creation or refresh.
3. Add focused regressions for E2E-only incident creation and existing-incident
   refresh behavior.
4. Format, publish a pull request, apply full-Main validation, address findings,
   and squash-merge after exact-head readiness succeeds.
5. Publish the linked Workbench worklog, issue update, and agent statistics.

## Completion evidence

- Focused handoff tests demonstrate that Web e2e, UI demos, and Extension e2e
  failures generate a ready Hive incident.
- Repository-owned pull-request checks, including Main-equivalent browser
  suites, pass on the exact merged head.
- Documentation states that every actionable unsuccessful Main run enters the
  Hive queue.
- The merged pull request and linked Workbench records are visible publicly.

## Safety review

This plan contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
