---
title: Enroll installation app keys into identities
status: ready
priority: p1
automation: manual
owner: codex
created_at: 2026-08-13T03:58:00Z
updated_at: 2026-08-13T03:58:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/devices-and-access/identity-directory.md
---

# Enroll installation app keys into identities

## Context

An installation is linked to an identity when its app public key is an identity
member. Existing vault enrollment is vault-scoped and cannot be relabelled as
identity enrollment.

## Outcome

An authorized identity member can approve another installation app public key.
The identity re-wraps its vault DEKs to the updated member set without exposing
private app keys or DEKs to TypeScript.

## Scope

- Define portable typed enrollment request, approval, and rejection states.
- Bind the request to identity id, app id, public keys, nonce, and expiry.
- Require proof from an existing identity member before mutation.
- Re-wrap identity-held vault DEKs after membership changes.
- Expose only browser ceremony and transport coordination through WASM.
- Add replay, mismatch, expiry, duplicate, and authorization tests.
- Do not reuse legacy vault join records as identity authority.

## Acceptance criteria

- [ ] Another installation can request identity membership without sharing a private key.
- [ ] Existing membership authorizes approval and all request fields are verified.
- [ ] Replay, expiry, identity mismatch, app mismatch, and duplicate membership fail closed.
- [ ] Vault DEK envelopes match the active identity member set after approval.
- [ ] Typed Rust and actual-WASM tests cover the complete protocol.
- [ ] Exact-head validation passes before squash merge.
