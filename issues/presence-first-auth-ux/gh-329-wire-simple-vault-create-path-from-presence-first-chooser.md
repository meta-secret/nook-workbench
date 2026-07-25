---
title: "Wire Simple vault create path from presence-first chooser"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-12T01:13:43Z
updated_at: 2026-07-21T07:28:53Z
source_issues: ["https://github.com/meta-secret/nook/issues/329"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:presence-first-auth"]
legacy_state_reason: "COMPLETED"
---

# Wire Simple vault create path from presence-first chooser

## Imported context

This record was imported from [Nook GitHub issue #329](https://github.com/meta-secret/nook/issues/329)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #325.

## Scope

- From empty-state chooser, **Create simple vault** creates a local single-device vault.
- Keep the path short: name → create → open.
- Passkey/device init only if the product later requires it for simple mode; default assumption is not passkey-first.

## Acceptance

- [ ] Simple path reachable without prior passkey prompt on empty state
- [ ] Vault opens after create
- [ ] Smoke e2e

## Historical comments

### cypherkitty — 2026-07-21T07:28:52Z

Closing as delivered.

Simple vault create path from the presence-first chooser shipped in https://github.com/meta-secret/nook/pull/332 (name → Create simple vault → deferred passkey overlay → open). Later isolation kept the path in the Simple app (`nook-vault-simple`).
