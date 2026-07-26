---
title: Extract portable replication mechanics from nook-core
feature: vault-event-log
issue: issues/vault-event-log/extract-nook-replication-crate.md
started_at: 2026-07-26T08:29:14Z
agent: codex
---

# Extract portable replication mechanics from nook-core

## Interpreted request

Create a dedicated portable Rust crate named `nook-replication` for Nook's
provider-neutral immutable-event replication mechanics. Keep vault operations,
projection, authorization, key epochs, provider credentials, browser I/O, and
transport adapters in their existing domain or host layers.

## Requirements

- Add `nook-replication` to the Rust workspace and dependency/build/coverage
  surfaces that currently enumerate the portable Rust crates.
- Move reusable causal-DAG and append-only event-set mechanics behind a generic
  typed boundary instead of coupling them directly to vault operations.
- Preserve the current serialized vault-event format, storage identifiers,
  provider behavior, and public `nook_core` API through compatibility exports.
- Keep actor authorization and vault projection policy in `nook-core`; keep
  GitHub, Drive, iCloud, IndexedDB, OAuth, and browser APIs outside the new
  crate.
- Keep the new crate portable across native and `wasm32-unknown-unknown`.
- Add behavior-focused Rust coverage at the extracted boundary and preserve
  existing vault event-log workflow coverage.
- Update architecture and event-log documentation to describe the new package
  boundary.
- Deliver through a formatted PR, GitHub Actions validation, feedback handling,
  exact-head readiness, and squash merge.

## Constraints and exclusions

- This refactor must not introduce a new event schema or rewrite persisted
  event bytes.
- It must not move vault-specific operations, projection rules, security
  conflict semantics, provider credentials, or provider transports into
  `nook-replication`.
- It must not add peer-to-peer networking, consensus, leader election, or a new
  synchronization provider.
- The extraction should be incremental and avoid a circular dependency between
  `nook-core` and `nook-replication`.

## Initial plan

1. Inventory current event graph, event store, exports, tests, and build
   enumeration.
2. Introduce the crate with generic replicated-event and causal-set primitives.
3. Adapt `nook-core` vault events through domain-owned validation and
   authorization policy while keeping compatibility exports.
4. Move provider-neutral set/outbox planning where the boundary remains clean.
5. Update Rust tests, architecture, coverage, and build configuration.
6. Format, push, validate in GitHub Actions, address findings, and squash merge.
7. Publish the linked Workbench worklog and agent statistics.

## Completion evidence

- The workspace builds and tests `nook-replication` through repository-owned
  GitHub Actions.
- Existing event-log serialization and vault workflow tests remain green.
- New tests prove generic DAG ordering, pending-parent handling, duplicate
  behavior, and append-only replication planning independently of vault
  projection policy.
- Architecture documentation shows `nook-core` consuming the new crate while
  provider I/O remains in `nook-wasm`.
- The implementation PR is squash-merged and linked from the completion
  records.

## Safety review

This plan contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
