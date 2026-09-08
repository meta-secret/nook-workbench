---
title: Persist an inert companion pairing activation candidate atomically
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/companion-pairing-activation-candidate-storage.md
started_at: 2026-09-08T09:07:52Z
agent: codex
gizmo_id: companion-pairing-activation-candidate-storage
---

# Task plan

## Interpreted request

Consume the merged preparation, revalidate effect-time facts, and atomically
store an inert candidate. Opaque readback grants no live authority; a later
sequential slice owns adoption.

## Requirements

- Start cleanly from current `origin/main`; do not use the preserved draft as a
  base. Consume `NookPreparedCompanionPairingActivation` once without repeating
  event admission or accepting the original event DTO.
- Immediately before storage, revalidate the real manager's application,
  Simple-vault architecture, store identity/name, app/encryption/signing keys,
  approval correlation/expiry, provider manifest/scope, and sealed-recipient
  authentication.
- Open both prepared DEK envelopes for the exact manager only in scoped,
  zeroizing owners; parse then discard plaintext. Never persist, return, clone,
  serialize, or log plaintext keys.
- Use a Rust production clock after pure preparation and again after payload
  writes, immediately before publishing the gate.
- Store rows, typed heads, sealed providers, approval binding, and correlation
  under an activation prefix in the existing `nook_db` `vault` store. Use one
  Rexie transaction, payloads first and gate last; abort post-write failures.
- Reject an existing vault gate so replay and concurrent commits have one
  winner. The gate is an integrity/publication marker, not authenticated
  authority.
- Strictly encode/decode documented V1 data. Reject missing, malformed,
  unsupported, unknown-field, torn, mismatched, or digest-corrupt content with
  no compatibility fallback.
- Before opaque readback, validate typed identifiers, signatures, membership,
  heads/counts, correlations, and digests. Providers remain sealed.
- Keep raw candidate, row, gate, codec, commit, and load primitives private
  beneath activation. Export only the opaque stored-candidate boundary.
- Add approximately 24 focused tests with real managers/events/providers,
  faithful memory transactions, real IndexedDB, and generated WASM.
- Complete Security review, hosted validation, verified merge, and Workbench
  closeout before the next slice.
- Estimated authored additions: 1450. Hard planned ceiling: 1650. Crossing the
  ceiling requires a superseding plan, not compressed code or weaker evidence.

## Constraints and exclusions

- No authoritative-reader adoption, final pairing state, `access_granted`,
  acknowledgement, pairing-state mutation, reset, migration, or cleanup.
- No TypeScript orchestration or domain logic, browser transport/adapter,
  window/channel, Svelte, or production web change. The existing generated
  composition test may invoke generated WASM and check opaque ownership only.
- No mocks, stubs, fake records, test-only production API, fallback, rollback
  emulation, compatibility shim, lint suppression, floor change, or new DB.
  In-memory storage faithfully simulates the transaction.
- Loaded data remains inert because the same-origin database and co-located gate
  are mutable. Later adoption must revalidate against an external trust root.
- Do not check out, cherry-pick, rebase, or implement from the preserved draft;
  do not stack on an unmerged predecessor.
- No local product tests/builds, default task, Docker, or Rust/WASM/Node
  execution. Only formatting and static repository gates run locally.
- Exact allowed implementation paths:
  - `nook-app/nook-platform/nook-companion-core/src/companion_pairing.rs`
  - `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing/activation.rs`
  - `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing/activation/candidate.rs`
  - `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing/activation/candidate/storage.rs`
  - `nook-app/nook-platform/nook-wasm/src/manager/companion_pairing/activation/candidate/storage/schema.rs`
  - `nook-app/nook-platform/nook-wasm/src/manager/mod.rs`
  - `nook-app/nook-platform/nook-wasm/src/lib.rs`
  - `nook-app/nook-web/nook-web-extension/scripts/companion-protocol-composition.test.ts`
  - `.cortex/teams/dev-core/design-docs/companion-protocol-simulation.md`
- Tests stay inline. No external test module under `src`, arbitrary split,
  Cargo/lock/CI change, or unrelated product/Cortex edit.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-pairing-activation-candidate-storage
- Estimated authored changed lines: 1450
- Owning modules, packages, or layers: nook-companion-core approval; nook-wasm activation, private schema/storage and inline tests; generated WASM evidence; Development Core design documentation.
- Ownership units:
1. Capability: Consume preparation and revalidate effect-time approval, manager, provider, and DEK bindings without exposing plaintext or authority; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Real-manager tests prove valid empty/sealed-provider candidates and exact pre-effect rejection of expiry, manager/provider substitution, and malformed DEK envelopes.
2. Capability: Encode, atomically commit, and gate-aware load an inert V1 candidate; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Strict-schema, faithful in-memory, and real IndexedDB tests prove gate-last visibility, abort, replay/concurrency exclusion, ciphertext preservation, reload, and torn/mismatched/corrupt/unknown/unsupported rejection.
3. Capability: Expose only consuming commit, manager-owned opaque load, and the opaque stored-candidate WASM wrapper; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Generated composition executes admission, preparation, commit, opaque load, and replay rejection using only generated structural DTOs and wrappers.
4. Capability: Review atomicity, expiry placement, one-shot authority, plaintext lifetime, sealed-provider persistence, mutable-gate limits, and non-adoption; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head Security review passes without unresolved findings and confirms the stored handle exposes no live authority.
5. Capability: Sequence, validate, land, remotely verify, and close this slice before another branch; Gizmo ID: companion-pairing-activation-candidate-storage; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Repository readiness passes on the Security-approved head, squash merge and Main validation are verified, and immutable Workbench records are complete.
- Public or cross-module interfaces: `CompanionPairingApproval::revalidate_at`; validating `CompanionPairingEpochMilliseconds` deserialization; consuming `NookPreparedCompanionPairingActivation::commit(self, &NookVaultManager)`; manager-owned `NookVaultManager::load_companion_pairing_activation_candidate(&self)`; opaque getter-free, nonserializable `NookStoredCompanionPairingActivationCandidate`.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1450
- Current PR slice and acceptance evidence: Bounded outcome: Consume merged preparation and atomically store/load one inert candidate without adoption; Acceptance evidence: Approximately 24 focused tests prove real-manager revalidation, scoped DEK access, strict V1, abort/gate publication, replay/concurrency, real IndexedDB, generated wrappers, and no authoritative visibility.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-pairing-activation-candidate-storage; Gizmo name: Inert pairing activation candidate storage; Predecessor Gizmo ID: None; Bounded outcome: Consume merged preparation and atomically store/load one inert candidate without adoption; Estimated authored changed lines: 1450; Acceptance evidence: Approximately 24 focused tests prove real-manager revalidation, scoped DEK access, strict V1, abort/gate publication, replay/concurrency, real IndexedDB, generated wrappers, and no authoritative visibility.

## Initial plan

1. Branch from current `origin/main`; add private candidate ownership and the
   effect-time approval primitive.
2. Consume preparation; validate manager, sealed providers, and scoped DEKs.
3. Implement strict V1 and one payload-first, gate-last `vault` transaction,
   including abort, replay exclusion, and opaque load.
4. Add approximately 24 focused real-instance and boundary tests.
5. Document schema, rollback truth, inert gate, and later revalidation.
6. Pass static gates, Security review, hosted validation, and readiness.
7. Gizmo Prime merges, verifies, and closes this slice before the next branch.

## Completion evidence

- At most 1650 authored additions; every source file is below 1,000 lines.
- Formatting, diff, policy, size/budget, Cortex, and Loom gates pass locally.
  Hosted Rust, Clippy, Dylint, WASM, coverage, security, policy, and generated
  boundary jobs pass on the same Security-approved head.
- Approximately 24 focused tests cover empty/sealed commits; manager app, vault,
  name, identity, and signing substitution; provider manifest/scope/recipient;
  malformed DEKs; expiry before effects and before gate; strict version/unknown
  fields; event/head/count/correlation/namespace/digest coherence; torn/corrupt
  rows; every interrupted write; replay; one concurrent IndexedDB winner; no
  residue after late expiry; opaque reload; and generated commit/load.
- Browser evidence confines candidate keys to activation-prefixed `vault`;
  authoritative readers cannot observe them.
- Security accepts the gate as integrity/publication only and records external-
  root revalidation as mandatory for adoption. Readiness, squash merge, Main
  validation, and Workbench issue/worklog/statistics are verified.

## Safety review

This repository-relative plan contains no prompt/chat, secrets, credentials,
vault contents, private data, raw logs, local paths, environment values,
internal hostnames, or unnecessary infrastructure details.
