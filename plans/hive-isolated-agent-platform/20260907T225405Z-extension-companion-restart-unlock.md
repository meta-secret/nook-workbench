---
title: Restore extension companion unlock after browser restart
feature: hive-isolated-agent-platform
issue: null
started_at: 2026-09-07T22:54:05Z
agent: codex
gizmo_id: extension-companion-restart-unlock
---

# Restore extension companion unlock after browser restart

## Interpreted request

Restore the failed Main extension browser journey in which a paired Simple Vault remains locked after a persistent browser restart even though passkey unlock succeeds in the extension popup. Deliver the smallest fail-closed repair with focused regression coverage and complete the pull-request lifecycle through replacement Main verification.

## Requirements

- Reproduce the failure from retained GitHub Actions evidence and identify the first actionable state transition.
- Restore the exact persisted paired vault before companion discovery reports an unlocked session after browser restart.
- Preserve the Rust-owned active-vault identity check and propagate restoration failures without reporting a usable companion.
- Add focused extension-unit and UI-demo coverage for the restarted paired-vault unlock journey.
- Pass repository pre-push hygiene, exact-head hosted extension E2E, complete PR validation, readiness, squash merge, and replacement Main verification.

## Constraints and exclusions

- Do not weaken cryptographic, authorization, device-identity, or vault-storage boundaries.
- Do not add fallback or compatibility behavior.
- Keep portable security validation in Rust/WASM and browser session orchestration in TypeScript.
- Do not run local product builds or browser E2E suites; use hosted exact-head validation.
- Do not claim or mutate the separate Hive-owned Main-failure incident.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: extension-companion-restart-unlock
- Estimated authored changed lines: 180
- Owning modules, packages, or layers: extension offscreen companion-session orchestration, focused extension session tests, and the extension popup UI demo
- Ownership units:
1. Capability: Diagnose the restarted companion unlock regression; Gizmo ID: extension-companion-restart-unlock; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: retained Main logs and source history identify the exact failed state transition and owning boundary
2. Capability: Restore the persisted paired vault before companion discovery; Gizmo ID: extension-companion-restart-unlock; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: focused unit coverage proves reopen-before-discovery ordering and fail-closed error propagation
3. Capability: Deliver the corrective pull request; Gizmo ID: extension-companion-restart-unlock; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head hosted checks, review, readiness, squash merge, and replacement Main verification succeed
- Public or cross-module interfaces: Existing typed NookVaultManager open_extension_passkey_vault_js operation and NookCompanionExtensionEndpoint discovery contract; no new Rust/WASM interface
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 180
- Current PR slice and acceptance evidence: Restore restart-time paired-vault adoption without weakening Rust validation; Acceptance evidence: focused session tests, UI demo, hosted extension E2E, full PR validation, review, and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: extension-companion-restart-unlock; Gizmo name: Extension companion restart unlock repair; Predecessor Gizmo ID: None; Restore restart-time paired-vault adoption without weakening Rust validation; Estimated authored changed lines: 180; Acceptance evidence: focused session tests, UI demo, hosted extension E2E, full PR validation, review, and readiness

## Initial plan

1. Inspect the failed Main job and correlate the first failing browser state with source history.
2. Route the implementation to Web Development and preserve the Rust fail-closed identity boundary.
3. Add focused unit and UI-demo evidence, then pass repository pre-push hygiene.
4. Publish one corrective pull request and obtain exact-head hosted extension E2E plus complete validation and review.
5. Squash-merge when ready, verify the replacement Main run, and publish the Workbench worklog.

## Completion evidence

- The exact-head Extension E2E job passes the previously failing restart journey.
- All applicable repository-owned checks and review requirements pass with no unresolved findings.
- The pull request is squash-merged and the resulting Main workflow completes successfully.
- Workbench plan and worklog links are visible on Workbench main.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
