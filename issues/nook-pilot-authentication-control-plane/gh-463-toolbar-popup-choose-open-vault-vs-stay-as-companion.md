---
title: "Toolbar popup: choose Open vault vs stay as companion"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-17T06:28:14Z
updated_at: 2026-07-17T08:18:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/463"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Toolbar popup: choose Open vault vs stay as companion

## Imported context

This record was imported from [Nook GitHub issue #463](https://github.com/meta-secret/nook/issues/463)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of the auth-agent feature pack (#461).

## Problem

After device authenticate/unlock, the extension often opens Simple Vault (pairing handoff or connected “Open Simple Vault” as the only action). When a vault already exists, users frequently only need the companion ready for site auth — not a vault tab.

## Scope

- When the extension device unlocks and a vault/grant already exists, do not auto-open Simple Vault.
- Toolbar popup always presents an explicit choice: stay as companion / ready for sites, and Open Simple Vault — whether or not a vault exists.
- First-time connect may still offer Connect / pair as the recommended path, but it must remain an explicit choice.
- Do not add vault browsing UI inside the popup.

## Acceptance Criteria

- Connected + unlocked popup shows companion-ready UI with optional Open Simple Vault.
- Unlock while connected does not open a Simple Vault tab by itself.
- Not-connected post-setup still can start pairing, but only after an explicit continue/connect action (or clear primary CTA), not a silent always-open.
- e2e covers connected companion home and asserts no auto-opened vault tab on unlock/open when already connected.

## Historical comments

### cypherkitty — 2026-07-17T06:31:09Z

Implemented in https://github.com/meta-secret/nook/pull/466
