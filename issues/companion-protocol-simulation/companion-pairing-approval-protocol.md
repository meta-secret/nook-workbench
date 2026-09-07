---
title: Implement companion pairing approval protocol
status: in_progress
priority: p1
automation: agent
owner: cypherkitty
gizmo_id: companion-pairing-approval-protocol
created_at: 2026-09-07T14:51:01Z
updated_at: 2026-09-07T22:02:13Z
source_issues: []
related_prs: []
depends_on:
  - issues/companion-protocol-simulation/companion-identity-browser-adapters.md
---

# Implement companion pairing approval protocol

## Context

The companion simulation framework, direct composition coverage, and paired
identity browser migration are merged. Pairing approval lacked a correlated,
one-shot Rust transaction and relied on browser-authored protocol meaning.

An initial provider and browser integration draft proved the boundary, but
Security found that recipient validation and consume-before-decode behavior
need additional provider work. Keeping those fixes and their real tests with
the full browser migration would exceed the product pull-request limit. The
implementation is therefore sequenced at the real provider/consumer boundary,
not fragmented by files or arbitrary line targets.

## Outcome

Rust exposes a secure pairing request, website authorization admission,
extension consume-before-decode admission, and exact provider-recipient
verification protocol. This slice returns opaque Rust capabilities and performs
no durable grant, event, provider, pairing-state, or acknowledgement effect.

## Scope

- Add Rust pairing request, website authorization admission, extension
  admission, and typed state machines with exact correlation, expiry, one-shot
  consumption, scope binding, and Simple-vault enforcement.
- Bind approvals to the extension runtime and installation app/encryption/
  signing keys, vault, event-log authority, and sealed provider recipient.
- Validate every already sealed provider credential for the exact retained
  installation key and integrity-bind the provider manifest where transported
  data can be substituted.
- Expose raw untrusted approval admission that consumes authority before DTO
  decoding and returns only an opaque Rust capability.
- Expose generated companion-WASM and nook-WASM contracts using the same core
  state machines and real manager primitives.
- Add native real-instance and independent dual-WASM coverage without browser
  infrastructure or application mocks.
- Exclude all durable pairing effects, accepted acknowledgement emission, and
  production browser/offscreen migration. Rust-owned atomic activation is the
  immediate dependent capability.

## Acceptance criteria

- [ ] A pairing approval is admitted only for one live, unexpired, exactly
      matching request and every attempted approval consumes its authority.
- [ ] Rust rejects wrong request, nonce, runtime, app ID, encryption/signing
      key, vault, scope, event authority, provider manifest, or recipient.
- [ ] Rust validates sealed provider credentials for the exact installation
      recipient without cloning plaintext credentials or persisting effects.
- [ ] Website and extension endpoints expose opaque admitted capabilities; no
      accepted acknowledgement or durable state can be produced in this slice.
- [ ] Native tests compose real objects and cover success, mismatch, expiry,
      replay, provider substitution, wrong recipient, and malformed input.
- [ ] Independent WASM instances exchange only structural cloned DTOs and
      exercise the same admission operations without browser channels.
- [ ] Security review and hosted Rust/WASM checks pass on one exact head.
- [ ] The pull request is ready, squash-merged, remotely verified, and closed
      in Workbench before browser adapter work begins.

## Progress

- 2026-09-07: Predecessor PR #1523 merged and pairing approval design began.
- 2026-09-07: The initial Rust provider and browser integration draft reached
  Security review; three P1 boundary findings required provider hardening and
  a separate sequential consumer pull request.
- 2026-09-07: Provider-only delivery resumed from current `main`; the preserved
  draft remains evidence to port selectively rather than a branch to stack.
- 2026-09-07: Security rejected effectful finalization because fallible writes
  across separate databases could return rejection after durable authority was
  already active. This issue now ends at side-effect-free Rust admission; the
  dependent activation issue owns commit-gated persistence.

## Findings and decisions

- The original approval omitted the launch nonce and did not prove membership
  in a live pairing transaction.
- Provider marker validation alone does not prove encryption for the requested
  installation recipient.
- Authority must be consumed before fallible approval decoding, not only after
  TypeScript has produced a typed value.
- A terminal rejected result cannot coexist with active grant, provider, event,
  or pairing state. Best-effort rollback is not an acceptable substitute.
- Plaintext provider rows must not be cloned while projecting an approval;
  recipient verification operates on already sealed values in this slice.
- Production browser integration is tracked by the dependent
  `companion-pairing-browser-adapters` issue and cannot start until atomic
  activation is merged and closed.

## References

- `nook-app/nook-platform/nook-companion-core/src/companion_pairing.rs`
- `nook-app/nook-platform/nook-companion-wasm/src/companion_pairing.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing.rs`
- `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
