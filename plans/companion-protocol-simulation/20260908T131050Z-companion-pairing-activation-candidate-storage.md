---
title: Persist an inert companion pairing activation candidate atomically
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/companion-pairing-activation-candidate-storage.md
started_at: 2026-09-08T13:10:50Z
agent: codex
gizmo_id: companion-pairing-activation-candidate-storage
---

# Task plan

## Interpreted request

Consume preparation and atomically publish an inert candidate after effect-time
revalidation. Deliver strict candidate readback as the next main-based serial PR.

## Requirements

- This supersedes `20260908T123224Z`. Exact-head review proved that complete
  strict readback plus its required recipient-authority evidence cannot fit with
  atomic persistence below the repository 2,000-addition limit.
- Start from current `origin/main`, never a preserved draft. Consume
  `NookPreparedCompanionPairingActivation` once; do not repeat event admission.
- Retain manager binding through async admission. Immediately before the first
  payload write, revalidate manager, approval, provider recipient, and both DEKs.
- Open prepared DEK envelopes only in scoped `Zeroizing` owners. Reject keys
  that encode identical bytes, including case-varied hex, before any write.
- Use a Rust production clock before the first effect, before gate publication,
  and after the awaited gate write. Explicitly abort every post-write failure.
- Store event rows, heads, sealed providers, approval, and correlation under an
  activation prefix in existing `nook_db.vault`. Use one Rexie transaction,
  payloads first and gate last.
- Reject an existing gate so replay and concurrent commits have one winner.
- Keep all candidate rows inert and invisible to authoritative product readers.
- Expose only a typed consuming commit outcome with opaque success and stable
  rejection categories. No load method or absence state belongs in this PR.
- Preserve broad real-manager, schema-encoding, memory-transaction, IndexedDB,
  replay, concurrency, abort, and generated dual-WASM composition evidence.
- Move new epoch, manager-matrix, and memory-store scenario bodies onto focused
  fixtures; test callbacks delegate and contain no infrastructure orchestration.
- Remove the incomplete strict-readback implementation and tests from this PR.
  The successor issue owns graph reconstruction, recipient revalidation,
  `Stored | Absent | Rejected`, corruption classification, and load composition.
- After the replacement head, run acknowledged circuit-breaker validation,
  exact-head Security and Web reviews, readiness, merge, and Workbench closeout.
- Complete estimated authored additions: 3100 across two serial PRs. Current
  persistence estimate: 1750 with a 1900 ceiling. No PR may exceed 2000.

## Constraints and exclusions

- No candidate readback, authoritative adoption, final pairing state,
  `access_granted`, acknowledgement, reset, migration, cleanup, or browser adapter.
- No TypeScript domain logic, Svelte, production web change, new database,
  fallback, compatibility shim, lint suppression, fake domain record, or mock.
- Generated tests may call real WASM directly; infrastructure simulations must
  faithfully implement the transaction contract.
- No local product tests/builds, default task, Docker, or Rust/WASM/Node run.
  Only formatting and static repository gates run locally.
- Exact allowed implementation paths:
  - `nook-app/nook-platform/nook-companion-core/src/companion_pairing.rs`
  - `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing.rs`
  - `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing/activation.rs`
  - `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing/activation/candidate.rs`
  - `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing/activation/candidate/storage.rs`
  - `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing/activation/candidate/storage/schema.rs`
  - `nook-app/nook-platform/nook-wasm/src/manager/mod.rs`
  - `nook-app/nook-platform/nook-wasm/src/lib.rs`
  - `nook-app/nook-web/nook-web-extension/scripts/companion-protocol-composition.test.ts`
  - `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
- Tests remain inline. No arbitrary source split, Cargo/lock/CI change, or
  unrelated product/Cortex edit.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-pairing-activation-candidate-storage
- Estimated authored changed lines: 3100
- Owning modules, packages, or layers: nook-companion-core approval; nook-wasm activation, atomic candidate storage and inline tests; generated WASM commit evidence; Development Core design documentation.
- Ownership units:
1. Capability: Revalidate approval, manager, provider, typed store, and distinct DEKs without plaintext or authority exposure; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Real-manager tests reject expiry, effect-time mutation, invalid provider, malformed DEKs, and semantically equal valid DEKs before writes.
2. Capability: Atomically persist and gate one inert candidate; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Memory and IndexedDB prove payload-first gate-last commit, explicit abort, replay/concurrency, physical isolation, and no authoritative visibility.
3. Capability: Expose a typed consuming commit outcome and direct dual-WASM composition; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Generated composition commits and rejects replay through real WASM instances with no browser transport or TypeScript policy.
4. Capability: Review atomicity, expiry, one-shot authority, distinct DEKs, sealed providers, outcome validity, and non-adoption; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head review confirms no authority, plaintext escape, invalid outcome, or late-expiry residue.
5. Capability: Sequence, validate, land, verify, and close this slice; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Readiness passes on the Security-approved head; merge, Main validation, and immutable Workbench records are verified before readback begins.
6. Capability: Strictly reconstruct and validate the inert stored candidate before opaque readback; Gizmo ID: companion-pairing-activation-candidate-readback; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: The successor's real memory, IndexedDB, graph-recipient, corruption, and generated-WASM tests prove strict non-authoritative readback.
- Public or cross-module interfaces: approval/epoch revalidation; consuming prepared commit; typed commit outcome with opaque nonserializable stored marker.
- Delivery shape: Multiple PRs
- PR sequence mode: Sequential PRs
- Current PR estimated authored changed lines: 1750
- Current PR slice and acceptance evidence: Bounded outcome: Atomically persist one inert prepared candidate without readback or adoption; Acceptance evidence: Approximately 22 focused real-instance checks prove effect-time validation, distinct DEKs, gate-last abort, replay/concurrency, IndexedDB isolation, and generated direct-WASM commit composition.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-pairing-activation-candidate-storage; Gizmo name: Atomic inert candidate persistence; Predecessor Gizmo ID: None; Bounded outcome: Atomically persist one inert prepared candidate without readback or adoption; Estimated authored changed lines: 1750; Acceptance evidence: Approximately 22 focused real-instance checks prove effect-time validation, distinct DEKs, gate-last abort, replay/concurrency, IndexedDB isolation, and generated direct-WASM commit composition.
2. Gizmo ID: companion-pairing-activation-candidate-readback; Gizmo name: Strict inert candidate readback; Predecessor Gizmo ID: companion-pairing-activation-candidate-storage; Bounded outcome: Strictly load an opaque inert candidate only after schema, digest, graph, provider, and approved-recipient validation; Estimated authored changed lines: 1350; Acceptance evidence: Real memory, IndexedDB, Rust, and generated dual-WASM scenarios distinguish absence from corruption, reject recipient loss, and preserve non-authority.

## Initial plan

1. Remove incomplete readback and keep one typed commit outcome.
2. Preserve effect-time validation and atomic gate-last persistence.
3. Fixture-own all new scenario orchestration without reducing coverage.
4. Revalidate Security/Web, hosted execution, readiness, and merge.
5. Close Workbench, then start strict readback from the new `main`.

## Completion evidence

- At most 1900 authored additions; every source remains below 1,000 lines.
- Static gates and hosted Rust, Clippy, Dylint, WASM, coverage, security, policy,
  and generated boundary jobs pass on one exact head.
- Real manager, crypto, memory transaction, and IndexedDB scenarios cover every
  persistence validation and rollback boundary without mocks.
- Generated TypeScript directly composes the real WASM modules for commit and
  replay while owning no domain decisions or browser transport.
- Candidate rows remain activation-prefixed, inert, and absent from authoritative
  event readers; no public candidate load exists in this slice.
- Readiness, merge, remote verification, Workbench issue/worklog/statistics, and
  the proposed readback successor are verified.

## Safety review

This repository-relative plan contains no secrets, private data, raw logs,
local paths, environment values, or infrastructure details.
