---
title: "Spike migrating browser passkey ceremony to 1Password passkey-rs WASM"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-06T20:17:57Z
updated_at: 2026-07-21T04:18:03Z
source_issues: ["https://github.com/meta-secret/nook/issues/201"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Spike migrating browser passkey ceremony to 1Password passkey-rs WASM

## Imported context

This record was imported from [Nook GitHub issue #201](https://github.com/meta-secret/nook/issues/201)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #197.

## Problem

Nook's current browser passkey flow lives mostly in TypeScript in `nook-app/nook-web/src/lib/passkey-device-protection.ts`, which calls `navigator.credentials.create/get`, extracts PRF extension results, and passes bytes into WASM. For the Assisted Mode work, the project has chosen `1Password/passkey-rs` as the Rust passkey/WebAuthn toolkit. Before building more client flows on top of the existing TypeScript adapter, prove whether `passkey-rs` can own the browser passkey ceremony from WASM.

The expected outcome is a decision and, if feasible, a migration. If it succeeds, Nook should move WebAuthn/passkey protocol handling out of TypeScript and into Rust/WASM. If it does not succeed, preserve the current thin TypeScript browser bridge and document the exact blocker.

## Scope

- Add a focused spike/prototype using `1Password/passkey-rs` from `nook-wasm` in the browser target.
- Determine whether `passkey-rs` can solve the `navigator.credentials.create/get` boundary for real browser/platform passkeys, including PRF extension handling where supported.
- If feasible, migrate the existing PRF-backed Local Mode ceremony from `passkey-device-protection.ts` into Rust/WASM with `passkey-rs`, leaving TypeScript as only minimal UI/event wiring.
- Preserve the existing device identity wrapping model: Rust/WASM derives wrapping material, wraps/unwraps the device identity, zeroizes sensitive buffers, and persists versioned IndexedDB records.
- Keep the current behavior for PRF-capable browsers working before Assisted Mode is layered on top.
- Document the final boundary in `.cortex`: what lives in `nook-web`, what lives in `nook-wasm`, and what `passkey-rs` owns.

## Out Of Scope

- Implementing Assisted Mode server share/protocol logic.
- Implementing `nook-server`.
- Removing the current TypeScript bridge unless the `passkey-rs` WASM path fully replaces it.
- Keeping two production passkey ceremony implementations long term.

## Acceptance Criteria

- A PR shows whether `1Password/passkey-rs` can be used from `nook-wasm` for the real browser passkey ceremony.
- If successful, the PR migrates the current PRF-backed setup/unlock path away from hand-written TypeScript WebAuthn protocol handling and toward `passkey-rs`/Rust/WASM ownership.
- If unsuccessful, the PR documents the exact blocker and leaves the current TypeScript bridge intact.
- Existing PRF-backed Local Mode tests still pass, including setup, returning unlock, cancellation, unsupported PRF, and IndexedDB `device_identity_wrapped` checks.
- The implementation keeps TypeScript thin and does not move key derivation, wrapping, parsing, validation, or zeroization into TypeScript.
- `.cortex` records the decision so Assisted Mode client work in #200 starts from the proven boundary.

## References

- Parent epic: #197
- Assisted Mode client issue: #200
- Server issue selecting `1Password/passkey-rs`: #199
- Current TypeScript bridge: `nook-app/nook-web/src/lib/passkey-device-protection.ts`
- Current WASM manager: `nook-app/nook-wasm/src/manager/device_protection.rs`
- Current core wrapping: `nook-app/nook-core/src/auth/device_key_protection.rs`
- Current e2e coverage: `nook-app/nook-web/e2e/device-key-protection.spec.ts`, `nook-app/nook-web/e2e/passkey-mock.ts`
- `1Password/passkey-rs`: https://github.com/1Password/passkey-rs


## Historical comments

No comments.
