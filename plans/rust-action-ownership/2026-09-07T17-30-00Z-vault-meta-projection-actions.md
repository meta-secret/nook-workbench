---
title: Own vault metadata projection and event-graph access actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/vault-meta-projection-actions.md
started_at: 2026-09-07T17:30:00Z
agent: codex
gizmo_id: rust-action-ownership-vault-meta-projection-actions
---

# Task plan

## Interpreted request

Continue the Rust action-ownership migration with one cohesive core slice that replaces detached event-graph metadata replay and device-access projection operations with small data-carrying owners and consuming transitions.

## Requirements

- Introduce owners for metadata replay, graph-backed access evidence, active authorization recipients, and Sentinel member-row reconstruction.
- Preserve event ordering, checkpoint replacement, revocation, identity binding, sorting, normalization, and error behavior exactly.
- Migrate all direct core, WASM, storage, and workflow callers in the bounded closure.
- Keep ownership enforcement focused on the migrated projection child and below 1,500 authored additions.
- Complete scoped checks, hosted validation, remote Loom, readiness, merge, and Workbench records.

## Constraints and exclusions

- Do not change event schemas, persistence, cryptography, authorization policy, public WASM ABI, or error contracts.
- Do not retain compatibility free functions for the migrated operations.
- Defer recipient encryption, identity-genesis construction, and auth2 primitive ownership.
- Do not run local product builds or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-vault-meta-projection-actions
- Estimated authored changed lines: 850–1,250
- Hard ceiling: 1,500 authored additions
- Owning modules: core auth multi-device projection plus direct adapters.
- Delivery shape: One cohesive PR.

## Initial plan

1. Refresh main and inspect the six operations, exports, tests, and callers.
2. Add the smallest local owners and move implementation without changing behavior.
3. Migrate direct callers and colocate focused ownership tests.
4. Enable ownership denial and invalid-suppression prohibition only for the migrated child.
5. Run formatting, diff, size, and Loom hygiene gates; push one PR.
6. Complete exact-head hosted validation, remote Loom, readiness, squash merge, and Workbench closeout.

## Completion evidence

- Old free exports are absent from the migrated scope and callers use typed owners.
- Hosted policy/product checks and deployment pass at the exact head.
- Remote Loom, readiness, merge, and `origin/main` verification pass.
- Issue, worklog, and agent statistics identify the final head and merge commit.
- Final exact head: `5181266c84db7186aeb054d9144a6d321531ac79`.
- Final base: `735b5e5fba425576035543c858df06c7b0eab518`.
- Squash merge: `456f149837aa32854835eaa68a3010020be65ddc`.
- Hosted policy/product runs: `34150262155` / `34150277057`; remote Loom: `34150999225`.

## Safety review

The slice preserves authorization evidence and event replay semantics; no new trust claim or fallback is introduced.
