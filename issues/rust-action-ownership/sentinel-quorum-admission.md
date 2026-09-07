---
title: Type Sentinel opened-share admission and quorum reconstruction ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-quorum-admission
created_at: 2026-09-07T09:20:30Z
updated_at: 2026-09-07T10:16:30Z
source_issues: []
related_prs:
  - 1507
depends_on:
  - issues/rust-action-ownership/sentinel-slip39-ownership.md
---

# Type Sentinel opened-share admission and quorum reconstruction ownership

## Context

Sentinel opened-share handling and vault-key reconstruction still expose share opening, contribution validation, quorum reconstruction, and key derivation as homeless functions spread across auth and core modules. These operations form one action graph and need bounded owners that retain the exact identity, stored records, validated contributions, and derivation inputs through each consuming transition.

## Outcome

A borrowed share-opening request owns record lookup, decryption, and envelope/plaintext consistency checks. A borrowed reconstruction request validates every supplied contribution against the exact stored records, admits a private non-Clone quorum, and consumes it to reconstruct keys. Native identity-opening composes opening and reconstruction, while a private borrowed root owner retains the existing domain-separated HKDF derivation.

## Scope

Exact ten-file closure on refreshed main `e053af208be9074fa168a9c0047afe5e9d1de740`:

- `nook-app/nook-platform/nook-auth2/src/auth/multi_device/sentinel.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/multi_device/sentinel/quorum.rs` (new)
- `nook-app/nook-platform/nook-auth2/src/auth/multi_device.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/sentinel_genesis.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock/response.rs`
- `nook-app/nook-platform/nook-auth2/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_connect.rs`
- `nook-app/nook-platform/nook-core/tests/sentinel_vault_workflow.rs`

Move four production operations: `open_sentinel_share_for_identity`, `reconstruct_sentinel_vault_keys_from_opened`, `reconstruct_sentinel_vault_keys`, and `derive_sentinel_vault_keys`. Hard ceiling: 1,400 authored additions.

## Acceptance criteria

- [x] Device-ID parsing, first matching stored record, envelope comparisons, threshold/participant/version consistency, duplicate-index rejection, and error order remain exact.
- [x] All supplied contributions validate before reconstruction from the first threshold-sized subset.
- [x] Version-one base64/JSON reconstruction and version-two SLIP-0039/root derivation remain distinct.
- [x] Opening validates word count only; full checksum/digest validation remains in reconstruction.
- [x] Structural envelope agreement is not treated as proof of signatures or participant authorization; existing unlock response/session validation remains intact.
- [x] HKDF labels, bytes, key parsing, zeroization, schemas, public WASM signatures, and finalization/storage ordering remain unchanged.
- [x] Existing tests remain; a focused extra-contribution admission regression test was added.
- [x] Ownership enforcement and invalid-suppression prohibition cover only the completed new quorum child; unrelated helpers remain unchanged.
- [x] Scoped gates, hosted validation, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No cryptography, schemas, public WASM signatures, authorization policy, response/session validation, storage ordering, or local product builds/tests. Structural lint success does not establish cryptographic or authorization equivalence; existing domain tests and exact-head security review are mandatory.

## Progress

Fresh-main inventory at `e053af208be9074fa168a9c0047afe5e9d1de740` found a closed reconstruction boundary with four free operations and no live PR overlap after excluding #1506's multi-device manager changes.

## Completion

Implemented and merged as PR #1507 at `4ac1aaa5745c623855230f17d0ab6c39dfb811e7`.

- Final PR head: `cbd549c86275d2a1f09ed9926fb990fc37a39087`
- Base: `9944b2a6d69cb486bf2bca916d4122baf47a7eb3`
- Hosted PR run: `34109343398`
- Remote Loom run: `34110236291`
- Preview: `https://pr-1507.nokey-sh.pages.dev`
- Exact-head SECURITY review passed with no P1/P2 findings.
- No local product builds or tests were run.
