---
title: Authentication E2E repair blocked on required Rust worker capacity
feature: unplanned
issue: issues/hive-isolated-agent-platform/main-failure-7a46fd3883520a4d58eef0b7dac0b6ba7c7f69ec.md
plan: plans/unplanned/2026-09-04T2339-authentication-grant-authority.md
nook_pr: 1343
status: blocked
started_at: 2026-09-04T20:41:00Z
finished_at: 2026-09-04T23:42:00Z
agent: codex
---

# Work summary

## Outcome

PR [1343](https://github.com/meta-secret/nook/pull/1343) remains unmerged at head `700292aa43c811ea46b841fcef010a01750fd3ff`. Required Development Core execution failed on the account usage limit before any Rust edits. The checkout is clean. No gate was bypassed.

## Progress

- Fixed Playwright transformed-source collection, native-shaped passkey mock isolation, unsafe positive mock form actions, and stale dialog assertions.
- Added real component-to-observer-to-WASM regressions and direct importer/routing cases. Restored warm-popup assertions instead of silently reauthenticating.
- Diagnosed unpaired vault snapshots closing an unrelated extension session. The current typed TypeScript repair needs the ownership correction below before delivery.
- Removed temporary production diagnostics; retained test-harness error reporting.

## Implementation problems

- Mock credentials on a plain object allowed extension interception to mutate Object.prototype; a dedicated mock prototype fixes it.
- Positive form fixtures used GET or unknown authentication route prefixes, correctly rejected by Rust.
- Cross-origin submissions yield Rejected, not NoMatch; the regression now uses the generated enum.
- An importer test loaded a build constant before bootstrap; explicit test setup and dynamic import restore isolation.
- Review found portable absent/malformed grant classification in TypeScript and missing requested-key binding in the existing standalone Rust guard.

## Decisions

- Accepted the review ownership finding. Add one narrow Core raw-storage target classifier with absent, invalid, and authorized typed outcomes; reuse exact-key validation and expose through WASM.
- Preserve only no-matching-authority rejection without closing the independent session; invalid/revoked/import failure must remain fail-closed.
- Keep browser cleanup/rebind execution in TypeScript and move portable classification into Rust. Whole-diff stabilization found no other concrete defect.

## Validation

- Focused Svelte check, TypeScript, ESLint, formatting, and pre-push passed; 495 authored additions.
- Full browser shards passed on earlier head in run [33924712623](https://github.com/meta-secret/nook/actions/runs/33924712623).
- Focused run [33927420278](https://github.com/meta-secret/nook/actions/runs/33927420278) proved widget detection and exposed locked-session responses; cancelled after evidence capture.
- Run [33929274213](https://github.com/meta-secret/nook/actions/runs/33929274213) exposed test bootstrap/type/expectation failures corrected in the current head.
- Run [33930105820](https://github.com/meta-secret/nook/actions/runs/33930105820) is validating the current test-repair head, not the still-required Rust ownership correction. Its result cannot authorize merge.

## Remaining work

- Restore required agent capacity and implement the published Rust/WASM classifier plan with missing, malformed, valid exact, mismatched-key, and unrelated-row domain and ABI cases.
- Adapt the web consumer, refresh Security review, resolve review thread r3938550394, and acknowledge the review circuit breaker only after stabilization.
- Obtain current-base exact-head full E2E, readiness, squash merge, assigned Main verification, and final Workbench statistics.
