---
title: Complete repository type and action ownership refactoring
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: global-type-safety-refactor
created_at: 2026-09-08T23:53:00Z
updated_at: 2026-09-08T23:53:00Z
source_issues: []
related_prs: []
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

- [ ] Remaining implementation scope accounted for through team handoffs.
- [ ] Changed operations have meaningful owners and consuming state transitions where appropriate.
- [ ] Rust/WASM consumers and browser adapters use consistent APIs.
- [ ] Affected unit-test sources reflect changed contracts without being executed.
- [ ] Pull request published with accurate scope and validation limitations.

## Progress

- 2026-09-08: Published the [expanded immutable plan](../../plans/rust-action-ownership/2026-09-08T23-53-00Z-global-type-safety-refactor.md); Rust writer active, other team discovery read-only.

## Findings and decisions

- The user waived the PR addition budget for this mission; the source-file size constraint remains.
- Existing sound domain owners remain intact. Framework and ABI adapters must stay narrow rather than receive cosmetic wrappers.
- One write-capable team runs at a time in the shared branch.

## References

- [Feature](README.md)
- [Expanded plan](../../plans/rust-action-ownership/2026-09-08T23-53-00Z-global-type-safety-refactor.md)
