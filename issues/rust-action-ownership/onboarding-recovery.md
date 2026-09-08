---
title: Own onboarding and recovery actions
status: pending
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-onboarding-recovery
created_at: 2026-09-08T01:20:00Z
updated_at: 2026-09-08T01:20:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/provider-architecture.md
---

# Own onboarding and recovery actions

## Context

Sentinel genesis operation emission, simple identity roster emission, recovery-option projection, and recovery device hint formatting remain detached functions. Callers provide output, identity, event graph, or device identifiers separately from the action that owns their invariants.

## Outcome

Genesis output/input and recovery domain types own these actions. Core and WASM callers use associated methods while preserving event operation order, identity enrollment checks, recovery redaction, passkey hints, and public adapter behavior.

## Scope

One cohesive onboarding and recovery boundary:

- `nook-app/nook-platform/nook-core/src/vault/vault_sentinel_genesis.rs`
- `nook-app/nook-platform/nook-core/src/auth/multi_device.rs`
- `nook-app/nook-platform/nook-core/src/vault/vault_recovery_options.rs`
- direct core and WASM onboarding, passkey, diagnostics, and focused test callers

Move genesis operation construction, recovery projection, and device hint formatting onto the existing domain owners. Activate ownership denial and invalid-suppression prohibition in the completed modules.

## Acceptance criteria

- [ ] Sentinel participant and share operation ordering and payloads remain unchanged.
- [ ] Simple identity enrollment validation, signing-key selection, labels, and encrypted envelopes remain unchanged.
- [ ] Recovery projection remains event-graph based, redacts encrypted material, preserves revocation/rename behavior, and keeps passkey hint formatting unchanged.
- [ ] Core, WASM, and focused tests use owning methods; detached core exports disappear.
- [ ] Completed onboarding/recovery modules deny homeless functions and forbid invalid ownership-lint suppressions without blanket exceptions.
- [ ] Remote Loom, hosted checks, exact-head deployment/security, readiness, squash merge, and Workbench completion pass.

## Constraints

No provider I/O, authentication or authorization change, persistence or schema migration, cryptographic change, WASM/TypeScript signature change, fallback/recovery/retry behavior, or generic phase framework. Preserve operation order, serialized DTOs, error ordering, passkey hint strings, and public adapter behavior. No local Rust/WASM/product builds or tests.

## Progress

Selected from `origin/main` after PR #1553 as the next cohesive onboarding and recovery ownership boundary.
