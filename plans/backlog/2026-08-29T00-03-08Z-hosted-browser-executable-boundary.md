---
title: Harden hosted browser executable selection
feature: backlog
issue: issues/backlog/gh-410-add-one-command-download-and-browser-launcher-for-hosted-extension-build.md
started_at: 2026-08-29T00:03:08Z
agent: codex
---

# Task plan

## Interpreted request

Deliver a small prerequisite that prevents hosted-extension launch variables from selecting arbitrary programs and verifies every approved browser binary is executable before any version probe or launch.

## Requirements

- Constrain Chrome and Brave overrides to finite, literal platform paths.
- Fail before probing or launching a missing or non-executable selected browser.
- Preserve isolated profiles, extension loading, stable-Chrome guidance, and remote-debugging metadata.
- Cover approved-path dispatch, unapproved paths, missing binaries, non-executable binaries, and existing launch behavior with the shell test suite.
- Deliver the exact bounded change in its own pull request and request repository-owned exact-head review and validation without merging it.

## Constraints and exclusions

- Change only the hosted launcher and its focused shell test.
- Do not alter extension product behavior beyond executable selection and validation.
- Do not modify the broader command-boundary or skills work that consumes this prerequisite.
- Keep the authored diff below 3,000 changed lines and every authored file below 1,000 lines.

## Change budget and PR sequence

- Estimated authored changed lines: 130
- Owning modules, packages, or layers: Browser extension hosted launcher scripts
- Ownership units:
1. Capability: Trusted hosted browser launch; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Hosted launcher shell tests prove finite path selection and fail-closed executable validation, and the extension fast gate passes
- Public or cross-module interfaces: None
- Delivery shape: One PR
- Current PR estimated authored changed lines: 130
- Current PR slice and acceptance evidence: Hosted launcher executable-selection hardening and focused regressions; Acceptance evidence: hosted launcher tests, extension fast gate, repository pre-push checks, and exact-head pull-request review
- PR slices and acceptance evidence: 1. Hosted launcher executable-selection hardening and focused regressions; Acceptance evidence: hosted launcher tests, extension fast gate, repository pre-push checks, and exact-head pull-request review

## Initial plan

1. Isolate the change on the required main baseline and extract only the final hosted launcher behavior.
2. Add fail-closed executable validation and focused missing/non-executable regressions.
3. Run launcher, extension, formatting, and pre-push validation; verify size and file limits.
4. Commit, push, open the focused pull request, and start exact-head review and validation without merging.

## Completion evidence

- The focused shell suite and repository extension fast gate pass.
- Formatting, pre-push, diff, and authored-file limits pass.
- A dedicated pull request links this plan and the related Workbench issue at the exact validated head.

## Safety review

This public record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
