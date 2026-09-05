---
title: Type security epoch commit completion
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-security-epoch-commit
created_at: 2026-09-05T21:57:42Z
updated_at: 2026-09-05T22:20:54Z
source_issues: []
related_prs:
  - 1405
depends_on:
  - issues/rust-action-ownership/local-keyring-signing.md
---

# Type security epoch commit completion

## Outcome

Security epoch execution has distinct prepared and committed states, so post-commit completion cannot receive a merely prepared execution value.

## Scope

One Rust file with a ceiling of 300 authored additions. Introduce the private committed execution state, move preparation, commit, completion, projection observation, decoding, and password rewrap actions to their domain/state owners, enable full-module ownership enforcement, and add bounded state-frontier tests.

## Acceptance criteria

- [x] Preparation consumes a recovery plan and returns only `PreparedSecurityEpochExecution`.
- [x] Successful persistence returns only `CommittedSecurityEpochExecution`; failed persistence aborts the prepared marker and stays `BeforeCommit`.
- [x] Completion consumes only the committed state and preserves fail-closed `AfterCommit` handling.
- [x] Existing validation order, heads installation, projection/key/outbox/marker ordering, and zeroization remain unchanged.
- [x] The module denies homeless functions without blanket suppression.
- [x] Hosted persistence checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

The private state distinction secures the local action graph but does not claim cancellation cleanup or global exactly-once execution. No public Rust export, WASM ABI, event schema, storage schema, dependency, logging, fallback, or recovery-policy change.

## Progress

PR #1405 merged as `a91f40e510eca8af2f8abe237dfd37f0bbf1bcb7` after corrected exact-head hosted validation, source SECURITY, and readiness passed.
