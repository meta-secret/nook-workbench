---
title: Route trusted Main workloads through ARC
feature: hive-isolated-agent-platform
status: in_progress
priority: high
automation: manual
owner: codex
created_at: 2026-08-22T17:38:27Z
updated_at: 2026-08-22T17:38:27Z
source_issues: []
related_prs: []
depends_on:
  - issues/hive-isolated-agent-platform/reuse-private-arc-buildkit-state.md
  - issues/hive-isolated-agent-platform/stabilize-hive-arc-runtime-qemu.md
---

# Route trusted Main workloads through ARC

## Context

Production has a dispatch-ready `nook-k0s` scale set with capacity ten, but most
trusted Main jobs still hard-code `ubuntu-latest`. Exact job evidence shows web,
browser e2e, extension e2e, and UI demos running on GitHub-hosted runners. They
therefore cannot reuse the node-local private BuildKit seed or local Zot path.

## Outcome

Every trusted Main job selects the configured `NOOK_RUNS_ON` route with
`ubuntu-latest` retained only as the explicit fallback. Ephemeral QEMU isolation,
private per-job BuildKit, scale-to-zero behavior, and maximum capacity ten remain
unchanged.

## Acceptance criteria

- [ ] Every Main job uses the repository runner route with a hosted fallback.
- [ ] Workflow and manifest contracts prevent regression to hard-coded hosted
      runners.
- [ ] Formatting, focused contracts, exact-head validation, and review pass.
- [ ] The pull request is merged.
- [ ] A post-merge Main run reports `nook-k0s` labels for the formerly hosted
      lanes.

## Progress

- 2026-08-22: Main run 32584048197 reported four active product lanes on
  `ubuntu-latest` runners while ARC was idle, identifying routing rather than
  cluster capacity as the queue and cache-locality defect.
