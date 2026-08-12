---
title: Lower every authored source file to 750 lines
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-10T16:34:48Z
updated_at: 2026-08-12T11:46:13Z
source_issues: []
related_prs:
  - meta-secret/nook#964
  - meta-secret/nook#965
  - meta-secret/nook#966
  - meta-secret/nook#967
  - meta-secret/nook#968
  - meta-secret/nook#969
  - meta-secret/nook#972
  - meta-secret/nook#973
  - meta-secret/nook#975
  - meta-secret/nook#976
  - meta-secret/nook#979
  - meta-secret/nook#982
  - meta-secret/nook#983
  - meta-secret/nook#984
  - meta-secret/nook#986
  - meta-secret/nook#987
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
- 2026-08-11: Merged PR 972. Secret-record WASM presentation, browser passkey
  option construction, and Sentinel genesis finalization moved into focused
  production owners. All six affected Rust files are below 750 lines. The
  initial exact-head suite passed, then Main advanced; the rebased head passed
  host formatting, focused validation, source architecture, and the complete
  exact-head suite before merge.
- 2026-08-11: Merged PR 973. Authentication vocabulary, event operation
  application, agent and local workflow contracts, and Bake proof support
  moved into focused owners. All nine affected files are below 750 lines.
  Review-driven Rust test colocation and a current-Main rebase were validated
  by focused and complete exact-head suites before merge.
- 2026-08-11: Merged PR 975. Compiler-cache delivery and remote platform
  integration contracts moved into focused owners. All four affected files
  are below 750 lines. Focused preflight and complete exact-head validation
  passed after adding explicit nested integration-module paths.
- 2026-08-11: Merged PR 976. Identity Bridge elements, device-access detail
  panels, password selection, and Sentinel onboarding guidance moved into
  focused UI owners. All seven affected production owners are below 750 lines.
  Review and preflight feedback replaced implicit bindable absence with
  explicit state, then replaced write-only bindings with a typed one-way
  password-selection action. Focused and complete exact-head validation passed.
- 2026-08-11: Merged PR 979. Extension session request handling, login
  selection, queueing, offscreen lifecycle, vault operations, and website
  passkey operations moved into focused Rust and TypeScript owners. Every
  affected source owner is below 750 lines. Review-driven type and dependency
  corrections passed isolated extension tests and complete exact-head
  validation before merge.
- 2026-08-11: Merged PR 982. Shared enrollment-provider selection and
  shared-grant flush decisions moved from TypeScript into portable Rust and
  typed WASM exports. Browser OAuth projection and storage orchestration remain
  in TypeScript. Password-enrollment issuance now has a focused flow owner,
  every affected source is below 750 lines, and the exact-head suite plus a
  recorded enrollment demo passed before merge.
- 2026-08-11: Merged PR 983. All ten secret import-format WASM bindings moved
  into the existing secret-import adapter beside the parsing and application
  support they consume. The public JavaScript export names remain unchanged,
  both affected Rust owners are below 750 lines, and focused plus complete
  exact-head validation passed before merge.
- 2026-08-12: Merged PR 984. Provider construction, duplicate detection,
  vault scoping, and OAuth credential merge policy moved from TypeScript into
  portable Rust with typed WASM bindings. Browser storage and OAuth lifecycle
  remain in the 737-line TypeScript adapter. Rust behavior tests and actual
  WASM adapter tests cover the migrated policy. Review-driven type, token,
  name, refresh, and multi-vault corrections passed focused and complete
  exact-head validation before merge.
- 2026-08-12: Merged PR 986. Authentication form priority and login-advance
  label policy moved from TypeScript into portable Rust and both typed WASM
  bridges. Browser DOM discovery and mutation remain in TypeScript. The
  password-form and companion-WASM owners are below 750 lines, and review
  corrections for label normalization, bridge ownership, and the UI demo
  passed focused and complete exact-head validation before merge.
- 2026-08-12: Merged PR 987. Portable authentication observation bounds and
  field-count validation moved from TypeScript into companion-core and both
  typed WASM bridges. Chrome sender trust and lifecycle orchestration remain
  in TypeScript, while the service worker was decomposed into cohesive routing
  owners below 750 lines. Review-driven fixes preserved out-of-range inputs
  for Rust rejection and made launcher intent explicit. Focused extension and
  complete exact-head validation passed before merge.

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
- [Nook PR 972](https://github.com/meta-secret/nook/pull/972)
- [Nook PR 973](https://github.com/meta-secret/nook/pull/973)
- [Nook PR 975](https://github.com/meta-secret/nook/pull/975)
- [Nook PR 976](https://github.com/meta-secret/nook/pull/976)
- [Nook PR 979](https://github.com/meta-secret/nook/pull/979)
- [Nook PR 982](https://github.com/meta-secret/nook/pull/982)
- [Nook PR 983](https://github.com/meta-secret/nook/pull/983)
- [Nook PR 984](https://github.com/meta-secret/nook/pull/984)
- [Nook PR 986](https://github.com/meta-secret/nook/pull/986)
- [Nook PR 987](https://github.com/meta-secret/nook/pull/987)
