---
title: "Let AI harnesses request browser login through the Nook extension"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-19T00:21:07Z
updated_at: 2026-07-19T00:21:07Z
source_issues: ["https://github.com/meta-secret/nook/issues/496"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-harness-access"]
legacy_state_reason: ""
---

# Let AI harnesses request browser login through the Nook extension

## Imported context

This record was imported from [Nook GitHub issue #496](https://github.com/meta-secret/nook/issues/496)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #493.

## Problem

An agent should be able to ask Nook to obtain an authenticated browser session without receiving the username/password. The existing Simple Vault extension auth-agent owns page detection, account selection, fill, passkey ceremonies, and submit policy; the external harness needs a scoped request/status bridge into that user-controlled flow.

## Scope

- Add a broker operation for a normalized website origin and intended browser/tab/session.
- Route approved requests to the matching Nook extension channel and existing Rust/WASM account-selection/fill policy.
- When locked, show extension-owned authorization; never let the harness synthesize approval or receive passkey/PIN/identity material.
- Require explicit consent naming the harness, workspace/task, origin, account, intended action, and whether submission is included.
- Return status and redacted failure reasons only; never return form values, passwords, TOTP seeds/codes, passkey material, cookies, or session tokens.
- Handle multiple/no matching accounts, two-step login, dynamically inserted forms, passkey login, user cancellation, wrong tab/origin, navigation, extension absence/lock, and timeout.
- Keep V1 Simple-only and reuse #237 and #461/#465 rather than duplicating form matching or auth-agent policy.

## Acceptance Criteria

- From both a mocked Codex request and a mocked Cursor request, a user can approve a real Chromium username/password login and the harness receives only completion status.
- Tests prove the password does not appear in broker messages, model/tool transcripts, page URLs, logs, telemetry, screenshots/attachments, or extension storage.
- The extension rejects forged/mismatched request ids, harness ids, vault ids, origins, tabs/frames, expired capabilities, and Sentinel vaults in Rust/WASM policy.
- Login never silently fills/submits before the defined user/policy consent point.
- Lock, cancel, navigation, browser restart, timeout, and revocation terminate the request and zeroize action-scoped material.
- Targeted Rust tests cover selection/policy; extension integration/e2e tests cover standard, two-step, passkey, ambiguous, denied, locked, malicious-page, and wrong-origin flows.

## Related

- #237
- #461
- #465

## Historical comments

No comments.
