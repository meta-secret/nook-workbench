---
title: Persist and select multiple identities
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-13T03:58:00Z
updated_at: 2026-08-13T03:58:00Z
source_issues: []
related_prs: []
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
- Do not add the production management UI in this slice.

## Acceptance criteria

- [ ] A person can own zero or more persisted identity records.
- [ ] Existing singleton identity data migrates without loss.
- [ ] Selection is explicit and rejects unknown identity ids.
- [ ] Creating an identity requires a protected current app key.
- [ ] Vault creation uses the selected identity and preserves existing behavior.
- [ ] Rust and actual-WASM tests cover creation, selection, migration, and invalid state.
- [ ] Exact-head validation passes before squash merge.

## References

- [Identity architecture](../../../.cortex/design-docs/identity-vault-architecture.md)
- [Devices and access product spec](../../../.cortex/product-specs/devices-and-access.md)
