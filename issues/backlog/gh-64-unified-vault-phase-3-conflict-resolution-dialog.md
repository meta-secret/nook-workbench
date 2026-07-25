---
title: "Unified vault Phase 3: Conflict resolution dialog"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-28T00:18:13Z
updated_at: 2026-06-28T06:09:08Z
source_issues: ["https://github.com/meta-secret/nook/issues/64"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Unified vault Phase 3: Conflict resolution dialog

## Imported context

This record was imported from [Nook GitHub issue #64](https://github.com/meta-secret/nook/issues/64)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

When `compareVaultSync` returns `conflict` (same `vault_version`, different content), show explicit user choice — never auto-merge.

**Docs:** [unified-vault-ui-rollout.md](.cortex/exec-plans/unified-vault-ui-rollout.md) § Phase 3  
**Depends on:** Phase 2

## Tasks

- [ ] 3.1 `VaultSyncConflictDialog` — version + side-by-side summary
- [ ] 3.2 Actions: **Keep local** / **Keep remote**
- [ ] 3.3 Block vault edits until resolved (`VaultState.syncBlocked`)
- [ ] 3.4 Conflict banner in `VaultStatusBar`

## E2E

- [ ] `e2e/sync-conflict-resolution.spec.ts`

## Historical comments

No comments.
