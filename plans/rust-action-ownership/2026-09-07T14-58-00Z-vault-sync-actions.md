---
title: Own vault synchronization actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/vault-sync-actions.md
started_at: 2026-09-07T14:58:00Z
agent: codex
gizmo_id: rust-action-ownership-vault-sync-actions
---

# Task plan

## Interpreted request

Continue the Rust action-ownership migration with one synchronization slice that moves vault revision comparison and legacy YAML reconciliation behind typed owners, then deliver it through exact-head review, hosted validation, readiness, merge, and Workbench closeout.

## Requirements

- Introduce an owned comparison action for local/remote vault revisions and causal hashes.
- Introduce an owned legacy YAML session action for identity, metadata, mutable state, and event-log mode.
- Migrate `VaultSyncPair` and direct callers while removing the old free comparison/reconciliation exports.
- Preserve store-id mismatch checks, common-hash divergence handling, version precedence, empty-content outcomes, rehydration order, and error behavior.
- Enforce ownership lint on the new sync owners without blanket suppression.
- Keep the complete PR below 2,000 authored additions and avoid local product builds or tests.
- Complete scoped checks, exact-head SECURITY, hosted validation, remote Loom, readiness, squash merge, and Workbench records.

## Constraints and exclusions

- Rust core remains authoritative for synchronization decisions; WASM remains an adapter.
- Do not alter vault serialization, cryptography, provider protocols, conflict semantics, or browser ABI.
- Do not mutate session metadata before the typed reload succeeds.
- Use repository-hosted Rust/WASM and browser validation; local execution is limited to formatting, diff, and Loom hygiene gates.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-vault-sync-actions
- Estimated authored changed lines: 400
- Owning modules, packages, or layers: `nook-core` sync comparison/session/store modules and direct public re-exports.
- Ownership units:
1. Capability: Vault revision comparison; Gizmo ID: rust-action-ownership-vault-sync-actions; Functional owner: Development core; Expertise provider: None; Acceptance evidence: `VaultSyncComparison` owns revision parsing and decision actions.
2. Capability: Legacy YAML session reconciliation; Gizmo ID: rust-action-ownership-vault-sync-actions; Functional owner: Development core; Expertise provider: None; Acceptance evidence: `YamlSyncSession` owns inputs and preserves all outcomes and mutation ordering.
3. Capability: Trust-boundary review; Gizmo ID: rust-action-ownership-vault-sync-actions; Functional owner: Security; Expertise provider: None; Acceptance evidence: exact-head SECURITY reports no actionable P1/P2/P3 findings.
- Public or cross-module interfaces: Replaced free core comparison/reconciliation exports with `VaultSyncComparison` and `YamlSyncSession`; browser ABI remains unchanged.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 400
- Current PR slice and acceptance evidence: Migrate revision comparison and YAML reconciliation actions; acceptance evidence is focused static checks, hosted Rust/WASM validation, security review, remote Loom, and readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-vault-sync-actions; Gizmo name: Vault synchronization action ownership; Predecessor Gizmo ID: rust-action-ownership-secret-session-actions; bounded outcome: sync comparisons and legacy reloads use owned actions; authored-line estimate: 400; proof: exact-head hosted validation, security review, remote Loom, and merged readiness.

## Initial plan

1. Refresh `origin/main` and inspect the existing sync comparison/reconciliation exports and callers.
2. Implement the owned comparison and YAML session action objects with behavior-focused tests.
3. Migrate `VaultSyncPair`, public exports, and direct callers while preserving sync semantics.
4. Run formatting, diff, authored-size, and Loom hygiene checks without local product builds/tests.
5. Push one cohesive PR, collect exact-head SECURITY and hosted validation, run remote Loom and readiness, squash-merge, and publish Workbench closeout.

## Completion evidence

- Old free comparison/reconciliation exports are absent and direct callers use typed owners.
- Hosted Rust, WASM, Dylint, policy, deployment, and Node checks pass at the exact head.
- Exact-head SECURITY, remote Loom, readiness, squash merge, and `origin/main` verification pass.
- Issue, worklog, and agent statistics identify the PR and merge commit.

## Safety review

This plan contains no raw prompt, transcript, credentials, private data, raw logs, local paths, or unnecessary infrastructure details.
