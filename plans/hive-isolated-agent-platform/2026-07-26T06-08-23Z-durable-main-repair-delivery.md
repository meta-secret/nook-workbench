---
title: Deliver failed Main repairs end to end through Hive
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-26T06:08:23Z
agent: codex
supersedes: plans/hive-isolated-agent-platform/2026-07-26T05-47-55Z-coalesce-main-and-handoff-failures.md
---

# Deliver failed Main repairs end to end through Hive

## Interpreted request

Keep the existing pull-request workflow and coalesced Main build train, but
make a failed Main revision enter Hive's own durable queue. One logical agent
must carry the repair through branch publication, pull-request validation,
review handling, squash merge, and successful Main verification. Pod loss or
blocking work must not discard progress.

## Requirements

- Preserve one active plus newest pending Main verification and the serialized
  Native Rust then WASM cache-publication order.
- Convert trusted failed Main runs into one idempotent Workbench incident and
  one Neo4j task keyed by the failed revision.
- Keep the Workbench incident as the human-visible GitOps ledger while Hive is
  the executable queue.
- Persist delivery phase, branch, pull request, verified head, blocking task,
  and resulting Main run checkpoints.
- Resume an existing delivery after a lease expires instead of creating a
  duplicate branch or pull request.
- Hold task ownership until the squash merge and resulting Main run are green.
- Serialize only base-update and merge publication; allow diagnosis and
  implementation to run in parallel.
- Promote blocker tasks and resume dependents through explicit `DEPENDS_ON`
  edges.
- Keep Neo4j credentials and publication credentials outside untrusted Codex
  tool processes behind narrow broker operations.

## Plan

1. Finish current PR security/recovery review fixes: coordinator credential
   boundary, pinned revisions, durable auth rotation, recovery completeness,
   heartbeat completion semantics, dependency artifact behavior, and safe TLS
   rollout.
2. Add a trusted Main-failure dispatcher that durably upserts the Workbench
   incident and enqueues the corresponding repair task exactly once.
3. Extend the Neo4j task model with resumable delivery checkpoints, structured
   blockers, and a short merge lock.
4. Add a narrow GitHub publication broker for branch/PR/check/review/merge
   operations; never expose its credential to Codex.
5. Drive the repair state machine through green resulting Main verification,
   with behavior tests for crash resume, duplicate events, moving Main,
   conflicts, blockers, and merge-lock release.
6. Update Taskfile-only deployment automation and operator documentation.
7. Format, push, monitor exact-head GitHub checks, address all review threads,
   squash merge, verify Main, and deploy after the required credential-copy
   confirmation.

## Safety review

- Webhook or dispatcher payloads contain identifiers and URLs, not raw logs.
- Worker processes cannot read Neo4j, Kubernetes, Codex refresh, or GitHub
  publication credentials.
- Merge publication is repository-scoped, idempotent, and guarded by exact-head
  checks.
- This record contains no secrets, private logs, or local paths.

