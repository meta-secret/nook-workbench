---
title: Stabilize the registry proxy under hosted validation load
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
started_at: 2026-08-17T04:08:00Z
agent: codex
---

# Stabilize the registry proxy under hosted validation load

## Interpreted request

Restore reliable Hive pull-request delivery by correcting the production
registry edge failure that interrupts concurrent hosted validation downloads.

## Requirements

- Size the production registry proxy for observed concurrent BuildKit traffic.
- Preserve the existing authenticated registry, TLS, routing, and storage
  boundaries.
- Deliver the configuration correction through a reviewed, exact-head
  validated pull request.
- Deploy the merged configuration and prove the proxy remains healthy while
  hosted validation reads large cache blobs.
- Re-run affected exact-head validation only after production health is proven.

## Constraints and exclusions

- Do not delete registry blobs or caches without proof of corruption.
- Do not modify product-repair branches owned by Hive workers.
- Do not weaken hosted validation, authentication, or resource isolation.
- Keep the change within the host proxy resource configuration and focused
  infrastructure checks.

## Change budget and PR sequence

- Estimated authored changed lines: 15
- Owning modules, packages, or layers: Borg host services and registry edge.
- Public or cross-module interfaces: None; resource sizing only.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 15
- Current PR slice and acceptance evidence: Raise the registry proxy memory limit and document its concurrent-cache workload; Acceptance evidence: compose validation, hosted infrastructure checks, production deployment, and sustained cache traffic without OOM restart
- PR slices and acceptance evidence: Raise the registry proxy memory limit and document its concurrent-cache workload; Acceptance evidence: compose validation, hosted infrastructure checks, production deployment, and sustained cache traffic without OOM restart

## Initial plan

1. Record the OOM and current cgroup sizing evidence.
2. Raise the proxy memory limit with rationale near the configuration.
3. Format, review, publish, and run exact-head hosted validation.
4. Merge and deploy the corrected host-service configuration.
5. Re-run affected Hive PR validation and verify proxy stability under load.

## Completion evidence

- Exact-head repository checks and readiness pass for the repair PR.
- The pull request is squash-merged and the merged configuration is deployed.
- Traefik retains a stable start time and stays below its new cgroup limit while
  concurrent hosted jobs download registry cache blobs.
- Affected Hive repair PR validation is re-run against the healthy edge.

## Safety review

This plan contains no prompt transcript, credentials, private data, raw logs,
local paths, or unnecessary infrastructure detail.
