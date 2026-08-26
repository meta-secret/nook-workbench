---
title: Efficient review and validation delivery
status: in_progress
automation: manual
created_at: 2026-08-26T04:22:43Z
updated_at: 2026-08-26T06:39:10Z
---

# Efficient review and validation delivery

## Goal

Reduce obsolete GitHub Actions work and pathological review loops while keeping
exact-head review, validation, branch protection, and readiness fail closed.

## Current state

AI-agent statistics do not reconstruct every pull-request head. Review requests,
finding batches, validation cycles, and cancellation timing are also absent from
the durable record. Complete validation currently begins before Cloud review
stabilizes, so review-driven replacement heads can consume repeated pipelines.

## Decisions

- Repair measurement before changing delivery policy.
- Separate bounded review stabilization from complete merge validation.
- Cancel obsolete validation as soon as a pull-request head changes.
- Target 3,000 authored changed lines per pull request.
- Split near the target by logical domain responsibility.
- Use GitHub stacked pull requests only when later slices depend on lower slices.
- Keep independent slices based directly on current `main`.
- Preserve squash as one commit per pull request.
- Split the statistics slice into collector foundation and schema integration
  after the combined head exceeded the new hard ceiling.

## Issues

- [ ] [Record per-head delivery statistics](per-head-delivery-statistics.md)
- [ ] [Stabilize review before complete validation](review-first-stabilization.md)
- [ ] [Enforce active 3,000-line semantic splitting](three-thousand-line-stacks.md)

## References

- [Nook repository](https://github.com/meta-secret/nook)
- [GitHub stacked pull requests](https://docs.github.com/en/pull-requests/reference/stacked-pull-requests)
