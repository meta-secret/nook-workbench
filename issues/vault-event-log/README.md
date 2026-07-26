---
title: Vault event log and replication architecture
status: done
created_at: 2026-07-26T08:29:14Z
updated_at: 2026-07-26T13:57:00Z
---

# Vault event log and replication architecture

## Goal

Keep Nook's immutable signed vault history convergent, portable, auditable, and
cleanly separated from vault authorization, projection, browser I/O, and
provider transports.

## Current state

The immutable event-log and causal projection architecture is implemented under
the historical completed issue #112. Provider-neutral causal indexing,
append-only replica bookkeeping, outboxes, and repair planning now live in the
portable `nook-replication` crate. Vault policy and projection remain in
`nook-core`, and provider behavior remains in host adapters.

## Decisions

- Use `nook-replication`, not a broad `nook-distributed` package.
- Keep causal DAG indexing, immutable replica sets, outboxes, and repair
  planning provider-neutral.
- Keep vault operations, actor authorization, projection, and key epochs in
  `nook-core`.
- Keep GitHub, Drive, iCloud, IndexedDB, OAuth, and browser APIs in host
  adapters.

## Issues

- [x] [Extract portable replication mechanics from nook-core](extract-nook-replication-crate.md)

## References

- [Historical event-log issue #112](../backlog/gh-112-replace-whole-vault-sync-with-an-immutable-event-log-and-causal-projecti.md)
- [Task-start plan](../../plans/vault-event-log/2026-07-26T08-29-14Z-extract-nook-replication-crate.md)
- [Nook vault event-log design](https://github.com/meta-secret/nook/blob/main/.cortex/design-docs/vault-event-log.md)
