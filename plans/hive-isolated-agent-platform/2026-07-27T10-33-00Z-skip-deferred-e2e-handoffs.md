---
title: Skip deferred E2E-only Hive handoffs
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-27T10:33:00Z
agent: codex
---

# Skip deferred E2E-only Hive handoffs

## Interpreted request

Keep Main verification visible while preventing the autonomous Hive queue from
spending workers on browser, UI-demo, and extension E2E failures that are
explicitly deferred. Keep generated Workbench incident metadata valid.

## Requirements

- Do not weaken or skip Main checks.
- Skip Main-repair handoff only when every failed job belongs to the deferred
  E2E set.
- Continue handing off mixed or non-E2E failures.
- Generate Workbench automation metadata accepted by the current schema.
- Add focused tests for the classification and generated record.

## Constraints and exclusions

- Do not alter product tests or their conclusions.
- Do not interrupt active production repair leases.
- Do not expose credentials or raw workflow logs.

## Initial plan

1. Add focused handoff-classification and metadata regressions.
2. Implement the narrow E2E-only skip and valid incident metadata.
3. Validate, publish, and squash-merge a normal Nook PR.
4. Verify future E2E-only Main failures no longer enter the Hive queue.

## Completion evidence

A green exact-head PR with focused handoff tests and no autonomous queue item
created for an E2E-only failure fixture.

## Safety review

This plan contains no credentials, raw logs, private data, local paths, or
prompt transcript.
