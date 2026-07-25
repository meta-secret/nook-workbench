---
title: "Unified vault Phase 1: Login gate — password-first local unlock"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-28T00:18:10Z
updated_at: 2026-06-28T06:09:08Z
source_issues: ["https://github.com/meta-secret/nook/issues/62"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Unified vault Phase 1: Login gate — password-first local unlock

## Imported context

This record was imported from [Nook GitHub issue #62](https://github.com/meta-secret/nook/issues/62)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Redesign the login gate for **local-first unified vault**: unlock with master password when a local vault exists; first-time users create a local vault without picking a storage provider.

**Parent:** (linked from epic after creation)  
**Docs:** [unified-vault.md](.cortex/design-docs/unified-vault.md), [unified-vault-ui-rollout.md](.cortex/exec-plans/unified-vault-ui-rollout.md) § Phase 1  
**Depends on:** PR #61 (vault_version + compare_vault_sync foundation)

## Tasks

- [ ] 1.1 Detect local vault on init; skip provider picker when present (`VaultState.init()`)
- [ ] 1.2 Replace connection step with master password field (`LoginUnlockStep`)
- [ ] 1.3 First-time **Create vault** flow: set password → create local vault
- [ ] 1.4 Collapse provider management into "Sync later" (Settings link)
- [ ] 1.5 Keep device-key unlock as advanced accordion option
- [ ] 1.6 Update copy: "Your vault lives on this device" (`ProductIntro`, locale)

## Test ids / e2e

- `login-local-vault-detected`
- `login-master-password-input`, `unlock-vault-btn`
- `login-create-vault-btn`
- Rewrite `e2e/login-unlock-flow.spec.ts`

## Exit criteria

New user creates local vault with password; returning user unlocks without picking a provider.

## Historical comments

### cypherkitty — 2026-06-28T00:18:43Z

Parent epic: #70

### cypherkitty — 2026-06-28T00:28:47Z

Implementation PR: #71 (stacked on foundation #61)
