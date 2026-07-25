---
title: "Expose policy-aware Quorum/Social recovery session APIs through nook-wasm"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T00:53:11Z
updated_at: 2026-07-21T04:29:23Z
source_issues: ["https://github.com/meta-secret/nook/issues/263"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Expose policy-aware Quorum/Social recovery session APIs through nook-wasm

## Imported context

This record was imported from [Nook GitHub issue #263](https://github.com/meta-secret/nook/issues/263)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #259. Depends on #273, #261, and #262.

## Problem

The web app needs a thin, typed WASM bridge for whichever vault access policy is selected. WASM should own key-policy session state, QR payload parsing, share collection, threshold checks, and final unlock/enroll behavior. TypeScript/Svelte should only call typed methods and render states.

This issue must not assume that all SLIP-0039 work is "recovery". Quorum Vault and Social Recovery Vault have different semantics.


## Terminology

WASM APIs should expose policy and threshold concepts, not SLIP-0039 as a user-facing mode. SLIP-0039 is the share encoding implementation beneath the auth boundary.

## Scope

After #273/#262 decide policy semantics, add `nook-wasm` APIs for the selected flows.

Quorum Vault requester/unlock flow:

- start a threshold unlock session for a known vault/policy id
- generate a session-bound request QR/link/paste payload if helper devices are remote
- accept one or more response QR/paste payloads
- keep decrypted shares in WASM memory only
- report threshold progress without exposing share plaintext to TypeScript
- combine shares when threshold is met
- obtain live `secrets_key` + `members_key` only after threshold success
- clear all threshold session material on cancel, logout, lock, refresh/reload, or successful unlock

Social Recovery flow:

- distinguish owner unlock from trustee-assisted recovery
- allow trustees to produce recovery-only help without granting them normal vault access
- enroll or restore owner access according to #262 policy rules

Helper flow, where applicable:

- parse/validate request QR/paste payload
- require local device/passkey authorization before accessing local share material
- generate a session-bound encrypted response QR/link payload
- avoid opening full vault contents unless the selected policy says this device is also a normal member

Also:

- Map auth errors into stable WASM error/result enums for UI copy.
- Ensure request/response payloads are not appended to event logs, provider projections, provider outboxes, app logs, or debug telemetry.
- Add wasm/native tests for request/response round-trips and session clearing.

## Out Of Scope

- Svelte layout and copy.
- Choosing the SLIP-0039 library.
- Deciding whether Nook needs an identity/account service (#273).
- Implementing Iroh/native P2P transport.

## Acceptance Criteria

- `nook-wasm` exposes policy-aware typed APIs without raw share strings crossing into TypeScript.
- Quorum Vault APIs do not expose a single-device unlock path if #262 defines threshold-only unlock.
- Social Recovery APIs distinguish vault members from recovery trustees.
- Threshold shares live only inside the current WASM manager/session and are gone after refresh/reload because they were never persisted.
- Wrong vault, expired session, duplicate share, malformed QR, replayed response, revoked helper/trustee, and insufficient threshold return distinct typed states.
- Successful policy-specific unlock/enrollment uses the auth primitives from #262.
- Tests prove no request/response recovery payload is queued for provider sync or written to app logs.
- Existing Simple Vault unlock/onboarding/password recovery APIs continue to pass their tests.

## Related

- Parent: #259
- Policy blocker: #273
- Lifecycle/policy: #262
- Primitives: #261
- `nook-app/nook-wasm/src/manager/device_protection.rs`
- `nook-app/nook-wasm/src/manager/password.rs`
- `nook-app/nook-wasm/src/manager/connect.rs`
- `nook-app/nook-auth2/src/auth/enrollment.rs`



## Historical comments

### cypherkitty — 2026-07-21T04:29:22Z

Closing as completed under Sentinel WASM APIs.

Policy-aware quorum session surfaces shipped in `nook-wasm` as Sentinel genesis/unlock (`nook-app/nook-wasm/src/manager/sentinel.rs`), including start/respond/finalize unlock, genesis ceremony helpers, and session-bound share handling. TypeScript remains a thin bridge.

Obsolete wording: “Quorum/Social recovery” product APIs — replaced by Sentinel quorum APIs after #275/#360.
