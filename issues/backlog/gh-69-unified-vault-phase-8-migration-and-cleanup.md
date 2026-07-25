---
title: "Unified vault Phase 8: Migration and cleanup"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-28T00:18:25Z
updated_at: 2026-06-28T06:09:07Z
source_issues: ["https://github.com/meta-secret/nook/issues/69"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Unified vault Phase 8: Migration and cleanup

## Imported context

This record was imported from [Nook GitHub issue #69](https://github.com/meta-secret/nook/issues/69)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

One-time migration from provider-as-vault model; remove deprecated login wizard and `activeProviderId`.

**Docs:** [unified-vault-ui-rollout.md](.cortex/exec-plans/unified-vault-ui-rollout.md) § Phase 8  
**Depends on:** Phases 1–7

## Tasks

- [ ] 8.1 Migrate active provider vault → local `encrypted_db`
- [ ] 8.2 Remove `LoginConnectionStep` / two-step wizard
- [ ] 8.3 Remove `activeProviderId` from auth snapshot
- [ ] 8.4 Update e2e helpers (`resetBrowserState`)

## Historical comments

No comments.
