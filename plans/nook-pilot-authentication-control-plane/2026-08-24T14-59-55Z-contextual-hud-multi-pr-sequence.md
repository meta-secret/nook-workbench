---
title: Contextual Nook Pilot multi-PR delivery sequence
feature: nook-pilot-authentication-control-plane
issue: issues/nook-pilot-authentication-control-plane/contextual-hud-rust-wasm-policy.md
started_at: 2026-08-24T14:59:55Z
agent: codex
---

# Task plan

## Interpreted request

Replace the oversized contextual Pilot pull request with a reviewable ordered
sequence while preserving every implemented behavior and every addressed review
finding. The sequence must still deliver both user-visible outcomes: Pilot stays
absent without an actionable authentication ceremony, and eligible login pages
with zero saved matches start compact.

## Requirements

- Preserve the full implementation before reducing the existing pull request.
- Split at stable module and responsibility boundaries rather than arbitrary
  line counts.
- Keep Rust/WASM authoritative for authentication actionability and workflow
  policy.
- Keep shared web code responsible for bounded DOM observation and scoped page
  actuation.
- Keep the extension slice responsible for Pilot presentation, saved-login
  availability, and rendered browser behavior.
- Carry the complete regression inventory into the owning slice.
- Deliver each slice through exact-head review, hosted validation, and readiness
  before advancing the dependent slice.

## Constraints and exclusions

- Do not lose the current review fixes or resolve new review threads without a
  visible exact-head reply.
- Do not merge any pull request without explicit authorization.
- Do not expose login metadata or secret material to the host-page DOM.
- Do not duplicate Rust semantic policy in TypeScript.
- Do not make unrelated refactors while splitting the preserved implementation.

## Change budget and PR sequence

- Estimated authored changed lines: 7389
- Owning modules, packages, or layers: Companion Rust domain policy and WASM adapters, shared browser DOM observation and actuation, extension background, content UI, cache, and browser coverage
- Public or cross-module interfaces: Typed authentication page observations, advance-control decisions, and WASM exports consumed by shared web code
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 2700
- Current PR slice and acceptance evidence: Rust/WASM policy and typed interfaces; Acceptance evidence: domain and boundary tests
- PR slices and acceptance evidence:
1. Rust/WASM policy and typed interfaces; Acceptance evidence: domain and boundary tests
2. Shared DOM observation, scoping, and actuation; Acceptance evidence: focused browser unit tests
3. Pilot visibility and compact saved-login presentation; Acceptance evidence: extension unit, UI-demo, and Playwright scenarios

## Initial plan

1. Commit and preserve the complete reviewed implementation at one immutable
   full-work commit.
2. Create and link draft successor pull requests before reducing the current
   pull request.
3. Rewrite the current pull request to the Rust/WASM policy slice and validate
   it independently.
4. Rewrite the second pull request to the shared DOM sensor/actuator slice on
   top of the first stable interface.
5. Rewrite the third pull request to the extension presentation slice on top of
   the first two slices.
6. Address review findings and hosted validation in dependency order, without
   merging unless separately authorized.

## Completion evidence

- Workbench records map every changed file, behavior, test, and documentation
  artifact to one named slice.
- The preserved full-work commit and all three pull requests are linked.
- Each pull request has a bounded diff, coherent ownership, focused tests, and
  zero unresolved review threads at its exact head.
- The final slice proves hidden no-auth, compact zero-match, and expanded
  saved-match behavior in a rendered browser.

## Safety review

This plan is an original task interpretation. It contains no raw prompt, chat
transcript, secrets, private data, raw logs, local paths, or unnecessary
infrastructure details.
