---
title: ARC review, capacity, and cache-path follow-up
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/connect-trusted-builds-to-zot-cache.md
plan: plans/hive-isolated-agent-platform/20260821T171000Z-scale-isolated-arc-capacity-to-ten-runners.md
nook_pr: 1070
status: completed
started_at: 2026-08-21T16:06:00Z
finished_at: 2026-08-21T19:05:00Z
agent: codex
---

# ARC review, capacity, and cache-path follow-up

## Outcome

Addressed every actionable review comment from PR 1069 in PR 1070, routed the
trusted Rust workload to `nook-k0s`, raised isolated ARC capacity to ten, and
removed the slow Docker image-format cache transfer. The merged release is
deployed and its exact merge commit passed the production ARC smoke test.

## Progress

- Preserved fresh Pod and Kata microVM creation per job with zero warm runners.
- Raised the ARC ceiling from four to ten while retaining the 16 GiB burst
  envelope and 100 GiB disposable private BuildKit state per job.
- Routed trusted native Rust and six Rust ecosystem checks through `nook-k0s`.
- Kept fork, WASM, browser, release, and runtime-dependent work hosted.
- Replaced dependency-policy Docker image output with BuildKit `cacheonly`
  execution and an uncached audit nonce.
- Reconciled runner-placement and ARC operations documentation across Cortex,
  repository guidance, workflows, and public command references.
- Squash-merged PR 1070 and deployed merge commit
  `e55bc7a0a9cdeb43a566df025daa5ac8c371d189`.

## Implementation problems

- Review follow-up uncovered stale documentation that still described all
  product validation as hosted. The final sweep aligned every relevant
  authority with the trusted Rust and hosted-runtime split.
- The policy-tools target serialized a Docker image tarball even though no
  downstream consumer needed an image. A cache-only BuildKit target removed
  that export and its corresponding layer-load phase.
- A static resource review compared aggregate burst limits with physical node
  memory. Live ten-runner evidence showed that burstable scheduling requests
  fit the node and peak memory remained below 51 percent.

## Decisions

- Keep one private privileged rootful BuildKit sidecar inside each Kata guest.
  Do not operate a shared BuildKit service or Docker daemon.
- Keep ARC on Kata QEMU runtime-rs while Hive and the cluster default remain on
  Dragonball.
- Keep `minRunners: 0` and `maxRunners: 10`; every job receives a new runner Pod
  and microVM instead of retaining idle workers.
- Treat scheduler requests as placement guarantees and 16 GiB as the job burst
  ceiling. Preserve 100 GiB of disposable BuildKit state.

## Validation

- Ten concurrent workflow jobs ran on ten distinct `nook-k0s` runner Pods. The
  ARC resource reported ten current runners and all four additional capacity
  probes passed.
- Exact-head validation run 32512526940 passed all product, Rust ecosystem,
  Hive infrastructure, policy, preview, and coverage checks.
- The current-head Codex review reported no major issues and all review
  conversations were resolved.
- `task pr:ready PR=1070` reported exact head, current base, mergeability,
  deployment, zero unresolved threads, and a clean Cortex session.
- Production deploy reported `nook-k0s max=10` and dispatch readiness.
- Exact-merge smoke run 32515543265 passed on ephemeral runner
  `nook-k0s-gpjzm-runner-6wf26` at merge SHA
  `e55bc7a0a9cdeb43a566df025daa5ac8c371d189`.
- Final logs contain no `sending tarball`, `loading layer`, or Docker
  image-format export in the affected policy path. Zot cache-manifest imports
  complete in seconds.

## Remaining work

None.
