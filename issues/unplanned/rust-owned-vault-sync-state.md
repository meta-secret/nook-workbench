---
title: Move portable vault application policy and state into Rust
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-08-01T05:14:55Z
updated_at: 2026-08-01T14:42:09Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/900
depends_on: []
---

# Move portable vault application policy and state into Rust

## Context

The vault web applications had accumulated portable password, application,
provider, synchronization, conflict, and localization contracts in TypeScript.
That duplicated Rust domain policy and made browser code responsible for
invariants that must remain consistent across clients.

## Outcome

Portable policy and domain contracts are owned by Rust and exposed through the
typed WASM boundary. TypeScript and Svelte retain browser lifecycle,
presentation, external SDK, and UI orchestration responsibilities.

## Scope

- Rust-owned password generation, application identity, provider policy, vault
  synchronization state, conflicts, domain collections, and translation keys.
- Responsibility-based vault-app directories, including grouped authentication
  and iCloud modules.
- Generated typed Rust and TypeScript localization-key registries plus
  enforcement against copied lookup literals.
- Browser lifecycle and presentation state remain in focused TypeScript modules.

## Acceptance criteria

- [x] The TypeScript password generator and application-kind modules are removed.
- [x] Portable sync and conflict contracts cross the generated Rust/WASM boundary.
- [x] Browser-only lifecycle state remains explicitly browser-owned.
- [x] Canonical translation keys are generated from Rust locale catalogs and raw
      lookup literals are rejected.
- [x] Behavior-focused Rust, web, extension, preflight, and browser coverage pass.
- [x] Exact-head PR validation, deployment, feedback audit, and readiness pass.

## Progress

- 2026-08-01: PR 900 was squash-merged after all required workflows passed and
  all review conversations were resolved.

## Findings and decisions

- Ownership follows portability, not language preference: portable domain policy
  belongs in Rust; browser queues, SDK handles, routing, and presentation remain
  in TypeScript/Svelte.
- Rust locale catalogs remain canonical. Generated TypeScript constants avoid
  both duplicated handwritten keys and unnecessary WASM calls for UI lookup.
- The source-size invariant required extracting the enrollment rendering view
  into a cohesive module rather than mechanically splitting the controller.

## References

- https://github.com/meta-secret/nook/pull/900
- plans/unplanned/20260801-093814-rust-owned-vault-sync-state.md
- plans/unplanned/20260801-110009-rust-owned-vault-domain-collections.md
- plans/unplanned/20260801-115426-reusable-i18n-key-registry.md

