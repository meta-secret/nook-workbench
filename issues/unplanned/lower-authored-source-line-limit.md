---
title: Lower every authored source file to 750 lines
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-10T16:34:48Z
updated_at: 2026-08-11T03:00:34Z
source_issues: []
related_prs:
  - meta-secret/nook#964
  - meta-secret/nook#965
  - meta-secret/nook#966
  - meta-secret/nook#967
  - meta-secret/nook#968
  - meta-secret/nook#969
depends_on: []
---

# Lower every authored source file to 750 lines

## Context

Nook currently enforces a uniform 1,000-line ceiling for authored source files.
The codebase must move to the stricter 750-line architecture rule without
arbitrary numbered fragments or test-only extraction.

This issue belongs to [Unplanned engineering repairs](README.md).

## Outcome

Every authored source file covered by the source-architecture scanner is at or
below 750 physical lines. The scanner, tests, and durable guidance enforce the
same threshold.

## Scope

Included:

- production Rust, TypeScript, JavaScript, Svelte, scripts, workflow source,
  and authored test source covered by preflight;
- cohesive extraction by domain, capability, lifecycle, or dependency owner;
- colocated Rust unit tests and behavior-preserving validation;
- scanner, contract, and canonical guidance changes after violations are gone.

Excluded:

- generated code, vendored dependencies, build outputs, caches, and fixture
  data already excluded by provenance rules;
- unrelated product behavior or visual redesign.

## Acceptance criteria

- [x] The initial platform-domain batch is decomposed below 750 lines.
- [ ] Every remaining authored source violation is decomposed below 750 lines.
- [ ] Rust unit tests remain beside the focused implementation they cover.
- [ ] The scanner, tests, and durable guidance enforce 750 lines.
- [x] Exact-head repository-owned validation passes for every delivery PR.

## Progress

- 2026-08-10: Merged PR 964. Fourteen oversized platform owners were split
  into cohesive production modules, all extracted Rust tests were colocated,
  and exact-head native, WASM, web, preview, architecture, and ecosystem gates
  passed. The enforcement ceiling remains 1,000 until the remaining violations
  have been removed.
- 2026-08-10: Merged PR 965. Extension pairing migration, sync-provider
  arguments, event authorization, provider synchronization, security-epoch,
  and IndexedDB device-identity responsibilities moved into focused production
  modules. Every touched source is at or below 750 lines. Root formatting now
  covers the standalone preflight crate mechanically. Exact-head focused and
  complete validation passed without a PR retrigger.
- 2026-08-10: Merged PR 966. Sentinel deep-link handling, encrypted device
  roster storage, enrollment-code envelopes, and public wire metadata moved
  into focused auth production modules with their behavior tests. All eight
  affected Rust files are below 750 lines. Focused and complete exact-head
  validation passed on the first attempt.
- 2026-08-10: Merged PR 967. Hive Main-run selection, delivery readiness,
  Neo4j migration and enqueue behavior, and the WASM manager session lifecycle
  moved into focused production owners. All eight affected Rust files are below
  750 lines. Focused validation passed. Complete exact-head validation passed
  after one infrastructure-only retrigger caused by interrupted Zot streams.
- 2026-08-11: Merged PR 968. Hive Codex activity telemetry, dispatcher
  Workbench Git lifecycle, observer presentation, and worker workspace behavior
  moved into focused production owners. All nine affected Rust files are below
  750 lines. Exact-head focused and complete validation passed after a
  Linux-only unused import was removed. The replacement Main Hive and Rust
  ecosystem workflows also passed.
- 2026-08-11: Merged PR 969. Shared-storage grants, enrollment entry
  encryption, secret-record presentation, and event-log transport moved into
  focused Rust/WASM production owners. All seven source owners are below 750
  lines. Three exact-head validation cycles passed: the original delivery, a
  current-Main rebase, and a review-driven test-ownership correction.

## Findings and decisions

- Lowering enforcement before decomposition would block every intermediate PR.
- Deliver focused batches from the largest files downward, then lower the
  executable threshold in the final stack layer.
- The first batch exposed a formatting ownership gap: the root formatter did
  not cover the standalone preflight crate. PR 965 added mechanical coverage.
- Focused Rust extraction includes moving or adding the direct unit tests in
  the same module before first review.
- Production sibling modules need explicit visibility and direct imports after
  extraction; strict all-target Clippy is the earliest complete proof of both
  production and colocated-test ownership.
- Keep secret wire values in the parent wire owner while validated public
  digest, signing-key, and timestamp metadata lives in a focused submodule.
- Correlated BuildKit `short read` failures across unrelated jobs require live
  registry verification before an unchanged exact-head retrigger.
- Platform-gated test imports must move with their tests. Hosted Linux Clippy
  remains the authoritative proof when a local macOS build cannot compile that
  conditional path.
- A production extraction is incomplete when its direct Rust unit tests remain
  in a sibling module. Review and source-architecture audits must verify test
  ownership as well as production line counts.

## References

- [Task-start plan](../../plans/unplanned/2026-08-10T16-34-48Z-lower-source-line-limit.md)
- [Nook PR 964](https://github.com/meta-secret/nook/pull/964)
- [Nook PR 965](https://github.com/meta-secret/nook/pull/965)
- [Nook PR 966](https://github.com/meta-secret/nook/pull/966)
- [Nook PR 967](https://github.com/meta-secret/nook/pull/967)
- [Nook PR 968](https://github.com/meta-secret/nook/pull/968)
- [Nook PR 969](https://github.com/meta-secret/nook/pull/969)
