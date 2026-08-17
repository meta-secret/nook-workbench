---
title: Land Hive Sol fallback and drain obsolete queue work
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
started_at: 2026-08-17T17:31:00Z
agent: codex
---

# Land Hive Sol fallback and drain obsolete queue work

## Interpreted request

Close the Hive Codex model-alignment change that is already under review, put
that revision into the isolated worker pool, and then remove durable work that
cannot succeed so remaining repair agents can finish owned product branches.

## Requirements

- Complete exact-head readiness and squash-merge for pull request 1046.
- Roll the resulting worker image so embedded turns use Sol with a
  ChatGPT-supportable Spark fallback.
- Inspect durable execution state and cancel superseded, expired, or
  unsolvable members.
- Preserve genuine Main-repair roots and open Hive-owned product branches.
- Rearm eligible failed Main-repair chains on the new release when they still
  represent live product failures.

## Constraints and exclusions

- Do not mutate unrelated open product experiments.
- Do not wait for Codex review after repository-owned checks are green.
- Do not run heavy product builds locally.
- Do not cancel a live Hive repair that still owns an open product branch.
- Keep Workbench records free of secrets, raw logs, and local paths.

## Change budget and PR sequence

- Estimated authored changed lines: 260
- Owning modules, packages, or layers: Hive worker Codex fallback, Hive queue operator Taskfile, and Kubernetes worker defaults.
- Public or cross-module interfaces: Hive queue cancel CLI and Taskfile-owned operator cancel path; no product vault API change.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 260
- Current PR slice and acceptance evidence: Pin Sol plus Spark fallback and operator cancel; Acceptance evidence: exact-head Hive and PR checks, squash merge, deployed image, and a contracted durable queue
- PR slices and acceptance evidence: Pin Sol plus Spark fallback and operator cancel; Acceptance evidence: exact-head Hive and PR checks, squash merge, deployed image, and a contracted durable queue

## Initial plan

1. Confirm pull request 1046 is current, green, and free of unresolved threads.
2. Squash-merge after the exact-head readiness audit.
3. Roll the merged worker image onto the isolated cluster.
4. Cancel expired rate-limit, credential, and host-access blockers.
5. Retry genuine failed Main-repair roots on the new release and monitor remaining Hive product branches.

## Completion evidence

- Pull request 1046 is squash-merged.
- Isolated workers run the merged image with Sol defaults and Spark fallback.
- Superseded durable members are cancelled and remaining work is live repairs.
- Open Hive product branches are either progressing or explicitly preserved.

## Safety review

This plan contains no prompt transcript, credentials, private data, raw logs,
local paths, or unnecessary infrastructure detail.
