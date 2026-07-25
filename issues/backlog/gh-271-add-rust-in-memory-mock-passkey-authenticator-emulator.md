---
title: "Add Rust in-memory mock passkey authenticator emulator"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-09T03:18:04Z
updated_at: 2026-07-09T05:24:12Z
source_issues: ["https://github.com/meta-secret/nook/issues/271"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Add Rust in-memory mock passkey authenticator emulator

## Imported context

This record was imported from [Nook GitHub issue #271](https://github.com/meta-secret/nook/issues/271)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Add a Rust in-memory passkey authenticator emulator for Nook test and development flows. The emulator should behave like a resident WebAuthn passkey provider at the Nook boundary: it stores passkeys in memory, requires an explicit authorization decision for registration/assertion, returns stable credential/user-handle/PRF material, and supports discoverable recovery without pretending that browser `navigator.credentials` can be replaced in production.

## Problem

Nook currently has browser e2e passkey shims and Rust/WASM option builders, but no portable Rust authenticator emulator that can exercise the passkey-derived device-key flow without a real browser/OS passkey provider. That leaves important edge cases harder to cover in Rust tests: authorization denied, unknown credentials, RP mismatch, PRF stability, and recovery after local metadata is cleared.

## Scope

- Implement a Rust in-memory mock passkey authenticator/provider in the auth/device-protection boundary.
- Keep it test/dev oriented; do not move the production browser ceremony out of `navigator.credentials`.
- Model an explicit authorization step for registration and assertion.
- Store resident credentials in memory, including credential id, user handle, RP id, label, and deterministic PRF behavior.
- Add focused Rust tests for happy path, recovery/discoverable lookup, denial, wrong RP, unknown credential, duplicate/passkey isolation, and PRF/device-identity stability.

## Acceptance Criteria

- Rust tests can register a mock passkey, authorize it, and derive the same Nook device identity as the production PRF path.
- Tests can deny registration or assertion and observe a typed failure instead of silently succeeding.
- Tests cover credential lookup by allow-list and discoverable/recovery flows when local Nook metadata is absent.
- Tests prove RP id and credential id mismatches do not authorize the wrong passkey.
- The implementation preserves the existing production boundary: TypeScript/browser still owns real `navigator.credentials.create/get`, while Rust owns reusable test/auth material behavior.


## Historical comments

No comments.
