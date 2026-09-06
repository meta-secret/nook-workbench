---
title: Amazon consumer authentication simulation completion
feature: mock-auth-pilot-e2e-coverage
issue: null
plan: plans/mock-auth-pilot-e2e-coverage/20260906T200833Z-amazon-auth-simulation.md
nook_pr: https://github.com/meta-secret/nook/pull/1471
status: completed
started_at: 2026-09-06T20:08:33Z
finished_at: 2026-09-06T22:03:26Z
agent: codex
---

# Outcome

PR #1471 added faithful Amazon consumer identifier authentication coverage without changing production behavior. The pull request was squash-merged as `d27b39c81d8b3e40f01d7710327615abacb943f4`; remote verification confirmed the authorized source head `caa395c6e177de5b4db2a3e0e9f90dcb4fcea450`, exact path-tree equivalence for all 11 changed files, and merge ancestry on `origin/main`.

# Implemented behavior

- Reproduced the observed `https://www.amazon.com/ap/signin` consumer identifier form: `ap_login_form` / `signIn`, POST to same-origin `/ax/claim`, visible `ap_email_login` email field, `autocomplete="webauthn"`, and semantic Continue.
- Included the hidden `auth-credential-autofill-hint` password field, hidden metadata, two unrelated `ue_backdetect` forms, and account/help/legal alternatives as faithful negative evidence.
- Proved in Rust and WASM that the existing generic classification admits the owned identifier step while rejecting cross-origin, GET/dialog, inert, unowned, provider, passkey, SAML, SSO, recovery, destructive, and account-management variants.
- Added a Bun-safe pure flow, exact-origin DOM simulation, fixture/catalog coverage, and one fully intercepted Chromium extension scenario.
- Kept AWS on its enterprise email-first fixture and Amazon Pharmacy on member-ID/password behavior; Amazon, Kindle, and Prime Video use the exact consumer `/ap/signin` simulation.
- Added no Amazon-specific production exception, public API, credential handling, or live provider dependency.

# Security and failure resolution

- Independent Security review passed the complete exact-head diff. The live hidden password hint has `display:none`, `visibility:hidden`, zero geometry, and no client rectangles, so the existing visibility predicate excludes it without broadening production policy.
- Static tracing removed two proposed hostile assertions that contradicted intentional generic behavior: activation semantics are accepted when scoped, and a safe selected Continue control may coexist with another semantic submit.
- The first hosted head exposed a Svelte compiler warning for the literal `autocomplete="webauthn"`. A warning-only revision preserved the exact runtime DOM value through an expression binding; direct compiler probing plus final Web and authentication logs verified the warning absent.
- The final dependency-policy attempt completed cargo-deny and RustSec successfully, then failed because the shared remote BuildKit endpoint refused its connection. A same-head infrastructure-only retry passed; no product-code change was made.

# Final validation

Exact head `caa395c6e177de5b4db2a3e0e9f90dcb4fcea450` passed:

- Repository policy run `34060342247`.
- PR validation run `34061173663`, including successful Native Rust, WASM build, WASM Node, dependency/RustSec retry, Dylint, Kani, fuzz, Proptest/Insta/Loom, Web verification, Rust coverage, focused authentication E2E, and preview/deployment.
- Authentication-sensitive Chromium ran 13 cases with no retry or flake; Amazon executed as case 8 and all 13 passed in 59.3 seconds.
- Exact-head deployment `https://pr-1471.nokey-sh.pages.dev` succeeded.
- `task pr:ready PR=1471` returned `ready: true` with no reasons in 4.4 seconds; reviews, review comments, and unresolved findings were empty. Codex current-head review could not be requested because the shared API rate limit was exhausted, and repository readiness treated the unavailable review as non-blocking.
- A later unrelated `main` advance left the PR clean and mergeable under repository policy.

# Delivery efficiency

The mission took 6,893 seconds from plan start through merge, versus 7,899 seconds for the newest schema-v4 provider-authentication baseline, PR #1463. Two delivery heads and three PR validation attempts were recorded. Workflow waste consisted of the warning-only replacement head, one BuildKit transport retry, and roughly fifteen minutes of shared runner queueing. The warning is fixed on the merged head; the infrastructure delays were shared and not attributable to the Amazon simulation, so no additional implementation or performance PR is required.

# Remaining work

None for this mission. Add another provider simulation only when a genuinely different authentication-page structure is observed.
