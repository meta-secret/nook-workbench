---
title: Preserve Hive publication and compiler-cache capabilities
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-27T13:33:28Z
agent: codex
---

# Preserve Hive publication and compiler-cache capabilities

## Interpreted request

Repair the production Hive execution boundary so an isolated embedded Codex
turn can use its task-bound publication capability, and ensure trusted
verification receives the production Redis compiler-cache credential without
exposing it to untrusted work.

## Requirements

- Preserve the task-bound publication capability through the exact embedded
  Codex sandbox path.
- Keep publication unavailable to planning and non-repair tasks.
- Add a regression that exercises the real descriptor-preservation boundary,
  not only a direct Bubblewrap approximation.
- Pass the production Redis secret only to trusted verification and deployment
  paths that need remote sccache.
- Keep all remote operations behind repository Taskfile commands.
- Rebase the implementation on the latest `origin/main`.

## Constraints and exclusions

- Do not expose GitHub or Redis credentials to untrusted pull requests, logs, or
  image layers.
- Do not use Docker-in-Docker or `host.docker.internal`.
- Do not weaken Kata, Bubblewrap, seccomp, or Kubernetes isolation.
- Browser and extension E2E repair remains deferred.

## Initial plan

1. Trace the embedded Codex Linux sandbox descriptor policy and reproduce the
   failing publication command through that boundary.
2. Implement the narrow capability-preservation fix with behavior-focused Rust
   coverage.
3. Wire the production Redis secret into trusted verification through the
   existing Taskfile-owned secret path.
4. Format, publish a PR, monitor exact-head GitHub checks, resolve feedback, and
   squash-merge.
5. Deploy through the root Taskfile and verify a real Hive agent can inspect and
   publish while using remote sccache.

## Completion evidence

A green exact-head PR, successful Taskfile deployment, remote Redis cache
telemetry, and an embedded Hive command that reaches the task-bound publication
broker without a bad-file-descriptor failure.

## Safety review

This plan contains no credentials, raw logs, private data, local paths, or
prompt transcript.
