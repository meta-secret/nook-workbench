---
title: Finish Cursor review fallback delivery
feature: unplanned
issue: plans/unplanned/20260817T064500Z-cursor-review-fallback.md
started_at: 2026-08-18T02:49:27Z
agent: cursor
---

# Task plan

## Interpreted request

Land the existing Cursor Bugbot fallback pull request. Hosted preflight currently rejects authored `null` and `undefined` in the exact-head review helper. Fix those TypeScript state contracts, keep the branch current with `main`, re-run exact-head validation, and squash-merge when repository-owned checks are green.

## Requirements

- Remove authored `null` and `undefined` tokens from `agentic-ai/ci-agent` review helpers.
- Keep GitHub comment and review payloads as explicit domain unions or required strings after the Octokit boundary.
- Preserve Codex-first exact-head review and Cursor fallback behavior.
- Keep existing ci-agent coverage for usage-limit fallback, pending Codex, and retry-on-new-head.
- Stay current with `origin/main`.
- Trigger complete exact-head validation after the replacement head.
- Squash-merge when readiness succeeds.

## Constraints and exclusions

- Do not change the fallback policy or add another reviewer.
- Do not make Cloud review a merge gate.
- Do not run heavy local product gates.
- Do not copy conversation text into Workbench records.

## Change budget and PR sequence

- Estimated authored changed lines: 1200
- Owning modules, packages, or layers: agentic-ai/ci-agent exact-head review request
- Public or cross-module interfaces: none; internal GitHub actor and comment types only
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1200
- Current PR slice and acceptance evidence: Codex-to-Cursor fallback with explicit TypeScript absence contracts; Acceptance evidence: hosted repository policy and Native Rust preflight pass, and ci-agent tests keep fallback behavior
- PR slices and acceptance evidence: Codex-to-Cursor fallback with explicit TypeScript absence contracts; Acceptance evidence: hosted repository policy and Native Rust preflight pass, and ci-agent tests keep fallback behavior

## Initial plan

1. Replace GitHub actor login lookup with a named present-or-missing union.
2. Drop authored `null` from Octokit comment and review local types.
3. Host-format, push, and dispatch exact-head validation.
4. Squash-merge after readiness succeeds, then publish the worklog and statistics.

## Completion evidence

- `github-review.ts` contains no authored `null` or `undefined` tokens.
- Hosted `Enforce repository policy` and `Native Rust verification` pass on the exact head.
- `Verify and preview` is green.
- Pull request 1049 is squash-merged.

## Safety review

- The record contains only public-safe development context.
- No secrets, credentials, private user data, or raw logs are present.
