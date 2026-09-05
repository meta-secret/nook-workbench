# Rust action ownership

## Outcome

Rust domain operations belong to meaningful types, and state-dependent actions use small data-carrying typestates so invalid action sequences are unavailable through the API.

## Focused deliverables

- [Architecture and lint foundation](foundation.md): policy, compiler diagnostics, and fixture evidence.
- [Incremental domain adoption](domain-adoption.md): complete coverage inventory and domain sequence.
- [Credential-fill ownership](credential-fill.md): merged in PR 1342.
- [Account-picker phase ownership](account-picker.md): consuming Rust/WASM transitions and typed browser outcomes merged in PR 1345, with hosted compile-fail and behavior tests.
- [Extension pairing and persistence](extension-pairing.md): domain operation ownership and unchanged browser contracts in PR 1347.
- [Sentinel participant response](sentinel-response.md): checked request ownership before encrypted response generation, merged in PR 1348.
- [Authenticator response ownership](authenticator-responses.md): six complete core decoder modules and their WASM consumers in PR 1352.

- [Sentinel quorum completion](sentinel-quorum.md): consuming collection and finalization with terminal cleanup is validating in PR 1355.
- [Browser coverage deadline](browser-deadline.md): delivered independently in PR 1349; identical PR 1353 closed as superseded after passing validation.
- [Website response ownership](website-responses.md): three core modules and six WASM delegates planned after authenticator response integration.

- [Sentinel genesis issuance](sentinel-genesis.md): private collecting and signer-bound ready states, consuming issuance, and preserved pending-output completion planned after quorum integration.

## Shared decisions and interfaces

Prefer distinct state structs with private invariant-bearing fields and consuming transitions. Closed enums represent branching outcomes. Existing runtime authorization and input validation remain authoritative. Keep public WASM contracts explicit.

## Dependencies and acceptance

Domain adoption depends on the reviewed foundation. Each adopted scope must activate compiler enforcement, test valid transitions, and reject forbidden action sequences at compile time. A method-placement lint cannot establish semantic ownership or security by itself.

## Status

Foundation merged in [PR 1339](https://github.com/meta-secret/nook/pull/1339), with hosted validation and readiness passed. Project-wide adoption is in progress. Credential-fill ownership merged in [PR 1342](https://github.com/meta-secret/nook/pull/1342); account-picker phase modeling merged in [PR 1345](https://github.com/meta-secret/nook/pull/1345), and pairing ownership is validating in [PR 1347](https://github.com/meta-secret/nook/pull/1347). Sentinel response typestate merged in [PR 1348](https://github.com/meta-secret/nook/pull/1348). Authenticator response ownership is validating in [PR 1352](https://github.com/meta-secret/nook/pull/1352).

## Project-wide adoption contract

The migration covers authored Rust across product crates, binaries, tooling, examples, and test helpers. Each named operation receives a meaningful domain owner. Meaningful state-dependent flows use simple data-carrying states with controlled construction and valid transitions. Stateless operations do not gain artificial lifecycle states.

Delivery proceeds through cohesive domain PRs with their consumers and validation. The inventory records migrated scopes, compiler-enforcement activation, boundary exceptions, and remaining action flows. Completion requires all authored Rust scopes accounted for, ownership enforcement enabled, and migrated action graphs covered by behavioral and invalid-use tests.

## Progress

- 2026-09-04: Authorized continued project-wide migration through successive reviewed and merged PRs. Credential-fill is delivered; Development core and Security continue domain adoption with explicit remaining boundary work.
