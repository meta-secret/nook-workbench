---
title: Harden identity security epochs after PR 1008 review
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-08-16T04:06:11Z
updated_at: 2026-08-16T05:13:20Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1008
  - https://github.com/meta-secret/nook/pull/1022
depends_on:
  - identity-security-epoch-recovery.md
---

# Harden identity security epochs after PR 1008 review

## Context

An exact-head review completed immediately after PR 1008 merged and reported
seven active security-epoch findings. This focused correction belongs to
[Identity management and access clarity](README.md).

## Outcome

Security-epoch recovery, projection, password-envelope migration, device access,
and persisted event contraction fail safely under the reviewed edge cases.

## Scope

- Fail-close live sessions after any post-commit epoch-completion error.
- Ignore access-neutral join requests during epoch-conflict detection.
- Zeroize partially decrypted envelope buffers on read failure.
- Replace, rather than merge, checkpoint secret snapshots.
- Resolve current device envelopes from checkpoint replacements.
- Delete persisted event rows removed by accepted-graph contraction.
- Reconcile password-envelope migration documentation with implementation.
- Add behavior-focused Rust tests for every changed domain rule.
- Exclude mobile application work and unrelated identity UI changes.

## Acceptance criteria

- [x] Every active PR 1008 review finding is verified and corrected.
- [x] Post-commit failure cannot leave an old-epoch session usable.
- [x] Concurrent join requests cannot poison a valid security rotation.
- [x] Decrypt error paths zeroize partial plaintext buffers.
- [x] Checkpoint snapshots remove omitted old-epoch secrets.
- [x] Active device grants use current checkpoint envelopes.
- [x] Contracted persisted graphs contain no orphan event rows.
- [x] Migration documentation is internally consistent.
- [x] Focused Rust coverage and exact-head PR validation pass.
- [x] Original PR 1008 threads link to the correction and are resolved.
- [x] The correction PR squash-merges and completion records are published.

## Progress

- 2026-08-16: Claimed the post-merge review correction after seven active P1
  threads appeared on PR 1008.
- 2026-08-16: Opened PR 1022 from current Main with all seven corrections and
  behavior-focused Rust regression coverage. The original PR 1008 threads now
  link to the correction and are resolved.
- 2026-08-16: Addressed two additional exact-head findings before waiting for
  validation: checkpoint selection now tolerates a concurrent neutral head,
  and the event-log design documents the fail-closed live-session reset.
- 2026-08-16: Exact-head validation run 31927946413 passed on `d857c22`, the
  readiness audit reported zero unresolved threads, and PR 1022 squash-merged
  as `c59724966fb18283604c8b068eca1d924ac382b5`.

## Findings and decisions

- The findings span several crates but all enforce the same merged
  security-epoch transition contract, so they form one cohesive correction PR.
- The separate Hive Main-failure record remains automation-owned and is not
  claimed by this task.

## References

- [PR 1008](https://github.com/meta-secret/nook/pull/1008)
- [Original security-epoch deliverable](identity-security-epoch-recovery.md)
