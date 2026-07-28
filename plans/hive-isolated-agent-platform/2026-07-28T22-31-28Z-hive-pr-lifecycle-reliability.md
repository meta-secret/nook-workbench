---
title: Make Hive own repair pull requests through completion
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
started_at: 2026-07-28T22:31:28Z
agent: codex
---

# Make Hive own repair pull requests through completion

## Interpreted request

Make the deployed Hive platform dependable as a continuing task owner. A Hive
repair must be visibly attributable to Hive and must not stop after opening a
pull request: it must inspect repository checks, repair failures, settle
feedback, update from Main, squash-merge, and record completion. Recover the
existing abandoned Hive repair backlog while hardening the platform.

## Requirements

- Inventory live worker, coordinator, observer, reaper, queue, and open repair
  PR state before changing behavior.
- Give every Hive-created PR a durable, searchable marker without relying only
  on branch naming.
- Ensure task prompts and worker lifecycle require ownership through exact-head
  repository checks, actionable feedback, squash merge, and completion.
- Resume ownership after worker replacement from durable task, branch, and PR
  state.
- Repair live platform faults found during the audit, including controller
  authorization failures.
- Process the existing Hive PR backlog to merged or a truthful superseded
  terminal state.
- Add behavior-focused Rust and infrastructure regression coverage.
- Deliver, deploy, and verify the exact merged platform state.

## Constraints and exclusions

- Use ordinary scoped `git`, `gh`, GitHub labels, and repository workflows; do
  not restore a publication broker or mailbox.
- Never expose credentials, raw logs, private model reasoning, or secret
  values.
- Preserve squash-only Main history and conversation-resolution policy.
- Do not use a GitHub milestone as the only marker because milestones are
  repository planning state; a stable label is the primary attribution.
- Historical unrelated draft PRs are outside the Hive repair backlog.

## Initial plan

1. Audit live Hive state, the seven open Hive repair PRs, failed checks, and
   current worker completion prompts.
2. Add a `hive` PR label and title convention, lifecycle reconciliation, and
   controller authorization repair with regression tests.
3. Push a focused platform PR, pass exact-head GitHub Actions, resolve feedback,
   squash-merge, deploy, and verify live behavior.
4. Reconcile each existing Hive PR against current Main, merging valid work and
   closing only work demonstrably superseded or obsolete.
5. Update incident records, publish the completion worklog and statistics, and
   verify no Hive-owned PR remains unattended.

## Completion evidence

- Merged platform PR with green exact-head repository-owned checks.
- Healthy deployed Hive workers, observer, dispatcher, and reaper without the
  audited authorization failure.
- Hive-created PRs visibly carry the stable Hive marker.
- Every existing Hive repair PR is merged or closed with an evidence-backed
  supersession reason.
- Published Workbench issue, worklog, and agent statistics.

## Safety review

This public-safe record contains a synthesized engineering objective and no raw
prompt, transcript, credential, secret, private data, raw log, local path, or
unnecessary infrastructure detail.
