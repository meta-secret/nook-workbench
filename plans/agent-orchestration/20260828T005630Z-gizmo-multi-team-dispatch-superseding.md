# Task plan

## Interpreted request

Supersede `plans/agent-orchestration/20260827T192444Z-gizmo-multi-team-dispatch.md` because PR 1172 expanded from Cortex clarification into typed Loom module delivery. Preserve full-work commit `ce47c73562755427d6471cf1209f50db625fb023`, then deliver three dependency-ordered, independently buildable PRs: PR 1172 for Cortex contracts, a typed plan/evidence/admission successor, and a final integration/materialization successor.

## Requirements

- Keep Cortex semantic policy, the harness lifecycle authority, and Loom deterministic enforcement.
- Require one team per task, immutable generations, exact frontiers, explicit provider edges, bounded hierarchy, parent joins, resource claims, and read-only evidence surfaces.
- Derive conflict precedence, reject cycles, and admit the maximal safe ready set within concurrency and lease capacity.
- Hold leases through conclusive disposition and recompute readiness after each disposition.
- Authenticate evidence by source, generation, plan, task, attempt, team, claims, artifact, and terminal verdict.
- Integrate providers locally, start consumers from complete predecessor frontiers, and reserve the all-task barrier for finalization.
- Restart reached tasks after plan mutation; migrate no old attempt, evidence, or private integration state.
- Preserve repository/worktree identity, path scope, provenance, and cleanup; optional evidence has no lifecycle authority.
- Preserve the full-work commit in a linked draft before reducing PR 1172, then deliver the dependency-ordered stack.

## Constraints and exclusions

- Measured baseline: `origin/main` at `5cc4957201a0c4a06c871b385ec99b1d4f05c7c0`; full-work commit: `ce47c73562755427d6471cf1209f50db625fb023`.
- The authored diff is exactly 4,399 lines: 3,820 additions and 579 deletions. No generated, lockfile, snapshot, vendored, binary, or pure-rename exclusions apply.
- Preserve runtime work in a linked draft before reducing PR 1172.
- The 2,518-line typed slice exceeds the warning and must be re-measured after compatibility repair.
- Whole-file copying is not buildable: the typed successor must preserve the predecessor integration API; the final successor migrates consumers.
- If repair work reaches 3,000 lines, define another cohesive slice; do not compress code or remove evidence.
- Full-work file sizes create repair risk: `validation.ts` is 997 lines, `integration.ts` 971, `integration.test.ts` 990, and `admission.ts` 940. Growth past 1,000 lines requires cohesive responsibility extraction; test-only extraction is prohibited.
- Do not add generated topology, a generic graph language, model runner, repository scheduler, durable task store, Hive coupling, or nested daemons.
- Gizmo does not implement team code or waive blocks; workers do not mutate delivery state.

## Change budget and PR sequence

- Estimated authored changed lines: 4,399
- Owning modules, packages, or layers: Cortex root and Gizmo orchestration contracts; Loom `module-delivery` codec, domain validation, evidence, admission, provenance, exports, integration, cleanup, and tests
- Ownership units:
1. Capability: Multi-team Cortex contracts and routing; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Root and Gizmo authorities consistently require one team per task, typed provider barriers, deterministic ordering, immutable restart, harness lifecycle, and Gizmo integration; `task loom:cortex-audit` passes.
2. Capability: Plan version 2, topology, evidence authentication, generation authority, admission, leases, and disposition; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/codec.ts, agentic-ai/loom/src/module-delivery/domain.ts, agentic-ai/loom/src/module-delivery/evidence.ts, agentic-ai/loom/src/module-delivery/index.ts, agentic-ai/loom/src/module-delivery/integration-provenance.ts, agentic-ai/loom/src/module-delivery/resource-claim-containment.ts, agentic-ai/loom/src/module-delivery/validation.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/admission.test.ts, agentic-ai/loom/tests/module-delivery/cli.test.ts, agentic-ai/loom/tests/module-delivery/evidence.test.ts, agentic-ai/loom/tests/module-delivery/plan-validation.test.ts; Expertise forbidden paths: .cortex/AGENTS.md, .cortex/gizmo/AGENTS.md, agentic-ai/loom/src/module-delivery/integration.ts, agentic-ai/loom/tests/module-delivery/integration.test.ts, agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts; Expertise consumer interfaces: ModuleDeliveryPlan version 2, generation authority, evidence verification, admission, lease, disposition, and compatibility-safe provider contracts consumed by the integration layer; Expertise acceptance evidence: Web-development review confirms strict TypeScript state, focused modules below 1,000 lines, deterministic APIs, and focused tests; Capability acceptance evidence: Focused codec, plan-validation, evidence, and admission tests prove team decoding, evidence containment, precedence and cycle rejection, stable capacity selection, exact frontiers, authority, lease retention, disposition, and restart while predecessor integration remains buildable.
3. Capability: Provider-local Git integration, materialization, frontier advancement, finalization, provenance, drift rejection, and cleanup; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/integration.ts, agentic-ai/loom/src/module-delivery/integration-provenance.ts, agentic-ai/loom/src/module-delivery/index.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/integration.test.ts, agentic-ai/loom/tests/module-delivery/core-wasm-web-pilot.test.ts, agentic-ai/loom/tests/module-delivery/worktree-test-support.ts; Expertise forbidden paths: .cortex/AGENTS.md, .cortex/gizmo/AGENTS.md, agentic-ai/loom/src/module-delivery/admission.ts, agentic-ai/loom/src/module-delivery/validation.ts; Expertise consumer interfaces: Accepted provider submissions, exact integrated frontiers, final integration state, cleanup handles, and the stable module-delivery barrel; Expertise acceptance evidence: Web-development review confirms typed integration boundaries, deterministic state transitions, focused source files below 1,000 lines, and behavior-focused tests; Capability acceptance evidence: Integration and core-WASM-web pilot tests prove immediate writer integration, evidence acceptance without Git ancestry, predecessor closure, forged-handoff rejection, immutability, final barrier, and idempotent cleanup.
4. Capability: Full-work preservation, stacked PR lifecycle, and Workbench completion; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: A linked draft preserves the full-work commit before scope reduction; Workbench maps every path and behavior; each PR is below 3,000 lines, buildable, cross-linked, exact-head validated, squash-merged in order, and followed by lifecycle records.
5. Capability: Security acceptance of generation, evidence, claims, Git frontiers, and lifecycle boundaries; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Security confirms adversarial tests reject forged authority, stale evidence, path escape, unauthorized commits, lifecycle takeover, and mutable-generation reuse, then returns an exact-head verdict.
- Public or cross-module interfaces: `ModuleDeliveryPlan` version 2 generation, team, evidence-surface, and execution-precedence fields; generation authority, admission state, attempt lease and disposition APIs; evidence digest and verification APIs; provider submission contracts; `prepareModuleIntegration`, `integrateVerifiedModuleDeliveryTask`, `finalizeModuleDeliveryIntegration`, cleanup, and barrel exports
- Delivery shape: Multiple PRs
- Current PR estimated authored changed lines: 629
- Current PR slice and acceptance evidence: PR 1172 — Cortex contracts and documentation only, with runtime and tests preserved in linked successors; Acceptance evidence: 10 Cortex files map only to this slice, numstat is 629 lines, semantic review and Cortex audit pass, and pre-push, exact-head hosted validation, required verdicts, and readiness pass.
- PR slices and acceptance evidence:
1. PR 1172 — Cortex contracts and documentation only, with runtime and tests preserved in linked successors; Acceptance evidence: 10 Cortex files map only to this slice, numstat is 629 lines, semantic review and Cortex audit pass, and pre-push, exact-head hosted validation, required verdicts, and readiness pass.
2. Successor — typed plan, evidence, admission, leases, disposition, generation, compatibility-safe provenance, and exports, 2,518 lines (2,454 additions, 64 deletions); Acceptance evidence: predecessor integration remains buildable, plan version 2 round-trips, focused codec/plan/evidence/admission and adversarial tests pass, and source-architecture, TypeScript-state, Loom, exact-head validation, and readiness pass.
3. Final successor — provider-local integration and materialization, provenance migration, frontier advancement, finalization, cleanup, integration tests, and core-WASM-web pilot, 1,252 lines (861 additions, 391 deletions); Acceptance evidence: focused integration and pilot tests prove local disposition, predecessor closure, incomplete-finalization rejection, drift and forged-handoff rejection, idempotent cleanup, and complete Loom, exact-head validation, and readiness pass.

## Initial plan

1. Publish the plan and create three ordered focused issues with path-and-behavior inventory.
2. Push `ce47c73562755427d6471cf1209f50db625fb023` to a linked draft before reducing PR 1172.
3. Rebuild and merge PR 1172 as the 629-line Cortex slice after proving runtime preservation.
4. Build the typed successor with compatibility-safe contracts, re-measure, validate, and merge.
5. Rebase the preservation successor onto that frontier, retain integration work, prove the range, validate, and merge.
6. Route AI ownership through web-development implementation and Security review; Gizmo owns joins and PR lifecycle.
7. Publish Workbench worklogs and statistics after each merge.

## Completion evidence

- Workbench has the superseding plan, three focused issues, and a preservation inventory for all 4,399 lines.
- A linked draft preserved the full-work commit before PR 1172 reduction.
- All three diffs are buildable, below 3,000 lines, and consume no unmerged API.
- Behavior tests prove plan version 2, evidence authenticity, generation authority, conflict-safe admission, leases, disposition, provider-local integration, exact frontiers, finalization, drift rejection, and cleanup.
- Optional evidence stays outside lifecycle authority; Cortex, harness, Loom, team, Security, and Gizmo boundaries remain intact.
- Every head passes checks, verdicts, readiness, merge, and completion records.

## Safety review

This public-safe interpretation contains no raw request, credentials, secrets, private data, environment values, raw logs, local paths, internal addresses, or unnecessary infrastructure detail.
