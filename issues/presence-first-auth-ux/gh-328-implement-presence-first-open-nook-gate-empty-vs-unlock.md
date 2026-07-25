---
title: "Implement presence-first Open Nook gate (empty vs unlock)"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-12T01:13:42Z
updated_at: 2026-07-21T07:28:51Z
source_issues: ["https://github.com/meta-secret/nook/issues/328"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:presence-first-auth"]
legacy_state_reason: "COMPLETED"
---

# Implement presence-first Open Nook gate (empty vs unlock)

## Imported context

This record was imported from [Nook GitHub issue #328](https://github.com/meta-secret/nook/issues/328)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #325.

Depends on research direction from the `nook-auth` sketches.

## Problem

Open Nook must answer **what's there?** before any create or passkey ceremony.

## Scope

- Fresh first screen after landing → app:
  - If local vault(s) exist → unlock path
  - If none → Simple vs Sentinel chooser
- Do not lead with device-protection/passkey on empty state.
- Replace the broken current ordering; do not iteratively patch it.

## Acceptance

- [ ] Empty browser shows create chooser, not passkey
- [ ] Existing vault shows unlock for that vault
- [ ] Localized copy
- [ ] Smoke e2e for empty + unlock paths

## Historical comments

### cypherkitty — 2026-07-21T07:28:50Z

Closing as delivered.

Presence-first Open Nook gate shipped via:
- https://github.com/meta-secret/nook/pull/332 (empty-state chooser; no naked passkey on empty device)
- https://github.com/meta-secret/nook/pull/402 (Create vs Open existing as sibling intents)

Covered by `vault-architecture-modes` e2e (`get-started-path-chooser`, empty device shows create paths without `passkey-auth-overlay`).
