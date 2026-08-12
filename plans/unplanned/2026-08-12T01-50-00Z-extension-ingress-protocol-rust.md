---
title: Move extension ingress protocol validation into portable Rust
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
started_at: 2026-08-12T01:50:00Z
agent: codex
supersedes: null
---

# Task plan

## Interpreted request

Continue the 750-line migration by separating Chrome listener registration and
browser dispatch from portable extension protocol validation. Reuse the
existing Rust session request model through the companion WASM boundary. Keep
Chrome sender identity, tabs, offscreen documents, listeners, and response
callbacks in TypeScript.

## Requirements

- Reduce the 978-line extension service worker to at most 750 lines.
- Split internal website-operation routing, extension lifecycle routing, and
  external companion routing along cohesive trust and capability boundaries.
- Expose existing portable session request validation through
  `nook-companion-wasm` and use it at the untrusted session ingress.
- Preserve Chrome listener return semantics and every response contract.
- Add behavior-focused Rust tests and targeted extension adapter tests.
- Pass focused and complete exact-head validation before squash merge.

## Constraints and exclusions

- No mobile application, mobile binding, mobile scaffold, or mobile UI work is
  included.
- Chrome sender authorization and browser lifecycle remain TypeScript owners.
- No arbitrary numbered fragments or test-only extraction is allowed.
- Heavy validation runs on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 2,400
- Owning modules, packages, or layers: companion-core session protocol,
  companion-WASM protocol adapter, extension session ingress, and background
  routing
- Public or cross-module interfaces: Add a companion-WASM validator for the
  existing Rust request model. Preserve Chrome message and response shapes.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 2,400
- Current PR slice and acceptance evidence: Extension ingress and protocol ownership; Acceptance evidence: Rust tests cover accepted and rejected wire requests, extension tests exercise the WASM-backed adapter and routing, all touched sources are below 750 lines, and focused plus complete exact-head validation passes.
- PR slices and acceptance evidence:
Extension ingress and protocol ownership; Acceptance evidence: Rust tests cover accepted and rejected wire requests, extension tests exercise the WASM-backed adapter and routing, all touched sources are below 750 lines, and focused plus complete exact-head validation passes.

## Initial plan

1. Expose the existing Rust session request validator through the tiny
   companion WASM package with direct adapter tests.
2. Replace TypeScript session-ingress structure policy with the Rust validator
   while retaining JSON transport narrowing in the adapter.
3. Extract internal website operations, extension lifecycle operations, and
   external companion operations from the service-worker entrypoint.
4. Preserve listener return values, sender checks, async response behavior,
   and error responses with focused tests.
5. Verify physical line counts, format, and pre-push hygiene.
6. Run focused hosted Rust and extension checks, then complete exact-head
   validation.
7. Resolve actionable feedback, pass readiness, squash merge, and publish the
   Workbench completion records.

## Completion evidence

- The portable Rust request model validates session ingress through typed WASM.
- Chrome and browser lifecycle remain TypeScript responsibilities.
- The service-worker entrypoint and every new or changed source file are at or
  below 750 physical lines.
- Complete exact-head validation and readiness pass on current Main.

## Safety review

- This record contains no prompt transcript, secret, private data, local path,
  or unfiltered diagnostic output.
