---
title: Checked Sentinel participant response transitions
feature: rust-action-ownership
issue: issues/rust-action-ownership/sentinel-response.md
started_at: 2026-09-04T21:45:00Z
agent: codex
gizmo_id: rust-action-ownership-sentinel-response
---

# Task plan

## Interpreted request

Continue project-wide meaningful Rust function ownership and simple consuming typestate adoption with the Sentinel participant response action. Preserve existing security checks and wire behavior.

## Requirements

- Raw SentinelUnlockRequest checking produces a private CheckedSentinelUnlockRequest only after request validation and expected-key binding.
- The checked owner consumes itself to open the participant share and encrypt a response.
- No unchecked construction, Clone, Copy, or Deserialize for the checked capability.
- Keep raw request and response DTO wire forms unchanged.
- Move the small core signing adapters onto SigningIdentity and migrate every direct caller.
- Preserve WASM roster or verified genesis-delivery key selection and vault checks before response generation.
- Enable ownership enforcement in the new focused response module and completely adopted core adapter.
- Test invalid key, tampering, policy, participant binding, and valid encrypted quorum contribution; use compile-fail examples with passing controls.
- Execute auth2 doctests in existing hosted native verification and the focused Rust test command.

## Constraints and exclusions

- The checked type proves signature validity and binding to a supplied key, not independent membership, current authorization, freshness, or replay protection.
- Full quorum collection and finalization ownership remain later work; add no recovery or retained-session framework.
- Preserve signature bytes, encryption, error precedence, and numeric domains.
- PR 1346 owns version-domain changes; its exact patches do not change the responder body. Preserve its work through ordinary main integration.
- No public JavaScript signature or TypeScript behavior changes, new dependency, generic state machinery, or local product tests.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-sentinel-response
- Estimated authored changed lines: 1200
- Owning modules, packages, or layers: nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock.rs, nook-app/nook-platform/nook-auth2/src/auth/sentinel_unlock/response.rs, nook-app/nook-platform/nook-auth2/src/lib.rs, nook-app/nook-platform/nook-core/src/vault/vault_sentinel_unlock.rs, nook-app/nook-platform/nook-core/src/lib.rs, nook-app/nook-platform/nook-wasm/src/manager/sentinel.rs, nook-app/nook-platform/docker/rust/product.Dockerfile, nook-app/nook-platform/Taskfile.yml
- Ownership units:
1. Capability: Checked participant response graph; Gizmo ID: rust-action-ownership-sentinel-response; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Private consuming checked stage with preserved behavior and all direct callers migrated
2. Capability: Hosted auth2 phase-contract tests; Gizmo ID: rust-action-ownership-sentinel-response; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Existing hosted native and focused Rust commands execute auth2 doctests and fail on errors
- Public or cross-module interfaces: Auth2 raw request transitions to checked request and encrypted response; core SigningIdentity owns signing adapters; WASM export and wire contracts remain stable
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1200
- Current PR slice and acceptance evidence: Checked Sentinel request response transition; Acceptance evidence: Hosted behavior and compile-fail doctests, preserved WASM authorization checks, Dylint, and security review
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-sentinel-response; Gizmo name: Sentinel response typestate; Predecessor Gizmo ID: None; Checked Sentinel request response transition; Estimated authored changed lines: 1200; Acceptance evidence: Hosted behavior and compile-fail doctests, preserved WASM authorization checks, Dylint, and security review

## Initial plan

1. Implement checked request and consuming response ownership and focused tests.
2. Update signing adapters and consumers, and wire hosted doctests.
3. Obtain exact-head hosted validation and security review, repair accepted findings, and squash merge.
4. Publish completion evidence and continue remaining action graphs.

## Completion evidence

- Raw requests cannot respond; checked requests cannot be constructed unchecked or reused after consumption.
- Invalid security inputs fail and valid responses preserve the existing quorum behavior.
- Public wire contracts and authorization provenance remain unchanged.
- Hosted checks, readiness, merge, and Workbench completion are verified.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
