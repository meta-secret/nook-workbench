---
title: Restore Main with Kubernetes-native ARC execution
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-effd9ce00a9d9ac00d21c9e44adbb3eb97b0d8bc.md
started_at: 2026-08-27T16:04:11Z
agent: codex
---

# Restore Main with Kubernetes-native ARC execution

## Interpreted request

Restore the current default-branch pipeline and close any remaining gap between
trusted ARC workflows and Nook's Kubernetes-native execution boundary. Runtime
isolation must come from ordinary Kubernetes Pods. Browser tooling may be
preinstalled in a pinned Pod image or installed directly in the runner Pod.

## Requirements

- Diagnose every failure on the current Main revision before changing code.
- Keep Docker, Podman, nested daemons, host runtime sockets, privileged Pods,
  and container lifecycle commands out of ARC and k8s workloads.
- Run Playwright directly in a prepared ordinary Pod image or directly in the
  runner Pod after installing its required software.
- Preserve BuildKit only as an image build and export service, never as a
  workload runtime.
- Add deterministic regression contracts for the corrected workflow topology.
- Deliver a normal reviewed Main-fix pull request with Main-equivalent browser
  validation and verify the replacement Main run after merge.

## Constraints and exclusions

- Do not bypass required checks, reduce browser coverage, or weaken isolation.
- Do not mount Docker, Podman, containerd, CRI, or BuildKit runtime sockets for
  workload execution.
- Do not change portable product behavior unless diagnosis proves an
  independently owned product defect.
- Do not mutate unrelated active branches, pull requests, or Workbench issues.
- A prepared OCI image is acceptable only when Kubernetes starts it as the job
  Pod; an Actions Pod must never launch it through a nested runtime.

## Change budget and PR sequence

- Estimated authored changed lines: 1,500
- Owning modules, packages, or layers: SRE GitHub Actions, CI Task orchestration, ARC and k0s manifests and contracts, and SRE Cortex
- Ownership units:
1. Capability: Kubernetes-native ARC workflow repair; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Static SRE contracts and Main-fix validation pass before a green replacement Main run without nested container runtime execution
- Public or cross-module interfaces: GitHub Actions job execution and prepared Pod-image contract; no product API change is expected
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1,500
- Current PR slice and acceptance evidence: Restore the failed Main pipeline and reject prohibited ARC runtime behavior; Acceptance evidence: focused SRE checks, full Main-fix browser validation, and a green replacement Main run
- PR slices and acceptance evidence: Restore the failed Main pipeline and reject prohibited ARC runtime behavior; Acceptance evidence: focused SRE checks, full Main-fix browser validation, and a green replacement Main run

## Initial plan

1. Audit current Main evidence and every trusted ARC/k8s execution path.
2. Repair the smallest verified root causes and remove any prohibited runtime
   dependency found by the audit.
3. Add static workflow, manifest, and task regression coverage and synchronize
   the owning SRE Cortex authorities.
4. Format, review, push, and run focused plus complete Main-fix validation.
5. Resolve feedback, squash-merge, verify replacement Main, and complete the
   Workbench incident with evidence.

## Completion evidence

- A reviewed and squash-merged Nook pull request linked from the incident.
- Targeted contracts proving ARC jobs use direct tools or ordinary prepared
  Pod images without nested container runtime access.
- Exact-head repository checks, Main-equivalent Web and Extension e2e, and a
  successful replacement Main workflow.
- A linked Workbench worklog and completed incident record.

## Safety review

This plan contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
