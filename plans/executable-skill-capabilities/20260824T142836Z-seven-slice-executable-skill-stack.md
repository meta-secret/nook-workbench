---
title: Supersede the executable skill split with eight security boundaries
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/runtime-and-article-structure.md
started_at: 2026-08-24T14:28:36Z
agent: codex
---

# Supersede the executable skill split with eight security boundaries

The record path retains its original seven-slice name so existing PR links stay
stable. Exact review split runtime reachability from pure source policy, making
the accepted delivery graph eight slices.

## Interpreted request

Replace the oversized executable-skill change with a dependency-ordered stack
whose pull requests are small enough to review conclusively. Split by actual
authority and runtime responsibilities, preserve every accepted behavior, and
finish the complete stack instead of moving unresolved work into optional
follow-ups.

## Requirements

- Keep every pull request below 5,000 authored changed lines and target 4,500
  or fewer so review corrections retain headroom.
- Keep the existing Loom article audit authoritative until the final activation
  slice; dormant provider code must not execute through production Loom.
- Separate pure source policy from its memory-limited executor.
- Keep the production registry empty until activation and prevent diagnostic
  catalogs from minting authority.
- Preserve exact frozen-tree provenance, bounded discovery, content-addressed
  closure plans, sealed execution, cancellation, confirmed teardown, typed
  verification, and exact evidence paths.
- Validate and review each immediate-base diff independently before using it as
  the next slice's base.

## Constraints and exclusions

- Do not replay the interleaved monolithic commits as a review slice.
- Runtime external packages and stateful delivery commands remain prohibited.
- Instruction-only skills remain lightweight.
- No slice may import skill-owned implementation code into trusted Loom.
- Docker containment uses the host daemon without nested daemons or host-socket
  mounts inside containers.
- Production capability registration, workflow scheduling, and legacy removal
  land atomically in the final slice.

### Change budget and PR sequence

- Estimated authored changed lines: 17000
- Owning modules, packages, or layers: TypeScript tooling, dormant article provider, runtime reachability boundary, pure source policy, sealed source analyzer, frozen closure registry, sealed skill executor, Cortex workflow activation
- Public or cross-module interfaces: Shared ESLint rule, article request and result codecs, pure source-analysis result, sealed analyzer contract, opaque registry authority, immutable closure plan, verified execution receipt, Cortex article transport
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 2484
- Current PR slice and acceptance evidence: Runtime reachability boundary; Acceptance evidence: evaluator, loader, symlink, executable-source, workflow, and local-action closure tests plus independent exact review.
- PR slices and acceptance evidence:
1. Shared TypeScript tooling; Acceptance evidence: skill and Loom formatting, lint, type, policy, and preflight gates.
2. Dormant Cortex article provider; Acceptance evidence: exact byte budgets, audit, independent verifier, canonical fixtures, and production-import isolation.
3. Runtime reachability boundary; Acceptance evidence: evaluator and loader denial, full executable-source inventory, symlink and extensionless rejection, and recursive workflow/local-action closure.
4. Pure executable-source policy; Acceptance evidence: semantic TypeScript capability denial and provider-source acceptance with no process or authority runtime.
5. Sealed source-analysis executor; Acceptance evidence: exact image identity, 256 KiB source bound, 512 MiB memory and swap limits, one-slot scheduling, no network or writes, and confirmed teardown for success, abort, deadline, malformed output, and OOM.
6. Immutable source closure and registry; Acceptance evidence: bounded frozen-tree discovery, content-addressed deep-frozen plans, exact policy bytes, opaque authority, and an empty production catalog.
7. Sealed executable-skill runtime; Acceptance evidence: deterministic tar input, immutable image execution, environment and network containment, deadline, cancellation, output, and teardown receipts.
8. Cortex article activation; Acceptance evidence: static registration, host Markdown DTO transport, workflow and timeout wiring, legacy audit removal, exact structural grants, documentation, and full end-to-end parity.

## Initial plan

1. Finish and independently accept the tooling, dormant provider, runtime
   reachability, and pure source-policy slices.
2. Add the sealed analyzer executor as its own reviewable dependency rather
   than claiming an unenforceable in-process or Bun heap limit.
3. Build closure authority, skill execution, and final activation as three
   subsequent independently green slices.
4. Supersede the oversized historical pull requests only after every byte and
   behavior is visible in the replacement stack.
5. Merge in dependency order, publish per-slice evidence and statistics, and
   clean provisional session state.

## Completion evidence

- Eight linked pull requests, each below 5,000 authored changed lines.
- Focused security tests, complete required repository gates, and exact-head
  reviews are green for every slice.
- Production execution remains impossible before the final activation slice.
- The final tree preserves the independently reviewed behavior while removing
  the oversized pull requests from the delivery path.

## Safety review

This plan contains no copied request, conversation record, sensitive value,
private data, execution transcript, local path, or unnecessary infrastructure
detail.
