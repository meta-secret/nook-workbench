---
title: Resume provider-vault decision and identity access UX
feature: vault-event-log
issue: null
started_at: 2026-09-02T03:06:53Z
agent: codex
gizmo_id: provider-vault-decision-ux
supersedes: plans/vault-event-log/20260829T034558Z-provider-vault-decision-ux.md
---

# Task plan

## Interpreted request

Complete the provider-vault conflict flow as a truthful decision experience. Nook should recommend adopting the provider vault only when portable domain policy proves the current local vault has no unique value. The flow should show which locally protected identities are linked to the provider vault, distinguish eligibility from successful protection ceremonies, allow selection among prepared identities, preserve both vaults until unlock succeeds, and explain that distinct histories are not merged by this operation.

## Requirements

- Add a narrow Rust-owned projection for conservative local-vault replaceability and public identity eligibility.
- Treat unique secrets, access or recovery state, pending local events, and unique provider relationships as reasons not to replace local state.
- Project linked-and-prepared, linked-but-unavailable, and not-linked identity states without exposing protected material.
- Let the person choose an eligible prepared identity and fail closed when eligibility or the protection ceremony cannot be confirmed.
- Explain the access chain as local protector to local identity to vault key, with backup-password unlock kept semantically separate.
- Recommend the provider vault only for a proven replaceable local vault and preserve the local vault until provider unlock succeeds.
- Preserve distinct valuable vaults separately and state that this flow does not merge their event histories.
- Keep raw store identifiers in progressive technical details and provide equivalent English and Russian catalog copy.
- Add behavior-focused Rust tests, focused component and state tests, a responsive demo, and browser conflict-flow coverage.
- Complete exact-head review, hosted validation, readiness, squash merge, remote verification, and Workbench closeout.

## Constraints and exclusions

- Do not weaken device identity, vault-key, authentication-envelope, WebAuthn, encrypted-storage, or provider-write boundaries.
- Do not expose keys, private identity material, credentials, passkey results, plaintext secrets, or protected values to browser presentation, logs, URLs, or analytics.
- Do not infer replaceability, identity membership, or unlock authority in TypeScript or Svelte.
- Do not claim a passkey directly decrypts a vault or claim ceremony availability before it succeeds.
- Do not merge event logs with different store identities and do not implement a secret-level merge workflow.
- Preserve both vaults on cancellation, unavailable identity, failed protection, failed unlock, or unverified state.
- Preserve unrelated provider, vault picker, Devices and access, and authentication-control behavior.
- Keep the complete feature in one pull request; simplify the design rather than splitting if growth approaches the limit.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: provider-vault-decision-ux
- Estimated authored changed lines: 1400
- Owning modules, packages, or layers: nook-core provider conflict policy, nook-wasm typed projection, shared vault sync state and Svelte conflict UI, translation catalogs, focused Rust and web tests, responsive demo, and local-provider Playwright coverage
- Ownership units:
1. Capability: Conservative provider-vault replacement and public identity eligibility projection; Gizmo ID: provider-vault-decision-ux; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Behavior-focused Rust tests prove replaceable and non-replaceable states, closed identity eligibility, protected-material exclusion, and fail-closed projection errors.
2. Capability: Identity-aware provider-vault decision presentation and protected follow-through; Gizmo ID: provider-vault-decision-ux; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused web tests and browser evidence prove the approved hierarchy, eligible identity selection, empty and valuable local states, preservation on failure, accessible responsive behavior, and catalog-backed English and Russian copy.
3. Capability: Cryptographic and trust-boundary acceptance; Gizmo ID: provider-vault-decision-ux; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Exact-head security review confirms protector, identity, vault-key, provider-storage, failure-preservation, and protected-material boundaries remain intact.
4. Capability: Shared-branch and external delivery lifecycle; Gizmo ID: provider-vault-decision-ux; Functional owner: Gizmo Prime; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: One coherent branch and pull request pass exact-head review, hosted validation, readiness, squash merge, remote verification, and Workbench closeout.
- Public or cross-module interfaces: A narrow Rust/WASM provider-vault decision projection exposes conservative local replaceability and public local-identity eligibility states to the web conflict consumer; the selected eligible identity enters the existing or narrowly extended protected identity-selection boundary.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1400
- Current PR slice and acceptance evidence: Typed provider-vault decision assessment, identity-aware conflict UI, and protected unlock follow-through; Acceptance evidence: focused Rust, component, responsive demo, accessibility, and browser tests pass, Security accepts the exact head, repository validation and readiness succeed, and the PR is squash-merged.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: provider-vault-decision-ux; Gizmo name: Provider vault decision UX; Predecessor Gizmo ID: None; Typed provider-vault decision assessment, identity-aware conflict UI, and protected unlock follow-through; Estimated authored changed lines: 1400; Acceptance evidence: focused Rust, component, responsive demo, accessibility, and browser tests pass, Security accepts the exact head, repository validation and readiness succeed, and the PR is squash-merged.

## Initial plan

1. Implement and test the conservative Rust policy and typed WASM projection on the shared feature branch.
2. Consume that projection in the conflict state and Svelte flow, add localized copy, identity selection, preservation behavior, and focused web and browser evidence.
3. Obtain exact-head security acceptance, resolve owner-routed findings, and run the repository review and hosted validation path.
4. Run readiness, squash-merge the single PR, verify main, and publish the Workbench completion record.

## Completion evidence

- The dialog recommends the provider vault only when Rust/WASM proves the current vault replaceable.
- Public identity states show which local identity is linked and prepared without exposing protected material, and the selected identity drives the protected unlock path.
- Presentation accurately separates passkey protection, local identity, vault access, and backup-password recovery.
- Both vaults survive every cancelled, unavailable, failed, or non-replaceable path.
- Different vault histories are never automatically merged and raw identifiers are secondary technical details.
- Focused Rust and web evidence, responsive demo, browser conflict coverage, exact-head review, hosted validation, Security acceptance, and readiness pass.
- The one implementation PR is squash-merged and final Workbench records link the exact evidence.

## Safety review

This plan is a public-safe authored interpretation. It contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
