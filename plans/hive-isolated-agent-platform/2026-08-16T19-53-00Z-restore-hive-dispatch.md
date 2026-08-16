---
title: Restore Hive dispatch after namespace policy drift
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-a589ec0ebb370e2d3f37d13da1279c508163cb2e.md
started_at: 2026-08-16T19:53:00Z
agent: codex
---

# Restore Hive dispatch after namespace policy drift

## Interpreted request

Restore the automated Main-failure repair path so a correctly published Hive
incident is claimed and executed, then prevent the production configuration
drift that disabled the dispatcher.

## Requirements

- Trace the failed Main run through GitHub handoff, Workbench publication, and
  live Hive claim state.
- Repair the production connectivity boundary without weakening Neo4j or Hive
  network isolation.
- Correct the repository-owned recovery path that caused namespace policy
  labels to disappear.
- Add deterministic regression coverage for the recovery contract.
- Deliver the correction through an exact-head, Main-equivalent validated pull
  request and squash merge.

## Constraints and exclusions

- The failed product tests and their Hive-owned incident remain owned by Hive.
- Existing foreign Hive pull requests and their review state remain read-only.
- No security policy bypass, direct push to Main, or destructive cluster action
  is permitted.

## Change budget and PR sequence

- Estimated authored changed lines: 120
- Owning modules, packages, or layers: k0s lifecycle automation and repository infrastructure preflight coverage
- Public or cross-module interfaces: k0s install recovery behavior and namespace NetworkPolicy label contract
- Delivery shape: One PR
- Current PR estimated authored changed lines: 120
- Current PR slice and acceptance evidence: Preserve namespace labels during recovery; Acceptance evidence: targeted contract coverage and live connectivity
- PR slices and acceptance evidence: Preserve namespace labels during recovery; Acceptance evidence: targeted contract coverage and live connectivity

## Initial plan

1. Restore the canonical namespace role labels and verify Neo4j connectivity.
2. Confirm the dispatcher becomes ready and claims the queued incident.
3. Patch the k0s recovery workflow to preserve the canonical Namespace
   manifests and add regression coverage.
4. Publish a focused PR, run Main-equivalent exact-head validation, resolve
   feedback, and squash merge.
5. Recheck live Hive health and publish the completion records.

## Completion evidence

- Canonical namespace labels are present in production.
- Dispatcher and worker deployments are ready and the queued incident is
  visible in durable Hive state.
- Regression coverage fails for the former bare-Namespace apply pattern.
- The implementation PR passes exact-head readiness and is squash-merged.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure detail.
