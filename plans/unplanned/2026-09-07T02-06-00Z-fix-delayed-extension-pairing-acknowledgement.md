---
title: Fix delayed extension pairing acknowledgement
feature: unplanned
issue: issues/unplanned/delayed-extension-pairing-acknowledgement.md
started_at: 2026-09-07T02:06:00Z
agent: codex
gizmo_id: extension-pairing-acknowledgement
---

# Task plan

## Interpreted request

Deliver a durable correction for Simple Vault showing a failed browser handoff after the extension has actually accepted and persisted its pairing grant.

## Requirements

- Send each pairing approval grant exactly once and present success only after the extension acknowledges the completed import.
- Preserve fail-closed sender authorization, grant validation, and sealed credential handling.
- Cover acknowledgement latency beyond the former five-second window in focused unit and browser-demo contracts.
- Complete exact-head hosted validation, review disposition, squash merge, and Workbench closeout.

## Constraints and exclusions

- Keep Sentinel Vault excluded from extension pairing.
- Do not add retries, replay, compatibility behavior, or success substitution.
- Do not change portable Rust/WASM authorization or storage behavior unless current evidence proves a provider defect.
- Do not run local product builds, Rust/WASM compilation, or browser end-to-end suites.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: extension-pairing-acknowledgement
- Estimated authored changed lines: 200
- Owning modules, packages, or layers: Shared vault-app extension transport, web unit coverage, and extension-install browser demo
- Ownership units:
1. Capability: Delayed pairing acknowledgement; Gizmo ID: extension-pairing-acknowledgement; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused unit assertions, browser-demo contract, and exact-head hosted validation
2. Capability: Pairing security acceptance; Gizmo ID: extension-pairing-acknowledgement; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Read-only review of sender authorization, acknowledgement integrity, duplicate-import risk, and secret lifetime
- Public or cross-module interfaces: Existing external `chrome.runtime.sendMessage` pairing acknowledgement contract; no new public interface
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 200
- Current PR slice and acceptance evidence: Replace timeout-driven duplicate approval delivery with one acknowledged import; Acceptance evidence: Focused unit behavior, browser-demo behavior, security acceptance, hosted full E2E, exact-head readiness, and squash merge
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: extension-pairing-acknowledgement; Gizmo name: Delayed pairing acknowledgement; Predecessor Gizmo ID: None; Replace timeout-driven duplicate approval delivery with one acknowledged import; Estimated authored changed lines: 200; Acceptance evidence: Focused unit behavior, browser-demo behavior, security acceptance, hosted full E2E, exact-head readiness, and squash merge

## Initial plan

1. Trace the Simple Vault sender and extension receiver acknowledgement lifecycle.
2. Implement the smallest direct transport correction with focused regression coverage.
3. Obtain security acceptance and run required pre-push hygiene.
4. Publish the exact head, run Main-fix hosted validation and review, repair accepted findings, and squash-merge when ready.
5. Publish the Workbench worklog and agent statistics.

## Completion evidence

- One merged Nook PR with the transport fix and focused regression coverage.
- Passing applicable repository-owned checks, full browser validation, exact-head readiness, and resolved substantive review feedback.
- Workbench plan, worklog, and agent statistics linked to the merged PR.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
