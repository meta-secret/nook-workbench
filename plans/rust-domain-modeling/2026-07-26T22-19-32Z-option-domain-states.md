---
title: Refactor ambiguous Rust Option domain states
feature: rust-domain-modeling
issue: none
started_at: 2026-07-26T22:19:32Z
agent: codex
---

# Task plan

## Interpreted request

Audit authored Rust uses of `Option`, document every occurrence by semantic
category, and replace ambiguous domain-state or required-data uses with explicit
enums or required validated values. Apply the rule immediately to vault event
secret fingerprints and event actor signing keys, and preserve the distinction
between secret identity and secret-version fingerprints.

## Requirements

- Add durable `.cortex` guidance that discourages `Option` for domain states
  while retaining idiomatic structural absence where it is truthful.
- Produce a repository-wide inventory of authored Rust `Option` occurrences
  with a review disposition for each occurrence.
- Make both encrypted-secret fingerprints required, non-empty typed values in
  current event payloads and projections.
- Make the current event actor signing public key required and non-empty rather
  than representing invalid wire states with `Option`.
- Explain and document why identity and version fingerprints are distinct.
- Add behavior-focused Rust coverage for deserialization and domain invariants.
- Deliver through the normal formatted PR, GitHub Actions, feedback-resolution,
  readiness, and squash-merge workflow.

## Constraints and exclusions

- Do not replace iterator, lookup, parser, cache, builder-input, or external-API
  `Option` uses when absence is their truthful structural contract.
- Do not weaken signature, vault-storage, compatibility, or typed Rust/WASM
  boundaries.
- Do not introduce broad mechanical rewrites whose semantics cannot be proven
  from nearby domain behavior; record their reviewed disposition instead.
- No user-interface behavior is in scope.

## Initial plan

1. Inventory and classify all authored Rust `Option` types.
2. Capture the durable domain-state modeling rule and audit artifact.
3. Refactor current event fingerprints and actor signing keys to required
   validated values, updating builders, projections, consumers, and tests.
4. Format, publish the PR, and use GitHub Actions plus review feedback as the
   validation loop.
5. Squash-merge and publish the linked completion worklog and statistics.

## Completion evidence

- A checked-in complete audit with occurrence-level dispositions.
- Rust tests proving empty or missing required current-event values are rejected.
- Green repository-owned checks on the exact PR head, resolved actionable
  feedback, successful readiness audit, and squash merge.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs,
local paths, or unnecessary infrastructure details.
