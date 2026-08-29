---
title: Restore reliable locked Pilot action
feature: nook-pilot-authentication-control-plane
issue: issues/nook-pilot-authentication-control-plane/contextual-hud-extension-presentation.md
started_at: 2026-08-29T00:53:11Z
agent: codex
---

# Restore reliable locked Pilot action

## Interpreted request

Make the browser extension's in-page authentication action visibly and reliably respond when a login workflow is actionable but its linked vault is not currently available. Confirm whether the pending action-first Pilot work already owns the failure, complete any missing focused correction, and deliver the owned presentation slice so users no longer encounter an inert primary action.

## Requirements

- Trace the page action through the content script, background session lifecycle, and trusted extension-owned unlock surface.
- Preserve the rule that host-page markup receives no vault metadata, account labels, or secrets.
- When the toolbar popup API cannot open, provide the established extension-owned fallback rather than silently swallowing the action.
- Keep vault navigation and unlock in a trusted extension surface; do not restore competing page-level vault controls.
- Add or retain focused regression coverage for successful popup opening and rejected popup opening.
- Rebase the existing owned Pilot presentation slice onto current main, validate its exact head, and deliver it through the existing pull request if its contract already covers the report.

## Constraints and exclusions

- Do not move authentication policy or credential matching into TypeScript presentation code.
- Do not expose secrets or identifying vault data in the website DOM or logs.
- Do not change cryptography, persistent vault storage, or website passkey policy.
- Avoid creating a competing implementation when the active Pilot presentation slice already contains the required behavior.

## Change budget and PR sequence

- Estimated authored changed lines: 40
- Owning modules, packages, or layers: nook-web-extension content presentation, background session lifecycle, focused extension unit tests, and browser acceptance contracts
- Ownership units:
1. Capability: Make the locked in-page Pilot action reliably open a trusted extension unlock surface and retain a tested fallback; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: focused session lifecycle tests, targeted extension browser evidence, exact-head review, pull request validation, and readiness audit
- Public or cross-module interfaces: Existing extension runtime request and session lifecycle messages only
- Delivery shape: One PR
- Current PR estimated authored changed lines: 40
- Current PR slice and acceptance evidence: Complete the existing action-first Pilot presentation slice and its locked-action fallback; Acceptance evidence: focused unit and extension browser tests, exact-head GitHub validation, resolved review conversations, and readiness audit
- PR slices and acceptance evidence: 1. Complete the existing action-first Pilot presentation slice and its locked-action fallback; Acceptance evidence: focused unit and extension browser tests, exact-head GitHub validation, resolved review conversations, and readiness audit

## Initial plan

1. Compare current main with the existing Pilot presentation pull request and identify the exact inert-action path.
2. Have the web-development owner rebase the existing slice, preserve or complete its extension-owned fallback, and update focused tests only where evidence is missing.
3. Integrate the verified handoff, run local focused and repository hygiene checks, then update the existing pull request.
4. Stabilize exact-head review and validation, run readiness, and merge only when the complete owned slice is green.

## Completion evidence

- A locked actionable login routes to the trusted extension toolbar surface when supported and to an extension-owned tab when popup opening is rejected.
- The website surface has one action-specific control and no page-level vault navigation or takeover controls.
- Focused extension tests and browser evidence pass on the final exact commit.
- The existing Pilot presentation pull request is current, reviewed, ready, and merged without unresolved conversations.

## Safety review

This record contains a synthesized product and delivery interpretation only. It includes no raw prompt, transcript, secrets, private vault data, raw logs, local paths, or infrastructure credentials.
