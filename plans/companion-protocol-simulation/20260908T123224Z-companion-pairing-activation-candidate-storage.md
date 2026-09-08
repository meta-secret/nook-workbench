---
title: Persist an inert companion pairing activation candidate atomically
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/companion-pairing-activation-candidate-storage.md
started_at: 2026-09-08T12:32:24Z
agent: codex
gizmo_id: companion-pairing-activation-candidate-storage
---

# Task plan

## Interpreted request

Consume preparation and atomically store an inert candidate after effect-time
revalidation. Readback grants no authority; one generated state owns outcomes.

## Requirements

- This supersedes `20260908T112516Z`: exact-head hosted review found two
  necessary correctness gaps after 1963 authored additions. Preserve all prior
  storage, outcome, typed store, strict provider, re-export, and effect-boundary work.
- Start from current `origin/main`, never the preserved draft. Consume
  `NookPreparedCompanionPairingActivation` once; do not repeat event admission.
- Retain manager binding through async admission. Immediately before the first
  payload write, revalidate manager, approval, provider recipient, and DEKs so
  mutation after candidate construction cannot cross the effect boundary.
- Open both prepared DEK envelopes for the exact manager in scoped `Zeroizing`
  owners. Retain both parsed plaintext keys only long enough to reject equality,
  then drop them. Never persist, return, clone, serialize, or log plaintext.
- Use a Rust production clock after pure preparation, before the first payload
  effect, before gate publication, and again after the awaited gate write.
  Abort on post-gate expiry before `transaction.done()`.
- Store rows, heads, sealed providers, approval, and correlation under an
  activation prefix in existing `nook_db.vault`. Use one Rexie transaction,
  payloads first and gate last; explicitly abort every post-write failure.
- Reject an existing gate so replay/concurrent commits have one winner. The
  gate is an integrity/publication marker, not authenticated authority.
- Strict V1 rejects missing, malformed, unsupported, unknown, torn, mismatched,
  or digest-corrupt content without fallback. Before readback, validate IDs,
  signatures, membership, heads/counts, correlation, and sealed providers.
- Keep raw candidate, row, gate, codec, commit, and load private. Import
  `PairingActivationStore` into its caller and use owner calls within the
  repository two-segment path rule.
- The outcome has one exhaustive state and concrete consuming branch accessors,
  never `Option` ABI channels or authored `undefined`. Box the large `Stored`
  enum payload without changing opaque, getter-free, one-shot semantics.
- Move the expanded generated TypeScript scenario onto a meaningful test
  fixture/owner; the test callback only delegates. TypeScript switches the
  generated state exhaustively and contains no domain logic or English match.
- Preserve 22 focused Rust tests and the generated scenario. Add real regression
  evidence for equal valid DEKs before writes and expiry after awaited gate
  write with transaction abort and no residue.
- Treat accepted hexadecimal encodings of the same decoded DEK as equal across
  vault roles, including mixed letter case, and reject them before writes.
- Make the faithful memory store expose the same clean missing-gate absence as
  the production store while retaining integrity failures for torn gated data.
- Browser success/replay/load uses a live non-expiring candidate or deterministic
  clock, never the expired `200` fixture with `Date::now()`.
- Resolve compiler, lint, Tsify, TypeScript, path, and size findings without
  suppression or weaker evidence.
- After the replacement head, Gizmo Prime must run acknowledged circuit-breaker
  validation before review/readiness. Then complete Security review, hosted
  validation, merge verification, and Workbench closeout.
- Estimated authored additions: 1985. Hard planned ceiling: 1999. Never exceed
  the repository 2000-line maximum.

## Constraints and exclusions

- No authoritative-reader adoption, final pairing state, `access_granted`,
  acknowledgement, pairing mutation, reset, migration, or cleanup.
- No TypeScript domain logic, browser transport/adapter, Svelte, or production
  web change. Generated tests may invoke WASM and verify opaque ownership.
- No mocks, stubs, fake records, test-only production API, fallback,
  compatibility shim, lint suppression, floor change, or new DB. Memory storage
  faithfully simulates the transaction.
- Loaded data stays inert; later adoption revalidates against an external root.
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
- Estimated authored changed lines: 1985
- Owning modules, packages, or layers: nook-companion-core approval; nook-wasm activation, private schema/storage and inline tests; generated WASM evidence; Development Core design documentation.
- Ownership units:
1. Capability: Revalidate approval, manager, provider, typed store, and distinct DEKs without plaintext/authority exposure; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Real-manager tests prove valid candidates and reject expiry, pre-effect mutation, invalid store/provider, malformed DEKs, and equal valid DEKs.
2. Capability: Atomically commit and gate-aware load an inert strict V1 candidate; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Schema, memory, and IndexedDB prove gate-last abort, post-gate expiry rollback, replay/concurrency, reload, and corrupt/unknown/unsupported rejection.
3. Capability: Expose commit/load through one generated state with boxed opaque success and concrete accessors; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Fixture-owned generated composition covers admission through replay; its thin callback switches exhaustively without optional/undefined channels.
4. Capability: Review atomicity, expiry, one-shot authority, distinct DEKs, sealed providers, outcome validity, mutable-gate limits, and non-adoption; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head review confirms no authority, plaintext escape, invalid outcome, or late-expiry residue.
5. Capability: Sequence, circuit-break, validate, land, verify, and close this slice; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Acknowledged circuit-breaker and readiness pass on the Security-approved head; merge, Main validation, and immutable Workbench records are verified.
- Public or cross-module interfaces: approval/epoch revalidation; consuming prepared commit; manager-owned load; exhaustive outcome state with state-valid accessors; opaque nonserializable stored candidate.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1985
- Current PR slice and acceptance evidence: Bounded outcome: Store/load one inert prepared candidate without adoption through one exhaustive Rust-owned generated outcome state; Acceptance evidence: Approximately 28 checks prove decoded distinct-DEK and manager/provider revalidation, strict V1, memory/IndexedDB missing-gate absence, atomic post-gate expiry abort, replay/concurrency, boxed outcome, and no authority; fixture-owned TypeScript switches state exhaustively through a thin callback.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-pairing-activation-candidate-storage; Gizmo name: Inert pairing activation candidate storage; Predecessor Gizmo ID: None; Bounded outcome: Store/load one inert prepared candidate without adoption through one exhaustive Rust-owned generated outcome state; Estimated authored changed lines: 1985; Acceptance evidence: Approximately 28 checks prove decoded distinct-DEK and manager/provider revalidation, strict V1, memory/IndexedDB missing-gate absence, atomic post-gate expiry abort, replay/concurrency, boxed outcome, and no authority; fixture-owned TypeScript switches state exhaustively through a thin callback.

## Initial plan

1. Preserve storage, strict schema, and effect-time validation.
2. Box success; retain one exhaustive generated state.
3. Retain distinct zeroized DEKs; revalidate before writes.
4. Recheck expiry after gate write and abort before completion.
5. Fixture-own generated scenarios; pass all validation and closeout.

## Completion evidence

- At most 1999 authored additions; every source remains below 1,000 lines.
- Static gates and hosted Rust, Clippy, Dylint, WASM, coverage, security, policy,
  and generated boundary jobs pass on one approved head.
- Existing 22 Rust tests plus focused distinct-DEK and post-gate-expiry evidence
  cover real manager/store/provider binding, strict schema/coherence, interrupted
  writes, replay/concurrency, live browser storage, no residue, and opaque load.
- Generated TypeScript is fixture-owned with a thin callback and exhaustive
  state switch. Stored/failure accessors are concrete only in their valid state.
- Browser evidence confines candidate keys to activation-prefixed `vault`;
  authoritative readers cannot observe them.
- Acknowledged circuit-breaker, Security approval, readiness, merge, Main
  validation, and Workbench issue/worklog/statistics are verified.

## Safety review

This repository-relative plan contains no secrets, private data, raw logs,
local paths, environment values, or infrastructure details.
