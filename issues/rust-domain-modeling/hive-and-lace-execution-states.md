---
title: Model Hive and Lace execution states explicitly
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

# Model Hive and Lace execution states explicitly

## Context

The repository-wide Rust audit found paired optional output/error values,
optional blocker data, optional artifacts, and paired lease token/deadline
fields that can represent contradictory Hive or Lace execution states. This is
part of [Explicit Rust domain states](README.md).

## Outcome

Execution, publication, blocker, artifact, and lease states are represented by
named enums whose variants own exactly the data valid in that state.

## Scope

- Include the candidate occurrences in Hive model/coordinator/store/Neo4j and
  Lace generator output.
- Preserve CLI, GitHub API, and external process boundary optionality until it
  is converted into the new domain states.
- Exclude vault application and event-projection models.

## Acceptance criteria

- [ ] Paired `output`/`error` and `lease_token`/`lease_until` fields cannot form
  contradictory combinations.
- [ ] Blocked, artifact-producing, and artifact-free task outcomes are named
  states with behavior-focused tests.
- [ ] Persisted Neo4j and publication migration behavior is documented and
  covered.
- [ ] The relevant candidate entries in the Rust Option inventory are resolved
  or reclassified with rationale.

## Progress

- Candidate occurrences identified; no implementation started.

## Findings and decisions

- External command and GitHub payload optionality may remain at I/O boundaries.
- The refactor must preserve resumability and lease ownership semantics.

## References

- [Authored Rust Option inventory](https://github.com/meta-secret/nook/blob/main/.cortex/references/rust-option-inventory.md)
