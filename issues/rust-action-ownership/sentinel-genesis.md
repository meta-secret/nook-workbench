---
title: Consume Sentinel genesis issuance authority
status: ready
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-genesis
created_at: 2026-09-05T01:27:54.312Z
updated_at: 2026-09-05T01:27:54.312Z
source_issues: []
related_prs: []
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

- [ ] Domain tests and compile-fail controls prove unforgeable ownership, signer binding, rejection retention, and one-use issuance.
- [ ] Actual Rust-future cancellation cannot restore issuance authority or leave a false ready status.
- [ ] A persisted-but-reported-failed journal resumes exactly the same issued output; Start rejects pending output and journal-read errors propagate.
- [ ] Rendered dashboard tests distinguish admission rejection, terminal consumption, and existing pending completion without automatic action.
- [ ] Hosted checks, all existing review findings, SECURITY verdict, readiness, squash merge, and Workbench completion pass.

## Decisions and limitations

- One cohesive PR: thirteen files, estimated maximum 1,800 authored additions; hard repository limit 2,000. Simplify if the uncertain-write proof needs a general fault framework or another storage abstraction.
- No new recovery, journal schema, plaintext persistence, secret logging, generic state framework, or blanket unlock-style reset.
- Existing journal clearing occurs before final WASM result conversion. Do not claim transactional or exactly-once delivery.
- Begin implementation after the quorum slice is integrated; reuse existing domain fixtures and the invitation demo.

## Progress

- DEV-CORE completed the bounded inventory; SECURITY accepted the issuance and existing-journal boundary. Implementation has not started.
