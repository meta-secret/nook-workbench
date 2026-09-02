---
title: "Define contextual Pilot authentication actionability in Rust and WASM"
status: done
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-24T15:04:00Z
updated_at: 2026-09-02T16:44:00Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1087", "https://github.com/meta-secret/nook/pull/1096", "https://github.com/meta-secret/nook/pull/1097", "https://github.com/meta-secret/nook/pull/1202", "https://github.com/meta-secret/nook/pull/1203", "https://github.com/meta-secret/nook/pull/1204", "https://github.com/meta-secret/nook/pull/1205", "https://github.com/meta-secret/nook/pull/1206", "https://github.com/meta-secret/nook/pull/1207", "https://github.com/meta-secret/nook/pull/1209", "https://github.com/meta-secret/nook/pull/1211", "https://github.com/meta-secret/nook/pull/1212", "https://github.com/meta-secret/nook/pull/1213", "https://github.com/meta-secret/nook/pull/1214", "https://github.com/meta-secret/nook/pull/1215", "https://github.com/meta-secret/nook/pull/1216", "https://github.com/meta-secret/nook/pull/1217", "https://github.com/meta-secret/nook/pull/1218", "https://github.com/meta-secret/nook/pull/1219", "https://github.com/meta-secret/nook/pull/1221"]
depends_on: []
---

# Define contextual Pilot authentication actionability in Rust and WASM

## Context

The contextual HUD implementation grew beyond one reviewable pull request while
moving authentication actionability policy out of TypeScript. This first slice
owns the stable Rust/WASM policy interface consumed by later browser layers.

Parent feature: [Nook Pilot authentication control plane](README.md).

## Outcome

Rust classifies bounded authentication page observations and advance controls,
including scoped ownership, visibility, login and password-update evidence,
recovery exclusions, OTP progression, and destructive actions. WASM exposes the
typed decisions without adding web policy.

## Scope

- Included: companion-core authentication observations, classification,
  validation, candidate selection, page-field policy, WASM adapters, boundary
  registrations, Rust tests, and the directly owning architecture guidance.
- Excluded: DOM collection, page control activation, Pilot presentation,
  saved-login availability, and browser E2E.

## Acceptance criteria

- [x] Authentication actionability, workflow policy, and semantic approval requirement are Rust-owned and behavior-tested.
- [x] WASM adapters expose concrete typed observations and decisions.
- [x] Localized, destructive, recovery, OTP, password-only, and password-update
  cases have focused Rust regressions.
- [x] Companion-core and both changed WASM boundary checks pass.

## Progress

- 2026-08-25: PR #1087 is reduced to this slice at exact head
  `bfbc338498c248b5164b66670e0a228c16d2b633`. Repository policy and all 299
  Loom tests pass after moving downstream-only consumer registration to PR #1097.
- 2026-08-25: Exact-head review now accepts `Reset password` only with
  `new-password` evidence and rejects OTP resend/request-new-code controls.
  Rust domain tests, the WASM boundary, and Clippy pass.
- 2026-08-25: Exact-head review restored a semantic `AuthenticationApprovalRequirement`: executable actions require `explicit-user-approval`, while manual takeover carries `takeover-required`. Missing approval policy is rejected at the WASM boundary. The focused workflow suite passes 30 tests and the focused companion-WASM boundary test passes.
- 2026-08-25: Exact-head review now requires owned-form or explicit local-container scope for login-labeled controls. `AuthenticationAdvanceControlObservation` owns classification through `observation.classify()`. Fifteen focused page-classification tests, the companion-WASM boundary test, and Clippy pass.
- 2026-08-28: PR #1087 is complete at exact head `0c98fe82f9f96484617fa48bfe7f3d65e62a97a9`: current-head review is clean, the security-owner verdict is satisfied, and the focused Rust/WASM plus repository-policy checks pass. Two exact-head hosted validation attempts reproduce the shared web BuildKit health failure (`_buildx:healthy`, exit 201), so readiness and the exact-head GitHub Pages deployment remain blocked externally; PR #1087 stays open for dependent #1096/#1097.
- 2026-08-29: The oversized delivery was replaced by a remote-first stacked sequence capped below 3,000 authored changed lines per PR. PRs #1202, #1203, and #1204 merged to `main`; #1087 and #1096 were closed as superseded with coverage ledgers, while #1097 remains open until every successor merges.
- 2026-08-29: The active stack is #1218 -> #1219 -> #1205 -> #1206 -> #1207 -> #1209 -> #1211 -> #1212 -> #1213 -> #1214 -> #1215 -> #1216 -> #1217 -> #1221. Exact-head review and GitHub Actions run remotely in parallel; local validation is limited to formatting and diff sanity.
- 2026-08-29: PR #1218 head `67f6b0f4ef46a757450a7de64c0c172721f0fb2d` fixes the shared native/WASM Clippy failure and has fresh exact-head review and Actions running. Review-fixed heads for #1211 (`16894bb7f92be745c5d8527549e168e4753bcaa3`), #1212 (`772adbb0b987870267bfd342fc8fb7fcef343539`), and #1213 (`e0b03c96461e80775d8fdbc5f51cf195c76ec567`) are pushed with their addressed threads resolved.
- 2026-08-29: Review remediation is committed locally for #1214, #1215, and #1217. Upper-stack relinking paused safely during the #1214 rebase onto #1213; it must be completed before those heads are pushed. Delivery remains in progress and must merge bottom-up, retargeting and shrinking descendants after each squash merge.
- 2026-09-02: The accepted Rust/WASM policy, runtime, and execution boundaries are merged through PRs #1202-#1207 and #1209. Picker invalidation, passkey validation, and trusted observation follow-ups are merged in #1211, #1213, and #1214. The obsolete staged-enrollment successors were closed after direct-save PR #1301 merged.

## Findings and decisions

- Authentication actionability is a security and product policy boundary, not
  a TypeScript label allowlist.
- The stable consumer interface is the typed page-observation and
  advance-control decision surface exported through companion WASM.

## References

- [Superseding delivery plan](../../plans/nook-pilot-authentication-control-plane/2026-08-24T14-59-55Z-contextual-hud-multi-pr-sequence.md)
- [Nook PR #1087](https://github.com/meta-secret/nook/pull/1087)
