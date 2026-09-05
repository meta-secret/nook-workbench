---
title: Consuming Sentinel genesis issuance
feature: rust-action-ownership
issue: issues/rust-action-ownership/sentinel-genesis.md
started_at: 2026-09-05T01:29:00.174Z
agent: codex
gizmo_id: rust-action-ownership-sentinel-genesis
---

# Task plan

## Interpreted request

Continue the authorized typestate migration with one-use Sentinel genesis issuance, preserving the existing encrypted pending-output completion boundary.

## Requirements

- A private non-Clone, non-deserializable collecting owner consumes collection and preparation; rejection returns its sole unchanged owner.
- ReadySentinelGenesis borrows the checked signer and consumes issuance. A caller cannot substitute a signer, construct a ready capability, clone it, deserialize it, or reuse it.
- Enforce ownership across the complete new session module and migrate direct consumers; preserve signed versions, tuples, duplicate/capacity/label validation and error order.
- In WASM, inspect pending output and acquire the signer before taking the session. Preserve completeness-before-signer error precedence. Once issuance begins, errors and actual Rust-future Drop consume the owner and cannot leave ReadyToFinalize.
- Preserve journal-first completion and exact issued output. An uncertain save may have persisted: never delete its journal, restore collection, or regenerate output. Start rejects pending output and journal-read errors propagate.
- Render actual Rust phase after finalization rejection. Test the existing dashboard and extend the existing invitation demo.

## Constraints and exclusions

- Start after the quorum PR is integrated because shared WASM ownership overlaps.
- Preserve the existing pending journal schema and encrypted/public output. Do not add recovery behavior, another journal, generic effect framework, automatic restart/resume, or unlock-style blanket reset.
- Cloneable wire DTOs are observations, never verified capabilities.
- The existing journal clears before final WASM result conversion; no transactional or exactly-once claim.
- Keep authored Rust paths within two non-use segments and source files below 1,000 lines. Tests stay inline with their focused Rust owner.
- Reuse existing fixtures. Combine action and rendered dashboard tests in one component test file. Keep the existing successful three-device ceremony coverage unchanged.
- No local product builds or tests; no secret logging, extra storage module, or dependency.
- Stop for whole-diff simplification if uncertain-write evidence requires a general fault framework, duplicated full ceremony fixture, or expansion beyond the cohesive budget. Do not split merely for size.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: rust-action-ownership-sentinel-genesis
- Estimated authored changed lines: 1800
- Owning modules, packages, or layers: nook-app/nook-platform/nook-auth2/src/auth/sentinel_genesis.rs, nook-app/nook-platform/nook-auth2/src/auth/sentinel_genesis/session.rs, nook-app/nook-platform/nook-auth2/src/auth/sentinel_genesis_types.rs, nook-app/nook-platform/nook-auth2/src/auth/sentinel_genesis/links.rs, nook-app/nook-platform/nook-auth2/src/lib.rs, nook-app/nook-platform/nook-core/src/vault/vault_sentinel_genesis.rs, nook-app/nook-platform/nook-core/src/vault/vault_sentinel_onboarding.rs, nook-app/nook-platform/nook-core/src/lib.rs, nook-app/nook-platform/nook-wasm/src/manager/sentinel.rs, nook-app/nook-platform/nook-wasm/src/manager/sentinel/genesis_finalization.rs, nook-app/nook-web/nook-web-shared/src/vault-app/lib/vault/sentinel-genesis.ts, nook-app/nook-web/nook-web-app/tests/unit/components/sentinel-genesis-finalization.test.ts, nook-app/nook-web/nook-web-app/e2e/demos/sentinel-invitation.demo.spec.ts
- Ownership units:
1. Capability: Consuming genesis issuance; Gizmo ID: rust-action-ownership-sentinel-genesis; Functional owner: Development core; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Domain and compile-fail ownership tests plus browser cancellation and exact-output pending completion proofs
2. Capability: Genesis phase projection; Gizmo ID: rust-action-ownership-sentinel-genesis; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Existing dashboard reflects actual Rust state and performs no automatic action; focused invitation demo retains explicit user transitions
- Public or cross-module interfaces: Collecting session becomes private and consuming; ready issuance borrows checked signer; WASM lifecycle projection and existing pending-output schema remain compatible
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 1800
- Current PR slice and acceptance evidence: Consuming genesis issuance; Acceptance evidence: Hosted domain, compile-fail, WASM cancellation and journal behavior, rendered dashboard tests, Dylint, SECURITY and readiness
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: rust-action-ownership-sentinel-genesis; Gizmo name: Consuming genesis issuance; Predecessor Gizmo ID: None; Consuming genesis issuance; Estimated authored changed lines: 1800; Acceptance evidence: Hosted domain, compile-fail, WASM cancellation and journal behavior, rendered dashboard tests, Dylint, SECURITY and readiness

## Initial plan

1. Start from current main containing the quorum integration and recheck the bounded contracts.
2. Move collecting and ready authority to the focused session owner, retaining domain validation and adapting all direct Rust consumers.
3. Consume issuance through WASM errors and actual future Drop, preserving the existing journal-first exact-output path. Add targeted deterministic tests without a general fault framework.
4. Adapt browser projection, test the real dashboard, and extend the existing invitation demo.
5. Obtain hosted validation and all required source verdicts, disposition existing findings, squash merge only after readiness, and complete Workbench records.

## Completion evidence

- Domain tests and compile-fail controls prove private construction, consuming transitions, signer binding, rejection retention, and capability non-reuse.
- Hosted browser tests prove actual Rust-future cancellation and persisted-but-reported-failed exact-output completion with Start rejection.
- Rendered tests prove no false ready action and no automatic restart or resume.
- Ownership enforcement, current-head hosted checks, source SECURITY verdict, existing feedback disposition, readiness, squash merge, and Workbench completion pass.

## Safety review

This record contains no raw prompt, transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure details.
