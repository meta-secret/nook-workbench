---
title: "Mock auth fixture service for extension Pilot e2e"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-21T01:01:24Z
updated_at: 2026-07-21T01:47:18Z
source_issues: ["https://github.com/meta-secret/nook/issues/534"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Mock auth fixture service for extension Pilot e2e

## Imported context

This record was imported from [Nook GitHub issue #534](https://github.com/meta-secret/nook/issues/534)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #461. Specializes #509 for a **local mock authentication service** so extension Pilot e2e does not depend on real third-party sites.

## Goal

Ship a reusable mock auth HTTP service with multiple site-like quirks, and drive Nook Pilot e2e against it with a **PIN-initialized** extension device (no WebAuthn/passkey in the test path).

## Product decisions

1. **No real-site dependency.** Compatibility and fill flows run against local fixtures only.
2. **PIN for e2e device protection.** Tests force passkey unavailability and use the existing PIN setup/unlock path (`device-protection-pin-*`), matching Brave bootstrap.
3. **Scenario registry.** Each quirk is a named route/family (plain login, login→2FA, hidden header password, SPA multi-step, etc.).
4. **Evidence first.** Mock pages expose deterministic success/error outcomes so Pilot verify steps can be asserted without scraping production.

## Sub-issues

- [ ] #535: Extract mock auth HTTP service with plain login and login→2FA scenarios
- [ ] #536: PIN-initialized Pilot e2e against mock auth (plain + 2FA)

## Acceptance criteria

- Extension e2e can complete Continue with Nook on mock plain login without touching the public internet.
- Extension e2e can complete a chained login→2FA flow via Pilot with a vault authenticator, using PIN device setup only.
- Fixture credentials and TOTP seeds are test-only and never treated as production secrets.
- Existing smoke detection routes either move into the mock service or remain thin wrappers over it.

## References

- Spec: `.cortex/product-specs/browser-extension.md`
- Related: #509, #239, #241
- Code: `nook-app/nook-web/nook-web-extension/e2e`

## Historical comments

### cypherkitty — 2026-07-21T01:47:17Z

Shipped in #537 (service #535, PIN Pilot e2e #536). Parent feature pack complete for plain login + login→2FA mock auth Pilot coverage.
