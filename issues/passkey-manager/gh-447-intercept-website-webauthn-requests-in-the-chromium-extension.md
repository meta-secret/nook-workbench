---
title: "Intercept website WebAuthn requests in the Chromium extension"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-16T20:30:45Z
updated_at: 2026-07-16T23:50:09Z
source_issues: ["https://github.com/meta-secret/nook/issues/447"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:passkey-manager"]
legacy_state_reason: "COMPLETED"
---

# Intercept website WebAuthn requests in the Chromium extension

## Imported context

This record was imported from [Nook GitHub issue #447](https://github.com/meta-secret/nook/issues/447)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #441 in milestone **Feature: Passkey manager**. Depends on #444 and extension projection/unlock work in #244.

## Goal

Let supported Chromium sites explicitly choose Nook for WebAuthn registration and sign-in while preserving native authenticator fallback.

## Requirements

- Inject a minimal page-world bridge that can observe `navigator.credentials.create()` and `get()` public-key requests without exposing vault APIs.
- Preserve the original origin, request options, challenge, timeout, abort, and conditional/mediation intent.
- Content scripts transport sanitized ceremony messages only; private key material and decrypted credential sources never enter the page/content-script DOM, URLs, logs, or `chrome.storage`.
- The extension-owned UI requires explicit user consent and account selection before creation/assertion.
- Nook unavailable, locked, unsupported, denied, canceled, or timed-out requests must leave native/browser authenticators usable.
- Validate message source, nonce, tab/frame/origin binding, one-shot response semantics, and request size limits.
- Sentinel origins and unpaired extensions fail closed.

## Acceptance criteria

- Playwright extension tests prove registration, later assertion, cancellation, abort, timeout, wrong-origin rejection, locked fallback, native fallback, and no secret persistence in extension storage/logs.
- The extension remains a thin companion; passkey browsing/deletion lives in Simple Vault.
- Manifest permissions and CSP stay least-privilege and are documented.



## Historical comments

No comments.
