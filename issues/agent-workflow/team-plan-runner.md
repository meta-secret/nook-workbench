---
title: Add the Team Plan runner
status: in_review
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: team-plan-runner
created_at: 2026-08-30T00:00:00Z
updated_at: 2026-08-31T00:32:16Z
source_issues: []
related_prs: [1239, 1241]
depends_on: []
---

# Add the Team Plan runner

## Context

Nook already had typed module-delivery admission and a separate generic
delegation journal, but ordinary multi-team work remained fail-closed because
no executable adapter combined those authorities. The provider-vault conflict
redesign is waiting on this capability so Rust, WASM, web, and security work can
execute through the trusted multi-team path.

## Outcome

Provide one Loom capability called **Team Plan** (the **Gizmo team runner** in
human-facing prose) that durably executes reviewed module-delivery plans. It
validates an immutable plan, exposes only authorized attempts, records leases
and dispositions, reconstructs exact state, supports immutable-generation
restart, and joins only completed runs.

## Scope

- Reuse the existing module-delivery authority and typed policy decisions.
- Admit ordinary read-only and write tasks through closed team profiles while
  keeping ordinary evidence synthesis fail-closed.
- Persist crash-consistent, strictly decoded journals below the 4 MiB ceiling.
- Pin accepted writes and redacted accepted-evidence receipts under immutable
  run-scoped Git CAS refs without retaining raw provider output.
- Recover stale locks, canonicalize journal paths, keep workspaces outside the
  source repository, and explicitly discard only authenticated finalized runs.
- Expose deterministic start, select, record, restart, and finalize commands;
  keep native subagent lifecycle in the active harness.
- Activate only the canonical Cortex delegation behavior proven by tests.

## Non-goals

- No model runner, scheduler, transcript protocol, hosted service, or Hive
  integration.
- No product vault UI or cryptographic-domain changes in this prerequisite.
- No second admission model or web reimplementation of domain eligibility.

## Acceptance criteria

- [x] Immutable Team Plans start only from reviewed plans and exact Git state.
- [x] Selection is deterministic, capacity-safe, conflict-free, and evidence-complete.
- [x] Leases, results, retries, and immutable restarts reconstruct after process failure.
- [x] Raw provider evidence is absent from the journal and pinned durable receipt.
- [x] Stale, forged, incomplete, or out-of-scope work cannot advance the run.
- [x] Finalization fails closed until every required node and frontier completes.
- [x] The active harness remains the sole native subagent lifecycle owner.
- [x] Foundation and runtime slices each remain at or below 2,000 authored lines.
- [ ] Both exact PR heads pass hosted review, validation, readiness, and merge.

## Progress

- The delivery was split into GitHub native stack #1242 after exact-head review
  proved that a single safe correction would exceed the PR limit.
- Foundation PR #1239 is published at
  `3f7f3e65b66e05fb9a6a74481227c708c33597ed`: 1,999 authored lines; 77 focused
  tests and 327 assertions; strict storage, locking, admission, ownership, and
  redacted receipt restoration.
- Runtime PR #1241 is published at
  `8094bad1c85ad66d03c5f850cc3c295901159584`: 1,996 authored lines; 83 focused
  tests and 354 assertions; restartable runtime, run-scoped artifacts, bounded
  CLI input, explicit discard, and canonical Cortex activation.
- Local format, lint, strict TypeScript, diff, and Cortex audit gates pass at the
  published stack head. Fresh hosted exact-head review and validation are in progress.

## Authorization

The user explicitly selected and requested this architectural prerequisite on
2026-08-30 and requested the simpler name Team Plan.

## References

- `.cortex/gizmo/workflows/subagent-delegation.md`
- `agentic-ai/loom/src/agent-workflow/`
- `agentic-ai/loom/src/module-delivery/`
- `agentic-ai/loom/src/team-plan/`
