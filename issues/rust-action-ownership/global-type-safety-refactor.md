---
title: Complete repository type and action ownership refactoring
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: global-type-safety-refactor
created_at: 2026-09-08T23:53:00Z
updated_at: 2026-09-09T04:39:13Z
source_issues: []
related_prs: [1573]
depends_on: []
---

# Complete repository type and action ownership refactoring

## Context

The [Rust action ownership feature](README.md) has established typed domain patterns and migrated many portable operations. Remaining adoption spans browser adapters, companion observations, repository tooling, and preflight code. This mission consolidates those surfaces in one explicitly authorized large pull request.

## Outcome

Consistent meaningful operation owners, explicit valid states, typed request APIs, and matching consumer and test sources across authored Rust and TypeScript.

## Scope

- Product Rust and WASM, browser TypeScript and Svelte, Loom, Hive, CI-agent, and Rust preflight.
- Preserve existing behavior, cryptographic and authorization enforcement, wire/storage compatibility, and secret lifetimes.
- Exclude generated and vendored code from independent rewrites.
- Do not run tests, compilation, or local or GitHub code reviews. Stop at PR creation.

## Acceptance criteria

- [x] Remaining implementation scope accounted for through team handoffs.
- [x] Changed operations have meaningful owners and consuming state transitions where appropriate.
- [x] Rust/WASM consumers and browser adapters use consistent APIs.
- [x] Affected unit-test sources reflect changed contracts without being executed.
- [x] Pull request published with accurate scope and validation limitations.

- [ ] Known JSON schemas deserialize to named types; dynamic JSON and JsValue remain only at justified boundaries.
- [ ] Affected browser/tooling consumers and unit sources use coherent typed contracts.

## Progress

- 2026-09-08: Published the [expanded immutable plan](../../plans/rust-action-ownership/2026-09-08T23-53-00Z-global-type-safety-refactor.md); Rust writer active, other team discovery read-only.

- 2026-09-09: Rust committed as `4246df44e` (220 files); browser migration committed as `e4397fa12` (345 files). Both writers reported formatting, whitespace and source-size hygiene passed; no tests, compiler or reviews executed. Loom is the active next writer, followed by SRE. The [latest immutable plan](../../plans/rust-action-ownership/2026-09-09T02-47-00Z-global-type-safety-refactor.md) updates the estimate for remaining tooling.

- 2026-09-09T04:35:30Z: All implementation stages completed: Rust `4246df44e`, browser `e4397fa12`, Loom `c7d1a90ff`, infrastructure `0b28295dd`, final trusted-wrapper fixture `232ed1a27`. Published [PR #1573](https://github.com/meta-secret/nook/pull/1573) at head `232ed1a275f1e2ee77bbf4957f3ca842eaa96c55`. Team formatting and final whitespace/static demo checks passed. Canonical Docker formatting was unavailable; tests, compilation and reviews were not run. The requested delivery ends at the open PR. [Completed worklog](../../worklogs/rust-action-ownership/2026-09-09T04-35-30Z-global-type-safety-refactor.md).

- 2026-09-09T04:39:13Z: Reopened within PR #1573 to implement typed JSON deserialization and Rust/WASM return contracts across product and tooling. [Serialization extension plan](../../plans/rust-action-ownership/2026-09-09T04-38-30Z-typed-json-boundaries.md). Existing exclusions and PR-size waiver remain in force.

## Findings and decisions

- The user waived the PR addition budget for this mission; the source-file size constraint remains.
- Existing sound domain owners remain intact. Framework and ABI adapters must stay narrow rather than receive cosmetic wrappers.
- One write-capable team runs at a time in the shared branch.

## References

- [Feature](README.md)
- [Expanded plan](../../plans/rust-action-ownership/2026-09-08T23-53-00Z-global-type-safety-refactor.md)
