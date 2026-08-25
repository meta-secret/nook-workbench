---
title: Present app keys as protected apps
feature: devices-and-access
issue: issues/devices-and-access/independent-local-identity-keyring.md
plan: plans/devices-and-access/20260825T174412Z-passkey-app-hierarchy.md
nook_pr: 1105
status: blocked
started_at: 2026-08-25T17:44:12Z
finished_at: 2026-08-25T18:08:15Z
agent: codex
---

# Present app keys as protected apps

## Outcome

Devices & access now presents a passkey or PIN as the managed protection
object and nests each protected Nook app beneath it. Raw app-key identifiers
are internal details exposed only through Advanced. Delivery is blocked only
because required hosted validation cannot reach the compiler-cache service.

## Progress

- Replaced peer-level App key rows and graph nodes with the user-facing App
  abstraction.
- Nested each locally protected app beneath its passkey or PIN.
- Grouped apps without a local protector separately as linked to the identity,
  without claiming the local passkey protects or unlocks them.
- Moved raw app IDs behind an Advanced disclosure and removed them from the
  default relationship graph.
- Updated identity counts, English and Russian copy, generated translations,
  component tests, Playwright coverage, and the rendered UI demo.
- Updated the Devices & access product specification and added the durable
  user-facing security-abstraction rule.
- Retained the schema-1 provider snapshot atomically with the app-scoped record
  so a rollback remains readable while ambiguous ownership still fails closed.
- Replied to and resolved all four P1 review conversations after their fixes
  were pushed.

## Implementation problems

- Exact-head validation and repository-policy runs stopped at the required
  compiler-cache health check before product compilation or browser tests.

## Decisions

- Passkeys and PINs are user-managed protection objects; implementation keys
  remain subordinate internal facts.
- An app may be described as protected by a local passkey only when local
  evidence proves that relationship. Remote app membership is described as
  linked to the identity.
- The Rust, storage, and protocol model keeps the precise app-key terminology;
  only the user-facing projection uses App.
- Compatibility provider storage keeps both the current app-scoped record and
  the rollback-readable projection in one transaction.

## Validation

- Exact implementation head:
  `be2e22fe532d0fb98b9f2d91d4c0e4dbc8e87f40`.
- Base: `6e54dfbadd2b8a41090ac96bbe946d7c994781c9`.
- `task format`, `task loom:cortex-audit`, and `task loom:pre-push` passed.
- Updated unit, Playwright, browser-WASM migration, and UI demo assertions are
  included at the exact head.
- Hosted validation run 32881570128 failed before compilation at the private
  build worker's compiler-cache health check.
- Repository-policy run 32881551792 stopped at the same infrastructure boundary.
- No unresolved PR review threads remain.

## Remaining work

- Restore the private build worker's compiler-cache access and rerun exact-head
  complete validation.
- Pass `task pr:ready PR=1105`, squash-merge PR 1105, and publish completion
  records after hosted evidence is green.
