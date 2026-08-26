---
title: Verify delivery efficiency rollout and isolate BuildKit incident
feature: pr-delivery-efficiency
issue: issues/pr-delivery-efficiency/README.md
nook_pr: https://github.com/meta-secret/nook/pull/1163
status: completed
started_at: 2026-08-26T23:00:00Z
finished_at: 2026-08-26T23:58:00Z
agent: codex
---

# Verify delivery efficiency rollout and isolate BuildKit incident

## Statistics conclusion

The schema-v4 Workbench sample currently contains three PRs: 1147, 1148, and 1155. Across them it records 25 delivery heads, 23 review requests, 25 validation cycles, 56 Actions runs, 16,667 Actions seconds, and 22 validation retriggers. It also records 1,668 obsolete-validation seconds and 1,876 cancelled-validation seconds.

Per PR, that is 8.33 heads, 7.67 review requests, 8.33 validations, 18.67 Actions runs, about 92.6 Actions minutes, and 7.33 retriggers. Every sampled PR had at least five validation cycles. This confirms the review/change/validation loop and substantial repeated CI cost, while the sample is still too small to generalize repository-wide or prove the separate report of more than 200 review comments.

## Delivered controls

- PR 1118: one exact-head review request, bounded review-first stabilization, no Cursor request, nonblocking eye/liveness state, three-finding-batch circuit breaker, exact-head validation concurrency, and immediate obsolete-run cancellation.
- PR 1157: approximately 3,000 changed-line budget with active semantic decomposition and dependent predecessor PR stacking.
- PRs 1116 and 1121: per-head review, validation, cancellation, and provenance metrics.
- PR 1162: one in-job retry for recognized transient BuildKit cache-export transport failures.
- PR 1163: explicit full-repository named context for preflight cache publication.

## Verification

- PR 1163 changed four lines and passed exact-head validation run `33023984099` and `task pr:ready PR=1163` with zero unresolved threads.
- Codex was requested once for head `15e1a79c7c8214e5d3cf173a3f10da159bb1538f`; it did not settle, the bounded wait timed out, and validation continued.
- Cursor was not requested. Eye/liveness did not block readiness.
- Main run `33024401056` attempt 2 passed Native Rust verification and native cache publication, proving the source-context repair.

## Remaining incident

The same Main run showed repeated BuildKit EOF/reset failures across independent jobs and across a bounded rerun. That infrastructure incident is tracked separately in `issues/pr-delivery-efficiency/shared-buildkit-transport-instability.md`. No further workflow rerun or nested-runtime workaround was attempted.
