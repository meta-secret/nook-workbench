---
title: Type encrypted secret replacement and reviewed backup-code admission
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-encrypted-secret-replacement
created_at: 2026-09-06T23:02:00Z
updated_at: 2026-09-06T23:02:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/secret-fingerprint-ownership.md
---

# Type encrypted secret replacement and reviewed backup-code admission

## Context

Encrypted replacement and backup-code admission still expose seven homeless production operations across session replacement and authenticator backup-code normalization. Callers can perform replacement and normalization without a type carrying the selected mutable target, validated identifiers, encrypted candidate, or reviewed-code policy.

## Outcome

Encrypted replacement becomes an explicit admission and consuming commit flow. A prepared replacement binds the selected target, validated IDs, crypto context, and exact ciphertext until commit, while ordinary plaintext replacement remains a distinct borrowed owner. Backup-code normalization and application become bounded borrowed data owners, with verification retaining its existing reviewed predicate.

## Scope

Exact eight-file core/WASM closure:

- `nook-app/nook-platform/nook-core/src/secrets/session.rs`
- `nook-app/nook-platform/nook-core/src/secrets/authenticator/backup_codes.rs`
- `nook-app/nook-platform/nook-core/src/secrets/authenticator.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/tests/vault_workflow.rs`
- `nook-app/nook-platform/nook-wasm/src/secret_api.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/secrets.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/authenticator_enrollment.rs`

Move seven production operations onto bounded owners while retaining all 40 existing tests. Add bounded normalization, typed rejection, encrypted commit/drop, projection-preservation, privacy, no-Clone, consuming-use, and exclusive-borrow controls. Keep additions between 750 and 1,050, below a hard ceiling of 1,400; preserve every existing file ceiling.

## Acceptance criteria

- [ ] Encrypted replacement admission binds the actual mutable target, crypto context, validated identifiers, and exact ciphertext until consuming commit; prepared state is non-Clone and dropping it does not mutate.
- [ ] Ordinary plaintext replacement remains a distinct borrowed owner and preserves current partial-effect ordering when encryption fails.
- [ ] Reviewed replacement preserves lookup/duplicate/error precedence, decrypt-and-verify-before-live-mutation, intended-vector equality, merge containment, and temporary plaintext zeroization.
- [ ] Backup-code owners preserve trim, stable deduplication, case sensitivity, 64-code and 64-Unicode-scalar bounds, permissive soft normalization, and existing verification predicates.
- [ ] Invalid and non-authenticator projections remain unchanged; WASM projection mutation precedes asynchronous event append exactly as before.
- [ ] Public WASM signatures, crypto, wire, schema, storage, consent, and recovery behavior remain unchanged.
- [ ] All 40 existing tests remain; focused bounds, ordering, commit/drop, projection, privacy, no-Clone, consuming-use, and exclusive-borrow controls are added.
- [ ] Ownership enforcement is activated only in completed `session.rs` and `backup_codes.rs`; unrelated adapter scopes remain deferred.
- [ ] Hosted PR checks, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No schema, cryptographic algorithm, wire, browser ABI, consent, storage transaction, rollback, durability, recovery, fallback, authorization, freshness, or global single-use changes. Preserve partial-effect ordering and all zeroization boundaries. Newly owned secret intermediates must have explicit zeroizing lifetimes.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `0fd9d80a9928c880f9d5410970b6b4cb46e17219` found seven homeless production operations across an exact eight-file closure with no live PR overlap. Estimated scope is 750–1,050 additions with a hard ceiling of 1,400.
