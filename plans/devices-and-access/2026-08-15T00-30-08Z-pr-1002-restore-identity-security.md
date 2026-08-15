---
title: Restore the identity security epoch work
feature: devices-and-access
issue: issues/devices-and-access/identity-directory.md
started_at: 2026-08-15T00:30:08Z
agent: codex
supersedes: plans/devices-and-access/2026-08-13T03-58-00Z-identity-directory.md
---

# Task plan

## Interpreted request

Restore the security-critical identity work that PR 997 removed during its
scope reduction. Finish that work in PR 1002. Also strengthen the repository
workflow so a future PR split preserves every authored change in linked pull
requests and Workbench records.

## Requirements

- Restore identity epoch handling and remote epoch visibility.
- Restore security-epoch persistence and directory reconciliation.
- Restore destructive browser-recovery behavior and its coverage.
- Preserve the existing PR 1002 handoff and staged-genesis fixes.
- Resolve the known P1 findings against the restored implementation.
- Correct the Workbench record that claimed removed epoch work remained.
- Require linked successor pull requests before code leaves an oversized PR.
- Continue every required successor until the complete feature is delivered.

## Constraints and exclusions

- Keep portable security policy in Rust.
- Keep TypeScript limited to browser lifecycle and presentation concerns.
- Do not add mobile application code.
- Do not restore a known-unsafe snapshot without repairing its P1 findings.
- Do not discard authored work to satisfy the pull-request size ceiling.
- Run heavy validation only through repository-owned GitHub Actions.

## Change budget and PR sequence

- Estimated authored changed lines: 4,600
- Owning modules, packages, or layers: `.cortex`, `nook-auth2`, `nook-event-log`, `nook-wasm`, and browser recovery tests
- Public or cross-module interfaces: Identity DEK epoch state, epoch-checkpoint events, reconciliation markers, and typed WASM recovery operations
- Delivery shape: One PR
- Current PR estimated authored changed lines: 4,600
- Current PR slice and acceptance evidence: Restore and repair the removed epoch, reconciliation, persistence, and recovery work in PR 1002; Acceptance evidence: Rust, actual-WASM, browser coverage, and exact-head validation pass
- PR slices and acceptance evidence: Restore and repair the removed epoch, reconciliation, persistence, and recovery work in PR 1002; Acceptance evidence: Rust, actual-WASM, browser coverage, and exact-head validation pass

## Initial plan

1. Publish this superseding plan and correct the active Workbench issue.
2. Strengthen Cortex split rules and their executable enforcement tests.
3. Restore the pre-reduction implementation without overwriting PR 1002 work.
4. Repair every known security, concurrency, migration, and recovery finding.
5. Measure the authored diff and apply the preservation protocol if needed.
6. Run pre-push hygiene, push, and trigger complete PR checks directly.
7. Address every current review comment immediately.
8. Pass exact-head readiness, squash-merge, and publish completion records.

## Completion evidence

- No module removed by PR 997's scope-reduction commit remains absent.
- Known P1 findings have behavior-focused regression coverage.
- Cortex requires a linked draft successor before a split removes code.
- Workbench records every required slice and keeps the feature incomplete.
- PR 1002 passes exact-head checks with no unresolved conversations.

## Safety review

This plan contains no prompt transcript, secret, private data, local path, or
raw diagnostic output.
