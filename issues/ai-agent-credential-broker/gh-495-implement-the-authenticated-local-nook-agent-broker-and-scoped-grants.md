---
title: "Implement the authenticated local Nook agent broker and scoped grants"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-19T00:21:06Z
updated_at: 2026-07-19T00:21:06Z
source_issues: ["https://github.com/meta-secret/nook/issues/495"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-harness-access"]
legacy_state_reason: ""
---

# Implement the authenticated local Nook agent broker and scoped grants

## Imported context

This record was imported from [Nook GitHub issue #495](https://github.com/meta-secret/nook/issues/495)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #493.

## Problem

Codex and Cursor need a local integration point, but exposing a browser vault directly or starting an unauthenticated localhost server would let unrelated processes/pages request credentials. Nook needs an authenticated broker that issues narrow, short-lived capabilities after user-controlled pairing and approval.

## Scope

- Implement the harness-facing bridge selected by the protocol design (MCP-compatible where safe) plus its authenticated handoff to Nook.
- Pair a harness instance explicitly and bind it to the local OS user and identifiable workspace/task context.
- Implement request ids, challenge/response authentication, anti-replay, deadlines, cancellation, rate limits, and restart recovery.
- Implement Rust-owned grants scoped to requester, workspace/task, target origin/API audience, selected account/credential, operation, delivery mode, and expiry.
- Support allow once, allow for task/session, deny, cancel, list own grants, and revoke.
- Integrate Nook lock/unlock state without allowing the broker or agent to complete user authentication itself.
- Ensure lock, expiry, disconnect, device/vault revocation, credential rotation, and local-data deletion immediately invalidate capabilities and zeroize action-scoped secret material.
- Package/install/configure the broker without placing credentials in MCP JSON, environment configuration, URLs, argv, or workspace files.

## Acceptance Criteria

- An unpaired process, different OS user, unapproved workspace, browser page, and replayed/stale request are denied.
- A paired harness can request an operation and receive only pending/approved/denied/completed/redacted-failure status plus opaque identifiers.
- Grants cannot be widened or reused for a different audience, account, operation, delivery mode, task, or process/request.
- Normal broker responses and diagnostics never contain secret material.
- Rust unit/integration tests cover grant lifecycle and authorization; transport tests cover substitution, replay, timeout, cancellation, concurrent requests, restart, lock, and revocation.
- Install/uninstall and complete local-data deletion remove broker pairing/grant state without affecting unrelated user files.

## Dependency

Blocked on the protocol/security decisions in the threat-model issue and consumes the API policy from the API-credential issue.

## Historical comments

No comments.
