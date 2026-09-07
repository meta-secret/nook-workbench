---
title: Netflix consumer authentication simulation completion
feature: mock-auth-pilot-e2e-coverage
issue: null
plan: plans/mock-auth-pilot-e2e-coverage/20260907T010510Z-netflix-auth-simulation.md
nook_pr: https://github.com/meta-secret/nook/pull/1480
status: completed
started_at: 2026-09-07T01:05:10Z
finished_at: 2026-09-07T05:22:41Z
agent: codex
---

# Work summary

## Outcome

PR #1480 added a faithful simulation of the signed-out Netflix consumer login, portable Core and typed-WASM authentication-policy coverage, deterministic Web simulations, and a fully intercepted Chromium extension scenario. The pull request was squash-merged as `ff448744d4a52106aa2d61ae9e5330254f83d355`; remote verification confirmed the authorized source head `c5bcf930891510feed073bb8745fbbca2451e116`, merge ancestry on `main`, and byte-identical content for all 20 authored paths.

## Progress

- Reproduced the stable `www.netflix.com/login` structure: one POST form with no authored action; visible `userLoginId` email-or-mobile input; visible generic password input using the observed nonstandard `autocomplete="password"`; semantic Continue submit; button-type Get Help; signed-out headings, disclosure, footer, and language controls.
- Kept volatile `serverState`, generated identifiers, tracking and anti-abuse payloads, provider assets, live credentials, and locale-specific telephone data out of the repository.
- Added Core and typed-WASM coverage for the exact combined-credential observation and hostile GET, dialog, cross-origin, unsafe destination, provider, passkey, SAML, SSO, recovery, signup, destructive, unowned, inert, and ambiguous-control variants.
- Removed the unsafe label-only primary-SSO exception. Alternate-authentication labels now fail closed unless a future scoped capability provides trustworthy authority; no Netflix hostname exception was introduced.
- Added pure flow, DOM, fixture/catalog, UI-demo, and fully intercepted Chromium coverage. The browser scenario intercepts every `https://www.netflix.com/**` request, uses fake credentials, proves only the visible identifier and password change, submits only Continue, and leaves Get Help and surrounding controls untouched.
- Replaced the stale blanket-positive enterprise-SSO fixture expectation with a total 27-template contract: 26 Continue-with-Nook positives and exactly `enterprise-sso-email` as an explicit fail-closed alternate-auth shell. Dedicated DOM and Chromium tests prove no Pilot, credential fill, submission, or success.

## Implementation problems

- Hosted tests showed that the observed `autocomplete="password"` token is generic-password evidence rather than the standards-based `current-password` token. The classifier remained strict; tests now assert current `0`, generic `1`, actionable `1`, aggregate password `1`, and priority `3`.
- Initial SSO expectations exposed a real authority bug: owned label text alone could admit `Sign in with SSO`. The production exception was removed, and ordinary Continue and Sign in controls remain covered.
- Hosted policy, Clippy, and Web verification found an authored `null` comparison, a 108-line Rust test, optional-union narrowing errors, and incorrect ceremony field placement and implicit-method expectations. Each was corrected without weakening behavior.
- Full-extension validation exposed two unrelated baseline failures later fixed on `main`, plus the directly related stale enterprise-SSO positive contract. Security separated those causes; the related contract was converted to an explicit negative before final validation.
- Rapid unrelated `main` movement repeatedly invalidated exact-head readiness. Each reconciliation was conflict-free and preserved the feature blobs byte-for-byte.
- Shared ARC registry connection refusals caused infrastructure-only policy or validation failures; only repository-owned unchanged-head reruns were used.

## Decisions

- Browser-observed structure is evidence, not provider authority. Hostname, headings, disclosure copy, footer content, and auxiliary controls do not authorize credential actuation.
- Nonstandard `autocomplete="password"` remains generic-password evidence; the portable priority calculation may still recognize the combined authentication page without mislabeling the field.
- Alternate-route labels including SSO remain fail closed. Tests and catalogs must model that policy explicitly instead of restoring a label-only exception.
- Simulation catalogs use total explicit expectations so new fixtures cannot silently inherit a positive outcome.
- The two newest provider-authentication records, PRs #1474 and #1471, are the comparison baseline. Delivery time regressed because of multiple authored test-contract discoveries, fast-moving `main`, full-browser diagnostics, and transient shared infrastructure; all product findings are now covered, so no separate performance PR is required.

## Validation

- Independent Security review passed the final exact head with no findings.
- Repository policy and final standard validation passed at source head `c5bcf930891510feed073bb8745fbbca2451e116`; `task pr:ready PR=1480` returned `ready: true` with no reasons.
- Full-E2E run `34084575021` passed all 16 applicable jobs on a byte-identical feature payload: 38/38 extension tests, both browser shards, full-browser aggregation, Native Rust, WASM build and Node tests, ecosystem checks, Web verification, coverage, preview, and deployment.
- Netflix positive and enterprise-SSO fail-closed Chromium cases both passed. Web verification passed 83 files and 735 tests with zero Svelte errors or warnings.
- Final standard validation run `34085673902` and policy run `34085655842` passed on the final source head. Preview deployment succeeded at `https://pr-1480.nokey-sh.pages.dev`.
- Authored diff was 20 files, 1,161 additions and 39 deletions; every authored source file remained below 1,000 lines.
- Agent statistics were validated and published as `stats/ai-agent/1480.yaml`.

## Remaining work

None for this mission. Add another provider simulation only when a genuinely different authentication-page structure is observed.
