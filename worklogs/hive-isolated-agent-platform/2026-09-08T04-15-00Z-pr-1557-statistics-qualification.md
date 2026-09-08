---
title: BuildKit retention delivery statistics qualification
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/retain-reusable-buildkit-layers.md
plan: plans/hive-isolated-agent-platform/2026-09-08T03-35-48Z-buildkit-cache-retention.md
nook_pr: 1557
status: completed
started_at: 2026-09-08T04:13:00Z
finished_at: 2026-09-08T04:15:00Z
agent: codex
---

# Work summary

## Outcome

Qualify the [published delivery statistics](../../stats/ai-agent/1557.yaml). The test inventory and aggregate cache telemetry were not measured. Their zero-valued fields are tool-generated placeholders, not evidence of zero tests or cache activity.

## Progress

- Published workflow timings and review history from GitHub for the merged PR.
- Preserved this explicit qualification because a refresh carrying the data-quality note failed with a GitHub TLS timeout before the original assembled record was published.

## Implementation problems

- The statistics assembler represents unavailable inventory as zeros when local discovery is disabled. Full local test discovery was prohibited for this task.
- Local command timestamps were estimated. The compact local-execution list is not a complete command inventory.

## Decisions

- Do not treat unavailable counters as measured zero values or use them for performance comparisons.
- Preserve the immutable statistics record and publish this qualification separately.

## Validation

- Hosted validation passed. Its web stage reported 791 passing tests.
- The runtime proof independently measured ten policy snapshots at 12 KiB each. That result does not depend on the unavailable aggregate telemetry.

## Remaining work

- None for the implemented cache behavior. The statistics limitations remain explicit.
