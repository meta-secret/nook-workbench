---
title: "Epic: Presence-first Open Nook auth (Simple vs Sentinel)"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-12T01:13:27Z
updated_at: 2026-07-21T07:29:09Z
source_issues: ["https://github.com/meta-secret/nook/issues/325"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:presence-first-auth"]
legacy_state_reason: "COMPLETED"
---

# Epic: Presence-first Open Nook auth (Simple vs Sentinel)

## Imported context

This record was imported from [Nook GitHub issue #325](https://github.com/meta-secret/nook/issues/325)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

After the landing page, **Open Nook** must not jump straight into a passkey prompt. Passkey-first is confusing and answers the wrong question.

The first question is **what's there?**

1. **Vault exists locally** → offer to unlock that vault (passkey is the unlock for something real).
2. **No vault yet** → offer creation choices:
   - **Create a simple vault** (single-device convenience)
   - **Build a Sentinel vault** (threshold / multi-device; formerly *Nexus*)
3. **Passkey / device protection** is asked only when we actually need to initialize *this device* for Sentinel creation (or when unlocking an existing vault) — not as the first blank-slate screen.

This epic starts **fresh**. Do not treat the current LoginGate / DeviceProtectionGate ordering as the product model.

## Product decisions

| Decision | Choice |
|---|---|
| First screen after Open Nook | Presence / empty-state chooser |
| Existing vault | Unlock CTA (passkey unlocks a known vault) |
| Empty state | Simple vault **or** Sentinel vault |
| Passkey timing | Deferred until unlock **or** Sentinel device init |
| Naming | **Sentinel vault** replaces **Nexus vault** everywhere user-facing |
| Sentinel UI research refs | `vault-terminal` and `nexus-card-stack` in `nook-web-research` |

## Research

Sketches live in `nook-app/nook-web/nook-web-research` under category **`nook-auth`**. Pick a direction before production implementation.

## Current Status

**Original epic acceptance criteria are met on main** (audited 2026-07-21).

Shipping PRs:
- Research: #331
- Presence-first gate + rename + deferred passkey + Simple/Sentinel create: #332
- Create vs open existing separation: #402
- App isolation (Simple/Sentinel origins): #369
- Owner-issued invitation workflow: #357

Follow-up (not required to close this epic): #337 remaining protocol hardening — reject standalone `publicKeyAnnouncement` for remote enrollment.

## Sub-Issues

- [x] #326 Research: 10 `nook-auth` design concepts
- [x] #327 Rename Nexus → Sentinel (copy, docs, research labels)
- [x] #328 Implement presence-first Open Nook gate
- [x] #329 Wire Simple vault create path
- [x] #330 Wire Sentinel create path + deferred passkey on device init
- [ ] #337 Bind Sentinel participant onboarding to owner-issued QR invitations (invitation UX shipped; reject standalone announcements still open)

## Out of scope (for this epic's first slices)

- Redesigning the full authenticated vault chrome
- Changing Sentinel cryptography / threshold protocol internals
- Security-console visual polish (#295) unless it overlaps the chosen auth sketch

## Acceptance Criteria

- [x] Opening the app never leads with a naked passkey prompt when no vault exists.
- [x] Empty state presents Simple vs Sentinel as first-class choices.
- [x] Existing local vault presents unlock, not create.
- [x] Sentinel creation asks for passkey only at device-init.
- [x] User-facing "Nexus" becomes "Sentinel".
- [x] A research direction is chosen from `nook-auth` before production UI lands.

## Anchors

- Research: `nook-app/nook-web/nook-web-research/src/experiments/nook-auth/`
- Sentinel UI refs: `…/vault/vault-terminal`, `…/vault/nexus-card-stack`
- Landing: nokey.sh → Open Nook

## Historical comments

### cypherkitty — 2026-07-21T07:29:08Z

Closing the epic: original presence-first Open Nook acceptance criteria are met on main.

Sub-issues #326–#330 are closed. Residual invitation protocol hardening remains in #337 (standalone `publicKeyAnnouncement` still accepted in Rust; invitation UX itself shipped in #357).
