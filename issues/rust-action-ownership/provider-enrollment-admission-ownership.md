---
title: Type provider enrollment payload admission and selection ownership
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-provider-enrollment-admission
created_at: 2026-09-07T03:56:55Z
updated_at: 2026-09-07T04:20:17Z
source_issues: []
related_prs:
  - 1490
depends_on:
  - issues/rust-action-ownership/provider-connection-replication-ownership.md
---

# Type provider enrollment payload admission and selection ownership

## Context

Provider enrollment admission, onboarding selection, and personal/shared payload construction still expose seven homeless production operations across core and direct WASM adapters. Architecture, replication, joiner identity, and optional storage targets are passed independently, so the action graph does not carry a checked owner through admission into consuming payload construction.

## Outcome

A borrowed `ProviderEnrollmentRequest` owns the exact provider, architecture, joiner identity, and optional target. Its consuming admission returns a private non-Clone checked selection carrying the original request and onboarding kind; consuming construction dispatches to the existing personal/shared payload types. `SharedGrantProviderSelection` owns ordered exact target/preset matching, while core-owned `OnboardingType` observes the enrollment payload without extending dependency-owned `EnrollmentProvider`.

## Scope

Exact six-file closure:

- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/enrollment.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/storage_args.rs`
- `nook-app/nook-platform/nook-core/src/sync/sync_provider_store/mod.rs`
- `nook-app/nook-platform/nook-core/src/lib.rs`
- `nook-app/nook-platform/nook-wasm/src/public_api/provider_architecture.rs`
- `nook-app/nook-platform/nook-wasm/src/types/sync.rs`

Move seven production operations and the two fixture helpers (`github_provider`, `oauth_provider`) onto bounded owners. Estimated 750–1,050 additions, hard ceiling 1,300; keep `storage_args.rs` at or below 950 lines and preserve existing public WASM signatures.

## Acceptance criteria

- [x] Shared provider targets override personal vault replication for onboarding and shared payloads remain credential-free.
- [x] Architecture validation precedes effective replication checks and payload validation.
- [x] GitHub PAT-before-repository validation, OAuth credential validation, exact optional metadata copying, and credential handling remain exact.
- [x] Explicit nonblank targets are trimmed for admission while persisted target bytes are retained after the existing nonblank check; target-required errors precede joiner-identity errors, with iCloud identity omission preserved.
- [x] Grant selection remains first-match with exact preset/target equality and usable-token scope.
- [x] Public WASM signatures, schemas, storage behavior, and existing adapter ordering remain unchanged.
- [x] Retain 18 tests in scoped files plus two existing public API integration tests; add validation-order, shared credential-exclusion, explicit/persisted target, exact-match selection, and private/consuming-state controls.
- [x] Ownership denial covers completed `enrollment.rs`; unrelated facade and WASM operations remain outside blanket activation.
- [x] Hosted PR checks, exact-head SECURITY, readiness, squash merge, Workbench completion, and remote Loom pass.

## Constraints

No authorization or persistence typestates, provider I/O, storage transactions, cryptographic, schema, TSify/WASM signature, durable-publication, fallback, recovery, or generic phase-framework changes. Do not add an inherent implementation to dependency-owned `EnrollmentProvider`.

## Progress

Read-only DEV-CORE inventory at fresh origin/main `6a6df67d2473afd12c084b44ab9e3401e34d62ce` found seven homeless production operations and two fixture helpers in an exact six-file closure with no live PR overlap. Estimated scope is 750–1,050 additions with a hard ceiling of 1,300; `storage_args.rs` must remain at or below 950 lines.

## Completion

PR #1490 merged as `f241def08d9610d8f6df554d5429a9c52623065f` from delivery head `05257165b4692bfe39e3ce2d0190a8e396935c56`, based on main `dba787f917d10d7012f0ccadcb06ddc8ca562282`. The exact six-file closure added 594 lines and removed 308. Hosted PR `34082041096`, repository policy `34082026156`, remote Loom `34082574299`, exact-head security review, and readiness passed; readiness deployment was `https://pr-1490.nokey-sh.pages.dev`.
