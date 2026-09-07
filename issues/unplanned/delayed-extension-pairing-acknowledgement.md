---
title: Fix delayed extension pairing acknowledgement
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: extension-pairing-acknowledgement
created_at: 2026-09-07T02:06:00Z
updated_at: 2026-09-07T03:39:25Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1486"]
depends_on: []
---

# Fix delayed extension pairing acknowledgement

## Context

An observed Simple Vault approval displayed a failed browser handoff even though the extension later showed the vault as connected. This focused repair belongs to [Unplanned engineering repairs](README.md).

## Outcome

Simple Vault sends one pairing grant and waits for the extension's completed-import acknowledgement, so a valid slow import cannot be reported as rejected or replayed.

## Scope

- Include the website-to-extension message wait policy and focused web unit/browser-demo regression coverage.
- Include security acceptance and Main-fix exact-head hosted validation.
- Exclude Sentinel pairing, Rust/WASM authorization changes, recovery engines, retries, and compatibility behavior.

## Acceptance criteria

- [x] A valid pairing import that acknowledges after more than five seconds reaches the approved state.
- [x] One user approval causes exactly one extension grant delivery.
- [x] Runtime errors and missing responses remain fail-closed.
- [x] Security review confirms unchanged sender authorization, grant validation, and secret lifecycle.
- [ ] Applicable PR checks and full browser validation pass on the exact head before squash merge.

## Progress

- 2026-09-07: Root cause isolated to the sender's five-second timeout and duplicate resend behavior; implementation and focused regression contracts committed for hosted validation.
- 2026-09-07: PR 1486 passed Web verification, WASM, Rust, policy, coverage, and preview deployment, but required full extension E2E repeatedly failed before the pairing path in the shared mock-auth/static-host harness. Delivery is blocked pending explicit ownership of that separate failure.
- 2026-09-07: The user explicitly expanded scope to include the shared extension E2E/mock-auth repair and full PR delivery; work resumed under Web Development ownership.

## Findings and decisions

- The extension acknowledges only after validation, durable storage, session import, and authentication-surface refresh, which can legitimately exceed five seconds.
- A sender timeout cannot distinguish a failed import from a completed import with a delayed acknowledgement and therefore must not trigger duplicate grant delivery.

## References

- [Nook repository](https://github.com/meta-secret/nook)
