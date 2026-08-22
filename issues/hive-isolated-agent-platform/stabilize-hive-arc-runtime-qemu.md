---
title: Stabilize the Hive ARC runtime with Kata QEMU
feature: hive-isolated-agent-platform
status: in_progress
priority: high
automation: manual
owner: codex
created_at: 2026-08-22T16:58:42Z
updated_at: 2026-08-22T16:58:42Z
source_issues: []
related_prs: []
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

- [ ] Only the Hive ARC runtime changes from Dragonball to Kata QEMU.
- [ ] Docker-in-Docker, Sysbox, shared BuildKit, and retained runners remain
      prohibited.
- [ ] Static contracts and Cortex guidance describe the production fallback.
- [ ] Exact-head validation and review pass.
- [ ] The pull request is merged and deployed.
- [ ] A fresh post-deploy Hive job completes without sandbox replacement.

## Progress

- 2026-08-22: A newly created Dragonball Hive runner lost its sandbox during
  ordinary `hive:verify`; ARC replacement could not resume the claimed GitHub
  job. This satisfies the documented QEMU fallback condition.
