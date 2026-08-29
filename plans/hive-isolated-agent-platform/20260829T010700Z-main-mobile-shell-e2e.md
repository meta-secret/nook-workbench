---
title: Restore Main mobile shell browser verification
feature: hive-isolated-agent-platform
issue: None
started_at: 2026-08-29T01:07:00Z
agent: codex
---

# Task plan

## Interpreted request

Restore the current Main revision after exact-source remote browser validation exposed a repeatable mobile authenticated-shell failure. Determine whether the fixed-width shell implementation or the browser assertion drifted, make the narrow web-owned correction, prove both browser suites, deliver through a reviewed squash-merged pull request, and independently verify the resulting Main workflow.

## Requirements

- Preserve the authenticated mobile shell's intended fixed horizontal viewport and accessible header controls.
- Diagnose the failure from retained Playwright evidence before changing behavior or assertions.
- Keep browser execution inside the prepared ordinary Kubernetes image without nested container runtimes.
- Add or refine targeted Playwright coverage for the corrected viewport contract.
- Run focused exact-source browser proof, complete Main-equivalent PR validation, readiness, squash merge, and replacement Main verification.
- Keep cache or runner transport symptoms separate from deterministic browser behavior.

## Constraints and exclusions

- Do not weaken authentication, authorization, vault storage, device identity, cryptographic boundaries, or browser isolation.
- Do not introduce authored TypeScript or Svelte null values, inline untranslated UI copy, schema changes, or storage migrations.
- Do not redesign the shell or add a new public interface; this is a bounded regression repair.
- Product edits belong only to the Web development worker; Gizmo owns lifecycle, integration, pull request, and merge state.

## Change budget and PR sequence

- Estimated authored changed lines: 80
- Owning modules, packages, or layers: nook-web-app authenticated shell layout and Playwright shell-height coverage
- Ownership units:
1. Capability: Diagnose and repair the mobile authenticated-shell viewport regression; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: focused shell-height Playwright proof, full web e2e, extension e2e, and Main-equivalent exact-head validation
2. Capability: Integrate, review, merge, and verify the replacement Main revision; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: ready exact PR head, squash merge, and successful resulting Main workflow
- Public or cross-module interfaces: None
- Delivery shape: One PR
- Current PR estimated authored changed lines: 80
- Current PR slice and acceptance evidence: Correct the mobile authenticated-shell viewport contract and its browser regression coverage; Acceptance evidence: focused shell-height Playwright proof, full browser suites, exact-head repository checks, and green replacement Main
- PR slices and acceptance evidence: 1. Correct the mobile authenticated-shell viewport contract and its browser regression coverage; Acceptance evidence: focused shell-height Playwright proof, full browser suites, exact-head repository checks, and green replacement Main

## Initial plan

1. Inspect retained screenshots, traces, component layout, and recent shell changes to identify the first deterministic cause.
2. Have the Web development owner implement the smallest behavior-and-test correction from the exact failed revision.
3. Integrate the verified handoff, run pre-push hygiene, publish a focused pull request, and execute exact-source remote browser proof.
4. Complete full Main-equivalent validation, resolve actionable review, audit readiness, squash merge, and monitor the resulting Main run to success.
5. Publish the linked completion worklog and incident evidence.

## Completion evidence

- Focused shell-height Playwright coverage passes on the repair head.
- Full web and extension e2e pass remotely in the Kubernetes-native browser path.
- Exact-head pull-request checks and readiness pass with no unresolved actionable feedback.
- The repair is squash-merged and its resulting Main workflow succeeds.
- Workbench records link the plan, pull request, validation, and replacement Main evidence.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure detail.
