---
title: "Separate private admission authority from evidence verification"
feature: gizmo-multi-team-delivery
issue: issues/gizmo-multi-team-delivery/admission-evidence-authority.md
started_at: 2026-08-28T09:09:34Z
agent: codex
---

# Task plan

## Interpreted request

Close the final evidence-forgery path by giving admission and evidence a
private one-way authority seam instead of an exported registration backdoor.

## Requirements

- A new `authority.ts` owns generation, state, admission, and lease provenance
  that admission and evidence both need.
- Evidence capability minting and its registry remain private to the complete
  evidence verifier; no direct source import can register constructed evidence.
- Admission consumes accepted evidence through a one-way dependency without an
  emitted admission/evidence cycle.
- Writer frontier advancement stays fail-closed until provider integration
  supplies an exact attempt-bound capability.
- Every prior authority, disposition, freshness, ordering, isolation, and
  transactional-restart adversarial test remains active.

## Constraints and exclusions

- Add only `agentic-ai/loom/src/module-delivery/authority.ts` to the previously
  approved six paths; primarily move existing authority code rather than add a
  parallel abstraction.
- Do not change validation, provider Git integration, the integration gate,
  Cortex, scheduling, storage, Hive, or harness lifecycle.
- The complete PR remains below 3,000 authored lines, every file remains at or
  below 1,000 lines, and no lint suppression is allowed.

## Change budget and PR sequence

- Estimated authored changed lines: 2,950
- Owning modules, packages, or layers: Loom private authority, admission, evidence, and provenance
- Ownership units:
1. Capability: Private admission and evidence authority seam; Functional owner: AI; Expertise provider: Web development; Expertise allowed code paths: agentic-ai/loom/src/module-delivery/authority.ts,agentic-ai/loom/src/module-delivery/admission.ts,agentic-ai/loom/src/module-delivery/evidence.ts,agentic-ai/loom/src/module-delivery/index.ts,agentic-ai/loom/src/module-delivery/integration-provenance.ts; Expertise allowed test paths: agentic-ai/loom/tests/module-delivery/admission.test.ts,agentic-ai/loom/tests/module-delivery/evidence.test.ts; Expertise forbidden paths: agentic-ai/loom/src/module-delivery/integration.ts,agentic-ai/loom/src/module-delivery/codec.ts,agentic-ai/loom/src/module-delivery/domain.ts,agentic-ai/loom/src/module-delivery/validation.ts; Expertise consumer interfaces: Unforgeable generation, state, admission, lease, evidence, and future integrated-frontier capabilities; Expertise acceptance evidence: Direct-import forged registration fails and all prior adversarial tests pass; Capability acceptance evidence: Evidence minting is inseparable from full verification and runtime dependencies are acyclic
2. Capability: Security acceptance; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head review finds no public mint or stale capability path
3. Capability: Delivery join; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head team, local, hosted, readiness, and merge gates pass
- Public or cross-module interfaces: Private authority-backed admission, lease, accepted evidence, and fail-closed writer frontier capabilities
- Delivery shape: One PR
- Current PR estimated authored changed lines: 2,950
- Current PR slice and acceptance evidence: Admission and authenticated evidence authority with private seam; Acceptance evidence: Direct-import forgery rejection, exact-head reviews, hosted validation, readiness, and squash merge pass
- PR slices and acceptance evidence: Admission and authenticated evidence authority with private seam; Acceptance evidence: Direct-import forgery rejection, exact-head reviews, hosted validation, readiness, and squash merge pass

## Initial plan

1. Publish this superseding scope before adding `authority.ts`.
2. Move shared private capability state and establish one-way imports.
3. Remove the raw evidence registrar and prove direct-import forgery fails.
4. Re-run all focused, full, source, state, local, team, hosted, and readiness
   gates on one exact head.

## Completion evidence

- Constructed evidence cannot enter the accepted-evidence registry through any
  callable source-module export.
- Admission and evidence have no emitted runtime cycle.
- All prior P1/P2 regression tests and repository ceilings pass.

## Safety review

This public-safe plan contains no raw request, transcript, secrets, private
data, environment values, raw logs, local paths, internal addresses, or
unnecessary infrastructure details.
