---
title: Fuzz workspace concise Rust paths
feature: unplanned
issue: null
started_at: 2026-09-04T20:42:23Z
agent: codex
gizmo_id: fuzz-concise-paths
---

# Task plan

## Interpreted request

Migrate the standalone Rust fuzz workspace to concise contextual paths and enforce the configured two-segment Clippy limit through its own manifest and Clippy configuration.

## Requirements

- Replace `std::str::from_utf8` with a `std::str` module import and the contextual call `str::from_utf8`.
- Add `absolute_paths = "deny"` to the fuzz manifest's Clippy lint table.
- Add `absolute-paths-max-segments = 2` to the standalone fuzz Clippy configuration.
- Preserve fuzz behavior and parser coverage exactly.
- Deliver the complete fuzz-workspace migration as one serial pull request.

## Constraints and exclusions

- Keep authored additions at or below 2,000 lines and within the 10-line estimate.
- Do not change product crates, preflight, Minds, Cortex, generated output, lockfiles, or unrelated configuration.
- Do not add lint allowances, wildcard imports, dependencies, fallback behavior, or unrelated cleanup.
- Do not run local Rust or product builds; hosted validation owns compilation and Clippy.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: fuzz-concise-paths
- Estimated authored changed lines: 10
- Owning modules, packages, or layers: nook-app/nook-platform/fuzz
- Ownership units:
1. Capability: Concise Rust paths and lint enforcement for the standalone fuzz workspace; Gizmo ID: fuzz-concise-paths; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: use-aware inventory is clean, the standalone manifest denies absolute paths, the two-segment configuration is explicit, authored additions remain within budget, hosted fuzz and Clippy checks pass, and exact-head review is clean
- Public or cross-module interfaces: None
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 10
- Current PR slice and acceptance evidence: Migrate the standalone fuzz workspace and enable its concise-path enforcement; Acceptance evidence: use-aware inventory is clean, manifest denial and two-segment configuration are active, authored additions are within budget, local hygiene passes, hosted fuzz and Clippy validation passes, exact-head review is clean, and readiness reports no drift
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: fuzz-concise-paths; Gizmo name: Fuzz workspace concise paths; Predecessor Gizmo ID: None; Migrate the standalone fuzz workspace and enable its concise-path enforcement; Estimated authored changed lines: 10; Acceptance evidence: use-aware inventory is clean, manifest denial and two-segment configuration are active, authored additions are within budget, local hygiene passes, hosted fuzz and Clippy validation passes, exact-head review is clean, and readiness reports no drift

## Initial plan

1. Rewrite the one inventoried standard-library path with a contextual `str` module import.
2. Enable manifest-level denial and explicit standalone two-segment Clippy configuration.
3. Verify the one-target inventory, diff budget, formatting, and permitted pre-push hygiene.
4. Complete hosted validation, exact-head review, readiness, squash merge, and Workbench closeout.

## Completion evidence

- The standalone fuzz target has no non-`use` path above two segments and its manifest denies regressions under an explicit two-segment configuration.
- Hosted fuzz compilation and Clippy pass without behavioral changes.
- The reviewed exact head stays within budget and merges with zero drift or unresolved feedback.

## Safety review

This record contains no raw prompt, transcript, confidential material, private data, unfiltered execution output, local path, internal host detail, or unnecessary infrastructure detail. It preserves existing parser and fuzzing boundaries.
