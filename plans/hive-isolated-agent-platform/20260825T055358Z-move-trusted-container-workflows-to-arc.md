---
title: Move trusted container workflows onto ARC
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/move-trusted-container-workflows-to-arc.md
started_at: 2026-08-25T05:53:58Z
agent: codex
---

# Move trusted container workflows onto ARC

## Interpreted request

Use the expanded k0s ARC fleet for the slow remote browser task and every other
trusted workflow that can safely run on private infrastructure, without
reintroducing a container daemon or weakening untrusted-input isolation.

## Requirements

- Audit all workflow jobs against their current trust and runtime needs.
- Enable Kubernetes-native job and service containers for ARC.
- Remove nested runtime-container dependencies from migrated Task paths.
- Route compatible trusted jobs to `nook-k0s` or `nook-k0s-hive`.
- Measure the remote browser path and verify actual ARC runner placement.
- Deliver through exact-head review, validation, merge, and Workbench evidence.

## Constraints and exclusions

- Do not use DinD, a host Docker socket, Podman, Sysbox, or Python automation.
- Do not execute fork or Dependabot pull-request code in the private ARC trust
  domain.
- Keep the persistent rootless BuildKit service for image construction.
- This delivery changes CI execution architecture, not product behavior.

## Change budget and PR sequence

- Estimated authored changed lines: 900
- Owning modules, packages, or layers: ARC Helm values, Kubernetes runtime contracts, GitHub Actions manifests, browser and container Task orchestration, runner-placement policy, Cortex CI documentation
- Public or cross-module interfaces: GitHub Actions runner labels, job-container declarations, ARC scale-set values, and Task commands used by workflows
- Delivery shape: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Migrate trusted runtime workloads to Kubernetes-native ARC execution; Acceptance evidence: manifest and placement contracts, focused remote browser proof, complete exact-head validation, clean review, and merge
- PR slices and acceptance evidence: Migrate trusted runtime workloads to Kubernetes-native ARC execution; Acceptance evidence: manifest and placement contracts, focused remote browser proof, complete exact-head validation, clean review, and merge

## Initial plan

1. Inventory hosted jobs and runtime-container calls, separating trusted work
   from mandatory hosted isolation.
2. Add ARC Kubernetes job-container support and executable manifest contracts.
3. Refactor the browser and other selected Task paths to direct job/service
   execution, then migrate their workflow placement.
4. Run focused static and remote runtime proof, compare duration and placement,
   and correct regressions.
5. Complete exact-head review and validation, merge, and publish Workbench
   completion evidence.

## Completion evidence

- The slow remote browser task reports a `nook-k0s` runner and passes.
- The typed placement inventory covers every workflow job and rejects an
  undocumented hosted trusted job.
- ARC manifest rendering proves Kubernetes job-container support.
- The exact-head pull request has green required checks, no unresolved review
  threads, and is merged.

## Safety review

- This record contains no raw prompt, transcript, secret, private address, raw
  log, local path, or unnecessary infrastructure detail.
