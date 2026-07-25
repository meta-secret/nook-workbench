---
title: "Epic: Server-assisted passkey unlock for browsers without WebAuthn PRF"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-06T20:03:15Z
updated_at: 2026-07-21T04:18:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/197"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "REOPENED"
---

# Epic: Server-assisted passkey unlock for browsers without WebAuthn PRF

## Imported context

This record was imported from [Nook GitHub issue #197](https://github.com/meta-secret/nook/issues/197)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Nook's current local device protection requires WebAuthn PRF. That keeps the fully local model clean, but it also means some clients cannot use nokey.sh when the browser, OS, authenticator, or mobile passkey provider does not expose the PRF extension.

Introduce an Assisted Mode where unlocking requires both this browser and a Nook server. The browser keeps a local high-entropy share; the server stores or operates with a protected server share after standard passkey authentication. Together they derive the wrapping material needed to unlock the browser's device identity and then the normal vault device-key flow continues.

This changes the root of trust: the server becomes an active security component. The design must preserve Local Mode for PRF-capable clients and make the Assisted Mode trust tradeoff explicit.

## Current Status

- Local Mode exists: `DeviceProtectionGate`, `nook-app/nook-web/src/lib/passkey-device-protection.ts`, `nook-app/nook-core/src/auth/device_key_protection.rs`, and IndexedDB `nook_db.device_identity_wrapped`.
- `.cortex/product-specs/decentralized-auth.md` currently says unsupported authenticators fail closed when PRF is missing.
- Missing work: assisted-unlock protocol/trust model, `nook-server`, Docker/k3d/k8s deployment, client passkey/WASM boundary spike, and client fallback/setup flows.

## Sub-Issues

- [ ] #198: Design the assisted unlock protocol and trust model.
- [ ] #199: Create `nook-server`, Dockerize it, and deploy it through k3d/k8s.
- [ ] #201: Spike migrating browser passkey ceremony to `1Password/passkey-rs` WASM.
- [ ] #200: Add client Assisted Mode passkey setup and unlock fallback.
- [ ] #241: Use PIN-based device-key wrapping when WebAuthn PRF is unavailable.
- [ ] #247: Recover from cleared browser by choosing an existing Nook passkey.

## Acceptance Criteria

- PRF-capable browsers continue to use Local Mode without requiring a Nook server.
- PRF-missing clients can create and unlock a vault on nokey.sh using Assisted Mode and standard passkey user verification.
- The browser never falls back to plaintext local device identity storage.
- The server never receives plaintext vault contents, plaintext browser device private keys, or final `secrets_key` / `members_key` material.
- If the first implementation releases a server share instead of using an active protocol, that tradeoff is documented before merge and the issue links to a stronger protocol path.
- Rust/WASM owns key derivation, wrapping, storage record parsing, zeroization, and as much WebAuthn/passkey protocol handling as `1Password/passkey-rs` can safely support; TypeScript remains only the minimal browser/UI bridge that the proven boundary requires.
- `.cortex` documents the two operating modes: Local Mode and Assisted Mode, including account recovery, revocation, audit/rate-limit, and server-compromise implications.
- Tests cover no-PRF setup, returning unlock, cancellation/error paths, server unavailability, and no regression for Local Mode.

## References

- Existing local mode docs: `.cortex/product-specs/decentralized-auth.md`
- Existing architecture boundary: `.cortex/ARCHITECTURE.md`
- Existing storage/session docs: `.cortex/design-docs/vault-session-and-lock.md`
- Existing code paths: `nook-app/nook-core/src/auth/device_key_protection.rs`, `nook-app/nook-wasm/src/manager/device_protection.rs`, `nook-app/nook-web/src/lib/passkey-device-protection.ts`, `nook-app/nook-web/src/lib/components/DeviceProtectionGate.svelte`
- Infra pattern to study: https://github.com/meta-secret/meta-secret-core/tree/main/infra




## Historical comments

### cypherkitty — 2026-07-21T04:18:12Z

Assigned this epic and all sub-issues to milestone [Feature: Server-assisted passkey unlock](https://github.com/meta-secret/nook/milestone/12):

- #197 (parent)
- #198, #199, #200 (open)
- #201, #241, #247 (closed)
