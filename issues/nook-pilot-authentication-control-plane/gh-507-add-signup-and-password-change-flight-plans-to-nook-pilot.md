---
title: "Add signup and password-change flight plans to Nook Pilot"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-20T01:31:54Z
updated_at: 2026-07-21T09:14:46Z
source_issues: ["https://github.com/meta-secret/nook/issues/507"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Add signup and password-change flight plans to Nook Pilot

## Imported context

This record was imported from [Nook GitHub issue #507](https://github.com/meta-secret/nook/issues/507)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #461.

## Goal

Extend Nook Pilot beyond login into signup and password-change workflows.

## Scope

- Detect current/new/confirm password and identity stages.
- Generate passwords through Rust/WASM.
- Stage generated credentials only in the extension memory session.
- Pause for terms, CAPTCHA, email verification, and ambiguous account choices.
- Verify site success before creating or atomically replacing a login record.
- Add Rust transition tests and representative browser E2E coverage.

## Acceptance Criteria

No generated or replacement password is durably committed before verified success, and manual takeover remains available at every stage.

## Historical comments

No comments.
