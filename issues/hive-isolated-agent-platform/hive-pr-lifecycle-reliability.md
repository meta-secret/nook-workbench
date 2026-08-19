---
title: Make Hive repair PR ownership reliable
feature: hive-isolated-agent-platform
status: done
priority: critical
automation: manual
owner: codex
created_at: 2026-07-28T22:31:28Z
updated_at: 2026-08-19T01:20:00Z
source_issues: []
related_prs:
  - 1050
  - 1027
  - 1048
  - 1055
  - 1046
  - 1041
  - 1037
  - 1038
  - 1036
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
- Terminal-pod-aware graph-client drain and bounded ready-pool convergence.

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
- [x] Terminal `Evicted` pod records cannot block a completed graph-client
      drain.
- [x] Normal disposable-worker replacement cannot race a one-shot post-rollout
      ready-replica assertion.

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
- 2026-08-17: Reopened after live monitoring found recursive blocker
  amplification. Prerequisite workers repeatedly requested new credential,
  infrastructure-access, and toolchain prerequisites that their descendants
  could not obtain. The four-worker pool remained busy while real Main repairs
  accumulated expired leases and blocked pull requests. A bounded
  dependency-depth repair is in progress under plan
  `plans/hive-isolated-agent-platform/20260817T003635Z-bound-hive-blocker-amplification.md`.
- 2026-08-17: PR #1036 merged and deployed the schema-9 bounded dependency
  repair. Live monitoring showed no post-deploy task creation while legacy
  blocker leaves drained to truthful failures. The deploy itself exposed two
  operational convergence defects: terminal `Evicted` pod records blocked the
  graph-client drain, and a one-shot ready count raced expected worker
  replacement. Follow-up hardening is in progress under plan
  `plans/hive-isolated-agent-platform/20260817T030835Z-harden-hive-deploy-convergence.md`.
- 2026-08-17: PR #1038 restored Cargo and rustfmt in worker login shells and
  added behavior-first production-stage verification. The exact merged image
  was deployed and passed live login-shell plus Kata/Bubblewrap diagnostics.
  Eligible historical Main-repair roots were rearmed on the fixed release;
  remaining Hive product PRs continue under their durable worker owners.
- 2026-08-17: PR #1037 completed deploy convergence hardening. The drain now
  ignores only terminal pod records, terminating graph clients remain
  fail-closed, and readiness requires repeated samples of four non-terminating
  ready workers. The merged image deployed on the first attempt, survived a
  forced disposable-worker replacement, and remained at four ready workers
  with zero restarts. Repeated queue snapshots contained no active work and no
  new task creation, so this lifecycle reliability incident is complete.
- 2026-08-17: PR #1041 raised the host-network Traefik registry edge from
  256 MiB to 2 GiB after production OOM evidence. Exact-head validation, Hive
  verification, and readiness passed; the merged Compose contract was deployed
  with Traefik healthy at 2 GiB and zero restarts. The latest durable queue
  snapshot is terminal on embedded Codex usage exhaustion until August 20.
  Eight Hive PRs remain open, so the incident is not complete.
- 2026-08-17: The final audit restored missing `hive` ownership labels on
  PRs #1029 and #1034, then removed one exact stale
  `ContainerStatusUnknown` rollout pod. All four workers, the observer, reaper,
  and Workbench dispatcher remained fully available afterward.
- 2026-08-18: PR #1050 squash-merged the unique password-recovery and paired-extension unlock repair after exact-head Main-equivalent browser and extension suites passed. Superseded Hive product pull requests 1028, 1031, 1033, 1034, 1039, 1040, and 1051 were closed. Isolated Main-repair workers were not rearmed. Pull requests 1027, 1048, and 913 remain open by explicit instruction, so the unattended-remainder criterion is still incomplete.
- 2026-08-19: PR #1027 squash-merged the unique BuildKit frontend retry after exact-head Main-equivalent browser and extension suites passed. Hive PR #1055 was closed because current main already had the ownership-guard phrases. Experiment PR #913 was closed as superseded by Identity Bridge on main. No Hive-labeled pull request remains open. Isolated Main-repair workers were not rearmed. Sequential Rust crate cache-layer PR #1048 remains the last non-Hive remainder.
- 2026-08-19: PR #1048 squash-merged sequential Rust crate BuildKit cache layers without reverting vault unlock. Default-branch Main run 32203115093 succeeded on 977554b6d8409c81b9cd8b187130d2e4ec3a9e33. No Nook pull request remains open. Isolated Main-repair workers were not rearmed. This remainder close-out is complete.
- 2026-08-17: PR #1046 aligned live Hive workers to Sol with a ChatGPT-supportable Spark fallback and added operator queue cancel. The merged image was deployed; superseded durable blockers were cancelled. Three live members were running afterward, including the newest Main repairs and the open pull request 1039 child. Remaining Hive product pull requests continue under worker ownership.

## Findings and decisions

- The primary marker is a GitHub `hive` label; title prefixing makes the marker
  visible in lists and notifications.
- Milestones are not used as the primary marker because they represent
  planning cadence rather than immutable execution provenance.
- Runtime-facing CLI calls are tested against the argument surface shipped in
  the production image; newer local-only flags are not assumed.
- Embedded Codex keeps its login-shell execution contract. The worker image
  must configure required toolchain paths for that shell and prove them as the
  non-root Hive user during the production-stage build.
- The host-network Traefik registry edge has a 2 GiB memory limit. Registry
  connection resets and short reads must be checked against kernel OOM evidence
  before attributing them to Zot or a worker branch.

## References

- `issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md`
- `.cortex/design-docs/hive-isolated-agent-platform.md`
- `agentic-ai/minds/hive/`
- `worklogs/hive-isolated-agent-platform/2026-07-29T21-55-00Z-hive-pr-lifecycle-reliability.md`
- `worklogs/hive-isolated-agent-platform/20260817T032945Z-pr-1038-login-shell-toolchain.md`
- `worklogs/hive-isolated-agent-platform/20260817T051000Z-pr-1041-registry-proxy-memory.md`
