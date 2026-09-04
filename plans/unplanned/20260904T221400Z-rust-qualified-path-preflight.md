---
title: Migrate preflight to concise Rust paths
feature: unplanned
issue: null
started_at: 2026-09-04T22:14:00Z
agent: codex
gizmo_id: preflight-concise-paths
---

# Task plan

## Interpreted request

Migrate the standalone preflight Rust workspace from long fully qualified expressions to imports and meaningful one-module qualifiers, then deny future paths above two inline segments through Clippy.

## Requirements

- Preserve meaningful owning-module context instead of importing ambiguous bare functions or types.
- Configure preflight for `absolute_paths = "deny"` with `absolute-paths-max-segments = 2`.
- Replace the 141 initial non-`use` path candidates, distinguishing multiline imports and other false positives from executable paths.
- Prefer grouped imports and shared module aliases that reduce repetition and net code.
- Deliver preflight as the next serial pull request.

## Constraints and exclusions

- Keep authored additions below 2,000 lines and minimize net code.
- Do not change product Rust, Minds, Cortex, generated output, lockfiles, dependencies, or unrelated workflows.
- Do not add lint allowances, wildcard imports, fallback behavior, or ambiguous bare free-function imports.
- Do not run local Rust, Cargo, Clippy, WASM, or product builds; hosted validation owns compilation and Clippy.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: preflight-concise-paths
- Estimated authored changed lines: 450
- Owning modules, packages, or layers: preflight standalone Rust workspace
- Ownership units:
1. Capability: Preflight concise Rust paths and lint enforcement; Gizmo ID: preflight-concise-paths; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: use-aware inventory is clean, the preflight manifest denies absolute paths under a two-segment configuration, imports retain meaningful module context, authored additions remain within budget, hosted Clippy checks pass, and exact-head review is clean
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 450
- Current PR slice and acceptance evidence: Complete the preflight migration and add standalone enforcement; Acceptance evidence: zero residual executable candidates, manifest denial and two-segment configuration are active, net code does not grow unnecessarily, local hygiene passes, hosted Clippy validation passes, exact-head review is clean, and readiness reports no drift
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: preflight-concise-paths; Gizmo name: Preflight concise paths; Predecessor Gizmo ID: None; Complete the preflight migration and add standalone enforcement; Estimated authored changed lines: 450; Acceptance evidence: zero residual executable candidates, manifest denial and two-segment configuration are active, net code does not grow unnecessarily, local hygiene passes, hosted Clippy validation passes, exact-head review is clean, and readiness reports no drift

## Initial plan

1. Classify the 141 initial preflight candidates and choose concise imports or meaningful module qualifiers per file.
2. Apply the two-segment Clippy contract at the standalone manifest and configuration boundary.
3. Verify rustfmt, use-aware inventory, binding correctness, scope, diff size, and reduction before delivery.
4. Complete hosted validation, exact-head review, readiness, squash merge, and Workbench closeout.

## Completion evidence

- Preflight authored Rust has no executable path above two inline segments.
- The package rejects future absolute-path regressions with the explicit two-segment configuration.
- The reviewed exact head preserves preflight behavior and semantic qualifiers, stays within budget, and merges with no unresolved feedback.

## Safety review

This record contains no raw prompt, transcript, confidential material, private data, unfiltered execution output, local path, internal host detail, or unnecessary infrastructure detail. The change preserves all validation and security boundaries.
