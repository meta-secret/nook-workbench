---
title: Migrate Minds to concise Rust paths
feature: unplanned
issue: null
started_at: 2026-09-04T22:43:11Z
agent: codex
gizmo_id: minds-concise-paths
---

# Task plan

## Interpreted request

Migrate the authored Minds `hive` and `lace` Rust packages from long fully qualified expressions to imports and meaningful one-module qualifiers, then deny future paths above two inline segments through their shared Clippy boundary.

## Requirements

- Preserve meaningful owning-module context instead of importing ambiguous bare functions or types.
- Configure the Minds workspace for `absolute_paths = "deny"` with `absolute-paths-max-segments = 2`; both member packages must continue inheriting workspace lints.
- Classify the 370 initial non-`use` candidates and replace every real authored path above two inline segments.
- Prefer grouped imports and shared module aliases that reduce repetition and code size.
- Deliver `hive` and `lace` together as the next serial pull request.

## Constraints and exclusions

- Keep authored additions below 2,000 lines and minimize net code.
- Exclude `agentic-ai/minds/vendor/arrayref`; do not alter vendored code.
- Do not change product Rust, preflight, Cortex, generated output, lockfiles, dependencies, or unrelated AI tooling.
- Do not add lint allowances, wildcard imports, fallback behavior, or ambiguous bare free-function imports.
- Do not run local Rust, Cargo, Clippy, WASM, or product builds; hosted validation owns compilation and Clippy.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: minds-concise-paths
- Estimated authored changed lines: 800
- Owning modules, packages, or layers: agentic-ai/minds workspace, hive, and lace
- Ownership units:
1. Capability: Minds concise Rust paths and shared lint enforcement; Gizmo ID: minds-concise-paths; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: use-aware inventory is clean outside excluded vendor code, the shared manifest denies absolute paths under a two-segment configuration, both members inherit the lint table, imports retain meaningful module context, authored additions remain within budget, hosted checks pass, and exact-head review is clean
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 800
- Current PR slice and acceptance evidence: Complete the authored Minds migration and add shared enforcement; Acceptance evidence: zero residual executable candidates outside vendor code, workspace denial and two-segment configuration are active, both members inherit the lint, net code does not grow unnecessarily, local hygiene passes, hosted validation passes, exact-head review is clean, and readiness reports no drift
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: minds-concise-paths; Gizmo name: Minds concise paths; Predecessor Gizmo ID: None; Complete the authored Minds migration and add shared enforcement; Estimated authored changed lines: 800; Acceptance evidence: zero residual executable candidates outside vendor code, workspace denial and two-segment configuration are active, both members inherit the lint, net code does not grow unnecessarily, local hygiene passes, hosted validation passes, exact-head review is clean, and readiness reports no drift

## Initial plan

1. Classify the 370 initial authored candidates across `hive` and `lace`, excluding vendored code.
2. Replace real paths with concise imports or meaningful module aliases and apply the shared two-segment Clippy contract.
3. Verify rustfmt, use-aware inventory, binding correctness, member inheritance, scope, diff size, and reduction before delivery.
4. Complete hosted validation, exact-head review, readiness, squash merge, and Workbench closeout.

## Completion evidence

- Authored Minds Rust has no executable path above two inline segments outside excluded vendor code.
- The shared workspace rejects future absolute-path regressions and both packages inherit the contract.
- The reviewed exact head preserves Minds behavior and semantic qualifiers, stays within budget, and merges with no unresolved feedback.

## Safety review

This record contains no raw prompt, transcript, confidential material, private data, unfiltered execution output, local path, internal host detail, or unnecessary infrastructure detail. The change preserves orchestration, delivery, authentication, and storage boundaries.
