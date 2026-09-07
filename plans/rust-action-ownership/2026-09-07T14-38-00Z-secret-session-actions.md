---
title: Own ciphertext-backed secret session actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/secret-session-actions.md
started_at: 2026-09-07T14:38:00Z
agent: codex
gizmo_id: rust-action-ownership-secret-session-actions
---

# Task plan

## Interpreted request

Continue the Rust action-ownership migration with one cohesive slice that moves ciphertext-backed secret reads and projected user-record hydration behind typed owners, then deliver the slice through exact-head review, hosted validation, readiness, merge, and Workbench closeout.

## Requirements

- Introduce a borrowed owner for encrypted secret decryption and paged fallback search.
- Introduce a consuming owner for projected user-record replacement and armored hydration.
- Migrate all direct core and WASM callers and remove the old free exports.
- Preserve lookup errors, type filtering, sorting, pagination limits, plaintext zeroization, metadata preservation, and decrypt-before-replace ordering.
- Enforce the ownership lint on the new session owner without blanket suppression.
- Keep the complete PR below 2,000 authored additions and avoid local product builds or tests.
- Complete scoped checks, exact-head SECURITY, hosted validation, remote Loom, readiness, squash merge, and Workbench records.

## Constraints and exclusions

- Rust core remains authoritative for secret/session behavior; WASM remains an adapter.
- Do not alter vault serialization, cryptography, browser ABI, or user-visible behavior.
- Do not weaken plaintext zeroization or mutate encrypted state before hydration succeeds.
- Use repository-hosted Rust/WASM and browser validation; local execution is limited to formatting, diff, and Loom hygiene gates.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-secret-session-actions
- Estimated authored changed lines: 300
- Owning modules, packages, or layers: `nook-core` vault/session modules and direct `nook-wasm` manager/event-log adapters.
- Ownership units:
1. Capability: Ciphertext-backed secret actions; Gizmo ID: rust-action-ownership-secret-session-actions; Functional owner: Development core; Expertise provider: None; Acceptance evidence: `VaultSecretSession` owns decrypt/query and all callers use it.
2. Capability: Projected record transitions; Gizmo ID: rust-action-ownership-secret-session-actions; Functional owner: Development core; Expertise provider: None; Acceptance evidence: `VaultUserRecordBatch` owns replace/hydrate while preserving decrypt-before-replace ordering.
3. Capability: Trust-boundary review; Gizmo ID: rust-action-ownership-secret-session-actions; Functional owner: Security; Expertise provider: None; Acceptance evidence: exact-head SECURITY reports no actionable P1/P2/P3 findings.
- Public or cross-module interfaces: Replaced free core exports with `VaultSecretSession` and `VaultUserRecordBatch`; browser ABI remains unchanged.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Migrate encrypted session reads and hydration actions; acceptance evidence is focused static checks, hosted Rust/WASM validation, security review, remote Loom, and readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-secret-session-actions; Gizmo name: Secret session action ownership; Predecessor Gizmo ID: rust-action-ownership-vault-connect-actions; bounded outcome: core and WASM secret/session callers use owned actions; authored-line estimate: 300; proof: exact-head hosted validation, security review, remote Loom, and merged readiness.

## Initial plan

1. Refresh `origin/main` and inspect the existing free secret-session exports and callers.
2. Implement the owned session and record-batch action objects with behavior-focused tests.
3. Migrate core and WASM callers, keeping crypto and zeroization behavior unchanged.
4. Run formatting, diff, authored-size, and Loom hygiene checks without local product builds/tests.
5. Push one cohesive PR, collect exact-head SECURITY and hosted validation, run remote Loom and readiness, squash-merge, and publish Workbench closeout.

## Completion evidence

- Old free secret/session exports are absent and all direct callers use typed owners.
- Hosted Rust, WASM, Dylint, policy, deployment, and Node checks pass at the exact head.
- Exact-head SECURITY, remote Loom, readiness, squash merge, and `origin/main` verification pass.
- Issue, worklog, and agent statistics identify PR #1526 and its merge commit.

## Safety review

This plan contains no raw prompt, transcript, credentials, private data, raw logs, local paths, or unnecessary infrastructure details.
