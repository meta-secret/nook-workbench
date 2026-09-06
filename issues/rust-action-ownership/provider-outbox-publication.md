---
title: Type immutable event transport and outbox acknowledgement
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-provider-outbox
created_at: 2026-09-06T00:09:19Z
updated_at: 2026-09-06T00:20:50Z
source_issues: []
related_prs:
  - 1418
depends_on:
  - issues/rust-action-ownership/connect-sentinel-error.md
---

# Type immutable event transport and outbox acknowledgement

## Context

The [Rust action ownership](README.md) migration requires the complete immutable event transport boundary to expose validation, provider targeting, publication, acknowledgement, and discard through meaningful data-carrying owners.

## Outcome

GitHub, Drive, and CloudKit event stores accept only bytes checked against the requested content identifier. Provider outbox rows become published only after the existing provider write succeeds, and only the published state can acknowledge the durable row and yield its event identifier.

## Scope

- Eight Rust files with a hard ceiling of 2,000 authored additions.
- Own GitHub, Drive, and CloudKit immutable-event transport operations with credential and target borrowing store types.
- Add a private checked event write state carrying matching content-addressed bytes into provider publication.
- Own active-index classification, publication, acknowledgement, and obsolete-row discard with private states.
- Enable full-module ownership enforcement in the touched transport and manager modules.
- Exclude IndexedDB migration, local-folder transport, generic provider APIs, broader genesis architecture, public API, schema, cryptography, TypeScript, retry, recovery, and credential-lifetime changes.

## Acceptance criteria

- [ ] Checked event bytes reject malformed or mismatched content and preserve semantic-equivalence acceptance.
- [ ] GitHub, Drive, and CloudKit retain their exact path, targeting, conflict, missing-event, parsing-order, and redaction behavior.
- [ ] An absent active index permits outbox publication; a present index requires event membership.
- [ ] Obsolete rows are discarded without provider publication.
- [ ] Provider publication failure leaves the durable outbox row intact.
- [ ] Successful publication precedes acknowledgement; remote identifiers update only after acknowledgement.
- [ ] Existing missing-event publication, error propagation, and future-drop behavior remain unchanged.
- [ ] Touched modules deny homeless functions with only exact framework-boundary expectations.
- [ ] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

PR #1418 contains the initial outbox lifecycle and is expanding to the complete provider event transport boundary after the delivery budget was clarified.

## Findings and decisions

`CheckedEventWrite` proves parseability and matching content identity only. It does not prove signature, membership, freshness, or authorization. Existing provider-specific validation and error precedence remain authoritative. No remote-success test seam exists, so browser coverage proves failure retention and durable acknowledgement without claiming end-to-end remote publication.

## References

- `nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_io.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/github_events.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/drive_events.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/icloud.rs`
