---
title: Consume structurally admitted enrollment envelopes
status: ready
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-enrollment-admission
created_at: 2026-09-05T04:02:42.825Z
updated_at: 2026-09-05T04:02:42.825Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/oauth-origin.md
---

# Consume structurally admitted enrollment envelopes

## Outcome

A private checked encrypted-envelope owner consumes into decryption of that exact admitted envelope. Existing decrypted output remains a report; public WASM behavior is unchanged.

## Scope

Seven Rust files, estimated 300–450 authored additions and ceiling550. Relocate parsing, structural validation and decryption onto CheckedEnrollmentEnvelope in a private child module. Migrate peeks, direct WASM decoder, reexports and existing tests. Complete new child module denies unowned functions and forbids invalid suppression.

## Acceptance criteria

- [ ] Existing structural validation, decryption order, algorithms and exact error categories remain unchanged.
- [ ] Private construction, no Clone or Deserialize, immutable observation and consuming decrypt are compile-fail tested with a positive control.
- [ ] Existing domain/provider/browser tests remain; no new credential clones or logging.
- [ ] Hosted checks, source SECURITY, readiness, squash merge and Workbench completion pass.

## Limits and decisions

This capability proves structural admission and exact encrypted input binding. It does not authenticate outer entry ID, label or issued time; establish expiry or replay prevention; or authorize a provider/vault connection. Existing AES-GCM authenticates the encrypted provider payload, while later provider authentication and current vault/membership checks remain authoritative. No new metadata authentication, exact-entry selection, replay policy, schema, crypto, recovery or TypeScript flow is authorized by this narrow slice. Those end-to-end policies need a separate cross-team design. Re-parsing an input remains possible, as today. Existing decrypted DTO ownership and secret cleanup limitations remain explicit.

## Progress

DEV-CORE completed read-only graph inventory at main65901c8c. No implementation or validation is claimed.
