---
title: Consume Sentinel quorum and secure finalization effects
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-quorum
created_at: 2026-09-04T23:06:00Z
updated_at: 2026-09-05T00:14:41.313Z
source_issues: []
related_prs: [1355]
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

- 2026-09-05T00:14:41.314Z: PR1355 first review correction preserves actual Rust Unlocked status after later web failure, adds three cases, and corrects fixture typing. Current0124e3445 passed SECURITY and web verification; hosted Dylint still rejects the negative-test Result handling. Pinned upstream analysis identifies consuming Result handling as the next minimal test-only correction; other checks and review are pending. New main b5ad17b99 will be integrated preserving typed versions.

- 2026-09-04: Development core completed read-only inventory and concrete binding/borrowing design. SECURITY accepted the contract with explicit effect binding, complete cleanup, and non-hydrating status refresh. Ten files; implementation has not started and depends on PR1348 delivery.

- 2026-09-04: Core and WEB implementation committed across ten files,1238additions. SECURITY passed combined2463bd13 against main5e2f75239; no local product tests ran. Hygiene requires a focused rejection demo, now recorded by superseding immutable plan489e8052292adc7e6478747472926a8535fc06d9. The demo uses the existing public reset operation to reproduce stale readiness; actual mid-effect failure and Rust-future Drop are covered by owning-boundary tests.

- 2026-09-04: Published PR1355 at1e0b174567bc1d4a28b13edd176cee6416c3588e,1374additions across eleven files. Required demo contract and pre-push hygiene passed. SECURITY refreshed PASS; hosted validation is dispatched.
