---
title: Explicit Rust domain states
status: proposed
created_at: 2026-07-26T22:32:47Z
updated_at: 2026-07-27T08:55:17Z
related_prs:
  - https://github.com/meta-secret/nook/pull/796
---

# Explicit Rust domain states

## Goal

Make invalid Rust domain states unrepresentable by using required validated
values and enums with variant-owned data, while preserving idiomatic `Option<T>`
for truthful structural absence and raw compatibility boundaries.

## Current state

A repository-wide occurrence audit reviewed 518 explicit `Option<T>` type uses
at task start. PR 796 removed invalid event, revision, workflow, device-mode,
session, and wire-result absence; made both encrypted-secret fingerprints
required validated values; and eliminated every authored Rust `.unwrap()` and
`.unwrap_err()`. The merged tree contains 331 explicit `Option<T>` type uses.
Those remaining occurrences are retained structural absence, caller input,
lookups/parsers, or boundary shapes, with the owner-domain candidates below
kept as focused follow-up records.

## Decisions

- Required persisted and signed values are required validated values.
- Named authorization, lifecycle, configuration, and workflow states use enums.
- Iterator, lookup, parser, optional caller-input, cache, and raw compatibility
  absence may remain `Option<T>`.
- Refactors are split by owning domain so wire/storage migrations and invariant
  tests remain reviewable.

## Issues

- [x] [Adopt Rust ecosystem quality and security gates](rust-ecosystem-quality-gates.md)
- [ ] [Model Hive and Lace execution states explicitly](hive-and-lace-execution-states.md)
- [ ] [Model vault configuration and session states explicitly](vault-configuration-and-session-states.md)
- [ ] [Model event projection lifecycle states explicitly](event-projection-lifecycle-states.md)

## Progress

- 2026-07-29: [PR 870](https://github.com/meta-secret/nook/pull/870)
  added repository-owned dependency policy, advisory auditing, property and
  snapshot tests, concurrency model checking, fuzzing, bounded proofs, and
  typed Dylint checks.
- 2026-07-27: [PR 796](https://github.com/meta-secret/nook/pull/796)
  landed required non-empty fingerprints, explicit revision/workflow/actor-key/
  PIN and wire-result states, concrete `thiserror` production errors,
  `anyhow::Result` test propagation, repository-wide unwrap denial, and the
  durable Cortex coding rules. No legacy fallback or compatibility backfill was
  retained.

## References

- [Rust coding rule](https://github.com/meta-secret/nook/blob/main/.cortex/dynamic-skills/rust-coding.md)
- [PR 796](https://github.com/meta-secret/nook/pull/796)
