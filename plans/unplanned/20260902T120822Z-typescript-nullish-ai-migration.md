---
issue: null
gizmo_id: typescript-nullish-ai-migration
---

# Task plan

## Interpreted request

Remove nullish operators from AI-owned authored sources while preserving exact behavior through native structural checks, parameter defaults, and explicit branches. This is the first independently size-compliant delivery in the accepted ownership-ordered rollout.

## Requirements

- Remove `??` and `??=` from AI-owned JavaScript, TypeScript, and Svelte.
- Remove generic optional-value helpers introduced during migration.
- Preserve falsy values and lazy alternate evaluation.
- Repair and prove the assignment-prefix scanner regression exposed by migration.
- Complete exact-head validation, review, readiness, merge, and lifecycle closeout.

## Constraints and exclusions

- Do not add truthiness shortcuts, sentinels, compatibility branches, fallback paths, or exemptions.
- Do not change SRE, Web product, or preflight policy ownership in this pull request.
- Keep authored additions below 2,000 and authored source files below 1,000 lines.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: typescript-nullish-ai-migration
- Estimated authored changed lines: 826
- Owning modules, packages, or layers: AI automation, Loom, Hive Console, Hive controller, and AI-owned executable Cortex skills
- Ownership units:
1. Capability: AI explicit-state migration; Gizmo ID: typescript-nullish-ai-migration; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: AI-owned authored sources contain no nullish operators or generic optional helpers; formatting, lint, typecheck, focused command-security regression, Loom verification, pre-push, hosted checks, readiness, and merge pass.
- Public or cross-module interfaces: Existing Loom and AI runtime contracts retain their behavior; no interface is added.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 826
- Current PR slice and acceptance evidence: AI explicit-state migration; Acceptance evidence: AI nullish scan, command-security 19/19, Loom 663/663, pre-push, hosted validation, readiness, and merge pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: typescript-nullish-ai-migration; Gizmo name: AI explicit-state migration; Predecessor Gizmo ID: None; AI explicit-state migration; Estimated authored changed lines: 826; Acceptance evidence: AI nullish scan, command-security 19/19, Loom 663/663, pre-push, hosted validation, readiness, and merge pass

## Initial plan

1. Preserve the validated AI-owned final file states on a clean main-based branch.
2. Prove the assignment-prefix scanner terminates on environment-prefixed commands.
3. Run focused and full AI/Loom validation.
4. Push, review, repair if necessary, merge, and publish lifecycle records.

## Completion evidence

- AI-owned authored source contains no `??` or `??=` syntax.
- The command-security suite passes without unbounded CPU use.
- The 663-test Loom suite and pre-push gates pass at the exact head.
- The pull request is squash-merged and linked from its Workbench worklog.

## Safety review

- This plan contains only public-safe repository policy, ownership, test, and delivery information.
- It excludes credentials, private data, raw prompts, transcripts, raw logs, and machine-specific paths.
