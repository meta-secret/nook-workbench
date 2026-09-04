---
title: Consume checked Sentinel unlock requests into participant responses
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-response
created_at: 2026-09-04T21:45:00Z
updated_at: 2026-09-04T21:57:43.489Z
source_issues: []
related_prs: [1348]
depends_on:
  - issues/rust-action-ownership/foundation.md
---

# Consume checked Sentinel unlock requests into participant responses

## Context

The [project migration](README.md) next adopts the Sentinel participant response action after the numeric-domain foundation merged in PR 1335.

## Outcome

A raw request must pass its signature and expected-key binding checks before a private checked request can consume itself to open a participant share and encrypt the response.

## Scope

- Model raw request checking and the checked response operation in a focused auth2 module.
- Move the small core signing adapters onto SigningIdentity and update all direct consumers.
- Preserve wire DTOs, signature bytes, error categories, share checks, and WASM roster/genesis-delivery and vault checks.
- Add behavior and compile-fail evidence and execute auth2 doctests in the hosted native path.

## Acceptance criteria

- [ ] The checked stage has private fields and cannot be cloned, deserialized, constructed unchecked, or reused after response.
- [ ] Wrong expected keys, tampering, invalid policy, and invalid participant bindings fail without a response; valid encrypted responses remain accepted by the existing quorum flow.
- [ ] Core signing adapters and the new response module enforce meaningful function ownership.
- [ ] Existing WASM authorization checks and public wire contracts remain intact.
- [ ] Hosted tests, doctests, Dylint, security review, exact-head readiness, and squash merge complete.

## Progress

- 2026-09-04: SECURITY inspected current main and selected the bounded participant-response graph. Estimated eight files and at most 1200 additions, including focused hosted doctest wiring.

- 2026-09-04: PR 1348 published at 26df3bcb with 359 additions across eight files. SECURITY and pre-push checks passed; current coverage-policy base is incorporated. Hosted validation and review are dispatched.

## Findings and decisions

- SigningIdentity is defined in event-log, so core owns a SentinelUnlockSigning extension trait rather than an illegal inherent impl. The superseding immutable plan records this interface.
- A checked request proves signature validity and equality with the supplied expected key. It does not independently establish roster membership, current authorization, freshness, or replay prevention.
- Full quorum-session consumption remains a later slice because the existing WASM finalizer retains a cloned session across fallible work. This slice adds no recovery or retention mechanism.

## References

- [Unlock protocol](https://github.com/meta-secret/nook/blob/main/nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock.rs)
- [Domain inventory](domain-adoption.md)
