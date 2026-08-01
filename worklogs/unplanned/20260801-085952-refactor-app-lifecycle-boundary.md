---
title: Refactor the vault app lifecycle ownership boundary
feature: unplanned
issue: none
plan: plans/unplanned/20260801-074923-move-app-lifecycle-state-to-rust.md
nook_pr: 900
status: completed
started_at: 2026-08-01T07:49:23Z
finished_at: 2026-08-01T08:59:52Z
agent: codex
---

# Refactor the vault app lifecycle ownership boundary

## Outcome

Deleted the monolithic TypeScript `app-lifecycle-state.ts` module and classified
each responsibility by its real ownership. Browser lifecycle and presentation
state now live in focused TypeScript modules, while the existing Rust-owned
`StorageProviderType` is the sole provider discriminant. PR 900 is ready but
remains open and unmerged pending explicit user direction.

## Progress

- Split theme, legal-route, extension-connect, extension-setup, and
  device-protected operation state into cohesive adjacent modules.
- Extracted existing-vault import orchestration from `App.svelte` into a focused
  reactive browser controller, reducing `App.svelte` from 994 to 828 lines.
- Removed the duplicate TypeScript existing-vault provider-kind mirror and used
  the generated Rust provider type directly.
- Preserved three distinct browser lifecycle state machines for vault creation,
  existing-vault import, and enrollment rather than collapsing them into a
  generic queue enum.
- Added focused provider tests and preflight coverage for the ownership boundary,
  retired module, distinct lifecycle enums, and 1,000-line source limit.
- Addressed the P1 review finding, replied on its original thread, verified the
  reply, and resolved the conversation.

## Implementation problems

- The first implementation over-moved browser queue and automatic-resume policy
  into `nook-core`. Review correctly identified that this was reactive browser
  orchestration rather than portable vault policy. The Rust enum and WASM APIs
  were removed, and distinct TypeScript lifecycle enums were restored.
- Moving runtime boundary assertions pushed the original preflight test module
  past the hard source-size limit. The cohesive runtime assertions were split
  into `runtime_boundary_contracts.rs`.
- Rust formatter versions disagreed on wrapping a long compound assertion. The
  assertion was rewritten with named predicates so both sealed environments
  produce stable formatting.
- A focused test initially used incomplete cast fixtures. It now constructs
  complete generated provider configurations through existing typed helpers.

## Decisions

- The user premise was only partly correct: portable provider vocabulary belongs
  in Rust, but browser lifecycle, presentation, and credential-bearing reactive
  queues belong in TypeScript/Svelte.
- The former monolith stays deleted even though its browser-owned entities remain
  TypeScript; deletion was achieved through responsibility-based modules rather
  than an incorrect wholesale Rust move.
- OAuth configuration, local folder handles, plaintext enrollment input, URL
  routing, local storage, media queries, and extension visibility remain at the
  browser boundary.
- `StorageProviderType` remains generated from Rust and is not mirrored or
  renamed in TypeScript.

## Validation

- `task format` passed after the final review correction.
- Unified, Simple, and Sentinel Svelte/TypeScript checks passed with zero errors
  and zero warnings.
- Twenty-three focused route, extension, and existing-vault provider tests
  passed.
- The complete sealed preflight suite passed, including 30 unit tests, 15 core
  ownership tests, 21 vault-app isolation tests, and source-size enforcement.
- The UI demo contract passed with the device-protection import and secret-type
  picker demos.
- Exact-head focused preflight, WASM build, web check, and Rust test runs passed:
  30692288749, 30692288771, 30692288768, and 30692289061.
- Exact-head Rust ecosystem checks passed in run 30692295999.
- Exact-head PR verification and preview passed in run 30692296069.
- `task pr:ready PR=900` reported `ready: true`, zero unresolved threads, a
  successful exact-head Pages deployment, and no base drift.

## Remaining work

- Merge PR 900 only after explicit user instruction.
