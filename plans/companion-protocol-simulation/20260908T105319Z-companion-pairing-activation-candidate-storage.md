---
title: Persist an inert companion pairing activation candidate atomically
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/companion-pairing-activation-candidate-storage.md
started_at: 2026-09-08T10:53:19Z
agent: codex
gizmo_id: companion-pairing-activation-candidate-storage
---

# Task plan

## Interpreted request

Consume merged preparation, revalidate effect-time facts, and atomically store
an inert candidate. Opaque readback grants no authority. One exhaustive
Rust-owned generated state replaces independent success/failure options.

## Requirements

- This plan supersedes `20260908T093726Z` because Web Development found that
  two independent optional outcome channels permit neither/both interpretation.
  The parent-module re-export authorized by that plan remains required.
- Start from current `origin/main`, never the preserved draft. Consume
  `NookPreparedCompanionPairingActivation` once; do not repeat event admission.
- Retain manager binding through async admission. Immediately before the first
  payload write, revalidate manager, approval, provider recipient, and DEKs so
  mutation after candidate construction cannot cross the effect boundary.
- Open both prepared DEK envelopes only for that manager in scoped zeroizing
  owners; parse and discard plaintext. Never persist, return, clone, serialize,
  or log plaintext keys.
- Use a Rust production clock after pure preparation and again after payload
  writes immediately before gate publication.
- Store rows, heads, sealed providers, approval, and correlation under an
  activation prefix in existing `nook_db.vault`. Use one Rexie transaction,
  payloads first and gate last; abort post-write failures.
- Reject an existing vault gate so replay/concurrent commits have one winner.
  The gate is an integrity/publication marker, not authenticated authority.
- Strictly encode/decode documented V1 data. Reject missing, malformed,
  unsupported, unknown-field, torn, mismatched, or digest-corrupt content with
  no compatibility fallback.
- Before readback, validate identifiers, signatures, membership, heads/counts,
  correlations, and digests. Providers stay sealed.
- Keep raw candidate, row, gate, codec, commit, and load primitives private.
  Export only the opaque stored candidate and typed outcome boundary.
- One exhaustive named state owns the outcome. Use state-specific concrete
  accessors, not `Option` ABI channels rejected by Tsify. Rust makes neither/both
  impossible; generated TypeScript switches exhaustively with no `undefined`.
- Keep numeric V1 conversion wholly private behind a named schema boundary; no
  public numeric conversion trait. Resolve Clippy ownership, underscore-binding,
  and let-else findings structurally, without suppression.
- Browser success/replay/load evidence uses a live non-expiring candidate or a
  deterministic clock, never the expired `200` fixture with `Date::now()`.
- Preserve all current functionality, 22 focused Rust tests, and the generated
  composition scenario; keep approximately 24 focused acceptance checks.
- Complete Security review, hosted validation, merge verification, and
  Workbench closeout before the next slice.
- Estimated authored additions: 1725. Hard planned ceiling: 1800. Crossing the
  ceiling requires another superseding plan, never compressed code or evidence.

## Constraints and exclusions

- No authoritative-reader adoption, final pairing state, `access_granted`,
  acknowledgement, pairing mutation, reset, migration, or cleanup.
- No TypeScript domain logic/orchestration, browser adapter/transport,
  window/channel, Svelte, or production web change. Existing generated tests
  may invoke WASM and check typed opaque ownership.
- No mocks, stubs, fake records, test-only production API, fallback,
  compatibility shim, lint suppression, floor change, or new DB. Memory storage
  faithfully simulates the transaction.
- Loaded data stays inert because the same-origin database and co-located gate
  are mutable. Later adoption must revalidate against an external trust root.
- Do not check out, cherry-pick, rebase, or implement from the preserved draft.
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
- Tests remain inline. No external test module under `src`, arbitrary split,
  Cargo/lock/CI change, or unrelated product/Cortex edit.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-pairing-activation-candidate-storage
- Estimated authored changed lines: 1725
- Owning modules, packages, or layers: nook-companion-core approval; nook-wasm activation, private schema/storage and inline tests; generated WASM evidence; Development Core design documentation.
- Ownership units:
1. Capability: Revalidate prepared approval, manager, provider, typed store, and DEKs without plaintext or authority exposure; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Real-manager tests prove valid candidates and typed rejection of expiry, substitution before effects, invalid store, and malformed DEKs.
2. Capability: Encode, atomically commit, and gate-aware load an inert strict V1 candidate; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Schema, memory, and live-candidate IndexedDB tests prove gate-last abort, replay/concurrency, reload, and corrupt/unknown/unsupported rejection.
3. Capability: Expose commit/load through one exhaustive generated state with state-valid candidate/failure accessors; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Generated composition covers admission through replay; TypeScript switches exhaustively with no optional or undefined channel.
4. Capability: Review atomicity, expiry, one-shot authority, plaintext lifetime, sealed providers, outcome validity, mutable-gate limits, and non-adoption; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head Security review confirms no live authority and no invalid outcome state.
5. Capability: Sequence, validate, land, verify, and close this slice; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Readiness passes on the Security-approved head; merge, Main validation, and immutable Workbench records are verified.
- Public or cross-module interfaces: approval/epoch revalidation; consuming prepared commit; manager-owned load; exhaustive outcome state with state-valid accessors; opaque nonserializable stored candidate.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1725
- Current PR slice and acceptance evidence: Bounded outcome: Store/load one inert prepared candidate without adoption through one exhaustive Rust-owned generated outcome state; Acceptance evidence: Approximately 24 focused checks prove revalidation, DEK access, strict V1, atomic gate, replay/concurrency, IndexedDB, and no authority; generated TypeScript exhaustively switches state and uses candidate only on success and failure only on rejection.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-pairing-activation-candidate-storage; Gizmo name: Inert pairing activation candidate storage; Predecessor Gizmo ID: None; Bounded outcome: Store/load one inert prepared candidate without adoption through one exhaustive Rust-owned generated outcome state; Estimated authored changed lines: 1725; Acceptance evidence: Approximately 24 focused checks prove revalidation, DEK access, strict V1, atomic gate, replay/concurrency, IndexedDB, and no authority; generated TypeScript exhaustively switches state and uses candidate only on success and failure only on rejection.

## Initial plan

1. Retain candidate storage and effect-time validation.
2. Keep strict V1 and payload-first, gate-last atomic storage.
3. Replace optional channels with one exhaustive state and valid accessors.
4. Preserve 22 Rust tests and the generated scenario; add outcome evidence.
5. Preserve docs; pass review, hosted validation, readiness, merge, and closeout.

## Completion evidence

- At most 1800 authored additions; every source file remains below 1,000 lines.
- Static gates and hosted Rust, Clippy, Dylint, WASM, coverage, security,
  policy, and generated boundary jobs pass on one approved head.
- Twenty-two Rust tests plus generated evidence cover empty/sealed commits;
  manager mutation at the effect boundary; store/provider/DEK rejection; expiry;
  strict schema; interrupted writes; replay/concurrency; and live reload.
- Generated TypeScript exhaustively switches one outcome state. Rust makes the
  candidate accessor concrete only for success and failure accessor concrete
  only for failure; neither/both is unrepresentable.
- Browser evidence confines candidate keys to activation-prefixed `vault`;
  authoritative readers cannot observe them.
- Security accepts the gate as integrity/publication only and requires external-
  root revalidation for adoption. Readiness, merge, Main validation, and
  Workbench issue/worklog/statistics are verified.

## Safety review

This repository-relative plan contains no secrets, private data, raw logs,
local paths, environment values, or infrastructure details.
