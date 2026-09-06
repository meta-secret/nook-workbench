---
title: Type authentication advance-control classification
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-authentication-advance-control
created_at: 2026-09-06T02:09:13Z
updated_at: 2026-09-06T02:09:13Z
source_issues: []
related_prs: []
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

- [ ] Bounds, submission-method, canonical-origin, and provider-authority checks precede policy classification.
- [ ] Final policy can access canonical path and route evidence only through the checked state.
- [ ] Veto precedence, new-password exceptions, semantic-submit counting, and weak-versus-explicit username evidence remain unchanged.
- [ ] Provider, destructive, passkey, recovery, registration, OTP enrollment, and OTP authentication distinctions remain unchanged.
- [ ] Canonical path and query handling preserve current behavior without mutating the input observation.
- [ ] GET, Dialog, inert, and unowned controls remain rejected where currently required.
- [ ] Complete child modules deny homeless functions and reject invalid suppression.
- [ ] Existing behavior tests plus bounded checked-state matrices pass remotely.
- [ ] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

The complete five-file boundary is inventoried from main with zero overlap against live PRs #1420, #1417, and #1210.

## Findings and decisions

The checked state proves classification admission only. It does not establish browser freshness or authorize actuation. Pure text classifiers use borrowed observation owners rather than artificial single-use transitions.

## References

- `nook-app/nook-platform/nook-companion-core/src/page_field_classification/form_identity.rs`
- `nook-app/nook-platform/nook-companion-core/src/page_field_classification/control_identity.rs`
- `nook-app/nook-platform/nook-companion-core/src/page_field_classification/authentication_advance_control.rs`
- `nook-app/nook-platform/nook-companion-core/src/page_field_classification/authentication_advance_control/policy.rs`
- `nook-app/nook-platform/nook-companion-core/src/page_field_classification.rs`
