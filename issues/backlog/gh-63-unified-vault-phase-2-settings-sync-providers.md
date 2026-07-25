---
title: "Unified vault Phase 2: Settings — sync providers"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-28T00:18:12Z
updated_at: 2026-06-28T06:09:08Z
source_issues: ["https://github.com/meta-secret/nook/issues/63"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Unified vault Phase 2: Settings — sync providers

## Imported context

This record was imported from [Nook GitHub issue #63](https://github.com/meta-secret/nook/issues/63)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Convert storage providers into **sync providers**: optional replicas of the local vault. Remove active-provider vault switching.

**Docs:** [unified-vault-ui-rollout.md](.cortex/exec-plans/unified-vault-ui-rollout.md) § Phase 2  
**Depends on:** Phase 1

## Tasks

- [ ] 2.1 Rename "Storage providers" → **Sync providers** (locale + UI)
- [ ] 2.2 Remove `activeProviderId` vault switching — all enabled providers sync
- [ ] 2.3 Add sync provider flow: credentials → fetch remote → `compareVaultSync`
- [ ] 2.4 Per-provider sync status (version, last synced)
- [ ] 2.5 Reconnect re-runs reconciliation, not full vault reload

## E2E

- [ ] `e2e/sync-provider-connect.spec.ts`

## Historical comments

No comments.
