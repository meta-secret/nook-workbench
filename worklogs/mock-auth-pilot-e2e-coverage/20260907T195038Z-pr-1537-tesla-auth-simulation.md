---
title: Tesla email authentication simulation completion
feature: mock-auth-pilot-e2e-coverage
issue: null
plan: plans/mock-auth-pilot-e2e-coverage/20260907T181011Z-tesla-inert-planning-superseding.md
nook_pr: https://github.com/meta-secret/nook/pull/1537
status: completed
started_at: 2026-09-07T17:16:00Z
finished_at: 2026-09-07T19:44:58Z
agent: codex
---

# Work summary

## Outcome

PR #1537 added faithful deterministic coverage for Tesla's signed-out email-first authentication page and the narrow portable authority needed to detect its initially disabled Next control without granting actuation authority prematurely. The pull request was squash-merged as `9ee0a69d0376eaad4f82187812966cefe5faf9d5`; remote verification confirmed authorized source head `2e67ac22a1631f22970d6045e25dc53e37bd4bf2`, merge ancestry on `main`, remote branch deletion, and byte-identical content for every delivered feature path.

## Progress

- Observed Tesla read-only in Firefox from `https://www.tesla.com/` through the Account link to `auth.tesla.com/oauth2/v1/authorize`. No identifier was entered and nothing was submitted.
- Reproduced stable structure only: Sign In, one `identity` Email field with `autocomplete="email webauthn"`, initially disabled Next, recovery, Create Account, language, and footer alternatives. Volatile OAuth query values, hCaptcha state, generated identifiers, cookies, tokens, and telemetry were excluded.
- Added typed Core `WebAuthnEmail` evidence requiring exact email plus WebAuthn autocomplete tokens, with explicit-username precedence and negative-email rejection.
- Added a bounded Core planning exception for an owned, identifier-only, omitted-action GET form on a canonical same-origin versioned OAuth authorization route. Initial inert evidence may classify the page, but direct actuation remains false until a fresh actionable observation passes the unchanged safety entry point.
- Kept provider, passkey, signup, recovery, destructive, generic-email, cross-origin, authored-action, ambiguous, locally scoped, password-bearing, OTP-bearing, and alternative-label structures fail closed.
- Updated Web observation transport to retain bounded one-username GET facts and count disabled semantic submitters structurally, while final actuation remains actionable-only and Core-owned.
- Added Core/WASM behavior coverage, exact DOM simulation, fixture/catalog/flow/presentation coverage, UI demo, rescan regressions, and one fully intercepted Chromium scenario using only a fake email. All Tesla authentication requests were locally fulfilled and hCaptcha/provider traffic was forbidden.

## Implementation problems

- Exact DOM reproduction revealed that Tesla's Next control is initially disabled. The initial plan was superseded so Core could distinguish planning evidence from direct actuation authority.
- The first hosted WASM and Dylint jobs found a missing sibling import for `PageControlSubmissionMethod`; one import-only repair fixed both shared compilation paths.
- Native Rust then exposed two deeper gates: the exact Next label was not admitted after the OAuth predicate, and semantic-ceremony detection still required lexical login identity. One reusable exact WebAuthn-email OAuth identifier predicate now owns both decisions.
- Web verification showed that transport initially discarded inert controls, then that structural submit counting excluded the disabled Next control. Transport now carries bounded facts and structural counting includes inert semantic submits without changing actionable-only activation.
- Hosted tests caught stale fixture-count and newsletter-email expectations. Tesla is the thirtieth template, while `newsletter-email` intentionally remains `Absent` rather than gaining generic authority.
- Hosted static checking caught TypeScript union narrowing in the GET-to-POST rescan regression. Stable guarded locals preserve the same safety assertions.
- Repeated unrelated `main` movement required conflict-free rebases; every rebase preserved Tesla feature-path blobs byte-for-byte.

## Decisions

- Core remains the sole authentication policy owner; WASM is a typed bridge and Web transports observed facts.
- `email webauthn` is portable evidence, not Tesla hostname authority. OAuth recognition is bounded to a canonical same-origin `/oauth2/v<1-3 digits>/authorize` path and ignores volatile query values.
- An inert control may support page planning only for the complete exact structure. It is never activated from stale or inert evidence; fake input must enable Next and a refreshed observation must independently pass safety.
- Disabled semantic submitters count toward structural ambiguity, while final actuation counts only actionable controls. Mixed actionable and disabled submitters therefore fail closed in planning.
- Exactly one intercepted browser scenario is sufficient because domain policy, typed ABI, DOM transitions, hostile structures, fixture flow, and transport rescans are already covered at lower layers.
- Final scope is 24 files, 1,499 additions and 45 deletions, below the 1,500-line review warning. Every changed authored source file is at or below 1,000 lines.

## Validation

- Independent Security review passed the final patch-equivalent exact head with no findings, including typed evidence, OAuth routing, inert-planning versus refreshed-actuation, structural counting, fake credentials, and zero live-provider traffic.
- Final standard validation [run 34155927899](https://github.com/meta-secret/nook/actions/runs/34155927899) and repository policy [run 34155904145](https://github.com/meta-secret/nook/actions/runs/34155904145) succeeded on source head `2e67ac22a1631f22970d6045e25dc53e37bd4bf2`.
- Native Rust, WASM build, WASM Node tests, Web verification, Rust ecosystem checks, coverage, preview, and deployment all passed. Web verification passed 86 files and 779 tests.
- The required authentication-sensitive extension job `101849116917` executed 17 Chromium-extension tests and passed all 17 in 2m58s, including `fills Tesla Email and activates only Next`.
- Preview deployment succeeded at `https://pr-1537.nokey-sh.pages.dev`. `task pr:ready PR=1537` returned `ready: true` with no reasons, zero findings, and zero unresolved threads.
- PR #1537 merged at 2026-09-07T19:44:58Z. The remote feature branch is absent and all delivered feature-path blobs match between source head and squash commit.
- Loom assembled, validated, and published schema-v4 statistics at `stats/ai-agent/1537.yaml`.

## Remaining work

None for this mission. Future simulation fixtures should be added only when a genuinely different authentication-page structure is discovered.
