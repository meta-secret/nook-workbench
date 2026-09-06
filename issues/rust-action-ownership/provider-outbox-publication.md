---
title: Type immutable event transport and outbox acknowledgement
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-provider-outbox
created_at: 2026-09-06T00:09:19Z
updated_at: 2026-09-06T00:56:31Z
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

- [x] Checked event bytes reject malformed or mismatched content and preserve semantic-equivalence acceptance.
- [x] GitHub, Drive, and CloudKit retain their exact path, targeting, conflict, missing-event, parsing-order, and redaction behavior.
- [x] An absent active index permits outbox publication; a present index requires event membership.
- [x] Obsolete rows are discarded without provider publication.
- [x] Provider publication failure leaves the durable outbox row intact.
- [x] Successful publication precedes acknowledgement; remote identifiers update only after acknowledgement.
- [x] Existing missing-event publication, error propagation, and future-drop behavior remain unchanged.
- [x] Touched modules deny homeless functions with only exact framework-boundary expectations.
- [x] Remote Loom, hosted PR checks, exact-head source SECURITY, readiness, squash merge, and Workbench completion pass.

## Progress

PR #1418 merged as `49ee33ba5fb264e30fac0dacf06eef1853aa64e0` from exact reviewed head `ae305aa620863a311a366d27dd6ec6e13b41488b`. The final change contained 1,654 authored additions and 1,133 deletions across eight files. Remote Loom run 34001939748, hosted PR run 34001947425, exact-head SECURITY, and readiness passed.

## Findings and decisions

`CheckedEventWrite` proves parseability and matching content identity only. It does not prove signature, membership, freshness, or authorization. Existing provider-specific validation and error precedence remain authoritative. No remote-success test seam exists, so browser coverage proves failure retention and durable acknowledgement without claiming end-to-end remote publication.

The initial narrow head was cancelled after the delivery budget was clarified. The completed PR migrated the full cohesive provider event transport boundary within the 2,000-line limit.

## References

- https://github.com/meta-secret/nook/pull/1418
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_sync.rs`
- `nook-app/nook-platform/nook-wasm/src/manager/event_log/provider_io.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/checked_event_write.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/github_events.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/drive_events.rs`
- `nook-app/nook-platform/nook-wasm/src/storage/icloud.rs`
