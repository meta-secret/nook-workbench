---
title: Make Hive repair PR ownership reliable
feature: hive-isolated-agent-platform
status: in_progress
priority: critical
automation: manual
owner: codex
created_at: 2026-07-28T22:31:28Z
updated_at: 2026-07-29T12:45:00Z
source_issues: []
related_prs:
  - 865
  - 872
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
- Rust and infrastructure regression coverage.
- Graceful graph-client rollout that releases in-flight worker leases before
  the coordinator socket exits.

## Acceptance criteria

- [ ] Every Hive-created PR has the stable `hive` label and a `[Hive]` title.
- [ ] A worker does not complete merely because it opened a PR.
- [ ] Failed exact-head checks cause another repair iteration on the same PR.
- [ ] Worker replacement resumes from the durable branch and PR.
- [ ] Ready PRs are squash-merged and the owning task becomes completed.
- [ ] The reaper controller reconciles its NetworkPolicy without authorization
      failures.
- [ ] Existing Hive repair PRs have no unattended open remainder.
- [ ] The merged platform is deployed and verified live.
- [ ] A production rollout leaves no `RUNNING` lease owned by a removed Hive
      Pod.

## Progress

- 2026-07-28: Audited seven open Hive repair PRs with failed Main-equivalent
  checks and confirmed the live reaper authorization failure.
- 2026-07-29: Merged and deployed PR #872 with schema-8 obsolete-blocker
  recovery. The coordinated drain exposed two leases still owned by removed
  worker Pods because the coordinator container exited before the worker could
  persist its interruption. The two exact orphan leases were expired and
  reclaimed on the new release; a graceful shutdown invariant is now required.

## Findings and decisions

- The primary marker is a GitHub `hive` label; title prefixing makes the marker
  visible in lists and notifications.
- Milestones are not used as the primary marker because they represent
  planning cadence rather than immutable execution provenance.

## References

- `issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md`
- `.cortex/design-docs/hive-isolated-agent-platform.md`
- `agentic-ai/minds/hive/`
