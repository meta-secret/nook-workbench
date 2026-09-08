---
title: Bounded GitHub failure-detail readers for PR Steward
feature: agent-orchestration
issue: issues/agent-orchestration/proactive-pr-steward-failure-summary.md
started_at: 2026-09-08T17:31:49Z
agent: codex
gizmo_id: proactive-pr-steward-failure-summary
supersedes: plans/agent-orchestration/20260908T154200Z-pr-steward-final-two-slices.md
---

# Bounded GitHub failure-detail readers for PR Steward

## Interpreted request

Deliver the bounded read-only GitHub failure-detail reader slice for an already-routed webhook identity. Terminal summaries and observer emission remain outside this focused issue.

## Requirements

- Preserve routed webhook repository, pull-request, head, and object identity as the sole admission input.
- Keep the current readers bounded, read-only, typed, and fail closed for invalid or unavailable GitHub results.
- Keep PR enumeration, association proof, and status pagination outside the current slice.
- Keep observer and terminal-summary emission outside the current slice.
- Complete hosted exact-head validation, readiness, review handling, merge, remote verification, and Workbench closeout for this slice.

## Constraints and exclusions

- No public arbitrary command runner, PR enumeration, association proof, status pagination, observer wiring, v2 emission, terminal summary, product repair, technical adjudication, review body transfer, persistence, scheduler, queue, retry, replay, compatibility reader, or fallback.
- Keep terminal summaries and observer emission in their separately authorized issue and plan.
- Do not rewrite the superseded immutable plan or work against an unmerged predecessor.
- Keep every PR estimate at or below 2,000 authored additions.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: proactive-pr-steward-failure-summary
- Estimated authored changed lines: 616
- Owning modules, packages, or layers: Loom bounded GitHub failure-detail readers and focused tests
- Ownership units:
1. Capability: Routed bounded GitHub failure-detail readers; Gizmo ID: proactive-pr-steward-failure-summary; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused fixed invocation, typed Invalid versus Unavailable handling, bounded output, routed identity preservation, Security, hosted exact-head, readiness, merge, remote verification, and Workbench evidence
- Public or cross-module interfaces: bounded routed GitHub failure-detail reader bundle
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 616
- Current PR slice and acceptance evidence: Deliver bounded read-only failure-detail readers that consume routed webhook identity without PR enumeration, association proof, or status pagination; Acceptance evidence: focused reader tests, typed Invalid versus Unavailable behavior, bounded output, Security, hosted exact-head validation, readiness, merge, remote verification, and Workbench evidence
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: proactive-pr-steward-failure-summary; Gizmo name: Bounded GitHub failure-detail readers for PR Steward; Predecessor Gizmo ID: None; Deliver bounded read-only failure-detail readers that consume routed webhook identity without PR enumeration, association proof, or status pagination; Estimated authored changed lines: 616; Acceptance evidence: focused reader tests, typed Invalid versus Unavailable behavior, bounded output, Security, hosted exact-head validation, readiness, merge, remote verification, and Workbench evidence

## Initial plan

1. Publish this superseding plan and update the focused issue to describe the bounded routed failure-detail reader contract.
2. Validate, merge, remotely verify, and close this reader slice without starting a subscriber because it is not wired into the observer.

## Completion evidence

- The reader slice remains at 616 authored additions, below the repository limit.
- Routed webhook identity is preserved; no PR enumeration, association proof, or status pagination is introduced in the current slice.
- The slice has exact-head hosted checks, readiness, Security acceptance, review/thread handling, merge, remote verification, and Workbench closeout.

## Safety review

- This record contains bounded planning metadata and public repository references only.
- It excludes raw prompts, transcripts, secrets, private data, raw logs, local paths, internal addresses, and unnecessary infrastructure details.
