---
title: Harden Hive deploy convergence
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
started_at: 2026-08-17T03:08:35Z
agent: codex
---

# Harden Hive deploy convergence

## Interpreted request

Fix deployment defects discovered while monitoring and repairing the live Hive
worker pool. Keep future schema migrations and worker rollouts deterministic
when Kubernetes retains terminal pods or disposable workers finish tasks during
post-rollout verification.

## Requirements

- Drain every live Hive graph client before applying a new graph-aware image.
- Do not let terminal `Succeeded`, `Failed`, or `Evicted` pod records block a
  completed drain.
- Preserve fail-closed behavior for any running or pending graph-client pod.
- Treat normal disposable-worker replacement as expected convergence rather
  than a one-sample deployment failure.
- Require four ready workers before sandbox and lifecycle verification.
- Add deterministic infrastructure-contract coverage for both predicates.
- Deliver through a reviewed exact-head validated pull request and deploy the
  merged result.

## Constraints and exclusions

- Do not delete running or pending worker pods outside the existing guarded
  deployment flow.
- Do not weaken the graph-client drain, Kata runtime, seccomp, capability,
  service-account, or network-policy checks.
- Do not modify Hive product-repair branches or pull requests.
- Heavy validation runs only on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 180
- Owning modules, packages, or layers: Hive infrastructure Taskfile and its shell-contract tests
- Public or cross-module interfaces: `task infra:hive:deploy` operational behavior
- Delivery shape: One PR
- Current PR estimated authored changed lines: 180
- Current PR slice and acceptance evidence: Terminal-pod-aware drain and retrying ready-pool convergence; Acceptance evidence: focused infrastructure contract, exact-head validation, production rollout, and stable four-worker observation
- PR slices and acceptance evidence: Terminal-pod-aware drain and retrying ready-pool convergence; Acceptance evidence: focused infrastructure contract, exact-head validation, production rollout, and stable four-worker observation

## Initial plan

1. Capture the exact failed drain and transient readiness predicates from the
   merged deployment workflow.
2. Extract bounded shell helpers that ignore only terminal pod records and
   retry four-ready-worker convergence.
3. Add focused source-contract tests for active-pod fail-closed behavior,
   terminal-pod cleanup tolerance, and bounded readiness retries.
4. Format, push, validate the exact head, resolve existing feedback, and
   squash-merge.
5. Deploy merged `main` and monitor the pool and queue across multiple worker
   polling intervals.

## Completion evidence

- A terminal `Evicted` pod record cannot time out a completed graph-client
  drain.
- A worker replacement during post-rollout verification converges or fails
  after a bounded timeout with a clear error.
- Exact-head checks and readiness audit pass with zero unresolved feedback.
- The merged deployment completes its sandbox and worker-replacement proof.
- Four workers and all controllers remain ready on the merged digest.

## Safety review

This plan contains no raw prompts, secrets, private data, raw logs, local
paths, or unnecessary infrastructure details.
