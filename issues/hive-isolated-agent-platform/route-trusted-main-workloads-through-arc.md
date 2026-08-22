---
title: Route trusted Main workloads through ARC
feature: hive-isolated-agent-platform
status: done
priority: high
automation: manual
owner: codex
created_at: 2026-08-22T17:38:27Z
updated_at: 2026-08-22T21:53:00Z
source_issues: []
related_prs:
  - 1077
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

- [x] Every Main job uses the repository runner route with a hosted fallback.
- [x] Workflow and manifest contracts prevent regression to hard-coded hosted
      runners.
- [x] Formatting, focused contracts, exact-head validation, and review pass.
- [x] The pull request is merged.
- [x] A post-merge Main run reports `nook-k0s` labels for the formerly hosted
      lanes.

## Progress

- 2026-08-22: Main run 32584048197 reported four active product lanes on
  `ubuntu-latest` runners while ARC was idle, identifying routing rather than
  cluster capacity as the queue and cache-locality defect.
- 2026-08-22: PR 1077 opened with every explicit Main job on the configured
  runner route and a static regression contract.
- 2026-08-22: PR 1077 squash-merged as
  `2ad17a912b9781c7965dfd3b2e8878a53ecc71ad` after the complete exact-head gate,
  deployment, clean review, and readiness audit passed.
- 2026-08-22: Merged Main run 32599101656 reported `nook-k0s` on classification,
  native Rust, and every Rust ecosystem lane. ARC materialized ten simultaneous
  general-runner microVMs under repository load.
- 2026-08-22: Merged Hive run 32599101547 passed on `nook-k0s-hive`. It separated
  a 13m16s verification from an 18m21s verified-cache publication tail, which is
  now tracked independently.
