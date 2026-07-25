---
title: "Capture authenticator QR codes from settings pages with explicit consent"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-20T01:23:56Z
updated_at: 2026-07-21T07:10:17Z
source_issues: ["https://github.com/meta-secret/nook/issues/504"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:browser-2fa-enrollment"]
legacy_state_reason: "COMPLETED"
---

# Capture authenticator QR codes from settings pages with explicit consent

## Imported context

This record was imported from [Nook GitHub issue #504](https://github.com/meta-secret/nook/issues/504)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #239.

## Problem

Sites commonly present TOTP enrollment only as a QR code. Nook already accepts typed `otpauth://` URIs, but the browser extension cannot yet decode a visible QR and hand the reviewed setup payload to the vault without copying the shared secret manually.

## Scope

- Add an explicit user-initiated **Add 2FA from this page** action; never scan pages in the background.
- Discover candidate visible QR images/canvases only after that action and decode locally.
- Accept only a bounded `otpauth://totp/...` payload and validate/canonicalize it in `nook-core` through typed WASM.
- Show service, account, origin, and protocol parameters for user confirmation before saving to the unlocked Simple Vault.
- Keep the shared secret out of URLs, logs, telemetry, durable browser storage, and generic runtime errors.
- Handle cross-origin images, multiple QR candidates, unsupported browsers, and no-code states without weakening host permissions or Sentinel isolation.

## Acceptance Criteria

- E2E proves a settings page QR can be captured only after a trusted click, previewed, confirmed, and saved as an authenticator item.
- Rust tests cover URI validation and rejection; targeted extension tests cover consent, candidate ambiguity, cancellation, and secret cleanup.
- Cancelling or closing the flow writes no vault event and retains no decoded URI.

## Notes

Found while implementing login-time OTP fill in PR #503. Split because QR decoding and secret enrollment are write capabilities with a different consent/threat model from read-only code fill.

## Historical comments

No comments.
