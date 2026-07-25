---
title: "Add 2FA/TOTP secrets and login-time code autofill"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T02:20:14Z
updated_at: 2026-07-20T02:04:11Z
source_issues: ["https://github.com/meta-secret/nook/issues/239"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","question","feature:auth-agent","feature:browser-2fa-enrollment"]
legacy_state_reason: "COMPLETED"
---

# Add 2FA/TOTP secrets and login-time code autofill

## Imported context

This record was imported from [Nook GitHub issue #239](https://github.com/meta-secret/nook/issues/239)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Add first-class 2FA/TOTP support to Nook so a user can save an authenticator secret and use it during login, including autofilling one-time-code fields on websites through the browser extension.

This should be modeled like a real vault item capability alongside login, API key, seed phrase, and secure note. It should not be treated as a generic secure note or confused with the existing BIP39 seed phrase item type.

## Product Question

2FA is often used with a website login, but it is not always only a website concept:

- Most browser autofill flows need the 2FA secret associated with a login item or website origin so Nook can suggest/fill the current code during sign-in.
- Some 2FA secrets belong to non-web accounts, apps, CLIs, or services where there may be no browser URL to match.

The implementation should decide whether the durable model is:

- a TOTP/2FA field attached to a `login` item;
- a first-class `two-factor`/`totp` vault item that may optionally link to a login item or website URL;
- or a hybrid where login items can reference a reusable TOTP item.

The acceptance criteria below assume the model supports login-associated autofill without making every 2FA secret website-only.

## Current Code Context

- Vault item types currently include `login`, `api-key`, `seed-phrase`, and `secure-note` in `nook-app/nook-auth2/src/records.rs` and `nook-app/nook-core/src/secrets/secret_types.rs`.
- Secure notes are documented as first-class vault items in `.cortex/product-specs/secure-notes.md`, but 2FA should get its own typed semantics because it has validation, code generation, expiry, and autofill behavior.
- The password manager spec keeps secret serialization, validation, crypto, and generation behavior in Rust/WASM, with Svelte acting as a thin UI shell: `.cortex/product-specs/password-manager.md`.
- The browser extension is already separated for content scripts and future autofill: `nook-app/nook-web/nook-web-extension/README.md`, `nook-app/nook-web/nook-web-extension/src/manifest.ts`, and `nook-app/nook-web/nook-web-extension/src/content/autofill.ts`.

## Scope

- Add a typed TOTP/2FA secret representation in Rust domain code, including YAML serialization/deserialization and validation.
- Support adding a 2FA secret from at least a manual shared secret, and preferably from an `otpauth://` URI / QR import path if practical.
- Generate current TOTP codes in Rust/WASM from the stored secret, including time step, digit count, and algorithm handling for standard authenticator secrets.
- Surface 2FA items in the vault UI with reveal/copy/delete behavior matching other item types, while respecting the existing no in-place edit rule.
- Decide and implement the relationship between 2FA secrets and login items so a saved login can carry or reference its 2FA code for sign-in.
- Extend the browser extension autofill path to detect one-time-code fields and offer/fill the current code for the matching login/origin after the vault is unlocked and the user has intentionally approved the fill.

## Out of Scope

- Using 2FA to unlock Nook itself. This issue is about storing and autofilling third-party account 2FA codes, not adding a second factor to Nook vault unlock.
- Treating BIP39 seed phrases as authenticator secrets.
- Storing generated one-time codes as durable secret values. Store the shared secret and metadata; derive short-lived codes at runtime.

## Acceptance Criteria

- A user can create a 2FA/TOTP secret in Nook without abusing secure notes or seed phrase items.
- A user can associate a 2FA secret with a login/website for browser login flows, while standalone non-website 2FA secrets remain possible or intentionally documented as unsupported.
- The current code is generated from Rust/WASM-owned logic, not ad hoc Svelte-only logic.
- TOTP metadata and validation are covered by Rust tests, including invalid secrets and standard test vectors.
- The vault item schema remains backward compatible for existing `login`, `api-key`, `seed-phrase`, and `secure-note` records.
- The browser extension can identify common OTP fields (`autocomplete="one-time-code"`, common names/ids, or equivalent heuristics) and fill only after an explicit trusted user action or clearly approved extension flow.
- Autofill never logs, syncs, or transmits plaintext TOTP shared secrets or generated codes outside the local browser/extension flow.
- E2E coverage demonstrates at least one login form with username/password plus a 2FA field receiving the current code from a saved Nook item.

## Notes

Original request: implement 2 factor authentication like secure notes/login item/seed support; clarify whether 2FA is always linked to a website or should be part of a login item; purpose is to autofill 2FA fields on sites during login.


## Historical comments

### cypherkitty — 2026-07-16T22:08:42Z

Progress update: PR #449 merged first-class authenticator secure items into `main` (`83b32f52`).

Completed:
- typed Rust/WASM TOTP model and validation
- Base32 and `otpauth://` input
- RFC 6238 SHA-1/SHA-256/SHA-512 code generation
- encrypted backup codes
- masked-until-reveal live-code UI with wall-clock expiry handling
- zeroization and Rust/browser regression coverage

Remaining in this issue:
- login/origin association semantics
- browser-extension OTP field detection
- explicit user-approved one-time-code fill
- end-to-end login + OTP autofill coverage

Keeping #239 open for that extension/autofill scope.

### cypherkitty — 2026-07-20T01:24:14Z

PR #503 completes the saved-authenticator login-time fill slice with explicit service/account selection and a clear empty-vault Add 2FA state.

Consented enrollment remains split into focused sub-issues because it introduces page-reading and vault-write capabilities with separate threat models:

- #504 — user-initiated QR discovery, typed `otpauth://` validation, preview, and confirmation
- #505 — user-initiated recovery-code extraction, review, target selection, and encrypted merge/replace semantics

Both are grouped under milestone **Feature: Browser 2FA enrollment**. Neither flow may silently scrape a settings page.
