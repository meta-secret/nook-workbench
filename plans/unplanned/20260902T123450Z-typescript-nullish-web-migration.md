---
issue: null
gizmo_id: typescript-nullish-web-migration
---

# Task plan

## Interpreted request

Remove nullish operators from Web-owned JavaScript, TypeScript, and Svelte without changing product or test behavior. Keep the migration as one ownership-cohesive, size-compliant slice and land it after the AI and SRE migrations.

## Requirements

- Remove `??` and `??=` from authored Web application, extension, shared, test, and build sources.
- Preserve zero, false, and empty-string behavior with explicit structural handling, discriminated state, or destructuring defaults.
- Refresh the exact audited digest for the changed extension setup source.
- Complete exact-head validation, review, readiness, merge, and lifecycle closeout.

## Constraints and exclusions

- Do not add truthiness shortcuts, sentinels, generic optional helpers, compatibility branches, fallback paths, or exemptions.
- Do not activate the repository-wide policy checker in this pull request.
- Keep authored additions below 2,000 and authored source files below 1,000 lines.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: typescript-nullish-web-migration
- Estimated authored changed lines: 1685
- Owning modules, packages, or layers: Web application, browser extension, Web shared package, Web tests and build tooling, Web debugging guidance, and exact audited-source evidence
- Ownership units:
1. Capability: Web explicit-state migration; Gizmo ID: typescript-nullish-web-migration; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Web-owned authored JavaScript, TypeScript, and Svelte contain no nullish operators or generic optional helpers; formatting, Web validation, Loom verification, and pre-push pass.
2. Capability: Web audited source digest refresh; Gizmo ID: typescript-nullish-web-migration; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: The changed audited extension setup source matches its exact SHA-256 pin and Loom verification passes.
- Public or cross-module interfaces: Existing Web runtime, extension, and test contracts retain their behavior; no interface is added.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1685
- Current PR slice and acceptance evidence: Web explicit-state migration; Acceptance evidence: zero nullish syntax, focused Web validation, Loom verification, pre-push, hosted validation, readiness, and merge pass
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: typescript-nullish-web-migration; Gizmo name: Web explicit-state migration; Predecessor Gizmo ID: None; Web explicit-state migration; Estimated authored changed lines: 1685; Acceptance evidence: zero nullish syntax, focused Web validation, Loom verification, pre-push, hosted validation, readiness, and merge pass

## Initial plan

1. Materialize the Web-owned validated source state on merged main.
2. Refresh the changed exact audited-source digest.
3. Run formatting, focused Web validation, Loom verification, and pre-push.
4. Push, review, repair if necessary, merge, and publish lifecycle records.

## Completion evidence

- Authored Web JavaScript, TypeScript, and Svelte contain no `??` or `??=` syntax.
- The changed audited source pin matches its source bytes.
- Focused Web validation, Loom verification, and pre-push pass.
- The pull request is squash-merged and linked from its Workbench worklog.

## Safety review

- This plan contains only public-safe repository policy, ownership, test, and delivery information.
- It excludes credentials, private data, raw prompts, transcripts, raw logs, and machine-specific paths.
