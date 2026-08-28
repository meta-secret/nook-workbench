---
title: Clarify vault unlock identity context through the typed domain boundary
feature: devices-and-access
issue: issues/devices-and-access/identity-access-methods-ui.md
started_at: 2026-08-28T16:05:00Z
agent: codex
supersedes: plans/devices-and-access/20260828T155056Z-vault-unlock-identity-context.md
---

# Task plan

## Interpreted request

Make the vault-opening flow explain the identity relationship before authentication. A person should see which locally known identities are linked to the selected vault, whether the current browser identity is one of them, and whether device-key unlock will use it. The relationship and current-browser decision must be projected by the typed Rust/WASM domain boundary rather than recomputed by presentation code. Identity management remains a standalone Devices & access concern rather than a vault navigation destination. Complete the bounded change through a reviewed, validated, squash-merged pull request and durable Workbench records.

## Requirements

- Expose a narrow typed Rust/WASM projection for the identities linked to one selected vault and its current-browser match state.
- Keep identity ownership, vault membership, and current-browser resolution inside the domain boundary, with behavior-focused Rust tests.
- Show a compact identity context between the selected vault and its unlock methods.
- Mark the current browser identity and enable device-key unlock only when the domain projection reports that identity linked to the selected vault and the existing unlock capability is available.
- Represent missing, loading, failed, and mismatched relationship evidence honestly, with a route to standalone Devices & access.
- State that a backup password opens the vault directly and does not unlock an identity.
- Remove the Devices & access item from vault bottom navigation while preserving the standalone route and identity-protection ceremonies.
- Keep visible copy in the shared English and Russian catalogs and preserve generated catalog parity.
- Add focused Rust, model, and browser regression coverage.
- Deliver one focused pull request through exact-head review, repository validation, readiness, squash merge, and Workbench completion records.

## Constraints and exclusions

- Do not change cryptographic behavior, vault authorization, identity membership, persistence, or unlock enforcement.
- Do not infer authorization from labels or duplicate Rust-owned relationship logic in TypeScript or Svelte.
- Keep the new boundary read-only and fail closed when the projection cannot be loaded or does not contain a current-browser identity for the selected vault.
- Do not expose raw identity identifiers, vault keys, credentials, or protected material in the rendered surface or logs.
- Do not remove the standalone Devices & access page or its locked-state route.
- Do not redesign unrelated vault, onboarding, administration, or settings navigation.

## Change budget and PR sequence

- Estimated authored changed lines: 650
- Owning modules, packages, or layers: Rust/WASM identity projection, shared vault login presentation and view state, vault bottom navigation, shared translation catalogs, focused Rust, Vitest, and Playwright coverage
- Ownership units:
1. Capability: Typed selected-vault identity relationship projection; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Behavior-focused Rust tests prove selected-store filtering, current-browser resolution, mismatched identities, and empty results through a narrow read-only WASM projection
2. Capability: Vault-linked identity context and vault navigation correction; Functional owner: Web development; Expertise provider: Development core; Expertise allowed code paths: nook-app/nook-platform/nook-wasm/src/identity_record.rs,nook-app/nook-platform/nook-wasm/src/manager/identity.rs; Expertise allowed test paths: nook-app/nook-platform/nook-wasm/src/identity_record.rs; Expertise forbidden paths: nook-app/nook-platform/nook-auth2,nook-app/nook-platform/nook-core; Expertise consumer interfaces: Typed selected-vault identity context projection consumed by the login surface; Expertise acceptance evidence: Rust tests establish relationship semantics and the generated WASM surface builds; Capability acceptance evidence: Focused unit tests consume the typed projection without filtering vault membership in TypeScript, targeted Playwright proves the rendered identity context and absence of the vault Access tab, and web checks preserve translation and type safety
3. Capability: Pull-request and Workbench delivery lifecycle; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head review and repository checks pass, readiness succeeds, the PR is squash-merged, and linked Workbench worklog and agent statistics are published
- Public or cross-module interfaces: A narrow read-only Rust/WASM projection reports selected-vault linked identities and the current-browser match state to the web login consumer
- Delivery shape: One PR
- Current PR estimated authored changed lines: 650
- Current PR slice and acceptance evidence: Typed vault-identity projection plus vault unlock context and navigation correction; Acceptance evidence: focused Rust, unit, and Playwright behavior pass, complete repository validation and exact-head readiness succeed, and the PR is squash-merged
- PR slices and acceptance evidence: 1. Typed vault-identity projection plus vault unlock context and navigation correction; Acceptance evidence: focused Rust, unit, and Playwright behavior pass, complete repository validation and exact-head readiness succeed, and the PR is squash-merged

## Initial plan

1. Preserve the current-main integration and publish this superseding plan in response to the blocking architecture review.
2. Add the narrow Rust/WASM selected-vault identity projection and behavior-focused Rust tests, then adapt the web consumer to use only that typed result.
3. Re-run focused Rust, unit, type, format, and browser evidence plus advisory review.
4. Push and open the focused pull request, then run repository-owned exact-head review and complete validation; route any findings to the owning team and revalidate replacement heads.
5. Run readiness, squash-merge, and publish the linked issue update, worklog, and agent statistics.

## Completion evidence

- The selected vault displays identities returned by the typed domain projection and marks the current browser identity before unlock.
- Presentation code does not decide vault ownership or current-browser membership.
- Device-key unlock is unavailable when the typed result has no current-browser match for the selected vault.
- Backup-password copy remains a direct vault recovery path rather than identity authentication.
- The vault bottom navigation contains no Devices & access item, while the standalone route remains functional.
- Focused Rust, unit, and browser coverage, repository-owned PR checks, exact-head review, and readiness all pass.
- The implementation PR is squash-merged and Workbench completion records link the final evidence.

## Safety review

This plan contains only a public-safe authored interpretation. It contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure detail.
