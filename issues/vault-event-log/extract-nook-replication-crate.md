---
title: Extract portable replication mechanics from nook-core
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-07-26T08:29:14Z
updated_at: 2026-07-26T08:29:14Z
source_issues: ["https://github.com/meta-secret/nook/issues/112"]
related_prs: []
depends_on: []
---

# Extract portable replication mechanics from nook-core

## Context

The completed immutable event-log work established signed content-addressed
events, causal set-union convergence, deterministic vault projection, and
provider repair. The generic causal and replica bookkeeping is reusable beyond
the vault domain but remains physically coupled to vault operations in
`nook-core`. See the
[vault event-log feature](README.md) and the
[task-start plan](../../plans/vault-event-log/2026-07-26T08-29-14Z-extract-nook-replication-crate.md).

## Outcome

Nook has a portable `nook-replication` Rust crate consumed by `nook-core`.
Generic causal DAG and append-only replica/outbox mechanics are independently
testable, while serialized vault events, authorization, projection, provider
credentials, and transports retain their existing behavior and ownership.

## Scope

- Add the crate to workspace, build, coverage, cache, and validation surfaces.
- Extract generic causal indexing and replica/outbox/repair mechanics.
- Preserve the public `nook_core` compatibility API and persisted event bytes.
- Keep vault policy in `nook-core` and provider I/O in `nook-wasm`.
- Update architecture, event-log, workflow, and repository documentation.
- Exclude new event schemas, provider modes, networking, consensus, and
  user-interface work.

## Acceptance criteria

- [ ] `nook-replication` compiles on native and through the workspace WASM
      dependency graph without browser or provider dependencies.
- [ ] Generic tests cover pending parents, deterministic ordering,
      concurrency/heads, set-union laws, quarantine exclusion, idempotent
      outboxes, and missing-event repair.
- [ ] Existing vault graph, event-store, event-log workflow, and WASM tests pass
      unchanged at their public boundary.
- [ ] Current vault-event serialization and storage identifiers are unchanged.
- [ ] Coverage, Docker, cache keys, preflight, and Task commands include the new
      crate.
- [ ] Architecture documentation explicitly distinguishes replication
      mechanics from vault policy and provider transport.
- [ ] The Nook implementation PR passes exact-head readiness and is
      squash-merged.

## Progress

- 2026-07-26: Started from current Nook main after publishing the task plan.
- 2026-07-26: Chose a sibling-foundation dependency shape:
  `nook-auth2 + nook-replication -> nook-core -> nook-wasm`.

## Findings and decisions

- The existing event graph interleaves causal indexing with vault
  actor-authorization rules, so a file move would create the wrong boundary.
  `nook-replication` owns generic parent/index mechanics while `nook-core`
  retains authorization.
- Provider transports remain host adapters; the extracted crate operates only
  on typed identifiers, parent relationships, and opaque bytes.
- `nook-distributed` was rejected because it would imply a much broader home
  for networking, membership, or consensus.

## References

- [Historical event-log issue #112](../backlog/gh-112-replace-whole-vault-sync-with-an-immutable-event-log-and-causal-projecti.md)
- [Nook architecture](https://github.com/meta-secret/nook/blob/main/.cortex/ARCHITECTURE.md)
- [Nook vault event-log design](https://github.com/meta-secret/nook/blob/main/.cortex/design-docs/vault-event-log.md)
