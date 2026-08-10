---
title: Apply strict TypeScript API discipline across Nook web
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-08-08T05:48:00Z
updated_at: 2026-08-10T05:33:00Z
source_issues: []
related_prs:
  - meta-secret/nook#952
  - meta-secret/nook#955
  - meta-secret/nook#957
  - meta-secret/nook#961
  - meta-secret/nook#962
depends_on: []
---

# Apply strict TypeScript API discipline across Nook web

## Context

Nook web does not yet share three API-shape rules proven in Loom.

The rules are:

- one parameter per authored function or method;
- named typed values for object call arguments;
- concrete domain values instead of authored `unknown` or generic value bags.

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
- [x] Simple Vault and Sentinel paths pass all three rules.
- [x] Main application and shared vault UI pass all three rules.
- [x] Shared ESLint and preflight contracts prevent rule removal.
- [x] Exact-head repository-owned validation is green for every delivery PR.

## Progress

- 2026-08-08: Opened PR 952 for shared enforcement and the first extension
  library slice.
- 2026-08-09: Merged PR 952. The extension slice now passes the three rules,
  shared ESLint and preflight enforce them, and exact-head validation passed.
- 2026-08-09: Merged PR 955. Simple Vault and Sentinel are statically enforced,
  Sentinel's disabled extension boundary uses concrete domain types, and the
  focused hosted web route now receives the exact source revision. All required
  exact-head checks passed. The main application, shared vault UI, research
  package, and removal of the extension's remaining generic transport model
  remain in this rollout.
- 2026-08-10: Merged PR 957. The remaining web packages now pass the strict API
  rules, portable extension policy is owned by companion Rust/WASM, and generic
  application value bags are prohibited. Its resulting Main run exposed
  runtime-only regressions not exercised by the PR suite.
- 2026-08-10: Merged PR 961 after repairing Svelte snippet rendering,
  structured logging, and Rust/WASM enum use in demo stubs. Review feedback was
  monitored while checks ran and was fixed before restarting validation.
- 2026-08-10: Merged PR 962 after the resulting Main run exposed the final OTP
  enum fixture, structured identity log, and extension session fixture gaps.
  Exact Main SHA `fa5ace79e7fb33b216a800fdaf0ede0e9455d457` passed Native,
  WASM, web build, UI demos, full web e2e, full extension e2e, and deployment in
  run 31357862575.

## Findings and decisions

- The initial extension census found 853 violations.
- The findings split into 226 multi-parameter signatures, 280 authored
  `unknown` types, and 347 inline object call arguments.
- Migrate one enforced slice at a time.
- Do not add a broad baseline or disable the rules for authored code.
- Keep host callback exceptions local and documented.
- Generic external-value bags are prohibited in domain and application APIs.
  A generic transport representation may exist only inside a private ingress
  adapter and must narrow immediately into a concrete domain type.
- `ExternalValue` remains migration debt despite the earlier extension rollout;
  it is not accepted as a reusable application API.

## References

- [Initial task plan](../../plans/unplanned/20260808-051430-nook-web-typescript-api-rules.md)
- [Completion task plan](../../plans/unplanned/20260809-015012-complete-nook-web-typescript-api-rules.md)
- [PR 955 worklog](../../worklogs/unplanned/20260809-032800-pr-955-small-vault-packages.md)
- [Nook PR 952](https://github.com/meta-secret/nook/pull/952)
- [Nook PR 955](https://github.com/meta-secret/nook/pull/955)
- [Nook PR 957](https://github.com/meta-secret/nook/pull/957)
- [Nook PR 961](https://github.com/meta-secret/nook/pull/961)
- [Nook PR 962](https://github.com/meta-secret/nook/pull/962)
- [Completion worklog](../../worklogs/unplanned/20260810T053300Z-pr-957-web-api-rollout.md)
