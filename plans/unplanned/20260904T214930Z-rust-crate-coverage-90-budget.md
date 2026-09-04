---
title: Assess the all-crates 90 percent coverage delivery budget
feature: unplanned
issue: issues/unplanned/rust-crate-coverage-90.md
started_at: 2026-09-04T21:49:30Z
agent: codex
gizmo_id: rust-crate-coverage-90
---

# Task plan

## Interpreted request

Start one successor delivery from merged Main that raises every remaining testable Rust crate to 90 percent with behavior-focused tests, then validate, review, and merge it. Admit implementation only if the complete outcome honestly fits the repository's one-pull-request size policy.

## Requirements

- Use the merged exact-head reports and existing tests to quantify every remaining line-coverage deficit.
- Preserve independent per-crate enforcement and the two existing non-testable or third-party exclusions.
- Do not start a partial implementation or nominal pull request when the complete all-crates outcome cannot fit one allowed pull request.

## Constraints and exclusions

- One implementation pull request may contain at most 2,000 authored additions.
- Do not split, stack, weaken floors, add exclusions, use coverage-ignore annotations, or add assertion-free filler.
- Do not run Rust compilation, Rust tests, WASM compilation, or product coverage locally.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-crate-coverage-90
- Estimated authored changed lines: 0
- Owning modules, packages, or layers: Merged hosted coverage reports and Workbench admission records
- Ownership units:
1. Capability: Determine whether the complete all-crates 90 percent behavior-test outcome fits one permitted pull request; Gizmo ID: rust-crate-coverage-90; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact merged coverage totals, existing test counts, uncovered line and function counts, and an explicit admission or blocked result
- Public or cross-module interfaces: Independent per-crate coverage floors
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 0
- Current PR slice and acceptance evidence: Measure the complete successor and admit it only if it fits one pull request; Acceptance evidence: Exact hosted totals and the 2,000-addition constraint yield an explicit admission or blocked record
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-crate-coverage-90; Gizmo name: All-crates 90 percent budget assessment; Predecessor Gizmo ID: None; Measure the complete successor and admit it only if it fits one pull request; Estimated authored changed lines: 0; Acceptance evidence: Exact hosted totals and the 2,000-addition constraint yield an explicit admission or blocked record

## Initial plan

1. Read the merged coverage reports and count existing WASM tests.
2. Calculate the additional lines and functions that must execute for each deficit crate.
3. Compare the smallest behavior-test estimate with the mandatory one-pull-request limit.
4. Publish the implementation plan only if admitted; otherwise publish the concrete blocker without creating a branch or pull request.

## Completion evidence

- The focused issue and worklog state the exact deficits, test counts, estimated authored size, and admission result.

## Safety review

- This record contains no source-task text, conversation transcript, confidential value, private data, local path, username, environment value, internal address, or unnecessary infrastructure detail.
