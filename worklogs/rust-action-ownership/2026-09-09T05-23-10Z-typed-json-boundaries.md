---
title: Typed serialization boundaries across Rust and TypeScript
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T04-38-30Z-typed-json-boundaries.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T04:38:30Z
finished_at: 2026-09-09T05:23:10Z
agent: codex
---

# Work summary

## Outcome

Extended [PR #1573](https://github.com/meta-secret/nook/pull/1573) with concrete serialization contracts across product and tooling. Delivery ends at the open PR.

## Progress

- Development core commit `a5653934417b2581bfef8f90ebd19cfb2dd10b35`: 36 files; concrete handoff/form/catalog/provider/import records, generated passkey DTOs, and standard serde JSON results. Removed in-memory JSON round trips; retained narrow canonicalization, arbitrary metadata, migration inspection, rollback comparison, and JavaScript ABI boundaries. Rustfmt, whitespace, and source-size checks passed.
- Web commit `d6c3164c734615a40f5c1b3b7b215d4d410e5e9d`: 12 files; canonical Rust passkey DTO consumers, CloudKit boundary narrowing, typed OAuth equality, cache decoder guards, and four updated test sources. Formatting, whitespace, and source-size checks passed. A remaining pairing migration equality operation was routed back to its Rust owner.
- Development core follow-on `6d3d136142ba434c85e12e87bdb33f29c19bb537`: typed companion-WASM pairing record comparison replaces serialization equality with derived Rust structural equality and a named Equivalent/Different outcome. Added inline unit sources; formatting/whitespace/source-size checks passed.
- Web follow-on `7460a47226474e09485b873558aa02601884a9b8`: migration completed-key checks consume Rust structural comparison; test sources cover reordered properties and changed records. Formatting, whitespace, and source-size hygiene passed.
- AI commit `4620f06cd3bed370cb7f1d456688e15424ceabc9`: 21 files; concrete journal/event/terminal, Cargo, GitHub policy, delegation and JSON-RPC decoders; four validated Cortex codecs; typed workflow output validation without JSON round trips. Clarified shared/Rust serialization policies and added unexecuted malformed-input unit sources. Prettier, whitespace, and source-size hygiene passed. Raw JSON remains at immediate decoders, actual transports and byte measurements.
- SRE commit `44cd54cfba97ad6e3211025f806f4ac1c716eac2`: 27 files; concrete preflight coverage/tsconfig, Hive observer/GitHub/SDK completion DTOs; validating Kubernetes, OVH, registry and preview decoders. Added the direct preflight serde dependency and adapted decoder/observer/reaper unit sources. Rustfmt/Prettier, whitespace and source-size hygiene passed; trusted CI method/digest unchanged. Remaining dynamic values are SDK JSON Schema, opaque upstream credentials, host stream envelopes and intentional schema/malformed fixtures.


Final head: 44cd54cfba97ad6e3211025f806f4ac1c716eac2.

## Implementation problems

Boundary types and internal domain values had been conflated in several adapters. The implementation separates transport encoding from typed operation results and carries those types through callers and unit-test sources.

## Decisions

- Deserialize known schemas into named structs or discriminated types at the narrow input boundary.
- Keep serialized text only where actual external protocols need it; use standard serde_json::Result for JSON codec errors rather than introducing a generic result wrapper.
- Keep unavoidable JavaScript ABI/error and genuinely arbitrary JSON representations narrow and explicit.
- Preserve wire/storage representations, Rust domain authority, credentials, and secret lifetimes.
- The explicit PR-size waiver continues. No tests, compilation, code reviews, or validation workflows were run.

## Validation

All teams reported formatting, whitespace and source-size checks passed. Final whitespace and static UI demo contract checks passed. Across this continuation, 101 files changed (+3,115/-1,569); all 95 changed Rust/TypeScript/Svelte sources remain below the 1,000-line limit (maximum 999). No tests, compilation, typechecks, code reviews or validation workflows were run. The earlier canonical Docker-based formatting attempt was unavailable and was not rerun; integrated pre-push formatting is not claimed.

Runtime and type correctness remain unverified. The PR is open and was not merged.

## Remaining work

None within the requested implementation and PR-update scope. Identified ABI, arbitrary-schema, canonicalization, migration-inspection and actual transport boundaries remain deliberately dynamic. Runtime and compile-time validation and review were excluded.
