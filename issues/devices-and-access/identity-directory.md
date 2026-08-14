---
title: Persist and select multiple identities
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-13T03:58:00Z
updated_at: 2026-08-14T22:45:00Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/997
depends_on: []
---

# Persist and select multiple identities

## Context

Rust owns a real `IdentityRecord`, but the browser persistence layer stores one
singleton record and the WASM UI bridge exposes one snapshot. Independent
identity management requires a migration-safe collection before the UI may
render multiple identities.

This issue belongs to
[Identity management and access clarity](README.md).

## Outcome

Nook persists a portable Rust identity directory with zero or more identities
and one explicit local selection state. Existing singleton records migrate
without changing identity ids, app-key membership, or vault DEK envelopes.

## Scope

- Add the portable Rust identity-directory model and invariants.
- Validate non-empty labels and unique identity ids.
- Create an identity with the current protected app key.
- List and select local identities through typed WASM values.
- Migrate `identity_record_v1` into the versioned directory atomically.
- Keep vault creation bound to the selected identity.
- Add behavior-focused Rust and actual-WASM persistence coverage.
- Keep Sentinel identity association in the later enrollment slice.
- Do not add the production management UI in this slice.

## Acceptance criteria

- [x] A person can own zero or more persisted identity records.
- [x] Existing singleton identity data migrates without loss.
- [x] Selection is explicit and rejects unknown identity ids.
- [x] Creating an identity requires a protected current app key.
- [x] Vault creation uses the selected identity and preserves existing behavior.
- [x] Rust and actual-WASM tests cover creation, selection, migration, and invalid state.
- [x] Exact-head validation passes before squash merge.
- [ ] Paired-vault handoff defers directory reconciliation until authenticated commit.
- [ ] A concurrent directory update cannot leave Simple-vault genesis permanently blocked.
- [ ] Ordinary and staged genesis use explicit Rust lifecycle variants.

## Progress

- 2026-08-14: PR 997 was reduced below the 5,000-authored-line ceiling.
  Portable identity-directory, Simple-vault lifecycle, recovery, and epoch
  invariants remain in this independently testable slice. Sentinel identity
  association and its browser demonstrations remain in the ordered enrollment
  work after this issue.
- 2026-08-14: PR 997 squash-merged. The directory, singleton migration,
  selection bridge, selected-identity vault creation, active-roster DEK
  reconciliation, and crash-safe staged identity handoff are complete. Every
  changed source file is at or below 750 lines. Exact-head PR validation and
  the headless Devices and access demo passed.
- 2026-08-14: Four P1 review threads arrived after PR 997 merged. A focused
  follow-up will fix the paired-handoff ordering, conflicted-marker recovery,
  explicit staged-genesis lifecycle types, and dense architecture prose before
  the issue returns to done.

## References

- [Identity architecture](../../../.cortex/design-docs/identity-vault-architecture.md)
- [Devices and access product spec](../../../.cortex/product-specs/devices-and-access.md)
