---
title: "Guide 2FA enrollment and recovery-code capture with Nook Pilot"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-20T01:31:57Z
updated_at: 2026-07-21T11:30:46Z
source_issues: ["https://github.com/meta-secret/nook/issues/508"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Guide 2FA enrollment and recovery-code capture with Nook Pilot

## Imported context

This record was imported from [Nook GitHub issue #508](https://github.com/meta-secret/nook/issues/508)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #461. Related to #239.

## Goal

Let Nook Pilot guide the repetitive 2FA enrollment ceremony while keeping authenticator and recovery material device-controlled.

## Scope

- Detect supported `otpauth://` setup material and common enrollment stages.
- Show issuer/account metadata only before explicit approval.
- Stage setup secrets in extension-owned memory, generate codes in Rust/WASM, and fill the verification field.
- Encrypt the authenticator only after successful site verification.
- Capture service-provided recovery codes only after explicit approval and store them encrypted with the authenticator item.
- Never log or expose setup secrets, TOTP codes, or recovery codes in the HUD.

## Acceptance Criteria

The full enrollment flow is origin-bound, consented, Rust-owned for secret validation/code generation, and covered by Rust plus browser tests.

## Historical comments

### cypherkitty — 2026-07-21T08:16:54Z

## Status update (milestone 8 triage)

Settings-page capture from #504 / #505 (PR #564) is **done** and covers:
- consented **Add 2FA from this page** QR → preview → vault write
- consented **Save backup codes** extract → review → attach

This issue (#508) remains open for the **Pilot enrollment ceremony** still missing:
- stage setup secret in extension memory after consent
- generate TOTP in Rust/WASM and fill the site verification field
- encrypt the authenticator only after Sufficient outcome evidence
- then offer recovery-code capture without HUD secret leakage

Not closing as a duplicate of #504/#505.
