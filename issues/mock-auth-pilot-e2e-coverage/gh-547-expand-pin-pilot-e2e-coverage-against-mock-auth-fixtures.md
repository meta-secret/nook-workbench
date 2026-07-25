---
title: "Expand PIN Pilot e2e coverage against mock-auth fixtures"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-21T02:47:34Z
updated_at: 2026-07-21T03:32:09Z
source_issues: ["https://github.com/meta-secret/nook/issues/547"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent","feature:mock-auth-pilot-e2e"]
legacy_state_reason: "COMPLETED"
---

# Expand PIN Pilot e2e coverage against mock-auth fixtures

## Imported context

This record was imported from [Nook GitHub issue #547](https://github.com/meta-secret/nook/issues/547)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Expand Chromium extension e2e coverage for Nook Pilot against the local mock-auth SPA, using the PIN-initialized device path that CI can drive without real passkeys.

Parent of the closed happy-path pack (#534 / #535 / #536). Complements the broader evidence harness in #509; does **not** replace signup (#507), 2FA enrollment (#508), or iframe/redirect evidence work still tracked there.

## Current Status

- Done: plain login → success; login → TOTP → success (`mock-auth-pilot.spec.ts`); detection HUD + passkey chooser/OTP in smoke.
- This pack: PIN chooser, no-match / empty 2FA, quirk fill-to-success, wrong-password evidence, lock mid-flow + unlock resume, multi-authenticator chooser, and success-page evidence beyond `__nookLoginSubmitted`.

## Sub-Issues

- [ ] #548: PIN multi-login chooser + no-match + empty 2FA
- [ ] #549: Quirk page fill-to-success (SPA, hidden header, combined)
- [ ] #550: Wrong-password evidence, lock mid-flow, multi-2FA chooser

## Product Decisions

- Prefer the PIN force-path helpers for new cases (scriptable in CI).
- Keep `/login` detection pages non-navigating for existing smoke submit-hook asserts; make quirk pages credential-aware and navigate to `/plain/success` for evidence.
- Add a first-class extension session lock message so lock mid-flow is testable without waiting for the 15-minute session timer.

## Open Questions

- None for this pack. Iframe / redirect / ambiguous-success fixtures remain under #509.

## Acceptance Criteria

- [ ] New PIN Pilot e2e specs cover chooser, no-match, empty 2FA, SPA + hidden-header + combined fill-to-success, wrong password (no false completion), lock→unlock→continue, and multi-authenticator chooser.
- [ ] `task extension:test:e2e` stays green.
- [ ] Sub-issues closed with the shipping PR.

## Related

- Epic #461, evidence harness #509, closed mock-auth pack #534



## Historical comments

### cypherkitty — 2026-07-21T02:51:33Z

Implementation PR opened: will link once created.

### cypherkitty — 2026-07-21T02:51:38Z

Implementation: https://github.com/meta-secret/nook/pull/551
