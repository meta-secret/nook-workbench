---
title: Type vault-keyed secret fingerprint and enrichment ownership
status: planned
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-secret-fingerprint
created_at: 2026-09-06T20:33:39Z
updated_at: 2026-09-06T20:33:39Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/shared-import-support-ownership.md
---

# Type vault-keyed secret fingerprint and enrichment ownership

## Context

Secret fingerprinting and import enrichment still expose twelve homeless production operations across canonicalization, metadata recognition, digest construction, and merge orchestration. These operations can be called without a type carrying the selected identity/version semantics, canonical bytes, vault key, or metadata marker policy.

## Outcome

Secret identity/version fingerprint requests, canonical byte construction, note recognition, metadata append/merge, and enrichment become explicit consuming, borrowed, and data-carrying owners. The selected fingerprint kind, canonical bytes, and borrowed vault key stay bound until digest completion. Existing caller-controlled matching assumptions and unsupported-variant behavior remain unchanged.

## Scope

Exact ten-file core/WASM closure:

- `nook-app/nook-platform/nook-core/src/secrets/secret_fingerprint.rs`
- `nook-app/nook-platform/nook-core/src/secrets/secret_fingerprint/canonical.rs` (new)
- `nook-app/nook-platform/nook-core/src/secrets/secret_fingerprint/metadata.rs` (new)
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/crypto/vault_epoch_crypto.rs`
- `nook-app/nook-platform/nook-core/tests/event_log_harness.rs`
- `nook-app/nook-platform/nook-core/tests/event_log_workflow.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/passkeys.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/secrets.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/secrets/secret_import.rs`

Move twelve production operations and two fixture helpers onto bounded owners while retaining 13 fingerprint tests and all direct consumer suites. Keep additions between 1,050 and 1,450, below a hard ceiling of 1,700; keep the parent below 650 lines and every changed consumer below its existing line ceiling.

## Acceptance criteria

- [ ] Secret identity/version requests retain variant distinction and expose canonicalization, fingerprint, and enrichment only through named owners.
- [ ] Canonical digest ownership binds fingerprint kind, exact canonical bytes, and borrowed vault key until consuming completion; HMAC-SHA256 framing and ASCII key bytes remain exact.
- [ ] All secret variants preserve whitespace, sorting, counters/flags, attachments, card fields, and field ordering behavior.
- [ ] Metadata owners preserve provider marker sets, first-bullet recognition, heading boundaries, dotted-field rules, earliest-section selection, and note merge ordering/idempotence.
- [ ] Existing enrichment clones and unsupported pair behavior remain unchanged; no authorization, freshness, or matching proof is added.
- [ ] Epoch re-encryption, passkey updates, secret saves, import reconciliation, plaintext destruction, and append sequencing remain unchanged.
- [ ] All 13 fingerprint tests remain; focused canonical-byte/digest, framing ambiguity, marker-boundary, merge, borrow, and consumption controls are added inline. Existing epoch, event-log, passkey, secret-save, and import suites remain retained.
- [ ] Ownership denial and invalid-suppression prohibition cover the parent and new production children; fixtures remain unchanged except for owned helpers.
- [ ] No fingerprint/storage schema, ABI, cryptographic algorithm, validation, fallback, recovery, or new limit changes are added.
- [ ] Hosted PR checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass; remote Loom status is recorded without unrelated repair.

## Constraints

No cryptographic algorithm or storage schema change, generic secret framework, fallback, recovery exception, authorization inference, freshness proof, public ABI change, or unrelated lint activation. Preserve canonical bytes, framing, marker boundaries, merge order, zeroization, and append sequencing exactly.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `3cbc19bad6d235796d4c8049738f3c842719a4fb` found twelve homeless production operations and two fixture helpers across an exact ten-file closure with no live PR overlap. Estimated scope is 1,050–1,450 additions with a hard ceiling of 1,700. Open PRs #1468, #1466, and #1210 do not intersect the closure.
