---
title: Type device-protection registration and completion
status: active
feature: rust-action-ownership
issue: issues/rust-action-ownership/device-protection-registration.md
created_at: 2026-09-06T06:55:00Z
base_sha: e00cb372a60d3e7333ea395bb1fc864d0dd487c9
gizmo_id: rust-action-ownership-device-protection-registration
---

# Type device-protection registration and completion

## Boundary

Implement the exact fourteen-file issue scope. `device_key_protection.rs` remains the parent API and receives ownership denial. Add `registration.rs` for private registration and awaiting-assertion states and `unlock.rs` for focused unlock/derivation operations and colocated tests. `protected_identity.rs` stays outside ownership enforcement; update only its direct test consumers. Adapt the listed core, vault-format, browser, access, storage, manager, and IndexedDB consumers.

## Required design

- Registration owns credential ID, user handle, PRF input, and protection mode.
- A private non-Clone awaiting-assertion continuation exposes the existing `PasskeyAssertionRequest` as an observation and consumes itself with PRF output.
- Existing record, request, material, derivation, recovery, assertion-request, and unlock behavior moves to meaningful owners without fabricated typestate where no lifecycle exists.
- Preserve standard and AntiHacker derivation, all byte/HKDF/version/error/identity/serialization/zeroization behavior, and the current direct completion ABI.
- Keep capability types honest: they bind local setup state but do not claim browser ceremony verification or PRF authentication beyond existing checks.

## Evidence and limits

- Retain all 13 parent tests and nine protected-record tests.
- Add bounded continuation retention, equivalent-branch, stored-identity rejection, dropped-incomplete-state, privacy, construction, and consuming-state controls.
- Keep the parent below 400 lines, each new child below 800 lines, and `manager/device_protection.rs` net-neutral or smaller.
- Do not change public DTOs, exported WASM signatures, browser call order, observations, persistence, cleanup, failure behavior, cryptography, schemas, fallback, recovery, or TypeScript.

## Delivery

Remote Loom, hosted validation, exact-head SECURITY, readiness, squash merge, and Workbench completion are required before closure.
