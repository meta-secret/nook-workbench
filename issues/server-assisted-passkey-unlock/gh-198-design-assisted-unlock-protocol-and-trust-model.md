---
title: "Design assisted unlock protocol and trust model"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-06T20:03:16Z
updated_at: 2026-07-21T04:17:58Z
source_issues: ["https://github.com/meta-secret/nook/issues/198"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: ""
---

# Design assisted unlock protocol and trust model

## Imported context

This record was imported from [Nook GitHub issue #198](https://github.com/meta-secret/nook/issues/198)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #197.

## Problem

Nook currently treats WebAuthn PRF as the second source of secrecy for wrapping the browser device identity. Assisted Mode would replace that local PRF source with a server-assisted source, which changes the trust model and failure modes. The implementation needs a durable protocol/spec before server and client code spread those assumptions across the stack.

## Scope

- Specify the Assisted Mode key hierarchy: browser local share, server share/operation, HKDF/domain separation, wrapping key, and how it maps to the existing `device_identity_wrapped` flow.
- Decide whether v1 releases a protected server share after passkey authentication or uses an active protocol where the server never returns its share directly.
- Define server trust boundaries, account/device identifiers, passkey credential metadata, revocation, rate limiting, audit events, recovery behavior, and server-compromise consequences.
- Define the client/server API contract at the level needed by `nook-server` and `nook-web`.
- Define storage record versioning and migration/compatibility with existing PRF-protected records.
- Update `.cortex` so Local Mode and Assisted Mode are described as explicit product/security modes.

## Out Of Scope

- Implementing the production server.
- Implementing the client UI or WebAuthn fallback.
- Removing or weakening Local Mode.

## Acceptance Criteria

- `.cortex/product-specs/decentralized-auth.md` or a new linked design doc describes Assisted Mode end to end.
- The spec explicitly states what the server can and cannot learn.
- The spec explains how no-PRF clients create keys, unlock on return, and recover/revoke devices.
- The spec names the Rust/WASM and TypeScript boundaries for the implementation.
- The spec includes a validation plan with unit tests, server integration tests, and browser/e2e no-PRF coverage.

## Notes

The design should treat the server as part of the root of trust and keep that visible in docs and UI copy. Local Mode remains the stronger no-server path for clients with WebAuthn PRF.


## Historical comments

No comments.
