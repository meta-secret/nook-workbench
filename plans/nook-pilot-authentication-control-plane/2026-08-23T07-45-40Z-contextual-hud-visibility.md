---
title: Contextual Nook Pilot HUD visibility
feature: nook-pilot-authentication-control-plane
issue: issues/nook-pilot-authentication-control-plane/README.md
started_at: 2026-08-23T07:45:40Z
agent: codex
---

# Task plan

## Interpreted request

Make Nook Pilot quiet during ordinary browsing. The in-page UI must stay absent when the page has no eligible authentication flow. On an eligible login flow with no saved credentials for the origin, Nook should present only its compact affordance until the user chooses to expand it. The full HUD should remain available when it has a useful matching credential or when the user explicitly opens it.

## Requirements

- Gate widget mounting on an actual Rust-classified authentication opportunity.
- Default to compact presentation when the unlocked extension reports zero matching logins.
- Preserve explicit expansion, dismissal, dragging, keyboard access, progress semantics, and secret isolation.
- Keep workflow classification and credential matching in Rust/WASM and background runtime boundaries.
- Add browser-level regression coverage for no-auth pages and zero-match login pages.
- Update the browser-extension product specification with the new default visibility rule.
- Deliver through one Nook pull request, hosted validation, exact-head review, readiness, and squash merge.

## Constraints and exclusions

- Do not add site-specific URL rules or infer vault contents in the content script.
- Do not expose login metadata to the host-page DOM.
- Do not change extension pairing, unlock, vault management, or automatic submit policy.
- Do not redesign the toolbar popup or full Pilot workflow.

## Change budget and PR sequence

- Estimated authored changed lines: 450
- Owning modules, packages, or layers: browser-extension content autofill UI, extension runtime adapters, mock-auth Playwright coverage, browser-extension product specification.
- Public or cross-module interfaces: no new public interface expected; existing typed login-match and workflow snapshot messages may be consumed more precisely.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 450
- Current PR slice and acceptance evidence: Quiet contextual HUD defaults; Acceptance evidence: browser scenarios prove hidden no-auth, compact zero-match, and expanded matched-login states
- PR slices and acceptance evidence: Quiet contextual HUD defaults; Acceptance evidence: browser scenarios prove hidden no-auth, compact zero-match, and expanded matched-login states

## Initial plan

1. Reproduce and trace widget mounting, authentication detection, and match-count state.
2. Define the minimal hidden, compact, and expanded state transitions at the existing typed boundaries.
3. Implement the visibility behavior and update focused unit and Playwright scenarios.
4. Update the owning product specification and validate formatting and UI-demo contracts.
5. Push the exact implementation head, complete hosted validation and review, resolve findings, and merge when ready.

## Completion evidence

- A no-auth page never mounts the Pilot HUD.
- A detected login page with no matching Nook login starts as the compact Nook mark.
- A detected login page with a matching credential retains the useful expanded experience.
- Focused Playwright coverage, repository UI-demo contract, complete exact-head checks, and readiness audit pass.
- The merged PR, Workbench worklog, issue status context, and delivery statistics are published.

## Safety review

This plan is an original task interpretation. It contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
