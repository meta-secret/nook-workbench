---
title: Persist and select multiple identities
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-13T03:58:00Z
updated_at: 2026-08-15T14:08:27Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/997
  - https://github.com/meta-secret/nook/pull/1002
  - https://github.com/meta-secret/nook/pull/1008
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
- [x] Paired-vault handoff defers directory reconciliation until authenticated commit.
- [x] A concurrent directory update cannot leave Simple-vault genesis permanently blocked.
- [x] Ordinary and staged genesis use explicit Rust lifecycle variants.
- [ ] Identity DEK epochs reject rollback and resume interrupted transitions.
- [ ] Remote installations reconcile verified epoch transitions safely.
- [ ] Provider publication and import cannot expose a partial epoch transition.
- [ ] Concurrent access grants cannot be erased or resurrected by rotation.
- [ ] Legacy password entries have a usable upgrade path.
- [ ] Destructive recovery commits atomically and has browser coverage.
- [x] Exact-head validation passes before PR 1002 squash-merges.

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
- 2026-08-15: The full restored implementation was preserved at commit
  `553fdc6653c39f8c22c7f5622b2c2387e7817c16` and linked draft PR 1008 before
  the work was divided by capability.
- 2026-08-15: PR 1002 squash-merged as `e8b39601247b9986bf633bdb96d6c6cae095b508`.
  It completed authenticated handoff, staged genesis, legacy app-key migration,
  event-store integrity, and the semantic PR-split policy with zero unresolved
  review threads and green exact-head validation.
- 2026-08-15: PR 1008 remains the ordered successor for identity epochs,
  provider reconciliation, password migration, and destructive recovery. The
  issue remains in progress until that linked slice is complete.

## References

- [Identity architecture](../../../.cortex/design-docs/identity-vault-architecture.md)
- [Devices and access product spec](../../../.cortex/product-specs/devices-and-access.md)
- [Superseding restoration plan](../../plans/devices-and-access/2026-08-15T00-30-08Z-pr-1002-restore-identity-security.md)
- [Semantic split plan](../../plans/devices-and-access/2026-08-15T06-39-38Z-pr-1002-semantic-split.md)
- [PR 1002 completion worklog](../../worklogs/devices-and-access/2026-08-15T14-08-27Z-pr-1002.md)
