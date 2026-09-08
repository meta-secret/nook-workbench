---
title: Own secret input and construction actions
feature: rust-action-ownership
issue: issues/rust-action-ownership/secret-input-ownership.md
started_at: 2026-09-08T09:03:00Z
agent: codex
gizmo_id: rust-action-ownership-secret-input-ownership
---

# Task plan

## Interpreted request

Continue the project-wide Rust ownership migration with one meaningful secret
boundary. Move detached input, validation, and construction behavior behind
named domain owners so actions retain the type context needed for safe evolution.

## Requirements

- Migrate password generation, BIP-39 operations, card normalization and
  validation, secret validation/search, and YAML construction in one cohesive
  PR below the repository addition limit.
- Preserve behavior, public typed return values, validation ordering, and direct
  core/WASM contracts.
- Allow ordinary test-only free helpers under `#[cfg(test)]` according to the
  repository lint policy; enforce ownership on production code.
- Keep stateless operations simple and use typestate only where real state
  transitions exist.
- Deliver through hosted exact-head validation, readiness, remote Loom, squash
  merge, and Workbench closeout.

## Constraints and exclusions

No product builds or tests run locally. Do not change persisted schemas,
cryptographic algorithms, UI behavior, import pipelines, or framework adapter
contracts outside direct migrated callers. Do not retain compatibility free
wrappers or use blanket suppression attributes.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-secret-input-ownership
- Estimated authored changed lines: 900
- Owning modules, packages, or layers: nook-app/nook-platform/nook-core/src/secrets/password.rs, nook-app/nook-platform/nook-core/src/secrets/bip39.rs, nook-app/nook-platform/nook-core/src/secrets/credit_card.rs, nook-app/nook-platform/nook-core/src/secrets/validation.rs, nook-app/nook-platform/nook-core/src/secrets/secret_view.rs, direct nook-core and nook-wasm consumers
- Ownership units:
1. Capability: Password generation; Gizmo ID: rust-action-ownership-secret-input-ownership; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: PasswordGenerationOptions owns validation and generation while preserving PasswordResult behavior.
2. Capability: BIP-39 vocabulary and parsing; Gizmo ID: rust-action-ownership-secret-input-ownership; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Named mnemonic owners preserve wordlist, suggestion, parsing, joining, and length inference behavior.
3. Capability: Payment-card normalization and validation; Gizmo ID: rust-action-ownership-secret-input-ownership; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: CreditCardSecret owns card field normalization and Luhn/date/CVV validation without error-order changes.
4. Capability: Secret filtering and data validation; Gizmo ID: rust-action-ownership-secret-input-ownership; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Named records or request values own filtering and validation while preserving results.
5. Capability: Secret YAML construction; Gizmo ID: rust-action-ownership-secret-input-ownership; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: SecretType and SecretFormFields own YAML construction with unchanged serialization behavior.
- Public or cross-module interfaces: Associated methods replace the listed free exports and direct WASM adapter calls are migrated to those owners.
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 900
- Current PR slice and acceptance evidence: Move scoped production helpers behind domain owners and migrate direct callers; Acceptance evidence: Dylint, behavior tests, hosted validation, readiness, remote Loom, and merged-main verification.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-secret-input-ownership; Gizmo name: Own secret input and construction actions; Predecessor Gizmo ID: None; Move scoped production helpers behind domain owners and migrate direct callers; Estimated authored changed lines: 900; Acceptance evidence: Dylint, behavior tests, hosted validation, readiness, remote Loom, and merged-main verification.

## Initial plan

1. Inventory scoped functions and every direct caller and re-export.
2. Move operations onto meaningful domain types or a named request owner.
3. Migrate callers and preserve focused tests; keep test-only helpers allowed.
4. Run formatting, diff, and size hygiene, then push for hosted validation.
5. Resolve review findings, verify readiness and remote Loom, squash merge, and
   publish completion records.

## Completion evidence

A merged PR with passing hosted validation and readiness, successful remote Loom
verification for the exact final head, origin/main at the squash merge, and a
Workbench worklog/statistics record containing the final evidence.

## Safety review

This record contains no secrets, private data, raw logs, or credentials.
