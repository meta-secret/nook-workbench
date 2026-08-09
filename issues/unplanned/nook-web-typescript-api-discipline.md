---
title: Apply strict TypeScript API discipline across Nook web
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-08T05:48:00Z
updated_at: 2026-08-09T01:45:14Z
source_issues: []
related_prs:
  - meta-secret/nook#952
depends_on: []
---

# Apply strict TypeScript API discipline across Nook web

## Context

Nook web does not yet share three API-shape rules proven in Loom.

The rules are:

- one parameter per authored function or method;
- named typed values for object call arguments;
- named external-value models instead of authored `unknown`.

This issue belongs to [Unplanned engineering repairs](README.md).

## Outcome

Every authored path covered by Nook's web lint commands follows the three
rules. Shared ESLint and preflight checks prevent regressions.

## Scope

Included:

- browser-extension production, script, and e2e TypeScript;
- main web application and shared vault UI TypeScript and Svelte scripts;
- Simple Vault and Sentinel entry packages;
- shared ESLint, typed-project, preflight, and `.cortex` contracts.

Excluded:

- generated Rust/WASM bindings;
- product behavior or visual redesign;
- host-owned callback signatures that require a documented local exception.

## Acceptance criteria

- [x] Extension reusable libraries pass all three rules.
- [x] Extension content and popup paths pass all three rules.
- [x] Extension background and offscreen paths pass all three rules.
- [x] Extension scripts and e2e paths pass all three rules.
- [ ] Simple Vault and Sentinel paths pass all three rules.
- [ ] Main application and shared vault UI pass all three rules.
- [x] Shared ESLint and preflight contracts prevent rule removal.
- [ ] Exact-head repository-owned validation is green for every delivery PR.

## Progress

- 2026-08-08: Opened PR 952 for shared enforcement and the first extension
  library slice.
- 2026-08-09: Merged PR 952. The extension slice now passes the three rules,
  shared ESLint and preflight enforce them, and exact-head validation passed.
  Simple Vault, Sentinel, the main application, and shared vault UI remain in
  this rollout issue.

## Findings and decisions

- The initial extension census found 853 violations.
- The findings split into 226 multi-parameter signatures, 280 authored
  `unknown` types, and 347 inline object call arguments.
- Migrate one enforced slice at a time.
- Do not add a broad baseline or disable the rules for authored code.
- Keep host callback exceptions local and documented.
- Generic external-value bags are prohibited in domain and application APIs.
  A structural external value is allowed only as a private untrusted-ingress
  implementation detail that immediately narrows into a concrete domain type.

## References

- [Task plan](../../plans/unplanned/20260808-051430-nook-web-typescript-api-rules.md)
- [Nook PR 952](https://github.com/meta-secret/nook/pull/952)
