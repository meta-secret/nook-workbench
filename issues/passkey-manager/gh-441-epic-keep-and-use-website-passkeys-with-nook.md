---
title: "Epic: Keep and use website passkeys with Nook"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-16T20:30:35Z
updated_at: 2026-07-16T23:50:06Z
source_issues: ["https://github.com/meta-secret/nook/issues/441"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:passkey-manager"]
legacy_state_reason: "COMPLETED"
---

# Epic: Keep and use website passkeys with Nook

## Imported context

This record was imported from [Nook GitHub issue #441](https://github.com/meta-secret/nook/issues/441)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Goal

Let a Simple Vault user create, keep, synchronize, and use website passkeys
through Nook. Passkeys are first-class encrypted vault items, not metadata
attached to password records and not a reuse of the passkey that protects the
Nook device identity.

## Product boundary

- Nook acts as a user-selected passkey provider for third-party relying parties.
- The browser extension remains a thin Simple Vault companion; complete passkey
  browsing, naming, deletion, recovery, and device administration stay on
  `simple.nokey.sh`.
- Rust owns credential generation, private-key material, signature counters,
  RP scoping, WebAuthn validation, serialization, zeroization, and assertion
  construction.
- TypeScript owns only page/extension transport, browser ceremony interception,
  user-visible selection, cancellation, and native-authenticator fallback.
- Passkey private keys and decrypted assertions never enter content-script DOM,
  page storage, `chrome.storage`, URLs, or logs.
- Sentinel Vault is not extension-capable and cannot create or use website
  passkeys through this feature.

## Feasibility and rollout

Chromium extensions can currently implement a password-manager-style provider
by intercepting page-world `navigator.credentials.create()` / `get()` calls and
delegating them to an extension-owned authenticator. `webAuthenticationProxy`
exists but is designed as a full remote-desktop WebAuthn takeover and is not the
primary integration path. Cross-browser support is not uniform, so the first
shipping target is the existing Chromium extension, with native/browser
fallback always available.

The extension must preserve the original relying-party origin and challenge,
require explicit user authorization, and return a standards-conformant
`PublicKeyCredential` response. It must never silently suppress security keys,
platform passkeys, or hybrid authentication.

## Security invariants

- Credential private keys are generated in Rust and encrypted as ordinary
  per-record vault payloads before persistence or sync.
- RP ID validation follows WebAuthn effective-domain rules; a page cannot ask
  Nook to sign for an unrelated RP.
- User verification/consent is required before passkey creation or assertion.
- Allowed-credential filtering, discoverable lookup, algorithm negotiation,
  sign counters, backup flags, and unknown/ambiguous credential behavior are
  deterministic and covered by Rust tests.
- The page receives only the single registration/assertion response it asked
  for. It never gains vault search capability or raw passkey material.
- Lock, revocation, vault-type capability checks, and extension grant scopes
  apply before any credential is decrypted.
- Existing vault files remain readable; introducing the `passkey` type is an
  additive, documented schema capability.

## Acceptance criteria

- A user can choose Nook during a supported website passkey registration and
  save the new credential into an unlocked Simple Vault.
- A later WebAuthn request for the same RP can be fulfilled from the encrypted
  Nook passkey after explicit user authorization.
- The passkey works after a normal event-log sync to another approved Nook
  extension device.
- Native/browser authenticators remain available when Nook is locked,
  unavailable, unsupported, canceled, or not selected.
- No passkey private material is persisted outside encrypted vault records or
  exposed to page/content-script state and logs.
- Rust domain tests cover registration, assertion, validation, counters,
  lookup, malformed input, and zeroization; extension e2e covers real
  registration and sign-in request interception plus fallback.
- Product specs, README, schema/import behavior, and security documentation are
  updated.

## Related work

- #234 owns the broader Simple-only browser companion and password filling.
- #244 owns extension-owned encrypted projection and independent unlock/sync,
  which passkey use depends on.
- Existing device-protection passkeys remain a separate local authorization
  mechanism.

## Sub-issues

- [ ] #442 — Add a versioned encrypted passkey vault item type
- [ ] #446 — Implement the Rust software WebAuthn authenticator
- [ ] #444 — Expose passkey create and assertion APIs through nook-wasm
- [ ] #447 — Intercept website WebAuthn requests in the Chromium extension
- [ ] #445 — Sync and manage passkey lifecycle across approved devices
- [ ] #443 — Complete threat model, compatibility, and release proof


## Historical comments

No comments.
