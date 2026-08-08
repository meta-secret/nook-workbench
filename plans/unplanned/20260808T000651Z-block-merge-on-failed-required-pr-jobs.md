---
title: Block merge when required PR jobs failed
feature: unplanned
issue: none
started_at: 20260808T000651Z
agent: cursor
---

# Task plan

## Interpreted request

Do not treat a PR as merge-ready when a required job such as Native Rust
verification failed while Verify and preview or overall status still looks green.

## Requirements

- Verify and preview must depend on Native Rust verification.
- pr:ready must audit required jobs on the latest exact-head PR run.
- Contracts and cortex must match the harder gate.

## Constraints and exclusions

- Do not require native coverage for Verify and preview.
- Keep handoff job names aligned with the readiness audit.

## Initial plan

1. Publish this plan and branch from origin/main.
2. Wire preview needs + pr:ready job audit + tests/docs.
3. Format, push, validate, merge.

## Completion evidence

- Hosted preflight/ci-agent tests green.
- Exact-head PR validation green.
- A failed Native job on the latest head run makes pr:ready reject.

## Safety review

- No secrets or private data.
