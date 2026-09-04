# Rust action ownership

## Outcome

Rust domain operations belong to meaningful types, and state-dependent actions use small data-carrying typestates so invalid action sequences are unavailable through the API.

## Focused deliverables

- [Architecture and lint foundation](foundation.md): policy, compiler diagnostics, and fixture evidence.
- [Incremental domain adoption](domain-adoption.md): complete coverage inventory and domain sequence.
- [Credential-fill ownership](credential-fill.md): merged in PR 1342.
- [Account-picker phase ownership](account-picker.md): private phase types and hosted compile-fail tests in PR 1345.
- [Extension pairing and persistence](extension-pairing.md): domain operation ownership and unchanged browser contracts.

## Shared decisions and interfaces

Prefer distinct state structs with private invariant-bearing fields and consuming transitions. Closed enums represent branching outcomes. Existing runtime authorization and input validation remain authoritative. Keep public WASM contracts explicit.

## Dependencies and acceptance

Domain adoption depends on the reviewed foundation. Each adopted scope must activate compiler enforcement, test valid transitions, and reject forbidden action sequences at compile time. A method-placement lint cannot establish semantic ownership or security by itself.

## Status

Foundation merged in [PR 1339](https://github.com/meta-secret/nook/pull/1339), with hosted validation and readiness passed. Project-wide adoption is in progress. Credential-fill ownership merged in [PR 1342](https://github.com/meta-secret/nook/pull/1342); account-picker phase modeling is validating in [PR 1345](https://github.com/meta-secret/nook/pull/1345).

## Project-wide adoption contract

The migration covers authored Rust across product crates, binaries, tooling, examples, and test helpers. Each named operation receives a meaningful domain owner. Meaningful state-dependent flows use simple data-carrying states with controlled construction and valid transitions. Stateless operations do not gain artificial lifecycle states.

Delivery proceeds through cohesive domain PRs with their consumers and validation. The inventory records migrated scopes, compiler-enforcement activation, boundary exceptions, and remaining action flows. Completion requires all authored Rust scopes accounted for, ownership enforcement enabled, and migrated action graphs covered by behavioral and invalid-use tests.

## Progress

- 2026-09-04: Authorized continued project-wide migration through successive reviewed and merged PRs. Development core and Security are inventorying domain boundaries before the first adoption slice.
