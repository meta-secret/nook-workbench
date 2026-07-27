---
title: Model vault configuration and session states explicitly
status: proposed
priority: p2
automation: manual
owner: unassigned
created_at: 2026-07-26T22:32:47Z
updated_at: 2026-07-27T08:55:17Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/796
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
- Reject incomplete persisted records instead of synthesizing legacy fallback
  values, then convert valid boundary data into typed domain states.
- Exclude browser SDK response DTOs and ordinary optional search filters.

## Acceptance criteria

- [ ] Simple and Sentinel architecture variants own only their valid policy
  fields.
- [ ] Provider configuration variants cannot mix GitHub, OAuth-file, and local
  folder credentials/targets.
- [ ] Locked, unlocked, and cache lifecycle states own their required values.
- [ ] Persisted browser/storage migration behavior has Rust coverage.
- [ ] Every targeted internal configuration/session absence is resolved or
  retained at a named boundary with an owner-domain rationale.

## Progress

- Candidate occurrences identified; no implementation started.
- 2026-07-27: PR 796 landed explicit revision guards, persisted device/PIN
  modes, authentication workflow classification, locale validation, and
  retained Sentinel ceremony sessions across failed finalization. Broader
  provider configuration and cache lifecycle consolidation remains scoped here.

## Findings and decisions

- Persisted records are validated without legacy fallback.
- Boundary DTOs must not become the application's decision model.

## References

- [Rust coding rule](https://github.com/meta-secret/nook/blob/main/.cortex/dynamic-skills/rust-coding.md)
- [PR 796](https://github.com/meta-secret/nook/pull/796)
