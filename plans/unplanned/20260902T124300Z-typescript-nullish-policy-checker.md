---
issue: null
gizmo_id: typescript-nullish-policy-checker
---

# Task plan

## Interpreted request

Make the prohibition on TypeScript nullish coalescing durable in Cortex and the repository TypeScript-state checker after every ownership domain has migrated. Keep the final enforcement change small and fail closed on authored JavaScript, TypeScript, and Svelte syntax.

## Requirements

- Document why authored `??` and `??=` are prohibited and which explicit-state structures replace them.
- Detect the operators structurally with tree-sitter across JavaScript, TypeScript, Svelte scripts, and Svelte template expressions.
- Ignore comments, prose, and string content.
- Add focused positive and negative checker tests.
- Complete exact-head validation, review, readiness, merge, and lifecycle closeout.

## Constraints and exclusions

- Do not add baselines, exemptions, compatibility paths, fallback paths, truthiness replacements, or a generic optional helper.
- Do not revisit already merged ownership migrations.
- Keep authored additions below 2,000 and authored source files below 1,000 lines.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: typescript-nullish-policy-checker
- Estimated authored changed lines: 81
- Owning modules, packages, or layers: Web development Cortex explicit-state policy and repository TypeScript-state preflight
- Ownership units:
1. Capability: Nullish syntax policy and enforcement; Gizmo ID: typescript-nullish-policy-checker; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Cortex defines explicit replacements and tree-sitter rejects nullish operators in authored JavaScript, TypeScript, and Svelte while ignoring inert text.
- Public or cross-module interfaces: The existing TypeScript-state preflight gains one fail-closed syntax rule; no runtime product interface changes.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 81
- Current PR slice and acceptance evidence: Nullish syntax policy and checker; Acceptance evidence: focused checker tests, Cortex audit, Loom contracts, Loom verification, pre-push, hosted validation, readiness, and merge pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: typescript-nullish-policy-checker; Gizmo name: Nullish syntax policy and checker; Predecessor Gizmo ID: None; Nullish syntax policy and checker; Estimated authored changed lines: 81; Acceptance evidence: focused checker tests, Cortex audit, Loom contracts, Loom verification, pre-push, hosted validation, readiness, and merge pass

## Initial plan

1. Add the Web-owned explicit-state policy language.
2. Extend the existing tree-sitter checker for JavaScript, TypeScript, and Svelte operator nodes.
3. Prove positive detection and inert-text exclusions with focused tests.
4. Push, review, repair if necessary, merge, and publish lifecycle records.

## Completion evidence

- Cortex explicitly prohibits `??` and `??=` and names accepted state structures.
- Focused checker tests cover JavaScript/TypeScript, Svelte scripts, Svelte template expressions, comments, prose, and strings.
- Cortex audit, Loom contracts, Loom verification, pre-push, and hosted validation pass.
- The pull request is squash-merged and linked from its Workbench worklog.

## Safety review

- This plan contains only public-safe repository policy, ownership, test, and delivery information.
- It excludes credentials, private data, raw prompts, transcripts, raw logs, and machine-specific paths.
