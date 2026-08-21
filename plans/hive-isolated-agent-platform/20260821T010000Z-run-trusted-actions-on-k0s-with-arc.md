---
title: Run trusted GitHub Actions on k0s with ARC
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/connect-trusted-builds-to-zot-cache.md
started_at: 2026-08-21T01:00:00Z
agent: codex
---

# Run trusted GitHub Actions on k0s with ARC

## Interpreted request

Move Nook's trusted CI execution onto autoscaled, ephemeral Kubernetes runners so Docker-heavy validation consumes the colocated private registry instead of repeatedly transferring BuildKit cache over the public network.

## Requirements

- Install a pinned, supported Actions Runner Controller scale-set release on the managed k0s cluster.
- Register a repository-scoped runner scale set with durable, repository-owned authentication and rotation procedures.
- Run each job in an ephemeral Kata-backed pod using ARC Kubernetes mode, with no nested container daemon.
- Preserve required image build capability through daemonless BuildKit and Kubernetes-native job/service containers.
- Give runner Docker/BuildKit direct authenticated access to the cluster-local Zot service while preserving repository cache authorization boundaries.
- Route only trusted Nook workflow events to the self-hosted scale set; pull requests from forks must not receive reusable infrastructure credentials.
- Bound concurrency and resource use so CI cannot starve Zot, Hive, Neo4j, or the control plane.
- Add manifest and workflow contract coverage, operational status/diagnostic commands, and current architecture documentation.
- Deploy the merged configuration, execute a real runner smoke workload, and compare queue/cache-transfer evidence with the prior hosted path.

## Constraints and exclusions

- Docker-in-Docker, rootless Docker nesting, Podman nesting, Sysbox-based nesting, and host container-runtime socket mounts are prohibited.
- A runner may carry client tooling, but no Docker daemon or equivalent nested general-purpose container engine may run in its pod.
- Existing Hive feature work, queue ownership, and unrelated open pull requests remain read-only.
- GitHub-hosted fallback remains available until the complete self-hosted workflow matrix is proven stable.
- No personal token may be committed or rendered into repository files; Kubernetes secrets remain encrypted and are created through guarded deployment tasks.
- This task does not redesign product behavior or alter vault security boundaries.

## Change budget and PR sequence

- Estimated authored changed lines: 1,200
- Owning modules, packages, or layers: `infra/k0s`, `infra/tasks`, GitHub Actions workflow routing, infrastructure contract tests, and Hive platform documentation
- Public or cross-module interfaces: ARC scale-set label, Task commands, repository workflow `runs-on` selection, and cluster-local Zot endpoint
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,200
- Current PR slice and acceptance evidence: Complete ARC Kubernetes-mode runner capability without nested container engines; Acceptance evidence: static contracts, exact-head CI, live deployment, registration, smoke job, and cluster-local Zot transfer proof
- PR slices and acceptance evidence: Complete ARC Kubernetes-mode runner capability without nested container engines; Acceptance evidence: static contracts, exact-head CI, live deployment, registration, smoke job, and cluster-local Zot transfer proof

## Initial plan

1. Verify current ARC, k0s, Kata, Zot, workflow, authentication, and resource contracts.
2. Audit current workflow and Task-level Docker dependencies, then define the daemonless BuildKit and Kubernetes job-container boundary needed by the first routed jobs.
3. Add pinned ARC controller and runner scale-set configuration plus guarded install, credential sync, status, diagnosis, and smoke tasks.
4. Add a dedicated runner namespace, network policy, resource limits, registry access, daemonless builder resources, and repository contract tests.
5. Route a bounded trusted workflow slice to the scale-set label while retaining an explicit hosted fallback.
6. Format, review, push, run exact-head GitHub validation, resolve findings, and merge.
7. Deploy from merged Main, run the self-hosted smoke and representative image-build workload, then publish Workbench completion evidence.

## Completion evidence

- Repository contract tests validate the pinned charts, Kata runtime, explicit DinD/socket-mount prohibition, namespace policy, authentication references, concurrency limits, and trusted workflow routing.
- The Nook PR passes exact-head repository validation, has no unresolved actionable review, and is squash-merged.
- ARC controller, listener, and ephemeral runner pods become healthy on k0s.
- A repository workflow is accepted by the scale set, performs a daemonless BuildKit build, reaches Zot through the cluster service, and terminates its runner pod afterward.
- Operational output records runner startup, job duration, and registry transfer behavior without secrets or raw private logs.

## Safety review

- This plan contains only public-safe development context and omits source conversation text, sensitive values, private data, and machine-specific paths.
