---
title: Consume Sentinel genesis issuance authority
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-genesis
created_at: 2026-09-05T01:27:54.312Z
updated_at: 2026-09-05T04:46:11.225Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/1363
depends_on:
  - issues/rust-action-ownership/sentinel-quorum.md
---

# Consume Sentinel genesis issuance authority

## Context

The domain migration must prevent a collecting genesis session from issuing new encrypted output more than once. Current finalization clones its session before issuance; the existing pending-output journal already owns completion after persistence.

## Outcome

A private collecting session consumes into a ready issuer bound to its checked signer. Issuance consumes that authority through errors and actual Rust-future cancellation. Existing journal-first completion preserves the exact previously issued output.

## Scope

- Private non-Clone, non-deserializable collecting and ready states with consuming collection, preparation, and issuance.
- Rejected admission returns the sole unchanged collecting owner.
- Preserve signed versions, validation precedence, encrypted output, and existing pending-journal representation.
- Read pending output and obtain the signer before taking the session; consume permanently once issuance begins and update the independently reported ceremony phase.
- Keep browser rendering aligned with actual Rust status, with no automatic restart or resume.

## Acceptance criteria

- [x] Domain tests and compile-fail controls prove unforgeable ownership, signer binding, rejection retention, and one-use issuance.
- [x] Actual Rust-future cancellation cannot restore issuance authority or leave a false ready status.
- [x] A persisted-but-reported-failed journal resumes exactly the same issued output; Start rejects pending output and journal-read errors propagate.
- [x] Rendered dashboard tests distinguish admission rejection, terminal consumption, and existing pending completion without automatic action.
- [x] Hosted checks, all existing review findings, SECURITY verdict, readiness, squash merge, and Workbench completion pass.

## Decisions and limitations

- One cohesive PR: eighteen authored files and two generated artifacts, estimated maximum 1,800 authored additions; hard repository limit 2,000. Simplify if the uncertain-write proof needs a general fault framework or another storage abstraction.
- No new recovery, journal schema, plaintext persistence, secret logging, generic state framework, or blanket unlock-style reset.
- Existing journal clearing occurs before final WASM result conversion. Do not claim transactional or exactly-once delivery.
- Begin implementation after the quorum slice is integrated; reuse existing domain fixtures and the invitation demo.

## Progress

- PR1363 is published at d00a5a770f09f25c1ceeba45e5404d2115c4721d. Source SECURITY and pre-push hygiene passed. The complete hosted run33942146672 is active; repository policy found untyped JavaScript values in a browser test fixture. Development core is correcting that bounded fixture while the full run completes.

## Implementation progress

Quorum PR1355 merged. Development core is implementing the consuming genesis scope. The [superseding plan](https://github.com/meta-secret/nook-workbench/blob/73935ed51c4b7fd5d2f7272d595e9aecd55152e0/plans/rust-action-ownership/2026-09-05T02-48-19Z-sentinel-genesis-integrated.md) includes the newly integrated quorum fixture as a direct test consumer: eleven Rust and three web files within the unchanged 1800-addition budget. No hosted result or completion is claimed.

## Completion-route correction

Review before publication identified that Inactive after uncertain persistence hid the only explicit completion action. The [superseding plan](https://github.com/meta-secret/nook-workbench/blob/9a944459f5e19088cde7b0cf6595d145a804092e/plans/rust-action-ownership/2026-09-05T03-13-05Z-sentinel-genesis-completion.md) appends an honest AwaitingCompletionCheck projection and reuses the existing Finalize action in both dashboards. Journal presence, absence and read failure remain distinct; no automatic completion, new journal or regenerated output. Scope is eighteen authored files and two generated key artifacts within the unchanged 1800-addition budget.

## Hosted correction progress

PR1363 current head da149972779cf71487362f82bf17ea7da18f2a3c includes latest main65901c8c. Two completed hosted runs exposed fixture typing, test lint and browser error conversion issues; these are corrected without changing production behavior. Source SECURITY and pre-push hygiene passed. Current run33943815326 is active. The obsolete CeremonyState mutable adapter was removed as a direct consequence of consuming collection:21 total files,19 authored and2 generated,1782 authored additions. No hosted runtime or compile-fail completion is claimed yet.

## Completed delivery

PR1363 squash-merged as 73965ffc87e70af6997948766a4005ef6c5907aa after current-base full run33944598463, source SECURITY and exact-head readiness. Private consuming issuance, all twelve compile-fail probes and positive control, browser lifecycle proofs and explicit dashboard completion are delivered. Existing journal and authorization limitations remain as documented. [Worklog](../../worklogs/rust-action-ownership/2026-09-05T04-42-42Z-pr-1363.md).
