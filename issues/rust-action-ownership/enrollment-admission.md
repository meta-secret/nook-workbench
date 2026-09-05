---
title: Consume structurally admitted enrollment envelopes
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-enrollment-admission
created_at: 2026-09-05T04:02:42.825Z
updated_at: 2026-09-05T10:11:04Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1376
depends_on:
  - issues/rust-action-ownership/event-quarantine-publication.md
---

# Consume structurally admitted enrollment envelopes

## Outcome

A private `CheckedEnrollmentEnvelope` owns structurally admitted encrypted input and consumes it during decryption of that exact envelope. Existing decrypted output remains a report; public WASM behavior is unchanged.

## Scope

Seven Rust files, 324 additions and 134 deletions. Parsing, structural validation, and decryption moved onto the checked owner; obsolete free exports and callers were migrated. The complete child module denies unowned functions and invalid suppression.

## Acceptance criteria

- [x] Existing structural validation, decryption order, algorithms, and exact error categories remain unchanged.
- [x] Private construction, no Clone or Deserialize, immutable observation, and consuming decrypt have compile-fail controls with a positive control.
- [x] Existing domain/provider/browser tests remain; no new credential clones or logging were added.
- [x] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion passed.

## Limits and completion

This capability proves structural admission and exact encrypted-input binding. It does not authenticate outer metadata, establish expiry or replay prevention, or authorize a provider/vault connection. PR1376 merged as dbc555139711f1c7381411108345d89aa6356df5 after full run33959442001, source SECURITY, exact-head readiness, and zero unresolved findings. Worklog: worklogs/rust-action-ownership/2026-09-05T10-11-04Z-pr-1376.md.
