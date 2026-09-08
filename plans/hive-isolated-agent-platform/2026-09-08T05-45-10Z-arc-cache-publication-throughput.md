---
title: Eliminate redundant ARC cache publication work
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/eliminate-arc-cache-publication-tail.md
started_at: 2026-09-08T05:45:10Z
agent: codex
gizmo_id: arc-cache-publication-throughput
---

# Task plan

## Interpreted request

Reduce the Main native verification critical path by removing unnecessary cache discovery and repeated cache preparation, exposing actionable phase metrics, and returning the persistent BuildKit fleet to its declared healthy state without weakening portable cache correctness.

## Requirements

- Keep required native and preflight verification authoritative while allowing independent work to execute concurrently.
- Reduce cache-reference probes when their results are not consumed; use bounded concurrency only for probes that remain necessary.
- Avoid serial preparation of overlapping complete native cache graphs while preserving fresh-node and cross-node restoration.
- Record cache preparation separately from registry sending and make abnormal BuildKit concurrency or storage state observable.
- Restore and verify all four intended node-local BuildKit shards.
- Deliver through one reviewed pull request, hosted exact-head validation, merge, replacement Main measurement, and Workbench closeout.

## Constraints and exclusions

- Preserve trusted-Main publisher ownership, untrusted-workflow credential isolation, node-local BuildKit routing, and content-addressed immutable cache boundaries.
- Do not remove required validation, rely only on sccache evidence, introduce shared writable job state, or use nested container runtimes.
- Do not run Rust, WASM, browser, or complete product validation locally.
- Avoid destructive cache deletion and disruptive BuildKit restarts while active jobs are present.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: arc-cache-publication-throughput
- Estimated authored changed lines: 750
- Owning modules, packages, or layers: Main workflow topology, Docker setup cache selection, Rust and preflight Bake publication graph, cache telemetry, ARC operations, focused SRE contracts, and SRE workflow authority.
- Ownership units:
1. Capability: Main native cache publication throughput and observability; Gizmo ID: arc-cache-publication-throughput; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused workflow and cache contracts pass, unused probes are removed or remaining probes are bounded, preflight work no longer extends the serial publication tail, portable cache proof remains authoritative, all four shards are healthy, and exact-head plus replacement Main timings demonstrate the result.
- Public or cross-module interfaces: Main workflow job dependencies, Docker setup cache availability outputs, cache publication Task targets, cache telemetry output, and ARC operator status.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 750
- Current PR slice and acceptance evidence: Remove redundant native cache work and restore declared ARC health; Acceptance evidence: focused SRE contracts, hosted cache portability proof, exact-head review and validation, four ready shards, merge verification, and replacement Main phase timings.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: arc-cache-publication-throughput; Gizmo name: ARC cache publication throughput; Predecessor Gizmo ID: None; Remove redundant native cache work and restore declared ARC health; Estimated authored changed lines: 750; Acceptance evidence: focused SRE contracts, hosted cache portability proof, exact-head review and validation, four ready shards, merge verification, and replacement Main phase timings.

## Initial plan

1. Trace every cache probe, publisher scope, and workflow dependency to remove work that has no consumer.
2. Implement the smallest SRE-owned topology and instrumentation changes with focused static tests.
3. Restore the fourth shard safely and verify BuildKit concurrency, capacity, and node-local routing.
4. Publish the branch and prove cache correctness and timing on the exact head.
5. Resolve review findings, merge, measure replacement Main, and publish Workbench completion.

## Completion evidence

- Focused contracts demonstrate the reduced probe and publisher topology without weakened cache trust boundaries.
- Hosted fresh-builder evidence demonstrates reusable dependency, tool, and source layers with no unexpected Rust compilation.
- Live evidence shows four ready BuildKit shards and no unresolved concurrency fault affecting the tested path.
- The exact reviewed head is squash-merged and its replacement Main timing is recorded.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, environment values, or unnecessary infrastructure detail.
