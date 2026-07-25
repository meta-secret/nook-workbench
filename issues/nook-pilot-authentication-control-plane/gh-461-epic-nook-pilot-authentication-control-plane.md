---
title: "Epic: Nook Pilot authentication control plane"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-17T06:28:10Z
updated_at: 2026-07-21T11:58:26Z
source_issues: ["https://github.com/meta-secret/nook/issues/461"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:auth-agent"]
legacy_state_reason: "COMPLETED"
---

# Epic: Nook Pilot authentication control plane

## Imported context

This record was imported from [Nook GitHub issue #461](https://github.com/meta-secret/nook/issues/461)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Make `nook-web-extension` feel like a trusted authentication companion (auth-agent), not a vault launcher that dumps users into Simple Vault or leaves them fighting ugly site login forms.

The extension should share nook-web primary control styling, always let the user choose whether to open the vault from the toolbar, present a universal Nook-owned auth gate on login pages, and automate safe next steps with explicit consent.

## Product Decisions

1. **Visual parity:** Extension primary CTAs must match nook-web dark/light primary tokens (neutral high-contrast buttons), not the current forest-green popup style.
2. **Optional vault open:** Authenticating/unlocking the extension must not force Simple Vault open when a vault already exists. Toolbar click always offers both “use companion” and “Open Simple Vault”, whether or not a vault/grant exists.
3. **Universal auth gate:** On detected login forms, show a Nook-owned gate UI (icon → title → description → primary action) similar to the device-protection form, so users authenticate through Nook instead of site chrome.
4. **Auth-agent:** When passkeys or credentials can be used safely, auth-agent may create a passkey or complete sign-in/sign-up after explicit policy and consent — never silent form scraping.

## Current Status

Milestone 8 complete on `main`.

- Done: visual tokens (#462), companion toolbar choice (#463), universal gate (#464), Rust-owned Pilot HUD/workflow (#506), login-associated TOTP fill (#239), mock-auth Pilot e2e (#534–#536), consented settings-page 2FA QR/backup capture (#504/#505), outcome evidence (#509 / PR #582), signup/password-change generate-password (#507 / PR #584), Pilot 2FA enrollment ceremony (#508 / PR #586), Pilot-gated passkey propose (#465 / PR #587).

## Sub-Issues

- [x] #462: Align extension primary controls with nook-web visual tokens
- [x] #463: Toolbar popup: choose Open vault vs stay as companion
- [x] #464: Universal in-page auth gate for login pages
- [x] #465: Auth-agent automatic passkey create and sign-in
- [x] #506: Rust-owned workflow model and live HUD
- [x] #239: login-associated TOTP code fill
- [x] #507: signup and password-change flight plans
- [x] #508: 2FA enrollment and recovery-code capture (Pilot ceremony; settings capture done via #504/#505)
- [x] #509: workflow evidence and cross-site compatibility harness

## Acceptance Criteria

- Extension primary buttons visually match nook-web primary controls.
- Toolbar never auto-opens Simple Vault solely because a vault/grant already exists; both open and stay options are always available after device auth.
- Login pages show a universal Nook auth gate with an explicit continue action.
- Future automatic auth-agent behavior is scoped, consented, and issue-tracked rather than implied as silent autofill.
- Domain logic (match/fill/policy) stays in Rust/WASM; content scripts only render and apply minimum fill payloads.

## References

- Related aggregate: #234
- Related design: #237
- Code: `nook-app/nook-web/nook-web-extension`
- Spec: `.cortex/product-specs/browser-extension.md`

## Nook Pilot Expansion

Nook Pilot evolves the universal gate into a minimal authentication control plane following `Observe -> Understand -> Propose -> Approve -> Act -> Verify -> Save`. The widget is the safe HUD; Rust/WASM owns workflow classification and policy; content scripts remain bounded sensors and actuators.

### Safety decisions

- Per-workflow approval, never a permanent arbitrary-site autopilot grant.
- Manual checkpoints for CAPTCHA, legal acceptance, email approval, ambiguous state, and destructive account changes.
- Verify success before durably creating or replacing credentials.
- Never expose secrets in URLs, logs, telemetry, exception text, or page-visible status.
- Preserve native browser/security-key fallback for WebAuthn.

### Expanded acceptance criteria

- The HUD shows hostname, workflow, current/total progress, one safe next action, and manual takeover.
- Login, signup, password change, passkey, TOTP, 2FA enrollment, recovery codes, and outcome verification are all represented by attached focused issues.
- Domain transitions and action policy are behavior-tested in Rust; browser tests remain targeted flow smoke coverage.

## Historical comments

### cypherkitty — 2026-07-17T06:31:07Z

Implementation PR: https://github.com/meta-secret/nook/pull/466 — covers #462, #463, #464. #465 remains future auth-agent automation.

### cypherkitty — 2026-07-19T00:22:19Z

Related feature pack: #493 under milestone **Feature: AI agent credential broker**. It covers external AI harnesses (initially Codex and Cursor) requesting consented browser login and brokered API-key use through Nook. Browser authentication reuses #237/#465; #461 remains the extension-owned universal auth-gate feature and does not become a general vault-export API.

### cypherkitty — 2026-07-21T01:01:34Z

Mock auth fixture service for Pilot e2e (PIN path, no real sites): #534.

### cypherkitty — 2026-07-21T08:17:04Z

Milestone 8 triage: refreshed checklists against main (settings 2FA capture closed via #504/#505). Remaining open sub-issues: #509, #507, #508, #465 — implementing in that dependency order.

### cypherkitty — 2026-07-21T11:58:25Z

All milestone 8 focused issues landed on main (#509/#582, #507/#584, #508/#586, #465/#587). Closing the epic.
