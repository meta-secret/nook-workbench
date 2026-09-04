# Rust action ownership

## Outcome

Rust domain operations belong to meaningful types, and state-dependent actions use small data-carrying typestates so invalid action sequences are unavailable through the API.

## Focused deliverables

- [Architecture and lint foundation](foundation.md): policy, compiler diagnostics, and fixture evidence.
- [Incremental domain adoption](domain-adoption.md): migrate one cohesive domain at a time after foundation delivery.

## Shared decisions and interfaces

Prefer distinct state structs with private invariant-bearing fields and consuming transitions. Closed enums represent branching outcomes. Existing runtime authorization and input validation remain authoritative. Keep public WASM contracts explicit.

## Dependencies and acceptance

Domain adoption depends on the reviewed foundation. Each adopted scope must activate compiler enforcement, test valid transitions, and reject forbidden action sequences at compile time. A method-placement lint cannot establish semantic ownership or security by itself.

## Status

Foundation in progress. Product-wide adoption has not started.
