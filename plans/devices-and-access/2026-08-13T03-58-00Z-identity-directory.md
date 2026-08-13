---
title: Add the portable identity directory
feature: devices-and-access
issue: issues/devices-and-access/identity-directory.md
started_at: 2026-08-13T03:58:00Z
agent: codex
supersedes: null
---

# Task plan

## Interpreted request

Begin independent identity management by replacing the browser's singleton
identity persistence with a portable Rust directory. Preserve current vault and
unlock behavior. Do not add mobile code or the final management UI in this PR.

## Requirements

- Model zero or more identities and explicit local selection in Rust.
- Create identities with the current protected app key.
- Preserve identity ids, membership, and DEK envelopes during migration.
- Expose typed list, creation, and selection values through WASM.
- Keep vault creation bound to the selected identity.
- Add Rust and actual-WASM behavior coverage.

## Constraints and exclusions

- No mobile application, binding, scaffold, or UI is included.
- No TypeScript identity policy or mirrored Rust enum is allowed.
- No cross-installation enrollment protocol is included in this first slice.
- No production identity-list or access-method UI is included in this slice.
- Heavy validation runs on GitHub-hosted workers.

**Change budget and PR sequence**

- Estimated authored changed lines: 2,400
- Owning modules, packages, or layers: `nook-auth2` identity domain,
  `nook-wasm` identity persistence and public snapshot bridge
- Public or cross-module interfaces: Portable `IdentityDirectory` plus typed
  WASM list, create, and select operations
- Delivery shape: First PR in a three-PR ordered feature
- Current PR estimated authored changed lines: 2,400
- Current PR slice and acceptance evidence: Identity directory and singleton
  migration; Rust tests prove invariants and migration policy, actual-WASM tests
  prove persisted list/create/select behavior, and complete exact-head validation passes.
- PR slices and acceptance evidence:
  1. Identity directory and migration. Rust and actual-WASM persistence tests.
  2. Identity app-key enrollment. Authorization, replay, expiry, mismatch, and
     DEK-envelope behavior tests.
  3. Identity management UI. Focused Playwright flows and recorded UI demo for
     identity creation, selection, linking, graph, and access-method tabs.

## Initial plan

1. Inventory every singleton identity load, save, and vault-create caller.
2. Add the portable identity directory with explicit valid states.
3. Add migration-safe versioned persistence around the legacy singleton key.
4. Expose typed WASM list, create, and select operations.
5. Route vault creation through the selected identity without changing unlock.
6. Add Rust and actual-WASM behavior coverage.
7. Format, run pre-push hygiene, validate on hosted workers, resolve feedback,
   pass readiness, squash merge, and publish Workbench completion records.

## Completion evidence

- Multiple identities are real persisted Rust domain state.
- Existing singleton records migrate without loss.
- TypeScript remains a consumer of generated typed values.
- Focused and complete exact-head validation pass.

## Safety review

- This record contains no prompt transcript, secret, private data, local path,
  or unfiltered diagnostic output.
