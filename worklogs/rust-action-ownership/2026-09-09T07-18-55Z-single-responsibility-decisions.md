---
title: Enforce single responsibility for domain decisions
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T07-15-31Z-single-responsibility-decisions.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T07:15:31Z
finished_at: 2026-09-09T07:18:55Z
agent: codex
---

# Work summary

## Outcome

Made single responsibility explicit in canonical Cortex policy and moved authentication candidate replacement and attribution into AuthenticationWorkflowMatch. Published through [PR #1573](https://github.com/meta-secret/nook/pull/1573) at e831f6a5de6c351645a581da7ed07e22a8fb251e.

## Progress

- AI commit02c2a0b604c709c7b8e38ba164b4660f471d70af updated function-ownership.md and its domain-api-integrity.md link. The P1 rule requires one coherent responsibility, domain-local decisions/invariants/selection/state interpretation and intention methods. It rejects external policy reconstruction, cosmetic wrappers and overloaded owners, while retaining genuine boundary/presentation discrimination.
- DEV-CORE commite831f6a5de6c351645a581da7ed07e22a8fb251e refactored candidate_selection.rs. The match type owns exhaustive candidate selection and observation attribution; orchestration enumerates, classifies and folds results. Inline source examples were adapted without execution.

## Implementation problems

The batch loop reconstructed another type's selection policy by destructuring variants and comparing snapshot priorities. Moving that decision to the result owner centralizes rejection, no-match and tie semantics without changing priority ranking or creating a generic selection framework.

## Decisions

Use existing domain owners. Preserve terminal selected rejection, ignored incoming no-match/rejection, strictly greater-priority replacement and first-observation ties. Keep batch validation and observation-classification precedence with their existing knowledgeable owners. Strengthen the existing canonical policy instead of adding a duplicate SRP document.

## Validation

All verification remains deferred. No tests, compilation, typechecks, lint, audits, code reviews or workflows were run. Write-mode Rust formatting only. Runtime and compile-time behavior remain unverified.

## Remaining work

None for the focused policy and code implementation. Tests, verification and reviews await separate user instruction; delivery ends at the open PR.

## Implementation inventory

# Authentication candidate selection SRP inventory

Read the updated canonical `.cortex/shared/dynamic-skills/function-ownership.md` single-responsibility requirement before authoring.

## Implemented owner decisions

Authored file: `nook-app/nook-platform/nook-companion-core/src/authentication_workflow/candidate_selection.rs`.

- `AuthenticationWorkflowMatch::select_candidate(self, candidate)` owns exhaustive selection/result interpretation. Selected rejection is terminal. Incoming NoMatch and Rejected retain the selected result. A first matched candidate replaces NoMatch. A strictly higher snapshot priority replaces the current match; ties and lower priorities retain the first selected snapshot and source index.
- `AuthenticationWorkflowMatch::with_observation_index(self, index)` attributes matched snapshots to their observed position without manufacturing a match from NoMatch or Rejected.
- `classify_authentication_workflow_candidates` retains initial batch admission and only orchestrates enumeration, observation classification, attribution, and selection folding. It no longer reconstructs result rules, compares priorities, mutates matched snapshots, or carries a replacement boolean.
- Existing snapshot ranking remains on `AuthenticationWorkflowSnapshot::candidate_priority`; no new forwarding owner, generic framework, or getter chain.

## Nearby boundaries retained

- `AuthenticationWorkflowMatch::snapshot` already owns result-to-domain-error mapping.
- Facts batch size/bounds and progression filtering belong to the observation batch, not selection.
- Enrollment-before-login precedence belongs to observation classification, which possesses the field evidence needed for that decision.
- Existing schema, public signatures, candidate priority order, bounded index conversion, and rejected-batch behavior are unchanged.

## Authored source examples

A data-carrying `CandidateSelectionScenario` asserts selected/candidate/expected outcomes. Inline examples cover no-match/rejected combinations, terminal selected rejection, ignored candidate rejection, strict replacement, first ties, retained source indices, and absent/rejected attribution. Existing behavior examples remain.

Write-mode rustfmt only. No tests, compilation, typechecks, lint/checks, audits, reviews, workflows, or final verification performed. No TS, policy, generated, Workbench, or PR edits. Focused scope complete; execution-based verification deferred as requested.

