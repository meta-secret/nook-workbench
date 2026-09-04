---
title: Consume Sentinel quorum and secure finalization effects
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-quorum
created_at: 2026-09-04T23:06:00Z
updated_at: 2026-09-04T23:06:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/sentinel-response.md
---

# Consume Sentinel quorum and secure finalization effects

## Context

The [domain migration](domain-adoption.md) requires a one-use Sentinel quorum and secure completion after installing reconstructed vault keys. Existing finalization clones its collecting session and can retain unlocked state after a later error.

## Outcome

Only an admitted quorum can finalize, exactly once. Rejected admission returns its sole unchanged collecting session. Terminal reconstruction or completion failure consumes the ceremony and resets unlocked manager state.

## Scope

- Consume collection and quorum admission on the existing session owner; add a private-field quorum retaining its checked requester identity.
- Bind final effects to the current manager vault type, store, and signed Sentinel policy.
- Guard terminal cryptography, partial key installation, asynchronous effects, and final result preparation with existing full session reset semantics.
- Read actual manager status after browser rejection without hydration or automatic restart.
- Activate ownership enforcement throughout the complete auth2 Sentinel unlock domain and migrate all consumers.

## Acceptance criteria

- [ ] Valid quorum behavior and error precedence remain tested; rejected admission retains one usable session.
- [ ] Public compile-fail probes reject premature finalization, private construction, cloning, deserialization, and capability reuse.
- [ ] Every terminal failure and actual Rust-future drop resets keys, crypto, catalog, event-log session, and ceremony state; successful completion retains installed access.
- [ ] Current vault type, store, policy, and requester binding are checked before key installation.
- [ ] Browser rejection reflects actual inactive or retained ceremony status without synchronization or restart.
- [ ] Hosted checks, SECURITY review, readiness, squash merge, and completion records pass.

## Decisions and limitations

- No generic state framework, private-key clone, persisted recovery record, rollback, automatic retry, or cancellation machinery.
- Dropping a JavaScript Promise does not prove cancellation of its Rust future.
- The quorum does not establish current roster membership or revocation freshness.
- Already persisted encrypted projection data is not rolled back on terminal failure.
- Existing browser status projections and signed wire formats remain unchanged; browser boolean status remains explicit later migration scope.
- Terminal failure intentionally replaces clone-and-retain retry behavior with a new user-started ceremony requirement.

## Progress

- 2026-09-04: Development core completed read-only inventory and concrete binding/borrowing design. SECURITY accepted the contract with explicit effect binding, complete cleanup, and non-hydrating status refresh. Ten files; implementation has not started and depends on PR1348 delivery.
