---
title: Add the Team Plan runner
feature: agent-workflow
issue: issues/agent-workflow/team-plan-runner.md
started_at: 2026-08-30T21:45:55Z
agent: codex
gizmo_id: team-plan-runner
---

# Task plan

## Interpreted request

Add the missing executable admission layer that lets Gizmo safely run reviewed
work across teams. Call it Team Plan and keep it a thin durable adapter over the
existing module-delivery domain rather than a new orchestration system.

## Requirements

- Bind every run, generation, attempt, and durable receipt to exact Git state.
- Reuse typed admission, ownership, claims, evidence, leases, and integration.
- Persist only the minimum redacted state needed for exact reconstruction.
- Fail closed on forged ownership, synthesis, stale leases, drift, conflicts,
  missing evidence, over-capacity journals, and premature finalization.
- Keep native worker lifecycle, communication, retries, and cancellation in the
  active harness.
- Complete exact-head review, hosted validation, readiness, bottom-up merge,
  successor retargeting/revalidation, and Workbench closeout.

## Constraints and exclusions

- No model runner, scheduler, transcript protocol, hosted service, Hive
  integration, or second admission model.
- No vault product behavior in this prerequisite.
- Every authored source file remains at or below 1,000 lines.
- No PR exceeds 2,000 authored additions plus deletions.
- No raw provider evidence, command output, credentials, or secrets are stored
  in the Team Plan journal or pinned receipts.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- GitHub native stack: #1242
- PR sequence mode: native stacked PRs, merged bottom-up
- PR #1239, `team-plan-runner`: typed ordinary-task admission, strict journal,
  Git CAS lock, bounded generations, durable storage primitives, and redacted
  evidence receipt restoration. Exact head
  `3f7f3e65b66e05fb9a6a74481227c708c33597ed`; 1,999 authored lines. Acceptance:
  77 focused tests / 327 assertions plus hosted exact-head policy and review.
- PR #1241, `team-plan-runner-runtime`: restartable runtime and CLI, external
  workspaces, immutable run namespaces, exact artifact replay and discard,
  bounded record input, Task wiring, and canonical Cortex activation. Exact
  head `8094bad1c85ad66d03c5f850cc3c295901159584`; 1,996 authored lines.
  Acceptance: 83 focused tests / 354 assertions, format, lint, strict TypeScript,
  Cortex audit, hosted exact-head policy and review.

## Delivery plan

1. Stabilize exact-head review and hosted validation for foundation PR #1239.
2. Merge #1239, retarget/rebase #1241 onto current `main`, and rerun its complete
   local and hosted exact-head gates.
3. Stabilize review/readiness and merge #1241.
4. Verify remote `main`, close the Workbench issue with exact merged evidence,
   then use Team Plan for the provider-vault conflict product implementation.

## Completion evidence

- The foundation reconstructs strict journal state and authenticated redacted
  receipts without exposing runtime surfaces.
- The successor reconstructs the same admissions, evidence barriers, frontiers,
  run-scoped artifacts, and retries after restart.
- Raw evidence sentinels are absent from journal and pinned receipt blobs.
- Symlinked journal aliases, path reuse, stale locks, orphaned CAS writes,
  oversized record files, source movement, and outstanding leases fail closed.
- Both PRs are squash-merged bottom-up and remote `main` contains the verified
  result before the dependent vault UX begins.

## Safety review

- This record contains no prompts, transcripts, secrets, raw logs, local paths,
  private infrastructure values, or unnecessary environment data.
- Security-sensitive admission and replay decisions remain in typed repository
  authorities rather than prompts, Markdown, or worker output.
