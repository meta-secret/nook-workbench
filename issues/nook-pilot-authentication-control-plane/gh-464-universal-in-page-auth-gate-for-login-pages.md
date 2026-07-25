---
title: "Universal in-page auth gate for login pages"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-17T06:28:16Z
updated_at: 2026-07-17T08:18:13Z
source_issues: ["https://github.com/meta-secret/nook/issues/464"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Universal in-page auth gate for login pages

## Imported context

This record was imported from [Nook GitHub issue #464](https://github.com/meta-secret/nook/issues/464)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of the auth-agent feature pack (#461).

## Problem

Login pages currently get a tiny “Open vault” toast. Users still interact with ugly site login chrome. Nook should present a universal auth gate (similar to the device-protection form) as the path through authentication.

## Scope

- Replace/upgrade the compact Open vault toast into a Nook-owned auth gate: step/brand label, icon, title, short description, primary Continue/Get access action, dismiss, and optional Open vault secondary.
- Keep the gate visibly Nook-owned (not pretending to be the host site).
- Primary action is explicit; no silent fill/submit in this slice if credential fill is not ready — wire the action to the next available authorized path (unlock / choose account / fill when available).
- Coordinate with #237 for matched-account fill behavior; this issue owns the universal gate shell and CTA model.

## Acceptance Criteria

- On a detected login form, the gate renders with icon → title → description → primary CTA.
- Primary CTA is not merely “Open vault”; Open vault is secondary/optional.
- Dismissal and Simple/Sentinel exclusion continue to work.
- Keyboard accessible; content script still does not own vault search/crypto.
- e2e covers gate visibility and primary CTA presence on a login page.

## Historical comments

### cypherkitty — 2026-07-17T06:31:10Z

Implemented in https://github.com/meta-secret/nook/pull/466 (gate shell + Continue with Nook; matched fill still #237)
