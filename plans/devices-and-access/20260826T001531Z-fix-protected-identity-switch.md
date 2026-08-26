---
title: Repair protected identity switching blank screen
feature: devices-and-access
issue: issues/devices-and-access/independent-local-identity-keyring.md
started_at: 2026-08-26T00:15:31Z
agent: codex
---

# Repair protected identity switching blank screen

## Interpreted request

Restore the Devices & access protected-identity activation flow so selecting another local identity and choosing its activation action always leaves the user in a rendered, recoverable application state. The fix must preserve the Rust/WASM-owned local identity and protection boundaries introduced by the independent keyring feature.

## Requirements

- Reproduce or trace the transition that removes the authenticated application content.
- Keep the Devices & access surface mounted while the target identity authentication ceremony is pending.
- On success, activate the intended identity and refresh the dashboard without exposing protected material.
- On cancellation or failure, preserve or restore a usable state with an actionable error or retry path.
- Add focused browser regression coverage for the visible switch flow and update the required UI demo contract.
- Deliver the fix through a focused pull request with exact-head GitHub Actions validation and readiness evidence.

## Constraints and exclusions

- Do not weaken app-key protection, identity membership, vault ownership, or typed Rust/WASM authority.
- Do not add a second identity-switch implementation or persist plaintext secrets in web state.
- Do not redesign unrelated Devices & access content or expand replicated identity-control scope.
- Treat the current independently protected local identity implementation as the compatibility baseline.

## Change budget and PR sequence

- Estimated authored changed lines: 300
- Owning modules, packages, or layers: production web application shell, Devices & access interaction state, focused Playwright coverage, and UI demo coverage
- Public or cross-module interfaces: Existing typed Rust/WASM identity activation contract remains unchanged
- Delivery shape: One PR
- Current PR estimated authored changed lines: 300
- Current PR slice and acceptance evidence: Protected identity transition repair; Acceptance evidence: focused browser scenarios prove pending, successful, and cancellation-safe rendered states, while complete exact-head validation proves repository compatibility
- PR slices and acceptance evidence: Protected identity transition repair; Acceptance evidence: focused browser scenarios prove pending, successful, and cancellation-safe rendered states, while complete exact-head validation proves repository compatibility

## Initial plan

1. Inspect the exact main baseline, rendered transition, application logs when available, and the existing identity-switch browser contract.
2. Review the production web module boundary and identify the smallest lifecycle correction.
3. Implement the correction with focused interaction and demo regression coverage.
4. Format, review, push, run hosted validation, address findings, and complete the exact-head readiness audit.
5. Squash-merge and publish the linked completion worklog and statistics.

## Completion evidence

- The protected identity action no longer unmounts the main application into an empty page.
- Focused browser coverage proves a target identity can authenticate and become active without losing the Devices & access surface.
- Cancellation or authentication failure leaves a usable rendered state.
- Repository-owned checks and exact-head readiness pass on the delivered pull request.

## Safety review

This plan contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure detail.
