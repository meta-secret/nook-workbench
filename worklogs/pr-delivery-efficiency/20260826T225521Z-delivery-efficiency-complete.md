---
title: Complete review-first delivery efficiency rollout
feature: pr-delivery-efficiency
issue: issues/pr-delivery-efficiency/README.md
plan: plans/pr-delivery-efficiency/20260826T042243Z-three-slice-delivery-efficiency.md
nook_pr: https://github.com/meta-secret/nook/pull/1118
status: completed
started_at: 2026-08-26T04:22:43Z
finished_at: 2026-08-26T22:55:21Z
agent: codex
---

# Complete review-first delivery efficiency rollout

## Outcome

Completed the measurement, review stabilization, obsolete-run cancellation,
and pull-request size controls. The final stabilization PR passed exact-head
readiness and merged as `d2c89770919f692d2fc19f9d5c2e9b3a9d0d48ce`.

## Progress

- Merged exact per-head review and validation statistics through PRs 1116 and 1121.
- Merged the 3,000-line semantic split and stack policy through PR 1157.
- Merged review-first stabilization and obsolete-run cancellation through PR 1118.
- Closed superseded PRs 1120 and 1119 to avoid duplicate work.

## Implementation problems

- GitHub retained an old PR validation in a contradictory queued ghost state
  that neither normal nor force cancellation could remove.
- The first hosted policy pass exposed a missing explicit hosted control-plane
  exception, and preflight caught one authored `undefined` token.
- An exact concurrency-key change required updating the Linear UI-demo workflow
  contract test.

## Decisions

- Keep GitHub-hosted execution limited to checkout-free API control-plane work
  or explicitly untrusted fork jobs; trusted repository code remains on ARC.
- Include the exact head SHA in validation concurrency so ghost runs cannot
  block replacement heads.
- Keep Cursor inactive. Treat eyes as liveness only and bound Codex waiting.
- Cancel an obsolete validation immediately once a head is known to change.

## Validation

- Final head: `bed427380a50dcde9d8b580e68efea0d7a3dc06b`.
- Hosted preflight run 33020493378 passed.
- PR validation run 33020677167 passed every required lane.
- Repository policy run 33020609983 passed.
- Hive run 33020609966 passed.
- `task pr:ready PR=1118` returned `ready: true` with zero unresolved threads.

## Remaining work

No implementation work remains. Future statistics runs should be used to
compare obsolete validation seconds, validation retriggers, finding batches,
and review latency before and after this rollout.
