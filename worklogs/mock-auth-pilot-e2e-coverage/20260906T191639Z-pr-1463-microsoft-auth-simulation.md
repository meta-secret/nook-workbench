---
title: Microsoft consumer authentication simulation completion
feature: mock-auth-pilot-e2e-coverage
issue: null
plan: plans/mock-auth-pilot-e2e-coverage/20260906T171504Z-microsoft-auth-simulation-superseding.md
nook_pr: https://github.com/meta-secret/nook/pull/1463
status: completed
started_at: 2026-09-06T17:05:00Z
finished_at: 2026-09-06T19:16:39Z
agent: codex
---

# Outcome

PR #1463 added faithful Microsoft consumer identifier-first authentication coverage and the portable detection boundary required by the observed `login.live.com` page. The pull request was squash-merged as `c864273e0cd29ddd14a4d6281a0706af34464426`; remote verification confirmed that the authorized source head was `bfaa2392f9be1bab32687dd54813744be05db738` and the merge result was the exact `origin/main` head at delivery time.

# Implemented behavior

- Reproduced the observed consumer Microsoft form: exact `https://login.live.com/`, one active anonymous POST form, `usernameEntry`, `autocomplete="username webauthn"`, semantic `Next`, auxiliary buttons and links, and a separate empty decoy POST form.
- Preserved the distinct enterprise fixture for `login.microsoftonline.com`; Office, Azure, Outlook, Minecraft, and Xbox continue to use that enterprise structure while the Microsoft catalog entry uses the consumer fixture.
- Added Rust-owned admission for the exact HTTPS host, effective port 443, decoded root path, same-origin source and destination, empty form identity, single semantic `Next`, exactly one explicit or strong username field, and no password, new-password, or OTP field.
- Kept WASM as a typed credential-free bridge and exercised the generated JavaScript ABI.
- Added DOM simulation, pure catalog/flow tests, fixture-matrix coverage, and one offline Chromium extension test that intercepts every `login.live.com` request and serves the local fake site without contacting Microsoft.
- Added global form-identity vetoes for provider, passkey, SAML, and SSO alternatives so they cannot fall through generic login admission.

# Security and failure resolution

- Independent Security review found that a non-default port could pass the consumer-host check. Core and WASM now require effective port 443 and reject `:8443`.
- The first hosted Rust cycle exposed a provider-identified form falling through generic login admission. Development Core added the shared alternate-auth form veto with positive and negative behavior tests.
- The second hosted cycle showed that the username-only DOM contract deliberately returns the document root rather than the active form. The simulation now asserts the document root plus exact username and `Next` ownership.
- The third hosted cycle found a Bun/Vite boundary error caused by importing a module that executes `import.meta.glob`. The pure test now imports fixture JSON directly.
- No credentials, Microsoft session data, live network dependency, or provider bypass behavior was added.

# Final validation

Exact head `bfaa2392f9be1bab32687dd54813744be05db738` passed:

- Repository policy run `34051382860`.
- PR matrix run `34051429415`: Native Rust, WASM build, WASM Node, RustSec/dependency policy, Dylint, Kani, fuzz, Proptest/Insta/Loom, Web verification, Rust coverage, focused authentication E2E, and preview/deployment all succeeded.
- Rust coverage was 92.98% against the 90% floor.
- Web verification passed the 700-test application suite and the focused Microsoft DOM and pure simulations.
- Authentication-sensitive Chromium passed 12/12 in 1.4 minutes, including `fills the Microsoft consumer identifier through semantic Next`.
- Exact-head deployment `https://pr-1463.nokey-sh.pages.dev` succeeded.
- `task pr:ready PR=1463` returned `ready: true` with no reasons, zero substantive comments, and zero unresolved threads.
- A later unrelated `main` advance did not invalidate exact-head evidence under repository policy; GitHub remained conflict-free and PR Steward confirmed merge authorization.

# Delivery efficiency

The mission took 7,899 seconds from the plan start through merge. Four delivery heads and four PR validation cycles were necessary: three successive cycles exposed distinct safety, DOM-contract, and test-runtime defects before the final green head. One obsolete run was cancelled after a replacement head existed. No actionable workflow waste or performance regression was identified, so no follow-up build-performance PR is required.

# Remaining work

None for this mission. Future provider fixtures should be added only when a genuinely different authentication-page structure is observed.
