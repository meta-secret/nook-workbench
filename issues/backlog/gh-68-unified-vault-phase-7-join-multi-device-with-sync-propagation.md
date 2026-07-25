---
title: "Unified vault Phase 7: Join / multi-device with sync propagation"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-28T00:18:24Z
updated_at: 2026-06-28T07:19:26Z
source_issues: ["https://github.com/meta-secret/nook/issues/68"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Unified vault Phase 7: Join / multi-device with sync propagation

## Imported context

This record was imported from [Nook GitHub issue #68](https://github.com/meta-secret/nook/issues/68)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Join/approve flows operate on local vault; sync layer propagates `joins:` / `members:` to all providers.

**Docs:** [unified-vault-ui-rollout.md](.cortex/exec-plans/unified-vault-ui-rollout.md) § Phase 7  
**Depends on:** Phase 4

## Tasks

- [ ] 7.1 Join requests on local vault; sync fan-out
- [ ] 7.2 `PendingJoinsBanner` — sync layer only
- [ ] 7.3 `JoinEnrollmentDialog` — clarify keys vs master password

## Historical comments

### cypherkitty — 2026-06-28T07:19:25Z

Completed in #79 (squash-merged to `main` as bb54d6b). Unified vault rollout: local-first IndexedDB vault, sync providers with version reconciliation, conflict dialog, fan-out sync, onboard/enrollment, help copy, join propagation, and legacy migration.
