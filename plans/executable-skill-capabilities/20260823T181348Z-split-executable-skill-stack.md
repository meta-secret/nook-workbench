---
title: Split executable skill capabilities into a reviewable stack
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/runtime-and-article-structure.md
started_at: 2026-08-23T18:13:48Z
agent: codex
---

# Split executable skill capabilities into a reviewable stack

## Interpreted request

Replace the oversized executable-skill pull request with a dependency-ordered
stack of small pull requests. Each slice must own one cohesive responsibility,
remain comfortably below the 5,000-line review ceiling, and keep every
intermediate repository state green and safe. The stack must preserve the
intended architecture: many focused skills, few stable agent profiles,
skill-owned deterministic TypeScript, and Loom-owned isolation, authority,
provenance, scheduling, and replay.

## Requirements

- Close or supersede the oversized draft only after the replacement stack is
  published and its work is preserved.
- Use five strict dependency layers: shared TypeScript tooling; dormant article
  capability; audited source closure and registry; sealed Docker executor; and
  atomic Cortex/workflow activation.
- Keep every pull request below 5,000 authored changed lines and target at most
  4,500 lines so review fixes have headroom.
- Do not cherry-pick the monolithic commits. Reconstruct each layer from the
  reviewed final behavior so interleaved review fixes land with their owner.
- Keep the existing Loom article audit authoritative until the final activation
  slice. The dormant provider must not be callable through production code.
- Keep the production registry empty until activation. Test harnesses must not
  mint production provenance.
- Preserve exact source-tree authority, bounded closure discovery, capability
  denial, immutable image execution, cancellation, confirmed teardown, typed
  result validation, and exact evidence paths.
- Re-run focused and full acceptance for every slice and complete exact-head
  review/readiness independently before merging the next dependency.

## Constraints and exclusions

- This plan does not add further capability migrations beyond Cortex article
  structure.
- Instruction-only skills remain lightweight.
- Runtime external packages remain prohibited.
- Stateful delivery commands remain outside the executable-skill runtime.
- Temporary duplication is allowed only in the dormant provider slice: the
  existing Loom checker remains authoritative until the final atomic cutover.
- No slice may import skill-owned runtime code into the trusted Loom host.

## Change budget and PR sequence

- Estimated authored changed lines: 12500
- Owning modules, packages, or layers: Shared TypeScript tooling, Cortex article skill, executable registry and closure, Docker runtime, Cortex workflow
- Public or cross-module interfaces: ESLint rule, skill manifest, registry findings, closure authority, execution receipt, Cortex article transport
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 1900
- Current PR slice and acceptance evidence: Shared TypeScript tooling; Acceptance evidence: skill and Loom format, lint, type, policy, and preflight gates
- PR slices and acceptance evidence:
1. Shared TypeScript tooling; Acceptance evidence: skill and Loom format, lint, type, policy, and preflight gates
2. Dormant Cortex article capability; Acceptance evidence: skill codec, audit, independent verifier, fixtures, parity tests, and unchanged legacy Loom behavior
3. Audited source closure and registry; Acceptance evidence: exact manifest, recursive AST policy, frozen-tree bounds, exact paths, and empty production catalog tests
4. Sealed Docker execution engine; Acceptance evidence: immutable image, environment, network, write, deadline, cancellation, teardown, output, and probe tests
5. Cortex and workflow activation; Acceptance evidence: static registration, host transport, article cutover, timeout dominance, structural scope, full gates, and legacy deletion

## Initial plan

1. Preserve the accepted monolithic final tree as a non-PR reference branch.
2. Publish five clean dependency branches from the current `origin/main`,
   rebuilding each layer instead of replaying interleaved monolithic commits.
3. Validate and review each branch independently before using it as the next
   branch base.
4. Close the oversized draft after the stack is visible and linked.
5. Merge the stack in order, update the Workbench issue/worklog/statistics, and
   clean provisional session state.

## Completion evidence

- Five linked pull requests, each below 5,000 authored changed lines.
- Per-slice focused tests and full required repository gates are green.
- Production capability activation occurs only in the final slice.
- Exact-head review threads are resolved independently for each slice.
- The final merged tree is behaviorally equivalent to the independently
  accepted monolithic reference tree.

## Safety review

This plan contains no copied request, conversation, secret, private data,
unfiltered execution output, local filesystem path, or unnecessary
infrastructure detail.
