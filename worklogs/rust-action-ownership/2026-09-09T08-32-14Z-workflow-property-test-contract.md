---
title: Express workflow invariants with property-based tests
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T08-25-44Z-workflow-property-test-contract.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T08:25:44Z
finished_at: 2026-09-09T08:32:14Z
agent: codex
---

# Work summary

## Outcome

Replaced duplicated enumerative test-only contract checking with five inline property-based test groups. Preserved runtime snapshot admission and renamed its helper to action_matches_workflow_stage. Published through [PR #1573](https://github.com/meta-secret/nook/pull/1573) at 028778d3fdfe7b143011a05317ee89a2d61890b8.

## Progress

DEV-CORE committed 028778d3fdfe7b143011a05317ee89a2d61890b8, changing snapshot_contract.rs, the companion crate dev dependency, and only its existing proptest link in Cargo.lock. Targeted regression examples remain inline. No dependency version or checksum changed.

## Implementation problems

The cited helper was part of runtime untrusted-input admission, not just a test oracle. Removing it would weaken capability and snapshot validation. The actual duplication was nested test enumeration and synthetic tuple producibility. Generated observations now exercise independent invariants and guaranteed-invalid mutations without reproducing a full classifier rule table.

## Decisions

Preserve runtime guards. Generate bounded domain observations and batches, retain meaningful shrinking and edge cases, and express source/index, progress, approval, roundtrip, stability and rejection properties. Keep targeted regressions. Reuse existing proptest resolution and keep unit/property sources inline.

## Validation

Test sources only: no tests, compilation, typechecks, dependency resolution, cargo commands, lint, audits, reviews or workflows were run. Write-mode formatting only. All execution-based verification remains deferred; no passing-test claim is made.

## Remaining work

None for the requested source refactoring. Property execution and all other verification await separate user instruction. Delivery ends at the open PR.

## Property inventory

# Workflow property-source completion

## Runtime behavior retained

`classifier_tuple_matches_contract` was runtime validation, used by public snapshot admission and capability projection. Its logic remains, renamed `action_matches_workflow_stage` to describe its actual current responsibility. `matches_classifier_contract`, `TryFrom<AuthenticationWorkflowSnapshotWire>`, saved-login capability and Pilot visibility retain their validation gates. Property sources do not substitute for untrusted-input admission.

## Replaced test-only oracle

Removed `classifier_outputs` deeply nested enumeration and the synthetic Cartesian `every_accepted_workflow_tuple_is_classifier_producible` oracle, together with its enumeration-driven classifier-validity test. Retained focused saved-login/forged-capability and observation-index boundary regression examples. No complete kind/stage/action classifier table is reproduced in the property oracle.

## Authored inline properties

Data-carrying WorkflowObservationCase and WorkflowBatchCase own generation/assertions. Bounded strategies independently constrain password totals, bias zero/single/multiple/max counts, and preserve independent checkpoint/setup/recovery/passkey observations. Invalid generators exceed the documented limits directly rather than filtering through the system under test.

1. `selected_workflows_preserve_source_progress_approval_and_wire_admission`: selected source index belongs to the batch; selected result corresponds to classification of that source with its index; progress is positive/current<=total; takeover requires takeover approval and other actions explicit approval; serde-to-SnapshotWire/TryFrom roundtrip preserves output.
2. `irrelevant_or_equal_candidates_do_not_displace_the_first_selection`: independently append empty observation or duplicate selected source, with one free batch slot; existing snapshot/index stays selected without copying priority ordering.
3. `malformed_progress_index_and_approval_cannot_retain_capabilities`: first establish a successfully admitted baseline, then mutate zero current step, zero total steps, out-of-contract index or opposite approval. Each mutation independently violates an invariant, fails admission and removes saved-login/Pilot capability. No assumption that arbitrary mutation is always invalid.
4. `individually_oversized_observations_are_rejected`: typed field-category generator covers username/current/new/generic password/OTP/passkey account bounds up to u32::MAX.
5. `independently_bounded_password_fields_cannot_overflow_the_combined_limit`: individually allowed password counts with combined total MAX+1 must reject.

## Exact files/dependencies

- nook-app/nook-platform/nook-companion-core/src/authentication_workflow/snapshot_contract.rs — all property and regression sources remain inline, runtime helper rename only.
- nook-app/nook-platform/nook-companion-core/Cargo.toml — add dev-dependency `proptest = "1.7.0"`, matching existing nook-replication convention.
- nook-app/nook-platform/Cargo.lock — add only `"proptest"` to nook-companion-core's dependency list. Existing resolved proptest1.11.0, checksums, versions and transitive dependency entries remain unchanged.

Write-mode rustfmt only. No tests, compilation, typechecks, dependency resolution, cargo commands, checks, audits, reviews, workflows or final verification executed. No browser, runtime schema, policy, Workbench or PR edits. Source request complete; execution remains deferred by the user.

