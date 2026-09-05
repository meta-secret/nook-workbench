---
title: Reject quarantined events before publication
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-event-quarantine-publication
created_at: 2026-09-05T05:51:54Z
updated_at: 2026-09-05T09:33:22Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1372
depends_on:
  - issues/rust-action-ownership/oauth-origin.md
---

# Reject quarantined events before publication

## Outcome

The core event session rejects a locally quarantined event before publishing it as the current head or queuing it for provider output.

## Scope

Three Rust files, 159 additions and 3 deletions. A typed local-quarantine error reports the event ID and reason; the core session matches the existing append disposition before publication.

## Acceptance criteria

- [x] A validly signed but causally unauthorized event returns the typed quarantine error before heads or outbox change and is not stored.
- [x] Applied, Pending, and Duplicate preserve their current EventId, heads, and outbox behavior.
- [x] A quarantined staged security rotation leaves the original session unchanged.
- [x] Existing malformed-envelope, concurrent-branch, provider-advanced-before-flush, and indirect WASM session coverage remained green.
- [x] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion passed.

## Decisions and limitations

The store's four dispositions remain authoritative. Only Quarantined is rejected at the core publication boundary. This change adds no prepared-store wrapper, global frontier check, replay rule, provider durability claim, wire change, recovery path, or cryptography. The separate WASM transactional persistence path is unchanged.

## Completion

PR1372 merged as 6c43f593b30932c52ad4ba54f64e44ef1c941894 after full run33957848465, source SECURITY, exact-head readiness, and zero unresolved findings. Worklog: worklogs/rust-action-ownership/2026-09-05T09-33-22Z-pr-1372.md.
