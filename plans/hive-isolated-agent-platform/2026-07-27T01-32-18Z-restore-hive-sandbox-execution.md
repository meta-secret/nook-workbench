---
title: Restore Hive sandbox execution and recover failed task chains
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-27T01:32:18Z
agent: codex
---

# Task plan

## Interpreted request

Complete the live Hive repair after a real agent turn revealed that its Codex
workspace sandbox cannot start, then safely resume the affected Main-repair
chain on the corrected deployment.

## Requirements

- Install the Linux sandbox dependency in the Hive runtime image.
- Preserve Kata isolation and the embedded Codex workspace-write sandbox.
- Make explicit recovery bounded per deployed Hive repair and include failed
  blocker dependencies so the parent cannot become permanently stranded.
- Validate, merge, deploy through the repository Taskfile, and prove the live
  incident advances on the repaired release.

## Constraints and exclusions

- Do not disable the Codex sandbox or weaken Kata/container security.
- Do not grant an unbounded retry loop or automatically rearm failures.
- Do not retry unrelated historical Main incidents.

## Initial plan

1. Add the missing sandbox runtime package and regression contract.
2. Version durable recovery state by Hive release and atomically rearm the
   failed dependency chain with one three-attempt budget per release.
3. Pass exact-head GitHub checks, merge, and deploy the new release.
4. Retry only the newest Main-repair and verify live progress.

## Completion evidence

- Green merged PR, healthy four-agent rollout, and durable queue evidence that
  the failed blocker chain is running without schema, model, or sandbox startup
  errors.

## Safety review

- This record contains no raw prompt, transcript, credentials, private data,
  raw logs, local paths, or unnecessary infrastructure details.
