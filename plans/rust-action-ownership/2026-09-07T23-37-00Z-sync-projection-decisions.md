---
title: Type synchronization evidence and provider-vault outcomes
feature: rust-action-ownership
issue: issues/rust-action-ownership/sync-projection-decisions.md
started_at: 2026-09-07T23:37:00Z
agent: codex
gizmo_id: rust-action-ownership-sync-projection-decisions
---

# Task plan

## Interpreted request

The next bounded change will make four synchronization-boundary operations members of the state that makes each operation meaningful. Provider rows will carry their checkpoint update, snapshots will own their compatibility projection, event graphs will assess local replacement, and the resulting replacement enum will derive the provider choice.

## Requirements

- Give the four named operations associated methods on existing domain owners.
- Update every direct core, WASM, sentinel, storage, integration, and focused test use in the same closure.
- Turn on both ownership diagnostics in the completed implementation files and reject invalid suppression attributes.
- Retain public adapter functions only as explicit conversion layers over the owned actions.
- Keep the source change below 1,800 authored additions and deliver it in one reviewable PR.
- Execute repository formatting, diff, Loom, hosted validation, readiness, merge, and Workbench publication gates.

## Constraints and exclusions

Keep persisted row shape, aliases, redaction, projection ordering, event evidence rules, conservative choice precedence, and public signatures exactly stable. Do not alter provider I/O, authentication, authorization, persistence, schemas, cryptography, retries, recovery, compatibility fallbacks, or introduce a generic phase framework. Product builds and tests remain hosted-only.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-sync-projection-decisions
- Estimated authored changed lines: 1100
- Owning modules, packages, or layers: nook-app/nook-platform/nook-core sync provider-store metadata, legacy projection, and vault sync conflict modules; direct nook-core and nook-wasm adapters
- Ownership units:
  1. Capability: Checkpoint mutation and compatibility serialization; Gizmo ID: rust-action-ownership-sync-projection-decisions; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Provider version/revision fallback, content hashing, scope normalization, row ordering, wire aliases, and credential redaction remain unchanged.
  2. Capability: Event evidence assessment and provider choice projection; Gizmo ID: rust-action-ownership-sync-projection-decisions; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Unknown, preserve, and adopt outcomes retain their current security precedence, identity eligibility, and projection fields.
- Public or cross-module interfaces: Existing nook-core synchronization/projection types and public nook-wasm identity, conflict, and storage adapters
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1100
- Current PR slice and acceptance evidence: Checkpoint update, compatibility projection, event evidence assessment, provider choice projection, and direct callers; Acceptance evidence: hosted required checks, remote Loom, readiness, and exact-head deployment pass with existing strings, order, and security outcomes.
- PR slices, estimates, and acceptance evidence:
  1. Gizmo ID: rust-action-ownership-sync-projection-decisions; Gizmo name: Synchronization evidence ownership; Predecessor Gizmo ID: None; Checkpoint update, compatibility projection, event evidence assessment, provider choice projection, and direct callers; Estimated authored changed lines: 1100; Acceptance evidence: hosted required checks, remote Loom, readiness, and exact-head deployment pass with existing strings, order, and security outcomes.

## Initial plan

1. Map each operation's current owner candidates and all consumers at the current Main head.
2. Implement owner methods and colocated behavior checks without changing values or errors.
3. Replace detached exports at core, WASM, sentinel, storage, integration, and conflict call sites.
4. Add module enforcement, then run format, whitespace, budget, and Loom gates.
5. Deliver one PR through exact-head hosted checks, merge, and Workbench completion records.

## Completion evidence

- The merged PR head and Main merge commit, remote Loom and hosted run IDs, exact-head deployment, readiness result, and published Workbench issue, worklog, and statistics.

## Safety review

- This record contains no prompt text, credentials, private information, raw diagnostics, local filesystem paths, or unnecessary infrastructure detail.
