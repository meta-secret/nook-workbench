---
title: Finish Rust-owned extension API rollout repairs
feature: unplanned
issue: issues/unplanned/nook-web-typescript-api-discipline.md
plan: plans/unplanned/20260809-181000-extension-rust-web-api-rollout.md
nook_pr: 970
status: completed
started_at: 2026-08-10T06:05:59Z
finished_at: 2026-08-11T03:54:40Z
agent: codex
---

# Finish Rust-owned extension API rollout repairs

## Outcome

Merged PRs 963 and 970, closed the remaining extension ingress gaps, repaired
the Main-only backup-code race, and verified the final Main revision green.

## Progress

- Moved concrete extension session payload decoding and closed response domains
  into companion Rust/WASM.
- Kept TypeScript limited to browser lifecycle, transport ownership, DOM, and
  presentation orchestration.
- Preserved backup codes in a transport-owned copy until the asynchronous
  Chrome runtime accepted the message, then scrubbed that copy.
- Normalized the public backup-attach response to the exact strict Rust decoder
  shape while retaining the richer secret identity inside the session layer.
- Added a delayed-runtime regression test and a Playwright demo that exercises
  backup-code review, replacement, and successful persistence.
- Used canonical Rust/WASM and protocol enum members in fixtures instead of raw
  serialized lookalikes.

## Implementation problems

- PR 963 required multiple ownership passes across a large background and
  offscreen surface before every ingress path was concrete.
- The first Main run after PR 963 exposed a race that exact-head tests had not
  exercised: the caller scrubbed its code array before the asynchronous runtime
  consumed the same reference.
- The initial repair demo used extra response fields rejected by Rust types
  with `deny_unknown_fields`.
- Review then found the same mismatch in the production handler. The public
  handler now returns only `{ ok: true }` on success.
- Main advanced while PR 970 was ready. The current-base guard required a
  rebase and a fresh full exact-head validation cycle.

## Decisions

- Generic application value bags remain prohibited. A transport adapter may
  handle a generic representation only long enough to narrow it immediately.
- Public browser response types remain distinct from richer internal session
  responses.
- Complete PR validation is the default. Review comments are polled while it
  runs, and actionable feedback preempts waiting for an obsolete run.
- Do not use slow focused remote jobs when the complete pull-request workflow
  provides the required result faster.

## Validation

- PR 963 exact-head run 31449034203 passed before squash merge as
  `2fee487609e2ecfd7c66d7a4889b00fb36338bf6`.
- PR 970 final exact-head run 31454944115 passed Native Rust, WASM, Rust
  ecosystem checks, coverage, WASM Node tests, web verification, UI demos,
  full web e2e, full extension e2e, and preview deployment.
- `task pr:ready PR=970` reported `ready: true`, current base, and zero
  unresolved review conversations for head
  `01fb5ed731099332e54fdd28db0a31ec77e2d06a`.
- [Nook PR 970](https://github.com/meta-secret/nook/pull/970) squash-merged as
  `f4e198b8323b80a53cc9de2e97db20b123e12dc5`.
- Main run 31455749426 passed Native Rust, WASM, web build, UI demos, full web
  e2e, full extension e2e, and development deployment.
- Every delivery PR is merged and every review conversation is resolved.

## Remaining work

None.
