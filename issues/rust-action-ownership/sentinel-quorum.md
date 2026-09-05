---
title: Consume Sentinel quorum and secure finalization effects
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-sentinel-quorum
created_at: 2026-09-04T23:06:00Z
updated_at: 2026-09-05T02:49:26.993Z
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

- [x] Valid quorum behavior and error precedence remain tested; rejected admission retains one usable session.
- [x] Public compile-fail probes reject premature finalization, private construction, cloning, deserialization, and capability reuse.
- [x] Every terminal failure and actual Rust-future drop resets keys, crypto, catalog, event-log session, and ceremony state; successful completion retains installed access.
- [x] Current vault type, store, policy, and requester binding are checked before key installation.
- [x] Browser rejection reflects actual inactive or retained ceremony status without synchronization or restart.
- [x] Hosted checks, SECURITY review, readiness, squash merge, and completion records pass.

## Decisions and limitations

- No generic state framework, private-key clone, persisted recovery record, rollback, automatic retry, or cancellation machinery.
- Dropping a JavaScript Promise does not prove cancellation of its Rust future.
- The quorum does not establish current roster membership or revocation freshness.
- Already persisted encrypted projection data is not rolled back on terminal failure.
- Existing browser status projections and signed wire formats remain unchanged; browser boolean status remains explicit later migration scope.
- Terminal failure intentionally replaces clone-and-retain retry behavior with a new user-started ceremony requirement.

## Progress

- 2026-09-05T01:31:03.049Z: Correction to the earlier quota report: the live review workflow explicitly does not require a Codex provider result. Quota does not block merge; all existing findings, required team verdicts, hosted checks and readiness still apply. Current PR #1355 head b2b92f663e6aa48db6d5ea27036233000a0bff68; run https://github.com/meta-secret/nook/actions/runs/33935982393. All151browser tests passed on the prior head after fixing the invalid genesis fixture; the current Result handler also passed Dylint. Remaining hosted checks are pending.

- 2026-09-05T00:55:17.775Z: Integrated main 48a5794fe536c8c45f40c80be97f9bf0df8d9b3e into PR #1355, current head 3067af614e3cd00169720f4083ea2b8d635146a3. Hosted run: https://github.com/meta-secret/nook/actions/runs/33933874906. Rendered test conventions and safe stage/error-category diagnostics are committed. The earlier asynchronous checkpoint failure still requires current hosted evidence. Required replacement-head GitHub Codex review is blocked by exhausted code-review quota; no merge or readiness is claimed.

- 2026-09-05T00:14:41.314Z: PR1355 first review correction preserves actual Rust Unlocked status after later web failure, adds three cases, and corrects fixture typing. Current0124e3445 passed SECURITY and web verification; hosted Dylint still rejects the negative-test Result handling. Pinned upstream analysis identifies consuming Result handling as the next minimal test-only correction; other checks and review are pending. New main b5ad17b99 will be integrated preserving typed versions.

- 2026-09-04: Development core completed read-only inventory and concrete binding/borrowing design. SECURITY accepted the contract with explicit effect binding, complete cleanup, and non-hydrating status refresh. Ten files; implementation has not started and depends on PR1348 delivery.

- 2026-09-04: Core and WEB implementation committed across ten files,1238additions. SECURITY passed combined2463bd13 against main5e2f75239; no local product tests ran. Hygiene requires a focused rejection demo, now recorded by superseding immutable plan489e8052292adc7e6478747472926a8535fc06d9. The demo uses the existing public reset operation to reproduce stale readiness; actual mid-effect failure and Rust-future Drop are covered by owning-boundary tests.

- 2026-09-04: Published PR1355 at1e0b174567bc1d4a28b13edd176cee6416c3588e,1374additions across eleven files. Required demo contract and pre-push hygiene passed. SECURITY refreshed PASS; hosted validation is dispatched.

## Completion

PR1355 squash-merged at 2026-09-05T02:44:53Z as `c1d423a882bf99e63ec158fc586d4dc7eedd8e6c`. Final head `7a65c23865962c49fd8ce27e1066daf3f00f82a4` passed full run33939217576, source SECURITY and readiness with no unresolved findings. [Worklog](../../worklogs/rust-action-ownership/2026-09-05T02-44-53Z-pr-1355.md).
