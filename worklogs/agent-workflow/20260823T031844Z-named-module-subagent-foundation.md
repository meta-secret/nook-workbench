---
title: Named module-subagent foundation delivered
feature: agent-workflow
issue: issues/agent-workflow/named-module-subagent-foundation.md
plan: plans/agent-workflow/20260822T184013Z-module-subagent-foundation.md
nook_pr: 1082
status: completed
started_at: 2026-08-22T18:40:13Z
finished_at: 2026-08-23T03:18:44Z
agent: codex
---

# Named module-subagent foundation delivered

## Outcome

Nook now has a reviewed foundation for reusable, named module experts. Nine
read-only experts resolve exact-commit module knowledge, expose typed evidence,
and operate within parent-authorized depth-two or depth-three attempt lineage.
The implementation was squash-merged in
[Nook PR #1082](https://github.com/meta-secret/nook/pull/1082).

## Progress

- Added project-scoped agent definitions and a typed catalog covering fourteen
  production modules.
- Established `internal_api_expert` as the cross-language API owner, including
  portable Rust roots, WASM roots, generated bindings, and 167 exact authored
  production consumers.
- Added fixed skill and authority bundles for module and web expertise.
- Added immutable profile-scoped source snapshots, a bounded loopback context
  service, disposable runtime state, and fail-closed capability policy.
- Added typed module-development plans, expert evidence, adapter provenance,
  parent authorization, replay verification, and content-addressed projections.
- Added deterministic audits and adversarial tests for catalog scope, runtime
  policy, credentials, context traversal, lineage, journals, and projections.

## Implementation problems

- The pinned Codex runtime exposes inert built-in wrappers even when ordinary
  shell tools are disabled. The accepted boundary disables every
  model-controlled process route and exposes only three bounded repository
  context operations through an in-process loopback service.
- Early provenance designs allowed in-process callers to select or forge expert
  identity. The final design uses one-shot, identity-bound runtime receipts and
  journal authorities backed by private capability registries.
- Parent projections originally followed filesystem symlinks. Final reads
  reject symlinked path components and files, enforce real-path containment,
  use no-follow opens, and retain byte, hash, replay, and view checks.
- A response-size regression test reused a connection after deliberately
  cancelled oversized requests. Linux Bun exposed the transport coupling; the
  bound now runs in a fresh server lifecycle with explicit byte preconditions.
- Repository policy rejected one test-only open vocabulary spelling. The final
  exact head uses the repository's closed TypeScript-state contract.

## Decisions

- Skills remain reusable methods, named agents remain callable identities,
  Cortex remains durable knowledge, and Loom remains the sole execution and
  evidence authority.
- The initial agent tree is flat and fail-closed at a maximum depth of three.
  Children cannot create undeclared successors or grandchildren.
- Module DAG scheduling is distinct from attempt lineage. Only a replay-verified
  typed development plan can authorize a module-expert child.
- Module-expert evidence is semantic evidence for a parent; it does not schedule
  work or grant write authority.
- Hive is outside the internal development architecture. Write-capable module
  execution remains a separate successor slice.

## Validation

- Final local Loom verification passed 272 tests and 1,416 assertions with nine
  profiles, fourteen production modules, and zero audit findings.
- Cortex audit, TypeScript-state preflight, source-architecture preflight,
  session cleanup, pre-push, formatting, and diff checks passed.
- The focused context-service suite passed 7/7 on macOS and Linux/amd64 with the
  pinned Bun version.
- Exact-head repository policy, Hive compatibility, focused remote preflight,
  complete PR validation, Rust coverage, preview deployment, and PR readiness
  passed for commit `b2ce7f9b4b28ee00830b0c7fa6b1d0c8583c8872`.
- Independent acceptance review reported no remaining P1 or P2 findings.

## Remaining work

- [Typed module context and read-only DAG planning](../../issues/agent-workflow/typed-module-context-and-read-only-dag.md)
- [Isolated-write module DAG execution](../../issues/agent-workflow/isolated-write-module-dag.md)
- [Contract-first bottom-up delivery pilot](../../issues/agent-workflow/module-dag-pilot.md)

