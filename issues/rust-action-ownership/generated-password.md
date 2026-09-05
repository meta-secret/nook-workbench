---
title: Own generated-password response decoding
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-generated-password
created_at: 2026-09-05T02:38:56Z
updated_at: 2026-09-05T04:23:09.019Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1365
depends_on:
  - issues/rust-action-ownership/website-responses.md
---

# Own generated-password response decoding

## Context

Continue the [project migration](README.md) through the remaining generated-password response boundary after website response integration.

## Outcome

The decoder belongs to GeneratedPasswordResponse, and its complete core module enforces meaningful function ownership while preserving the secret lifetime and public WASM contract.

## Scope

- Three files: companion core generated_password_response.rs and lib.rs, and companion WASM response_decoding.rs.
- Move one decoder to GeneratedPasswordResponse::from_wire and migrate its direct delegate.
- Retain two core tests and the existing runtime-message-adapter test; add at most two focused byte-preservation and serialization tests.
- Estimated 90–140 authored additions, ceiling 180.

## Acceptance criteria

- [x] Complete core module denies unowned functions and forbids invalid suppression.
- [x] Direct consumer uses the associated API with the same WASM signature and error mapping.
- [x] Nonempty password bytes, rejection reason, numeric kinds, contradictory flags, unknown-field rejection and existing Zeroize/Drop behavior are preserved.
- [x] Hosted core, WASM, runtime adapter, Dylint, source SECURITY and readiness pass before squash merge.

## Findings and decisions

This is a reported response, not an authorization or generation capability. No artificial typestate is introduced. Password validation intentionally does not trim; whitespace-only and Unicode passwords remain accepted and byte-preserved. Secret data remains moved, with no added Clone or logging. Existing Rust Drop calls Zeroize; no JavaScript erasure guarantee is claimed. Generation algorithms, entropy, strength, fill authorization, UI and TypeScript remain outside this slice. Wire success booleans and flat WASM exports remain tracked later migration work. No new dependency, fallback or recovery behavior.

## Progress

PR1365 is published at e35bd676feec6ed9c949eef220354e1750d75bf9. Three files and69 authored additions; two existing tests retained and two bounded tests added. Source SECURITY and pre-push hygiene passed. Hosted validation dispatched; no completed runtime evidence is claimed.

## Completed delivery

PR1365 squash-merged as 5521d0851039d1b14358e1c7fc814cda9e7f1aa8 after full run33943731751, source SECURITY and readiness. The typed test correction preserves every password byte case. [Worklog](../../worklogs/rust-action-ownership/2026-09-05T04-20-32Z-pr-1365.md).
