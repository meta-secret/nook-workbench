---
title: "Unified vault Phase 4: Secret vault — fan-out sync on save"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-28T00:18:20Z
updated_at: 2026-06-28T06:09:09Z
source_issues: ["https://github.com/meta-secret/nook/issues/65"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Unified vault Phase 4: Secret vault — fan-out sync on save

## Imported context

This record was imported from [Nook GitHub issue #65](https://github.com/meta-secret/nook/issues/65)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

After vault CRUD, push to all enabled sync providers. Update status bar for multi-provider sync.

**Docs:** [unified-vault-ui-rollout.md](.cortex/exec-plans/unified-vault-ui-rollout.md) § Phase 4  
**Depends on:** Phase 2, Phase 3

## Tasks

- [ ] 4.1 Fan-out push after add/delete/replace secret
- [ ] 4.2 Status bar: "Syncing to GitHub…" per provider
- [ ] 4.3 Remove storage-mode icon dependency on active provider

## Historical comments

No comments.
