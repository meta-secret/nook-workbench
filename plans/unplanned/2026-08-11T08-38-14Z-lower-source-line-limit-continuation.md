---
title: Continue the 750-line source ownership migration
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
started_at: 2026-08-11T08:38:14Z
agent: codex
supersedes: plans/unplanned/2026-08-10T16-34-48Z-lower-source-line-limit.md
---

# Task plan

## Interpreted request

Continue the existing source-architecture migration until every authored source
file is at or below 750 physical lines. Preserve behavior while replacing each
oversized owner with cohesive domain, lifecycle, capability, or dependency
owners. Land and record every independently mergeable slice.

## Requirements

- Reduce the fresh Main inventory of 37 authored violations to zero.
- Split production and test owners along real responsibilities.
- Keep portable extension protocol policy in Rust and browser lifecycle glue in
  TypeScript.
- Keep Rust unit tests inline with the focused implementation they cover.
- Validate and squash-merge each independent slice before starting the next.
- Lower the executable scanner and guidance only after all violations are gone.

## Constraints and exclusions

- Each implementation PR remains below 5,000 authored changed lines.
- Generated code, vendored dependencies, build outputs, caches, and existing
  excluded fixture data remain outside the scanner inventory.
- Arbitrary numbered fragments and test-only Rust extraction are prohibited.
- Product behavior and visual design remain unchanged unless a validated fix is
  required to preserve existing behavior after decomposition.
- Heavy product validation runs on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 65,000
- Owning modules, packages, or layers: Extension protocol and lifecycle, vault state and UI, Hive, infrastructure Task owners, research experiments, browser and unit tests, Loom, lint contracts, and preflight source-size policy.
- Public or cross-module interfaces: Generated Rust/WASM extension-session protocol, browser-extension lifecycle modules, existing package exports, Task entrypoints, and the preflight source-size diagnostic contract.
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 4,600
- Current PR slice and acceptance evidence: Extension-session protocol and offscreen lifecycle; Acceptance evidence: Both original owners and every extracted owner are at or below 750 lines, focused behavior tests pass, and complete exact-head validation passes.
- PR slices and acceptance evidence:
1. Extension-session protocol and offscreen lifecycle; Acceptance evidence: Both original owners and every extracted owner are at or below 750 lines, focused behavior tests pass, and complete exact-head validation passes.
2. Remaining extension background, password-form, fixture, and pairing owners; Acceptance evidence: Extension owners are below the limit and package tests pass.
3. Vault state, provider, secret, enrollment, logging, and connection owners; Acceptance evidence: Vault application owners are below the limit and typed boundary tests pass.
4. Vault login, dashboard, detail, chooser, and application-shell UI owners; Acceptance evidence: UI owners are below the limit and existing interaction evidence passes.
5. Browser and unit tests by user capability and shared test support; Acceptance evidence: Test owners are below the limit and preserve the same user-capability coverage.
6. Hive storage, console, CSS, and integration-test owners; Acceptance evidence: Hive owners are below the limit and Hive validation passes.
7. Infrastructure Task owners by operational capability; Acceptance evidence: Task owners are below the limit and task contracts pass.
8. Research experiments and their presentation and report owners; Acceptance evidence: Research owners are below the limit and the research catalog workflow passes.
9. Loom and lint-contract owners; Acceptance evidence: Tooling owners are below the limit and their contract tests pass.
10. Scanner, tests, and durable guidance; Acceptance evidence: The scanner reports zero violations and contract tests prove one shared 750-line rule.

## Initial plan

1. Inspect protocol operations, inline tests, TypeScript lifecycle phases, and
   callers to identify focused ownership seams.
2. Move Rust protocol responsibilities with their inline tests behind narrow
   module exports.
3. Move browser lifecycle responsibilities into adjacent typed modules without
   moving portable policy out of Rust.
4. Run pre-push hygiene, publish the PR, and trigger exact-head validation.
5. Fix repository failures and actionable review feedback, then squash-merge.
6. Publish the Workbench issue update, worklog, and statistics before starting
   the next slice.

## Completion evidence

- Both current original owners and every extracted owner are at or below 750
  lines.
- Existing protocol and browser lifecycle tests pass remotely.
- Complete exact-head PR validation passes on the current Main base.
- Existing actionable review feedback is answered and resolved.
- The PR is squash-merged and its Workbench records are published.
- The full feature completes when the scanner inventory contains no authored
  source above 750 lines and the executable rule enforces that ceiling.

## Safety review

- This record contains no raw prompt, chat transcript, secret, private data,
  unfiltered diagnostic output, local path, or unnecessary infrastructure
  detail.
