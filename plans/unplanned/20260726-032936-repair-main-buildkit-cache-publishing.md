---
title: Repair Main BuildKit cache publishing latency
feature: unplanned
issue: none
started_at: 2026-07-26T03:29:36Z
agent: codex
---

# Repair Main BuildKit cache publishing latency

## Interpreted request

Make the Main BuildKit cache publication path reuse completed build work and
finish within a two-to-three-minute budget instead of recompiling Rust and WASM
graphs for roughly seventeen minutes.

## Requirements

- Identify the first cache misses and quantify warm versus export time from the
  reported Main run.
- Preserve complete hosted caches for subsequent pull requests without exposing
  credentials to untrusted workflows.
- Remove duplicated compilation from the dedicated publisher rather than hiding
  it behind looser timeouts or skipped validation.
- Deliver the change through a Nook pull request, repository-owned GitHub
  Actions, exact-head readiness, squash merge, and a post-merge timing proof.

## Constraints and exclusions

- Product validation remains in the existing native, WASM, web, browser, and UI
  jobs; this task changes cache publication ownership, not product test scope.
- Cache publication must remain safe under cancellation and must not rely on
  secret access from pull-request workflows.
- Local full-suite validation is excluded; GitHub Actions is the product gate.

## Initial plan

1. Trace cache scopes, target ownership, and cache misses in the slow Main job.
2. Reassign cache exports to the jobs that already materialize the relevant
   BuildKit graphs, leaving at most a small dependency-only publisher.
3. Add focused workflow and script regression coverage for the new topology.
4. Format, push, run Nook PR checks, address feedback, and squash merge.
5. Measure a fresh Main run and verify the cache publication path meets the
   two-to-three-minute budget and restores on the next consumer.

## Completion evidence

- Raw job timing shows no duplicate Rust or WASM compilation in the publisher.
- Repository checks and exact-head readiness pass on the implementation PR.
- The merged Main workflow reports the cache publisher at or below three
  minutes, with cache imports observable in downstream consumers.

## Safety review

- This record contains no raw prompt, transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure details.
