---
title: Extract the vault event-log domain from nook-core
feature: vault-event-log
issue: issues/vault-event-log/extract-nook-event-log-crate.md
started_at: 2026-07-26T14:12:02Z
agent: codex
---

# Extract the vault event-log domain from nook-core

## Interpreted request

Evaluate whether Nook's signed vault event-log domain deserves its own portable
Rust crate after the replication-mechanics extraction. If the dependency
boundary is cohesive, implement the full refactor, keep persisted data and
public behavior compatible, and move any event-log policy still duplicated in
browser code behind typed Rust/WASM APIs.

## Requirements

- Choose a name that describes the actual causal event-log abstraction without
  implying a linear commit log or an overly broad distributed-systems package.
- Separate signed event envelopes, vault operations, authorization graph,
  deterministic projection, append/store orchestration, and epoch metadata from
  unrelated password-manager application services where dependency direction
  permits.
- Keep `nook-replication` generic and provider-neutral.
- Preserve canonical event bytes, identifiers, schema compatibility, security
  checks, and the existing `nook_core` compatibility API.
- Audit TypeScript sync/event-log helpers and move domain decisions into Rust
  when they are not merely lifecycle, presentation, or provider I/O.
- Wire the crate through native/WASM builds, Docker caches, coverage, quality
  checks, and architecture documentation.
- Deliver through an exact-head GitHub Actions-validated PR, resolve existing
  actionable feedback, and squash-merge.

## Constraints and exclusions

- Provider transports, browser APIs, IndexedDB persistence, OAuth, and UI
  lifecycle remain host responsibilities.
- This refactor does not introduce a new event schema, migration, consensus
  protocol, provider, or user-visible feature.
- Persisted event bytes and existing vault behavior must remain unchanged.
- `nook-event-log` is the working name because the source of truth is a causal
  DAG, not a linear commit log; the final dependency audit may reject the crate
  only if extraction would create cycles or false abstraction.

## Initial plan

1. Map dependencies among event envelopes, authorization, projection, auth
   types, replication mechanics, WASM orchestration, and browser helpers.
2. Establish the portable crate boundary and compatibility re-exports.
3. Move domain modules, strengthen focused Rust coverage, and remove any
   browser-side event-log decisions that belong in Rust.
4. Update all workspace, build, cache, coverage, preflight, and architecture
   surfaces.
5. Format, publish a PR, fix GitHub Actions and review findings, pass the
   exact-head readiness audit, and squash-merge.
6. Publish the completed Workbench issue, worklog, and agent statistics.

## Completion evidence

- The dependency graph clearly distinguishes authentication, replication,
  event-log domain, application core, WASM host integration, and web lifecycle.
- Existing event serialization and behavior-focused event-log tests pass on
  the final PR head, including native and WASM compilation.
- Repository-owned PR checks and `task pr:ready` pass on the exact merged head.
- Workbench completion records link the implementation and validation evidence.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
