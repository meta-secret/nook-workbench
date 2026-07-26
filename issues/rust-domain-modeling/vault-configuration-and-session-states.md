---
title: Model vault configuration and session states explicitly
status: proposed
priority: p2
automation: manual
owner: unassigned
created_at: 2026-07-26T22:32:47Z
updated_at: 2026-07-26T22:32:47Z
source_issues: []
related_prs: []
depends_on: []
---

# Model vault configuration and session states explicitly

## Context

The Rust audit found internal optional field bags across vault architecture,
provider capability/configuration, stored vault format, access policy, sync
revision state, and the WASM manager session. This is part of
[Explicit Rust domain states](README.md).

## Outcome

Typed enums distinguish configured providers, vault types, access states, sync
revision states, and locked/unlocked/cache lifecycle states without permitting
invalid field combinations.

## Scope

- Include the candidate occurrences in vault architecture, vault format,
  client policy, sync state, access diagnostics, and manager session state.
- Keep incomplete historical IndexedDB/provider JSON in raw compatibility
  structs and convert it into typed domain states immediately after parsing.
- Exclude browser SDK response DTOs and ordinary optional search filters.

## Acceptance criteria

- [ ] Simple and Sentinel architecture variants own only their valid policy
  fields.
- [ ] Provider configuration variants cannot mix GitHub, OAuth-file, and local
  folder credentials/targets.
- [ ] Locked, unlocked, and cache lifecycle states own their required values.
- [ ] Persisted browser/storage migration behavior has Rust coverage.
- [ ] The relevant candidate and boundary entries in the Rust Option inventory
  are resolved or explicitly retained at named boundaries.

## Progress

- Candidate occurrences identified; no implementation started.

## Findings and decisions

- This is migration-sensitive because current IndexedDB records intentionally
  accept incomplete historical shapes.
- Raw compatibility structs must not become the application's decision model.

## References

- [Authored Rust Option inventory](https://github.com/meta-secret/nook/blob/main/.cortex/references/rust-option-inventory.md)
- [Rust coding rule](https://github.com/meta-secret/nook/blob/main/.cortex/dynamic-skills/rust-coding.md)
