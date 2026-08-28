---
title: Clarify vault unlock identity context
feature: devices-and-access
issue: issues/devices-and-access/identity-access-methods-ui.md
started_at: 2026-08-28T15:50:56Z
agent: codex
---

# Task plan

## Interpreted request

Make the vault-opening flow explain the identity relationship before authentication. A person should see which locally known identities are linked to the selected vault, whether the current browser identity is one of them, and whether device-key unlock will use it. Identity management remains a standalone Devices & access concern rather than a vault navigation destination. Complete the bounded change through a reviewed, validated, squash-merged pull request and durable Workbench records.

## Requirements

- Show a compact identity context between the selected vault and its unlock methods.
- Use the existing typed Rust/WASM identity-directory projection and vault store identifier relationship as the source of truth.
- Mark the current browser identity and enable device-key unlock only when that identity is linked to the selected vault and the existing capability is available.
- Represent missing, loading, failed, and mismatched relationship evidence honestly, with a route to standalone Devices & access.
- State that a backup password opens the vault directly and does not unlock an identity.
- Remove the Devices & access item from vault bottom navigation while preserving the standalone route and identity-protection ceremonies.
- Keep visible copy in the shared English and Russian catalogs and preserve generated catalog parity.
- Add focused model and browser regression coverage.
- Deliver one focused pull request through exact-head review, repository validation, readiness, squash merge, and Workbench completion records.

## Constraints and exclusions

- Do not change cryptographic behavior, identity membership, vault authorization, persistence, or the typed Rust/WASM interface.
- Do not infer authorization from labels or duplicate Rust-owned business logic in Svelte.
- Do not expose raw identity identifiers, vault keys, credentials, or protected material in the rendered surface or logs.
- Do not remove the standalone Devices & access page or its locked-state route.
- Do not redesign unrelated vault, onboarding, administration, or settings navigation.

## Change budget and PR sequence

- Estimated authored changed lines: 477
- Owning modules, packages, or layers: shared vault login presentation and view state, vault bottom navigation, shared translation catalogs, focused Vitest and Playwright coverage
- Ownership units:
1. Capability: Vault-linked identity context and vault navigation correction; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused unit tests prove store-linked identity filtering and current-browser states, targeted Playwright proves the rendered identity context and absence of the vault Access tab, and web checks preserve translation and type safety
2. Capability: Pull-request and Workbench delivery lifecycle; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head review and repository checks pass, readiness succeeds, the PR is squash-merged, and linked Workbench worklog and agent statistics are published
- Public or cross-module interfaces: None; the existing identity-directory snapshot request and typed identity-to-vault projection remain unchanged
- Delivery shape: One PR
- Current PR estimated authored changed lines: 477
- Current PR slice and acceptance evidence: Vault unlock identity context and vault navigation correction; Acceptance evidence: focused unit and Playwright behavior pass, complete repository validation and exact-head readiness succeed, and the PR is squash-merged
- PR slices and acceptance evidence: 1. Vault unlock identity context and vault navigation correction; Acceptance evidence: focused unit and Playwright behavior pass, complete repository validation and exact-head readiness succeed, and the PR is squash-merged

## Initial plan

1. Confirm the current main baseline, existing typed identity-to-vault projection, and absence of conflicting owned work.
2. Integrate the bounded web implementation and focused tests onto current main.
3. Publish the task plan, run pre-push hygiene and advisory review, then push and open the focused pull request.
4. Run repository-owned exact-head review and complete validation, route any findings to the owning team, and revalidate replacement heads.
5. Run readiness, squash-merge, and publish the linked issue update, worklog, and agent statistics.

## Completion evidence

- The selected vault displays its linked identities and marks the current browser identity before unlock.
- Device-key unlock is unavailable when the current identity does not match the vault relationship.
- Backup-password copy remains a direct vault recovery path rather than identity authentication.
- The vault bottom navigation contains no Devices & access item, while the standalone route remains functional.
- Focused unit and browser coverage, repository-owned PR checks, exact-head review, and readiness all pass.
- The implementation PR is squash-merged and Workbench completion records link the final evidence.

## Safety review

This plan contains only a public-safe authored interpretation. It contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure detail.
