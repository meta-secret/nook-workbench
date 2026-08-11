---
title: Refactor Rust and preflight source owners below 750 lines
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
plan: plans/unplanned/2026-08-10T16-34-48Z-lower-source-line-limit.md
nook_pr: 973
status: completed
started_at: 2026-08-11T03:57:36Z
finished_at: 2026-08-11T06:29:00Z
agent: codex
---

# Work summary

## Outcome

Merged the eighth source-size rollout batch. Authentication vocabulary, event
operation application, local workflow contracts, and Bake proof support now
have focused owners. Every affected authored file is below 750 lines.

## Progress

- Moved authentication workflow wire vocabulary and serialization coverage into
  a focused companion-core owner.
- Moved event projection operation application and its direct lifecycle,
  import, clear, and password behavior tests into one focused event-log owner.
- Split agent and local workflow build contracts from unrelated build checks.
- Split reusable Bake cache proof support from the proof scenarios that consume
  it.

## Implementation problems

- The first focused run exposed private Bake support functions after extraction;
  visibility was narrowed to the production sibling boundary and revalidated.
- Review found operation tests left in the parent projection owner. They were
  moved beside the extracted behavior before final validation.
- One complete run encountered a transient Zot connection refusal. Live registry
  verification passed, but Main advanced before the retry, so the branch was
  rebased and all exact-head gates were repeated.
- An interrupted delivery attempt had closed the PR and left a stale cancellation
  note. The resumed user instruction superseded it; the false self-authored note
  was removed and the same exact head was reopened and re-audited.

## Decisions

- Keep authentication wire vocabulary separate from workflow orchestration.
- Keep event operation application tests beside the production owner instead of
  treating test extraction as a line-count mechanism.
- Split preflight integration tests by contract responsibility, which is allowed
  for crate-level integration tests.
- Keep the executable ceiling at 1,000 until every remaining violation is gone.

## Validation

- Root `task format` passed before each pushed exact head.
- Focused hosted validation passed on final head
  `c5087f5ddbae32f1057a27fa9b2bb02f82031666`.
- Complete exact-head run `31464438445` passed native Rust, WASM, Node, web,
  coverage, preview, dependency policy, proofs, fuzz, and Dylint gates.
- The only review thread was addressed, replied to, and resolved; the final audit
  found no unresolved conversations or substantive PR comments.
- `task pr:ready PR=973` reported `ready: true` on current Main.
- [Nook PR 973](https://github.com/meta-secret/nook/pull/973) squash-merged as
  `189fa67ecabca8a95b987347c4567cb6857dcd3a`; the merge, Main, and validated
  head trees are identical.

## Remaining work

- Decompose the remaining authored files above 750 lines in focused batches.
- Lower and contract-test the executable ceiling and canonical guidance after
  the violation inventory reaches zero.
