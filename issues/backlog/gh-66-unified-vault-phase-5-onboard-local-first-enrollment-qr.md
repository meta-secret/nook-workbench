---
title: "Unified vault Phase 5: Onboard — local-first enrollment QR"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-28T00:18:21Z
updated_at: 2026-06-28T07:19:22Z
source_issues: ["https://github.com/meta-secret/nook/issues/66"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Unified vault Phase 5: Onboard — local-first enrollment QR

## Imported context

This record was imported from [Nook GitHub issue #66](https://github.com/meta-secret/nook/issues/66)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Enrollment QR references sync provider for initial pull; new device creates local cache then unlocks with password.

**Docs:** [unified-vault-ui-rollout.md](.cortex/exec-plans/unified-vault-ui-rollout.md) § Phase 5  
**Depends on:** Phase 2

## Tasks

- [ ] 5.1 Enrollment code: sync provider for pull, not vault location
- [ ] 5.2 New device: remote → local cache → password unlock
- [ ] 5.3 Update `EnrollmentQrOnboardCard` copy

## Historical comments

### cypherkitty — 2026-06-28T07:19:22Z

Completed in #79 (squash-merged to `main` as bb54d6b). Unified vault rollout: local-first IndexedDB vault, sync providers with version reconciliation, conflict dialog, fan-out sync, onboard/enrollment, help copy, join propagation, and legacy migration.
