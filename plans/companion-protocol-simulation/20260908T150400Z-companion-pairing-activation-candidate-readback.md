---
title: Strictly read inert companion pairing activation candidates
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/companion-pairing-activation-candidate-readback.md
started_at: 2026-09-08T15:04:00Z
agent: codex
gizmo_id: companion-pairing-activation-candidate-readback
---

# Task plan

## Interpreted request

Complete the next independently useful protocol-simulation boundary: let Rust
strictly reconstruct and validate the atomically published pairing candidate
without browser transport and without allowing any product reader to treat it
as authority.

## Requirements

- Start from current `origin/main` after PR #1563 is merged and Workbench-closed;
  never stack, cherry-pick, or restore the former oversized draft.
- Read the publication gate first and return a typed absence only when no gate
  exists. Once a gate exists, missing, malformed, unknown-version, mismatched,
  or unauthorized data is a typed integrity rejection.
- Strictly decode V1 candidate rows with unknown-field rejection and validate
  every gate digest, row correlation, graph head, provider manifest, approval,
  and event relationship.
- Share one Rust recipient-access validator between preparation and readback so
  both compile against the same exact installation/device, encryption-key,
  signing-key, membership, and active-envelope rules.
- Keep successful readback opaque, inert, nonserializable, and one-shot. It must
  not alter authoritative state or emit acceptance.
- Expose an exhaustive generated WASM outcome with non-trapping accessors for
  `Stored`, `Absent`, and `Rejected`; TypeScript performs no classification.
- Use only real managers, records, stores, WASM instances, and faithful memory
  or IndexedDB infrastructure implementations. Do not mock application behavior.
- Add broad behavior coverage for success, absence, every schema/digest/graph
  corruption class, recipient loss, valid-but-unauthorized graphs, reload, and
  direct generated dual-WASM composition.
- Complete whole-surface Development Core review before the first full hosted
  validation, then obtain exact-head Security/Web review, readiness, merge,
  remote verification, statistics, and Workbench closeout.

## Constraints and exclusions

- No authoritative adoption, final pairing state, `access_granted`, accepted
  acknowledgement, reset, cleanup, migration, TypeScript domain logic, Svelte,
  or browser transport change.
- No fallback, compatibility shim, new database, fake domain record, lint
  suppression, arbitrary source fragmentation, or test removal for line count.
- No local product compilation, tests, Docker, default task, or combined
  repository validation. Team Agents may run only permitted focused feedback;
  product evidence comes from hosted exact-head validation.
- Expected implementation paths:
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
- Inline unit tests and focused test fixtures may use only those owned paths;
  any additional path requires a superseding plan before modification.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-pairing-activation-candidate-readback
- Estimated authored changed lines: 1350
- Owning modules, packages, or layers: nook-companion-core recipient authority; nook-wasm candidate schema, strict reader, typed outcome, and inline tests; generated direct dual-WASM composition; Development Core design documentation.
- Ownership units:
1. Capability: Share exact recipient-access validation between preparation and readback; Gizmo ID: companion-pairing-activation-candidate-readback; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Real-manager tests prove exact device, encryption key, signing key, membership, and active-envelope rules reject unauthorized candidates in both call paths.
2. Capability: Strictly reconstruct and validate a published inert candidate; Gizmo ID: companion-pairing-activation-candidate-readback; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Real memory and IndexedDB scenarios distinguish gate absence from corruption and reject every schema, digest, graph, provider, approval, and recipient inconsistency.
3. Capability: Expose exhaustive typed WASM readback and direct composition; Gizmo ID: companion-pairing-activation-candidate-readback; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Generated bindings expose Stored, Absent, and Rejected without traps, and a direct dual-WASM scenario commits then loads without browser messaging or TypeScript policy.
4. Capability: Review integrity, recipient authority, secret lifecycle, inertness, and exhaustive outcomes; Gizmo ID: companion-pairing-activation-candidate-readback; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head Security review confirms corrupted or unauthorized bytes cannot become an opaque successful readback and no plaintext or authority escapes.
5. Capability: Sequence, validate, land, verify, and close the slice; Gizmo ID: companion-pairing-activation-candidate-readback; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Repository readiness passes on one Security-approved exact head; merge, remote state, statistics, issue, and worklog are verified before adoption starts.
- Public or cross-module interfaces: shared Rust recipient-access validator; consuming strict candidate load request; exhaustive typed WASM `Stored | Absent | Rejected` outcome with opaque success marker.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1350
- Current PR slice and acceptance evidence: Bounded outcome: Strictly load an opaque inert candidate without adoption; Acceptance evidence: Real memory, IndexedDB, Rust, recipient-authority, corruption, and generated dual-WASM scenarios prove exhaustive typed readback and preserve inertness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-pairing-activation-candidate-readback; Gizmo name: Strict inert candidate readback; Predecessor Gizmo ID: None; Bounded outcome: Strictly load an opaque inert candidate without adoption; Estimated authored changed lines: 1350; Acceptance evidence: Real memory, IndexedDB, Rust, recipient-authority, corruption, and generated dual-WASM scenarios prove exhaustive typed readback and preserve inertness.

## Initial plan

1. Reconstruct the reader and shared recipient validator from the merged schema
   and current authoritative domain types.
2. Add exhaustive real-instance memory and IndexedDB behavior scenarios before
   exposing the final typed WASM projection.
3. Add generated direct dual-WASM commit/read composition and update the design
   document without moving policy into TypeScript.
4. Complete whole-surface Development Core review, then exact-head Security,
   Web, hosted validation, readiness, squash merge, and remote verification.
5. Publish immutable statistics and Workbench closeout before starting adoption.

## Completion evidence

- At most 1,500 authored additions with every source file below 1,000 lines.
- The shared validator compiles both preparation and readback against one
  recipient-authority contract.
- Real-instance tests cover success, absence, reload, all corruption classes,
  exact recipient loss, and faithful memory/IndexedDB behavior without mocks.
- Generated TypeScript directly composes real WASM instances while owning no
  domain decision and using no browser channel.
- Hosted Rust, Clippy, Dylint, WASM, web, policy, Security, and repository
  readiness evidence passes on one exact head, followed by verified merge and
  complete Workbench records.

## Safety review

This repository-relative plan contains no raw prompt, chat transcript, secrets,
private data, raw logs, local paths, environment values, or unnecessary
infrastructure details.
