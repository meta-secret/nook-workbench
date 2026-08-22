---
title: Redact vault event-session signing material from Debug
status: proposed
priority: p1
automation: manual
owner: unassigned
created_at: 2026-08-22T21:11:54Z
updated_at: 2026-08-22T21:11:54Z
source_issues: []
related_prs: []
depends_on: []
---

# Redact vault event-session signing material from Debug

## Context

The [`Vault event log and replication architecture`](README.md) keeps signed
vault history auditable without exposing cryptographic material. A live
read-only module-expert inspection found that `VaultEventSession` derives
`Debug` while carrying a public raw signing seed. No current logging use was
found, but future debug formatting could disclose the seed.

## Outcome

Debug formatting and ordinary public access cannot expose raw event-session
signing material, while existing signed-event behavior remains unchanged.

## Scope

- Replace derived secret-bearing debug output with a redacted representation.
- Encapsulate the raw signing seed behind a typed or private boundary where the
  current consumers permit it.
- Preserve event signing, epoch rotation, and WASM consumer behavior.
- Exclude unrelated event-log, replication, and module-expert workflow changes.

## Acceptance criteria

- [ ] `Debug` output for an event session never contains the signing seed or an
      equivalent secret encoding.
- [ ] Behavior-focused Rust tests cover redaction and unchanged signed-event
      orchestration.
- [ ] Direct consumers compile against the narrowed signing-material boundary.
- [ ] The applicable Rust lint and test selectors pass on the exact PR head.

## Progress

- No implementation started.

## Findings and decisions

- The finding was produced by the first clean-head `core_expert` runtime smoke
  and independently checked against the exact source commit.
- Preserve this as a focused `nook-core` security-hardening change rather than
  mixing Rust domain changes into the module-expert orchestration foundation.

## References

- [Vault event-session source](https://github.com/meta-secret/nook/blob/main/nook-app/nook-platform/nook-core/src/vault/vault_event_session.rs)
- [Nook vault event-log design](https://github.com/meta-secret/nook/blob/main/.cortex/design-docs/vault-event-log.md)
