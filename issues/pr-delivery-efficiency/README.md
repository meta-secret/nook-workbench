---
title: Efficient review and validation delivery
status: completed
automation: manual
created_at: 2026-08-26T04:22:43Z
updated_at: 2026-08-26T22:55:21Z
---

# Efficient review and validation delivery

## Goal

Reduce obsolete GitHub Actions work and pathological review loops while keeping
exact-head review, validation, branch protection, and readiness fail closed.

## Outcome

Workbench statistics now reconstruct exact delivery heads, review activity,
validation cycles, cancellation, and obsolete compute. Nook requests one
idempotent Codex review per head and base, waits within a bounded stabilization
lane, and proceeds through a circuit breaker when review is unavailable. Cursor
remains inactive. Obsolete validation is cancelled on replacement events, and
exact-head concurrency prevents an un-cancellable GitHub ghost run from
blocking later heads.

The repository also enforces a 3,000 authored-line pull-request budget with a
2,700-line planning checkpoint and semantic split or stack procedure.

## Decisions

- Measure delivery per exact pull-request head rather than squash merge commit.
- Treat review reactions as liveness only, never a blocking completion signal.
- Request Codex once per exact head and base; do not request Cursor.
- Stabilize review before complete validation, with a bounded timeout.
- Cancel obsolete validation immediately and isolate concurrency by exact head.
- Target 3,000 authored changed lines and split by logical domain near 2,700.
- Use dependent stacked pull requests only when later slices require earlier ones.
- Keep independent slices based directly on current `main`.

## Issues

- [x] [Record per-head delivery statistics](per-head-delivery-statistics.md)
- [x] [Expose manual E2E pull-request provenance](manual-e2e-provenance.md)
- [x] [Stabilize review before complete validation](review-first-stabilization.md)
- [x] [Enforce active 3,000-line semantic splitting](three-thousand-line-stacks.md)

## References

- [Nook PR 1116](https://github.com/meta-secret/nook/pull/1116)
- [Nook PR 1121](https://github.com/meta-secret/nook/pull/1121)
- [Nook PR 1118](https://github.com/meta-secret/nook/pull/1118)
- [Nook PR 1157](https://github.com/meta-secret/nook/pull/1157)
