---
title: Refactor preflight infrastructure contracts below 750 lines
feature: unplanned
issue: issues/unplanned/lower-authored-source-line-limit.md
plan: plans/unplanned/2026-08-10T16-34-48Z-lower-source-line-limit.md
nook_pr: 975
status: completed
started_at: 2026-08-11T06:32:56Z
finished_at: 2026-08-11T06:58:20Z
agent: codex
---

# Work summary

## Outcome

Merged the ninth source-size rollout batch. Compiler-cache delivery contracts
and remote infrastructure contracts now have focused integration-test owners.
All four affected source owners are below 750 lines.

## Progress

- Moved delivery-cache scopes, release fingerprints, telemetry, and build-target
  inheritance into a focused sccache contract owner.
- Moved remote Compose, deployment, registry, firewall, and mesh invariants into
  a focused remote-platform contract owner.
- Retained compiler-object isolation and Hive graph behavior in their existing
  focused parent owners.

## Implementation problems

- The first focused run showed that standalone integration-test crates require
  explicit paths for nested module files. Both owners received narrow path
  attributes and the hosted preflight gate then passed.
- The merge command reported the expected local worktree ownership error after
  GitHub completed the squash merge.

## Decisions

- Split crate-level integration tests by infrastructure capability rather than
  by arbitrary line ranges.
- Keep shared file readers local to each integration-test crate owner.
- Keep the executable ceiling at 1,000 until the remaining inventory is empty.

## Validation

- Root `task format` passed before both pushes.
- Focused hosted preflight validation passed on exact head
  `d3d7e3b9d1e596b2c285caf9e78cdecc10bf2aab` in run `31466159538`.
- Complete exact-head run `31466421216` passed native Rust, WASM, Node, web,
  coverage, preview, and dependency policy gates.
- Review audits found no reviews, substantive comments, or unresolved threads.
- `task pr:ready PR=975` reported `ready: true` on current Main.
- [Nook PR 975](https://github.com/meta-secret/nook/pull/975) squash-merged as
  `43ced38c3105b78c882d981316e08dc046f3e925`; its merge tree matches the
  validated head tree.

## Remaining work

- Continue decomposing authored files above 750 lines by focused ownership.
- Lower scanner and guidance thresholds only after the violation count is zero.
