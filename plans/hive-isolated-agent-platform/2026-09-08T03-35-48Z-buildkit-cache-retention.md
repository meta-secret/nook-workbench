---
title: Retain reusable BuildKit layers
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/retain-reusable-buildkit-layers.md
started_at: 2026-09-08T03:35:48Z
agent: codex
gizmo_id: buildkit-cache-retention
---

# Task plan

## Interpreted request

Keep reusable CI build data resident on persistent builders so repeated validation does not repeatedly hydrate large registry layers over the network.

## Requirements

- Diagnose cache eviction and per-run policy result growth against current configuration.
- Preserve fresh dependency security checks, cache trust boundaries, and existing builder isolation.
- Deliver a focused retention repair with meaningful regression evidence and hosted validation.

## Constraints and exclusions

- Retain the existing per-node BuildKit architecture and registry publication model.
- Exclude network routing, VPN changes, transport tuning, and product behavior changes.
- Avoid cache pruning and disruptive live restarts while jobs are running.
- Run product compilation and complete validation only through GitHub Actions.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: buildkit-cache-retention
- Estimated authored changed lines: 250
- Owning modules, packages, or layers: ARC BuildKit configuration, Rust Docker policy execution, focused cache contracts.
- Ownership units:
1. Capability: Persistent cache retention; Gizmo ID: buildkit-cache-retention; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Policy checks remain fresh, reusable layers remain resident, and focused contracts plus hosted validation pass.
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 250
- Current PR slice and acceptance evidence: Reduce avoidable BuildKit cache eviction and repeated hydration; Acceptance evidence: Reviewed configuration, focused regression checks, hosted cache reuse evidence and successful PR readiness.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: buildkit-cache-retention; Gizmo name: Retain reusable BuildKit layers; Predecessor Gizmo ID: None; Reduce avoidable BuildKit cache eviction and repeated hydration; Estimated authored changed lines: 250; Acceptance evidence: Reviewed configuration, focused regression checks, hosted cache reuse evidence and successful PR readiness.

## Initial plan

1. Refresh live storage and cache evidence and identify the smallest effective change.
2. Delegate implementation and focused checks to SRE, then independently review the result.
3. Publish the coherent branch, run hosted validation, and resolve relevant findings.
4. Verify readiness, squash-merge, and publish completion evidence with any deployment limitations.

## Completion evidence

- A focused reviewed diff and passing hosted checks for its final commit.
- Cache observations distinguishing Docker layer reuse from compiler-cache hits.
- Verified merge and immutable completion record.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, environment values, or unnecessary infrastructure details.
