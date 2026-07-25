---
title: "Capture and review service-provided 2FA backup codes"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-20T01:23:58Z
updated_at: 2026-07-21T07:10:17Z
source_issues: ["https://github.com/meta-secret/nook/issues/505"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:browser-2fa-enrollment"]
legacy_state_reason: "COMPLETED"
---

# Capture and review service-provided 2FA backup codes

## Imported context

This record was imported from [Nook GitHub issue #505](https://github.com/meta-secret/nook/issues/505)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #239.

## Problem

After TOTP enrollment, services often show one-time recovery codes in page text or a download. Nook can preserve encrypted backup codes on authenticator items, but it must not silently scrape settings pages or guess that arbitrary tokens are recovery codes.

## Scope

- Add an explicit user-initiated **Save backup codes** action on likely 2FA settings pages.
- Extract bounded candidate codes locally only after consent, then show every candidate for edit/select/remove before saving.
- Attach confirmed codes to the intended authenticator through typed Rust/WASM domain validation and a signed vault event.
- Support paste/manual fallback and a safe flow when the authenticator was just created from a QR.
- Never log, place in URLs, persist in extension storage, or expose through ordinary diagnostics any candidate or confirmed recovery code.
- Define replace/merge semantics and zeroize transient values on cancel, error, lock, or completion.

## Acceptance Criteria

- Rust behavior tests cover normalization, deduplication, bounds, and replace/merge policy.
- E2E proves explicit capture, review, confirmation, encrypted persistence, masked reveal, cancellation, and no false automatic save.
- Ambiguous page text requires user selection and cannot be saved without naming the target authenticator.

## Notes

Found while implementing login-time OTP fill in PR #503. Split because recovery-code capture mutates encrypted secret material and requires review/merge semantics separate from QR enrollment.

## Historical comments

No comments.
