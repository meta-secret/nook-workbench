---
title: Derive executable scenarios from Cortex
feature: testing-quality
issue: none
plan: plans/testing-quality/20260822T175950Z-cortex-scenario-coverage.md
nook_pr: 1079
status: completed
started_at: 2026-08-22T17:59:50Z
finished_at: 2026-08-22T22:26:28Z
agent: codex
---

# Derive executable scenarios from Cortex

## Outcome

Established a bidirectional scenario-review practice: durable Cortex behavior
now drives focused Rust, WASM, and Playwright coverage, while strong existing
tests can promote reusable product knowledge back into the owning Cortex
authority. The first audit found and closed substantive coverage gaps rather
than mechanically translating prose into test cases.

## Progress

- Added scenario-review guidance to the testing architecture and product-spec
  lifecycle, with explicit ownership across Rust domain logic, Rust/WASM
  boundaries, and browser-visible journeys.
- Enriched the secure-note, credit-card, file-attachment, Devices & access,
  import, and recovery specifications with durable behavior supported by code
  and executable evidence.
- Added Rust coverage for credit-card debug redaction and whitespace-only
  secure-note rejection.
- Added Rust/WASM boundary coverage for safe card-list projections, decrypted
  detail access, typed attachment payloads, and blank secure-note rejection.
- Added Playwright journeys for secure-note lifecycle behavior, credit-card
  validation and secret handling, attachment reveal/download/size contracts,
  and imported-card list masking.
- Centralized the executable Playwright manifest and added recursive preflight
  enforcement so non-demo behavior specifications cannot silently become
  ungated.

## Implementation problems

- Existing browser-WASM tests had drifted out of compilation because error
  mapping, getter access, helper visibility, and signing fixtures no longer
  matched the current boundary. The audit repaired those tests before adding
  new assertions.
- Loading the shared Playwright JSON manifest required the current Node import
  attribute syntax; hosted execution exposed the configuration error.
- Review iterations found incomplete secret-log evidence, missing imported-card
  masking assertions, and extension gaps in the recursive manifest scanner.
- The base advanced during delivery, so the final exact head was rebased and
  revalidated against current `origin/main`.

## Decisions

- Treated Markdown as a curated source of scenario candidates, not a generator
  input. Only implemented, security-relevant, or data-loss-sensitive behavior
  became executable coverage.
- Kept portable validation and secret-projection rules in Rust and Rust/WASM;
  Playwright proves user journeys and browser-observable persistence boundaries.
- Kept UI demos separate from behavior-focused regressions.
- Made the manifest executable and shared by Playwright configurations, while
  the preflight scanner validates the complete non-demo specification set.
- Promoted behavior back into Cortex only when tests and implementation agreed
  that it was durable product knowledge.

## Validation

- Repository policy passed on run 32600774636.
- Focused preflight and native Rust passed on run 32600788841.
- Browser-WASM tests passed on run 32600788763.
- The full Playwright suite passed on run 32600789680.
- Complete exact-head validation passed on run 32600793048, including native
  Rust, WASM build and Node tests, web verification, security and formal-test
  jobs, preview deployment, and the headless demo contract.
- The final Cortex audit, session cleanup, and `task pr:ready PR=1079` passed.
- Exact-head Codex review reported no major issues and all review conversations
  were resolved.
- PR 1079 squash-merged:
  https://github.com/meta-secret/nook/pull/1079

## Remaining work

- No product or test-coverage work remains for this delivery.
- Future product changes should repeat the bidirectional scenario review rather
  than treating this audit as a one-time inventory.
- The published agent statistics record separately identifies opportunities to
  add a fast Playwright configuration-load check and reduce repeated full
  pre-push cost without weakening the final gate.
