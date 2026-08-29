---
title: Clarify provider-vault replacement and identity access
feature: vault-event-log
issue: null
started_at: 2026-08-29T03:45:58Z
agent: codex
---

# Task plan

## Interpreted request

Turn the different-vault provider warning into a truthful decision flow. When the current local vault contains no unique value, Nook should recommend the provider vault without risking either side. Before authentication, the interface should explain which independently protected local identities are linked to that vault, let the person choose among eligible identities, and show that a passkey protects an identity rather than opening a vault directly. When both vaults matter, preserve them separately and state that this step does not merge their histories. Complete the bounded change through typed Rust/WASM facts, focused web presentation, security acceptance, regression coverage, exact-head delivery, and durable Workbench records.

## Requirements

- Add a narrow Rust-owned provider-conflict decision projection that classifies whether the current vault is safely replaceable and supplies reasons when it is not.
- Define replaceability conservatively from unique secrets, recovery/access state, pending local events, and unique provider relationships rather than a presentation-layer item count.
- Project which locally protected identities are linked to the provider vault and distinguish linked-and-prepared, linked-but-unavailable, and not-linked identities without exposing private material.
- Let the person select an eligible prepared identity; fail closed when eligibility cannot be verified or the protection ceremony cannot complete.
- Explain the protection chain as passkey or local protector to local identity to vault key, while keeping backup-password unlock semantically separate.
- Recommend using the provider vault when the typed assessment proves the current vault replaceable, and preserve the current vault until the provider vault successfully unlocks.
- When both vaults contain unique value, keep both discoverable and state that Nook does not merge distinct vault histories in this step.
- Keep raw store identifiers in progressive technical details instead of the primary decision hierarchy.
- Add semantically equivalent English and Russian copy and preserve generated catalog parity.
- Add behavior-focused Rust tests plus focused web unit, responsive demo, and Playwright conflict-flow coverage.
- Deliver one focused pull request through review, exact-head validation, readiness, squash merge, and Workbench closeout.

## Constraints and exclusions

- Do not weaken device-identity, vault-key, auth-envelope, WebAuthn, or encrypted-storage boundaries.
- Do not expose vault keys, private identities, credentials, passkey output, plaintext secrets, or protected material to TypeScript, rendered markup, URLs, logs, or analytics.
- Do not infer replaceability, identity membership, or unlock authority in TypeScript or Svelte.
- Do not claim a passkey is available until its browser ceremony succeeds; distinguish linked eligibility from actual ceremony completion.
- Do not merge event logs with different store identities and do not implement a content-level vault merge in this slice.
- Preserve both vaults on every error, cancellation, unavailable-identity, or failed-unlock path.
- Preserve unrelated provider, vault picker, Devices & access, and content-conflict flows.

## Change budget and PR sequence

- Estimated authored changed lines: 1400
- Owning modules, packages, or layers: nook-core vault decision policy, nook-wasm provider-conflict and identity projection, generated WASM boundary, shared Svelte vault UI, translation catalogs, Rust tests, Vitest, Playwright demo and e2e coverage
- Ownership units:
1. Capability: Typed provider-vault replaceability and local-identity access assessment; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Behavior-focused Rust tests prove conservative replaceability, identity eligibility states, protected-material exclusion, and fail-closed errors through a narrow WASM projection
2. Capability: Provider-vault decision dialog and post-selection unlock flow; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused unit and Playwright coverage prove the approved hierarchy, eligible identity selection, empty-versus-valued local states, preservation on failure, responsive behavior, accessible names, and English/Russian catalog use without domain decisions in TypeScript
3. Capability: Cryptographic and trust-boundary acceptance; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head security review confirms the passkey, local identity, vault-key, provider-storage, failure-preservation, and protected-material invariants remain intact
4. Capability: Pull-request and Workbench delivery lifecycle; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head review and repository checks pass, readiness succeeds, the PR is squash-merged, and linked Workbench worklog and agent statistics are published
- Public or cross-module interfaces: A narrow Rust/WASM provider-vault decision projection reports conservative local replaceability and public local-identity eligibility states to the web conflict consumer; selected eligible identity is accepted through an existing or narrowly extended protected-identity selection boundary
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1400
- Current PR slice and acceptance evidence: Typed provider-vault decision assessment plus approved identity-aware dialog and protected follow-through; Acceptance evidence: focused Rust, unit, demo, accessibility, responsive, and Playwright behavior pass, security accepts the exact head, complete repository validation and readiness succeed, and the PR is squash-merged
- PR slices and acceptance evidence: 1. Typed provider-vault decision assessment plus approved identity-aware dialog and protected follow-through; Acceptance evidence: focused Rust, unit, demo, accessibility, responsive, and Playwright behavior pass, security accepts the exact head, complete repository validation and readiness succeed, and the PR is squash-merged

## Initial plan

1. Freeze the exact current-main baseline and validate the complete multi-team admission graph before starting any worker attempt.
2. Implement and integrate the Rust/WASM assessment contract with behavior-focused tests, then bind the web consumer to that exact integrated frontier.
3. Implement the approved dialog, localized states, identity selection, preservation behavior, and focused unit/demo/e2e coverage.
4. Obtain development-core, web-development, and security verdicts for the exact integrated head; route findings to their owners and revalidate replacements.
5. Push the coherent change, complete repository review and validation, run readiness, squash-merge, and publish Workbench closeout records.

## Completion evidence

- The dialog recommends the provider vault only when Rust/WASM proves the current vault safely replaceable.
- Eligible local identities and their availability are projected without exposing private material, and the selected identity drives the protected unlock ceremony.
- Copy explains the passkey-to-identity-to-vault relationship and keeps backup-password recovery distinct.
- Both vaults survive cancellation, failed identity protection, failed unlock, and non-replaceable local states.
- Distinct histories are never automatically merged and raw store identifiers are not primary UI content.
- Focused Rust, unit, demo, responsive/accessibility, and browser evidence plus repository exact-head checks and security review pass.
- The implementation PR is squash-merged and Workbench completion records link the final evidence.

## Safety review

This plan contains only a public-safe authored interpretation. It contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure detail.
