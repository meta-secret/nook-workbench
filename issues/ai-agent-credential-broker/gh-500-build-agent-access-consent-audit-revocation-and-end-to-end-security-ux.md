---
title: "Build agent-access consent, audit, revocation, and end-to-end security UX"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-19T00:21:11Z
updated_at: 2026-07-19T00:21:11Z
source_issues: ["https://github.com/meta-secret/nook/issues/500"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-harness-access"]
legacy_state_reason: ""
---

# Build agent-access consent, audit, revocation, and end-to-end security UX

## Imported context

This record was imported from [Nook GitHub issue #500](https://github.com/meta-secret/nook/issues/500)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #493.

## Problem

Agent access is too sensitive to hide behind a generic browser permission or one-time pairing checkbox. Users need to understand each request, keep approvals narrow, inspect active access, and revoke it immediately. The complete feature also needs cross-harness proof that no credential escapes through normal observability surfaces.

## Scope

- Add Nook UI for paired harnesses, pending requests, active grants, expiry, recent redacted decisions/results, revoke, revoke all, and remove pairing.
- Approval must display verified harness identity, workspace/task, target origin/API audience, account label, operation, delivery mode, duration, and relevant residual-risk warning.
- Support allow once, allow for task/session, deny, cancel, and fresh per-use high-risk plaintext approval; no indefinite default.
- Keep all visible strings localized and accessible; do not render secret values in approval/audit UI.
- Integrate lock, vault switching/deletion, device revocation, credential rotation, and complete browser/local-data deletion.
- Build an end-to-end security/conformance suite spanning the broker, Simple Vault, extension, hostile site/API fixtures, and Codex/Cursor adapters.
- Document user recovery for lost/compromised harness installations and stale pairings.

## Acceptance Criteria

- Users can distinguish and independently revoke each harness pairing and grant.
- Approval cannot be clickjacked or supplied by an ordinary web page/model-controlled DOM; primary authorization is Nook/extension owned.
- Audit events contain only redacted metadata and survive/reconcile according to a documented privacy/retention policy.
- Lock, revoke, expiry, vault deletion, credential rotation, and harness removal prevent new use immediately and terminate in-flight work safely.
- E2e tests cover browser login and API use from Codex and Cursor plus denial, malicious prompt/repo, wrong audience/origin/workspace, replay, timeout, cancel, rotation, revoke, deletion, browser/broker restart, and attempted secret logging/transcript capture.
- A verification artifact demonstrates that normal success and failure paths contain no password/API key in model/tool transcripts, URLs, argv, logs, errors, screenshots, or persisted broker/extension state.
- Domain behavior has Rust tests; UI flows have targeted web/extension tests; e2e does not substitute for domain coverage.

## Historical comments

No comments.
