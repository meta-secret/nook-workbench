---
title: Adopt Rust ecosystem quality and security gates
status: done
priority: p1
automation: agent
owner: codex
created_at: 2026-07-29T07:29:49Z
updated_at: 2026-07-29T13:10:11Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/870
depends_on: []
---

# Adopt Rust ecosystem quality and security gates

## Context

Nook relied on bespoke repository preflight for some guarantees that maintained
Rust ecosystem tools can express more precisely. The repository needed a
coherent, executable policy for dependencies, advisories, property and snapshot
tests, concurrency schedules, fuzzing, bounded proofs, and typed lint rules.

## Outcome

PR 870 added cargo-deny, RustSec, Proptest, Insta, Loom, cargo-fuzz, Kani, and
Dylint as repository-owned checks with pinned toolchains, representative domain
tests and targets, exact-head readiness classification, and Cortex guidance.

## Acceptance criteria

- [x] All eight tools are present in the authoritative check inventory.
- [x] Dependency policy covers every independent Rust workspace.
- [x] Expensive compiler-coupled checks run on bounded GitHub-hosted jobs.
- [x] Cortex explains each capability and prefers ecosystem tooling over
      duplicative source scanners.
- [x] Exact-head ecosystem and standard PR workflows pass.
- [x] PR 870 is squash-merged.

## Progress

- 2026-07-29: [PR 870](https://github.com/meta-secret/nook/pull/870)
  merged the complete quality-gate adoption and the security/transactionality
  repairs exposed by Dylint and review.

## Findings and decisions

- Nook-specific architecture invariants remain in preflight; dependency,
  advisory, randomized, snapshot, model-checking, fuzz, and reusable typed lint
  guarantees belong to maintained ecosystem tools.
- The pinned upstream Codex/Rama graph still carries Hickory 0.25.2. RustSec
  exceptions for RUSTSEC-2026-0118 and RUSTSEC-2026-0119 are explicit and must
  be removed when upstream reaches Hickory 0.26.1 or later.

## References

- [Task plan](../../plans/rust-domain-modeling/2026-07-29T-rust-ecosystem-quality-gates.md)
- [Completion worklog](../../worklogs/rust-domain-modeling/2026-07-29T13-10-11Z-pr-870.md)
- [PR 870](https://github.com/meta-secret/nook/pull/870)
