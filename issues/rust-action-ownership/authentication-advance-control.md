---
title: Type authentication advance-control classification
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-authentication-advance-control
created_at: 2026-09-06T02:09:13Z
updated_at: 2026-09-06T02:59:20Z
source_issues: []
related_prs:
  - 1422
depends_on:
  - issues/rust-action-ownership/remote-event-admission.md
---

# Type authentication advance-control classification

## Context

The Rust action-ownership migration continues through companion-core classification that decides whether an observed control may advance an authentication ceremony.

## Outcome

Authentication advance decisions consume one checked classification state carrying canonical destination evidence. Route, form, control-label, and policy operations belong to meaningful domain owners, preventing policy from combining raw destination data with separately derived canonical evidence.

## Scope

- One cohesive five-file companion-core boundary with a 1,700 authored-addition ceiling.
- Add a private borrowed checked authentication-control state and consuming final classification.
- Move route/form and control-label classification onto borrowed data-carrying owners.
- Move advance policy and OTP-context rules onto the checked state.
- Preserve public DTOs, wrappers, and all current consumers outside the five files.
- Exclude browser actuation, provider-policy changes, destination canonicalizer changes, sibling role/passkey/OTP migrations, WASM/TypeScript, retry, fallback, and recovery behavior.

## Acceptance criteria

- [x] Bounds, submission-method, canonical-origin, and provider-authority checks precede policy classification.
- [x] Final policy can access canonical path and route evidence only through the checked state.
- [x] Veto precedence, new-password exceptions, semantic-submit counting, and weak-versus-explicit username evidence remain unchanged.
- [x] Provider, destructive, passkey, recovery, registration, OTP enrollment, and OTP authentication distinctions remain unchanged.
- [x] Canonical path and query handling preserve current behavior without mutating the input observation.
- [x] GET, Dialog, inert, and unowned controls remain rejected where currently required.
- [x] Complete child modules deny homeless functions and reject invalid suppression.
- [x] Existing behavior tests plus bounded checked-state matrices pass remotely.
- [x] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

PR #1422 merged the complete five-file boundary as `99846aeb20df5f7c0c524a673f74542aee7d1273`. Remote Loom, hosted Rust/WASM/web/Dylint checks, exact-head SECURITY review, readiness, and agent-stat publication passed.

## Findings and decisions

The checked state proves classification admission only. It does not establish browser freshness or authorize actuation. Pure text classifiers use borrowed observation owners. A preserved destructive-route veto also applies to decoded query values, so canonical binding tests cover both admissible and rejected navigation metadata.

## References

- `nook-app/nook-platform/nook-companion-core/src/page_field_classification/form_identity.rs`
- `nook-app/nook-platform/nook-companion-core/src/page_field_classification/control_identity.rs`
- `nook-app/nook-platform/nook-companion-core/src/page_field_classification/authentication_advance_control.rs`
- `nook-app/nook-platform/nook-companion-core/src/page_field_classification/authentication_advance_control/policy.rs`
- `nook-app/nook-platform/nook-companion-core/src/page_field_classification.rs`
