---
title: Type provider outbox publication and acknowledgement
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-provider-outbox
created_at: 2026-09-06T00:09:19Z
updated_at: 2026-09-06T00:09:19Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/connect-sentinel-error.md
---

# Type provider outbox publication and acknowledgement

## Context

The [Rust action ownership](README.md) migration requires the provider outbox lifecycle to expose publication, acknowledgement, and discard through meaningful data-carrying owners.

## Outcome

A pending provider outbox row can become published only after the existing provider write succeeds, and only the published state can acknowledge the durable row and yield its event identifier.

## Scope

- One Rust file with a ceiling of 180 authored additions and a final size below 750 lines.
- Own active-index classification, publication, acknowledgement, and obsolete-row discard with private states.
- Enable full-module ownership enforcement and add focused lifecycle evidence.
- Exclude public API, schema, cryptography, TypeScript, retry, recovery, and cross-tab freshness changes.

## Acceptance criteria

- [ ] An absent index permits publication; a present index requires event membership.
- [ ] Obsolete rows are discarded without provider publication.
- [ ] Provider publication failure leaves the durable outbox row intact.
- [ ] A successful publication precedes acknowledgement; remote identifiers update only after acknowledgement.
- [ ] Existing missing-event publication, error propagation, and future-drop behavior remain unchanged.
- [ ] The module denies homeless functions with only exact framework-boundary expectations.
- [ ] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

Implementation delegated to Development core from current main.

## Findings and decisions

The active-index snapshot is the existing freshness boundary. The change introduces no retry or recovery path.

## References

- `nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs`
