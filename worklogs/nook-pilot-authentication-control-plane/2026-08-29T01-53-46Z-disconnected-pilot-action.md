---
title: "Restore the disconnected Nook Pilot action"
feature: nook-pilot-authentication-control-plane
issue: issues/nook-pilot-authentication-control-plane/contextual-hud-extension-presentation.md
plan: plans/nook-pilot-authentication-control-plane/20260829T005311Z-restore-reliable-locked-pilot-action.md
nook_pr: "https://github.com/meta-secret/nook/pull/1194"
status: completed
started_at: 2026-08-29T00:53:11Z
finished_at: 2026-08-29T01:53:46Z
agent: codex
---

# Restore the disconnected Nook Pilot action

## Outcome

Nook PR #1194 merged. When Continue with Nook finds no usable password-filling grant, the authorized background path now opens the trusted extension pairing surface instead of returning an unavailable response with no visible action.

## Progress

- Traced the inert action from the in-page Pilot through `nook:website-login-options` to the background grant lookup.
- Opened the popup with the explicit pair intent so both disconnected browsers and previously paired browsers missing the password-filling scope receive an actionable connection surface.
- Added isolated service-worker regression coverage and a browser-level disconnected Pilot demo.
- Integrated two current-main advances and repeated exact-head review and validation after each transition.

## Implementation problems

- The original unavailable response updated only explanatory copy, leaving the primary action apparently inert. The correction launches the extension-owned pairing UI only after sender authorization succeeds.
- Initial review found that the default popup intent could hide pairing for an already connected browser lacking the required scope. The final implementation uses the pair intent.
- One duplicate standalone web E2E run failed an unrelated mobile shell viewport assertion after 156 tests passed; a separate exact-head standalone web E2E run and the authoritative PR validation passed.
- A stale generated Codex review-summary status comment was misclassified as substantive feedback. The replaceable bot summary comment was removed; the exact-head clean review comment and zero-thread state remain visible.

## Decisions

- Keep vault setup in the trusted extension popup and keep vault metadata out of the host-page DOM.
- Preserve forbidden-origin responses without launching any surface.
- Treat the focused PR validation and readiness audit as the merge authority; do not broaden this correction into the still-active presentation PR #1097.

## Validation

- `task loom:pre-push` passed on exact head `7b225750594ebb495ce7c6be7ac897f8d8b9622a`.
- Extension checks passed 204 tests with 462 assertions, lint, TypeScript, and zero Svelte diagnostics.
- The five-scenario Nook Pilot UI demo passed locally; the exact disconnected pairing scenario also passed after a fresh extension build.
- Exact-head Codex review settled clean with zero unresolved threads.
- Remote web E2E run 33226945648 passed.
- PR run 33227184442 passed native Rust, WASM, Node, web verification, Rust ecosystem checks, the headless UI demo, coverage, and verified preview deployment.
- `task pr:ready PR=1194` reported ready with exact-head deployment success.
- PR #1194 merged as `56b531bbe52803bf8d40c88651db371c2e485a82`, now at `origin/main`.

## Remaining work

- The broader contextual Pilot presentation issue and PR #1097 remain in progress independently; no additional work remains for this disconnected-action correction.
