---
title: Restore Main mobile shell browser verification and readiness compatibility
feature: hive-isolated-agent-platform
issue: None
started_at: 2026-08-29T01:31:00Z
agent: codex
supersedes: plans/hive-isolated-agent-platform/20260829T010700Z-main-mobile-shell-e2e.md
---

# Task plan

## Interpreted request

Restore Main after exact-source browser validation exposed a mobile shell test regression, and preserve the repository-owned readiness gate after the current Codex review service introduced a non-actionable summary status comment. Deliver both bounded corrections through exact-head validation, squash merge, and successful replacement Main verification.

## Requirements

- Preserve the authenticated mobile shell's no-horizontal-scroll behavior and reachable mobile header controls.
- Keep Codex review summaries as visible provenance while excluding their stable status marker from actionable-feedback counts.
- Continue treating real review findings, submitted review bodies, and unresolved threads as blockers.
- Add focused regression coverage for the summary-marker classification.
- Re-run Main-equivalent browser, product, policy, review, deployment, and readiness evidence on the combined exact head.

## Constraints and exclusions

- Do not delete or rewrite external review comments, bypass readiness, weaken review enforcement, or broaden bot trust beyond the exact Codex actor and marker.
- Do not change product behavior, public interfaces, schemas, storage, cryptographic boundaries, or runner architecture.
- Web development owns the completed browser test correction; AI owns the narrow CI-agent classifier and test.
- Gizmo owns integration, review replies, validation, merge, and replacement Main verification.

## Change budget and PR sequence

- Estimated authored changed lines: 130
- Owning modules, packages, or layers: nook-web-app Playwright shell-height coverage; CI-agent GitHub review classification and unit tests
- Ownership units:
1. Capability: Repair the mobile authenticated-shell viewport regression test; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: focused and Main-equivalent full Web e2e pass
2. Capability: Classify the stable Codex review summary marker as repository status without hiding findings; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: focused CI-agent unit tests prove the exact actor and marker are ignored while lookalikes remain substantive
3. Capability: Integrate, review, merge, and verify replacement Main; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: exact-head full validation, successful readiness, squash merge, and green resulting Main workflow
- Public or cross-module interfaces: None
- Delivery shape: One PR
- Current PR estimated authored changed lines: 130
- Current PR slice and acceptance evidence: Correct mobile shell browser coverage and Codex summary status classification; Acceptance evidence: focused unit/browser proof, full Main-equivalent PR validation, readiness, and green replacement Main
- PR slices and acceptance evidence: 1. Correct mobile shell browser coverage and Codex summary status classification; Acceptance evidence: focused unit/browser proof, full Main-equivalent PR validation, readiness, and green replacement Main

## Initial plan

1. Retain the already-proven mobile shell Playwright correction.
2. Add the smallest exact-actor and exact-marker status classifier with adversarial unit coverage.
3. Integrate, run pre-push hygiene and local review, push the replacement head, and restart full validation.
4. Reconcile all feedback, pass readiness, squash merge, and monitor replacement Main to success.
5. Publish completion records linking both incident boundaries and the final evidence.

## Completion evidence

- CI-agent tests prove the new Codex summary status is non-actionable without weakening real-feedback detection.
- Focused and full Web e2e, full Extension e2e, UI demo, Rust, WASM, policy, preview, and coverage checks pass on one exact head.
- Readiness succeeds with zero unresolved actionable feedback.
- The squash merge produces a successful Main workflow.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure detail.
