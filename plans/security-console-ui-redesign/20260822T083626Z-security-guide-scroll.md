---
title: Restore security guide scrolling
feature: security-console-ui-redesign
issue: issues/backlog/gh-46-web-fix-inconsistent-shell-height-when-switching-vault-onboard-settings-.md
started_at: 2026-08-22T08:36:26Z
agent: codex
---

# Restore security guide scrolling

## Interpreted request

Make every recommendation and action in the expanded vault security guide
reachable when the authenticated shell is shorter than its content.

## Requirements

- Preserve the fixed authenticated-shell height and bottom navigation.
- Keep vertical scrolling owned by the shell content region.
- Support short desktop and mobile viewports without horizontal overflow.
- Add browser evidence that the lower recommendation can be reached by user
  scrolling while the bottom navigation stays visible.
- Preserve existing security-guide actions, localization, and vault behavior.

## Constraints and exclusions

- This is a web layout and browser-coverage change.
- Rust/WASM state and security policy remain unchanged.
- The guide's content and visual language remain unchanged.
- Authenticated navigation destinations remain unchanged.

## Change budget and PR sequence

- Estimated authored changed lines: 80
- Owning modules, packages, or layers: Shared Svelte vault shell styles and web Playwright coverage.
- Public or cross-module interfaces: No public or cross-module interface changes.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 80
- Current PR slice and acceptance evidence: Restore the shell content scroller; Acceptance evidence: short-viewport Playwright assertions reach the final guide action while bottom navigation remains visible.
- PR slices and acceptance evidence:
  Restore the shell content scroller; Acceptance evidence: short-viewport Playwright assertions reach the final guide action while bottom navigation remains visible.

## Initial plan

1. Reproduce the clipping and inspect the shell height and overflow chain.
2. Correct the flex sizing or scroll ownership at the narrowest responsible
   container.
3. Extend shell-height Playwright coverage and a representative UI demo.
4. Validate the rendered flow at short desktop and phone viewport sizes.
5. Deliver through exact-head review, validation, readiness, and squash merge.

## Completion evidence

- Browser assertions prove the expanded guide's final action is reachable
  after scrolling at a short viewport.
- The bottom navigation remains in the viewport and document width is stable.
- Exact-head hosted checks, UI demo, review, and readiness pass.

## Safety review

- This record contains no prompt transcript, secrets, private data, raw logs,
  local paths, or unnecessary infrastructure details.
