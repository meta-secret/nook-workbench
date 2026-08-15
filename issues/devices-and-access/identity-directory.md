---
title: Persist and select multiple identities
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-13T03:58:00Z
updated_at: 2026-08-15T00:30:08Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/997
  - https://github.com/meta-secret/nook/pull/1002
depends_on: []
---

# Persist and select multiple identities

## Context

Rust owns a real `IdentityRecord`, but the browser persistence layer originally
stored one singleton record. Independent identity management requires a
migration-safe collection. It also requires safe ownership updates across
security epochs, recovery, and concurrent installations.

This issue belongs to
[Identity management and access clarity](README.md).

## Outcome

Nook persists a portable Rust identity directory with zero or more identities
and one explicit local selection state. Existing singleton records migrate
without changing identity ids, app-key membership, or vault DEK envelopes.
Epoch transitions and recovery preserve those ownership guarantees.

## Scope

- Add the portable Rust identity-directory model and invariants.
- Validate non-empty labels and unique identity ids.
- Create an identity with the current protected app key.
- List and select local identities through typed WASM values.
- Migrate `identity_record_v1` into the versioned directory atomically.
- Keep vault creation bound to the selected identity.
- Persist identity DEK epoch state and resumable reconciliation plans.
- Reconcile verified remote epoch transitions across installations.
- Preserve safe destructive browser recovery across crashes and tabs.
- Keep password recovery usable across security-epoch transitions.
- Add Rust, actual-WASM, and browser behavior coverage.
- Keep Sentinel identity association in the later enrollment slice.
- Do not add the production management UI in this slice.

## Acceptance criteria

- [x] A person can own zero or more persisted identity records.
- [x] Existing singleton identity data migrates without loss.
- [x] Selection is explicit and rejects unknown identity ids.
- [x] Creating an identity requires a protected current app key.
- [x] Vault creation uses the selected identity and preserves existing behavior.
- [x] Rust and actual-WASM tests cover creation, selection, and migration.
- [ ] Paired-vault handoff defers directory reconciliation until authenticated commit.
- [ ] A concurrent directory update cannot leave Simple-vault genesis permanently blocked.
- [ ] Ordinary and staged genesis use explicit Rust lifecycle variants.
- [ ] Identity DEK epochs reject rollback and resume interrupted transitions.
- [ ] Remote installations reconcile verified epoch transitions safely.
- [ ] Provider publication and import cannot expose a partial epoch transition.
- [ ] Concurrent access grants cannot be erased or resurrected by rotation.
- [ ] Legacy password entries have a usable upgrade path.
- [ ] Destructive recovery commits atomically and has browser coverage.
- [ ] Exact-head validation passes before PR 1002 squash-merges.

## Progress

- 2026-08-14: PR 997 introduced the portable identity directory and then grew
  into recovery, reconciliation, and security-epoch work.
- 2026-08-14: Commit `a10faace` removed the recovery and epoch subsystems to
  reduce PR 997 below the authored-line ceiling. The earlier claim that those
  invariants remained was incorrect.
- 2026-08-14: PR 997 squash-merged the directory, singleton migration,
  selection bridge, selected-identity vault creation, and staged handoff.
- 2026-08-14: Four P1 review threads arrived after merge. PR 1002 owns their
  handoff, staged-genesis, and documentation repairs.
- 2026-08-15: PR 1002 also owns restoration and repair of the removed identity
  epoch, remote visibility, persistence, reconciliation, and browser-recovery
  work. The feature remains incomplete until those criteria pass.

## References

- [Identity architecture](../../../.cortex/design-docs/identity-vault-architecture.md)
- [Devices and access product spec](../../../.cortex/product-specs/devices-and-access.md)
- [Superseding restoration plan](../../plans/devices-and-access/2026-08-15T00-30-08Z-pr-1002-restore-identity-security.md)
