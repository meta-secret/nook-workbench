---
issue: null
gizmo_id: typescript-nullish-prohibition
---

# Task plan

## Interpreted request

Remove nullish-coalescing from authored JavaScript, TypeScript, and Svelte and make its reintroduction mechanically impossible. Preserve behavior with the smallest explicit typed branches available. Activate the repository-wide syntax rule only after all owned source domains are clean.

## Requirements

- Migrate authored AI and GitHub automation usage with minimal semantic rewrites.
- Migrate authored infrastructure usage without changing operational behavior.
- Migrate authored web and test usage through explicit state or control-flow handling.
- Add Web-owned Cortex guidance explaining why `??` and `??=` are prohibited.
- Add tree-sitter enforcement to the repository TypeScript-state checker with positive and negative fixtures.
- Introduce no baseline, exemption, allowlist, compatibility branch, or fallback.
- Deliver and merge every dependency-ordered pull request with exact-head validation and Workbench completion.

## Constraints and exclusions

- Preserve public behavior, protocols, tests, and generated bindings.
- Do not replace `??` with truthiness shortcuts when zero, false, or an empty string is meaningful.
- Do not broaden the rule to optional chaining or optional object shape.
- Keep each authored source file below 1,000 lines and each pull request below 2,000 authored additions.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: typescript-nullish-prohibition
- Estimated authored changed lines: 1,900
- Owning modules, packages, or layers: AI and GitHub automation, infrastructure automation, web applications and tests, Web Cortex TypeScript policy, and preflight TypeScript-state enforcement
- Ownership units:
1. Capability: AI and repository automation nullish migration; Gizmo ID: typescript-nullish-prohibition; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Authored AI and GitHub automation sources contain no nullish-coalescing syntax; focused package tests, formatting, typechecks, pre-push, hosted validation, readiness, and merge pass.
2. Capability: Infrastructure nullish migration; Gizmo ID: typescript-nullish-prohibition; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Authored infrastructure sources contain no nullish-coalescing syntax; focused contract tests, pre-push, hosted validation, readiness, and merge pass.
3. Capability: Web nullish migration; Gizmo ID: typescript-nullish-prohibition; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Authored web sources and tests contain no nullish-coalescing syntax; focused unit and type checks, pre-push, hosted validation, readiness, and merge pass.
4. Capability: TypeScript nullish policy; Gizmo ID: typescript-nullish-prohibition; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Web Cortex prohibits `??` and `??=` and documents explicit enum, union, and control-flow replacements; Cortex audit passes.
5. Capability: TypeScript nullish enforcement; Gizmo ID: typescript-nullish-prohibition; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Positive and negative tree-sitter fixtures prove `??` and `??=` rejection without textual false positives; the full authored tree is clean; preflight, hosted validation, readiness, and merge pass.
- Public or cross-module interfaces: `task preflight:typescript-state` diagnostic contract and Web TypeScript engineering policy
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1,900
- Current PR slice and acceptance evidence: Serially migrate every ownership domain, then activate the Web policy and SRE checker on the clean tree; Acceptance evidence: zero authored nullish syntax, focused owner checks, Cortex audit, preflight, exact-head hosted validation, readiness, and merge
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: typescript-nullish-prohibition; Gizmo name: TypeScript nullish prohibition; Predecessor Gizmo ID: None; Serially migrate every ownership domain, then activate the Web policy and SRE checker on the clean tree; Estimated authored changed lines: 1,900; Acceptance evidence: zero authored nullish syntax, focused owner checks, Cortex audit, preflight, exact-head hosted validation, readiness, and merge

## Initial plan

1. Migrate AI and repository automation usages.
2. Migrate infrastructure usages after the AI writer completes.
3. Migrate web usages after the SRE writer completes.
4. Add the authoritative Web policy and fail-closed SRE AST checker.
5. Validate, review, repair, merge, and publish Workbench completion records.

## Completion evidence

- Authored JavaScript, TypeScript, and Svelte contain no `??` or `??=` syntax.
- The TypeScript-state checker rejects both operators through parsed syntax.
- Web Cortex documents the explicit-state rationale and replacement patterns.
- Every stack head passes focused and hosted evidence, readiness, squash merge, and Workbench closeout.

## Safety review

- This plan contains only public-safe repository policy, ownership, and delivery information.
- Credentials, private materials, execution traces, and machine-specific paths are excluded.
