---
title: Restored Hive dispatch after namespace policy drift
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-a589ec0ebb370e2d3f37d13da1279c508163cb2e.md
plan: plans/hive-isolated-agent-platform/2026-08-16T19-53-00Z-restore-hive-dispatch.md
nook_pr: 1026
status: completed
started_at: 2026-08-16T19:53:00Z
finished_at: 2026-08-16T21:49:06Z
agent: codex
---

# Restored Hive dispatch after namespace policy drift

## Outcome

Restored the production Hive dispatch path and prevented k0s recovery from
removing the namespace role labels required by the isolated Neo4j network
policy. Hive automatically claimed the already-published Main failure incident.

## Progress

- Traced Main run `31933959999` through the automatic failure handoff and its
  Workbench incident.
- Restored the canonical `hive-system` and `hive-data` role labels in the live
  cluster, then restarted the dispatcher and workers.
- Replaced bare generated Namespace recovery manifests with the canonical
  labeled namespace manifest.
- Extended the migration harness to model namespace apply state and prove both
  labels survive recovery.
- Resolved all actionable review feedback and squash-merged Nook PR 1026.

## Implementation problems

- The dispatcher was crash-looping because namespace label drift caused the
  Neo4j NetworkPolicy to reject cross-namespace connections.
- The extracted recovery harness initially lacked its remote directory and its
  apply mock consumed interactive input for file-based manifests. Both harness
  gaps were corrected.
- Exact-head review found the first regression was textual rather than
  behavioral. It was replaced with a state-transition test that catches the
  production failure mode.
- Shared GitHub API quota exhaustion and stale validation-label overlap caused
  delayed or avoidable validation cycles without changing the delivered code.

## Decisions

- Preserve network isolation and restore the namespace selectors; do not weaken
  Neo4j or Hive NetworkPolicies.
- Treat the canonical Namespace manifests as the sole recovery source of truth.
- Leave the product-test incident owned by Hive; this delivery repairs dispatch
  infrastructure and does not claim the separate product failures are fixed.

## Validation

- `python3 .github/scripts/k0s-cni-migration-test.py`
- `task infra:surface:check`
- `task loom:pre-push`
- Exact-head PR run `31974068279`: success.
- Exact-head Hive run `31974047935`: success.
- `task pr:ready PR=1026`: ready with current base, successful deployment,
  required checks green, mergeable state, and zero unresolved threads.
- Nook PR 1026 squash-merged as `a93fd66be3bc7c90ee57ddd8464388273f653e1a`.

## Remaining work

- Hive continues to own and process the separate product-test incident created
  from Main run `31933959999`.
