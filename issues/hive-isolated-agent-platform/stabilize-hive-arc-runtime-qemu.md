---
title: Stabilize the Hive ARC runtime with Kata QEMU
feature: hive-isolated-agent-platform
status: done
priority: high
automation: manual
owner: codex
created_at: 2026-08-22T16:58:42Z
updated_at: 2026-08-22T17:29:33Z
source_issues: []
related_prs:
  - 1076
depends_on:
  - issues/hive-isolated-agent-platform/reuse-private-arc-buildkit-state.md
---

# Stabilize the Hive ARC runtime with Kata QEMU

## Context

The dedicated Hive ARC scale set successfully completed one Dragonball job, but
fresh normal-workload repetitions lost their sandbox during Hive verification.
Kubernetes then created replacement Pods while GitHub retained the original job
session. The result looked like a slow Rust step and ultimately failed.

## Outcome

The Hive scale set uses the already-qualified Kata QEMU runtime while retaining
fresh microVMs, private BuildKit, copy-on-write storage, scale-to-zero behavior,
and capacity for ten simultaneous jobs.

## Acceptance criteria

- [x] Only the Hive ARC runtime changes from Dragonball to Kata QEMU.
- [x] Docker-in-Docker, Sysbox, shared BuildKit, and retained runners remain
      prohibited.
- [x] Static contracts and Cortex guidance describe the production fallback.
- [x] Exact-head validation and review pass.
- [x] The pull request is merged and deployed.
- [x] A fresh post-deploy Hive job completes without sandbox replacement.

## Progress

- 2026-08-22: A newly created Dragonball Hive runner lost its sandbox during
  ordinary `hive:verify`; ARC replacement could not resume the claimed GitHub
  job. This satisfies the documented QEMU fallback condition.
- 2026-08-22: PR 1076 merged at `96ed258e0f` and the exact merge was deployed.
  A fresh QEMU ARC runner completed the PR Hive job in 2m10s, including 1m39s
  for Rust verification. The exact merged Main job completed Rust verification
  in 1m04s without sandbox replacement and finished successfully.
