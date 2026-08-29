---
title: Complete remote-first publisher hardening
feature: pr-delivery-efficiency
issue: null
plan: plans/pr-delivery-efficiency/20260829T185625Z-complete-remote-first-publisher-hardening-within-one-pr-ceiling.md
nook_pr: https://github.com/meta-secret/nook/pull/1208
status: completed
started_at: 2026-08-29T18:56:25Z
finished_at: 2026-08-29T22:15:24Z
agent: cursor
---

# Complete remote-first publisher hardening

## Outcome

Pull request 1208 squash-merged as `e903dd22ade01f7533acf91c134eab5e58aff7ea`. Remote-first agent delivery and the hardened weekly Rust dependency publisher are on `main` at 1,980 authored lines, under the 2,000-line ceiling.

## Progress

- Kept Gizmo responsible for integration, pre-push, publication, remote validation, readiness, and merge. Ordinary workers return committed handoffs.
- Preserved isolated validation wrapper variables (`HOME`, `NOOK_VALIDATION_DOCKER`, `SCCACHE_OPTIONAL`) and fail-closed Docker network-override denial.
- Assigned indexed SRE authorities (`github-actions-only-validation.md`, `ci-operations.md`, `quality.md`) so publication and validation stay Gizmo-owned.
- Bound the weekly updater to the audit SHA, selected the ARC Buildx instance in the isolated home, froze Git exclude and index flags, and compared existing-PR reruns to their merge-base.
- Ran isolated pre-publication fuzz and Hive verify on the Hive runner, with hive-runner egress limited to DNS, BuildKit, and TCP/443.
- Left the universal multi-team admission and ordinary delegation runtime untouched.

## Implementation problems

- Loom's subprocess audit required the pinned `pushAuthenticatedBranch` AST, static `task` argv, and no dynamic spawn env or options spread.
- Preflight rejected authored `undefined` and raw string-literal vocabularies in the isolated publisher.
- Exact-head Codex review filed successive P1s on credential argv, Cargo quoting, FETCH_HEAD checkout, Buildx selection, Hive runtime/egress, and advanced-main reruns. Each batch was published with exact-head replies.
- Origin `main` moved twice (`#1218`, `#1219`) and was integrated before readiness.

## Decisions

- Local work stayed limited to focused ci-agent tests, the exact failing Loom adapter/pin tests, formatting, and `git diff --check`. Broad product validation ran only on GitHub Actions.
- Did not weaken credential isolation, fail-closed network denial, or adversarial coverage to stay under 2,000 authored lines.
- Deferred duplicate team-skill push/validate prose that was reverted to `main` solely for the ceiling. Indexed SRE authorities remain Gizmo-owned.

## Validation

- Exact published head before merge: `6540ca3121cebd1e61b217193e1f1c093ae6e64a`.
- `task pr:ready PR=1208` returned `ready: true` with zero unresolved threads.
- Hosted PR run 33277774618 passed Native Rust, WASM, WASM Node, Web, and Verify and preview.
- Repository policy and Hive verification succeeded on that head.
- Focused proof: `bun test src/test/fix.test.ts` and related ci-agent tests; Loom `only the Loom semantic adapter reaches the provider` and authenticated-push pin tests.

## Remaining work

None for this slice. A successor PR may restore deferred team-skill push/validate wording in reverted Cortex files such as `pre-push-hygiene.md` and `remote-execution.md` if those still assign publication to ordinary workers.
