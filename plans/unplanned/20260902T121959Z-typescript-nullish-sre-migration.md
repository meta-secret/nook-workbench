---
issue: null
gizmo_id: typescript-nullish-sre-migration
---

# Task plan

## Interpreted request

Remove nullish operators from repository automation and infrastructure without changing operational behavior. Keep the slice small, update exact audited-source evidence, and land it after the AI migration.

## Requirements

- Remove `??` and `??=` from authored GitHub automation and infrastructure sources.
- Preserve zero, false, and empty-string behavior with explicit structural handling.
- Remove generic optional-value helpers.
- Refresh audited digests for the exact migrated operational sources.
- Complete exact-head validation, review, readiness, merge, and lifecycle closeout.

## Constraints and exclusions

- Do not add truthiness shortcuts, sentinels, compatibility branches, fallback paths, or exemptions.
- Do not change Web product code or activate the repository-wide checker in this pull request.
- Keep authored additions below 2,000 and authored source files below 1,000 lines.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: typescript-nullish-sre-migration
- Estimated authored changed lines: 127
- Owning modules, packages, or layers: GitHub automation, infrastructure simulation and providers, and AI-owned audited runtime digest evidence
- Ownership units:
1. Capability: SRE explicit-state migration; Gizmo ID: typescript-nullish-sre-migration; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: SRE-owned authored sources contain no nullish operators or generic optional helpers; focused operational tests and pre-push pass.
2. Capability: Audited source digest refresh; Gizmo ID: typescript-nullish-sre-migration; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Every changed audited operational source matches its exact SHA-256 pin and Loom verification passes.
- Public or cross-module interfaces: Existing automation, infrastructure, and audited-source contracts retain their behavior; no interface is added.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 127
- Current PR slice and acceptance evidence: SRE explicit-state migration; Acceptance evidence: SRE tests 133/133, Loom 663/663, pre-push, hosted validation, readiness, and merge pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: typescript-nullish-sre-migration; Gizmo name: SRE explicit-state migration; Predecessor Gizmo ID: None; SRE explicit-state migration; Estimated authored changed lines: 127; Acceptance evidence: SRE tests 133/133, Loom 663/663, pre-push, hosted validation, readiness, and merge pass

## Initial plan

1. Materialize the SRE-owned validated source states on merged main.
2. Refresh exact audited-source digest evidence.
3. Run focused operational tests, Loom verification, and pre-push.
4. Push, review, repair if necessary, merge, and publish lifecycle records.

## Completion evidence

- Authored GitHub automation and infrastructure source contains no `??` or `??=` syntax.
- All changed audited source pins match their source bytes.
- Focused SRE tests, Loom verification, and pre-push pass.
- The pull request is squash-merged and linked from its Workbench worklog.

## Safety review

- This plan contains only public-safe repository policy, ownership, test, and delivery information.
- It excludes credentials, private data, raw prompts, transcripts, raw logs, and machine-specific paths.
