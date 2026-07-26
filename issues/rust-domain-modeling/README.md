---
title: Explicit Rust domain states
status: proposed
created_at: 2026-07-26T22:32:47Z
updated_at: 2026-07-26T22:32:47Z
---

# Explicit Rust domain states

## Goal

Make invalid Rust domain states unrepresentable by using required validated
values and enums with variant-owned data, while preserving idiomatic `Option<T>`
for truthful structural absence and raw compatibility boundaries.

## Current state

A repository-wide occurrence audit reviewed 519 explicit `Option<T>` uses.
Thirteen event-domain occurrences are being removed immediately. Most remaining
uses are structural lookups/inputs or boundary DTOs; 36 internal occurrences
need owner-domain design and migration work before they can be changed safely.

## Decisions

- Required persisted and signed values are required validated values.
- Named authorization, lifecycle, configuration, and workflow states use enums.
- Iterator, lookup, parser, optional caller-input, cache, and raw compatibility
  absence may remain `Option<T>`.
- Refactors are split by owning domain so wire/storage migrations and invariant
  tests remain reviewable.

## Issues

- [ ] [Model Hive and Lace execution states explicitly](hive-and-lace-execution-states.md)
- [ ] [Model vault configuration and session states explicitly](vault-configuration-and-session-states.md)
- [ ] [Model event projection lifecycle states explicitly](event-projection-lifecycle-states.md)

## References

- [Authored Rust Option inventory](https://github.com/meta-secret/nook/blob/main/.cortex/references/rust-option-inventory.md)
- [Rust coding rule](https://github.com/meta-secret/nook/blob/main/.cortex/dynamic-skills/rust-coding.md)
