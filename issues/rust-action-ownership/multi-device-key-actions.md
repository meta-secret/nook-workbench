---
title: Type multi-device vault key and record actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-multi-device-key-actions
created_at: 2026-09-07T20:30:00Z
updated_at: 2026-09-07T21:35:00Z
source_issues: []
related_prs:
  - 1543
depends_on:
  - issues/rust-action-ownership/multi-device-join-ownership.md
---

# Type multi-device vault key and record actions

## Context

The multi-device join lifecycle is typed, but the surrounding vault-key and flat-record utilities still expose detached operations. Key generation, auth-envelope construction and resolution, record classification, and metadata filtering pass identities, key material, and raw record slices independently, so callers can detach actions from the domain state that gives them meaning.

## Outcome

Multi-device key material and record views become owned actions. Vault key generation and auth-envelope parsing/issuance/resolution live on the existing key and identity types; record classification and filtering use a borrowed record-view owner; public-key derivation and age sealing are methods on their key owners. Existing wire rows, encryption, aliases, errors, ordering, and caller behavior remain unchanged.

## Scope

One cohesive auth2/core closure:

- `nook-app/nook-platform/nook-auth2/src/auth/multi_device.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/multi_device/state.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/multi_device_api` exports in `nook-auth2/src/lib.rs`
- Direct core vault/auth consumers and multi-device tests that call the migrated utilities

Migrate the key-generation, public-key derivation, auth-envelope parse/issue/resolve, join-record key, metadata classification/filtering, and user-record projection operations. Keep join/approval, roster, Sentinel, and storage schemas unchanged. Target 900–1,400 authored additions with a hard ceiling of 1,800.

## Acceptance criteria

- [x] Vault key and compact-id generation are owned by their domain types and preserve randomness, validation, and error mapping.
- [x] Auth-envelope parse, issuance, and key resolution preserve exact JSON fields, age encryption/decryption, identity binding, key selection, aliases, and error ordering.
- [x] Public-key app/auth-id derivation and age recipient sealing preserve exact hashes, parse errors, armor, and ciphertext bytes.
- [x] Record classification, join listing, multi-device detection, metadata filtering, and remote join replacement use a named borrowed view/state owner with the same row ordering and mutation semantics.
- [x] No compatibility free functions remain for the migrated operations; direct callers use the owning methods.
- [x] Existing multi-device, vault, sync, and diagnostic behavior tests remain and focused owner/consuming-state controls cover the new action graph.
- [x] Ownership denial and invalid-suppression prohibition cover the completed key/record action modules without blanket suppression.
- [x] Remote Loom, hosted checks, exact-head SECURITY, readiness, squash merge, and Workbench completion pass.

## Constraints

No schema, ABI, cryptographic algorithm, authorization, persistence, fallback, recovery, or retry changes. Preserve legacy aliases where they are type methods or existing public data contracts, but do not retain detached wrappers for migrated actions. No local product builds or tests.

## Progress

Fresh `origin/main` after PR #1538 (`3348c3746f8b3799a72ec5c0f47fcdb4dd3e59cf`) shows the join/approval actions already owned while the surrounding multi-device utility layer remains homeless. This is the next bounded security-domain closure.

## Completion

PR #1543 merged as `39b6201a561e0207b61f86b23b3bdb822c102f7c` from exact reviewed head `76c29f821741ac0c18a0707758a4bb84f4d49e12`. The final implementation stayed below the authored-addition ceiling and moved the multi-device key, envelope, record-view, and caller actions onto owned domain types while preserving wire, crypto, ordering, and error behavior. Remote Loom `34162490741`, hosted validation `34162499894`, exact-head readiness, deployment `https://pr-1543.nokey-sh.pages.dev`, and merge verification all passed.

## Findings and decisions

The existing action-ownership policy was sufficient for this closure; no new Cortex rule was required. The implementation uses simple consuming and borrowed owners rather than a generic typestate framework, reserving richer states for boundaries that carry a real lifecycle invariant. Two replacement heads were required to repair direct callers, strict Clippy findings, and a WASM Node test import/borrow issue before the final green head.

## References

- https://github.com/meta-secret/nook/pull/1543
- `nook-app/nook-platform/nook-auth2/src/auth/multi_device/key_actions.rs`
- `nook-app/nook-platform/nook-auth2/src/auth/multi_device/state.rs`
- `nook-app/nook-platform/nook-core/src/auth/multi_device.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/multi_device.rs`
