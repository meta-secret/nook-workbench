---
title: Apply strict TypeScript API rules to Nook web
feature: unplanned
issue:
started_at: 2026-08-08T05:14:30Z
agent: codex
---

# Apply strict TypeScript API rules to Nook web

## Interpreted request

Bring the most useful mechanical TypeScript API rules proven in Loom into
Nook's authored web code. Start with the browser extension, then migrate the
lowest-risk remaining web surfaces. Make the chosen rules durable static
checks instead of one-time cleanup.

## Requirements

- Compare Loom's single-parameter, named-call-argument, and external-value
  rules with Nook's current ESLint, TypeScript, and preflight contracts.
- Enforce compatible rules through the shared web lint configuration.
- Refactor the browser extension first without weakening browser-message,
  WebAuthn, authentication, or vault boundaries.
- Continue into the easiest shared or application surfaces only when the
  migration remains reviewable and behavior-preserving.
- Add focused mechanical coverage for the selected rule configuration.
- Keep generated bindings excluded and keep portable policy in Rust/WASM.

## Constraints and exclusions

- Do not copy Loom-only external payload types without adapting them to Nook's
  browser and platform boundaries.
- Do not silence existing findings with broad exclusions or thresholds.
- Avoid unrelated user-interface redesign or product behavior changes.
- Heavy builds, tests, and full validation run on GitHub-hosted workers.

## Initial plan

1. Inventory current web lint coverage and count violations by package and rule.
2. Select the compatible rule set and document its Nook-specific scope.
3. Add shared static enforcement and focused configuration/preflight tests.
4. Migrate the extension, then the smallest remaining web packages and shared
   helpers that can be changed safely in the same pull request.
5. Format, publish the implementation, validate the exact head, address all
   failures and existing feedback, then squash-merge.

## Completion evidence

- Shared web lint rejects newly introduced violations of the selected rules.
- Extension and selected web packages contain no violations in enforced paths.
- Focused hosted web and extension checks pass.
- Exact-head repository-owned pull-request validation is green.
- The implementation is squash-merged and recorded in Workbench.

## Safety review

This plan contains no raw prompt, transcript, secrets, private data, raw logs,
local paths, or unnecessary infrastructure detail.
