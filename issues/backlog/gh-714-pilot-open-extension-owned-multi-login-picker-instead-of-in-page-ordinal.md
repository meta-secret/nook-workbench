---
title: "Pilot: open extension-owned multi-login picker instead of in-page ordinals"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-25T03:31:58Z
updated_at: 2026-07-25T04:37:01Z
source_issues: ["https://github.com/meta-secret/nook/issues/714"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Pilot: open extension-owned multi-login picker instead of in-page ordinals

## Imported context

This record was imported from [Nook GitHub issue #714](https://github.com/meta-secret/nook/issues/714)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Nook Pilot's in-page account chooser shows only non-secret ordinals (`Saved login 1`, `Saved login 2`, …) by product policy — usernames, issuer names, and account labels must stay out of the host-page DOM ([browser-extension.md](.cortex/product-specs/browser-extension.md)).

After importing several logins for the same site (for example from Bitwarden), users cannot tell which ordinal is which without guessing or using Take over / Open vault.

OTP fill already opens an extension-owned searchable picker that may show issuer/account labels inside the extension document. Login fill should use the same pattern when more than one login matches.

## Acceptance criteria

- [ ] When two or more logins match the current origin, Pilot opens an extension-owned login picker (popup/page) instead of listing ordinals in the injected widget.
- [ ] The picker shows non-secret distinguishing labels (username and/or imported item title/name) only inside the extension document.
- [ ] The content script still receives only an opaque selected identity and performs fill/submit after explicit choice.
- [ ] Single-match autofill path remains unchanged (no chooser).
- [ ] Existing e2e that assert ordinals are updated to the extension-owned picker contract.
- [ ] Host-page DOM never contains usernames, emails, or account titles.

## Why deferred from import-mapping work

Import sources now preserve Bitwarden/1Password/LastPass/Proton item titles in login notes (parity with Apple/Chrome). That restores mapping for vault detail/search, but does not change Pilot's intentional ordinal chooser.

## Related

- Product spec: `.cortex/product-specs/browser-extension.md` (ordinal choices; OTP extension-owned picker)
- Precedent: `AuthenticatorPicker.svelte` / `nook:website-authenticator-picker-open`

## Historical comments

### cypherkitty — 2026-07-25T04:11:05Z

Implementing in https://github.com/meta-secret/nook/pull/721 — multi-match Pilot login now opens an extension-owned username picker (same trusted surface as 2FA).
