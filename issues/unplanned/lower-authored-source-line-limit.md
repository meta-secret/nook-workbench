---
title: Lower every authored source file to 750 lines
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-10T16:34:48Z
updated_at: 2026-08-10T19:14:28Z
source_issues: []
related_prs:
  - meta-secret/nook#964
depends_on: []
---

# Lower every authored source file to 750 lines

## Context

Nook currently enforces a uniform 1,000-line ceiling for authored source files.
The codebase must move to the stricter 750-line architecture rule without
arbitrary numbered fragments or test-only extraction.

This issue belongs to [Unplanned engineering repairs](README.md).

## Outcome

Every authored source file covered by the source-architecture scanner is at or
below 750 physical lines. The scanner, tests, and durable guidance enforce the
same threshold.

## Scope

Included:

- production Rust, TypeScript, JavaScript, Svelte, scripts, workflow source,
  and authored test source covered by preflight;
- cohesive extraction by domain, capability, lifecycle, or dependency owner;
- colocated Rust unit tests and behavior-preserving validation;
- scanner, contract, and canonical guidance changes after violations are gone.

Excluded:

- generated code, vendored dependencies, build outputs, caches, and fixture
  data already excluded by provenance rules;
- unrelated product behavior or visual redesign.

## Acceptance criteria

- [x] The initial platform-domain batch is decomposed below 750 lines.
- [ ] Every remaining authored source violation is decomposed below 750 lines.
- [ ] Rust unit tests remain beside the focused implementation they cover.
- [ ] The scanner, tests, and durable guidance enforce 750 lines.
- [ ] Exact-head repository-owned validation passes for every delivery PR.

## Progress

- 2026-08-10: Merged PR 964. Fourteen oversized platform owners were split
  into cohesive production modules, all extracted Rust tests were colocated,
  and exact-head native, WASM, web, preview, architecture, and ecosystem gates
  passed. The enforcement ceiling remains 1,000 until the remaining violations
  have been removed.

## Findings and decisions

- Lowering enforcement before decomposition would block every intermediate PR.
- Deliver focused batches from the largest files downward, then lower the
  executable threshold in the final stack layer.
- The first batch exposed a formatting ownership gap: the root formatter did
  not cover the standalone preflight crate. Add mechanical coverage rather than
  relying on a repeated manual command.
- Focused Rust extraction includes moving or adding the direct unit tests in
  the same module before first review.

## References

- [Task-start plan](../../plans/unplanned/2026-08-10T16-34-48Z-lower-source-line-limit.md)
- [Nook PR 964](https://github.com/meta-secret/nook/pull/964)

