---
title: Own provider architecture and shared grant actions
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-provider-architecture
created_at: 2026-09-08T00:50:00Z
updated_at: 2026-09-08T01:18:00Z
source_issues: []
related_prs:
  - 1553
depends_on:
  - issues/rust-action-ownership/sync-projection-decisions.md
---

# Own provider architecture and shared grant actions

## Context

Provider replication capability, architecture/provider compatibility, and shared-storage grant preparation are still exposed as detached functions. Callers can apply provider and ceremony policy without invoking the state that carries the provider, architecture, request, or outcome invariants.

## Outcome

Existing provider capability, vault architecture, shared-grant request, and grant outcome types own these actions. Core and WASM callers use the owning methods while preserving provider matrices, validation order, public adapter names, and serialized outcomes.

## Scope

One cohesive provider-architecture boundary:

- `nook-app/nook-platform/nook-core/src/vault/vault_architecture.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_architecture/provider_replication.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_architecture/shared_storage_grant.rs`
- direct core sync-provider-store and WASM provider/shared-grant adapters and focused tests

Move provider capability lookup, provider replication validation, architecture/provider validation, shared-grant preparation, and flush eligibility onto domain owners. Activate ownership denial and invalid-suppression prohibition in the completed modules. Keep WASM exports as thin boundary adapters.

## Acceptance criteria

- [ ] Provider capability matrix, OAuth preset handling, and replication errors remain unchanged.
- [ ] Architecture validation remains the first gate and provider-specific validation preserves all error ordering and shared-target checks.
- [ ] Shared-grant request validation, unsupported outcome, target projection, and credential-based flush policy remain unchanged.
- [ ] Core, sync-store, WASM, and focused tests use owning methods; detached core policy exports disappear while public adapter names remain explicit.
- [ ] Completed architecture modules deny homeless functions and forbid invalid ownership-lint suppressions without blanket exceptions.
- [ ] Remote Loom, hosted checks, exact-head deployment/security, readiness, squash merge, and Workbench completion pass.

## Constraints

No provider I/O, authentication or authorization change, persistence or schema migration, cryptographic change, WASM/TypeScript signature change, fallback/recovery/retry behavior, or generic phase framework. Preserve serialized provider rows, aliases, public adapter names, errors, and security outcomes. No local Rust/WASM/product builds or tests.

## Progress

Selected from `origin/main` after PR #1550 as the next cohesive provider-architecture ownership boundary. Delivered in PR #1553, squash-merged at `f3076683e83daff5843589e3a23932d462d2b6d7` after hosted run `34175371896`, remote Loom run `34175910263`, exact-head deployment `https://pr-1553.nokey-sh.pages.dev`, and readiness success. Authored additions: 191.

The first hosted head exposed one clippy match-arm diagnostic; identical provider capability arms were consolidated, then the exact replacement head passed all required checks. Ownership denial and invalid-suppression prohibition are active in the completed architecture modules. Workbench worklog and stats are published.

