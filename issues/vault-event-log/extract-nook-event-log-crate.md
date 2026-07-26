---
title: Extract portable vault event-log domain from nook-core
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-07-26T14:12:02Z
updated_at: 2026-07-26T14:12:02Z
source_issues: ["https://github.com/meta-secret/nook/issues/112"]
related_prs: []
depends_on: ["issues/vault-event-log/extract-nook-replication-crate.md"]
---

# Extract portable vault event-log domain from nook-core

## Context

The completed [replication extraction](extract-nook-replication-crate.md)
isolated generic causal DAG and replica mechanics, but the signed vault event
model, authorization graph, deterministic projection, and append-only store
adapter remain spread through `nook-core`. This deliverable tests and implements
the next cohesive package boundary. See the
[vault event-log feature](README.md) and
[task-start plan](../../plans/vault-event-log/2026-07-26T14-12-02Z-extract-nook-event-log-crate.md).

## Outcome

Nook has a portable, independently tested event-log domain crate with explicit
dependencies on authentication/key-access types and generic replication
mechanics. `nook-core` consumes and compatibility-reexports that domain while
WASM and web code retain only host I/O, lifecycle, and presentation concerns.

## Scope

- Extract the cohesive signed vault event-log model and policy boundary.
- Preserve persisted formats and the existing `nook_core` public API.
- Audit browser sync helpers for Rust-owned domain decisions.
- Wire native, WASM, Docker, cache, coverage, preflight, and documentation.
- Exclude schema migrations, new providers, consensus, networking, and UI
  redesign.

## Acceptance criteria

- [ ] The crate name and dependency graph accurately model a causal event log,
      not a linear commit log.
- [ ] Event envelopes, authorization, projection, store orchestration, and
      epoch semantics have a clear portable owner without circular dependencies.
- [ ] Canonical event bytes, identifiers, schema behavior, and security checks
      remain compatible.
- [ ] Behavior-focused Rust tests cover the extracted domain and the workspace
      compiles through native and WASM paths.
- [ ] Browser code contains no duplicated event-log policy identified by the
      audit.
- [ ] Build, coverage, cache, preflight, Task, and architecture surfaces include
      the new crate.
- [ ] The exact-head PR workflow and readiness audit pass before squash merge.

## Progress

- 2026-07-26: Started dependency and ownership audit from current Nook main.

## Findings and decisions

- `nook-event-sourcing` would imply a broader command/application architecture,
  while `nook-commit-log` would incorrectly imply a linear history. The working
  name is `nook-event-log`.

## References

- [Historical event-log issue #112](../backlog/gh-112-replace-whole-vault-sync-with-an-immutable-event-log-and-causal-projecti.md)
- [Nook architecture](https://github.com/meta-secret/nook/blob/main/.cortex/ARCHITECTURE.md)
- [Nook vault event-log design](https://github.com/meta-secret/nook/blob/main/.cortex/design-docs/vault-event-log.md)
