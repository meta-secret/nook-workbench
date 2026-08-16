---
title: Unify Main and Rust ecosystem orchestration
feature: unplanned
issue: issues/unplanned/unify-main-rust-ecosystem-workflow.md
started_at: 2026-08-16T05:29:27Z
agent: codex
---

# Task plan

## Interpreted request

Replace the two independent merged-head workflow runs with one authoritative
Main run while retaining every product and Rust ecosystem gate.

## Requirements

- Run ecosystem jobs in parallel with Main's existing native producer.
- Keep one reusable ecosystem job definition shared with PR validation.
- Preserve scheduled, manual, and minds-only PR ecosystem execution.
- Route merged-head ecosystem failures into Main statistics and failure handoff.
- Suppress empty trusted-consumer runs caused by the PR-close workflow.
- Retain specialist workflows whose triggers, permissions, or trust boundaries
  differ from Main.
- Update durable CI documentation and structural coverage.
- Complete exact-head validation, review resolution, squash merge, and records.

## Constraints and exclusions

- Do not delete or weaken dependency, deterministic, fuzz, Kani, or Dylint gates.
- Do not serialize ecosystem jobs behind product verification.
- Do not change product code, Bake targets, cache credentials, or security policy.
- Use GitHub-hosted validation and do not launch unnecessary focused remote tasks.

## Change budget and PR sequence

- Estimated authored changed lines: 400
- Owning modules, packages, or layers: GitHub Actions Main and Rust ecosystem entry points, trusted PR consumers, CI structural tests, and Cortex CI workflow documentation
- Public or cross-module interfaces: Main workflow job topology, Main statistics and failure-handoff input, and trusted workflow-run branch filtering
- Delivery shape: One PR
- Current PR estimated authored changed lines: 400
- Current PR slice and acceptance evidence: Move Main-push ecosystem orchestration into Main, suppress empty PR-close consumers, and preserve specialist boundaries; Acceptance evidence: structural tests, exact-head validation, one merged-head Main workflow topology, and squash merge
- PR slices and acceptance evidence:
  1. Move Main-push ecosystem orchestration into Main, suppress empty PR-close consumers, and preserve specialist boundaries; Acceptance evidence: structural tests, exact-head validation, one merged-head Main workflow topology, and squash merge

## Initial plan

1. Publish this plan and focused issue before implementation edits.
2. Branch from current `origin/main` and inventory workflow consumers and tests.
3. Call reusable ecosystem jobs from Main and remove the separate push trigger.
4. Filter PR-close wakeups from trusted consumers while preserving their
   credential boundary.
5. Update structural coverage and Cortex workflow documentation.
6. Run pre-push hygiene, local advisory review, and push the focused PR.
7. Trigger complete exact-head validation and address feedback immediately.
8. Squash-merge and publish the issue update, worklog, and statistics.

## Completion evidence

- Main contains the parallel reusable Rust ecosystem job call.
- The thin Rust ecosystem workflow has no Main push trigger.
- Trusted PR consumers ignore the PR-close run's `main` branch.
- CI tests and Cortex agree with the new ownership boundary.
- `task pr:ready` reports exact-head readiness with zero unresolved threads.
- Workbench links the merged PR, worklog, and statistics.

## Safety review

This plan contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
