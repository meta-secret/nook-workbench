---
title: Explicit authentication domain outcomes
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-10T02-51-34Z-explicit-domain-outcomes.md
finished_at: 2026-09-10T02:58:47Z
agent: codex
related_prs: [1573]
---

# Outcome

Replaced five ambiguous optional authentication and authorization results with exhaustive domain outcomes, including the requested join-request API. Commits d316d137b and b03b1876226a4d7889e82e30a7bf035ae4c3df0c change twenty files with 252 insertions and 111 deletions.

- DeviceJoinStatus: Pending(JoinRequest) or NotRequested.
- CommittedVaultKeys: Opened(VaultKeys) or VaultNotCreated; private helper retains generation only when no committed DEK exists.
- AppKeyIdentityMembership: Enrolled(IdentityId) or Unenrolled.
- ProtectedSigningMaterial: Opened(SigningSeedHex) or LegacySeedRequired. Decryption and mismatched-key failures remain errors; legacy recovery and fresh-generation admission stay constrained.
- DeviceAuthorization: Granted(AuthEnvelopes) or NotGranted, including the replay accumulator.

Existing reexports, Rust/WASM consumers and fixture sources use explicit outcomes. No serialized DTO, TypeScript contract or dependency changes were needed. Standard library and private algorithmic optionals are not blanket rewritten. No generic renamed Option abstraction was introduced.

## Evidence and limitations

Source inspection, scoped worker handoff, write-only Rust formatting and clean committed state. No tests, builds, compilation, typechecks, lint, code generation, reviews or validation workflows ran. Runtime validation remains deferred. Prior broad refactor remainder is outside this bounded task.

## Delivery

- PR: https://github.com/meta-secret/nook/pull/1573
- Plan: https://github.com/meta-secret/nook-workbench/blob/2099e6e8684bba70b1fc45ef8126e4c95eee632d/plans/rust-action-ownership/2026-09-10T02-51-34Z-explicit-domain-outcomes.md
- Remaining work: user-directed validation. PR remains open and unmerged.
