---
title: "Add client Assisted Mode passkey setup and unlock fallback"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-06T20:03:19Z
updated_at: 2026-07-21T04:18:02Z
source_issues: ["https://github.com/meta-secret/nook/issues/200"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: ""
---

# Add client Assisted Mode passkey setup and unlock fallback

## Imported context

This record was imported from [Nook GitHub issue #200](https://github.com/meta-secret/nook/issues/200)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #197. Depends on the client passkey boundary decision in #201.

## Problem

When WebAuthn PRF is unavailable, `DeviceProtectionGate` currently fails closed and leaves users unable to use nokey.sh on affected browsers/devices. Assisted Mode should let those clients create and unlock vaults using a standard passkey ceremony plus the Nook server, while keeping crypto and durable storage policy in Rust/WASM.

## Implementation Decision

Use `1Password/passkey-rs` as the chosen Rust passkey/WebAuthn dependency for Assisted Mode protocol work, matching #199.

Client Assisted Mode should start from the proven boundary in #201. If #201 successfully migrates the current browser passkey ceremony into `nook-wasm` with `passkey-rs`, build Assisted Mode on that Rust/WASM boundary. If #201 proves that real platform passkeys still require a thin `navigator.credentials.create/get` bridge, keep that bridge minimal and move the remaining protocol parsing, validation, key/share derivation, wrapping, zeroization, and durable record handling into Rust/WASM.

Rationale:

- `1Password/passkey-rs` is the selected Rust passkey/WebAuthn toolkit for this feature because of vendor trust, newer release cadence, permissive licensing, and flexibility for Nook-owned protocol/server design.
- `passkey-rs` can target WASM surfaces, and Nook should not prematurely leave passkey protocol logic in TypeScript if Rust/WASM can own it cleanly.
- The exact browser/platform authenticator boundary should be decided by #201 before this issue implements Assisted Mode.
- `kanidm/webauthn-rs` is not the selected dependency for this track; see #199.

## Scope

- Consume the result of #201 before finalizing the client Assisted Mode boundary.
- Detect missing PRF from actual WebAuthn extension results, not user-agent guesses.
- Offer Assisted Mode when PRF is unavailable, with standard passkey creation/get using required user verification.
- Generate and persist the browser-local share/metadata needed for assisted derivation.
- Call `nook-server` to register/authenticate the passkey and obtain/participate in the server-assisted derivation flow.
- Add or version WASM APIs/records so Assisted Mode can wrap and unwrap the browser device identity without plaintext fallback.
- Keep TypeScript as thin WebAuthn/API orchestration only where the #201 boundary proves the browser platform requires it; derivation, wrapping, parsing, zeroization, validation, and durable state stay in Rust/WASM/core.
- Use `1Password/passkey-rs` on Rust-side Assisted Mode protocol/test surfaces where it fits, including WASM surfaces validated by #201.
- Update UI copy to distinguish Local Mode from Assisted Mode without implying the server is equivalent to PRF/no-server protection.
- Ensure vault creation, returning unlock, lock, cancellation, server unavailable, and recovery/reset flows work in Assisted Mode.

## Out Of Scope

- Implementing `nook-server` itself.
- Changing the vault file format unless the protocol design requires it.
- Re-deciding the client passkey/WASM boundary without updating or resolving #201.
- Building a Nook-owned software passkey store in browser WASM unless the design explicitly accepts that it is not the user's platform passkey.
- Switching to `kanidm/webauthn-rs` without first documenting the blocker and revisiting #199.
- Removing support for PRF-backed Local Mode.

## Acceptance Criteria

- #201 is completed or explicitly resolved as infeasible before Assisted Mode client implementation locks its passkey boundary.
- A no-PRF browser path can create a new vault and unlock it on return using Assisted Mode.
- Existing PRF-backed Local Mode tests still pass and do not require server configuration.
- E2E tests can force/mock PRF absence and exercise Assisted Mode with a mock or local `nook-server`.
- IndexedDB never contains plaintext device identity material.
- Assisted Mode records are versioned and distinguishable from PRF-backed `device_identity_wrapped` records.
- Failure states are safe and clear: passkey cancellation, server denial, revoked device, rate limit, network/server unavailable, and corrupted local/server share.
- `.cortex` and product copy explain why Assisted Mode works on PRF-missing clients and what trust tradeoff it introduces.

## References

- Client boundary spike: #201
- Current browser bridge: `nook-app/nook-web/src/lib/passkey-device-protection.ts`
- Current gate: `nook-app/nook-web/src/lib/components/DeviceProtectionGate.svelte`
- Current WASM manager: `nook-app/nook-wasm/src/manager/device_protection.rs`
- Current core wrapping: `nook-app/nook-core/src/auth/device_key_protection.rs`
- `1Password/passkey-rs`: https://github.com/1Password/passkey-rs
- `kanidm/webauthn-rs` comparison only: https://github.com/kanidm/webauthn-rs


## Historical comments

No comments.
