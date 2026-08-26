---
title: Stabilize review before complete validation
status: completed
priority: p1
automation: manual
owner: cypherkitty
created_at: 2026-08-26T04:22:43Z
updated_at: 2026-08-26T22:55:21Z
source_issues: []
related_prs: [https://github.com/meta-secret/nook/pull/1118]
depends_on: [issues/pr-delivery-efficiency/per-head-delivery-statistics.md]
---

# Stabilize review before complete validation

## Context

Cloud review could respond while complete validation was still running.
Actionable findings then replaced the reviewed head and invalidated expensive
checks. Reactions such as eyes could also remain indefinitely and must not be
treated as completion.

## Outcome

PR 1118 merged a review-first delivery lane. It requests one idempotent Codex
review for the exact head and base, snapshots existing feedback before and after
the bounded wait, and proceeds through an acknowledged circuit breaker when
review is unavailable. Cursor stays inactive and eyes are liveness only.

Replacement pushes and base retargets cancel obsolete PR, Rust ecosystem, and
applicable research validation. Validation concurrency includes the exact head,
so an un-cancellable GitHub ghost cannot deadlock a replacement head.

## Acceptance criteria

- [x] Complete validation normally starts only after review stabilization or timeout.
- [x] Same-head validation does not duplicate a review request.
- [x] A replacement push promptly cancels obsolete validation.
- [x] Review unavailability cannot block delivery indefinitely.
- [x] Three finding batches activate comprehensive stabilization instead of another full pipeline.
- [x] Exact-head validation, readiness, squash merge, and completion records succeed.

## Evidence

- Exact implementation head: `bed427380a50dcde9d8b580e68efea0d7a3dc06b`.
- Required PR validation: Actions run `33020677167`, successful.
- Repository policy: Actions run `33020609983`, successful.
- Hive validation: Actions run `33020609966`, successful.
- Squash merge: `d2c89770919f692d2fc19f9d5c2e9b3a9d0d48ce`.
