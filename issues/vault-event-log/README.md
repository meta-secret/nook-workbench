---
title: Vault event log and replication architecture
status: proposed
created_at: 2026-07-26T08:29:14Z
updated_at: 2026-08-22T21:11:54Z
---

# Vault event log and replication architecture

## Goal

Keep Nook's immutable signed vault history convergent, portable, auditable, and
cleanly separated from vault authorization, projection, browser I/O, and
provider transports.

## Current state

The immutable event-log and causal projection architecture is implemented under
the historical completed issue #112. Provider-neutral causal indexing,
append-only replica bookkeeping, outboxes, and repair planning live in the
portable `nook-replication` crate. The signed vault event model, authorization
graph, deterministic projection, epoch semantics, and event-store orchestration
now live in the portable `nook-event-log` crate. `nook-core` owns application
services and compatibility re-exports, while WASM and browser code retain host
I/O, lifecycle, and presentation responsibilities.

## Decisions

- Use `nook-replication`, not a broad `nook-distributed` package.
- Keep causal DAG indexing, immutable replica sets, outboxes, and repair
  planning provider-neutral.
- Use `nook-event-log`; `event-sourcing` is broader than the intended domain and
  `commit-log` incorrectly suggests a linear history.
- Keep GitHub, Drive, iCloud, IndexedDB, OAuth, and browser APIs in host
  adapters.

## Issues

- [x] [Extract portable replication mechanics from nook-core](extract-nook-replication-crate.md)
- [x] [Extract portable vault event-log domain from nook-core](extract-nook-event-log-crate.md)
- [ ] [Redact vault event-session signing material from Debug](redact-vault-event-session-signing-material.md)

## References

- [Historical event-log issue #112](../backlog/gh-112-replace-whole-vault-sync-with-an-immutable-event-log-and-causal-projecti.md)
- [Replication extraction plan](../../plans/vault-event-log/2026-07-26T08-29-14Z-extract-nook-replication-crate.md)
- [Event-log extraction plan](../../plans/vault-event-log/2026-07-26T14-12-02Z-extract-nook-event-log-crate.md)
- [Event-log extraction worklog](../../worklogs/vault-event-log/2026-07-26T16-07-42Z-pr-793.md)
- [Nook PR 793](https://github.com/meta-secret/nook/pull/793)
- [Nook vault event-log design](https://github.com/meta-secret/nook/blob/main/.cortex/design-docs/vault-event-log.md)
