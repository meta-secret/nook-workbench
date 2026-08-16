---
title: Harden identity security epochs after PR 1008 review
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-16T04:06:11Z
updated_at: 2026-08-16T04:06:11Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1008
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

- [ ] Every active PR 1008 review finding is verified and corrected.
- [ ] Post-commit failure cannot leave an old-epoch session usable.
- [ ] Concurrent join requests cannot poison a valid security rotation.
- [ ] Decrypt error paths zeroize partial plaintext buffers.
- [ ] Checkpoint snapshots remove omitted old-epoch secrets.
- [ ] Active device grants use current checkpoint envelopes.
- [ ] Contracted persisted graphs contain no orphan event rows.
- [ ] Migration documentation is internally consistent.
- [ ] Focused Rust coverage and exact-head PR validation pass.
- [ ] Original PR 1008 threads link to the correction and are resolved.
- [ ] The correction PR squash-merges and completion records are published.

## Progress

- 2026-08-16: Claimed the post-merge review correction after seven active P1
  threads appeared on PR 1008.

## Findings and decisions

- The findings span several crates but all enforce the same merged
  security-epoch transition contract, so they form one cohesive correction PR.
- The separate Hive Main-failure record remains automation-owned and is not
  claimed by this task.

## References

- [PR 1008](https://github.com/meta-secret/nook/pull/1008)
- [Original security-epoch deliverable](identity-security-epoch-recovery.md)
