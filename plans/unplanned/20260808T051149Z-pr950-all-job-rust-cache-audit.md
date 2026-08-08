---
title: PR 950 all-job Rust cache correctness audit
feature: unplanned
issue: none
started_at: 20260808T051149Z
agent: codex
---

# Task plan

## Interpreted request

Take ownership of PR 950 and verify Rust dependency reuse across every job on
the exact pull-request head. Treat any repeated Docker-based Rust dependency
compile or tool installation as a cache correctness defect. Redesign the cache
lineage when needed. Extend the runtime simulation and static proofs so they
reproduce each observed failure. Carry the corrected pull request through
hosted validation, readiness, and squash merge.

## Requirements

- Inspect every job associated with the exact pull-request head.
- Distinguish source compilation, remote layer materialization, and genuine
  dependency rebuilds from the logs and cache telemetry.
- Reproduce every observed cache miss in the ephemeral Bake and Zot simulator.
- Add static proofs for the production Bake graph and Task entrypoints.
- Preserve isolated commit-scoped pull-request cache writes.
- Preserve trusted Main fallback scopes.
- Keep cache credentials unavailable to untrusted jobs.
- Run focused hosted proof jobs and complete exact-head validation.
- Address all existing pull-request feedback.
- Squash-merge only after exact-head readiness succeeds.

## Constraints and exclusions

- Heavy builds and tests run on GitHub-hosted workers.
- Local work is limited to repository inspection and required pre-push hygiene.
- Cache fixes must not clear inherited Bake cache settings.
- The proof must validate real multi-level linked-target behavior rather than a
  simplified single-parent approximation.
- A cold first producer for genuinely new inputs is allowed. Rebuilding the
  same dependency or tool lineage on another fresh runner is not allowed.

## Initial plan

1. Inventory the exact-head workflows, jobs, Rust build stages, and telemetry.
2. Rerun the unchanged head to separate first-producer work from repeat misses.
3. Map each repeat miss to the production Bake and Task graph.
4. Extend the runtime simulator and preflight proofs before changing topology.
5. Implement the smallest coherent cache-lineage redesign that makes the new
   proofs pass.
6. Run pre-push hygiene, push the corrected head, and execute focused hosted
   proofs.
7. Trigger complete exact-head validation and repeat the audit until every
   Docker-based Rust dependency build is restored from BuildKit or sccache.
8. Settle review feedback, pass readiness, squash-merge, and publish completion
   records and statistics.

## Completion evidence

- A per-job exact-head audit with no repeated Docker Rust dependency rebuilds.
- Passing hosted runtime Bake and Zot simulation.
- Passing static production cache-contract proofs.
- Green exact-head repository-owned checks.
- Zero unresolved actionable review threads.
- Successful readiness audit and squash merge.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data,
raw logs, local paths, or unnecessary infrastructure detail.
