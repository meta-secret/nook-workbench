---
title: Fix six concrete Rust and TypeScript defects
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-10T02-42-11Z-source-bug-fixes.md
finished_at: 2026-09-10T02:49:27Z
agent: codex
related_prs: [1573]
---

# Outcome

A bounded source inspection identified six concrete defects in Rust event admission, browser state publication and tooling Result propagation. Minimal corrections are committed at 79ef947b2267c8cced37001b92c8348e91c561e8 and published to existing PR1573. Fourteen files changed, with 252 insertions and 46 deletions; additions include unexecuted focused regression sources.

## Fixes and root causes

1. Remote event admission skipped duplicate IDs before validating their payload. A conflicting duplicate could overwrite IndexedDB bytes despite a different admitted in-memory event. Validate every input before deduplication and persist unique admitted bytes. Commit 9d43fa6ac.
2. Dialog portals escaped the application's themed ancestor. Disable portaling while retaining Bits UI focus behavior. Commit a38fe19bf.
3. Unlock finalization published authentication before fallible architecture admission. Perform admission first. Commit a38fe19bf.
4. Provider removal concealed persistence failure behind a void return, allowing replacement setup to continue. Propagate failure through direct callers and retain the recovery issue. Commit a38fe19bf.
5. Vale treated decoded Results as payloads and returned nested Results. Narrow decoding before accessing alerts and return the decoded Result directly. Commit 79ef947b2.
6. Vale ignored configuration/input admission failures. Propagate failures before subprocess launch. Commit 79ef947b2.

## Evidence and limitations

Source inspection and functional-owner handoffs support each concrete failure path. Rustfmt/Prettier were used only in write mode. Focused regression sources cover duplicate event rejection/idempotence and Vale decoding/admission, but were not executed. No tests, compilation, builds, typechecks, lint, code generation, PR review collection or validation workflow dispatch ran. This is not a claim that all bugs in the repository are eliminated. No broad refactoring or dependencies were added.

## Delivery

- PR: https://github.com/meta-secret/nook/pull/1573
- Plan: https://github.com/meta-secret/nook-workbench/blob/ce1d106ce74f2d8c58298bac457cd7827caef784/plans/rust-action-ownership/2026-09-10T02-42-11Z-source-bug-fixes.md
- Remaining work: user-directed runtime validation; prior unrelated broad refactoring remains outside this bounded fix pass. PR stays open and unmerged.
