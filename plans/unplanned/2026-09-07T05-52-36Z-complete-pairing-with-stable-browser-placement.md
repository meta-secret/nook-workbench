---
title: Complete pairing delivery with stable browser runner placement
feature: unplanned
issue: issues/unplanned/delayed-extension-pairing-acknowledgement.md
started_at: 2026-09-07T05:52:36Z
agent: codex
gizmo_id: extension-pairing-acknowledgement
supersedes: plans/unplanned/2026-09-07T03-39-25Z-complete-pairing-and-extension-e2e-repair.md
---

# Task plan

## Interpreted request

Complete the pairing acknowledgement and browser-harness repair by also preventing containerized PR browser jobs from landing on the one runner platform proven incompatible with the pinned Bun runtime.

## Requirements

- Preserve the accepted pairing acknowledgement, mock-auth static-host, faithful LinkedIn fixture, and bounded Playwright shutdown behavior.
- Add an explicit runner eligibility contract that excludes the Ubuntu 26.04 kernel-7 secondary node from containerized browser jobs while retaining healthy Debian kernel-6 workers.
- Validate the placement contract without restarting workloads or weakening required browser coverage.
- Preserve authentication, secret-lifecycle, no-fallback, and exact-head delivery rules.
- Complete full Main-fix validation, readiness, squash merge, and Workbench closeout.

## Constraints and exclusions

- Do not downgrade Bun, skip tests, retry inside product code, hide crashes, or raise timeouts.
- Do not mutate cluster workloads outside the repository-owned deployment contract.
- Do not run local product builds, Rust/WASM compilation, or browser E2E suites.
- Keep the cohesive delivery below 2,000 authored additions.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: extension-pairing-acknowledgement
- Estimated authored changed lines: 650
- Owning modules, packages, or layers: Pairing browser transport, mock-auth and Playwright harnesses, containerized browser-job runner placement, focused tests, and browser demos
- Ownership units:
1. Capability: Pairing and deterministic browser harness; Gizmo ID: extension-pairing-acknowledgement; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused static tests and complete exact-head browser validation
2. Capability: Browser runner eligibility; Gizmo ID: extension-pairing-acknowledgement; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Static placement contracts and hosted job provenance show browser pods use eligible kernel-6 workers
3. Capability: Security acceptance; Gizmo ID: extension-pairing-acknowledgement; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Read-only exact-head review confirms authentication, secrets, typed failures, cleanup, and placement boundaries remain safe
- Public or cross-module interfaces: Existing extension acknowledgement and mock-auth HTTP contracts plus the repository-owned container-job node eligibility contract
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Complete pairing acknowledgement, deterministic browser harnesses, and stable browser runner placement; Acceptance evidence: Focused static checks, security acceptance, exact-head full browser validation, deployment, readiness, and squash merge
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: extension-pairing-acknowledgement; Gizmo name: Pairing and stable browser validation; Predecessor Gizmo ID: None; Complete pairing acknowledgement, deterministic browser harnesses, and stable browser runner placement; Estimated authored changed lines: 650; Acceptance evidence: Focused static checks, security acceptance, exact-head full browser validation, deployment, readiness, and squash merge

## Initial plan

1. Encode dedicated eligibility for containerized browser jobs and exclude the proven incompatible kernel-7 runner.
2. Validate the scheduling contract with focused static SRE checks and review the exact diff.
3. Run pre-push hygiene, publish the coherent head, and execute complete Main-fix validation.
4. Confirm browser-job node provenance, all required checks, deployment, review state, and readiness.
5. Authorize squash merge and publish final Workbench and agent-statistics records.

## Completion evidence

- Repository placement tests prove containerized browser jobs cannot schedule to the incompatible runner.
- Full extension E2E and both browser shards pass on the exact PR head with healthy eligible-node provenance.
- Security and readiness verdicts pass, PR 1486 is squash-merged, and Workbench records are complete.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
