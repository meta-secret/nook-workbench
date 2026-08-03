---
title: Make Hive repair PR ownership reliable
feature: hive-isolated-agent-platform
status: done
priority: critical
automation: manual
owner: codex
created_at: 2026-07-28T22:31:28Z
updated_at: 2026-08-03T10:32:28Z
source_issues: []
related_prs:
  - 865
  - 872
  - 873
  - 874
  - 875
  - 876
  - 877
  - 905
  - 906
  - 907
  - 908
  - 911
depends_on:
  - issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
---

# Make Hive repair PR ownership reliable

## Context

Hive successfully diagnoses Main failures and opens repair PRs, but multiple
repairs have remained open after repository-owned browser checks failed. The
live reaper controller also reports an authorization failure while reconciling
Neo4j network policy. This breaks the platform contract that one trusted agent
owns repair through merge and completion.

## Outcome

Hive-created work is visibly identifiable and continuously owned from task
claim through a merged, verified result or a truthful terminal supersession.

## Scope

- Durable PR attribution with a stable Hive label and title convention.
- Worker prompt and lifecycle reconciliation through checks, feedback, merge,
  and completion.
- Recovery across disposable worker replacement.
- Reaper-controller authorization repair.
- Existing Hive repair PR backlog reconciliation.
- Follow-up delivery when a repair PR merged with unresolved actionable review.
- Rust and infrastructure regression coverage.
- Graceful graph-client rollout that releases in-flight worker leases before
  the coordinator socket exits.

## Acceptance criteria

- [x] Every Hive-created PR has the stable `hive` label and a `[Hive]` title.
- [x] A worker does not complete merely because it opened a PR.
- [x] Failed exact-head checks cause another repair iteration on the same PR.
- [x] Worker replacement resumes from the durable branch and PR.
- [x] Ready PRs are squash-merged and the owning task becomes completed.
- [x] The reaper controller reconciles its NetworkPolicy without authorization
      failures.
- [x] Existing Hive repair PRs have no unattended open remainder.
- [x] A merged repair with unresolved actionable review produces and owns a
      follow-up repair instead of exhausting the root retry budget.
- [x] The merged platform is deployed and verified live.
- [x] A production rollout leaves no `RUNNING` lease owned by a removed Hive
      Pod.

## Progress

- 2026-07-28: Audited seven open Hive repair PRs with failed Main-equivalent
  checks and confirmed the live reaper authorization failure.
- 2026-07-29: Merged and deployed PR #872 with schema-8 obsolete-blocker
  recovery. The coordinated drain exposed two leases still owned by removed
  worker Pods because the coordinator container exited before the worker could
  persist its interruption. The two exact orphan leases were expired and
  reclaimed on the new release; a graceful shutdown invariant is now required.
- 2026-07-29: PRs #873 and #874 repaired graceful lease release and durable
  blocked-chain retries. A production replay reached the root task but exposed
  two unresolved P1 findings on already-merged PR #865; the follow-up repair
  and merged-PR reconciliation path are now the final lifecycle work.
- 2026-07-29: PR #875 merged the review follow-up and the exact merge passed
  Main, Hive, browser, and extension verification. Production replay completed
  the historical blocker chain, then exposed a final protocol-hardening gap:
  a Main-repair completion that incorrectly sets the blocker-only `obsolete`
  flag is rejected instead of being normalized to an ordinary completion.
- 2026-07-29: PR #876 merged and deployed that normalization. The next
  production replay reached delivery verification but proved its non-thread
  feedback query is incompatible with the deployed `gh` runtime because it
  uses the newer `api --slurp` flag. Delivery verification must use portable
  paginated body extraction before the root can complete.
- 2026-07-29: PR #877 replaced the incompatible query, passed exact-head Hive,
  Rust ecosystem, and source-architecture checks, and deployed as
  `4ee8d53fc43f1cca605b03bbc3770cc140cddde9` with image digest
  `sha256:891182aeac4797cbefce3d582c0f3d8e4954b9eed5409825d9555ec87ef7a67b`.
  The production replay completed the original root on attempt 14. The queue
  has no running or ready tasks, no Hive PR remains open, and all Hive
  deployments are available with zero container restarts.
- 2026-08-02: Reopened after the long-running Workbench dispatcher exhausted
  its process budget with unreaped detached Git children. A failed Main
  incident was published successfully but remained ready because the
  dispatcher could no longer launch its synchronization operation. Production
  recovery, foreground cleanup, liveness coverage, and durable delivery proof
  are in progress.
- 2026-08-03: Completed the dispatcher repair across PRs #905 through #908 and
  #911. Foreground Git cleanup, bounded operations, health/progress probes,
  token-free public-run reconciliation, cluster-owned credential preservation,
  and portable explicit rotation are merged. Production is healthy on the
  public Zot digest with four ready workers and zero restarts; the final merge
  passed Main run 30803662302.

## Findings and decisions

- The primary marker is a GitHub `hive` label; title prefixing makes the marker
  visible in lists and notifications.
- Milestones are not used as the primary marker because they represent
  planning cadence rather than immutable execution provenance.
- Runtime-facing CLI calls are tested against the argument surface shipped in
  the production image; newer local-only flags are not assumed.

## References

- `issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md`
- `.cortex/design-docs/hive-isolated-agent-platform.md`
- `agentic-ai/minds/hive/`
- `worklogs/hive-isolated-agent-platform/2026-07-29T21-55-00Z-hive-pr-lifecycle-reliability.md`
