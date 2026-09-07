---
title: Own device access profile and grant actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/device-access-actions.md
started_at: 2026-09-07T18:20:00Z
agent: codex
gizmo_id: rust-action-ownership-device-access-actions
---

# Task plan

## Interpreted request

Continue the Rust action-ownership migration with one cohesive portable device-access slice that replaces detached grant, profile, classification, identifier, and normalization operations with small data-carrying owners.

## Requirements

- Introduce owners for vault-linked identity selection, app-grant evidence, profile decoding, protection and identity-state classification, safe browser identifiers, and normalized labels.
- Preserve grant semantics, profile wire shape, version handling, hash prefixes, normalization rules, errors, and public WASM behavior exactly.
- Migrate all direct core, WASM, storage, manager, and migration callers in the bounded closure.
- Keep ownership enforcement focused on the migrated device-access child and below 1,500 authored additions.
- Complete scoped checks, hosted validation, remote Loom, readiness, merge, and Workbench records.

## Constraints and exclusions

- Do not change device-access schemas, persistence, cryptography, authorization policy, public WASM ABI, or error contracts.
- Do not retain compatibility free functions for the migrated operations.
- Keep browser ceremony observations and persistence orchestration outside this portable core slice.
- Do not run local product builds or tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-device-access-actions
- Estimated authored changed lines: 850–1,250
- Hard ceiling: 1,500 authored additions
- Owning modules: core device-access domain plus direct adapters.
- Delivery shape: One cohesive PR.

## Initial plan

1. Refresh main and inventory the nine operations, exports, tests, and callers.
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

Completed: PR #1538 squash-merged at `3348c3746f8b3799a72ec5c0f47fcdb4dd3e59cf` from exact head `007c9f14c6e7b67313a0aecb1a649f4ec9e79650` onto base `971e77651009618b4f295ff596b80eb1f839025a`. Hosted repository policy `34157817329`, hosted PR `34157831697`, remote Loom `34157843785`, exact-head Pages deployment, and `task pr:ready PR=1538` all passed.

## Safety review

The slice preserves vault grant evidence, profile decoding behavior, stable safe identifiers, and input normalization; no new trust claim or fallback is introduced.
