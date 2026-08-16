---
title: Address post-merge PR 1008 security review
feature: devices-and-access
issue: issues/devices-and-access/identity-security-epoch-review-hardening.md
started_at: 2026-08-16T04:06:11Z
agent: codex
---

# Task plan

## Interpreted request

Deliver a focused correction PR for every actionable review finding that
arrived after PR 1008 merged, preserving the completed identity-security work.

## Requirements

- Verify all review threads, submitted reviews, and PR comments before editing.
- Correct all seven active security and data-integrity findings together.
- Add behavior-focused Rust coverage for each changed rule.
- Reply on the original PR threads with the correction PR and validation.
- Validate the exact pushed head, resolve all actionable feedback, and merge.
- Publish the completion issue update, worklog, and PR statistics.

## Constraints and exclusions

- Start from the current `origin/main` containing merged PR 1008.
- Do not remove existing identity-security functionality to reduce churn.
- Mobile product development and unrelated identity UI work remain excluded.
- Do not claim the separate automation-owned Main-failure incident.
- Use repository-owned GitHub Actions as the product validation gate.

## Change budget and PR sequence

- Estimated authored changed lines: 500
- Owning modules, packages, or layers: `nook-auth2`, `nook-event-log`, `nook-core`, `nook-wasm`, IndexedDB event persistence, and password-envelope product documentation
- Public or cross-module interfaces: security checkpoint projection, active device-envelope resolution, recovery failure semantics, and persisted accepted-event indexes
- Delivery shape: One PR
- Current PR estimated authored changed lines: 500
- Current PR slice and acceptance evidence: Correct all seven post-merge security-epoch findings; Acceptance evidence: Rust regression tests, documentation consistency, resolved original threads, exact-head validation, and squash merge
- PR slices and acceptance evidence:
  1. Correct all seven post-merge security-epoch findings; Acceptance evidence: Rust regression tests, documentation consistency, resolved original threads, exact-head validation, and squash merge

## Initial plan

1. Publish this plan and focused issue before implementation changes.
2. Verify each finding against current main and inventory nearby tests.
3. Implement minimal domain, persistence, recovery, and documentation fixes.
4. Add behavior-focused regression coverage for all corrected paths.
5. Run pre-push hygiene, commit, push, and open the correction PR.
6. Reply to the original PR 1008 threads and resolve them after replies are visible.
7. Trigger complete exact-head validation, immediately address any new feedback,
   and repeat only when the head changes.
8. Squash-merge and publish Workbench completion records.

## Completion evidence

- All seven PR 1008 findings have targeted fixes and regression coverage.
- Original thread replies identify the correction PR and final validation.
- The correction PR has no unresolved actionable feedback.
- `task pr:ready` confirms current-base exact-head readiness before merge.
- Workbench links the issue, plan, worklog, merged PR, and statistics.

## Safety review

This plan contains no prompt transcript, secret, private data, unprocessed diagnostic output, local
path, or unnecessary infrastructure detail.
