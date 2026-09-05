---
title: Own local keyring signing derivation
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-local-keyring-signing
created_at: 2026-09-05T21:34:19Z
updated_at: 2026-09-05T21:34:19Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/recovery-completion.md
---

# Own local keyring signing derivation

## Outcome

The signing public-key domain type owns deterministic derivation from a validated signing seed, and the local identity keyring module contains no homeless functions.

## Scope

One Rust file with a ceiling of 180 authored additions. Move the private signing-key derivation action onto , replace the free test fixture with a data-carrying fixture, enable full-module ownership enforcement, and add focused failure/nonmutation coverage.

## Acceptance criteria

- [ ]  owns signing-seed derivation.
- [ ] Existing seed parsing, error ordering, public-key bytes, app-key binding, sealing, reopen verification, and replacement ordering remain unchanged.
- [ ] Failed seed protection leaves the prior protected entry unchanged.
- [ ] The module denies homeless functions without blanket suppression.
- [ ] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

No typestate is introduced because deterministic derivation has no actionable lifecycle stage. No public signature, serialization, legacy behavior, schema, dependency, logging, or fallback change.

## Progress

Implementation assigned from current main.
