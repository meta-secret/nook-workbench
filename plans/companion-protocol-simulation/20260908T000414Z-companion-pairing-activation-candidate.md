---
title: Commit companion pairing activation candidate atomically
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/companion-pairing-activation-transaction.md
started_at: 2026-09-08T00:04:14Z
agent: codex
gizmo_id: companion-pairing-activation-transaction
---

# Task plan

## Interpreted request

Continue the sequential companion-protocol mission with the next coherent Rust
capability. Build on merged one-shot admission so a complete pairing activation
candidate can be validated and committed durably without browser channels,
partial cross-database authority, application mocks, or TypeScript policy.

## Requirements

- Consume the merged opaque prevalidated approval exactly once in Rust.
- Revalidate the current real manager and canonicalize the supplied event graph
  before any storage operation.
- Move only already-sealed provider values and prove no plaintext credential is
  persisted or exposed through debug or serialization.
- Commit event rows, provider payload, pairing state, and one immutable gate in
  a single physical IndexedDB transaction.
- Provide a gate-aware read API that fails closed for missing, torn, corrupt,
  replayed, or mismatched state.
- Cover every validation and persistence boundary with real objects, a faithful
  in-memory store implementation, and browser IndexedDB tests.
- Complete Security review, hosted validation, readiness, squash merge, remote
  verification, and Workbench closeout before the next slice begins.

## Constraints and exclusions

- No application mocks; the in-memory store implements the same simple storage
  contract and failure points as the real IndexedDB implementation.
- No coverage-floor changes, lint suppressions, best-effort rollback, recovery
  fallback, compatibility layer, or plaintext provider cloning.
- No accepted acknowledgement, live manager mutation, or visibility through
  normal event, provider, or pairing readers in this slice.
- No TypeScript orchestration or production browser adapter changes.
- Do not run local product Rust or WASM builds or tests; use formatting and
  static gates locally and hosted product validation.
- Gizmo Prime must fully implement, validate, squash-merge, remotely verify,
  and close out the current slice before creating the next branch. The next
  branch starts from current `origin/main`; implementation against an unmerged
  predecessor and stacked branches or pull requests are prohibited.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: companion-pairing-activation-transaction
- Estimated authored changed lines: 3300
- Owning modules, packages, or layers: nook-wasm pairing manager, nook-wasm activation storage, nook-wasm composition tests, and later nook-wasm event, provider, pairing, mutation, and reset readers.
- Ownership units:
1. Capability: Validate and atomically commit one inert pairing activation candidate; Gizmo ID: companion-pairing-activation-transaction; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Real-manager, in-memory, and IndexedDB tests prove validation, atomic failure, replay, concurrency, reload, integrity, and ciphertext-only persistence.
2. Capability: Review the candidate transaction and secret, identity, authority, and consumption boundaries; Gizmo ID: companion-pairing-activation-transaction; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head Security review passes with no unresolved findings.
3. Capability: Validate, land, remotely verify, and close out the current PR; Gizmo ID: companion-pairing-activation-transaction; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted validation and repository readiness pass on the Security-approved head, the squash merge is remotely verified, and Workbench records are complete.
4. Capability: Adopt the committed candidate in every authoritative reader, mutation, and reset path and emit acceptance only after adoption; Gizmo ID: companion-pairing-activation-adoption; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: A later independently merged PR proves old-or-complete visibility, deterministic existing-state handling, no resurrection, and accepted acknowledgement only after adoption.
- Public or cross-module interfaces: Consuming nook-WASM activation-candidate commit operation, opaque committed-candidate receipt, and internal gate-aware activation store read contract.
- Delivery shape: Multiple PRs
- PR sequence mode: Sequential PRs
- Current PR estimated authored changed lines: 1800
- Current PR slice and acceptance evidence: Consume admission and durably commit one complete but inert candidate in a single database transaction; Acceptance evidence: Real-manager, faithful in-memory, and browser IndexedDB tests prove strict validation, atomic failure, one concurrency winner, gate integrity, reload, and ciphertext-only persistence.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: companion-pairing-activation-transaction; Gizmo name: Atomic pairing activation candidate; Predecessor Gizmo ID: None; Consume admission and durably commit one complete but inert candidate in a single database transaction; Estimated authored changed lines: 1800; Acceptance evidence: Real-manager, faithful in-memory, and browser IndexedDB tests prove strict validation, atomic failure, one concurrency winner, gate integrity, reload, and ciphertext-only persistence.
2. Gizmo ID: companion-pairing-activation-adoption; Gizmo name: Authoritative pairing activation adoption; Predecessor Gizmo ID: companion-pairing-activation-transaction; Make every authoritative event, provider, pairing, mutation, and reset path adopt or supersede the candidate and emit acceptance only after complete adoption; Estimated authored changed lines: 1500; Acceptance evidence: Real-manager and IndexedDB tests prove old-or-complete visibility, deterministic existing-state handling, no resurrection across failure or reload, and stable accepted acknowledgement after adoption.

## Initial plan

1. Start a fresh branch from current `origin/main` after this plan and the
   refined focused issues are visible on Workbench `main`.
2. Add the pure activation candidate, event-graph, provider, and pairing
   admission and the consuming manager operation without effects before
   validation completes.
3. Add one activation-namespaced `nook_db` transaction and a gate-validating
   read API, plus the faithful in-memory implementation.
4. Add broad real-instance unit, concurrency, failure-injection, reload,
   corruption, and browser IndexedDB coverage; keep each source under 1,000
   lines and the PR below 2,000 authored additions.
5. Run local formatting and static policy only, then Security and complete
   hosted validation on the same exact head.
6. Land only after repository readiness passes, remotely verify the merge, and
   publish Workbench issue, worklog, and statistics before starting adoption.

## Completion evidence

- The focused issue links a merged PR and records the exact security-approved
  head and merge commit.
- Hosted Rust/WASM, coverage, Dylint, RustSec, deterministic and proof,
  repository policy, and applicable web composition gates pass on one head.
- Tests demonstrate atomic absence after every simulated write or commit
  failure, one winner under replay and concurrency, strict gate readback,
  corrupt or torn state rejection, and ciphertext-only provider persistence.
- Workbench worklog and agent statistics are visible on `main`.

## Safety review

This plan contains architecture and delivery metadata only. It contains no raw
prompt or chat transcript, secrets, private data, raw logs, local paths,
environment values, or unnecessary infrastructure details.
