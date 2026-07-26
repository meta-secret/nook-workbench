---
title: Extract portable vault event-log domain from nook-core
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-07-26T14:12:02Z
updated_at: 2026-07-26T16:07:42Z
source_issues: ["https://github.com/meta-secret/nook/issues/112"]
related_prs: ["https://github.com/meta-secret/nook/pull/793"]
depends_on: ["issues/vault-event-log/extract-nook-replication-crate.md"]
---

# Extract portable vault event-log domain from nook-core

## Context

The completed [replication extraction](extract-nook-replication-crate.md)
isolated generic causal DAG and replica mechanics, but the signed vault event
model, authorization graph, deterministic projection, and append-only store
adapter remained spread through `nook-core`. This deliverable implemented the
next cohesive package boundary. See the
[vault event-log feature](README.md) and
[task-start plan](../../plans/vault-event-log/2026-07-26T14-12-02Z-extract-nook-event-log-crate.md).

## Outcome

Nook has a portable, independently tested `nook-event-log` domain crate with
explicit dependencies on authentication/key-access types and generic
replication mechanics. `nook-core` consumes and compatibility-reexports that
domain while WASM and web code retain only host I/O, lifecycle, and presentation
concerns.

## Scope

- Extract the cohesive signed vault event-log model and policy boundary.
- Preserve persisted formats and existing `nook_core` type/module paths.
- Let fallible event-domain APIs expose their owning `EventResult` and
  `EventError`; core application services convert those errors to `VaultError`.
- Audit browser sync helpers for Rust-owned domain decisions.
- Wire native, WASM, Docker, cache, coverage, preflight, and documentation.
- Exclude schema migrations, new providers, consensus, networking, and UI
  redesign.

## Acceptance criteria

- [x] The crate name and dependency graph accurately model a causal event log,
      not a linear commit log.
- [x] Event envelopes, authorization, projection, store orchestration, and
      epoch semantics have a clear portable owner without circular dependencies.
- [x] Canonical event bytes, identifiers, schema behavior, and security checks
      remain compatible.
- [x] Behavior-focused Rust tests cover the extracted domain and the workspace
      compiles through native and WASM paths.
- [x] Browser code contains no duplicated event-log policy identified by the
      audit.
- [x] Build, coverage, cache, preflight, Task, and architecture surfaces include
      the new crate.
- [x] The exact-head PR workflow and readiness audit passed before squash merge.

## Progress

- 2026-07-26: Started dependency and ownership audit from current Nook main.
- 2026-07-26: Extracted the event model, authorization graph, projection, epoch,
  canonicalization, signing, and store orchestration into `nook-event-log`.
- 2026-07-26: Wired native/WASM builds, Docker, coverage, preflight, hashing,
  historical base coverage, and architecture documentation.
- 2026-07-26: Passed exact-head PR validation and readiness, resolved all review
  threads, and squash-merged PR 793 as `72ccc67d`.

## Findings and decisions

- `nook-event-sourcing` would imply a broader command/application architecture,
  while `nook-commit-log` would incorrectly imply a linear history. The crate is
  named `nook-event-log`.
- The dependency direction is
  `nook-auth2 + nook-replication -> nook-event-log -> nook-core -> nook-wasm`.
- Root `nook_core` type and module paths remain available through re-exports.
  Event-domain failures intentionally retain `EventError` ownership rather than
  duplicating the event type graph solely to preserve `VaultResult`.
- The TypeScript audit found presentation types, lifecycle/busy coordination,
  and provider/browser I/O, but no duplicated parsing, authorization,
  projection, merge, or conflict policy to move into Rust.

## References

- [Historical event-log issue #112](../backlog/gh-112-replace-whole-vault-sync-with-an-immutable-event-log-and-causal-projecti.md)
- [Task-start plan](../../plans/vault-event-log/2026-07-26T14-12-02Z-extract-nook-event-log-crate.md)
- [Completion worklog](../../worklogs/vault-event-log/2026-07-26T16-07-42Z-pr-793.md)
- [Nook PR 793](https://github.com/meta-secret/nook/pull/793)
- [Nook architecture](https://github.com/meta-secret/nook/blob/main/.cortex/ARCHITECTURE.md)
- [Nook vault event-log design](https://github.com/meta-secret/nook/blob/main/.cortex/design-docs/vault-event-log.md)
