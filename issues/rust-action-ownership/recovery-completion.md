---
title: Own local identity recovery completion
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-recovery-completion
created_at: 2026-09-05T20:34:00Z
updated_at: 2026-09-05T20:34:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/simple-genesis-completion.md
---

# Own local identity recovery completion

## Outcome

The persisted `LocalIdentityRecovery` cleanup target owns pending-marker persistence, detection, loading, and consuming completion.

## Scope

Seven Rust files with a ceiling of 300 authored additions. Move four cleanup actions onto the existing recovery type, adapt production callers and tests, remove obsolete reexports, activate ownership enforcement in the cleanup child module, and add focused completion safety coverage.

## Acceptance criteria

- [ ] `LocalIdentityRecovery` consumes itself to complete its cleanup marker.
- [ ] Completion preserves exact target equality, mismatch failure, absent-marker success, and transaction ordering.
- [ ] Provider credentials are deleted before completion and existing scoped/full cleanup behavior is unchanged.
- [ ] The cleanup child module denies homeless functions without blanket suppression.
- [ ] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

This consuming endpoint expresses the existing recovery lifecycle. The persisted type remains cloneable and deserializable, so do not claim unforgeable authorization or global single use. No new states, journal, schema, recovery behavior, fallback, ABI, dependency, or logging change.
