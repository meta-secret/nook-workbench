---
title: Adopt Rust ecosystem quality and security gates
feature: rust-domain-modeling
issue: direct-request
started_at: 2026-07-29T00:00:00Z
agent: codex
---

# Adopt Rust ecosystem quality and security gates

## Interpreted request

Establish a coherent Rust quality and security toolchain in Nook so standard
ecosystem tools own dependency policy, advisory auditing, property testing,
snapshot testing, concurrency model checking, fuzzing, bounded verification,
and repository-specific linting. Make the capabilities visible in the normal
check catalog and document when each tool should be used, with the longer-term
goal of replacing bespoke preflight logic where a maintained Rust tool provides
the same guarantee.

## Requirements

- Add cargo-deny, RustSec advisory auditing, proptest, insta, loom, cargo-fuzz,
  Kani, and Dylint to the repository's authoritative check inventory.
- Supply checked-in configuration and runnable Task/CI integration appropriate
  to each tool rather than documenting installation commands only.
- Seed representative usage where a tool requires an executable target or test,
  while keeping expensive fuzzing and model checking appropriately scoped.
- Update Cortex with a concise capability and benefit description for every
  tool and clear guidance about ecosystem tools versus custom preflight checks.
- Preserve lockfile reproducibility, trusted dependency sources, Nook's Rust
  ownership boundaries, and GitHub-hosted validation policy.
- Deliver through a formatted, exact-head validated pull request and merge it
  after applicable repository-owned checks pass.

## Constraints and exclusions

- Do not weaken advisory, license, source, or lint policy merely to obtain a
  green initial run; justified compatibility exceptions must be narrow and
  documented.
- Do not run heavy build, test, fuzz, or model-check workloads on the agent
  machine; use the repository's hosted execution workflow.
- Fuzzing, Loom, Kani, and Dylint should have deterministic bounded entry
  points; unbounded continuous campaigns and wholesale conversion of existing
  tests are outside this first adoption change.
- Custom preflight remains appropriate for Nook-specific architecture and
  workflow invariants that ecosystem tools cannot express.

## Initial plan

1. Inventory the current Task, Docker, workflow, Rust workspace, dependency,
   and preflight surfaces and classify which new tools belong in fast PR checks
   versus focused or scheduled checks.
2. Add pinned/configured tool execution, representative test or target seeds,
   and authoritative check-list entries.
3. Update Cortex quality and testing guidance with the purpose, advantages, and
   usage boundary of all eight capabilities.
4. Add mechanical coverage for the new validation topology and remove any
   directly superseded bespoke checks.
5. Format, publish the implementation branch, execute focused hosted checks,
   run complete exact-head PR validation, resolve current feedback, and
   squash-merge.

## Completion evidence

- The normal check catalog lists all eight requested capabilities with runnable
  commands or explicit scoped execution paths.
- Checked-in configurations and representative targets/tests are exercised by
  repository-owned GitHub Actions.
- Cortex explains each tool and the ecosystem-first preflight policy.
- Focused hosted validation and the complete exact-head PR workflow pass, the
  PR is squash-merged, and linked Workbench completion records are published.

## Safety review

- This plan contains no raw prompt, chat transcript, secrets, private data, raw
  logs, local paths, or unnecessary infrastructure detail.
