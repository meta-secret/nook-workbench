# Task plan

## Interpreted request

Establish Gizmo as the root cross-team delivery-control context. Separate delivery orchestration from the AI implementation team while preserving strict team ownership and selective context loading.

## Requirements

- Add a root Gizmo agent contract and knowledge graph.
- Move cross-team delivery authorities from AI to Gizmo.
- Keep Cortex authoring, Loom, runtime implementation, and expert definitions with AI.
- Make team review verdicts inputs to Gizmo's final integrated verdict.
- Keep pull-request, Workbench, readiness, merge, and shared lifecycle mutations with Gizmo.
- Keep Gizmo non-implementing.
- Update executable skill mirrors and every direct caller.
- Update deterministic Cortex graph validation for the Gizmo graph.

## Constraints and exclusions

- Preserve product, security, infrastructure, web, and AI implementation ownership.
- Do not move generic shared knowledge into Gizmo.
- Do not change product behavior.
- Do not trigger hosted validation during the discussion phase.
- Preserve the exact current branch and draft pull request.

## Change budget and PR sequence

- Estimated authored changed lines: 900
- Owning modules, packages, or layers: Gizmo Cortex control plane, AI Cortex tooling, executable skill mirrors, preflight contracts
- Ownership units:
1. Capability: Gizmo delivery-control context and authority migration; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Root graph routes Gizmo separately from teams and shared knowledge, moved authorities have one owner, and links remain valid.
2. Capability: Deterministic Gizmo graph enforcement; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/lib/cortex-document-structure.ts; Expertise allowed test paths: agentic-ai/loom/tests/cortex-document-structure.test.ts; Expertise forbidden paths: .cortex/teams/web-dev/AGENTS.md, .cortex/teams/web-dev/knowledge-graph.md, nook-app/nook-web/Taskfile.yml; Expertise consumer interfaces: Canonical Cortex owner-graph path classification and graph-existence diagnostics; Expertise acceptance evidence: Focused Loom tests prove Gizmo is a required root child graph and moved documents are indexed only by Gizmo; Capability acceptance evidence: Cortex audit and Loom verification accept the seven-context topology.
- Public or cross-module interfaces: None
- Delivery shape: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Add the Gizmo context, migrate delivery authorities, update mirrors and deterministic validation, and preserve team boundaries; Acceptance evidence: focused graph tests, Cortex audit, Loom verification, preflight contracts, and semantic diff review pass.
- PR slices and acceptance evidence: 1. Add the Gizmo context, migrate delivery authorities, update mirrors and deterministic validation, and preserve team boundaries; Acceptance evidence: focused graph tests, Cortex audit, Loom verification, preflight contracts, and semantic diff review pass.

## Initial plan

1. Inventory current AI authorities and deterministic assumptions.
2. Create the Gizmo contract and graph.
3. Move delivery skills and workflows to Gizmo.
4. Update root, team, AI, wrapper, prompt, test, and code references.
5. Add deterministic Gizmo graph coverage.
6. Run focused and repository-owned Cortex validation.
7. Commit and push the discussion revision to the existing draft pull request.

## Completion evidence

- Root routing clearly distinguishes Gizmo, five implementation teams, and shared knowledge.
- Team subagents load only their team context.
- Gizmo owns final review and delivery lifecycle decisions.
- AI owns Cortex and orchestration implementation machinery.
- All moved documents are indexed once and all links resolve.
- Focused tests and local Cortex checks pass.

## Safety review

The plan contains no raw conversation, private data, secrets, credentials, local paths, raw logs, or unnecessary infrastructure details.
