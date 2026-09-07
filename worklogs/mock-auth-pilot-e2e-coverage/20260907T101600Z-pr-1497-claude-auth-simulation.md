---
title: Claude email authentication simulation completion
feature: mock-auth-pilot-e2e-coverage
issue: null
plan: plans/mock-auth-pilot-e2e-coverage/20260907T075524Z-claude-auth-simulation-superseding.md
nook_pr: https://github.com/meta-secret/nook/pull/1497
status: completed
started_at: 2026-09-07T05:40:16Z
finished_at: 2026-09-07T10:16:00Z
agent: codex
---

# Work summary

## Outcome

PR #1497 added a faithful simulation of the signed-out Claude email-first login, portable Core and typed-WASM authentication-policy coverage, deterministic Web simulations, and one fully intercepted Chromium extension scenario. The pull request was squash-merged as `b702bebf7842d3cf354df0cd8f5be1600a988fef`; remote verification confirmed the authorized source head `f531257ea66f9e4ba240403af2bc513ae4e4fb09`, merge ancestry on `main`, and byte-identical content for all 30 delivered paths.

## Progress

- Observed `https://claude.ai/login` read-only in Firefox and reproduced only stable signed-out semantics: `Sign in - Claude`, Continue with Google, the Email field, Continue with email, Continue with SSO, and surrounding disclosure content.
- Kept volatile provider markup, generated identifiers, telemetry, anti-abuse data, cookies, tokens, and live credentials out of the repository.
- Added the typed `PageControlSubmissionDestinationSource` contract across Core, WASM, and Web. Identifier-only GET progression is allowed only when the selected owned control has an explicitly authored destination; omitted and unsafe destinations fail closed.
- Made submit ownership structural: submitter `formaction` takes precedence over form `action`, unowned or ambiguous controls fail closed, and multiple semantic submits are rejected while OTP and passkey flows remain preserved.
- Added pure-flow, exact-origin DOM, catalog, UI-demo, presentation-state, Core/WASM, and fully intercepted Chromium coverage. The browser scenario intercepts every `https://claude.ai/**` request, uses fake credentials, submits only Continue with email, and leaves Google and SSO alternatives untouched.
- Kept the simulation catalog total and explicit at 28 templates: 27 positive expectations and `enterprise-sso-email` explicitly fail closed.

## Implementation problems

- Initial fixtures used unowned free functions and primitive sentinel states. Security rejected those boundaries; meaningful fixture and scenario owners plus enums and discriminated unions replaced them.
- Hosted validation exposed the generic destination-authorship gap. A typed authored-or-omitted fact was added without a compatibility default, and Core now makes the authorization decision.
- The OpenAI fixture exposed multi-form ambiguity: social controls belonged to a separate social form while the email continuation belonged to the identifier form. Observation selection now accounts for every safe and unsafe alternative while preserving form ownership.
- Component-local runtime state was not covered by compiled typed-flow tests. `ClaudeAuthPresentationState` moved to the flow module and is exercised directly.
- The first post-merge Main run was cancelled when a newer `main` commit superseded it before jobs started. Inspection found no failed job; verification followed the newer run whose head contains the Claude squash.

## Decisions

- Provider appearance and hostname remain evidence, not authority. Core owns classification and actuation policy; WASM transports typed facts and Web observes page structure.
- Destination authorship is a required public observation fact. Missing authorship does not silently deserialize as safe.
- Provider alternatives such as Google and SSO are accounted for but never selected by Nook's email continuation.
- One intercepted provider scenario is sufficient after portable Core/WASM and deterministic DOM coverage; additional browser scenarios should represent genuinely different executable behavior.
- Final scope was 30 files, 1,310 additions and 49 deletions, below the 1,500-line review warning and 2,000-line stop threshold. The superseding plan remained materially accurate.

## Validation

- Independent Security review passed exact source head `f531257ea66f9e4ba240403af2bc513ae4e4fb09` against validation base `e053af208be9074fa168a9c0047afe5e9d1de740` with no remaining findings.
- Exact-head PR validation run `34106146741` succeeded: 19 checks passed and the globally disabled Headless UI demo job was explicitly skipped.
- Web verification passed 84 files and 751 tests with zero Svelte errors and warnings. The Claude DOM suite passed 13/13.
- Authentication-sensitive extension E2E passed 14 tests with two Playwright-retried unrelated flakes. Full extension E2E passed 39/39, including the Claude provider scenario; both full browser shards passed.
- Native Rust, WASM artifact and Node tests, Kani, RustSec, fuzz, Dylint, Proptest/Insta/Loom, coverage, verification, preview, and deployment all passed.
- Repository policy run `34105855915` succeeded. `task pr:ready PR=1497` returned `ready: true` with no reasons.
- Preview deployment `6305994000` succeeded at `https://pr-1497.nokey-sh.pages.dev` with unified, simple, sentinel, and extension-package outputs.
- PR #1497 merged at 2026-09-07T09:51:00Z. All 30 delivered path blobs match between the source head and squash commit.
- Agent statistics were schema-validated for publication as `stats/ai-agent/1497.yaml`.

## Remaining work

None for this mission. Add another provider simulation only when a genuinely different authentication-page structure is observed.
