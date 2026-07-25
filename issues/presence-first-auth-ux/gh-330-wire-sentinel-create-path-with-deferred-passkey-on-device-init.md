---
title: "Wire Sentinel create path with deferred passkey on device init"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-12T01:13:45Z
updated_at: 2026-07-21T07:28:56Z
source_issues: ["https://github.com/meta-secret/nook/issues/330"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:presence-first-auth"]
legacy_state_reason: "COMPLETED"
---

# Wire Sentinel create path with deferred passkey on device init

## Imported context

This record was imported from [Nook GitHub issue #330](https://github.com/meta-secret/nook/issues/330)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #325.

## Scope

- From empty-state chooser, **Build a Sentinel vault** enters Sentinel setup.
- Ask for passkey / device protection **only when initializing this device** for Sentinel creation.
- UI direction candidates from research: vault-terminal style and card-stack style.

## Acceptance

- [ ] Choosing Sentinel does not immediately force a naked passkey wall before intent is clear
- [ ] Passkey appears at device-init step
- [ ] Smoke e2e for Sentinel create entry + deferred device init

## Historical comments

### cypherkitty — 2026-07-21T07:28:55Z

Closing as delivered.

Sentinel create with deferred passkey on device init shipped in https://github.com/meta-secret/nook/pull/332, with follow-on workspace UX in https://github.com/meta-secret/nook/pull/355 and https://github.com/meta-secret/nook/pull/359. Choosing Sentinel does not force a naked passkey wall before intent/dashboard/policy is clear.
