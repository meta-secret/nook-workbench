---
title: Implement companion pairing approval protocol
status: ready
priority: p1
automation: agent
owner: cypherkitty
gizmo_id: companion-pairing-approval-protocol
created_at: 2026-09-07T14:51:01Z
updated_at: 2026-09-07T17:00:27Z
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

Rust exposes a complete, secure pairing request, website authorization,
extension admission/finalization, and typed acknowledgement protocol. Real
manager tests and generated independent-WASM coverage prove the provider before
production browser adapters consume it in the next pull request.

## Scope

- Add Rust pairing request, website authorization, extension admission, and
  typed acknowledgement state machines with exact correlation, expiry,
  one-shot consumption, scope binding, and Simple-vault enforcement.
- Bind approvals to the extension runtime and installation app/encryption/
  signing keys, vault, event-log authority, and sealed provider recipient.
- Validate every provider credential for the exact retained installation key
  before persistence and integrity-bind the accepted provider manifest where
  transported data can be substituted.
- Expose raw untrusted approval admission that consumes authority before DTO
  decoding or manager effects.
- Expose generated companion-WASM and nook-WASM contracts using the same core
  state machines and real manager primitives.
- Add native real-manager and independent dual-WASM coverage without browser
  infrastructure or application mocks.
- Exclude production browser/offscreen migration; that begins only after this
  provider pull request is merged and closed out.

## Acceptance criteria

- [ ] A pairing approval is accepted only for one live, unexpired, exactly
      matching request and every attempted approval consumes its authority.
- [ ] Rust rejects wrong request, nonce, runtime, app ID, encryption/signing
      key, vault, scope, event authority, provider manifest, or recipient.
- [ ] Rust validates sealed provider credentials for the exact installation
      recipient before persistence and rejected attempts leave no pairing or
      provider state.
- [ ] Website and extension endpoints use real NookVaultManager operations and
      generated typed acknowledgements.
- [ ] Native tests compose real managers and cover success, mismatch, expiry,
      replay, provider substitution, wrong recipient, and effect failure.
- [ ] Independent WASM instances exchange only structural cloned DTOs and
      exercise the same provider operations.
- [ ] Security review and hosted Rust/WASM checks pass on one exact head.
- [ ] The pull request is ready, squash-merged, remotely verified, and closed
      in Workbench before browser adapter work begins.

## Progress

- 2026-09-07: Predecessor PR #1523 merged and pairing approval design began.
- 2026-09-07: The initial Rust provider and browser integration draft reached
  Security review; three P1 boundary findings required provider hardening and
  a separate sequential consumer pull request.

## Findings and decisions

- The original approval omitted the launch nonce and did not prove membership
  in a live pairing transaction.
- Provider marker validation alone does not prove encryption for the requested
  installation recipient.
- Authority must be consumed before fallible approval decoding, not only after
  TypeScript has produced a typed value.
- Production browser integration is tracked by the dependent
  `companion-pairing-browser-adapters` issue and cannot start until this issue
  is merged and closed.

## References

- `nook-app/nook-platform/nook-companion-core/src/companion_pairing.rs`
- `nook-app/nook-platform/nook-companion-wasm/src/companion_pairing.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing.rs`
- `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
