---
title: Own local keyring signing derivation
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-local-keyring-signing
created_at: 2026-09-05T21:34:19Z
updated_at: 2026-09-05T21:52:54Z
source_issues: []
related_prs:
  - 1403
depends_on:
  - issues/rust-action-ownership/recovery-completion.md
---

# Own local keyring signing derivation

## Outcome

The signing public-key domain type owns deterministic derivation from a validated signing seed, and the local identity keyring module contains no homeless functions.

## Scope

One Rust file with a ceiling of 180 authored additions. Move the private signing-key derivation action onto `DeviceSigningPublicKey`, replace the free test fixture with a data-carrying fixture, enable full-module ownership enforcement, and add focused failure/nonmutation coverage.

## Acceptance criteria

- [x] `DeviceSigningPublicKey` owns signing-seed derivation.
- [x] Existing seed parsing, error ordering, public-key bytes, app-key binding, sealing, reopen verification, and replacement ordering remain unchanged.
- [x] Failed seed protection leaves the prior protected entry unchanged.
- [x] The module denies homeless functions without blanket suppression.
- [x] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

No typestate is introduced because deterministic derivation has no actionable lifecycle stage. No public signature, serialization, legacy behavior, schema, dependency, logging, or fallback change.

## Progress

PR #1403 merged as `84cafaf0cac092dc85a79d49f5f18fc4a6fa2739` after hosted validation, source SECURITY, readiness, and an infrastructure-only failed-job rerun passed.
