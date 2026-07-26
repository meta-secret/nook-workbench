---
title: Build the isolated Hive agent platform
feature: hive-isolated-agent-platform
status: in_progress
priority: high
agent: codex
pull_request: https://github.com/meta-secret/nook/pull/786
---

# Build the isolated Hive agent platform

Implement, validate, merge, and deploy the k0s/Kata/Neo4j Hive platform from
the approved feature specification. The current delivery also includes an
efficient coalesced Main train and durable, end-to-end automated repair work.

## Current delivery contract

- Pull requests remain the unit of review and validation.
- Main preserves cache writers and keeps only the newest pending revision.
- A failed Main run becomes a durable, deduplicated Hive queue item.
- One logical agent owns diagnosis through successful squash merge and green
  Main verification.
- Pod loss resumes durable branch, PR, and verification checkpoints.
- Blocking work is expressed through task dependencies and prioritized without
  losing the original task.

## Related work

- PR: https://github.com/meta-secret/nook/pull/786
- Plan: `plans/hive-isolated-agent-platform/2026-07-26T06-08-23Z-durable-main-repair-delivery.md`

