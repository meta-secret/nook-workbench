---
title: Symmetric domain branching and decision locality
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-10T06-22-47Z-symmetric-domain-branching.md
finished_at: 2026-09-10T06:32:49Z
agent: codex
related_prs: [1573]
---

# Outcome

Updated canonical Cortex guidance and completed six selected domain refactoring families. Head f430883bd3a647666df9361f36311f4c5937b30f; 13 files changed with 819 insertions and 620 deletions relative to a923b5186097d6ee2f422e639c6f6febef119803.

## Guidance

Existing function-ownership and Rust coding authorities now prefer shallow result-valued matches for peer domain alternatives. More than three nested branching levels signals mixed responsibility or misplaced decision knowledge and calls for extraction to the owning types. Preserve clear if-let/let-else admission, expression-valued if and ordinary error propagation. Do not mechanically prohibit return or ?, match booleans ceremonially, invent wrapper states, or increase nesting for visual symmetry.

## Implementation

- Sentinel genesis: the referenced payload rejection and successful decoding are sibling arms of an exhaustive typed classification match. Collection, readiness and preparation transitions preserve the retained session on failure. Delivery binding validation belongs to its existing owner.
- Sentinel unlock: collection, quorum admission and context binding use symmetric transitions without changing plaintext-share lifetime.
- Vault sync policy: existing authentication, permission and credential alternatives drive expression-valued routing; target selection belongs to request owners. Forced-sync precedence is retained.
- Identity directory: admission and operation outcomes are shallow; selection and membership decisions belong to their owners. Existing staged-rebase rollback owns restoration and preserves target-only copying and original rejection ownership.
- Protected keyring: lookup, insertion, replacement, sealing and removal separate admitted mutation from retained-owner rejection.
- Event graph: per-event quarantine classification belongs to EventGraph; the outer fixed-point loop handles ordered iteration and mutation. Existing checkpoint handling is explicit: invalid checkpoint structure quarantines, while other checkpoint results continue to actor admission as before. Actor failures retain the graph with preceding mutations.

Commits: 4bea13deb (guidance), 03e044a9e (genesis/unlock/sync), c5f475681 (directory/keyring), f430883bd (event graph). One stale staged-rebase fixture predicate was adapted to its existing named enum. Legacy constructor signatures were intentionally left unchanged. No new wire models, cryptographic algorithms, rollback frameworks or whole-owner clones were introduced.

## Evidence and limits

Scoped source inspection and implementation handoffs, direct fixture adaptation where necessary, write-only rustfmt, clean committed state and successful push. Tests, builds, compilation, typechecks, lint/check modes, code generation, reviews, comment collection and validation workflows were not run, as requested. Validation remains outstanding. This is a finite semantic refactor of the selected families, not a claim to remove every return across the repository.

## Delivery

- PR: https://github.com/meta-secret/nook/pull/1573
- Plan: https://github.com/meta-secret/nook-workbench/blob/04029c5edf0053186c81b193eac34cf3a2a44498/plans/rust-action-ownership/2026-09-10T06-22-47Z-symmetric-domain-branching.md
- Exact pushed head: f430883bd3a647666df9361f36311f4c5937b30f
- Remaining work: user-directed validation and any resulting fixes. PR remains open and unmerged; broad issue remains in progress.
